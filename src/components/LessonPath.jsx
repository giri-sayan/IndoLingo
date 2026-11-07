import React, { useState } from 'react';
import { 
  X, 
  ChevronDown,
  Lock,
  Unlock,
  Sparkles,
  BookOpen
} from 'lucide-react';
import Mascot from './Mascot';
import { sounds } from '../utils/audio';

function DuoFilledStar({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#ffffff">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function DuoFilledHeadphones({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#ffffff">
      <path d="M12 3a9 9 0 0 0-9 9v7a3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5v-1a7 7 0 0 1 14 0v1h-2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3v-7a9 9 0 0 0-9-9z" />
    </svg>
  );
}

function DuoFilledBook({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#ffffff">
      <path d="M4 6a3 3 0 0 1 3-3h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a3 3 0 0 0-3 3V6zm14 11V5H7a1 1 0 0 0-1 1v12.2c.3-.13.63-.2 1-.2h11z" />
    </svg>
  );
}

function DuoFilledTrophy({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#ffffff">
      <path d="M19 4h-3V2H8v2H5a3 3 0 0 0-3 3v2a5 5 0 0 0 4.5 4.97A7 7 0 0 0 11 18.9V21H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2.1a7 7 0 0 0 4.5-4.93A5 5 0 0 0 22 9V7a3 3 0 0 0-3-3zM4 9V7a1 1 0 0 1 1-1h1v4.8A3 3 0 0 1 4 9zm16 0a3 3 0 0 1-2 1.8V6h1a1 1 0 0 1 1 1v2z" />
    </svg>
  );
}

