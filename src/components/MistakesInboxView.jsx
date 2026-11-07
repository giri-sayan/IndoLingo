import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, RotateCcw, X, Volume2, Heart, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';
import Mascot from './Mascot';

export default function MistakesInboxView({
  selectedLanguage,
  onAddGems,
  onPracticeHeart,
  onNavigateLearn,
  theme = 'dark'
}) {
  const isDark = theme === 'dark';

  const [mistakes, setMistakes] = useState(() => {
    try {
      const raw = localStorage.getItem('bhasha_srs_mistakes');
      const list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list : [];
    } catch {
      return [];
    }
  });

  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong'
  const [clearedCount, setClearedCount] = useState(0);
  const [reviewFinished, setReviewFinished] = useState(false);

  // Filter mistakes relevant to active language (or pan-language)
  const activeMistakes = mistakes.filter(m => !m.langId || m.langId === selectedLanguage?.id);

  const handleStartReview = () => {
    if (activeMistakes.length === 0) return;
    sounds.playPop();
    setIsReviewing(true);
    setReviewIdx(0);
    setSelectedAnswer(null);
    setFeedback(null);
    setClearedCount(0);
    setReviewFinished(false);
  };

  const currentMistake = activeMistakes[reviewIdx];

  // Options for the current mistake
  const options = React.useMemo(() => {
    if (!currentMistake) return [];

    const correctText = currentMistake.answer || currentMistake.nativeWord;
    const distractors = [
      selectedLanguage?.greeting ? selectedLanguage.greeting.split('(')[0].trim() : 'नमस्ते',
      'धन्यवाद (Thank you)',
      'हाँ भाई (Yes brother)',
      'अलविदा (Goodbye)'
    ].filter(d => d !== correctText).slice(0, 3);

    return [
      { text: correctText, correct: true },
      ...distractors.map(d => ({ text: d, correct: false }))
    ];
  }, [currentMistake, selectedLanguage]);

  const handleSelectOption = (opt) => {
    if (feedback) return;
    sounds.playPop();
    setSelectedAnswer(opt);

    if (opt.correct) {
      sounds.playCorrect();
      setFeedback('correct');
      setClearedCount(prev => prev + 1);

      // Remove this cleared mistake from localStorage
      try {
        const raw = localStorage.getItem('bhasha_srs_mistakes');
        const list = raw ? JSON.parse(raw) : [];
        const nextList = list.filter(item => item.id !== currentMistake.id && item.key !== currentMistake.key);
        localStorage.setItem('bhasha_srs_mistakes', JSON.stringify(nextList));
        setMistakes(nextList);
      } catch {}
    } else {
      sounds.playWrong();
      setFeedback('wrong');
    }

    setTimeout(() => {
      if (reviewIdx + 1 < activeMistakes.length) {
        setReviewIdx(prev => prev + 1);
        setSelectedAnswer(null);
        setFeedback(null);
      } else {
        sounds.playFanfare();
        confetti({ particleCount: 110, spread: 70, origin: { y: 0.6 } });
        setReviewFinished(true);
        onPracticeHeart?.();
        onAddGems?.(15);
      }
    }, 1100);
  };

  // Review Session Screen
  if (isReviewing && currentMistake) {
    return (
      <div className={`fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-6 select-none ${
        isDark ? 'bg-[#131f24] text-white' : 'bg-white text-slate-800'
      }`}>
        {/* Review Top Header */}
        <div className="max-w-2xl w-full mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => setIsReviewing(false)}
            className="p-2 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          <div className="flex-1 h-3.5 bg-slate-200 dark:bg-[#20333d] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#58cc02] transition-all duration-300 rounded-full"
              style={{ width: `${((reviewIdx) / activeMistakes.length) * 100}%` }}
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs font-black text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>+1 Heart</span>
          </div>
        </div>

        {/* Review Question Body */}
        <div className="max-w-md w-full mx-auto flex-1 flex flex-col justify-center items-center text-center py-6">
          {!reviewFinished ? (
            <div className="space-y-6 w-full animate-in zoom-in-95 duration-200">
              <span className="text-xs font-black uppercase tracking-widest text-[#ff4b4b] bg-rose-500/10 px-3 py-1 rounded-full">
                Reviewing Previous Mistake
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {currentMistake.prompt || 'What is the correct translation?'}
              </h2>

              {currentMistake.nativeWord && (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-black text-[#1cb0f6]">
                    {currentMistake.nativeWord}
                  </span>
                  <button
                    onClick={() => sounds.speak(currentMistake.nativeWord, selectedLanguage?.code || 'hi-IN')}
                    className="p-2 rounded-xl bg-[#1cb0f6]/10 text-[#1cb0f6] hover:bg-[#1cb0f6] hover:text-white transition cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* 4 Choices */}
              <div className="space-y-3 pt-2 text-left">
                {options.map((opt, i) => {
                  let btnStyle = isDark
                    ? 'bg-[#18262d] border-[#38464f] text-white hover:border-[#1cb0f6]'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-emerald-400';

                  if (selectedAnswer === opt) {
                    if (opt.correct) {
                      btnStyle = 'bg-[#58cc02] border-[#58cc02] text-white';
                    } else {
                      btnStyle = 'bg-[#ff4b4b] border-[#ff4b4b] text-white';
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(opt)}
                      className={`w-full p-4 rounded-2xl border-2 font-bold text-base transition shadow-sm active:translate-y-1 cursor-pointer flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt.text}</span>
                      {selectedAnswer === opt && opt.correct && (
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              <Mascot mood="cheering" size={130} outfit="royal" />
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#58cc02] bg-[#58cc02]/10 px-3 py-1 rounded-full">
                  Inbox Clear!
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                  All Mistakes Resolved!
                </h2>
                <p className="text-sm font-semibold text-slate-400 mt-1">
                  You cleared {clearedCount} mistakes, restored +1 Heart, and earned +15 XP!
                </p>
              </div>

              <button
                onClick={() => setIsReviewing(false)}
                className="w-full py-4 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] text-white font-black text-sm uppercase tracking-wider shadow-[0_4px_0_#46a302] cursor-pointer"
              >
                BACK TO INBOX
              </button>
            </div>
          )}
        </div>

        <div className="h-6" />
      </div>
    );
  }

  // Mistakes Inbox Main Dashboard (Duolingo Style)
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 select-none">
      {/* Duolingo Mistakes Inbox Header */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur flex items-center gap-1.5 w-fit">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Duolingo Practice Hub</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              Mistakes Inbox
            </h1>
            <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1 max-w-xl">
              Review mistakes from your recent lessons to reinforce your memory and refill hearts for free!
            </p>
          </div>

          <div className="shrink-0 hidden sm:block">
            <Mascot mood={activeMistakes.length > 0 ? 'thinking' : 'cheering'} size={85} />
          </div>
        </div>
      </div>

      {/* Main Inbox Card */}
      {activeMistakes.length > 0 ? (
        <div className={`rounded-3xl p-6 sm:p-8 border-2 space-y-6 ${
          isDark ? 'bg-[#18262d] border-[#38464f]' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-[#2b3e48]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border-2 border-rose-500/30 flex items-center justify-center text-rose-500 text-2xl font-black shrink-0">
                ⚠️
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  {activeMistakes.length} {activeMistakes.length === 1 ? 'Mistake' : 'Mistakes'} to Review
                </h3>
                <p className="text-xs font-semibold text-slate-400 mt-0.5">
                  Clear these questions to regain full confidence and refill +1 Heart!
                </p>
              </div>
            </div>

            <button
              onClick={handleStartReview}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] text-white font-black text-xs uppercase tracking-wider shadow-[0_4px_0_#46a302] active:translate-y-1 transition cursor-pointer flex items-center justify-center gap-2 shrink-0"
            >
              <RotateCcw className="w-4 h-4" />
              <span>CLEAR MISTAKES (+15 XP)</span>
            </button>
          </div>

          {/* List of Captured Mistakes */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Questions in your queue:
            </h4>

            {activeMistakes.map((m, idx) => (
              <div
                key={m.id || idx}
                className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                  isDark ? 'bg-[#20333d] border-[#2b3e48]' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <p className="text-xs font-bold text-slate-400">
                    {m.prompt || 'Vocabulary question'}
                  </p>
                  <p className="text-base font-black text-slate-900 dark:text-white mt-0.5">
                    {m.nativeWord || m.answer}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => sounds.speak(m.nativeWord || m.answer, selectedLanguage?.code || 'hi-IN')}
                    className="p-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:text-white transition cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Zero-State: Inbox is completely empty */
        <div className={`rounded-3xl p-8 sm:p-12 border-2 text-center space-y-5 ${
          isDark ? 'bg-[#18262d] border-[#38464f]' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex justify-center">
            <Mascot mood="happy" size={120} />
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#58cc02]/20 text-[#58cc02] text-xs font-black mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>All Clear!</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Your Mistakes Inbox is Empty!
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold max-w-md mx-auto mt-1 leading-relaxed">
              Great job! Whenever you make a mistake in any lesson, it will appear here so you can review and practice it anytime.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            {onNavigateLearn && (
              <button
                onClick={onNavigateLearn}
                className="px-8 py-3.5 rounded-2xl bg-[#1cb0f6] hover:bg-[#1899d6] text-white font-black text-xs uppercase tracking-wider shadow-[0_4px_0_#127aa8] active:translate-y-1 transition cursor-pointer flex items-center gap-2"
              >
                <span>CONTINUE LEARNING PATH</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
