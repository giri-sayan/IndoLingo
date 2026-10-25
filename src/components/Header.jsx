import React, { useState, useRef, useEffect } from 'react';
import { Flame, Heart, Sun, Moon, Settings, ChevronDown, X } from 'lucide-react';
import { sounds } from '../utils/audio';
import TigerLogo from './TigerLogo';

export default function Header({
  selectedLanguage,
  onOpenLanguageSelector,
  streak = 3,
  gems = 240,
  hearts = 5,
  onRefillHearts,
  onPracticeHeart,
  showTransliteration,
  onToggleTransliteration,
  onSelectTab,
  theme = 'light',
  onToggleTheme,
  onOpenSettings,
  className = ''
}) {
  const isDark = theme === 'dark';
  const [activePopover, setActivePopover] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActivePopover(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className={`sticky top-0 z-30 backdrop-blur border-b px-4 py-2.5 sm:px-6 transition-colors select-none ${
      isDark ? 'bg-[#131f24]/95 border-[#2b3e48] text-white' : 'bg-white/95 border-slate-200 text-slate-800'
    } ${className}`}>

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Mobile Logo & Language Selector Pill */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile-only Logo */}
          <div 
            onClick={() => {
              sounds.playPop();
              onSelectTab('learn');
            }}
            className="flex lg:hidden items-center gap-2 cursor-pointer"
          >
            <TigerLogo size={36} />
            <span className="font-black text-xl tracking-tight bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
              IndoLingo
            </span>
          </div>

          {/* Current Course Selector Pill (Duolingo Style) */}
          <button
            onClick={() => {
              sounds.playPop();
              onOpenLanguageSelector();
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl border-2 transition-all cursor-pointer ${
              isDark 
                ? 'border-slate-700 bg-slate-800/80 hover:border-emerald-500 text-slate-200' 
                : 'border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 text-slate-700'
            }`}
            title="Switch Course"
          >
            <span className="text-xl leading-none">{selectedLanguage.flagEmoji}</span>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-wider leading-none">
                {selectedLanguage.name}
              </p>
              <p className="text-[10px] text-slate-400 font-bold leading-none mt-0.5 hidden sm:block">
                {selectedLanguage.nativeName}
              </p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* Right: Authentic Duolingo Gamification Stats */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Script Transliteration Toggle */}
          <button
            onClick={onToggleTransliteration}
            className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-black border transition-colors cursor-pointer ${
              showTransliteration
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800'
                : 'bg-slate-50 text-slate-500 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
            }`}
            title="Toggle English phonetic transliteration"
          >
            <span>Aa / {selectedLanguage.alphabet[0]?.char}</span>
            <span className="text-[10px] px-1 py-0.2 rounded bg-emerald-200/60 dark:bg-emerald-800/60 text-emerald-800 dark:text-emerald-200 uppercase">
              {showTransliteration ? 'Phonetics: ON' : 'Native'}
            </span>
          </button>

          {/* Streak Flame */}
          <div className="relative">
            <div 
              onClick={() => {
                sounds.playPop();
                setActivePopover(activePopover === 'streak' ? null : 'streak');
              }}
              className="flex items-center gap-1.5 font-black text-orange-500 bg-orange-50 dark:bg-orange-950/40 px-2.5 py-1.5 rounded-2xl border border-orange-200 dark:border-orange-900/60 cursor-pointer hover:border-orange-400 transition"
              title={`${streak} Day Streak!`}
            >
              <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-bounce-subtle" />
              <span className="text-xs sm:text-sm">{streak}</span>
            </div>
            
            {activePopover === 'streak' && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-xl p-4 z-50">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-l-2 border-t-2 border-slate-200 dark:border-slate-700 rotate-45"></div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-black text-lg text-slate-800 dark:text-white flex items-center gap-2">
                    <Flame className="w-5 h-5 fill-orange-500 text-orange-500"/> {streak} Day Streak!
                  </h3>
                  <button onClick={(e) => { e.stopPropagation(); setActivePopover(null); }} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                    <X className="w-4 h-4"/>
                  </button>
                </div>
                <div className="flex justify-between my-4">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
                    const todayIdx = (new Date().getDay() + 6) % 7; // Monday = 0
                    const isToday = i === todayIdx;
                    const isPast = i < todayIdx;
                    return (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <span className={`text-[10px] font-black ${isToday ? 'text-orange-500' : 'text-slate-400'}`}>
                          {day}
                        </span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          isToday
                            ? 'bg-orange-500 text-white shadow-sm'
                            : isPast
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                        }`}>
                          {isToday ? '🔥' : isPast ? '✓' : ''}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Practice today to extend your streak!</p>
              </div>
            )}
          </div>

          {/* Chai Points / Gems */}
          <div className="relative">
            <div 
              onClick={() => {
                sounds.playPop();
                setActivePopover(activePopover === 'gems' ? null : 'gems');
              }}
              className="flex items-center gap-1.5 font-black text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1.5 rounded-2xl border border-amber-200 dark:border-amber-900/60 cursor-pointer hover:border-amber-400 transition"
              title={`${gems} Chai Points (Click to open Shop)`}
            >
              <span className="text-sm">🫖</span>
              <span className="text-xs sm:text-sm">{gems}</span>
            </div>
            
            {activePopover === 'gems' && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-xl p-4 z-50 text-center">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-l-2 border-t-2 border-slate-200 dark:border-slate-700 rotate-45"></div>
                <button onClick={(e) => { e.stopPropagation(); setActivePopover(null); }} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 cursor-pointer">
                  <X className="w-4 h-4"/>
                </button>
                <div className="text-4xl mb-2">🫖</div>
                <h3 className="font-black text-xl text-slate-800 dark:text-white mb-1">{gems}</h3>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Chai Points are your learning currency</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-4">Earn by completing lessons and quests</p>
                <button 
                  onClick={() => { setActivePopover(null); onSelectTab('shop'); }} 
                  className="w-full py-3 rounded-2xl font-black text-sm text-white uppercase tracking-wider btn-duo-green cursor-pointer"
                >
                  GO TO SHOP
                </button>
              </div>
            )}
          </div>

          {/* Hearts Status */}
          <div className="relative">
            <div 
              onClick={() => {
                sounds.playPop();
                setActivePopover(activePopover === 'hearts' ? null : 'hearts');
              }}
              className="flex items-center gap-1.5 font-black text-rose-500 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1.5 rounded-2xl border border-rose-200 dark:border-rose-900/60 cursor-pointer hover:border-rose-400 transition"
              title={`${hearts}/5 Hearts (Click to refill)`}
            >
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span className="text-xs sm:text-sm font-black">
                {hearts}
              </span>
            </div>
            
            {activePopover === 'hearts' && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-xl p-4 z-50 text-center">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-l-2 border-t-2 border-slate-200 dark:border-slate-700 rotate-45"></div>
                <button onClick={(e) => { e.stopPropagation(); setActivePopover(null); }} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 cursor-pointer">
                  <X className="w-4 h-4"/>
                </button>
                <div className="flex justify-center mb-2">
                  <Heart className="w-10 h-10 fill-rose-500 text-rose-500" />
                </div>
                <h3 className="font-black text-xl text-slate-800 dark:text-white mb-2">
                  {hearts} / 5 Hearts
                </h3>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">Hearts refill 1 every 4 hours</p>
                <p className="text-xs font-bold text-rose-500 mb-4">
                  {hearts >= 5 ? 'All hearts are full!' : 'Next heart in 3h 42m'}
                </p>
                {hearts < 5 ? (
                  <div className="space-y-2">
                    {onPracticeHeart && (
                      <button
                        onClick={() => {
                          setActivePopover(null);
                          onPracticeHeart();
                        }}
                        className="w-full py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider btn-duo-green text-white cursor-pointer"
                      >
                        PRACTICE (+1 ❤️ FREE)
                      </button>
                    )}
                    <button 
                      onClick={() => {
                        setActivePopover(null);
                        if (onRefillHearts && gems >= 20) {
                          onRefillHearts();
                        } else {
                          onSelectTab('shop');
                        }
                      }} 
                      className="w-full py-2.5 rounded-2xl font-black text-xs text-white uppercase tracking-wider btn-duo-blue cursor-pointer mb-2"
                    >
                      {gems >= 20 ? 'REFILL NOW (20 🫖)' : 'GET GEMS IN SHOP 🛒'}
                    </button>
                  </div>
                ) : (
                  <div className="py-2 text-xs font-black uppercase tracking-wider text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl">
                    Ready to Learn ✓
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Dark / Light Theme Quick Toggle */}
          <button
            onClick={() => {
              sounds.playPop();
              onToggleTheme();
            }}
            className={`p-2 rounded-2xl border transition-all cursor-pointer flex items-center justify-center ${
              isDark
                ? 'border-slate-700 bg-slate-800 text-amber-300 hover:bg-slate-700 hover:border-amber-400 shadow-sm'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-300 shadow-sm'
            }`}
            title={`Switch to ${isDark ? 'Light' : 'Dark'} Theme`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 animate-in spin-in-180 duration-300" />
            ) : (
              <Moon className="w-4 h-4 animate-in spin-in-180 duration-300" />
            )}
          </button>

          {/* Settings Button */}
          <button
            onClick={() => {
              sounds.playPop();
              onOpenSettings();
            }}
            className={`p-2 rounded-2xl border transition cursor-pointer ${
              isDark
                ? 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Settings & Audio"
          >
            <Settings className="w-4 h-4" />
          </button>

        </div>

      </div>
    </header>
  );
}
