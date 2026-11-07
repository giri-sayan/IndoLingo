import React, { useState } from 'react';
import { Volume2, Play, X, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';
import { MATRA_TABLES } from '../data/innovations';
import Mascot from './Mascot';

export default function LettersView({ selectedLanguage, onAddGems, theme = 'dark' }) {
  const isDark = theme === 'dark';
  const [filter, setFilter] = useState('all'); // 'all' | 'vowel' | 'consonant'
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [activeMatraChar, setActiveMatraChar] = useState(null);

  // Practice Quiz States (Duolingo Letter Quiz)
  const [quizMode, setQuizMode] = useState(false);
  const [quizDeck, setQuizDeck] = useState([]);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);

  const alphabet = selectedLanguage?.alphabet || [];
  const vowels = alphabet.filter(l => l.type === 'vowel');
  const consonants = alphabet.filter(l => l.type === 'consonant');

  const filteredLetters = filter === 'vowel' 
    ? vowels 
    : filter === 'consonant' 
    ? consonants 
    : alphabet;

  const matraList = MATRA_TABLES[selectedLanguage?.id] || MATRA_TABLES.hindi || [];

  const handlePlaySound = (char) => {
    sounds.playPop();
    sounds.speak(char, selectedLanguage?.code || 'hi-IN', 0.9);
    try {
      const prev = Number(localStorage.getItem('bhasha_audio_count') || 0);
      localStorage.setItem('bhasha_audio_count', prev + 1);
    } catch {}
  };

  const handleStartQuiz = () => {
    sounds.playPop();
    if (!alphabet.length) return;

    const deck = [...alphabet].sort(() => 0.5 - Math.random()).slice(0, 8).map(letter => {
      const distractors = alphabet
        .filter(l => l.char !== letter.char)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      const options = [letter, ...distractors]
        .sort(() => 0.5 - Math.random())
        .map(opt => ({
          char: opt.char,
          roman: opt.roman,
          correct: opt.char === letter.char
        }));

      return {
        target: letter,
        options
      };
    });

    setQuizDeck(deck);
    setQuizMode(true);
    setCurrentQuizIdx(0);
    setQuizScore(0);
    setQuizFeedback(null);
    setQuizCompleted(false);
    setSelectedQuizOption(null);

    // Speak initial target letter
    if (deck[0]) {
      setTimeout(() => {
        sounds.speak(deck[0].target.char, selectedLanguage?.code || 'hi-IN');
      }, 300);
    }
  };

  const handleSelectQuizOption = (opt) => {
    if (quizFeedback) return;
    sounds.playPop();
    setSelectedQuizOption(opt);

    if (opt.correct) {
      sounds.playCorrect();
      setQuizFeedback('correct');
      setQuizScore(prev => prev + 1);
    } else {
      sounds.playWrong();
      setQuizFeedback('wrong');
    }

    setTimeout(() => {
      if (currentQuizIdx + 1 < quizDeck.length) {
        const nextIdx = currentQuizIdx + 1;
        setCurrentQuizIdx(nextIdx);
        setQuizFeedback(null);
        setSelectedQuizOption(null);
        sounds.speak(quizDeck[nextIdx].target.char, selectedLanguage?.code || 'hi-IN');
      } else {
        sounds.playFanfare();
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        setQuizCompleted(true);
        onAddGems?.(15);
      }
    }, 1100);
  };

  // Duolingo Interactive Letters Quiz Modal
  if (quizMode) {
    const qItem = quizDeck[currentQuizIdx];

    return (
      <div className={`fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-6 select-none ${
        isDark ? 'bg-[#131f24] text-white' : 'bg-white text-slate-800'
      }`}>
        {/* Quiz Header */}
        <div className="max-w-2xl w-full mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => setQuizMode(false)}
            className="p-2 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          <div className="flex-1 h-3.5 bg-slate-200 dark:bg-[#20333d] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#58cc02] transition-all duration-300 rounded-full"
              style={{ width: `${((currentQuizIdx) / quizDeck.length) * 100}%` }}
            />
          </div>

          <span className="text-xs font-black text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
            +15 XP
          </span>
        </div>

        {/* Quiz Body */}
        <div className="max-w-lg w-full mx-auto flex-1 flex flex-col justify-center items-center text-center py-8">
          {!quizCompleted ? (
            <div className="space-y-6 w-full animate-in zoom-in-95 duration-200">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                Tap the matching sound
              </span>

              {/* Target Character Card */}
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={() => sounds.speak(qItem.target.char, selectedLanguage?.code || 'hi-IN')}
                  className="w-36 h-36 rounded-3xl bg-slate-100 dark:bg-[#18262d] border-4 border-slate-300 dark:border-[#38464f] hover:border-[#1cb0f6] flex flex-col items-center justify-center shadow-xl group transition cursor-pointer"
                >
                  <span className="text-6xl font-black text-slate-900 dark:text-white group-hover:scale-105 transition">
                    {qItem.target.char}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#1cb0f6] font-bold mt-2">
                    <Volume2 className="w-4 h-4" />
                    <span>Listen</span>
                  </div>
                </button>
              </div>

              {/* 4 Choices */}
              <div className="grid grid-cols-2 gap-3.5 pt-4">
                {qItem.options.map((opt, i) => {
                  let btnStyle = isDark
                    ? 'bg-[#18262d] border-[#38464f] text-white hover:border-[#1cb0f6]'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-emerald-400';

                  if (selectedQuizOption === opt) {
                    if (opt.correct) {
                      btnStyle = 'bg-[#58cc02] border-[#58cc02] text-white';
                    } else {
                      btnStyle = 'bg-[#ff4b4b] border-[#ff4b4b] text-white';
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectQuizOption(opt)}
                      className={`p-5 rounded-2xl border-2 font-black text-lg sm:text-xl transition shadow-md active:translate-y-1 cursor-pointer ${btnStyle}`}
                    >
                      {opt.roman}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              <Mascot mood="cheering" size={120} outfit="royal" />
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                Letter Practice Complete!
              </h2>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                You mastered {quizScore} out of {quizDeck.length} letters in {selectedLanguage.name}!
              </p>
              <button
                onClick={() => setQuizMode(false)}
                className="w-full py-4 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] text-white font-black text-sm uppercase tracking-wider shadow-[0_4px_0_#46a302] cursor-pointer"
              >
                CLAIM +15 XP
              </button>
            </div>
          )}
        </div>

        {/* Bottom spacer */}
        <div className="h-6" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 select-none">
      {/* Duolingo Letters Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur flex items-center gap-1.5 w-fit">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Characters & Letters • {selectedLanguage.name}</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              Learn the Letters
            </h1>
            <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1 max-w-xl">
              Get to know the authentic sounds and letter shapes of {selectedLanguage.name}. Tap each tile to listen to native pronunciation!
            </p>
          </div>

          <button
            onClick={handleStartQuiz}
            className="px-6 py-3.5 rounded-2xl bg-white text-emerald-800 font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer flex items-center gap-2 shrink-0"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>PRACTICE LETTERS (+15 XP)</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs (All / Vowels / Consonants) */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {[
            { id: 'all', label: 'All Letters' },
            { id: 'vowel', label: 'Vowels (स्वर)' },
            { id: 'consonant', label: 'Consonants (व्यंजन)' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => { sounds.playPop(); setFilter(t.id); }}
              className={`px-4 py-2 rounded-2xl font-black text-xs uppercase tracking-wider transition cursor-pointer border-2 ${
                filter === t.id
                  ? 'bg-[#1cb0f6] border-[#1cb0f6] text-white shadow-md'
                  : isDark
                  ? 'bg-[#18262d] border-[#38464f] text-slate-300 hover:border-slate-400'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <span className="text-xs font-bold text-slate-400 hidden sm:inline">
          {filteredLetters.length} Characters
        </span>
      </div>

      {/* Duolingo Letter Tiles Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {filteredLetters.map((l, idx) => {
          const isSelected = selectedLetter?.char === l.char;

          return (
            <button
              key={idx}
              onClick={() => {
                setSelectedLetter(l);
                handlePlaySound(l.char, l.roman);
              }}
              className={`p-4 rounded-3xl border-2 flex flex-col items-center justify-between transition group relative cursor-pointer ${
                isSelected
                  ? 'border-[#1cb0f6] bg-[#1cb0f6]/10 ring-2 ring-[#1cb0f6]/30 scale-105'
                  : isDark
                  ? 'bg-[#18262d] border-[#38464f] hover:border-[#1cb0f6] hover:bg-[#20333d]'
                  : 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <div className="w-full flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                <span className="uppercase">{l.type === 'vowel' ? 'Vowel' : ''}</span>
                <Volume2 className="w-3.5 h-3.5 text-[#1cb0f6] opacity-0 group-hover:opacity-100 transition" />
              </div>

              <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white my-1 group-hover:scale-110 transition">
                {l.char}
              </span>

              <span className="text-xs font-black text-[#1cb0f6]">
                {l.roman}
              </span>

              {/* Duolingo-style 3-bar mastery progress */}
              <div className="w-full flex items-center gap-1 mt-2.5">
                <div className="h-1 flex-1 rounded-full bg-[#58cc02]" />
                <div className="h-1 flex-1 rounded-full bg-[#58cc02]" />
                <div className="h-1 flex-1 rounded-full bg-[#58cc02]/30" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Letter Detail Popup Card */}
      {selectedLetter && (
        <div className={`rounded-3xl p-5 border-2 flex items-center justify-between gap-4 animate-in fade-in duration-150 ${
          isDark ? 'bg-[#18262d] border-[#38464f]' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#1cb0f6]/10 border-2 border-[#1cb0f6] flex items-center justify-center text-3xl font-black text-[#1cb0f6] shrink-0">
              {selectedLetter.char}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  Sound: /{selectedLetter.roman}/
                </h3>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                  {selectedLetter.type}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-400 mt-0.5">
                {selectedLetter.sound || `Pronounced as "${selectedLetter.roman}" in ${selectedLanguage.name}.`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePlaySound(selectedLetter.char, selectedLetter.roman)}
              className="px-4 py-2.5 rounded-2xl bg-[#1cb0f6] hover:bg-[#1899d6] text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Volume2 className="w-4 h-4" />
              <span>REPEAT SOUND</span>
            </button>
            <button
              onClick={() => setSelectedLetter(null)}
              className="p-2.5 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Vowel Combinations / Matras Section */}
      {matraList.length > 0 && (
        <div className={`rounded-3xl p-6 border-2 space-y-4 ${
          isDark ? 'bg-[#18262d] border-[#38464f]' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-400">
              Interactive Matra Engine
            </span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
              Vowel Combinations (मात्रा / உயிரெழுத்துக் குறி)
            </h3>
            <p className="text-xs font-semibold text-slate-400 mt-1">
              In Indian scripts, vowels attach to consonants as diacritic signs (matras). Tap a vowel sign below to see and hear the combination!
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
            {matraList.map((m, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveMatraChar(m);
                  sounds.playPop();
                  sounds.speak(m.sample, selectedLanguage?.code || 'hi-IN');
                }}
                className={`p-3 rounded-2xl border-2 flex flex-col items-center justify-center transition cursor-pointer ${
                  activeMatraChar?.sign === m.sign
                    ? 'border-amber-400 bg-amber-400/10 text-amber-400 font-black'
                    : isDark
                    ? 'bg-[#20333d] border-[#2b3e48] hover:border-amber-400/50 text-white'
                    : 'bg-slate-50 border-slate-200 hover:border-amber-400 text-slate-800'
                }`}
              >
                <span className="text-2xl font-black">{m.sample}</span>
                <span className="text-[10px] text-slate-400 font-bold mt-1">
                  Sign: {m.sign} ({m.roman})
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
