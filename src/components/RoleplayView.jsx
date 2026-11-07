import React, { useState, useRef, useEffect, useMemo } from 'react';
import { MessageSquare, Mic, MicOff, Volume2, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';
import { FALOU_CONVERSATIONS, getFalouConversationsForLanguage } from '../data/languages';
import Mascot from './Mascot';

export default function RoleplayView({ selectedLanguage, onAddGems, theme = 'dark' }) {
  const isDark = theme === 'dark';

  const conversations = useMemo(() => {
    return getFalouConversationsForLanguage 
      ? getFalouConversationsForLanguage(selectedLanguage?.id) 
      : FALOU_CONVERSATIONS;
  }, [selectedLanguage?.id]);

  const [activeConv, setActiveConv] = useState(null);
  const [turnIdx, setTurnIdx] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong'
  const [convCompleted, setConvCompleted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechTranscript, setSpeechTranscript] = useState('');
  const [speechError, setSpeechError] = useState(null);
  const [cantSpeakNow, setCantSpeakNow] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch {}
      }
    };
  }, []);

  const handleStartConv = (conv) => {
    sounds.playPop();
    setActiveConv(conv);
    setTurnIdx(0);
    setFeedback(null);
    setConvCompleted(false);
    setSpeechTranscript('');
    setSpeechError(null);
    setCantSpeakNow(false);

    // Speak partner's opening line if partner starts
    if (conv.turns[0]?.speaker === 'partner') {
      setTimeout(() => {
        sounds.speak(conv.turns[0].text, selectedLanguage?.code || 'hi-IN', 0.9);
      }, 400);
    }
  };

  const handleCloseConv = () => {
    sounds.playPop();
    if (recognitionRef.current) {
      try { recognitionRef.current.abort(); } catch {}
    }
    setIsListening(false);
    setActiveConv(null);
  };

  const currentTurn = activeConv ? activeConv.turns[turnIdx] : null;

  // Web Speech Recognition for Real Spoken Audio
  const startSpeechRecognition = (_targetText) => {
    sounds.playPop();
    setSpeechError(null);
    setSpeechTranscript('');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setCantSpeakNow(true);
      setSpeechError('Microphone not supported on this browser. Tapping mode enabled!');
      return;
    }

    try {
      const rec = new SpeechRecognition();
      recognitionRef.current = rec;
      rec.lang = selectedLanguage?.code || 'hi-IN';
      rec.interimResults = false;
      rec.maxAlternatives = 3;

      rec.onstart = () => {
        setIsListening(true);
      };

      rec.onresult = (event) => {
        setIsListening(false);
        const transcript = event.results[0][0].transcript;
        setSpeechTranscript(transcript);
        if (transcript.length > 0) {
          handleAnswer(true);
        } else {
          handleAnswer(true);
        }
      };

      rec.onerror = (e) => {
        setIsListening(false);
        if (e.error !== 'no-speech') {
          setCantSpeakNow(true);
          setSpeechError('Microphone permission blocked or unavailable. Tap the answer to continue.');
        }
      };

      rec.onend = () => {
        setIsListening(false);
      };

      rec.start();
    } catch {
      setIsListening(false);
      setCantSpeakNow(true);
      setSpeechError('Microphone permission blocked. Tap mode enabled.');
    }
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch {}
      setIsListening(false);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      sounds.playCorrect();
      setFeedback('correct');

      setTimeout(() => {
        setFeedback(null);
        setSpeechTranscript('');
        const nextTurn = turnIdx + 1;
        if (nextTurn < activeConv.turns.length) {
          setTurnIdx(nextTurn);
          if (activeConv.turns[nextTurn]?.speaker === 'partner') {
            setTimeout(() => {
              sounds.speak(activeConv.turns[nextTurn].text, selectedLanguage?.code || 'hi-IN', 0.9);
            }, 300);
          }
        } else {
          sounds.playFanfare();
          confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
          setConvCompleted(true);
          onAddGems?.(activeConv.xpReward || 20);
        }
      }, 1200);
    } else {
      sounds.playWrong();
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 1200);
    }
  };

  // Active Roleplay Session View
  if (activeConv) {
    return (
      <div className={`fixed inset-0 z-50 flex flex-col justify-between select-none ${
        isDark ? 'bg-[#131f24] text-white' : 'bg-white text-slate-800'
      }`}>
        {/* Top Header */}
        <div className={`max-w-2xl w-full mx-auto px-4 py-4 flex items-center justify-between gap-4 ${
          isDark ? 'border-b border-[#2b3e48]' : 'border-b border-slate-100'
        }`}>
          <button
            onClick={handleCloseConv}
            className="p-2 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          <div className="flex-1 h-3.5 bg-slate-200 dark:bg-[#20333d] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1cb0f6] transition-all duration-300 rounded-full"
              style={{ width: `${((turnIdx + 1) / activeConv.turns.length) * 100}%` }}
            />
          </div>

          <span className="text-xs font-black text-[#1cb0f6] bg-[#1cb0f6]/10 px-3 py-1 rounded-full">
            +{activeConv.xpReward || 20} XP
          </span>
        </div>

        {/* Chat Stream Body */}
        <div className="max-w-xl w-full mx-auto flex-1 px-4 py-6 overflow-y-auto space-y-4">
          <div className="text-center pb-2">
            <span className="text-3xl">{activeConv.icon}</span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white mt-1">
              {activeConv.title}
            </h2>
            <p className="text-xs font-semibold text-slate-400">
              Conversation with {activeConv.partnerName} ({activeConv.partnerRole})
            </p>
          </div>

          {activeConv.turns.slice(0, turnIdx + 1).map((turn, idx) => {
            const isPartner = turn.speaker === 'partner';

            return (
              <div
                key={idx}
                className={`flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                  isPartner ? 'justify-start' : 'justify-end flex-row-reverse'
                }`}
              >
                <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-[#20333d] border border-slate-200 dark:border-[#2b3e48] flex items-center justify-center text-xl shrink-0">
                  {isPartner ? (activeConv.partnerAvatar || '👤') : '🎯'}
                </div>

                <div className={`max-w-[80%] p-4 rounded-3xl border-2 space-y-1 ${
                  isPartner
                    ? isDark ? 'bg-[#18262d] border-[#38464f] text-white rounded-tl-none' : 'bg-white border-slate-200 text-slate-800 shadow-sm rounded-tl-none'
                    : 'bg-[#1cb0f6] border-[#1cb0f6] text-white rounded-tr-none'
                }`}>
                  <p className="text-base sm:text-lg font-bold leading-relaxed">
                    {turn.text}
                  </p>
                  {turn.roman && (
                    <p className={`text-xs font-semibold ${isPartner ? 'text-[#1cb0f6]' : 'text-white/90'}`}>
                      {turn.roman}
                    </p>
                  )}
                  {turn.english && (
                    <p className={`text-xs font-medium ${isPartner ? 'text-slate-400' : 'text-white/80'}`}>
                      "{turn.english}"
                    </p>
                  )}
                </div>

                {isPartner && (
                  <button
                    onClick={() => sounds.speak(turn.text, selectedLanguage?.code || 'hi-IN')}
                    className="p-2 rounded-xl text-slate-400 hover:text-[#1cb0f6] transition cursor-pointer self-center"
                    title="Replay Audio"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            );
          })}

          {convCompleted && (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-300">
              <div className="flex justify-center">
                <Mascot mood="cheering" size={120} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Dialogue Completed!
              </h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                You successfully held a conversation in {selectedLanguage.name}!
              </p>
              <button
                onClick={handleCloseConv}
                className="px-8 py-3.5 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] text-white font-black text-sm uppercase tracking-wider shadow-[0_4px_0_#46a302] cursor-pointer"
              >
                CLAIM +{activeConv.xpReward || 20} XP
              </button>
            </div>
          )}
        </div>

        {/* Bottom Interactive Spoken Input Bar */}
        {!convCompleted && currentTurn && currentTurn.speaker === 'user' && (
          <div className={`w-full border-t p-4 sm:p-5 ${
            feedback === 'correct'
              ? 'bg-[#58cc02]/20 border-[#58cc02]'
              : feedback === 'wrong'
              ? 'bg-[#ff4b4b]/20 border-[#ff4b4b]'
              : isDark ? 'bg-[#18262d] border-[#2b3e48]' : 'bg-white border-slate-200'
          }`}>
            <div className="max-w-xl mx-auto space-y-4">
              <div className="text-center">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Your Turn to Respond:
                </span>
                <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-0.5">
                  Say: "{currentTurn.text}"
                </p>
                {currentTurn.roman && (
                  <p className="text-xs font-bold text-[#1cb0f6]">
                    Phonetics: {currentTurn.roman}
                  </p>
                )}
              </div>

              {speechTranscript && (
                <div className="p-3 rounded-2xl bg-[#20333d] border border-[#2b3e48] text-center text-xs font-semibold text-emerald-400 animate-in fade-in">
                  Heard: "{speechTranscript}"
                </div>
              )}

              {/* Action Buttons: Tap Mic or Tap Answer */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {!cantSpeakNow ? (
                  <button
                    onClick={() => {
                      if (isListening) {
                        stopSpeechRecognition();
                      } else {
                        startSpeechRecognition(currentTurn.text);
                      }
                    }}
                    className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition shadow-lg cursor-pointer ${
                      isListening
                        ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse ring-4 ring-rose-500/30'
                        : 'bg-[#1cb0f6] hover:bg-[#1899d6] text-white shadow-[0_4px_0_#127aa8]'
                    }`}
                  >
                    {isListening ? (
                      <>
                        <MicOff className="w-5 h-5" />
                        <span>LISTENING... (TAP TO STOP)</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-5 h-5" />
                        <span>TAP TO SPEAK</span>
                      </>
                    )}
                  </button>
                ) : null}

                {/* Tap to respond fallback */}
                <button
                  onClick={() => handleAnswer(true)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-200 dark:bg-[#20333d] hover:bg-slate-300 dark:hover:bg-[#2b3e48] text-slate-700 dark:text-slate-200 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  {cantSpeakNow ? 'TAP TO SAY: ' + currentTurn.text : "CAN'T SPEAK NOW"}
                </button>
              </div>

              {speechError && (
                <p className="text-center text-[11px] font-bold text-amber-400">
                  {speechError}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="h-2" />
      </div>
    );
  }

  // Conversation Shelf / Overview
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 select-none">
      {/* Duolingo Roleplay Header */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur flex items-center gap-1.5 w-fit">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Spoken Roleplays • {selectedLanguage.name}</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              Conversations in the Real World
            </h1>
            <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1 max-w-xl">
              Practice practical Indian spoken dialogues with native audio and voice recognition. Order food, negotiate auto fares, and greet locals!
            </p>
          </div>

          <div className="shrink-0 hidden sm:block">
            <Mascot mood="happy" size={85} outfit="chaiwala" />
          </div>
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className={`rounded-3xl p-5 border-2 transition-all flex flex-col justify-between group ${
              isDark 
                ? 'bg-[#18262d] border-[#38464f] hover:border-[#1cb0f6]' 
                : 'bg-white border-slate-200 hover:border-emerald-400 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl p-3 rounded-2xl bg-slate-100 dark:bg-[#20333d] border border-slate-200 dark:border-[#2b3e48]">
                  {conv.icon}
                </span>

                <span className="text-xs font-black px-2.5 py-1 rounded-full bg-cyan-500/20 text-[#1cb0f6]">
                  +{conv.xpReward || 20} XP
                </span>
              </div>

              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                {conv.partnerName} • {conv.partnerRole}
              </span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#1cb0f6] transition mt-0.5">
                {conv.title}
              </h3>
              <p className="text-xs text-slate-400 font-semibold mt-1 leading-relaxed">
                {conv.subtitle}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-[#2b3e48]">
              <button
                onClick={() => handleStartConv(conv)}
                className="w-full py-3 rounded-2xl bg-[#1cb0f6] hover:bg-[#1899d6] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_3px_0_#127aa8] active:translate-y-1 transition cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>START CONVERSATION</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
