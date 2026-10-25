import React, { useState, useEffect, useCallback } from 'react';
import { X, Heart, Volume2, CheckCircle2, XCircle, ArrowRight, Turtle } from 'lucide-react';
import confetti from 'canvas-confetti';
import Mascot from './Mascot';
import { sounds } from '../utils/audio';

export default function LessonModal({
  isOpen,
  lesson,
  _unit,
  selectedLanguage,
  hearts,
  onDeductHeart,
  onCompleteLesson,
  onClose,
  showTransliteration,
  equippedOutfit = 'default',
  theme = 'light',
  gems = 0,
  onRefillHearts,
  onOpenShop,
  onPracticeHeart
}) {
  const isDark = theme === 'dark';
  const [questionsList, setQuestionsList] = useState(lesson?.questions || []);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isReviewStage, setIsReviewStage] = useState(false);
  
  // Interaction states
  const [selectedOption, setSelectedOption] = useState(null); // for multiple-choice & fill-blank & listening
  const [selectedSentenceWords, setSelectedSentenceWords] = useState([]); // for sentence-builder
  const [matchedPairs, setMatchedPairs] = useState([]); // for match-pairs
  const [selectedPairLeft, setSelectedPairLeft] = useState(null);
  const [selectedPairRight, setSelectedPairRight] = useState(null);
  const [pairError, setPairError] = useState(false);

  // Status & Feedback
  const [status, setStatus] = useState(hearts <= 0 ? 'failed' : 'idle'); // 'idle' | 'correct' | 'wrong' | 'completed' | 'failed'
  const [_correctCount, setCorrectCount] = useState(0);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [_combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);

  // Reset or initialize question queue on lesson change
  useEffect(() => {
    if (lesson?.questions) {
      setQuestionsList([...lesson.questions]);
      setCurrentIdx(0);
      setIsReviewStage(false);
      resetQuestionState();
      if (hearts <= 0) {
        setStatus('failed');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson, isOpen]);

  const baseQuestionsCount = lesson?.questions?.length || 1;
  const currentQ = questionsList[currentIdx];
  const progressPercent = questionsList.length > 0 ? ((currentIdx) / questionsList.length) * 100 : 0;

  // Speak prompt on change if audio exists
  useEffect(() => {
    if (isOpen && currentQ?.audioText) {
      sounds.speak(currentQ.audioText, selectedLanguage?.code);
    }
  }, [isOpen, currentIdx, currentQ, selectedLanguage?.code]);

  // Clean state when moving to next question
  const resetQuestionState = () => {
    setSelectedOption(null);
    setSelectedSentenceWords([]);
    setMatchedPairs([]);
    setSelectedPairLeft(null);
    setSelectedPairRight(null);
    setPairError(false);
    setStatus('idle');
  };

  // Check answers
  const handleCheckAnswer = useCallback(() => {
    if (!currentQ || status !== 'idle') return;
    let isCorrect = false;

    if (currentQ.type === 'multiple-choice' || currentQ.type === 'listening' || currentQ.type === 'fill-blank') {
      if (selectedOption?.correct) {
        isCorrect = true;
      }
    } else if (currentQ.type === 'sentence-builder') {
      const built = selectedSentenceWords.join(' ').trim();
      const target = currentQ.correctSequence.join(' ').trim();
      if (built === target) {
        isCorrect = true;
      }
    } else if (currentQ.type === 'match-pairs') {
      if (matchedPairs.length === currentQ.pairs.length) {
        isCorrect = true;
      }
    }

    if (isCorrect) {
      sounds.playCorrect();
      setStatus('correct');
      setCorrectCount(prev => prev + 1);
      setCombo(prev => {
        const next = prev + 1;
        setMaxCombo(m => Math.max(m, next));
        return next;
      });
    } else {
      sounds.playWrong();
      setStatus('wrong');
      setCombo(0);
      onDeductHeart();
      // Queue question for review at the end of the lesson
      setQuestionsList(prev => [...prev, { ...currentQ, isReview: true }]);

      // Record mistake into Spaced Repetition (SM-2) Mistake Dojo
      try {
        const raw = localStorage.getItem('bhasha_srs_mistakes');
        const list = raw ? JSON.parse(raw) : [];
        const itemKey = currentQ.audioText || currentQ.prompt;
        if (!list.some(item => item.key === itemKey)) {
          const correctAns = currentQ.options?.find(o => o.correct)?.text || currentQ.targetSentence || currentQ.audioText || currentQ.prompt;
          list.push({
            id: 'srs_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
            key: itemKey,
            prompt: currentQ.prompt,
            answer: correctAns,
            nativeWord: currentQ.audioText || (correctAns.includes('(') ? correctAns.split('(')[0].trim() : correctAns),
            roman: currentQ.targetRoman || (correctAns.includes('(') ? correctAns.split('(')[1].replace(')', '').trim() : ''),
            meaning: currentQ.explanation || currentQ.prompt,
            langId: selectedLanguage?.id || 'tamil',
            langCode: selectedLanguage?.code || 'ta-IN',
            easeFactor: 2.5,
            interval: 1,
            reps: 0,
            dueDate: Date.now()
          });
          localStorage.setItem('bhasha_srs_mistakes', JSON.stringify(list));
        }
      } catch {}
    }
  }, [currentQ, status, selectedOption, selectedSentenceWords, matchedPairs, onDeductHeart, selectedLanguage]);

  // Move to next question or complete lesson
  const handleContinue = useCallback(() => {
    if (hearts <= 0) {
      setStatus('failed');
      return;
    }
    sounds.playPop();
    if (currentIdx + 1 < questionsList.length) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      if (nextIdx >= baseQuestionsCount) {
        setIsReviewStage(true);
      }
      resetQuestionState();
    } else {
      // Completed lesson!
      sounds.playFanfare();
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
      setStatus('completed');
      const isFlawless = questionsList.length === baseQuestionsCount;
      if (isFlawless) {
        const prev = Number(localStorage.getItem('bhasha_flawless') || 0);
        localStorage.setItem('bhasha_flawless', prev + 1);
      }
      onCompleteLesson(lesson.id, lesson.xp || 20, isFlawless);
    }
  }, [hearts, currentIdx, questionsList.length, baseQuestionsCount, lesson, onCompleteLesson]);

  // Keyboard Shortcuts: 1-9 for choices, Enter for Check / Continue
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      // Don't intercept if typing in an input
      if (e.key === 'Escape') {
        e.preventDefault();
        setShowQuitConfirm(prev => !prev);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (showQuitConfirm) {
          setShowQuitConfirm(false);
          return;
        }
        if (status === 'idle') {
          // Check answer if valid option selected
          if (
            (currentQ?.type === 'multiple-choice' || currentQ?.type === 'listening' || currentQ?.type === 'fill-blank') && selectedOption
          ) {
            handleCheckAnswer();
          } else if (currentQ?.type === 'sentence-builder' && selectedSentenceWords.length > 0) {
            handleCheckAnswer();
          } else if (currentQ?.type === 'match-pairs' && matchedPairs.length === currentQ.pairs.length) {
            handleCheckAnswer();
          }
        } else if (status === 'correct' || status === 'wrong') {
          handleContinue();
        }
      } else if (status === 'idle' && (currentQ?.type === 'multiple-choice' || currentQ?.type === 'listening' || currentQ?.type === 'fill-blank')) {
        const num = parseInt(e.key, 10);
        if (!isNaN(num) && num >= 1 && num <= (currentQ.options?.length || 0)) {
          e.preventDefault();
          sounds.playPop();
          setSelectedOption(currentQ.options[num - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, status, currentQ, selectedOption, selectedSentenceWords, matchedPairs, showQuitConfirm, handleCheckAnswer, handleContinue]);

  if (!isOpen || !lesson) return null;

  // Handle Match Pairs tap
  const handlePairClick = (side, item) => {
    if (pairError) return;
    sounds.playPop();
    if (side === 'left') {
      if (matchedPairs.includes(item.left)) return;
      setSelectedPairLeft(item);
      if (selectedPairRight) {
        verifyPairMatch(item, selectedPairRight);
      }
    } else {
      const alreadyMatched = matchedPairs.some(
        key => currentQ.pairs.find(p => p.left === key)?.right === item.right
      );
      if (alreadyMatched) return;
      setSelectedPairRight(item);
      if (selectedPairLeft) {
        verifyPairMatch(selectedPairLeft, item);
      }
    }
  };

  const verifyPairMatch = (leftItem, rightItem) => {
    const isMatching = currentQ.pairs.some(
      p => p.left === leftItem.left && p.right === rightItem.right
    );

    if (isMatching) {
      const nextMatched = [...matchedPairs, leftItem.left];
      setMatchedPairs(nextMatched);
      setSelectedPairLeft(null);
      setSelectedPairRight(null);
      sounds.playPop();

      if (nextMatched.length === currentQ.pairs.length) {
        sounds.playCorrect();
        setStatus('correct');
        setCorrectCount(prev => prev + 1);
        setCombo(prev => {
          const next = prev + 1;
          setMaxCombo(m => Math.max(m, next));
          return next;
        });
      }
    } else {
      sounds.playWrong();
      setCombo(0);
      setPairError(true);
      setTimeout(() => {
        setSelectedPairLeft(null);
        setSelectedPairRight(null);
        setPairError(false);
      }, 500);
    }
  };

  const isCheckDisabled = () => {
    if (status !== 'idle') return true;
    if (currentQ?.type === 'multiple-choice' || currentQ?.type === 'listening' || currentQ?.type === 'fill-blank') {
      return !selectedOption;
    }
    if (currentQ?.type === 'sentence-builder') {
      return selectedSentenceWords.length === 0;
    }
    if (currentQ?.type === 'match-pairs') {
      return matchedPairs.length !== currentQ.pairs.length;
    }
    return true;
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 select-none ${
      isDark ? 'bg-[#131f24] text-white' : 'bg-white text-slate-800'
    }`}>
      
      {/* Top Header Bar */}
      <div className={`max-w-4xl mx-auto w-full px-4 sm:px-8 py-4 flex items-center justify-between gap-4 border-b ${
        isDark ? 'border-slate-800' : 'border-slate-100'
      }`}>
        {/* Exit Button */}
        <button
          onClick={() => {
            sounds.playPop();
            setShowQuitConfirm(true);
          }}
          className={`p-2 rounded-2xl transition cursor-pointer ${
            isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
          }`}
          title="Quit Lesson"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>

        {/* Duolingo Progress Bar with Gloss Sheen */}
        <div className={`flex-1 h-4 rounded-full overflow-hidden p-0.5 relative ${
          isDark ? 'bg-slate-800' : 'bg-slate-200'
        }`}>
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-300 relative shadow-sm"
            style={{ width: `${status === 'completed' ? 100 : progressPercent}%` }}
          >
            <div className="absolute top-0.5 right-1 left-1 h-1 bg-white/40 rounded-full progress-gloss" />
          </div>
        </div>

        {/* Hearts Indicator */}
        <div className={`flex items-center gap-1.5 font-black text-rose-500 px-3 py-1.5 rounded-2xl border ${
          isDark ? 'bg-rose-950/30 border-rose-900/40' : 'bg-rose-50 border-rose-200'
        }`}>
          <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse" />
          <span className="text-sm font-black">
            {hearts}
          </span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-8 py-6 flex flex-col justify-center">

        {/* COMPLETED SUCCESS SCREEN */}
        {status === 'completed' && (
          <div className="text-center space-y-6 py-8 animate-in zoom-in-95 duration-300">
            <div className="flex justify-center">
              <Mascot mood="cheering" size={135} outfit={equippedOutfit} />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
                शाबाश! / Excellent Work!
              </span>
              <h2 className="text-3xl font-black text-slate-800 dark:text-white mt-3">
                Lesson Completed!
              </h2>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mt-1">
                You’re mastering {selectedLanguage.name} step by step.
              </p>
            </div>

            {/* Stats Summary Cards */}
            {questionsList.length === baseQuestionsCount && (
              <div className="flex justify-center mb-2 animate-bounce">
                <span className="text-sm font-black uppercase tracking-widest text-amber-500 bg-amber-100 dark:bg-amber-900/40 border-2 border-amber-400 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                  ✨ NO MISTAKES! ✨
                </span>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto sm:grid-cols-4">
              <div className={`border-2 rounded-2xl p-4 col-span-2 sm:col-span-1 flex flex-col justify-center ${
                isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-amber-50 border-amber-200'
              }`}>
                <p className="text-xs font-black text-amber-500 uppercase">Total XP</p>
                <div className="mt-1">
                  <p className="text-2xl font-black text-amber-500">
                    +{lesson.xp + (questionsList.length === baseQuestionsCount ? 5 : 0)}
                  </p>
                  {questionsList.length === baseQuestionsCount && (
                    <p className="text-[10px] font-bold text-amber-600 mt-0.5 whitespace-nowrap">Perfect Bonus: +5</p>
                  )}
                </div>
              </div>
              <div className={`border-2 rounded-2xl p-4 col-span-1 ${
                isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-emerald-50 border-emerald-200'
              }`}>
                <p className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase">Accuracy</p>
                <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                  {Math.round((baseQuestionsCount / Math.max(1, questionsList.length)) * 100)}%
                </p>
              </div>
              <div className={`border-2 rounded-2xl p-4 col-span-1 ${
                isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-blue-50 border-blue-200'
              }`}>
                <p className="text-[10px] sm:text-xs font-black text-blue-600 dark:text-blue-400 uppercase">Max Combo</p>
                <p className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">
                  {maxCombo}
                </p>
              </div>
              <div className={`border-2 rounded-2xl p-4 col-span-2 sm:col-span-1 flex flex-col justify-center ${
                isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-orange-50 border-orange-200'
              }`}>
                <p className="text-xs font-black text-orange-500 uppercase">Streak</p>
                <p className="text-2xl font-black text-orange-500 mt-1 flex items-center justify-center gap-1">
                  <span>🔥</span> +1
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full max-w-md py-4 rounded-2xl font-black text-base btn-duo-green tracking-wider uppercase cursor-pointer"
            >
              CONTINUE TO LEARNING PATH
            </button>
          </div>
        )}

        {/* FAILED / OUT OF HEARTS SCREEN */}
        {status === 'failed' && (
          <div className="text-center space-y-6 py-8 animate-in zoom-in-95 duration-300">
            <div className="flex justify-center">
              <Mascot mood="sad" size={135} outfit={equippedOutfit} />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-rose-600 bg-rose-100 dark:bg-rose-950 px-3 py-1 rounded-full">
                Out of Hearts!
              </span>
              <h2 className="text-3xl font-black text-slate-800 dark:text-white mt-3">
                Don't Give Up! कोई बात नहीं!
              </h2>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mt-1">
                Practice to regain a heart for free, or refill all hearts with Chai points!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              {onPracticeHeart && (
                <button
                  onClick={() => {
                    onPracticeHeart();
                    resetQuestionState();
                    setStatus('idle');
                  }}
                  className="flex-1 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider btn-duo-green text-white cursor-pointer shadow-md flex items-center justify-center gap-1.5"
                >
                  <Heart className="w-4 h-4 fill-white text-white" /> PRACTICE (+1 ❤️ FREE)
                </button>
              )}

              {gems >= 20 && onRefillHearts ? (
                <button
                  onClick={() => {
                    onRefillHearts();
                    resetQuestionState();
                    setStatus('idle');
                  }}
                  className="flex-1 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider btn-duo-blue text-white cursor-pointer shadow-md"
                >
                  REFILL ALL (20 🫖)
                </button>
              ) : onOpenShop ? (
                <button
                  onClick={() => {
                    onClose();
                    onOpenShop();
                  }}
                  className="flex-1 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider btn-duo-purple text-white cursor-pointer"
                >
                  VISIT SHOP 🛒
                </button>
              ) : null}

              <button
                onClick={onClose}
                className="flex-1 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
              >
                BACK TO PATH
              </button>
            </div>
          </div>
        )}

        {/* ACTIVE QUESTION CONTAINER */}
        {status !== 'completed' && status !== 'failed' && currentQ && (
          <div className="space-y-6">
            {isReviewStage && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-500 text-xs font-black uppercase tracking-wider animate-in fade-in">
                <span>🔁</span> Previous Mistake — Let's practice what you missed!
              </div>
            )}
            
            {/* Header prompt with Mascot Speech Bubble */}
            <div className="flex items-start gap-4">
              <Mascot mood="happy" size={75} outfit={equippedOutfit} className="shrink-0 hidden sm:flex" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Question {currentIdx + 1} of {questionsList.length}
                  </span>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-lg uppercase">
                    {currentQ.type.replace('-', ' ')}
                  </span>
                </div>
                <h3 className="text-2xl font-black leading-snug">
                  {currentQ.prompt}
                </h3>
              </div>
            </div>

            {/* Audio Pronunciation Button Bar */}
            {currentQ.audioText && (
              <div className={`flex items-center gap-2 p-3 rounded-2xl border ${
                isDark ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200/80'
              }`}>
                <button
                  onClick={() => {
                    const prev = Number(localStorage.getItem('bhasha_audio_count') || 0);
                    localStorage.setItem('bhasha_audio_count', prev + 1);
                    sounds.speak(currentQ.audioText, selectedLanguage.code);
                  }}
                  className="p-3 rounded-xl btn-duo-blue text-white cursor-pointer"
                  title="Listen (Native Speed)"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
                <button
                  onClick={() => {
                    const prev = Number(localStorage.getItem('bhasha_audio_count') || 0);
                    localStorage.setItem('bhasha_audio_count', prev + 1);
                    sounds.speak(currentQ.audioText, selectedLanguage.code, 0.6);
                  }}
                  className={`p-3 rounded-xl border-2 transition cursor-pointer ${
                    isDark ? 'border-slate-700 hover:bg-slate-700 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-600'
                  }`}
                  title="Listen Slower"
                >
                  <Turtle className="w-6 h-6 text-emerald-500" />
                </button>
                <div className="ml-2">
                  <p className="font-black text-lg">
                    {currentQ.audioText}
                  </p>
                  {currentQ.targetRoman && showTransliteration && (
                    <p className="text-xs font-bold text-slate-400">
                      /{currentQ.targetRoman}/
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* 1. MULTIPLE CHOICE / LISTENING / FILL-BLANK */}
            {(currentQ.type === 'multiple-choice' || currentQ.type === 'listening' || currentQ.type === 'fill-blank') && (
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt, idx) => {
                  const isChosen = selectedOption === opt;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        if (status === 'idle') {
                          sounds.playPop();
                          setSelectedOption(opt);
                        }
                      }}
                      disabled={status !== 'idle'}
                      className={`w-full p-4 rounded-2xl border-2 font-bold text-base transition-all flex items-center justify-between group cursor-pointer btn-duo-card ${
                        isChosen
                          ? isDark
                            ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300 border-b-emerald-600 ring-2 ring-emerald-500/30'
                            : 'border-emerald-500 bg-emerald-50 text-emerald-900 border-b-emerald-600 ring-2 ring-emerald-400/30'
                          : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black border ${
                          isChosen
                            ? 'bg-emerald-500 text-white border-emerald-500'
                            : isDark
                            ? 'bg-slate-800 text-slate-400 border-slate-700 group-hover:bg-slate-700'
                            : 'bg-slate-100 text-slate-500 border-slate-200 group-hover:bg-slate-200'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="font-extrabold">
                          {showTransliteration ? opt.text : (opt.text.includes('(') ? opt.text.split('(')[0].trim() : opt.text)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 2. SENTENCE BUILDER */}
            {currentQ.type === 'sentence-builder' && (
              <div className="space-y-6 pt-2">
                {/* Target Sentence Area / Slot */}
                <div className={`min-h-[72px] p-4 rounded-2xl border-b-3 border-dashed flex flex-wrap gap-2.5 items-center transition-colors ${
                  isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-50 border-slate-300'
                }`}>
                  {selectedSentenceWords.length === 0 ? (
                    <span className="text-sm font-bold text-slate-400 italic">
                      Tap words below to form the sentence...
                    </span>
                  ) : (
                    selectedSentenceWords.map((word, wIdx) => (
                      <button
                        key={wIdx}
                        onClick={() => {
                          if (status === 'idle') {
                            sounds.playPop();
                            setSelectedSentenceWords(prev => prev.filter((_, i) => i !== wIdx));
                          }
                        }}
                        className={`px-4 py-2.5 rounded-2xl font-black text-sm border-2 border-b-4 transition cursor-pointer shadow-sm ${
                          isDark
                            ? 'bg-slate-800 border-slate-700 border-b-slate-600 text-white hover:border-rose-400'
                            : 'bg-white border-slate-200 border-b-slate-300 text-slate-800 hover:border-rose-400'
                        }`}
                        title="Click to remove"
                      >
                        {word}
                      </button>
                    ))
                  )}
                </div>

                {/* Word Bank */}
                <div className="flex flex-wrap gap-2.5 justify-center pt-2">
                  {currentQ.wordBank.map((word, bIdx) => {
                    const timesInSentence = selectedSentenceWords.filter(w => w === word).length;
                    const timesInBank = currentQ.wordBank.filter(w => w === word).length;
                    const isExhausted = timesInSentence >= timesInBank;

                    return (
                      <button
                        key={bIdx}
                        onClick={() => {
                          if (status === 'idle' && !isExhausted) {
                            sounds.playPop();
                            setSelectedSentenceWords(prev => [...prev, word]);
                          }
                        }}
                        disabled={isExhausted || status !== 'idle'}
                        className={`px-4 py-2.5 rounded-2xl font-black text-base transition-all border-2 border-b-4 cursor-pointer ${
                          isExhausted
                            ? isDark
                              ? 'bg-slate-800/30 border-slate-800 border-b-slate-800 text-transparent pointer-events-none'
                              : 'bg-slate-100 border-slate-200 border-b-slate-200 text-transparent pointer-events-none'
                            : isDark
                            ? 'bg-slate-800 border-slate-700 border-b-slate-600 text-slate-100 hover:border-emerald-500 active:translate-y-1'
                            : 'bg-white border-slate-200 border-b-slate-300 text-slate-800 hover:border-emerald-400 hover:bg-emerald-50 active:translate-y-1'
                        }`}
                      >
                        {word}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. MATCH PAIRS */}
            {currentQ.type === 'match-pairs' && (
              <div className="space-y-4 pt-2">
                <p className="text-xs font-bold text-slate-400 text-center uppercase tracking-wider">
                  Matched {matchedPairs.length} of {currentQ.pairs.length} pairs
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {/* Left Column */}
                  <div className="space-y-2.5">
                    {currentQ.pairs.map((p, idx) => {
                      const isMatched = matchedPairs.includes(p.left);
                      const isSelected = selectedPairLeft?.left === p.left;

                      return (
                        <button
                          key={idx}
                          onClick={() => handlePairClick('left', p)}
                          disabled={isMatched || status !== 'idle'}
                          className={`w-full p-4 rounded-2xl border-2 border-b-4 text-center font-black text-sm transition-all cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-100 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 opacity-60 cursor-default'
                              : isSelected
                              ? 'bg-amber-100 dark:bg-amber-950/50 border-amber-400 border-b-amber-500 text-amber-900 dark:text-amber-200 ring-2 ring-amber-300'
                              : isDark
                              ? 'bg-slate-800 border-slate-700 border-b-slate-600 text-slate-100 hover:border-emerald-400'
                              : 'bg-white border-slate-200 border-b-slate-300 text-slate-800 hover:border-emerald-400'
                          } ${pairError && isSelected ? 'animate-shake bg-rose-100 border-rose-400 text-rose-900' : ''}`}
                        >
                          {showTransliteration ? p.left : (p.left.includes('(') ? p.left.split('(')[0].trim() : p.left)}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-2.5">
                    {currentQ.pairs.slice().reverse().map((p, idx) => {
                      const isMatched = matchedPairs.some(
                        key => currentQ.pairs.find(item => item.left === key)?.right === p.right
                      );
                      const isSelected = selectedPairRight?.right === p.right;

                      return (
                        <button
                          key={idx}
                          onClick={() => handlePairClick('right', p)}
                          disabled={isMatched || status !== 'idle'}
                          className={`w-full p-4 rounded-2xl border-2 border-b-4 text-center font-black text-sm transition-all cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-100 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 opacity-60 cursor-default'
                              : isSelected
                              ? 'bg-amber-100 dark:bg-amber-950/50 border-amber-400 border-b-amber-500 text-amber-900 dark:text-amber-200 ring-2 ring-amber-300'
                              : isDark
                              ? 'bg-slate-800 border-slate-700 border-b-slate-600 text-slate-100 hover:border-emerald-400'
                              : 'bg-white border-slate-200 border-b-slate-300 text-slate-800 hover:border-emerald-400'
                          } ${pairError && isSelected ? 'animate-shake bg-rose-100 border-rose-400 text-rose-900' : ''}`}
                        >
                          {p.right}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* Bottom Feedback Drawer */}
      {status !== 'completed' && status !== 'failed' && (
        <div className={`border-t-2 px-4 sm:px-8 py-5 transition-colors ${
          status === 'correct' 
            ? isDark ? 'bg-emerald-950/80 border-emerald-800/60' : 'bg-emerald-100 border-emerald-300'
            : status === 'wrong'
            ? isDark ? 'bg-rose-950/80 border-rose-900/60' : 'bg-rose-100 border-rose-300'
            : isDark ? 'bg-[#131f24] border-slate-800' : 'bg-white border-slate-100'
        }`}>
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Feedback Message */}
            {status === 'idle' ? (
              <div className="text-xs font-black uppercase tracking-wider text-slate-400 hidden sm:block">
                Press Enter ↵ or tap Check when ready
              </div>
            ) : status === 'correct' ? (
               <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-lg text-emerald-900 dark:text-emerald-200">
                    Excellent! शाबाश!
                  </h4>
                  {currentQ?.explanation && (
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 font-bold max-w-md">
                      {currentQ.explanation}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <XCircle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-lg text-rose-900 dark:text-rose-200">
                    Correct solution:
                  </h4>
                  {currentQ?.type === 'sentence-builder' ? (
                    <p className="text-sm font-black text-rose-950 dark:text-rose-100">
                      {currentQ.targetSentence} {currentQ.targetRoman ? `(${currentQ.targetRoman})` : ''}
                    </p>
                  ) : currentQ?.options?.find(o => o.correct) ? (
                    <p className="text-sm font-black text-rose-950 dark:text-rose-100">
                      {currentQ.options.find(o => o.correct).text}
                    </p>
                  ) : null}
                  <p className="text-xs text-rose-800 dark:text-rose-300 font-bold mt-0.5">
                    {currentQ?.explanation || 'Review and keep practicing!'}
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div>
              {status === 'idle' ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={isCheckDisabled()}
                  className={`px-10 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider transition-all cursor-pointer ${
                    isCheckDisabled()
                      ? 'btn-duo-gray'
                      : 'btn-duo-green text-white shadow-md'
                  }`}
                >
                  CHECK
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className={`px-10 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider transition-all cursor-pointer ${
                    status === 'correct' ? 'btn-duo-green text-white' : 'btn-duo-red text-white'
                  }`}
                >
                  CONTINUE <ArrowRight className="w-4 h-4 inline ml-1" />
                </button>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Duolingo Quit Session Confirmation Modal */}
      {showQuitConfirm && (
        <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className={`rounded-3xl max-w-sm w-full p-6 text-center space-y-4 border-2 shadow-2xl ${
            isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <div className="flex justify-center">
              <Mascot mood="sad" size={100} outfit={equippedOutfit} />
            </div>
            <h3 className="text-xl font-black">
              Wait, don't leave!
            </h3>
            <p className={`text-xs font-bold leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              All progress in this lesson will be lost if you quit now.
            </p>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => setShowQuitConfirm(false)}
                className="w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider btn-duo-green text-white cursor-pointer"
              >
                KEEP LEARNING
              </button>
              <button
                onClick={() => {
                  setShowQuitConfirm(false);
                  onClose();
                }}
                className={`w-full py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider transition cursor-pointer ${
                  isDark ? 'text-rose-400 hover:bg-slate-800' : 'text-rose-600 hover:bg-rose-50'
                }`}
              >
                END SESSION
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