function DuoFilledCheck({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

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
  // Active selected node popover state: { lesson, unit } (Supports URL helper ?test_node= for testing)
  const [selectedNode, setSelectedNode] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const testNodeParam = params.get('test_node');
      if (testNodeParam !== null) {
        const idx = parseInt(testNodeParam, 10);
        const l = selectedLanguage?.units[0]?.lessons[idx];
        if (l) {
          return { lesson: l, unit: selectedLanguage.units[0] };
        }
      }
    }
    return null;
  });
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

  // Click outside to dismiss popover without blocking page scroll
  React.useEffect(() => {
    const handleDocumentClick = (e) => {
      if (selectedNode) {
        if (!e.target.closest('.lesson-popover-card') && !e.target.closest('.lesson-node-btn')) {
          setSelectedNode(null);
        }
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [selectedNode]);

  const handleDismissPopover = () => {
    sounds.playPop();
    setSelectedNode(null);
  };

  const handleNodeClick = (lesson, unit) => {
    sounds.playPop();
    const isThisPopoverOpen = selectedNode?.lesson.id === lesson.id;

    // If popover is already open, start lesson! Otherwise open popover.
    if (isThisPopoverOpen) {
      setSelectedNode(null);
      onStartLesson(lesson, unit);
    } else {
      setSelectedNode({ lesson, unit });
      // Smoothly scroll the node row into view so the popover is fully visible
      setTimeout(() => {
        const el = document.getElementById(`lesson-row-${lesson.id}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 50);
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
            nodeClass: 'duo-node-green', 
            shadowColor: '#3c8b00', 
            btnText: 'text-[#58cc02]',
            hex: '#58cc02',
            name: 'green' 
          },
          { 
            bg: 'bg-[#a855f7]', 
            border: 'border-[#9333ea]', 
            text: 'text-[#a855f7]', 
            nodeClass: 'duo-node-purple', 
            shadowColor: '#7e22ce', 
            btnText: 'text-[#a855f7]',
            hex: '#a855f7',
            name: 'purple' 
          },
          { 
            bg: 'bg-[#1cb0f6]', 
            border: 'border-[#1899d6]', 
            text: 'text-[#1cb0f6]', 
            nodeClass: 'duo-node-blue', 
            shadowColor: '#0e75a7', 
            btnText: 'text-[#1cb0f6]',
            hex: '#1cb0f6',
            name: 'blue' 
          },
          { 
            bg: 'bg-[#ff9600]', 
            border: 'border-[#e08500]', 
            text: 'text-[#ff9600]', 
            nodeClass: 'duo-node-orange', 
            shadowColor: '#b86d00', 
            btnText: 'text-[#ff9600]',
            hex: '#ff9600',
            name: 'orange' 
          },
          { 
            bg: 'bg-[#ff4b4b]', 
            border: 'border-[#ea2b2b]', 
            text: 'text-[#ff4b4b]', 
            nodeClass: 'duo-node-purple', 
            shadowColor: '#c51f1f', 
            btnText: 'text-[#ff4b4b]',
            hex: '#ff4b4b',
            name: 'red' 
          },
          { 
            bg: 'bg-[#00cd9c]', 
            border: 'border-[#00a880]', 
            text: 'text-[#00cd9c]', 
            nodeClass: 'duo-node-green', 
            shadowColor: '#008263', 
            btnText: 'text-[#00cd9c]',
            hex: '#00cd9c',
            name: 'teal' 
          },
          { 
            bg: 'bg-[#6366f1]', 
            border: 'border-[#4f46e5]', 
            text: 'text-[#6366f1]', 
            nodeClass: 'duo-node-purple', 
            shadowColor: '#3730a3', 
            btnText: 'text-[#6366f1]',
            hex: '#6366f1',
            name: 'indigo' 
          },
          { 
            bg: 'bg-[#ec4899]', 
            border: 'border-[#db2777]', 
            text: 'text-[#ec4899]', 
            nodeClass: 'duo-node-purple', 
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

            {/* Duolingo Semicircular Banner Connector Tab (frame 004 match) */}
            <div className="flex justify-center -mt-0.5 mb-7 pointer-events-none">
              <div className={`w-16 h-3.5 ${unitTheme.bg} rounded-b-2xl shadow-xs`} />
            </div>

            {/* Stepping Stones Path */}
            <div className={`py-4 relative flex flex-col items-center gap-5 w-full overflow-visible ${selectedNode?.unit.id === unit.id ? 'z-50' : 'z-20'}`}>
              {unitLessons.map((lesson, lessonIdx) => {
                const isCompleted = !!completedLessons[lesson.id];
                const isPrevCompleted = lessonIdx === 0 
                  ? (unitIdx === 0 || !!completedLessons[selectedLanguage.units[unitIdx - 1]?.lessons?.slice(-1)[0]?.id])
                  : !!completedLessons[unitLessons[lessonIdx - 1]?.id];
                
                const isCurrent = !isCompleted && isPrevCompleted;
                const isStrictLocked = !isCompleted && !isPrevCompleted;
                const isLocked = !freeStudyMode && isStrictLocked;

                // S-curve winding offsets: 0, -48px, 0, 48px
                const offsets = ['translate-x-0', '-translate-x-12 sm:-translate-x-16', 'translate-x-0', 'translate-x-12 sm:translate-x-16'];
                const offsetClass = offsets[lessonIdx % 4];

                const isPopoverOpen = selectedNode?.lesson.id === lesson.id;

                // Open popover above if near bottom of unit (last 2 lessons)
                const openAbove = lessonIdx >= Math.max(1, unitLessons.length - 2);

                // Exact matching caret alignment relative to centered popover card (immune to transform bugs)
                const caretPositionClass = (lessonIdx % 4 === 1)
                  ? 'left-[calc(50%-3rem)]'
                  : (lessonIdx % 4 === 3)
                  ? 'left-[calc(50%+3rem)]'
                  : 'left-1/2 -translate-x-1/2';

                // Dynamic icon based on lesson type & index
                const isExam = lessonIdx === unitLessons.length - 1;
                const isListening = lessonIdx % 3 === 1;
                const isReading = lessonIdx % 3 === 2;

                return (
                  <div 
                    key={lesson.id} 
                    id={`lesson-row-${lesson.id}`}
                    className={`relative w-full flex flex-col items-center justify-center my-1 ${isPopoverOpen ? 'z-50' : 'z-20'}`}
                  >
                    {/* Node container with zigzag translation offset */}
                    <div 
                      id={isCurrent ? 'active-lesson-node' : `lesson-node-${lesson.id}`}
                      className={`relative flex items-center justify-center transition-transform ${offsetClass}`}
                    >
                      {/* Left Quest Avatar Badge (Exact Match to Duolingo App Screenshot) */}
                      {lessonIdx === 0 && (
                        <div className="absolute right-[calc(100%+1.25rem)] top-1 z-10 flex flex-col items-center select-none pointer-events-auto">
                          <div className="p-1 sm:p-1.5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-700 border-2 border-indigo-300 shadow-xl flex flex-col items-center animate-bounce-subtle cursor-pointer hover:scale-105 transition pointer-events-auto">
                            <span className="text-xl sm:text-2xl">🧙‍♀️</span>
                            <span className="text-[8px] sm:text-[9px] font-black uppercase text-white bg-indigo-950/90 px-1.5 py-0.5 rounded-full mt-0.5 shadow-sm">
                              20 days
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Right Companion Mascot Silhouette (Exact Match to Duolingo App Screenshot) */}
                      {lessonIdx === 2 && (
                        <div className="absolute left-[calc(100%+1.25rem)] top-0 z-10 flex flex-col items-center select-none opacity-80 hover:opacity-100 transition pointer-events-auto">
                          <div className="relative">
                            <Mascot mood="idle" size={48} outfit={equippedOutfit} />
                          </div>
                          <div className="flex items-center gap-1 mt-0.5 text-amber-400 text-[10px] sm:text-xs">
                            <span>★</span><span>★</span><span>★</span>
                          </div>
                        </div>
                      )}

                      {/* Floating Duolingo START Bubble (ONLY when current and NO popover is open!) */}
                      {isCurrent && !selectedNode && (
                        <div className="absolute -top-10 z-30 animate-bounce flex flex-col items-center pointer-events-none">
                          <div className={`px-3 py-1 rounded-xl ${unitTheme.bg} text-white font-black text-xs uppercase tracking-wider shadow-md`}>
                            START
                          </div>
                          <div className={`w-2.5 h-2.5 ${unitTheme.bg} rotate-45 -mt-1 shadow-sm`} />
                        </div>
                      )}

                      {/* Duolingo Snug Concentric Progress Orbit Ring (Screenshot Match) */}
                      {isCurrent && (
                        <div 
                          className="absolute -inset-2.5 rounded-full border-[3.5px] border-dashed pointer-events-none z-10"
                          style={{ borderColor: unitTheme.hex }}
                        />
                      )}

                      {/* 3D Duolingo Tactile Stepping Stone Button (Screenshot Match) */}
                      <button
                        onClick={() => handleNodeClick(lesson, unit)}
                        className={`lesson-node-btn duo-node-base ${
                          isLocked ? 'duo-node-locked' : unitTheme.nodeClass
                        } ${
                          isCurrent ? 'w-20 h-20 sm:w-22 sm:h-22' : 'w-18 h-18 sm:w-20 sm:h-20'
                        } text-white relative z-20`}
                        title={`${lesson.title} ${isLocked ? '(Click to unlock or study)' : ''}`}
                      >
                        {isCompleted ? (
                          <DuoFilledCheck className="w-8 h-8 sm:w-9 sm:h-9" />
                        ) : isCurrent ? (
                          isExam ? (
                            <DuoFilledTrophy className="w-8 h-8 sm:w-9 sm:h-9" />
                          ) : isListening ? (
                            <DuoFilledHeadphones className="w-8 h-8 sm:w-9 sm:h-9" />
                          ) : (
                            <DuoFilledStar className="w-8 h-8 sm:w-9 sm:h-9" />
                          )
                        ) : isListening ? (
                          <DuoFilledHeadphones className="w-7 h-7 sm:w-8 sm:h-8" />
                        ) : isExam ? (
                          <DuoFilledTrophy className="w-7 h-7 sm:w-8 sm:h-8" />
                        ) : isReading ? (
                          <DuoFilledBook className="w-7 h-7 sm:w-8 sm:h-8" />
                        ) : (
                          <DuoFilledStar className="w-7 h-7 sm:w-8 sm:h-8" />
                        )}
                      </button>
                    </div>

                    {/* Stepping stone connector dots between nodes */}
                    {lessonIdx < unitLessons.length - 1 && (
                      <div className="flex flex-col items-center gap-1.5 py-1 pointer-events-none opacity-40">
                        <div className="w-2.5 h-2 rounded-full bg-slate-500/80" />
                        <div className="w-2.5 h-2 rounded-full bg-slate-500/80" />
                      </div>
                    )}

                    {/* Iconic Duolingo Lesson Popover Card - CENTERING IN THE ROW & NEVER BLEEDING */}
                    {isPopoverOpen && (
                      <div 
                        className={`lesson-popover-card absolute left-1/2 -translate-x-1/2 z-50 w-[310px] max-w-[calc(100vw-2rem)] select-none pointer-events-auto ${
                          openAbove ? 'bottom-[calc(100%+14px)]' : 'top-[calc(100%+14px)]'
                        }`}
                      >
                        {/* Top caret pointing UP at node when popover is below */}
                        {!openAbove && (
                          <div 
                            className={`w-4 h-4 ${unitTheme.bg} rotate-45 absolute -top-2 ${caretPositionClass} shadow-[-2px_-2px_4px_rgba(0,0,0,0.1)] z-10`} 
                          />
                        )}

                        {/* Popover Card Body */}
                        <div className={`${unitTheme.bg} text-white rounded-3xl p-5 shadow-2xl relative z-20 space-y-3.5 border-2 ${unitTheme.border}`}>
                          {/* Close button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDismissPopover();
                            }}
                            className="absolute top-3.5 right-3.5 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition cursor-pointer"
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
                            className={`w-full py-3.5 px-6 rounded-2xl btn-popover-white font-black text-sm uppercase tracking-wider ${unitTheme.btnText} cursor-pointer flex items-center justify-center gap-2`}
                          >
                            <span>{isCompleted ? 'PRACTICE +10 XP' : `CONTINUE +${lesson.xp || 20} XP`}</span>
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

                        {/* Bottom caret pointing DOWN at node when popover is above */}
                        {openAbove && (
                          <div 
                            className={`w-4 h-4 ${unitTheme.bg} rotate-45 absolute -bottom-2 ${caretPositionClass} shadow-[2px_2px_4px_rgba(0,0,0,0.1)] z-10`} 
                          />
                        )}
                      </div>
                    )}
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

      {/* Duolingo Course Completion Milestone Trophy */}
      <div className="relative mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#18262d] to-[#131f24] text-white shadow-xl border-2 border-[#38464f] text-center space-y-4 overflow-hidden">
        <div className="flex justify-center -mt-12 sm:-mt-14">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#ffc800] to-[#ffd900] border-4 border-[#18262d] shadow-xl flex items-center justify-center text-4xl sm:text-5xl animate-bounce">
            🏆
          </div>
        </div>
        <div>
          <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#58cc02]/20 text-[#58cc02]">
            {isCourseGraduated ? 'Course Completed! ✓' : 'Course Milestone'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black mt-2 text-white">
            {selectedLanguage.name} Champion
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-semibold max-w-md mx-auto mt-1 leading-relaxed">
            {isCourseGraduated 
              ? `You've completed every unit in ${selectedLanguage.name}! Keep practicing to stay sharp and maintain your streak.` 
              : `Complete all units in ${selectedLanguage.name} to unlock the permanent Course Champion Trophy!`}
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="px-6 py-3 rounded-2xl bg-[#20333d] border border-[#2b3e48] text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffc800]" />
            <span>{completedCourseLessonsCount} / {courseLessons.length} Lessons Finished</span>
          </div>
        </div>
      </div>

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

