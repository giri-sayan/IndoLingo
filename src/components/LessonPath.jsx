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
  Play, 
  X, 
  ArrowUp,
  Zap,
  Lock,
  Unlock,
  Compass
} from 'lucide-react';
import Mascot from './Mascot';
import { sounds } from '../utils/audio';
import { LIFETIME_DIPLOMAS } from '../data/diplomas';

export default function LessonPath({
  selectedLanguage,
  completedLessons = {},
  onStartLesson,
  onUnlockUpToLesson,
  onClaimChest,
  onOpenGuidebook,
  equippedOutfit = 'default',
  _theme = 'dark'
}) {
  // Active selected node popover state: { lesson, unit }
  const [selectedNode, setSelectedNode] = useState(null);
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

  const handleNodeClick = (lesson, unit) => {
    sounds.playPop();
    if (selectedNode?.lesson.id === lesson.id) {
      setSelectedNode(null);
    } else {
      setSelectedNode({ lesson, unit });
    }
  };

  const scrollToTop = () => {
    sounds.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 pb-28 max-w-xl mx-auto select-none relative">
      {/* Click outside popover backdrop */}
      {selectedNode && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]"
          onClick={() => setSelectedNode(null)}
        />
      )}

      {/* Course Overview & Free Study Mode Control Bar */}
      <div className="bg-[#18262d] border-2 border-[#2b3e48] rounded-3xl p-4 sm:p-5 shadow-xl text-white space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl leading-none">{selectedLanguage.flagEmoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-tight text-white">
                  {selectedLanguage.name} Course
                </h1>
                <span className="text-xs font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {selectedLanguage.nativeName}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-bold mt-0.5">
                {completedCourseLessonsCount} of {courseLessons.length} lessons mastered • {selectedLanguage.units?.length || 8} Units
              </p>
            </div>
          </div>

          {/* Free Study Mode Toggle */}
          <button
            onClick={toggleFreeStudyMode}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl border-2 text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
              freeStudyMode
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 ring-2 ring-amber-400/20'
                : 'bg-[#20333d] border-[#38464f] text-slate-300 hover:border-slate-400'
            }`}
            title="Toggle between sequential unlock and free exploration of any lesson"
          >
            {freeStudyMode ? <Unlock className="w-3.5 h-3.5 text-amber-400" /> : <Lock className="w-3.5 h-3.5 text-slate-400" />}
            <span>{freeStudyMode ? 'FREE STUDY (UNLOCKED)' : 'SEQUENTIAL PATH'}</span>
          </button>
        </div>

        {/* Quick Unit Jump Navigator Pills */}
        <div className="pt-2 border-t border-[#2b3e48]">
          <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>JUMP TO UNIT:</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {selectedLanguage.units.map((u, i) => (
              <button
                key={u.id}
                onClick={() => scrollToUnit(u.id)}
                className="px-2.5 py-1 rounded-xl bg-[#20333d] hover:bg-[#283f4d] border border-[#38464f] hover:border-blue-400 text-[11px] font-black text-slate-300 hover:text-white transition whitespace-nowrap cursor-pointer shrink-0"
              >
                Unit {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedLanguage.units.map((unit, unitIdx) => {
        const unitLessons = unit.lessons || [];
        const completedCount = unitLessons.filter(l => completedLessons[l.id]).length;
        const isUnitCompleted = completedCount === unitLessons.length && unitLessons.length > 0;

        // Duolingo unit banner color themes matching screenshots:
        // Unit 1: Warm bronze/amber (#935323), Unit 2: Green (#58cc02), Unit 3: Blue (#1cb0f6), Unit 4: Purple (#a855f7)
        const bannerColorSets = [
          { bg: 'bg-[#935323]', border: 'border-[#733f17]', text: 'text-[#935323]', activeNodeBg: 'bg-[#935323] border-[#733f17]' },
          { bg: 'bg-[#58cc02]', border: 'border-[#46a302]', text: 'text-[#58cc02]', activeNodeBg: 'bg-[#58cc02] border-[#46a302]' },
          { bg: 'bg-[#1cb0f6]', border: 'border-[#1899d6]', text: 'text-[#1cb0f6]', activeNodeBg: 'bg-[#1cb0f6] border-[#1899d6]' },
          { bg: 'bg-[#a855f7]', border: 'border-[#9333ea]', text: 'text-[#a855f7]', activeNodeBg: 'bg-[#a855f7] border-[#9333ea]' }
        ];
        const unitTheme = bannerColorSets[unitIdx % bannerColorSets.length];

        return (
          <div key={unit.id} id={`unit-banner-${unit.id}`} className="relative scroll-mt-24">
            {/* Duolingo Unit Header Banner (Image 1 & 2) */}
            <div className={`rounded-2xl p-5 text-white shadow-lg relative overflow-hidden transition-all ${unitTheme.bg}`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative z-10 gap-3">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-wider text-white/80 flex items-center gap-1.5">
                    <span>←</span> SECTION {Math.floor(unitIdx / 3) + 1}, UNIT {unitIdx + 1}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-black mt-1 leading-snug">
                    {unit.title.includes(':') ? unit.title.split(':')[1].trim() : unit.title}
                  </h2>
                </div>

                {/* Header Action Buttons: Start Unit & Notebook GUIDEBOOK */}
                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  {unitLessons[0] && (
                    <button
                      onClick={() => {
                        sounds.playPop();
                        onStartLesson(unitLessons[0], unit);
                      }}
                      className="flex items-center gap-1.5 px-3 py-2.5 rounded-2xl bg-white text-slate-900 font-black text-xs uppercase tracking-wider hover:bg-slate-100 transition shadow-sm cursor-pointer active:scale-95"
                      title="Start studying this unit"
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-900 text-slate-900" />
                      <span>START UNIT</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      sounds.playPop();
                      onOpenGuidebook(unit);
                    }}
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur font-black text-xs uppercase tracking-wider transition-all border border-white/30 cursor-pointer shrink-0 active:scale-95"
                    title="Open Unit Guidebook"
                  >
                    <BookOpen className="w-4 h-4 text-white stroke-[2.5]" />
                    <span className="font-extrabold tracking-wider">GUIDEBOOK</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stepping Stones Path */}
            <div className="py-10 relative flex flex-col items-center gap-7 z-20">
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

                const isPopoverOpen = selectedNode?.lesson.id === lesson.id;
                const openBelow = lessonIdx === 0;

                const horizontalAlign = (lessonIdx % 4 === 1)
                  ? 'left-0 sm:left-1/2 sm:-translate-x-1/2'
                  : (lessonIdx % 4 === 3)
                  ? 'right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2'
                  : 'left-1/2 -translate-x-1/2';

                const arrowAlign = (lessonIdx % 4 === 1)
                  ? 'ml-8 sm:mx-auto'
                  : (lessonIdx % 4 === 3)
                  ? 'mr-8 sm:mx-auto'
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
                    {/* Mascot illustration on side of path (Image 2) */}
                    {lessonIdx === 1 && unitIdx === 0 && (
                      <div className="absolute -left-28 sm:-left-36 top-0 z-10 pointer-events-none hidden sm:block">
                        <div className="relative">
                          <Mascot mood="happy" size={82} outfit={equippedOutfit} />
                        </div>
                      </div>
                    )}

                    {/* Chest illustration on right side of path (Image 2) */}
                    {lessonIdx === 1 && unitIdx === 0 && (
                      <div className="absolute -right-24 sm:-right-32 top-2 z-10 pointer-events-none hidden sm:block opacity-60">
                        <div className="w-12 h-12 rounded-2xl bg-[#2b3e48] border-2 border-[#38464f] flex items-center justify-center text-2xl">
                          🔒
                        </div>
                      </div>
                    )}

                    {/* Milestone 3D Node Button */}
                    <div className={`relative flex flex-col items-center justify-center ${isPopoverOpen ? 'z-50' : ''}`}>
                      
                      {/* Duolingo START Speech Bubble Tooltip above active node (Image 1) */}
                      {isCurrent && !isPopoverOpen && (
                        <div 
                          onClick={() => {
                            sounds.playPop();
                            onStartLesson(lesson, unit);
                          }}
                          className="absolute bottom-full mb-3 z-30 animate-bounce-subtle flex flex-col items-center cursor-pointer group"
                          title="Click to start lesson"
                        >
                          <div className={`px-4 py-1.5 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-lg group-hover:brightness-110 transition ${unitTheme.bg}`}>
                            START
                          </div>
                          {/* Triangle pointer */}
                          <div className={`w-3 h-3 rotate-45 -mt-1.5 ${unitTheme.bg}`} />
                        </div>
                      )}

                      {/* Circular Progress Ring on active node */}
                      {isCurrent && (
                        <svg className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none -rotate-90 z-10" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="44"
                            fill="none"
                            stroke="#38464f"
                            strokeWidth="5"
                            className="opacity-40"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="44"
                            fill="none"
                            stroke="#ff9600"
                            strokeWidth="5"
                            strokeDasharray="276"
                            strokeDashoffset="120"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}

                      <button
                        onClick={() => {
                          handleNodeClick(lesson, unit);
                        }}
                        className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center font-black transition-all cursor-pointer relative z-20 ${
                          isCompleted
                            ? 'bg-[#935323] border-4 border-[#733f17] text-white shadow-[0_6px_0_#5a3111] hover:brightness-110 active:translate-y-1 active:shadow-[0_2px_0_#5a3111]'
                            : isCurrent
                            ? `${unitTheme.activeNodeBg} text-white shadow-[0_6px_0_rgba(0,0,0,0.4)] hover:brightness-110 active:translate-y-1 active:shadow-[0_2px_0_rgba(0,0,0,0.4)]`
                            : freeStudyMode
                            ? 'bg-[#1899d6] border-4 border-[#127aa8] text-white shadow-[0_6px_0_#0e5e80] hover:brightness-110 active:translate-y-1'
                            : 'bg-[#2b3e48] border-4 border-[#38464f] text-slate-400 hover:border-slate-300 shadow-[0_5px_0_#1f2d34]'
                        }`}
                        title={`${lesson.title} ${isLocked ? '(Click to unlock or study)' : ''}`}
                      >
                        {isCompleted ? (
                          <Check className="w-8 h-8 stroke-[4]" />
                        ) : isCurrent ? (
                          isExam ? (
                            <Trophy className="w-8 h-8 stroke-[2.5]" />
                          ) : isListening ? (
                            <Headphones className="w-8 h-8 stroke-[2.5]" />
                          ) : (
                            <Star className="w-8 h-8 fill-white stroke-[2.5]" />
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

                      {/* Duolingo Click Popover */}
                      {isPopoverOpen && (
                        <div className={`absolute ${openBelow ? 'top-full mt-3' : 'bottom-full mb-3'} ${horizontalAlign} z-50 w-72 sm:w-80 animate-in zoom-in-95 duration-150`}>
                          {/* Top arrow if opening below */}
                          {openBelow && (
                            <div className={`w-4 h-4 bg-[#18262d] border-t-2 border-l-2 border-[#38464f] rotate-45 ${arrowAlign} -mb-2 shadow-sm relative z-30`} />
                          )}

                          <div className="bg-[#18262d] text-white rounded-3xl p-5 border-2 border-[#38464f] shadow-2xl relative z-20">
                            {/* Close button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedNode(null);
                              }}
                              className="absolute top-4 right-4 p-1 rounded-full hover:bg-[#2b3e48] text-slate-400 cursor-pointer"
                            >
                              <X className="w-4 h-4" />
                            </button>

                            <div className="space-y-1 pr-6">
                              <span className="text-[11px] font-black uppercase tracking-wider text-[#58cc02]">
                                {isCompleted ? '✓ Review Lesson' : `Lesson ${lessonIdx + 1} of ${unitLessons.length}`}
                              </span>
                              <h3 className="text-base font-black leading-tight text-white">
                                {lesson.title}
                              </h3>
                              <p className="text-xs text-slate-400 font-semibold">
                                {isCompleted ? 'Practice to reinforce your recall' : 'Master essential conversational phrases'}
                              </p>
                            </div>

                            {/* Actions inside popover */}
                            {isCompleted ? (
                              <button
                                onClick={() => {
                                  setSelectedNode(null);
                                  onStartLesson(lesson, unit);
                                }}
                                className="w-full mt-4 py-3 rounded-2xl font-black text-sm uppercase tracking-wider bg-[#58cc02] hover:bg-[#46a302] text-white flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_0_#46a302] active:translate-y-1 transition"
                              >
                                <Play className="w-4 h-4 fill-white" />
                                <span>PRACTICE +10 XP</span>
                              </button>
                            ) : (!isLocked || freeStudyMode) ? (
                              <button
                                onClick={() => {
                                  setSelectedNode(null);
                                  onStartLesson(lesson, unit);
                                }}
                                className="w-full mt-4 py-3 rounded-2xl font-black text-sm uppercase tracking-wider bg-[#58cc02] hover:bg-[#46a302] text-white flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_0_#46a302] active:translate-y-1 transition"
                              >
                                <Play className="w-4 h-4 fill-white" />
                                <span>START +{lesson.xp || 20} XP</span>
                              </button>
                            ) : (
                              <div className="space-y-2.5 mt-4">
                                <div className="rounded-2xl p-2.5 bg-[#20333d] border border-[#38464f] text-[11px] text-amber-300 font-semibold flex items-center gap-1.5">
                                  <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                  <span>Locked in Sequential Path. Study freely or jump ahead!</span>
                                </div>

                                <button
                                  onClick={() => {
                                    setSelectedNode(null);
                                    onStartLesson(lesson, unit);
                                  }}
                                  className="w-full py-3 rounded-2xl font-black text-sm uppercase tracking-wider bg-[#58cc02] hover:bg-[#46a302] text-white flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_0_#46a302] active:translate-y-1 transition"
                                >
                                  <Play className="w-4 h-4 fill-white" />
                                  <span>START LESSON (FREE STUDY)</span>
                                </button>

                                {onUnlockUpToLesson && (
                                  <button
                                    onClick={() => {
                                      setSelectedNode(null);
                                      onUnlockUpToLesson(lesson.id);
                                      onStartLesson(lesson, unit);
                                    }}
                                    className="w-full py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-600 text-amber-950 flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_3px_0_#b45309] active:translate-y-1 transition"
                                  >
                                    <Zap className="w-3.5 h-3.5 fill-amber-950" />
                                    <span>JUMP HERE & UNLOCK PATH</span>
                                  </button>
                                )}
                              </div>
                            )}

                            {/* Guidebook link inside popover */}
                            <button
                              onClick={() => {
                                setSelectedNode(null);
                                onOpenGuidebook(unit);
                              }}
                              className="w-full mt-2.5 py-1 text-center text-xs font-bold text-slate-400 hover:text-[#1cb0f6] cursor-pointer"
                            >
                              📖 View Unit Guidebook
                            </button>
                          </div>

                          {/* Bottom arrow if opening above */}
                          {!openBelow && (
                            <div className={`w-4 h-4 bg-[#18262d] border-b-2 border-r-2 border-[#38464f] rotate-45 ${arrowAlign} -mt-2 shadow-sm relative z-30`} />
                          )}
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
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${
                        isClaimed ? 'bg-[#2b3e48] text-slate-400' : isUnitCompleted ? 'bg-[#ff9600] text-white animate-bounce' : 'bg-[#20333d] text-slate-500'
                      }`}>
                        {isClaimed ? '✓' : '🎁'}
                      </div>
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
            <div className="border-4 border-amber-400/80 rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#241712] via-[#1a1c23] to-[#121c24] text-center space-y-5 relative shadow-inner">
              
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

      {/* Floating Scroll to Top Button (Image 2) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 lg:right-10 z-30 w-11 h-11 rounded-full bg-[#18262d] border-2 border-[#38464f] text-slate-300 hover:text-white flex items-center justify-center shadow-2xl transition hover:scale-110 active:scale-95 cursor-pointer"
        title="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>

    </div>
  );
}

