import React, { useState, useRef, useEffect } from 'react';
import { Flame, Heart, Sun, Moon, Settings, ChevronDown, X, Smartphone } from 'lucide-react';
import { sounds } from '../utils/audio';
import TigerLogo from './TigerLogo';

export default function Header({
  selectedLanguage,
  allLanguages = [],
  onSelectLanguage,
  onOpenLanguageSelector,
  streak = 3,
  gems = 240,
  hearts = 5,
  completedLessonsCount = 1,
  onRefillHearts,
  onPracticeHeart,
  showTransliteration,
  onToggleTransliteration,
  activeTab = 'learn',
  onSelectTab,
  theme = 'light',
  onToggleTheme,
  onOpenSettings,
  onOpenInstallModal,
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
    <header ref={headerRef} className={`sticky top-0 z-30 backdrop-blur border-b transition-colors select-none w-full max-w-full overflow-x-clip ${
      isDark ? 'bg-[#0d171c]/98 border-[#202f36] text-white' : 'bg-white/98 border-slate-200 text-slate-800'
    } ${className}`}>

      {/* 1. DUOLINGO TOP COURSE TABS (GERMAN / CHESS / ENGLISH MATCH) */}
      <div className="w-full bg-black/90 border-b border-[#202f36] px-2 sm:px-4 py-1.5 overflow-x-auto no-scrollbar flex items-center gap-4 sm:gap-6 text-xs font-black uppercase tracking-wider">
        {allLanguages && allLanguages.length > 0 ? (
          allLanguages.map((lang) => {
            const isSelected = lang.id === selectedLanguage.id;
            return (
              <button
                key={lang.id}
                onClick={() => {
                  sounds.playPop();
                  if (onSelectLanguage) onSelectLanguage(lang);
                }}
                className={`pb-1 whitespace-nowrap transition-all cursor-pointer shrink-0 border-b-2 ${
                  isSelected
                    ? 'border-white text-white font-black'
                    : 'border-transparent text-slate-400 hover:text-slate-200 font-bold'
                }`}
              >
                {lang.name.toUpperCase()}
              </button>
            );
          })
        ) : (
          <span className="text-white font-black">{selectedLanguage.name.toUpperCase()}</span>
        )}
      </div>

      {/* 2. DUOLINGO TOP STATS BAR (🇩🇪 12 | 🔥 302 | 💎 2013 | ⚡ 25 MATCH) */}
      <div className={`max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-4 px-2.5 py-2 sm:px-6 sm:py-2.5 w-full ${activeTab === 'learn' ? 'xl:hidden' : ''}`}>
        
        {/* Left: Course Flag & Native Badge */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 shrink">
          {/* Mobile-only Logo */}
          <div 
            onClick={() => {
              sounds.playPop();
              onSelectTab('learn');
            }}
            className="flex lg:hidden items-center gap-1.5 cursor-pointer shrink-0"
          >
            <TigerLogo size={30} />
          </div>

          {/* Current Course Flag & Level Pill (Exact Duolingo Match: 🇩🇪 12) */}
          <button
            onClick={() => {
              sounds.playPop();
              onOpenLanguageSelector();
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-2xl border-2 transition-all cursor-pointer shrink-0 ${
              isDark 
                ? 'border-[#202f36] bg-[#18262d] hover:border-[#1cb0f6] text-white' 
                : 'border-slate-200 hover:border-emerald-400 bg-white text-slate-800'
            }`}
            title="Switch Course"
          >
            <span className="text-base sm:text-lg leading-none">{selectedLanguage.flagEmoji || '🇮🇳'}</span>
            <span className="text-xs sm:text-sm font-black text-white tracking-tight">
              {Math.max(1, completedLessonsCount || 1)}
            </span>
            <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
          </button>
        </div>

        {/* Right: Authentic Duolingo Gamification Stats */}
        <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
          
          {/* Script Transliteration Toggle */}
          <button
            onClick={onToggleTransliteration}
            className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-black border transition-colors cursor-pointer shrink-0 ${
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
          <div className="relative shrink-0">
            <div 
              onClick={() => {
                sounds.playPop();
                setActivePopover(activePopover === 'streak' ? null : 'streak');
              }}
              className="flex items-center gap-1 sm:gap-1.5 font-black text-orange-500 bg-orange-50 dark:bg-orange-950/40 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-2xl border border-orange-200 dark:border-orange-900/60 cursor-pointer hover:border-orange-400 transition"
              title={`${streak} Day Streak!`}
            >
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-orange-500 text-orange-500 animate-bounce-subtle shrink-0" />
              <span className="text-xs sm:text-sm font-black">{streak}</span>
            </div>
            
            {activePopover === 'streak' && (
              <div className="absolute top-full mt-3 right-0 sm:left-1/2 sm:-translate-x-1/2 w-64 max-w-[calc(100vw-1.5rem)] bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-xl p-4 z-50">
                <div className="absolute -top-2 right-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-l-2 border-t-2 border-slate-200 dark:border-slate-700 rotate-45"></div>
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
          <div className="relative shrink-0">
            <div 
              onClick={() => {
                sounds.playPop();
                setActivePopover(activePopover === 'gems' ? null : 'gems');
              }}
              className="flex items-center gap-1 sm:gap-1.5 font-black text-[#1cb0f6] bg-[#1cb0f6]/10 dark:bg-[#1cb0f6]/15 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-2xl border border-[#1cb0f6]/30 dark:border-[#1cb0f6]/40 cursor-pointer hover:border-[#1cb0f6] transition"
              title={`${gems} Gems (Click to open Shop)`}
            >
              <span className="text-xs sm:text-sm">💎</span>
              <span className="text-xs sm:text-sm font-black">{gems}</span>
            </div>
            
            {activePopover === 'gems' && (
              <div className="absolute top-full mt-3 right-0 sm:left-1/2 sm:-translate-x-1/2 w-64 max-w-[calc(100vw-1.5rem)] bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-xl p-4 z-50 text-center">
                <div className="absolute -top-2 right-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-l-2 border-t-2 border-slate-200 dark:border-slate-700 rotate-45"></div>
                <button onClick={(e) => { e.stopPropagation(); setActivePopover(null); }} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 cursor-pointer">
                  <X className="w-4 h-4"/>
                </button>
                <div className="text-4xl mb-2">💎</div>
                <h3 className="font-black text-xl text-slate-800 dark:text-white mb-1">{gems} Gems</h3>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Gems are your learning currency</p>
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
          <div className="relative shrink-0">
            <div 
              onClick={() => {
                sounds.playPop();
                setActivePopover(activePopover === 'hearts' ? null : 'hearts');
              }}
              className="flex items-center gap-1 sm:gap-1.5 font-black text-rose-500 bg-rose-50 dark:bg-rose-950/40 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-2xl border border-rose-200 dark:border-rose-900/60 cursor-pointer hover:border-rose-400 transition"
              title={`${hearts}/5 Hearts (Click to refill)`}
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-rose-500 text-rose-500 shrink-0" />
              <span className="text-xs sm:text-sm font-black">
                {hearts}
              </span>
            </div>
            
            {activePopover === 'hearts' && (
              <div className="absolute top-full mt-3 right-0 sm:left-1/2 sm:-translate-x-1/2 w-64 max-w-[calc(100vw-1.5rem)] bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-xl p-4 z-50 text-center">
                <div className="absolute -top-2 right-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-l-2 border-t-2 border-slate-200 dark:border-slate-700 rotate-45"></div>
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

          {/* Install Mobile App Button - Desktop/Tablet */}
          {onOpenInstallModal && (
            <button
              onClick={() => {
                sounds.playPop();
                onOpenInstallModal();
              }}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl border text-xs font-black transition cursor-pointer bg-emerald-500/15 border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-white shrink-0"
              title="Install IndoLingo App on Android / iOS (₹0 Free)"
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden md:inline">App</span>
            </button>
          )}

          {/* Dark / Light Theme Quick Toggle - Desktop/Tablet */}
          <button
            onClick={() => {
              sounds.playPop();
              onToggleTheme();
            }}
            className={`hidden sm:flex p-2 rounded-2xl border transition-all cursor-pointer items-center justify-center shrink-0 ${
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

          {/* Settings Button - Desktop/Tablet */}
          <button
            onClick={() => {
              sounds.playPop();
              onOpenSettings();
            }}
            className={`hidden sm:flex p-2 rounded-2xl border transition cursor-pointer items-center justify-center shrink-0 ${
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
