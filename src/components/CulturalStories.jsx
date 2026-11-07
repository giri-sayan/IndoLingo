import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Volume2, CheckCircle2, X, Play, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import Mascot from './Mascot';
import { CULTURAL_STORIES } from '../data/languages';
import { sounds } from '../utils/audio';

export default function CulturalStories({ onEarnChaiPoints, theme = 'dark', onCloseStory }) {
  const isDark = theme === 'dark';
  const [activeStory, setActiveStory] = useState(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionStatus, setQuestionStatus] = useState('idle'); // 'idle' | 'correct' | 'wrong'
  const [storyCompleted, setStoryCompleted] = useState(false);
  const messagesEndRef = useRef(null);

  const [readStories, setReadStories] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('bhasha_read_stories') || '{}');
    } catch {
      return {};
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeStory) {
      scrollToBottom();
    }
  }, [lineIndex, activeStory]);

  const handleStartStory = (story) => {
    sounds.playPop();
    setActiveStory(story);
    setLineIndex(0);
    setSelectedOption(null);
    setQuestionStatus('idle');
    setStoryCompleted(false);

    // Speak initial line if dialogue
    const firstLine = story.lines[0];
    if (firstLine && firstLine.type === 'dialogue') {
      setTimeout(() => {
        sounds.speak(firstLine.text, story.langCode || 'hi-IN');
      }, 400);
    }
  };

  const handleCloseActiveStory = useCallback(() => {
    sounds.playPop();
    setActiveStory(null);
    setLineIndex(0);
    setSelectedOption(null);
    setQuestionStatus('idle');
    setStoryCompleted(false);
    if (onCloseStory) onCloseStory();
  }, [onCloseStory]);

  const currentItem = activeStory ? activeStory.lines[lineIndex] : null;
  const isQuestion = currentItem && currentItem.type === 'question';

  const handleContinue = useCallback(() => {
    if (!activeStory) return;

    sounds.playPop();

    if (lineIndex + 1 < activeStory.lines.length) {
      const nextIdx = lineIndex + 1;
      setLineIndex(nextIdx);
      setSelectedOption(null);
      setQuestionStatus('idle');

      const nextItem = activeStory.lines[nextIdx];
      if (nextItem && nextItem.type === 'dialogue') {
        sounds.speak(nextItem.text, activeStory.langCode || 'hi-IN');
      }
    } else {
      // Completed Story!
      sounds.playFanfare();
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
      setStoryCompleted(true);

      if (!readStories[activeStory.id]) {
        const updated = { ...readStories, [activeStory.id]: true };
        setReadStories(updated);
        localStorage.setItem('bhasha_read_stories', JSON.stringify(updated));
        onEarnChaiPoints?.(activeStory.xpReward || 15);
      }
    }
  }, [activeStory, lineIndex, readStories, onEarnChaiPoints]);

  const handleCheckQuestion = useCallback(() => {
    if (!selectedOption || !isQuestion) return;

    if (selectedOption.correct) {
      sounds.playCorrect();
      setQuestionStatus('correct');
    } else {
      sounds.playWrong();
      setQuestionStatus('wrong');
    }
  }, [selectedOption, isQuestion]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeStory) return;

      if (e.key === 'Escape') {
        handleCloseActiveStory();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (storyCompleted) {
          handleCloseActiveStory();
        } else if (isQuestion) {
          if (questionStatus === 'correct') {
            handleContinue();
          } else if (questionStatus === 'idle' && selectedOption) {
            handleCheckQuestion();
          }
        } else {
          handleContinue();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStory, storyCompleted, isQuestion, questionStatus, selectedOption, handleContinue, handleCloseActiveStory, handleCheckQuestion]);

  const progressPercent = activeStory 
    ? Math.min(100, ((lineIndex + 1) / activeStory.lines.length) * 100) 
    : 0;

  // Active Interactive Story Modal / View
  if (activeStory) {
    return (
      <div className={`fixed inset-0 z-50 flex flex-col justify-between select-none ${
        isDark ? 'bg-[#131f24] text-white' : 'bg-white text-slate-800'
      }`}>
        {/* Top Story Header & Progress Bar */}
        <div className={`w-full max-w-2xl mx-auto px-4 py-4 flex items-center gap-4 ${
          isDark ? 'border-b border-[#2b3e48]' : 'border-b border-slate-100'
        }`}>
          <button
            onClick={handleCloseActiveStory}
            className={`p-2 rounded-2xl transition cursor-pointer ${
              isDark ? 'text-slate-400 hover:text-white hover:bg-[#20333d]' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
            }`}
            title="Exit Story"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          <div className="flex-1 h-3.5 bg-slate-200 dark:bg-[#20333d] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#58cc02] transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs font-black text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-xl">
            <span>+{activeStory.xpReward || 15} XP</span>
          </div>
        </div>

        {/* Story Scroll Content Area */}
        <div className="flex-1 max-w-2xl w-full mx-auto px-4 py-6 overflow-y-auto space-y-6">
          {/* Story Title & Cover */}
          <div className="text-center pb-4 border-b border-slate-100 dark:border-[#2b3e48]">
            <span className="text-4xl sm:text-5xl inline-block drop-shadow-md">
              {activeStory.imageEmoji}
            </span>
            <h1 className="text-xl sm:text-2xl font-black mt-2 text-slate-900 dark:text-white">
              {activeStory.title}
            </h1>
            <p className="text-xs font-bold text-slate-400 mt-0.5">
              {activeStory.lang}
            </p>
          </div>

          {/* Lines Revealed So Far */}
          {activeStory.lines.slice(0, lineIndex + 1).map((item, idx) => {
            const isLatest = idx === lineIndex;

            if (item.type === 'dialogue') {
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                    isLatest ? 'opacity-100' : 'opacity-90'
                  }`}
                >
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-[#20333d] border border-slate-200 dark:border-[#2b3e48] flex items-center justify-center text-xl shrink-0">
                    {item.avatar || '👤'}
                  </div>

                  <div className="flex-1 space-y-1">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                      {item.speaker}
                    </span>

                    <div className={`p-4 rounded-3xl rounded-tl-none border-2 transition-all flex items-start justify-between gap-3 ${
                      isDark 
                        ? 'bg-[#18262d] border-[#38464f]' 
                        : 'bg-white border-slate-200 shadow-sm'
                    }`}>
                      <div>
                        <p className="text-lg sm:text-xl font-bold leading-relaxed text-slate-900 dark:text-white">
                          {item.text}
                        </p>
                        {item.roman && (
                          <p className="text-xs font-semibold text-[#1cb0f6] mt-0.5">
                            {item.roman}
                          </p>
                        )}
                        {item.english && (
                          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">
                            "{item.english}"
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => sounds.speak(item.text, activeStory.langCode || 'hi-IN')}
                        className="p-2.5 rounded-2xl bg-[#1cb0f6]/10 text-[#1cb0f6] hover:bg-[#1cb0f6] hover:text-white transition shrink-0 cursor-pointer"
                        title="Listen line"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            if (item.type === 'question' && idx === lineIndex) {
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-5 sm:p-6 border-2 border-indigo-500/50 bg-indigo-500/5 space-y-4 animate-in zoom-in-95 duration-200"
                >
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-black uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Story Checkpoint</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    {item.prompt}
                  </h3>

                  <div className="space-y-2.5 pt-1">
                    {item.options.map((opt, optIdx) => {
                      const isSelected = selectedOption === opt;
                      let btnStyle = isDark 
                        ? 'bg-[#18262d] border-[#38464f] hover:border-slate-400 text-slate-200' 
                        : 'bg-white border-slate-200 hover:border-slate-400 text-slate-800';

                      if (isSelected) {
                        btnStyle = 'border-[#1cb0f6] bg-[#1cb0f6]/10 text-[#1cb0f6] ring-2 ring-[#1cb0f6]/30';
                      }

                      if (questionStatus === 'correct' && opt.correct) {
                        btnStyle = 'border-[#58cc02] bg-[#58cc02]/20 text-[#58cc02] font-black';
                      } else if (questionStatus === 'wrong' && isSelected) {
                        btnStyle = 'border-[#ff4b4b] bg-[#ff4b4b]/20 text-[#ff4b4b]';
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => {
                            if (questionStatus === 'correct') return;
                            sounds.playPop();
                            setSelectedOption(opt);
                            setQuestionStatus('idle');
                          }}
                          className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-sm sm:text-base transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt.text}</span>
                          {questionStatus === 'correct' && opt.correct && (
                            <CheckCircle2 className="w-5 h-5 text-[#58cc02]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return null;
          })}

          {storyCompleted && (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-300">
              <div className="flex justify-center">
                <Mascot mood="cheering" size={130} outfit="royal" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#58cc02] bg-[#58cc02]/10 px-3 py-1 rounded-full">
                  Story Complete!
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
                  You finished the story!
                </h2>
                <p className="text-sm font-bold text-slate-400 mt-1">
                  You earned +{activeStory.xpReward || 15} XP and learned key cultural idioms!
                </p>
              </div>

              <div className="inline-block p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-black">
                ✨ Key Desi Phrase: {activeStory.desiWord}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Bottom Duolingo Feedback & Action Bar */}
        <div className={`w-full border-t p-4 sm:p-5 ${
          questionStatus === 'correct'
            ? isDark ? 'bg-[#18262d] border-[#58cc02]/40' : 'bg-[#d7ffb8] border-[#58cc02]'
            : questionStatus === 'wrong'
            ? isDark ? 'bg-[#2b181e] border-[#ff4b4b]/40' : 'bg-[#ffdfe0] border-[#ff4b4b]'
            : isDark ? 'bg-[#18262d] border-[#2b3e48]' : 'bg-white border-slate-200'
        }`}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
            {questionStatus === 'correct' && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#58cc02] text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-[#58cc02]">
                    Nicely done! शाबाश!
                  </h4>
                  {currentItem?.explanation && (
                    <p className="text-xs font-bold text-slate-400 line-clamp-1">
                      {currentItem.explanation}
                    </p>
                  )}
                </div>
              </div>
            )}

            {questionStatus === 'wrong' && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ff4b4b] text-white flex items-center justify-center shrink-0">
                  <X className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-[#ff4b4b]">
                    Try again!
                  </h4>
                  <p className="text-xs font-bold text-slate-400">
                    Pick the best cultural meaning to continue.
                  </p>
                </div>
              </div>
            )}

            {questionStatus === 'idle' && !storyCompleted && (
              <div className="hidden sm:block text-xs font-bold text-slate-400">
                Press <strong>Enter</strong> to continue
              </div>
            )}

            {/* Main Action Button */}
            <div className="w-full sm:w-auto ml-auto">
              {storyCompleted ? (
                <button
                  onClick={handleCloseActiveStory}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] text-white font-black text-sm uppercase tracking-wider shadow-[0_4px_0_#46a302] active:translate-y-1 transition cursor-pointer"
                >
                  CLAIM XP & FINISH
                </button>
              ) : isQuestion && questionStatus === 'idle' ? (
                <button
                  onClick={handleCheckQuestion}
                  disabled={!selectedOption}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] text-white font-black text-sm uppercase tracking-wider shadow-[0_4px_0_#46a302] active:translate-y-1 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  CHECK
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider shadow-[0_4px_0_#46a302] active:translate-y-1 transition cursor-pointer ${
                    questionStatus === 'wrong'
                      ? 'bg-[#ff4b4b] hover:bg-[#e03b3b] shadow-[0_4px_0_#c42e2e] text-white'
                      : 'bg-[#58cc02] hover:bg-[#46a302] text-white'
                  }`}
                >
                  CONTINUE
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Story Shelf / Bookshelf View (Duolingo Stories Main Tab)
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 select-none">
      {/* Duolingo Stories Banner */}
      <div className="bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#1cb0f6] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur flex items-center gap-1.5 w-fit">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Duolingo Stories • Chai Edition</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              Indian Cultural Stories
            </h1>
            <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1 max-w-xl">
              Listen to interactive dialogues, answer story questions, and learn the genuine street expressions of India!
            </p>
          </div>
          <div className="shrink-0 hidden sm:block">
            <Mascot mood="happy" size={85} outfit="chaiwala" />
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CULTURAL_STORIES.map((story) => {
          const isRead = !!readStories[story.id];

          return (
            <div
              key={story.id}
              className={`rounded-3xl p-5 border-2 transition-all flex flex-col justify-between group ${
                isDark 
                  ? 'bg-[#18262d] border-[#38464f] hover:border-[#1cb0f6]' 
                  : 'bg-white border-slate-200 hover:border-emerald-400 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-3 rounded-2xl bg-slate-100 dark:bg-[#20333d] border border-slate-200 dark:border-[#2b3e48]">
                    {story.imageEmoji}
                  </span>

                  <span className={`text-xs font-black px-2.5 py-1 rounded-full flex items-center gap-1 ${
                    isRead 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-amber-400/20 text-amber-400'
                  }`}>
                    {isRead ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <span>+{story.xpReward || 15} XP</span>
                    )}
                  </span>
                </div>

                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  {story.lang}
                </span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#1cb0f6] transition mt-0.5">
                  {story.title}
                </h3>
                <p className="text-xs text-slate-400 font-semibold mt-1 leading-relaxed line-clamp-2">
                  {story.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-[#2b3e48]">
                <button
                  onClick={() => handleStartStory(story)}
                  className={`w-full py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer ${
                    isRead
                      ? 'bg-slate-200 dark:bg-[#20333d] text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-[#283f4c]'
                      : 'bg-[#58cc02] hover:bg-[#46a302] text-white shadow-[0_3px_0_#46a302] active:translate-y-1'
                  }`}
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{isRead ? 'REREAD STORY' : 'START STORY'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
