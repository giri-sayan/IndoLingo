import React, { useState, useRef, useEffect } from 'react';
import { Flame, Heart, Zap, Target, ChevronDown, X } from 'lucide-react';
import Mascot from './Mascot';
import { sounds } from '../utils/audio';

export default function RightSidebar({
  selectedLanguage,
  onOpenLanguageSelector,
  streak = 3,
  hearts = 5,
  gems = 280,
  onRefillHearts,
  onOpenLeagues,
  onOpenQuests,
  onOpenShop,
  onPracticeHeart,
  _equippedOutfit = 'default',
  completedLessonsCount = 1,
  theme = 'dark'
}) {
  const isDark = theme === 'dark';
  const [activePopover, setActivePopover] = useState(null);
  const statsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (statsRef.current && !statsRef.current.contains(event.target)) {
        setActivePopover(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <aside className="w-full lg:w-92 space-y-4 select-none shrink-0">

      {/* 1. Duolingo Top Stats Row (Desktop Header Replacement) */}
      <div ref={statsRef} className="hidden lg:flex items-center justify-between gap-2 px-1 py-1 relative">
        {/* Course Flag Selector */}
        <button
          onClick={() => {
            sounds.playPop();
            if (onOpenLanguageSelector) onOpenLanguageSelector();
          }}
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-2xl transition border-2 cursor-pointer ${
            isDark 
              ? 'bg-[#18262d] border-[#38464f] hover:border-[#1cb0f6] text-slate-200' 
              : 'bg-white border-slate-200 hover:border-emerald-400 text-slate-800 shadow-sm'
          }`}
          title={`Active course: ${selectedLanguage.name} (Click to switch)`}
        >
          <span className="text-2xl leading-none">{selectedLanguage.flagEmoji}</span>
          <span className="font-black text-sm">
            {selectedLanguage.name}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>

        {/* Streak Flame */}
        <div className="relative">
          <button
            onClick={() => {
              sounds.playPop();
              setActivePopover(activePopover === 'streak' ? null : 'streak');
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl hover:bg-[#18262d] transition border-2 border-transparent hover:border-[#38464f] cursor-pointer"
            title={`${streak} Day Streak`}
          >
            <Flame className="w-5 h-5 fill-[#ff9600] text-[#ff9600]" />
            <span className="font-black text-sm text-[#ff9600]">{streak}</span>
          </button>

          {/* Streak Popover */}
          {activePopover === 'streak' && (
            <div className="absolute top-full mt-3 right-0 w-72 bg-[#18262d] text-white rounded-2xl border-2 border-[#38464f] shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-black text-lg flex items-center gap-2 text-white">
                  <Flame className="w-5 h-5 fill-[#ff9600] text-[#ff9600]" /> {streak} Day Streak!
                </h3>
                <button onClick={() => setActivePopover(null)} className="text-slate-400 hover:text-white cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-between my-4">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
                  const todayIdx = (new Date().getDay() + 6) % 7;
                  const isToday = i === todayIdx;
                  const isPast = i < todayIdx;
                  return (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <span className={`text-[10px] font-black ${isToday ? 'text-[#ff9600]' : 'text-slate-400'}`}>{day}</span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        isToday
                          ? 'bg-[#ff9600] text-white shadow-sm'
                          : isPast
                          ? 'bg-emerald-500 text-white'
                          : 'bg-[#20333d] text-slate-500'
                      }`}>
                        {isToday ? '🔥' : isPast ? '✓' : ''}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs font-bold text-slate-400">Practice today to extend your streak and keep Sheru roaring!</p>
            </div>
          )}
        </div>

        {/* Chai Points / Gems */}
        <div className="relative">
          <button
            onClick={() => {
              sounds.playPop();
              setActivePopover(activePopover === 'gems' ? null : 'gems');
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl hover:bg-[#18262d] transition border-2 border-transparent hover:border-[#38464f] cursor-pointer"
            title={`${gems} Chai Points / Gems`}
          >
            <span className="text-lg">💎</span>
            <span className="font-black text-sm text-[#1cb0f6]">{gems}</span>
          </button>

          {/* Gems Popover */}
          {activePopover === 'gems' && (
            <div className="absolute top-full mt-3 right-0 w-68 bg-[#18262d] text-white rounded-2xl border-2 border-[#38464f] shadow-2xl p-4 z-50 text-center animate-in fade-in zoom-in-95 duration-150">
              <button onClick={() => setActivePopover(null)} className="absolute top-3 right-3 text-slate-400 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
              <div className="text-4xl mb-2">💎</div>
              <h3 className="font-black text-xl mb-1">{gems} Chai Gems</h3>
              <p className="text-xs text-slate-400 mb-4 font-semibold">Earn gems by finishing lessons, quizzes, and daily quests.</p>
              <button
                onClick={() => {
                  setActivePopover(null);
                  if (onOpenShop) onOpenShop();
                }}
                className="w-full py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider bg-[#58cc02] hover:bg-[#46a302] text-white cursor-pointer"
              >
                VISIT SHOP
              </button>
            </div>
          )}
        </div>

        {/* Hearts Status */}
        <div className="relative">
          <button
            onClick={() => {
              sounds.playPop();
              setActivePopover(activePopover === 'hearts' ? null : 'hearts');
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl hover:bg-[#18262d] transition border-2 border-transparent hover:border-[#38464f] cursor-pointer"
            title={`${hearts}/5 Hearts`}
          >
            <Heart className="w-5 h-5 fill-[#ff4b4b] text-[#ff4b4b]" />
            <span className="font-black text-sm text-[#ff4b4b]">{hearts}</span>
          </button>

          {/* Hearts Popover */}
          {activePopover === 'hearts' && (
            <div className="absolute top-full mt-3 right-0 w-68 bg-[#18262d] text-white rounded-2xl border-2 border-[#38464f] shadow-2xl p-4 z-50 text-center animate-in fade-in zoom-in-95 duration-150">
              <button onClick={() => setActivePopover(null)} className="absolute top-3 right-3 text-slate-400 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
              <div className="flex justify-center mb-2">
                <Heart className="w-10 h-10 fill-[#ff4b4b] text-[#ff4b4b]" />
              </div>
              <h3 className="font-black text-lg mb-1">{hearts} / 5 Hearts</h3>
              <p className="text-xs text-slate-400 mb-4 font-semibold">
                {hearts >= 5 ? 'All hearts full! Ready for lessons.' : 'Hearts protect you from making mistakes.'}
              </p>
              {hearts < 5 ? (
                <div className="space-y-2">
                  {onPracticeHeart && (
                    <button
                      onClick={() => {
                        setActivePopover(null);
                        onPracticeHeart();
                      }}
                      className="w-full py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider bg-[#58cc02] hover:bg-[#46a302] text-white cursor-pointer"
                    >
                      PRACTICE (+1 ❤️ FREE)
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setActivePopover(null);
                      onRefillHearts();
                    }}
                    disabled={gems < 20}
                    className="w-full py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider bg-[#1cb0f6] hover:bg-[#1899d6] text-white cursor-pointer disabled:opacity-50"
                  >
                    REFILL FULL HEARTS (20 🫖)
                  </button>
                </div>
              ) : (
                <div className="py-2 text-xs font-black uppercase text-[#58cc02] bg-[#58cc02]/10 rounded-xl">
                  FULL HEARTS ✓
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 2. Duolingo Super Promo Card (Image 1 & 2) */}
      <div className={`rounded-3xl p-5 border-2 relative overflow-hidden transition-colors ${
        isDark ? 'bg-[#18262d] border-[#38464f]' : 'bg-white border-slate-200'
      }`}>
        {/* Colorful gradient header & glowing mascot */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <span className="inline-block bg-gradient-to-r from-[#2ee0f8] via-[#a855f7] to-[#ec4899] font-black text-white text-[11px] px-2.5 py-0.5 rounded-md uppercase italic tracking-wider shadow-sm">
              SUPER
            </span>
            <h3 className="text-lg font-black text-white mt-2 leading-tight">
              Try Super for free
            </h3>
            <p className="text-xs text-slate-300 font-semibold mt-1 leading-relaxed max-w-[210px]">
              No ads, personalized practice, and unlimited Legendary!
            </p>
          </div>

          <div className="shrink-0 -mt-2 -mr-2">
            <Mascot mood="cheering" size={80} outfit="royal" className="drop-shadow-[0_0_16px_rgba(168,85,247,0.6)]" />
          </div>
        </div>

        <button
          onClick={() => {
            sounds.playFanfare();
            if (onOpenShop) onOpenShop();
          }}
          className="w-full py-3 rounded-2xl font-black text-xs uppercase tracking-wider border-2 border-white/90 text-white hover:bg-white/10 active:scale-[0.98] transition cursor-pointer"
        >
          TRY 1 WEEK FREE
        </button>
      </div>

      {/* 3. Pearl League / Leaderboard Card (Image 1 & 2) */}
      <div className={`rounded-3xl p-5 border-2 transition-colors ${
        isDark ? 'bg-[#18262d] border-[#38464f]' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-black text-sm text-white">Pearl League</h3>
          <button
            onClick={() => {
              sounds.playPop();
              if (onOpenLeagues) onOpenLeagues();
            }}
            className="text-xs font-black text-[#1cb0f6] hover:underline uppercase tracking-wider cursor-pointer"
          >
            VIEW LEAGUE
          </button>
        </div>

        <div className="flex items-center gap-4">
          {/* Pink faceted gem icon (Duolingo Pearl/Amethyst style) */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f472b6] to-[#db2777] p-0.5 shadow-md flex items-center justify-center shrink-0">
            <div className="w-full h-full rounded-2xl bg-[#ec4899] flex items-center justify-center text-2xl drop-shadow">
              💎
            </div>
          </div>

          <div>
            <p className="text-sm font-black text-white">
              You're ranked <span className="text-[#58cc02]">#7</span>
            </p>
            <p className="text-xs text-slate-400 font-bold mt-0.5">
              3 ranks away from the demotion zone!
            </p>
          </div>
        </div>
      </div>

      {/* 4. Daily Quests Card (Image 2) */}
      <div className={`rounded-3xl p-5 border-2 transition-colors ${
        isDark ? 'bg-[#18262d] border-[#38464f]' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-black text-sm text-white">Daily Quests</h3>
          <button
            onClick={() => {
              sounds.playPop();
              if (onOpenQuests) onOpenQuests();
            }}
            className="text-xs font-black text-[#1cb0f6] hover:underline uppercase tracking-wider cursor-pointer"
          >
            VIEW ALL
          </button>
        </div>

        <div className="space-y-4">
          {/* Quest 1: Earn 20 XP */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#ff9600]/20 flex items-center justify-center text-[#ff9600] shrink-0">
              <Zap className="w-5 h-5 fill-[#ff9600]" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-200">
                <span>Earn 20 XP</span>
                <span className="text-[10px] text-slate-400">{Math.min(20, completedLessonsCount * 15)} / 20</span>
              </div>
              <div className="w-full bg-[#2b3e48] h-3 rounded-full overflow-hidden">
                <div
                  className="bg-[#ff9600] h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.round((Math.min(20, completedLessonsCount * 15) / 20) * 100))}%` }}
                />
              </div>
            </div>
            <div className="text-xl shrink-0" title="Chest Reward">
              📦
            </div>
          </div>

          {/* Quest 2: Complete 1 perfect lesson */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#58cc02]/20 flex items-center justify-center text-[#58cc02] shrink-0">
              <Target className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-200">
                <span>Complete 1 perfect lesson</span>
                <span className="text-[10px] text-slate-400">{Math.min(1, completedLessonsCount > 0 ? 1 : 0)} / 1</span>
              </div>
              <div className="w-full bg-[#2b3e48] h-3 rounded-full overflow-hidden">
                <div
                  className="bg-[#58cc02] h-full rounded-full transition-all duration-500"
                  style={{ width: `${completedLessonsCount > 0 ? 100 : 0}%` }}
                />
              </div>
            </div>
            <div className="text-xl shrink-0" title="Chest Reward">
              📦
            </div>
          </div>

          {/* Quest 3: Earn 15 Combo Bonus XP */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#ff9600]/20 flex items-center justify-center text-[#ff9600] shrink-0">
              <Zap className="w-5 h-5 fill-[#ff9600]" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-200">
                <span>Earn 15 Combo Bonus XP</span>
                <span className="text-[10px] text-slate-400">0 / 15</span>
              </div>
              <div className="w-full bg-[#2b3e48] h-3 rounded-full overflow-hidden">
                <div className="bg-[#ff9600] h-full rounded-full w-0" />
              </div>
            </div>
            <div className="text-xl shrink-0" title="Chest Reward">
              📦
            </div>
          </div>
        </div>
      </div>

      {/* 5. Duolingo Footer Links (Image 2) */}
      <footer className="pt-2 text-center text-[10px] font-black uppercase tracking-wider text-slate-500 space-x-2 leading-relaxed">
        <a href="#about" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">ABOUT</a>
        <span>·</span>
        <a href="#blog" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">BLOG</a>
        <span>·</span>
        <a href="#store" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">STORE</a>
        <span>·</span>
        <a href="#efficacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">EFFICACY</a>
        <span>·</span>
        <a href="#careers" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">CAREERS</a>
        <span>·</span>
        <a href="#investors" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">INVESTORS</a>
        <span>·</span>
        <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">TERMS</a>
        <span>·</span>
        <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">PRIVACY</a>
      </footer>

    </aside>
  );
}

