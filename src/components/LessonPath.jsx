import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Printer, 
  CheckCircle2, 
  Check, 
  Star, 
  Headphones, 
  Trophy, 
  BookOpen, 
  X, 
  ChevronDown,
  Lock,
  Unlock
} from 'lucide-react';
import Mascot from './Mascot';
import { sounds } from '../utils/audio';
import { LIFETIME_DIPLOMAS } from '../data/diplomas';

function DuolingoChestGraphic({ isClaimed, _isUnitCompleted }) {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12 shrink-0 drop-shadow-md">
      <rect x="8" y="24" width="48" height="32" rx="6" fill={isClaimed ? "#38464f" : "#d97706"} stroke={isClaimed ? "#202f36" : "#92400e"} strokeWidth="2" />
      <line x1="8" y1="38" x2="56" y2="38" stroke={isClaimed ? "#202f36" : "#b45309"} strokeWidth="2" />
      <rect x="18" y="24" width="6" height="32" fill={isClaimed ? "#4a5568" : "#fbbf24"} stroke={isClaimed ? "#2d3748" : "#d97706"} strokeWidth="1.5" />
      <rect x="40" y="24" width="6" height="32" fill={isClaimed ? "#4a5568" : "#fbbf24"} stroke={isClaimed ? "#2d3748" : "#d97706"} strokeWidth="1.5" />
      <path d="M6 24 C6 14 58 14 58 24 Z" fill={isClaimed ? "#4a5568" : "#f59e0b"} stroke={isClaimed ? "#202f36" : "#92400e"} strokeWidth="2" />
      <path d="M18 16 C20 14 24 14 24 24 L18 24 Z" fill={isClaimed ? "#2d3748" : "#fbbf24"} />
      <path d="M40 16 C42 14 46 14 46 24 L40 24 Z" fill={isClaimed ? "#2d3748" : "#fbbf24"} />
      <rect x="28" y="22" width="8" height="10" rx="2" fill={isClaimed ? "#718096" : "#fef08a"} stroke={isClaimed ? "#2d3748" : "#ca8a04"} strokeWidth="1.5" />
      <circle cx="32" cy="26" r="1.5" fill="#1a202c" />
      <line x1="32" y1="26" x2="32" y2="29" stroke="#1a202c" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function LessonPath({
  selectedLanguage,
  completedLessons = {},
  onStartLesson,
  _onUnlockUpToLesson,
  onClaimChest,
  onOpenGuidebook,
  equippedOutfit = 'default',
  _theme = 'dark'
}) {
  // Active selected node popover state: { lesson, unit }
  const [selectedNode, setSelectedNode] = useState(null);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showGraduationModal, setShowGraduationModal] = useState(false);
  const [freeStudyMode, setFreeStudyMode] = useState(() => {
    return localStorage.getItem('bhasha_free_study_mode') === 'true';
  });

  const toggleFreeStudyMode = () => {
    sounds.playPop();
    setFreeStudyMode(prev => {
      const next = !prev;
      localStorage.setItem('bhasha_free_study_mode', String(next));
      return next;
    });
  };

  const scrollToUnit = (unitId) => {
    sounds.playPop();
    const el = document.getElementById(`unit-banner-${unitId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const courseLessons = selectedLanguage.units?.flatMap(u => u.lessons || []) || [];
  const completedCourseLessonsCount = courseLessons.filter(l => completedLessons[l.id]).length;
  const isCourseGraduated = completedCourseLessonsCount >= Math.min(courseLessons.length, 8);
  const activeDiploma = LIFETIME_DIPLOMAS[selectedLanguage.id] || LIFETIME_DIPLOMAS.hindi;

  // Click outside to dismiss popover without blocking page scroll
  React.useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!isDismissed || selectedNode) {
        if (!e.target.closest('.lesson-popover-card') && !e.target.closest('.lesson-node-btn')) {
          setSelectedNode(null);
          setIsDismissed(true);
        }
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [selectedNode, isDismissed]);

  const handleDismissPopover = () => {
    sounds.playPop();
    setSelectedNode(null);
    setIsDismissed(true);
  };

  const handleNodeClick = (lesson, unit) => {
    sounds.playPop();
    const isCompleted = !!completedLessons[lesson.id];
    const unitLessons = unit.lessons || [];
    const lessonIdx = unitLessons.findIndex(l => l.id === lesson.id);
    const unitIdx = selectedLanguage.units.findIndex(u => u.id === unit.id);
    const isPrevCompleted = lessonIdx === 0 
      ? (unitIdx === 0 || !!completedLessons[selectedLanguage.units[unitIdx - 1]?.lessons?.slice(-1)[0]?.id])
      : !!completedLessons[unitLessons[lessonIdx - 1]?.id];
    const isCurrent = !isCompleted && isPrevCompleted;

    const isThisPopoverOpen = selectedNode 
      ? selectedNode.lesson.id === lesson.id 
      : (!isDismissed && isCurrent);

    // If popover is already open, start lesson! Otherwise toggle popover.
    if (isThisPopoverOpen) {
      setSelectedNode(null);
      setIsDismissed(false);
      onStartLesson(lesson, unit);
    } else {
      setIsDismissed(false);
      setSelectedNode({ lesson, unit });
    }
  };

  const scrollToActiveNode = () => {
    sounds.playPop();
    const el = document.getElementById('active-lesson-node');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const _scrollToTop = () => {
    sounds.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 pb-32 max-w-xl mx-auto select-none relative w-full">
      {/* Duolingo Compact Course Progress & Quick Jump Bar (Tablet / Desktop only) */}
      <div className="hidden sm:flex flex-row items-center justify-between gap-2.5 px-1 py-1 mb-2">
        {/* Quick Unit Jump Navigator Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto py-0.5">
          {selectedLanguage.units.map((u, i) => (
            <button
              key={u.id}
              onClick={() => scrollToUnit(u.id)}
              className="px-3 py-1.5 rounded-xl bg-[#18262d] hover:bg-[#20333d] border border-[#2b3e48] hover:border-[#1cb0f6] text-xs font-black text-slate-300 hover:text-white transition whitespace-nowrap cursor-pointer shrink-0 shadow-sm"
            >
              Unit {i + 1}
            </button>
          ))}
        </div>

        {/* Free Study Mode Toggle Pill */}
        <button
          onClick={toggleFreeStudyMode}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm shrink-0 ${
            freeStudyMode
              ? 'bg-amber-500/20 border-amber-400 text-amber-300 ring-2 ring-amber-400/20'
              : 'bg-[#18262d] border-[#2b3e48] text-slate-400 hover:text-slate-200'
          }`}
          title="Toggle between sequential unlock and free exploration"
        >
          {freeStudyMode ? <Unlock className="w-3.5 h-3.5 text-amber-400" /> : <Lock className="w-3.5 h-3.5 text-slate-400" />}
          <span>{freeStudyMode ? 'Free Study' : 'Sequential'}</span>
        </button>
      </div>

      {selectedLanguage.units.map((unit, unitIdx) => {
        const unitLessons = unit.lessons || [];
        const completedCount = unitLessons.filter(l => completedLessons[l.id]).length;
        const isUnitCompleted = completedCount === unitLessons.length && unitLessons.length > 0;

        // Authentic Duolingo Unit Color Palettes (Vibrant, Cheerful, Screenshot Matched):
        // Unit 1: Classic Green (#58cc02), Unit 2: Lavender/Purple (#a855f7 - exact match to user screenshot!), Unit 3: Cyan (#1cb0f6), Unit 4: Orange (#ff9600)
        const bannerColorSets = [
          { 
            bg: 'bg-[#58cc02]', 
            border: 'border-[#46a302]', 
            text: 'text-[#58cc02]', 
            activeNodeBg: 'bg-[#58cc02] border-[#46a302]', 
            shadowColor: '#3c8b00', 
            btnText: 'text-[#58cc02]',
            hex: '#58cc02',
            name: 'green' 
          },
          { 
            bg: 'bg-[#a855f7]', 
            border: 'border-[#9333ea]', 
            text: 'text-[#a855f7]', 
            activeNodeBg: 'bg-[#a855f7] border-[#9333ea]', 
            shadowColor: '#7e22ce', 
            btnText: 'text-[#a855f7]',
            hex: '#a855f7',
            name: 'purple' 
          },
          { 
            bg: 'bg-[#1cb0f6]', 
            border: 'border-[#1899d6]', 
            text: 'text-[#1cb0f6]', 
            activeNodeBg: 'bg-[#1cb0f6] border-[#1899d6]', 
            shadowColor: '#0e75a7', 
            btnText: 'text-[#1cb0f6]',
            hex: '#1cb0f6',
            name: 'blue' 
          },
          { 
            bg: 'bg-[#ff9600]', 
            border: 'border-[#e08500]', 
            text: 'text-[#ff9600]', 
            activeNodeBg: 'bg-[#ff9600] border-[#e08500]', 
            shadowColor: '#b86d00', 
            btnText: 'text-[#ff9600]',
            hex: '#ff9600',
            name: 'orange' 
          },
          { 
            bg: 'bg-[#ff4b4b]', 
            border: 'border-[#ea2b2b]', 
            text: 'text-[#ff4b4b]', 
            activeNodeBg: 'bg-[#ff4b4b] border-[#ea2b2b]', 
            shadowColor: '#c51f1f', 
            btnText: 'text-[#ff4b4b]',
            hex: '#ff4b4b',
            name: 'red' 
          },
          { 
            bg: 'bg-[#00cd9c]', 
            border: 'border-[#00a880]', 
            text: 'text-[#00cd9c]', 
            activeNodeBg: 'bg-[#00cd9c] border-[#00a880]', 
            shadowColor: '#008263', 
            btnText: 'text-[#00cd9c]',
            hex: '#00cd9c',
            name: 'teal' 
          },
          { 
            bg: 'bg-[#6366f1]', 
            border: 'border-[#4f46e5]', 
            text: 'text-[#6366f1]', 
            activeNodeBg: 'bg-[#6366f1] border-[#4f46e5]', 
            shadowColor: '#3730a3', 
            btnText: 'text-[#6366f1]',
            hex: '#6366f1',
            name: 'indigo' 
          },
          { 
            bg: 'bg-[#ec4899]', 
            border: 'border-[#db2777]', 
            text: 'text-[#ec4899]', 
            activeNodeBg: 'bg-[#ec4899] border-[#db2777]', 
            shadowColor: '#be185d', 
            btnText: 'text-[#ec4899]',
            hex: '#ec4899',
            name: 'pink' 
          }
        ];
        const unitTheme = bannerColorSets[unitIdx % bannerColorSets.length];

        return (
          <div key={unit.id} id={`unit-banner-${unit.id}`} className="relative scroll-mt-24">
            {/* Duolingo Unit Header Banner (Exact Match to Screenshot) */}
            <div className={`rounded-3xl p-4 sm:p-5 text-white shadow-xl relative overflow-hidden transition-all w-full max-w-full ${unitTheme.bg} flex items-center justify-between`}>
              <div className="min-w-0 pr-4">
                <p className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white/80">
                  SECTION {Math.floor(unitIdx / 3) + 1}, UNIT {unitIdx + 1}
                </p>
                <h2 className="text-lg sm:text-xl font-black mt-0.5 leading-snug break-words">
                  {unit.title.includes(':') ? unit.title.split(':')[1].trim() : unit.title}
                </h2>
              </div>

              {/* Guidebook Notebook Button with Vertical Divider (Screenshot Match) */}
              <div className="flex items-center pl-4 border-l border-white/20 shrink-0">
                <button
                  onClick={() => {
                    sounds.playPop();
                    onOpenGuidebook(unit);
                  }}
                  className="p-2 sm:p-2.5 rounded-2xl hover:bg-white/15 transition cursor-pointer flex items-center justify-center text-white active:scale-95"
                  title="Open Unit Guidebook"
                >
                  <BookOpen className="w-6 h-6 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Stepping Stones Path */}
            <div className={`py-10 relative flex flex-col items-center gap-7 w-full overflow-visible ${selectedNode?.unit.id === unit.id ? 'z-50' : 'z-20'}`}>
              {unitLessons.map((lesson, lessonIdx) => {
                const isCompleted = !!completedLessons[lesson.id];
                const isPrevCompleted = lessonIdx === 0 
                  ? (unitIdx === 0 || !!completedLessons[selectedLanguage.units[unitIdx - 1]?.lessons?.slice(-1)[0]?.id])
                  : !!completedLessons[unitLessons[lessonIdx - 1]?.id];
                
                const isCurrent = !isCompleted && isPrevCompleted;
                const isStrictLocked = !isCompleted && !isPrevCompleted;
                const isLocked = !freeStudyMode && isStrictLocked;

                // S-curve winding offsets: 0, -42px, 0, 42px
                const offsets = ['translate-x-0', '-translate-x-12 sm:-translate-x-16', 'translate-x-0', 'translate-x-12 sm:translate-x-16'];
                const offsetClass = offsets[lessonIdx % 4];

                const isPopoverOpen = selectedNode 
                  ? selectedNode.lesson.id === lesson.id 
                  : (!isDismissed && isCurrent);

                // Counter-offset on mobile so popover is always centered on screen and never bleeds outside app frame
                const popoverCounterOffset = (lessonIdx % 4 === 1)
                  ? 'translate-x-12 sm:translate-x-0'
                  : (lessonIdx % 4 === 3)
                  ? '-translate-x-12 sm:translate-x-0'
                  : '';

                const horizontalAlign = 'left-1/2 -translate-x-1/2';

                const arrowAlign = (lessonIdx % 4 === 1)
                  ? '-translate-x-10 sm:mx-auto'
                  : (lessonIdx % 4 === 3)
                  ? 'translate-x-10 sm:mx-auto'
                  : 'mx-auto';

                // Dynamic icon based on lesson type & index
                const isExam = lessonIdx === unitLessons.length - 1;
                const isListening = lessonIdx % 3 === 1;
                const isReading = lessonIdx % 3 === 2;

                return (
                  <div 
                    key={lesson.id} 
                    className={`relative flex items-center justify-center transition-transform ${offsetClass} ${isPopoverOpen ? 'z-50' : 'z-20'}`}
                  >
                    {/* Left Quest Avatar Badge (Exact Match to Duolingo App Screenshot) */}
                    {lessonIdx === 0 && (
                      <div className="absolute -left-20 sm:-left-28 top-0 z-10 flex flex-col items-center select-none">
                        <div className="p-1 sm:p-1.5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-700 border-2 border-indigo-300 shadow-xl flex flex-col items-center animate-bounce-subtle cursor-pointer hover:scale-105 transition">
                          <span className="text-xl sm:text-2xl">🧙‍♀️</span>
                          <span className="text-[8px] sm:text-[9px] font-black uppercase text-white bg-indigo-950/90 px-1 sm:px-1.5 py-0.5 rounded-full mt-0.5 shadow-sm">
                            20 days
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Right Companion Mascot Silhouette (Exact Match to Duolingo App Screenshot) */}
                    {lessonIdx === 2 && (
                      <div className="absolute -right-20 sm:-right-28 top-0 z-10 flex flex-col items-center select-none opacity-50 hover:opacity-90 transition">
                        <div className="relative">
                          <Mascot mood="idle" size={54} outfit={equippedOutfit} />
                        </div>
                        <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 text-slate-500 text-[10px] sm:text-xs">
                          <span>★</span><span>★</span><span>★</span>
                        </div>
                      </div>
                    )}

                    {/* Milestone 3D Node Button Container */}
                    <div 
                      id={isCurrent ? 'active-lesson-node' : undefined}
                      className={`relative flex flex-col items-center justify-center ${isPopoverOpen ? 'z-50' : ''}`}
                    >
                      
                      {/* Floating Duolingo START Bubble */}
                      {isCurrent && !isPopoverOpen && (
                        <div className="absolute -top-11 z-30 animate-bounce flex flex-col items-center pointer-events-none">
                          <div className={`px-3 py-1 rounded-xl ${unitTheme.bg} text-white font-black text-xs uppercase tracking-wider shadow-md`}>
                            START
                          </div>
                          <div className={`w-2.5 h-2.5 ${unitTheme.bg} rotate-45 -mt-1 shadow-sm`} />
                        </div>
                      )}

                      {/* Duolingo Segmented Progress Capsule Orbit Ring (Screenshot Match) */}
                      {isCurrent && (
                        <svg className="absolute -inset-3.5 w-[calc(100%+28px)] h-[calc(100%+28px)] pointer-events-none -rotate-90 z-10" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="44"
                            fill="none"
                            stroke="rgba(255,255,255,0.15)"
                            strokeWidth="6"
                            strokeDasharray="48 21"
                            strokeLinecap="round"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="44"
                            fill="none"
                            stroke={unitTheme.hex}
                            strokeWidth="6"
                            strokeDasharray="48 21"
                            strokeDashoffset="0"
                            strokeLinecap="round"
                            className="drop-shadow-sm"
                          />
                        </svg>
                      )}

                      {/* 3D Duolingo Tactile Stepping Stone Button (Screenshot Match) */}
                      <button
                        onClick={() => handleNodeClick(lesson, unit)}
                        className={`lesson-node-btn rounded-full flex flex-col items-center justify-center font-black transition-all cursor-pointer relative z-20 ${
                          isCurrent
                            ? `w-20 h-20 sm:w-22 sm:h-22 ${unitTheme.bg} text-white shadow-[0_8px_0_rgba(0,0,0,0.35)] hover:brightness-110 active:translate-y-2 active:shadow-[0_2px_0_rgba(0,0,0,0.35)]`
                            : isCompleted
                            ? `w-18 h-18 sm:w-20 sm:h-20 ${unitTheme.bg} text-white shadow-[0_7px_0_rgba(0,0,0,0.3)] hover:brightness-110 active:translate-y-1.5 active:shadow-[0_2px_0_rgba(0,0,0,0.3)]`
                            : freeStudyMode
                            ? `w-18 h-18 sm:w-20 sm:h-20 ${unitTheme.bg} text-white shadow-[0_7px_0_rgba(0,0,0,0.3)] hover:brightness-110 active:translate-y-1.5`
                            : `w-18 h-18 sm:w-20 sm:h-20 ${unitTheme.bg} opacity-85 hover:opacity-100 text-white shadow-[0_7px_0_rgba(0,0,0,0.3)] hover:brightness-110 active:translate-y-1.5`
                        }`}
                        title={`${lesson.title} ${isLocked ? '(Click to unlock or study)' : ''}`}
                      >
                        {isCompleted ? (
                          <Check className="w-8 h-8 stroke-[4]" />
                        ) : isCurrent ? (
                          isExam ? (
                            <Trophy className="w-9 h-9 stroke-[2.5]" />
                          ) : isListening ? (
                            <Headphones className="w-9 h-9 stroke-[2.5]" />
                          ) : (
                            <Star className="w-9 h-9 fill-white stroke-[2.5]" />
                          )
                        ) : isListening ? (
                          <Headphones className="w-7 h-7 stroke-[2]" />
                        ) : isExam ? (
                          <Trophy className="w-7 h-7 stroke-[2]" />
                        ) : isReading ? (
                          <BookOpen className="w-7 h-7 stroke-[2]" />
                        ) : (
                          <Star className="w-7 h-7 stroke-[2]" />
                        )}
                      </button>

                      {/* Iconic Duolingo Lesson Popover Card (Screenshot Match) */}
                      {isPopoverOpen && (
                        <div className={`lesson-popover-card absolute top-full mt-3 ${horizontalAlign} ${popoverCounterOffset} z-50 w-[min(calc(100vw-2rem),21rem)] sm:w-84 animate-in zoom-in-95 duration-150`}>
                          {/* Top arrow pointing directly to the node */}
                          <div className={`w-4 h-4 ${unitTheme.bg} rotate-45 ${arrowAlign} -mb-2 shadow-sm relative z-30`} />

                          <div className={`${unitTheme.bg} text-white rounded-3xl p-5 sm:p-6 shadow-2xl relative z-20 space-y-3.5`}>
                            {/* Close button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDismissPopover();
                              }}
                              className="absolute top-4 right-4 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition cursor-pointer"
                              title="Close"
                            >
                              <X className="w-4 h-4" />
                            </button>

                            <div>
                              <h3 className="text-base sm:text-lg font-black leading-snug text-white pr-6">
                                {lesson.title}
                              </h3>
                              <p className="text-xs sm:text-sm font-bold text-white/80 mt-1">
                                Lesson {lessonIdx + 1} of {unitLessons.length}
                              </p>
                            </div>

                            {/* Massive Chunky 3D White Button (Screenshot Match) */}
                            <button
                              onClick={() => {
                                setSelectedNode(null);
                                onStartLesson(lesson, unit);
                              }}
                              className={`w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-white hover:bg-slate-50 font-black text-sm sm:text-base uppercase tracking-wider ${unitTheme.btnText} shadow-[0_5px_0_rgba(0,0,0,0.18)] active:translate-y-1 active:shadow-none transition cursor-pointer flex items-center justify-center gap-2`}
                            >
                              <span>{isCompleted ? 'PRACTICE +10 XP' : `CONTINUE +${lesson.xp || 25} XP`}</span>
                            </button>

                            {/* Guidebook link inside popover */}
                            <div className="pt-0.5 text-center">
                              <button
                                onClick={() => {
                                  setSelectedNode(null);
                                  onOpenGuidebook(unit);
                                }}
                                className="text-xs font-black text-white/80 hover:text-white underline underline-offset-2 cursor-pointer transition"
                              >
                                📖 View Unit Guidebook
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}

              {/* End-of-Unit Treasure Chest */}
              <div className="relative mt-2">
                {(() => {
                  const isClaimed = !!completedLessons[`chest_${unit.id}`];
                  return (
                    <button
                      onClick={() => {
                        if (isUnitCompleted && !isClaimed) {
                          sounds.playFanfare();
                          onClaimChest(unit.id);
                        }
                      }}
                      disabled={!isUnitCompleted || isClaimed}
                      className={`p-4 rounded-3xl border-2 flex items-center gap-3.5 transition-all ${
                        isClaimed
                          ? 'bg-[#18262d] border-[#38464f] text-slate-400 cursor-default opacity-70'
                          : isUnitCompleted
                          ? 'bg-[#18262d] border-[#ff9600] text-amber-300 hover:scale-105 cursor-pointer shadow-lg animate-pulse'
                          : 'bg-[#18262d] border-[#2b3e48] text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      <DuolingoChestGraphic isClaimed={isClaimed} isUnitCompleted={isUnitCompleted} />
                      <div className="text-left">
                        <p className="text-xs font-black uppercase tracking-wider text-white">
                          {isClaimed ? 'Unit Reward Claimed' : isUnitCompleted ? 'Claim Unit Reward!' : 'Unit Reward Chest'}
                        </p>
                        <p className={`text-xs font-bold mt-0.5 ${
                          isClaimed ? 'text-slate-400' : 'text-[#ff9600]'
                        }`}>
                          {isClaimed ? '+50 Chai Points Added ✓' : '+50 Chai Points 🫖'}
                        </p>
                      </div>
                    </button>
                  );
                })()}
              </div>

            </div>

            {/* Duolingo Section / Topic Divider (Image 1 & 2) */}
            {unitIdx < selectedLanguage.units.length - 1 && (
              <div className="w-full flex items-center gap-4 my-6 text-slate-500">
                <div className="flex-1 h-px bg-[#2b3e48]" />
                <span className="text-xs sm:text-sm font-black text-slate-400 tracking-wider uppercase">
                  {selectedLanguage.units[unitIdx + 1].title.includes(':') 
                    ? selectedLanguage.units[unitIdx + 1].title.split(':')[1].trim() 
                    : selectedLanguage.units[unitIdx + 1].title}
                </span>
                <div className="flex-1 h-px bg-[#2b3e48]" />
              </div>
            )}

          </div>
        );
      })}

      {/* Grand Lifetime Native / Course Graduation Trophy Milestone */}
      <div className="relative mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-600 via-rose-700 to-purple-900 text-white shadow-2xl border-4 border-amber-400 text-center space-y-4 overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-15 text-9xl pointer-events-none select-none">
          {activeDiploma.icons[1] || '🌴'}
        </div>
        <div className="flex justify-center -mt-12 sm:-mt-14">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 border-4 border-white shadow-xl flex items-center justify-center text-4xl sm:text-5xl animate-bounce">
            🏆
          </div>
        </div>
        <div>
          <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 backdrop-blur">
            {isCourseGraduated ? activeDiploma.milestoneCompleted : activeDiploma.milestoneBadge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black mt-2">
            {activeDiploma.milestoneHeading}
          </h3>
          <p className="text-xs sm:text-sm text-white/90 font-semibold max-w-md mx-auto mt-1 leading-relaxed">
            {activeDiploma.milestoneDesc}
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              sounds.playFanfare();
              confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
              setShowGraduationModal(true);
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer flex items-center justify-center gap-2"
          >
            <Trophy className="w-4 h-4 text-slate-950" />
            <span>{activeDiploma.viewBtn}</span>
          </button>
        </div>
      </div>

      {/* LIFETIME DIPLOMA & CERTIFICATE MODAL */}
      {showGraduationModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#18262d] border-4 border-amber-400 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto text-white shadow-2xl relative p-6 sm:p-10 space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => { sounds.playPop(); setShowGraduationModal(false); }}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Diploma Certificate Frame */}
            <div className="border-4 border-[#ffc800] rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#18262d] via-[#131f24] to-[#0f171c] text-center space-y-5 relative shadow-inner">
              
              {/* Traditional Cultural Icons / Seal */}
              <div className="flex justify-center items-center gap-3">
                {activeDiploma.icons.map((ic, idx) => (
                  <span key={idx} className="text-3xl">{ic}</span>
                ))}
              </div>

              <div>
                <p className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-amber-400">
                  {activeDiploma.academy}
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {activeDiploma.title}
                </h2>
                <p className="text-xs sm:text-sm font-bold text-amber-200 tracking-wider">
                  {activeDiploma.subtitle}
                </p>
              </div>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-lg mx-auto font-medium">
                {activeDiploma.text}
              </p>

              {/* Pillars of Mastery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left text-xs bg-black/40 rounded-2xl p-4 border border-amber-400/20">
                {activeDiploma.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>{pillar.strong}</strong> {pillar.text}</span>
                  </div>
                ))}
              </div>

              {/* Golden Seal & Signatures */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-amber-400/30">
                <div className="text-center sm:text-left">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">{activeDiploma.dateLabel}</p>
                  <p className="text-xs font-bold text-amber-300">
                    {new Date().toLocaleDateString(activeDiploma.locale || 'en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>

                <div className="w-16 h-16 rounded-full border-2 border-dashed border-amber-400 flex flex-col items-center justify-center bg-amber-950/60 shadow-lg">
                  <span className="text-lg">🎖️</span>
                  <span className="text-[8px] font-black uppercase text-amber-300">CERTIFIED</span>
                </div>

                <div className="text-center sm:text-right">
                  <p className="text-xs font-black text-amber-300 font-serif italic">{activeDiploma.sealSign}</p>
                  <p className="text-[10px] font-bold text-slate-400">{activeDiploma.sealSub}</p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  sounds.playPop();
                  window.print();
                }}
                className="flex-1 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" /> {activeDiploma.printBtn}
              </button>
              <button
                onClick={() => {
                  sounds.playPop();
                  setShowGraduationModal(false);
                }}
                className="py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-black text-xs uppercase tracking-wider cursor-pointer border border-slate-700"
              >
                {activeDiploma.continueBtn}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Floating Scroll to Active Node Button (Exact Duolingo Mobile App Match) */}
      <button
        onClick={scrollToActiveNode}
        className="fixed bottom-20 lg:bottom-8 right-4 lg:right-8 z-30 w-12 h-12 rounded-full bg-[#18262d] border-2 border-[#2b3e48] text-[#1cb0f6] hover:text-white hover:border-[#1cb0f6] flex items-center justify-center shadow-2xl transition hover:scale-110 active:scale-95 cursor-pointer"
        title="Jump to current lesson"
      >
        <ChevronDown className="w-6 h-6 stroke-[3]" />
      </button>

    </div>
  );
}

