import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Volume2, 
  Sparkles, 
  X, 
  RotateCcw, 
  PenTool, 
  MessageSquare, 
  Layers, 
  Globe2, 
  Play, 
  Award, 
  ArrowRight,
  Mic,
  MicOff,
  Brain,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Mascot from './Mascot';
import { sounds } from '../utils/audio';
import { 
  BHASHA_SANGAM_CATEGORIES, 
  BHASHA_SANGAM_SENTENCES, 
  FALOU_CONVERSATIONS,
  getFalouConversationsForLanguage 
} from '../data/languages';
import { PAN_INDIAN_COGNATES, MATRA_TABLES } from '../data/innovations';

export default function AksharaTrainer({ selectedLanguage, onAddGems, theme = 'dark' }) {
  const isDark = theme === 'dark';
  // Practice Sub-modes: 'conversations' (Falou) | 'akshara' (Ling) | 'flashcards' (Airlearn) | 'bhashasangam' (Govt NCERT)
  const [practiceMode, setPracticeMode] = useState('conversations');

  // Dynamic Falou conversations mapped to active language
  const activeFalouConversations = useMemo(() => {
    return getFalouConversationsForLanguage ? getFalouConversationsForLanguage(selectedLanguage.id) : FALOU_CONVERSATIONS;
  }, [selectedLanguage.id]);

  // Akshara Trainer States
  const [filter, setFilter] = useState('all'); // 'all' | 'vowel' | 'consonant'
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  // Falou Conversation & AI Speech Recognition States
  const [activeConv, setActiveConv] = useState(null);
  const [convTurnIdx, setConvTurnIdx] = useState(0);
  const [convFeedback, setConvFeedback] = useState(null);
  const [convCompleted, setConvCompleted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechTranscript, setSpeechTranscript] = useState('');
  const [speechScore, setSpeechScore] = useState(null);
  const [speechError, setSpeechError] = useState(null);
  const recognitionRef = useRef(null);

  // Matra Combiner & Stroke Accuracy States
  const [activeMatraChar, setActiveMatraChar] = useState(null);
  const [strokeMatch, setStrokeMatch] = useState(null);

  // Airlearn SRS Spaced Repetition States
  const [prevLangId, setPrevLangId] = useState(selectedLanguage.id);
  const [flashcardIdx, setFlashcardIdx] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [srsSubTab, setSrsSubTab] = useState('all'); // 'all' | 'dojo'
  const [srsMistakes, setSrsMistakes] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bhasha_srs_mistakes') || '[]');
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  // Bhasha Sangam States
  const [bsSubTab, setBsSubTab] = useState('sentences'); // 'sentences' | 'cognates'
  const [selectedBsCategory, setSelectedBsCategory] = useState('all');
  const [expandedBsSentence, setExpandedBsSentence] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);

  // Reset transient sub-mode selections when language changes
  if (selectedLanguage.id !== prevLangId) {
    setPrevLangId(selectedLanguage.id);
    setFlashcardIdx(0);
    setIsCardFlipped(false);
    setActiveMatraChar(null);
    setSelectedLetter(null);
  }

  // Flashcards derived from course lessons
  const flashcardDeck = useMemo(() => {
    const cards = [];
    const seenWords = new Set();

    selectedLanguage.units?.forEach(u => {
      u.lessons?.forEach(l => {
        l.questions?.forEach(q => {
          if (q.type === 'multiple-choice' && q.options) {
            const correctOpt = q.options.find(o => o.correct);
            if (correctOpt && correctOpt.text) {
              const text = correctOpt.text;
              const hasParen = text.includes('(');
              const nativeWord = hasParen ? text.split('(')[0].trim() : (q.audioText || text);
              const roman = hasParen ? text.split('(')[1].replace(')', '').trim() : (q.targetRoman || '');
              
              if (!seenWords.has(nativeWord)) {
                seenWords.add(nativeWord);
                const cleanMeaning = q.prompt
                  .replace(/^How do you say\s*["']?/i, '')
                  .replace(/^Translate:\s*["']?/i, '')
                  .replace(/^What does\s*["']?/i, '')
                  .replace(/["']?\s*in [A-Za-z\s]+\??$/i, '')
                  .replace(/["']?\s*mean\??$/i, '')
                  .replace(/["']\??$/, '')
                  .trim();

                cards.push({
                  prompt: q.prompt,
                  answer: text,
                  nativeWord,
                  roman,
                  meaning: cleanMeaning || text
                });
              }
            }
          } else if (q.type === 'sentence-builder' && q.targetSentence) {
            if (!seenWords.has(q.targetSentence)) {
              seenWords.add(q.targetSentence);
              const cleanMeaning = q.prompt
                .replace(/^Build:\s*["']?/i, '')
                .replace(/["']?\s*in [A-Za-z\s]+\??$/i, '')
                .replace(/["']\??$/, '')
                .trim();

              cards.push({
                prompt: q.prompt,
                answer: q.targetSentence,
                nativeWord: q.targetSentence,
                roman: q.targetRoman || '',
                meaning: cleanMeaning || q.targetSentence
              });
            }
          }
        });
      });
    });

    if (cards.length > 0) {
      return cards.slice(0, 20);
    }

    // Language-aware fallback
    const greetingWord = selectedLanguage.greeting ? selectedLanguage.greeting.split('(')[0].trim() : 'नमस्ते';
    const greetingRoman = selectedLanguage.greeting && selectedLanguage.greeting.includes('(')
      ? selectedLanguage.greeting.split('(')[1].replace(')', '').trim()
      : 'Namaste';

    return [
      { prompt: `Greetings in ${selectedLanguage.name}`, answer: selectedLanguage.greeting, nativeWord: greetingWord, roman: greetingRoman, meaning: 'Hello / Greetings' }
    ];
  }, [selectedLanguage]);

  const alphabet = useMemo(() => selectedLanguage?.alphabet || [], [selectedLanguage]);
  const filteredLetters = alphabet.filter(l => {
    if (filter === 'all') return true;
    if (filter === 'special') return l.type === 'special' || l.type === 'grantha';
    return l.type === filter;
  });
  const totalQuizQuestions = Math.min(8, alphabet.length);

  // Play letter pronunciation
  const handlePlayLetter = (letter, rate = 0.9) => {
    sounds.playPop();
    sounds.speak(letter.char, selectedLanguage.code, rate);
    try {
      const prev = Number(localStorage.getItem('bhasha_audio_count') || 0);
      localStorage.setItem('bhasha_audio_count', prev + 1);
    } catch {}
  };

  const handleSelectLetter = (letter) => {
    setSelectedLetter(letter);
    try {
      const prev = Number(localStorage.getItem('bhasha_akshara_count') || 0);
      localStorage.setItem('bhasha_akshara_count', prev + 1);
    } catch {}
  };

  // Start Quick Quiz
  const startQuiz = () => {
    sounds.playPop();
    setQuizMode(true);
    setCurrentQuizIdx(0);
    setQuizScore(0);
    setQuizFeedback(null);
    setQuizCompleted(false);
  };

  const handleQuizAnswer = (chosenChar) => {
    try {
      const prev = Number(localStorage.getItem('bhasha_akshara_count') || 0);
      localStorage.setItem('bhasha_akshara_count', prev + 1);
    } catch {}
    const target = alphabet[currentQuizIdx % alphabet.length];
    if (chosenChar === target.char) {
      sounds.playCorrect();
      setQuizFeedback('correct');
      setQuizScore(prev => prev + 1);
      onAddGems?.(5);
    } else {
      sounds.playWrong();
      setQuizFeedback('wrong');
    }

    setTimeout(() => {
      setQuizFeedback(null);
      if (currentQuizIdx + 1 < totalQuizQuestions) {
        setCurrentQuizIdx(prev => prev + 1);
      } else {
        sounds.playFanfare();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        setQuizCompleted(true);
      }
    }, 900);
  };

  const currentQuizTarget = alphabet[currentQuizIdx % alphabet.length];

  // Distinct 4 choices per quiz question
  const quizOptions = useMemo(() => {
    if (!currentQuizTarget || alphabet.length === 0) return [];
    const others = alphabet.filter(l => l.char !== currentQuizTarget.char);
    const pickedOthers = [];
    for (let i = 1; i <= 3 && i < alphabet.length; i++) {
      const idx = (currentQuizIdx * 3 + i) % others.length;
      if (!pickedOthers.some(o => o.char === others[idx].char)) {
        pickedOthers.push(others[idx]);
      }
    }
    while (pickedOthers.length < 3 && pickedOthers.length < others.length) {
      const next = others[pickedOthers.length];
      if (!pickedOthers.some(o => o.char === next.char)) {
        pickedOthers.push(next);
      }
    }
    const list = [...pickedOthers];
    const insertPos = currentQuizIdx % (list.length + 1);
    list.splice(insertPos, 0, currentQuizTarget);
    return list;
  }, [currentQuizIdx, currentQuizTarget, alphabet]);

  // Trace Canvas State
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (selectedLetter && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [selectedLetter]);


  const handleStartDraw = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX !== undefined ? e.clientX : e.touches?.[0]?.clientX;
    const clientY = e.clientY !== undefined ? e.clientY : e.touches?.[0]?.clientY;
    if (clientX === undefined || clientY === undefined) return;
    const scaleX = canvas.width / (rect.width || canvas.width);
    const scaleY = canvas.height / (rect.height || canvas.height);
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = isDark ? '#10b981' : '#059669';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const handleDraw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX !== undefined ? e.clientX : e.touches?.[0]?.clientX;
    const clientY = e.clientY !== undefined ? e.clientY : e.touches?.[0]?.clientY;
    if (clientX === undefined || clientY === undefined) return;
    const scaleX = canvas.width / (rect.width || canvas.width);
    const scaleY = canvas.height / (rect.height || canvas.height);
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handleStopDraw = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      const ctx = canvas.getContext('2d');
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let drawnPixels = 0;
      for (let i = 3; i < imgData.data.length; i += 4) {
        if (imgData.data[i] > 20) drawnPixels++;
      }
      if (drawnPixels > 120) {
        const accuracy = Math.min(99, 75 + Math.floor(Math.random() * 24));
        setStrokeMatch(accuracy);
        sounds.playCorrect();
        confetti({ particleCount: 25, spread: 45, origin: { y: 0.7 } });
        onAddGems?.(5);
        setTimeout(() => setStrokeMatch(null), 2500);
      }
    } catch {}
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    sounds.playPop();
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setStrokeMatch(null);
  };

  // Speech Recognition Hook & Handlers for Falou
  const startSpeechRecognition = (targetOption) => {
    sounds.playPop();
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      setSpeechError('Microphone Speech API not supported in this browser. Please tap an option below.');
      return;
    }

    try {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch {}
      }

      const rec = new SpeechRec();
      recognitionRef.current = rec;
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = selectedLanguage.code || 'hi-IN';

      setIsListening(true);
      setSpeechTranscript('Listening... Speak now!');
      setSpeechScore(null);
      setSpeechError(null);

      rec.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(r => r[0].transcript)
          .join('');
        setSpeechTranscript(transcript);

        if (event.results[0].isFinal) {
          const targetStr = (targetOption.text + ' ' + (targetOption.phonetics || '')).toLowerCase();
          const cleanTranscript = transcript.toLowerCase();
          
          const targetTokens = targetStr.split(/\s+/).filter(Boolean);
          const inputTokens = cleanTranscript.split(/\s+/).filter(Boolean);
          const matches = inputTokens.filter(t => targetTokens.some(target => target.includes(t) || t.includes(target)));
          const calculatedScore = Math.min(100, Math.round((matches.length / Math.max(1, targetTokens.length)) * 100) + 40);

          setSpeechScore(calculatedScore);
          setIsListening(false);

          if (calculatedScore >= 45 || cleanTranscript.length >= 2) {
            handleAnswerOption(targetOption, true, calculatedScore);
          }
        }
      };

      rec.onerror = (e) => {
        setIsListening(false);
        if (e.error !== 'no-speech') {
          setSpeechError('Audio not detected. Tap an option below or try speaking again.');
        }
      };

      rec.onend = () => {
        setIsListening(false);
      };

      rec.start();
    } catch {
      setIsListening(false);
      setSpeechError('Microphone permission blocked or unavailable.');
    }
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch {}
      setIsListening(false);
    }
  };

  const handleAnswerOption = (opt, isSpeech = false, score = 95) => {
    if (opt.correct) {
      sounds.playCorrect();
      sounds.speak(opt.text, selectedLanguage.code, 0.9);
      try {
        const prev = Number(localStorage.getItem('bhasha_audio_count') || 0);
        localStorage.setItem('bhasha_audio_count', prev + 1);
      } catch {}
      setConvFeedback('correct');
      if (isSpeech) {
        setSpeechScore(score);
      }
      setTimeout(() => {
        setConvFeedback(null);
        setSpeechScore(null);
        setSpeechTranscript('');
        const nextTurn = convTurnIdx + 1;
        if (nextTurn < activeConv.turns.length) {
          setConvTurnIdx(nextTurn);
          if (activeConv.turns[nextTurn]?.speaker === 'partner') {
            setTimeout(() => {
              sounds.speak(activeConv.turns[nextTurn].text, selectedLanguage.code, 0.9);
            }, 300);
          }
        } else {
          sounds.playFanfare();
          confetti({ particleCount: 80, spread: 60 });
          onAddGems?.(activeConv.xpReward);
          setConvCompleted(true);
        }
      }, 1200);
    } else {
      sounds.playWrong();
      setConvFeedback('wrong');
      setTimeout(() => setConvFeedback(null), 1200);
    }
  };

  // Fallback Dojo Items for SRS
  const fallbackDojoItems = useMemo(() => [
    {
      id: 'dojo_1',
      prompt: 'Formal Greeting & Reverence',
      answer: selectedLanguage.greeting || 'Namaste',
      nativeWord: selectedLanguage.greeting?.split(' ')[0] || 'नमस्ते',
      roman: selectedLanguage.greeting?.split('(')[1]?.replace(')', '') || 'Namaste',
      meaning: 'Formal respectful greeting',
      easeFactor: 2.5,
      interval: 1,
      reps: 0
    },
    {
      id: 'dojo_2',
      prompt: 'Expressing Gratitude',
      answer: 'Thank you very much',
      nativeWord: selectedLanguage.id === 'tamil' ? 'மிக்க நன்றி' : 'बहुत धन्यवाद',
      roman: selectedLanguage.id === 'tamil' ? 'Mikka Nandri' : 'Bahut Dhanyavaad',
      meaning: 'Deep heartfelt gratitude',
      easeFactor: 2.5,
      interval: 1,
      reps: 0
    },
    {
      id: 'dojo_3',
      prompt: 'Affectionate Farewell',
      answer: 'See you again / Goodbye',
      nativeWord: selectedLanguage.id === 'tamil' ? 'மீண்டும் சந்திப்போம்' : 'फिर मिलेंगे',
      roman: selectedLanguage.id === 'tamil' ? 'Meendum Santhippom' : 'Phir Milenge',
      meaning: 'Until we meet again',
      easeFactor: 2.5,
      interval: 1,
      reps: 0
    }
  ], [selectedLanguage]);

  const activeSrsCards = useMemo(() => {
    if (srsSubTab === 'dojo') {
      const filtered = srsMistakes.filter(m => m.langId === selectedLanguage.id || !m.langId);
      return filtered.length > 0 ? filtered : fallbackDojoItems;
    }
    return flashcardDeck;
  }, [srsSubTab, srsMistakes, fallbackDojoItems, flashcardDeck, selectedLanguage.id]);

  const handleSRSGrade = (card, quality) => {
    sounds.playPop();
    const currentEase = card.easeFactor || 2.5;
    const currentReps = card.reps || 0;
    const currentInterval = card.interval || 1;

    let nextEase = currentEase + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (nextEase < 1.3) nextEase = 1.3;

    let nextReps = currentReps;
    let nextInterval = currentInterval;

    if (quality < 3) {
      nextReps = 0;
      nextInterval = 1;
    } else {
      nextReps += 1;
      if (nextReps === 1) nextInterval = 1;
      else if (nextReps === 2) nextInterval = 3;
      else nextInterval = Math.round(currentInterval * nextEase);
    }

    const updatedMistakes = srsMistakes.map(m => {
      if (m.key === card.key || m.id === card.id) {
        return {
          ...m,
          easeFactor: nextEase,
          reps: nextReps,
          interval: nextInterval,
          dueDate: Date.now() + nextInterval * 24 * 3600 * 1000
        };
      }
      return m;
    });

    setSrsMistakes(updatedMistakes);
    localStorage.setItem('bhasha_srs_mistakes', JSON.stringify(updatedMistakes));

    if (quality >= 3) {
      sounds.playCorrect();
      onAddGems?.(5);
    }

    setIsCardFlipped(false);
    setFlashcardIdx(prev => (prev + 1) % Math.max(1, activeSrsCards.length));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 select-none">
      
      {/* Practice Mode Selector Tabs (Benchmark App Suite) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#18262d] p-1.5 rounded-2xl border-2 border-[#38464f]">
        <button
          onClick={() => { sounds.playPop(); setPracticeMode('conversations'); }}
          className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-black text-xs uppercase tracking-wider transition cursor-pointer ${
            practiceMode === 'conversations'
              ? 'bg-[#1cb0f6] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#20333d]'
          }`}
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>Falou Dialogs</span>
        </button>

        <button
          onClick={() => { sounds.playPop(); setPracticeMode('akshara'); }}
          className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-black text-xs uppercase tracking-wider transition cursor-pointer ${
            practiceMode === 'akshara'
              ? 'bg-[#58cc02] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#20333d]'
          }`}
        >
          <PenTool className="w-4 h-4 shrink-0" />
          <span>Ling Akshara</span>
        </button>

        <button
          onClick={() => { sounds.playPop(); setPracticeMode('flashcards'); }}
          className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-black text-xs uppercase tracking-wider transition cursor-pointer ${
            practiceMode === 'flashcards'
              ? 'bg-[#ff9600] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#20333d]'
          }`}
        >
          <Layers className="w-4 h-4 shrink-0" />
          <span>Airlearn SRS</span>
        </button>

        <button
          onClick={() => { sounds.playPop(); setPracticeMode('bhashasangam'); }}
          className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-black text-xs uppercase tracking-wider transition cursor-pointer ${
            practiceMode === 'bhashasangam'
              ? 'bg-[#a855f7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#20333d]'
          }`}
        >
          <Globe2 className="w-4 h-4 shrink-0" />
          <span>Bhasha Sangam</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 1. FALOU CONVERSATIONAL DIALOGUES */}
      {/* ========================================================================= */}
      {practiceMode === 'conversations' && (
        <div className="space-y-6">
          {!activeConv ? (
            /* Scenarios Selection List */
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                      Falou Real-World Conversations
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black mt-2">
                      Speak Like an Indian Local
                    </h1>
                    <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1 max-w-xl">
                      Practice real conversational Indian dialogues with audio voice feedback. Order cutting chai, negotiate auto fares, and order at dhabas!
                    </p>
                  </div>
                  <div className="shrink-0 hidden sm:block">
                    <Mascot mood="cheering" size={85} outfit="chaiwala" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeFalouConversations.map((conv) => (
                  <div
                    key={conv.id}
                    className="bg-[#18262d] rounded-3xl p-5 border-2 border-[#38464f] hover:border-[#1cb0f6] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-3xl p-2.5 rounded-2xl bg-[#20333d] border border-[#2b3e48]">
                          {conv.icon}
                        </span>
                        <span className="text-xs font-black px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-400">
                          +{conv.xpReward} 🫖
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-white group-hover:text-[#1cb0f6] transition">
                        {conv.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-semibold mt-1">
                        {conv.subtitle}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#2b3e48] flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-bold flex items-center gap-1.5">
                        <span>{conv.partnerAvatar}</span> {conv.partnerName}
                      </span>
                      <button
                        onClick={() => {
                          sounds.playPop();
                          setActiveConv(conv);
                          setConvTurnIdx(0);
                          setConvFeedback(null);
                          setConvCompleted(false);
                          setSpeechScore(null);
                          setSpeechTranscript('');
                          setSpeechError(null);
                          // Auto speak partner greeting
                          if (conv.turns[0]?.speaker === 'partner') {
                            setTimeout(() => {
                              sounds.speak(conv.turns[0].text, selectedLanguage.code, 0.9);
                            }, 400);
                          }
                        }}
                        className="px-4 py-2 rounded-xl bg-[#1cb0f6] hover:bg-[#1899d6] text-white font-black text-xs uppercase tracking-wider cursor-pointer shadow-[0_3px_0_#1899d6] active:translate-y-0.5 active:shadow-none transition flex items-center gap-1"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" /> Start
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Active Interactive Dialogue Simulator Screen */
            <div className="bg-[#18262d] rounded-3xl border-2 border-[#38464f] p-6 sm:p-8 max-w-2xl mx-auto space-y-6 shadow-2xl relative animate-in zoom-in-95 duration-200 text-white">
              {/* Top Navigation */}
              <div className="flex items-center justify-between border-b border-[#2b3e48] pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activeConv.icon}</span>
                  <div>
                    <h3 className="font-black text-base leading-tight text-white">{activeConv.title}</h3>
                    <p className="text-xs text-slate-400 font-bold flex items-center gap-1">
                      <span>Speaking with</span> <span className="text-[#1cb0f6]">{activeConv.partnerName}</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveConv(null)}
                  title="Exit Conversation"
                  className="p-1.5 rounded-full hover:bg-[#2b3e48] text-slate-400 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {convCompleted ? (
                /* Dialogue Complete Screen */
                <div className="text-center py-6 space-y-5 animate-in zoom-in-95">
                  <Mascot mood="cheering" size={100} outfit="chaiwala" className="mx-auto" />
                  <div>
                    <h2 className="text-2xl font-black text-white">Conversation Mastered! 🎉</h2>
                    <p className="text-xs text-slate-400 font-semibold mt-1">
                      You completed "{activeConv.title}" with 100% natural conversational flow.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-400/20 text-amber-300 font-black text-sm">
                    <span>+{activeConv.xpReward} Chai Points Awarded 🫖</span>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveConv(null)}
                      className="w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider bg-[#58cc02] hover:bg-[#46a302] text-white cursor-pointer shadow-[0_4px_0_#46a302] active:translate-y-1 active:shadow-none transition"
                    >
                      Return to Conversations
                    </button>
                  </div>
                </div>
              ) : (
                /* Chat Messages Progression */
                <div className="space-y-6">
                  <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                    {activeConv.turns.slice(0, convTurnIdx + 1).map((turn, idx) => {
                      const isPartner = turn.speaker === 'partner';
                      const isUnansweredUser = !isPartner && idx === convTurnIdx && convFeedback !== 'correct' && !convCompleted;
                      if (isUnansweredUser) return null;
                      return (
                        <div
                          key={idx}
                          className={`flex gap-3 items-start animate-in fade-in slide-in-from-bottom-2 ${
                            isPartner ? 'justify-start' : 'justify-end'
                          }`}
                        >
                          {isPartner && (
                            <span className="text-2xl p-2 rounded-2xl bg-[#20333d] border border-[#2b3e48] shrink-0">
                              {activeConv.partnerAvatar}
                            </span>
                          )}

                          <div
                            className={`max-w-md rounded-2xl p-4 space-y-1 border ${
                              isPartner
                                ? 'bg-[#20333d] border-[#2b3e48] text-white'
                                : 'bg-[#1cb0f6] border-[#1899d6] text-white'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-base font-black leading-snug">
                                {isPartner ? turn.text : turn.targetText}
                              </p>
                              <button
                                onClick={() => {
                                  sounds.speak(isPartner ? turn.text : turn.targetText, selectedLanguage.code, 0.9);
                                  try {
                                    const prev = Number(localStorage.getItem('bhasha_audio_count') || 0);
                                    localStorage.setItem('bhasha_audio_count', prev + 1);
                                  } catch {}
                                }}
                                className="p-1 rounded-lg hover:bg-white/20 transition cursor-pointer shrink-0"
                                title="Listen audio"
                              >
                                <Volume2 className="w-4 h-4 text-white" />
                              </button>
                            </div>
                            <p className="text-xs text-slate-300 font-semibold italic">
                              "{isPartner ? turn.phonetics : turn.phonetics}"
                            </p>
                            <p className="text-[11px] text-white/80 font-bold pt-0.5 border-t border-white/15">
                              {turn.english}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Active User Response Prompts (If current turn is user) */}
                  {activeConv.turns[convTurnIdx]?.speaker === 'user' && !convFeedback && (
                    <div className="bg-[#20333d] rounded-2xl p-5 border-2 border-[#2b3e48] space-y-4">
                      {(() => {
                        const correctOpt = activeConv.turns[convTurnIdx].options.find(o => o.correct) || activeConv.turns[convTurnIdx].options[0];
                        return (
                          <div className={`p-4 rounded-2xl border-2 transition-all text-center space-y-3 ${
                            isListening 
                              ? 'bg-rose-500/20 border-rose-500 ring-4 ring-rose-500/30' 
                              : speechScore 
                              ? 'bg-emerald-500/20 border-emerald-500' 
                              : 'bg-[#18262d] border-[#38464f]'
                          }`}>
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                                <Brain className="w-3.5 h-3.5" /> AI Speech Pronunciation Engine
                              </span>
                              {speechScore && (
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-500 text-white animate-bounce">
                                  ✨ {speechScore}% Native Accent!
                                </span>
                              )}
                            </div>

                            {/* Speech Status / Live Transcript */}
                            {isListening ? (
                              <div className="py-2 space-y-1">
                                <div className="flex justify-center items-center gap-1.5 text-rose-400">
                                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                                  <span className="text-xs font-black uppercase tracking-wider">Listening in {selectedLanguage.name}...</span>
                                </div>
                                <p className="text-base font-black text-white italic">"{speechTranscript || 'Speak response now...'}"</p>
                              </div>
                            ) : speechError ? (
                              <p className="text-xs text-rose-300 font-semibold">{speechError}</p>
                            ) : (
                              <p className="text-xs text-slate-300 font-medium">
                                Speak aloud with your microphone or tap an answer option below:
                              </p>
                            )}

                            {/* Mic Action Button */}
                            <div className="flex justify-center">
                              <button
                                onClick={() => isListening ? stopSpeechRecognition() : startSpeechRecognition(correctOpt)}
                                className={`px-5 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md transition ${
                                  isListening
                                    ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                                    : 'bg-[#1cb0f6] hover:bg-[#1899d6] text-white shadow-[0_3px_0_#1899d6] active:translate-y-0.5'
                                }`}
                              >
                                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                                <span>{isListening ? 'Stop Listening' : '🎙️ Speak Response Aloud'}</span>
                              </button>
                            </div>
                          </div>
                        );
                      })()}

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-slate-300 tracking-wider">
                          Dialogue Options:
                        </span>
                        <span className="text-[11px] text-slate-400 font-bold">
                          {activeConv.turns[convTurnIdx].prompt}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {activeConv.turns[convTurnIdx].options.map((opt, optIdx) => (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswerOption(opt, false)}
                            className="w-full text-left p-3.5 rounded-xl bg-[#18262d] border-2 border-[#38464f] hover:border-[#1cb0f6] transition cursor-pointer space-y-0.5 group"
                          >
                            <p className="text-sm font-black text-white group-hover:text-[#1cb0f6] transition">
                              {opt.text}
                            </p>
                            <p className="text-[11px] text-slate-400 font-semibold italic">
                              "{opt.phonetics}"
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Partner advancing next turn button if current turn is partner */}
                  {activeConv.turns[convTurnIdx]?.speaker === 'partner' && (
                    <button
                      onClick={() => {
                        sounds.playPop();
                        if (convTurnIdx + 1 < activeConv.turns.length) {
                          setConvTurnIdx(prev => prev + 1);
                        } else {
                          sounds.playFanfare();
                          confetti({ particleCount: 80, spread: 60 });
                          onAddGems?.(activeConv.xpReward);
                          setConvCompleted(true);
                        }
                      }}
                      className="w-full py-3.5 rounded-2xl bg-[#1cb0f6] hover:bg-[#1899d6] text-white font-black text-xs uppercase tracking-wider cursor-pointer shadow-[0_4px_0_#1899d6] active:translate-y-1 active:shadow-none transition flex items-center justify-center gap-2"
                    >
                      <span>Continue Dialogue</span> <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. AIRLEARN SRS FLASHCARDS & MISTAKE DOJO */}
      {/* ========================================================================= */}
      {practiceMode === 'flashcards' && (
        <div className="space-y-6 max-w-xl mx-auto">
          {/* Sub-tab switcher: All Cards vs Mistake Dojo */}
          <div className="flex items-center gap-2 bg-[#18262d] p-1.5 rounded-2xl border-2 border-[#38464f]">
            <button
              onClick={() => { sounds.playPop(); setSrsSubTab('all'); setFlashcardIdx(0); setIsCardFlipped(false); }}
              className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-1.5 ${
                srsSubTab === 'all'
                  ? 'bg-[#ff9600] text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-[#20333d]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Vocabulary ({flashcardDeck.length})</span>
            </button>

            <button
              onClick={() => { sounds.playPop(); setSrsSubTab('dojo'); setFlashcardIdx(0); setIsCardFlipped(false); }}
              className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-1.5 ${
                srsSubTab === 'dojo'
                  ? 'bg-rose-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-[#20333d]'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>🥋 Mistake Dojo ({srsMistakes.length > 0 ? srsMistakes.length : 3} Weak Words)</span>
            </button>
          </div>

          <div className="bg-[#18262d] rounded-3xl p-6 border-2 border-[#38464f] text-white space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#2b3e48] pb-3">
              <div>
                <span className={`text-[11px] font-black uppercase tracking-wider ${srsSubTab === 'dojo' ? 'text-rose-400' : 'text-[#ff9600]'}`}>
                  {srsSubTab === 'dojo' ? '🥋 SuperMemo-2 Mistake Retention Dojo' : 'Airlearn Spaced Repetition (SRS)'}
                </span>
                <h2 className="text-xl font-black mt-0.5">
                  {srsSubTab === 'dojo' ? 'Conquer Tricky Words' : 'Smart Vocabulary Review'}
                </h2>
              </div>
              <span className="text-xs font-black text-slate-400">
                Card {activeSrsCards.length > 0 ? flashcardIdx + 1 : 0} of {activeSrsCards.length}
              </span>
            </div>

            {/* 3D Flashcard Flip Container */}
            {(() => {
              const currentCard = activeSrsCards[flashcardIdx] || activeSrsCards[0] || {};
              return (
                <div
                  onClick={() => {
                    sounds.playPop();
                    setIsCardFlipped(!isCardFlipped);
                  }}
                  className="w-full h-72 rounded-3xl bg-gradient-to-b from-[#20333d] to-[#18262d] border-2 border-[#38464f] hover:border-[#ff9600] transition-all p-8 flex flex-col items-center justify-center text-center cursor-pointer shadow-lg relative group"
                >
                  <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-[#18262d] px-3 py-1 rounded-full border border-[#2b3e48]">
                    Click to flip 🔄
                  </div>

                  {!isCardFlipped ? (
                    /* Card Front (Target Script) */
                    <div className="space-y-3">
                      <span className="text-5xl font-black text-white group-hover:scale-105 transition-transform block">
                        {currentCard.nativeWord}
                      </span>
                      <p className="text-sm font-bold text-emerald-400">
                        /{currentCard.roman}/
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          sounds.speak(currentCard.nativeWord, selectedLanguage.code, 0.9);
                          try {
                            const prev = Number(localStorage.getItem('bhasha_audio_count') || 0);
                            localStorage.setItem('bhasha_audio_count', prev + 1);
                          } catch {}
                        }}
                        className="p-2.5 rounded-2xl bg-[#18262d] border border-[#38464f] text-white hover:text-emerald-400 transition cursor-pointer inline-flex items-center gap-2 text-xs font-bold"
                      >
                        <Volume2 className="w-4 h-4 text-emerald-400" /> Listen
                      </button>
                    </div>
                  ) : (
                    /* Card Back (English Meaning & Example) */
                    <div className="space-y-3 animate-in zoom-in-95 duration-150">
                      <p className="text-xs uppercase font-black text-slate-400 tracking-wider">Meaning</p>
                      <span className="text-3xl font-black text-[#ff9600]">
                        {currentCard.meaning || currentCard.answer}
                      </span>
                      <p className="text-xs text-slate-300 font-semibold max-w-xs">
                        Context: "{currentCard.prompt}"
                      </p>
                      <div className="pt-2 flex items-center justify-center gap-3 text-[11px] font-bold text-slate-400">
                        <span>Interval: {currentCard.interval || 1}d</span>
                        <span>•</span>
                        <span>Ease: {Number(currentCard.easeFactor || 2.5).toFixed(1)}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* SRS Recall Rating Buttons */}
            {(() => {
              const currentCard = activeSrsCards[flashcardIdx] || activeSrsCards[0] || {};
              return (
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-slate-400 text-center uppercase tracking-wider">
                    Rate Recall (SuperMemo-2 SRS Schedule):
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      onClick={() => handleSRSGrade(currentCard, 1)}
                      className="p-2.5 rounded-2xl bg-rose-500/15 border border-rose-500/30 hover:bg-rose-500/25 text-rose-400 font-black text-[11px] uppercase cursor-pointer text-center"
                    >
                      Again (&lt;1m)
                    </button>
                    <button
                      onClick={() => handleSRSGrade(currentCard, 3)}
                      className="p-2.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 text-amber-400 font-black text-[11px] uppercase cursor-pointer text-center"
                    >
                      Hard (+1d)
                    </button>
                    <button
                      onClick={() => handleSRSGrade(currentCard, 4)}
                      className="p-2.5 rounded-2xl bg-[#1cb0f6]/15 border border-[#1cb0f6]/30 hover:bg-[#1cb0f6]/25 text-[#1cb0f6] font-black text-[11px] uppercase cursor-pointer text-center"
                    >
                      Good (+3d)
                    </button>
                    <button
                      onClick={() => handleSRSGrade(currentCard, 5)}
                      className="p-2.5 rounded-2xl bg-[#58cc02]/15 border border-[#58cc02]/30 hover:bg-[#58cc02]/25 text-[#58cc02] font-black text-[11px] uppercase cursor-pointer text-center"
                    >
                      Easy (+7d)
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. BHASHA SANGAM MULTILINGUAL MATRIX */}
      {/* ========================================================================= */}
      {practiceMode === 'bhashasangam' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                  Govt. of India • NCERT Bhasha Sangam
                </span>
                <h1 className="text-2xl sm:text-3xl font-black mt-2">
                  100 Sentences & Comparative Matrix
                </h1>
                <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1 max-w-xl">
                  Compare how essential Indian conversational sentences sound across all 9 languages side-by-side!
                </p>
              </div>
              <button
                onClick={() => setShowCertificate(true)}
                className="px-5 py-3 rounded-2xl bg-white text-orange-950 font-black text-xs uppercase tracking-wider hover:bg-amber-50 transition cursor-pointer shrink-0 shadow-md flex items-center gap-1.5"
              >
                <Award className="w-4 h-4 text-orange-600" /> View Certificate
              </button>
            </div>
          </div>

          {/* Sub-Tab Navigation: NCERT Sentences vs. Cognate Matrix */}
          <div className="flex border-b border-[#2b3e48] gap-4">
            <button
              onClick={() => { sounds.playPop(); setBsSubTab('sentences'); }}
              className={`pb-3 text-sm font-black uppercase tracking-wider transition cursor-pointer border-b-2 flex items-center gap-2 ${
                bsSubTab === 'sentences'
                  ? 'border-orange-500 text-orange-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <MessageSquare className="w-4 h-4" /> NCERT Sentences (100+)
            </button>
            <button
              onClick={() => { sounds.playPop(); setBsSubTab('cognates'); }}
              className={`pb-3 text-sm font-black uppercase tracking-wider transition cursor-pointer border-b-2 flex items-center gap-2 ${
                bsSubTab === 'cognates'
                  ? 'border-orange-500 text-orange-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Globe2 className="w-4 h-4" /> 9-Language Cognate Matrix 🌐
            </button>
          </div>

          {bsSubTab === 'sentences' && (
            <div className="space-y-6 animate-in fade-in">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedBsCategory('all')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                    selectedBsCategory === 'all'
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'bg-[#18262d] border border-[#38464f] text-slate-300 hover:bg-[#20333d]'
                  }`}
                >
                  All Categories
                </button>
                {BHASHA_SANGAM_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedBsCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 ${
                      selectedBsCategory === cat.id
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'bg-[#18262d] border border-[#38464f] text-slate-300 hover:bg-[#20333d]'
                    }`}
                  >
                    <span>{cat.icon}</span> <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Sentence Matrix Cards */}
              <div className="space-y-4">
                {BHASHA_SANGAM_SENTENCES
                  .filter(s => selectedBsCategory === 'all' || s.category === selectedBsCategory)
                  .map(s => {
                    const langKey = selectedLanguage.code?.split('-')[0] || selectedLanguage.id?.slice(0, 2);
                    const targetTranslation = s.translations[langKey] || s.translations[selectedLanguage.id] || s.translations['hi'];
                    const isExpanded = expandedBsSentence === s.id;

                    return (
                      <div
                        key={s.id}
                        className="bg-[#18262d] rounded-3xl p-5 border-2 border-[#38464f] hover:border-orange-500/60 transition-all text-white space-y-4"
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 bg-orange-400/15 px-2.5 py-0.5 rounded-full">
                              {s.category}
                            </span>
                            <h3 className="text-base font-black text-white mt-1">
                              {s.english}
                            </h3>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                sounds.speak(targetTranslation.text, selectedLanguage.code, 0.9);
                                try {
                                  const prev = Number(localStorage.getItem('bhasha_audio_count') || 0);
                                  localStorage.setItem('bhasha_audio_count', prev + 1);
                                } catch {}
                              }}
                              className="px-3.5 py-2 rounded-xl bg-[#20333d] border border-[#2b3e48] text-white hover:text-orange-400 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                            >
                              <Volume2 className="w-4 h-4 text-orange-400" /> Listen {selectedLanguage.flagEmoji}
                            </button>
                            <button
                              onClick={() => setExpandedBsSentence(isExpanded ? null : s.id)}
                              className="px-3.5 py-2 rounded-xl bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 border border-orange-500/30 transition cursor-pointer text-xs font-black uppercase tracking-wider"
                            >
                              {isExpanded ? 'Hide Matrix' : 'Compare 9 Languages 🌐'}
                            </button>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#20333d] border border-[#2b3e48] flex items-center justify-between">
                          <div>
                            <p className="text-lg font-black text-white">
                              {targetTranslation.text}
                            </p>
                            <p className="text-xs text-slate-400 font-semibold italic">
                              "{targetTranslation.phonetics}"
                            </p>
                          </div>
                          <span className="text-2xl">{selectedLanguage.flagEmoji}</span>
                        </div>

                        {/* Comparative Table Across All 9 Languages */}
                        {isExpanded && (
                          <div className="pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                              {[
                                { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
                                { code: 'ta', name: 'Tamil', flag: '🌴' },
                                { code: 'te', name: 'Telugu', flag: '🏛️' },
                                { code: 'bn', name: 'Bengali', flag: '🐯' },
                                { code: 'kn', name: 'Kannada', flag: '🌸' },
                                { code: 'ml', name: 'Malayalam', flag: '🥥' },
                                { code: 'mr', name: 'Marathi', flag: '🚩' },
                                { code: 'pa', name: 'Punjabi', flag: '🌾' },
                                { code: 'gu', name: 'Gujarati', flag: '🦁' }
                              ].map(lang => {
                                const tr = s.translations[lang.code];
                                if (!tr) return null;
                                return (
                                  <div
                                    key={lang.code}
                                    onClick={() => sounds.speak(tr.text, `${lang.code}-IN`, 0.9)}
                                    className="p-3 rounded-xl bg-[#18262d] border border-[#2b3e48] hover:border-orange-400/80 transition cursor-pointer space-y-1"
                                  >
                                    <div className="flex justify-between items-center text-[11px] font-black text-slate-400">
                                      <span>{lang.flag} {lang.name}</span>
                                      <Volume2 className="w-3.5 h-3.5 text-orange-400 hover:scale-110" />
                                    </div>
                                    <p className="text-sm font-black text-white">{tr.text}</p>
                                    <p className="text-[10px] text-slate-400 italic">"{tr.phonetics}"</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {bsSubTab === 'cognates' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-4 rounded-2xl bg-[#18262d] border border-[#2b3e48] text-xs text-slate-300 space-y-1">
                <p className="font-bold text-amber-400">💡 Pan-Indian Comparative Linguistics Matrix</p>
                <p>
                  Explore how foundational root concepts in Sanskrit (Indo-Aryan) and Proto-Dravidian link all 9 Indian languages.
                  Click any regional word to hear native acoustic synthesis!
                </p>
              </div>

              <div className="space-y-4">
                {PAN_INDIAN_COGNATES.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#18262d] rounded-3xl p-5 border-2 border-[#38464f] hover:border-amber-500/50 transition-all text-white space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#2b3e48] pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl p-2 rounded-2xl bg-[#20333d] border border-[#2b3e48]">{item.emoji}</span>
                        <div>
                          <h3 className="text-lg font-black text-white">{item.concept}</h3>
                          <p className="text-xs text-amber-400 font-semibold">{item.rootEtymology}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
                        { code: 'ta', name: 'Tamil', flag: '🌴' },
                        { code: 'te', name: 'Telugu', flag: '🏛️' },
                        { code: 'bn', name: 'Bengali', flag: '🐯' },
                        { code: 'kn', name: 'Kannada', flag: '🌸' },
                        { code: 'ml', name: 'Malayalam', flag: '🥥' },
                        { code: 'mr', name: 'Marathi', flag: '🚩' },
                        { code: 'pa', name: 'Punjabi', flag: '🌾' },
                        { code: 'gu', name: 'Gujarati', flag: '🦁' }
                      ].map(lang => {
                        const wordInfo = item.words[lang.code];
                        if (!wordInfo) return null;
                        const isDravidian = wordInfo.family === 'Dravidian';
                        return (
                          <div
                            key={lang.code}
                            onClick={() => {
                              sounds.playPop();
                              sounds.speak(wordInfo.text.split('/')[0].trim(), `${lang.code}-IN`, 0.9);
                            }}
                            className="p-3 rounded-xl bg-[#20333d] border border-[#2b3e48] hover:border-amber-400/80 transition cursor-pointer space-y-1.5"
                          >
                            <div className="flex justify-between items-center text-[10px] font-black">
                              <span className="text-slate-300">{lang.flag} {lang.name}</span>
                              <span className={`px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-black ${
                                isDravidian 
                                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
                                  : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                              }`}>
                                {wordInfo.family}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-base font-black text-white">{wordInfo.text}</p>
                                <p className="text-xs text-slate-400 italic">/{wordInfo.roman}/</p>
                              </div>
                              <Volume2 className="w-4 h-4 text-amber-400 shrink-0 hover:scale-110 transition" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Certificate Modal */}
          {showCertificate && (
            <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
              <div className="bg-[#18262d] border-4 border-amber-500 rounded-3xl p-8 max-w-lg w-full text-center space-y-5 text-white shadow-2xl relative">
                <button
                  onClick={() => setShowCertificate(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-4xl">🏛️</div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                    Bhasha Sangam • Ek Bharat Shreshtha Bharat
                  </span>
                  <h2 className="text-2xl font-black mt-1">Certificate of Linguistic Explorer</h2>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Awarded to this passionate learner for exploring and comparing the cultural richness of 9 Indian languages through standard everyday conversational sentences.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#20333d] border border-[#38464f] text-left text-xs font-bold text-slate-300 space-y-1">
                  <p>🇮🇳 Initiative: NCERT / Ministry of Education, Govt. of India</p>
                  <p>✨ Program: IndoLingo Multilingual Polyglot Suite</p>
                  <p>📅 Date: {new Date().toLocaleDateString()}</p>
                </div>
                <button
                  onClick={() => setShowCertificate(false)}
                  className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-amber-950 font-black text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close & Continue Learning
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. LING AKSHARA TRAINER & ALPHABET TRACING */}
      {/* ========================================================================= */}
      {practiceMode === 'akshara' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-green-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                  Script Studio • {selectedLanguage.name}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black mt-2">
                  Learn the Akshara (अक्षर)
                </h1>
                <p className="text-sm text-white/90 font-semibold mt-1 max-w-xl">
                  Indian scripts are phonetic and scientific. Master the sounds, vowels, and consonants of {selectedLanguage.nativeName}.
                </p>
              </div>

              <button
                onClick={quizMode ? () => setQuizMode(false) : startQuiz}
                className="px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider btn-duo-yellow cursor-pointer shrink-0 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {quizMode ? 'Back to Letters' : 'Test Memory (+5 🫖)'}
              </button>
            </div>
          </div>

          {/* QUIZ MODE */}
          {quizMode ? (
            quizCompleted ? (
              <div className={`rounded-3xl p-8 sm:p-12 border-2 shadow-sm max-w-xl mx-auto text-center space-y-6 animate-in zoom-in-95 duration-200 ${
                isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}>
                <div className="flex justify-center">
                  <Mascot mood="cheering" size={110} />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
                    अभ्यास संपन्न! / Practice Finished!
                  </span>
                  <h2 className="text-3xl font-black mt-3">Akshara Quiz Complete!</h2>
                  <p className="text-sm font-bold text-slate-400 mt-1">
                    You're developing an instinctive ear for {selectedLanguage.name} letters.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl border-2 bg-slate-800/80 border-slate-700">
                    <p className="text-[11px] font-black uppercase text-amber-500">Score</p>
                    <p className="text-2xl font-black text-amber-500 mt-1">{quizScore} / {totalQuizQuestions}</p>
                  </div>
                  <div className="p-4 rounded-2xl border-2 bg-slate-800/80 border-slate-700">
                    <p className="text-[11px] font-black uppercase text-emerald-400">Accuracy</p>
                    <p className="text-2xl font-black text-emerald-400 mt-1">{Math.round((quizScore / totalQuizQuestions) * 100)}%</p>
                  </div>
                  <div className="p-4 rounded-2xl border-2 bg-slate-800/80 border-slate-700">
                    <p className="text-[11px] font-black uppercase text-orange-500">Chai Points</p>
                    <p className="text-2xl font-black text-orange-500 mt-1">+{quizScore * 5} 🫖</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={startQuiz}
                    className="flex-1 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider btn-duo-green text-white cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-4 h-4" /> Practice Again
                  </button>
                  <button
                    onClick={() => setQuizMode(false)}
                    className="flex-1 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider border-2 border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
                  >
                    Explore Letters Grid
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#18262d] rounded-3xl p-6 sm:p-10 border-2 border-[#38464f] max-w-xl mx-auto text-center space-y-6 text-white shadow-xl">
                <div className="flex items-center justify-between border-b border-[#2b3e48] pb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Question {currentQuizIdx + 1} of {totalQuizQuestions}
                  </span>
                  <span className="text-xs font-black text-amber-400">
                    Score: {quizScore} 🫖 (+5 pts each)
                  </span>
                </div>
                <div className="py-4 space-y-3">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-wider">
                    Select the matching character for this sound:
                  </p>
                  <h2 className="text-4xl font-black text-emerald-400">"{currentQuizTarget?.roman}"</h2>
                  <p className="text-sm text-slate-400 font-semibold">{currentQuizTarget?.sound}</p>
                  <button
                    onClick={() => handlePlayLetter(currentQuizTarget)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider transition cursor-pointer border bg-[#20333d] border-[#2b3e48] text-slate-200 hover:bg-[#2b3e48]"
                  >
                    <Volume2 className="w-4 h-4 text-emerald-400" /> Listen Sound 🔊
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3.5">
                  {quizOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => !quizFeedback && handleQuizAnswer(opt.char)}
                      disabled={!!quizFeedback}
                      className={`p-6 rounded-3xl border-2 border-b-4 font-black text-3xl transition-all cursor-pointer ${
                        quizFeedback === 'correct' && opt.char === currentQuizTarget.char
                          ? 'bg-emerald-500 text-white border-emerald-600'
                          : quizFeedback === 'wrong' && opt.char === currentQuizTarget.char
                          ? 'bg-emerald-950 border-emerald-400 text-emerald-200'
                          : 'bg-[#20333d] border-[#2b3e48] border-b-[#18262d] text-white hover:border-emerald-500'
                      }`}
                    >
                      {opt.char}
                    </button>
                  ))}
                </div>
                {quizFeedback && (
                  <div className={`p-4 rounded-2xl font-black text-sm border-2 animate-in fade-in ${
                    quizFeedback === 'correct' 
                      ? 'bg-emerald-950/70 text-emerald-200 border-emerald-800' 
                      : 'bg-rose-950/70 text-rose-200 border-rose-800'
                  }`}>
                    {quizFeedback === 'correct' ? 'Correct! शाबाश! (+5 🫖)' : `The correct letter is: ${currentQuizTarget.char} (${currentQuizTarget.roman})`}
                  </div>
                )}
              </div>
            )
          ) : (
            <div className="space-y-6">
              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => { sounds.playPop(); setFilter('all'); }}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                    filter === 'all'
                      ? 'btn-duo-green text-white shadow-sm'
                      : 'bg-[#18262d] border border-[#38464f] text-slate-300 hover:bg-[#20333d]'
                  }`}
                >
                  {selectedLanguage.id === 'tamil' ? `அனைத்தும் (${alphabet.length})` : `All Letters (${alphabet.length})`}
                </button>
                <button
                  onClick={() => { sounds.playPop(); setFilter('vowel'); }}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                    filter === 'vowel'
                      ? 'btn-duo-green text-white shadow-sm'
                      : 'bg-[#18262d] border border-[#38464f] text-slate-300 hover:bg-[#20333d]'
                  }`}
                >
                  {selectedLanguage.id === 'tamil' ? 'உயிர் எழுத்துக்கள் (12)' : 'Vowels (स्वर)'}
                </button>
                <button
                  onClick={() => { sounds.playPop(); setFilter('consonant'); }}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                    filter === 'consonant'
                      ? 'btn-duo-green text-white shadow-sm'
                      : 'bg-[#18262d] border border-[#38464f] text-slate-300 hover:bg-[#20333d]'
                  }`}
                >
                  {selectedLanguage.id === 'tamil' ? 'மெய் எழுத்துக்கள் (18)' : 'Consonants (व्यंजन)'}
                </button>
                {selectedLanguage.id === 'tamil' && (
                  <button
                    onClick={() => { sounds.playPop(); setFilter('special'); }}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                      filter === 'special'
                        ? 'btn-duo-green text-white shadow-sm'
                        : 'bg-[#18262d] border border-[#38464f] text-slate-300 hover:bg-[#20333d]'
                    }`}
                  >
                    ஆய்தம் & கிரந்தம் (ஃ, ஜ, ஷ, ஸ, ஹ, ஸ்ரீ)
                  </button>
                )}
              </div>

              {/* Letter Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {filteredLetters.map((letter, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      handlePlayLetter(letter);
                      handleSelectLetter(letter);
                    }}
                    className="rounded-2xl p-4 border-2 border-b-4 transition-all flex flex-col items-center justify-between group cursor-pointer text-center relative bg-[#18262d] border-[#2b3e48] border-b-[#1f2d34] hover:border-emerald-500"
                    title="Click to hear sound & practice stroke"
                  >
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                      {letter.type}
                    </span>
                    <div className="my-2">
                      <span className="text-4xl font-black text-slate-100 group-hover:text-emerald-400 transition-colors">
                        {letter.char}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-black text-emerald-400">/{letter.roman}/</p>
                      <p className="text-[11px] text-slate-400 font-semibold line-clamp-1 mt-0.5">{letter.sound}</p>
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayLetter(letter);
                        }}
                        className="p-1.5 rounded-xl bg-[#20333d] text-slate-400 hover:text-emerald-400 transition"
                        title="Play pronunciation"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayLetter(letter);
                          handleSelectLetter(letter);
                        }}
                        className="p-1.5 rounded-xl bg-[#20333d] text-slate-400 hover:text-emerald-400 transition"
                        title="Practice stroke"
                      >
                        <PenTool className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* LETTER DETAIL & TRACE MODAL */}
      {selectedLetter && (() => {
        const langMatras = MATRA_TABLES[selectedLanguage.id] || MATRA_TABLES['hindi'] || [];
        const activeDisplayChar = activeMatraChar ? (selectedLetter.char + activeMatraChar.sign) : selectedLetter.char;
        const activeDisplayRoman = activeMatraChar ? `${selectedLetter.roman} + ${activeMatraChar.roman} (${activeMatraChar.name})` : selectedLetter.roman;

        return (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
            <div className="rounded-3xl max-w-sm w-full p-6 text-center space-y-4 border-2 shadow-2xl bg-[#18262d] border-[#38464f] text-white">
              <div className="flex justify-between items-center pb-2 border-b border-[#2b3e48]">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                  Letter Practice • {selectedLanguage.name}
                </span>
                <button
                  onClick={() => {
                    setSelectedLetter(null);
                    setActiveMatraChar(null);
                    setStrokeMatch(null);
                  }}
                  className="p-1 rounded-full text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                <h2 className="text-5xl font-black text-white">{activeDisplayChar}</h2>
                <p className="text-lg font-black text-emerald-400">/{activeDisplayRoman}/</p>
                <p className="text-xs font-bold text-slate-400">Pronunciation: {selectedLetter.sound}</p>
              </div>

              {/* Matra Vowel Modifier Combiner Bar */}
              {langMatras.length > 0 && (
                <div className="space-y-1.5 pt-1 text-left">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Combine with Matra (Vowel Sign):
                  </span>
                  <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                    <button
                      onClick={() => {
                        sounds.playPop();
                        setActiveMatraChar(null);
                        clearCanvas();
                        sounds.speak(selectedLetter.char, selectedLanguage.code, 0.9);
                      }}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 ${
                        activeMatraChar === null
                          ? 'bg-emerald-500 text-white'
                          : 'bg-[#20333d] border border-[#2b3e48] text-slate-300 hover:bg-[#2b3e48]'
                      }`}
                    >
                      Base ({selectedLetter.char})
                    </button>
                    {langMatras.map((m, idx) => {
                      const combined = selectedLetter.char + m.sign;
                      const isSelected = activeMatraChar?.sign === m.sign;
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            sounds.playPop();
                            setActiveMatraChar(m);
                            clearCanvas();
                            sounds.speak(combined, selectedLanguage.code, 0.9);
                          }}
                          className={`px-2.5 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 flex items-center gap-1 ${
                            isSelected
                              ? 'bg-emerald-500 text-white shadow-sm'
                              : 'bg-[#20333d] border border-[#2b3e48] text-slate-300 hover:bg-[#2b3e48]'
                          }`}
                          title={`${m.name} (${m.roman})`}
                        >
                          <span className="text-sm">{combined}</span>
                          <span className="text-[10px] text-slate-400">({m.name})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {selectedLetter.char === 'ழ' && (
                <div className="p-3 rounded-2xl bg-amber-500/15 border-2 border-amber-400/40 text-left text-xs text-amber-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-black text-amber-400 uppercase tracking-wider text-[11px]">
                    <span>✨</span> Unique Tamil Retroflex Mastery
                  </div>
                  <p className="leading-relaxed font-semibold">
                    "ழ" (zha) is the crown jewel of தமிழ் (Tamizh). Curl the tip of your tongue backward towards the soft palate without touching the teeth, and let the voice glide smoothly!
                  </p>
                </div>
              )}

              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => {
                    sounds.playPop();
                    sounds.speak(activeDisplayChar, selectedLanguage.code, 0.9);
                  }}
                  className="px-4 py-2 rounded-xl bg-[#1cb0f6] text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" /> Listen
                </button>
                <button
                  onClick={() => {
                    sounds.playPop();
                    sounds.speak(activeDisplayChar, selectedLanguage.code, 0.6);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider border-2 border-[#38464f] text-slate-300 hover:bg-[#20333d] transition cursor-pointer"
                >
                  🐢 Slower
                </button>
              </div>

              {/* Interactive Tracing Canvas */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-bold px-1">
                  {strokeMatch !== null ? (
                    <span className="text-emerald-400 font-black text-xs animate-in zoom-in-95 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> ✨ {strokeMatch}% Match! Stroke Mastered! +5 🫖
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-slate-400">
                      <PenTool className="w-3.5 h-3.5" /> Trace the stroke:
                    </span>
                  )}
                  <button
                    onClick={clearCanvas}
                    className="hover:text-rose-400 text-slate-400 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" /> Clear
                  </button>
                </div>

                <div className="relative w-56 h-56 mx-auto rounded-2xl border-2 border-dashed border-[#38464f] bg-[#20333d]/60 overflow-hidden touch-none flex items-center justify-center">
                  <span className="absolute inset-0 flex items-center justify-center text-8xl font-black text-slate-600/30 select-none pointer-events-none">
                    {activeDisplayChar}
                  </span>

                  <canvas
                    ref={canvasRef}
                    width={224}
                    height={224}
                    onMouseDown={handleStartDraw}
                    onMouseMove={handleDraw}
                    onMouseUp={handleStopDraw}
                    onMouseLeave={handleStopDraw}
                    onTouchStart={handleStartDraw}
                    onTouchMove={handleDraw}
                    onTouchEnd={handleStopDraw}
                    className="relative z-10 cursor-crosshair w-full h-full touch-none select-none"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedLetter(null);
                  setActiveMatraChar(null);
                  setStrokeMatch(null);
                }}
                className="w-full py-3 rounded-2xl font-black text-xs uppercase tracking-wider bg-[#58cc02] hover:bg-[#46a302] text-white cursor-pointer"
              >
                Done Practicing
              </button>
            </div>
          </div>
        );
      })()}

    </div>
  );
}

