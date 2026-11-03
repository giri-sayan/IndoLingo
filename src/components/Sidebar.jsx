import React, { useState, useRef, useEffect } from 'react';
import { 
  Home, 
  Dumbbell, 
  Shield, 
  Target, 
  Store, 
  User, 
  MoreHorizontal,
  Coffee,
  Languages,
  Sun,
  Moon,
  Settings,
  Globe,
  Smartphone,
  X
} from 'lucide-react';
import TigerLogo from './TigerLogo';
import { sounds } from '../utils/audio';

export default function Sidebar({
  activeTab,
  onSelectTab,
  onOpenSettings,
  selectedLanguage,
  onOpenLanguageSelector,
  theme = 'dark',
  onToggleTheme,
  showTransliteration,
  onToggleTransliteration,
  unreadQuestsCount = 1,
  onOpenInstallModal
}) {
  const isDark = theme === 'dark';
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'learn', label: 'LEARN', icon: Home },
    { id: 'courses', label: 'COURSES', icon: Globe, isAction: true },
    { id: 'practice', label: 'PRACTICE', icon: Dumbbell },
    { id: 'leaderboard', label: 'LEADERBOARDS', icon: Shield },
    { id: 'quests', label: 'QUESTS', icon: Target, badge: unreadQuestsCount > 0 },
    { id: 'shop', label: 'SHOP', icon: Store },
    { id: 'profile', label: 'PROFILE', icon: User },
  ];

  // Streamlined 5 tabs for Mobile Bottom Bar (Apple & Android Guidelines)
  const mobileNavItems = [
    { id: 'learn', label: 'Learn', icon: Home },
    { id: 'practice', label: 'Practice', icon: Dumbbell },
    { id: 'leaderboard', label: 'Leagues', icon: Shield },
    { id: 'quests', label: 'Quests', icon: Target, badge: unreadQuestsCount > 0 },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const renderMenuContent = () => (
    <div className={`w-64 rounded-2xl border-2 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 ${
      isDark ? 'bg-[#18262d] border-[#38464f] text-slate-200' : 'bg-white border-slate-200 text-slate-800'
    }`}>
      {/* Switch / View All Courses */}
      <button
        onClick={() => {
          sounds.playPop();
          setIsMoreOpen(false);
          if (onOpenLanguageSelector) onOpenLanguageSelector();
        }}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer text-left ${
          isDark ? 'hover:bg-[#20333d] text-emerald-400' : 'hover:bg-slate-100 text-emerald-700'
        }`}
      >
        <span className="flex items-center gap-3">
          <Globe className="w-4 h-4 text-emerald-400" />
          <span>ALL 9 COURSES</span>
        </span>
        <span className="text-base">{selectedLanguage?.flagEmoji || '🇮🇳'}</span>
      </button>

      {/* Bhasha Sangam */}
      <button
        onClick={() => {
          sounds.playPop();
          setIsMoreOpen(false);
          onSelectTab('practice');
        }}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer text-left ${
          isDark ? 'hover:bg-[#20333d]' : 'hover:bg-slate-100'
        }`}
      >
        <Languages className="w-4 h-4 text-blue-400" />
        <span>BHASHA SANGAM MATRIX</span>
      </button>

      {/* Cultural Chai Stories */}
      <button
        onClick={() => {
          sounds.playPop();
          setIsMoreOpen(false);
          onSelectTab('stories');
        }}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer text-left ${
          isDark ? 'hover:bg-[#20333d]' : 'hover:bg-slate-100'
        }`}
      >
        <Coffee className="w-4 h-4 text-amber-400" />
        <span>CHAI STORIES</span>
      </button>

      {/* Install Mobile App (PWA) */}
      {onOpenInstallModal && (
        <button
          onClick={() => {
            sounds.playPop();
            setIsMoreOpen(false);
            onOpenInstallModal();
          }}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer text-left ${
            isDark ? 'hover:bg-[#20333d] text-emerald-400' : 'hover:bg-slate-100 text-emerald-600'
          }`}
        >
          <span className="flex items-center gap-3">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span>INSTALL APP (₹0)</span>
          </span>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-black">FREE</span>
        </button>
      )}

      <div className={`h-px my-1.5 ${isDark ? 'bg-[#2b3e48]' : 'bg-slate-200'}`} />

      {/* Phonetics / Transliteration Toggle */}
      <button
        onClick={() => {
          if (onToggleTransliteration) onToggleTransliteration();
        }}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer text-left ${
          isDark ? 'hover:bg-[#20333d]' : 'hover:bg-slate-100'
        }`}
      >
        <span className="flex items-center gap-2">
          <span>Aa/अ</span>
          <span>PHONETICS</span>
        </span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded ${isDark ? 'bg-[#2b3e48] text-[#1cb0f6]' : 'bg-slate-200 text-slate-700 font-bold'}`}>
          {showTransliteration ? 'ON' : 'OFF'}
        </span>
      </button>

      {/* Theme Switcher */}
      <button
        onClick={() => {
          if (onToggleTheme) onToggleTheme();
        }}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer text-left ${
          isDark ? 'hover:bg-[#20333d]' : 'hover:bg-slate-100'
        }`}
      >
        <span className="flex items-center gap-2">
          {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
          <span>THEME</span>
        </span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded ${isDark ? 'bg-[#2b3e48] text-slate-300' : 'bg-slate-200 text-slate-700 font-bold'}`}>
          {isDark ? 'DARK' : 'LIGHT'}
        </span>
      </button>

      {/* Settings */}
      <button
        onClick={() => {
          sounds.playPop();
          setIsMoreOpen(false);
          onOpenSettings();
        }}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer text-left ${
          isDark ? 'hover:bg-[#20333d]' : 'hover:bg-slate-100'
        }`}
      >
        <Settings className="w-4 h-4 text-slate-400" />
        <span>SETTINGS</span>
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed Left Sidebar */}
      <aside className={`hidden lg:flex flex-col justify-between w-64 xl:w-68 shrink-0 h-screen sticky top-0 px-4 py-6 border-r transition-colors z-40 select-none ${
        isDark ? 'bg-[#131f24] border-[#2b3e48] text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <div className="space-y-4">
          {/* Duolingo Brand Logo */}
          <div 
            onClick={() => {
              sounds.playPop();
              onSelectTab('learn');
            }}
            className="flex items-center gap-3 px-3 py-1 cursor-pointer group"
          >
            <TigerLogo size={42} className="group-hover:scale-105 transition-transform" />
            <div>
              <span className="font-black text-2xl tracking-tight text-[#58cc02] group-hover:brightness-110 transition">
                IndoLingo
              </span>
            </div>
          </div>

          {/* Active Course Selector Card */}
          {selectedLanguage && (
            <div
              onClick={() => {
                sounds.playPop();
                if (onOpenLanguageSelector) onOpenLanguageSelector();
              }}
              className={`p-3 rounded-2xl border-2 transition-all cursor-pointer group flex items-center justify-between shadow-sm ${
                isDark
                  ? 'bg-[#18262d] border-[#38464f] hover:border-[#1cb0f6]'
                  : 'bg-emerald-50/80 border-emerald-200 hover:border-emerald-400'
              }`}
              title={`Current Course: ${selectedLanguage.name}. Click to switch!`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-3xl leading-none shrink-0 group-hover:scale-110 transition-transform">
                  {selectedLanguage.flagEmoji}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className={`font-black text-sm truncate ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>
                      {selectedLanguage.name}
                    </p>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                  </div>
                  <p className="text-[11px] font-bold text-emerald-500 truncate">
                    {selectedLanguage.nativeName}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="space-y-1 pt-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sounds.playPop();
                    setIsMoreOpen(false);
                    if (item.id === 'courses') {
                      if (onOpenLanguageSelector) onOpenLanguageSelector();
                    } else {
                      onSelectTab(item.id);
                    }
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-black text-sm tracking-wider uppercase transition-all text-left cursor-pointer border-2 relative ${
                    isActive
                      ? isDark
                        ? 'border-[#38464f] bg-[#18262d] text-[#1cb0f6]'
                        : 'border-emerald-400 bg-emerald-50/80 text-emerald-700 shadow-sm'
                      : isDark
                      ? 'border-transparent text-slate-400 hover:bg-[#18262d] hover:text-slate-200'
                      : 'border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-6 h-6 shrink-0 ${
                    isActive 
                      ? (isDark ? 'text-[#1cb0f6]' : 'text-emerald-600') 
                      : (item.id === 'learn' ? 'text-amber-500' : item.id === 'courses' ? 'text-emerald-400' : item.id === 'practice' ? 'text-blue-400' : item.id === 'leaderboard' ? 'text-amber-400' : item.id === 'quests' ? 'text-amber-500' : item.id === 'shop' ? 'text-rose-500' : 'text-slate-400')
                  }`} />
                  <span className="truncate">{item.label}</span>
                  {item.badge && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-[#131f24]" />
                  )}
                </button>
              );
            })}

            {/* MORE Item with Interactive Dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => {
                  sounds.playPop();
                  setIsMoreOpen(!isMoreOpen);
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-black text-sm tracking-wider uppercase transition-all text-left cursor-pointer border-2 ${
                  isMoreOpen
                    ? isDark ? 'border-[#38464f] bg-[#18262d] text-purple-400' : 'border-purple-400 bg-purple-50 text-purple-700'
                    : isDark ? 'border-transparent text-slate-400 hover:bg-[#18262d] hover:text-slate-200' : 'border-transparent text-slate-500 hover:bg-slate-100'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <MoreHorizontal className="w-4 h-4" />
                </div>
                <span>MORE</span>
              </button>

              {/* MORE Menu Popover */}
              {isMoreOpen && (
                <div className="absolute left-full ml-3 top-0">
                  {renderMenuContent()}
                </div>
              )}
            </div>
          </nav>
        </div>
      </aside>

      {/* Mobile Sticky Bottom Navigation Bar (Optimized 5-Touch Targets) */}
      <nav className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t flex items-center justify-around px-2 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] transition-colors shadow-lg ${
        isDark ? 'bg-[#131f24]/98 border-[#2b3e48] text-slate-200 backdrop-blur-md' : 'bg-white/98 border-slate-200 text-slate-800 backdrop-blur-md'
      }`}>
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                sounds.playPop();
                onSelectTab(item.id);
              }}
              className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all cursor-pointer relative min-h-[48px] ${
                isActive
                  ? isDark
                    ? 'bg-[#18262d] text-[#1cb0f6]'
                    : 'bg-emerald-50 text-emerald-600'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[11px] font-black uppercase tracking-tight">{item.label}</span>
              {item.badge && (
                <span className="absolute top-1 right-1/4 w-2 h-2 rounded-full bg-rose-500" />
              )}
            </button>
          );
        })}

        {/* Mobile Quick "More Sheet" Button */}
        <button
          onClick={() => {
            sounds.playPop();
            setIsMoreOpen(true);
          }}
          className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all cursor-pointer relative min-h-[48px] ${
            activeTab === 'stories' || activeTab === 'shop'
              ? isDark
                ? 'bg-[#18262d] text-purple-400'
                : 'bg-purple-50 text-purple-600'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <MoreHorizontal className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-black uppercase tracking-tight">More</span>
        </button>
      </nav>

      {/* Mobile Bottom Sheet Modal for Secondary Views & PWA Install */}
      {isMoreOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center animate-in fade-in duration-150">
          <div className={`w-full rounded-t-3xl border-t-2 p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl animate-in slide-in-from-bottom duration-200 ${
            isDark ? 'bg-[#18262d] border-[#38464f] text-white' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            {/* Grab handle */}
            <div className="w-12 h-1.5 rounded-full bg-slate-500/40 mx-auto mb-4" />
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-black text-sm uppercase tracking-wider text-slate-400">
                IndoLingo Features & Utilities
              </h3>
              <button 
                onClick={() => setIsMoreOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 py-4">
              {/* Chai Shop */}
              <button
                onClick={() => {
                  sounds.playPop();
                  setIsMoreOpen(false);
                  onSelectTab('shop');
                }}
                className={`p-3.5 rounded-2xl border-2 flex items-center gap-3 text-left transition ${
                  isDark ? 'bg-slate-800/80 border-slate-700 hover:border-amber-400' : 'bg-amber-50/60 border-amber-200'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0 text-lg">
                  🫖
                </div>
                <div>
                  <p className="font-black text-xs uppercase">Chai Shop</p>
                  <p className="text-[10px] text-slate-400">Outfits & Hearts</p>
                </div>
              </button>

              {/* Chai Stories */}
              <button
                onClick={() => {
                  sounds.playPop();
                  setIsMoreOpen(false);
                  onSelectTab('stories');
                }}
                className={`p-3.5 rounded-2xl border-2 flex items-center gap-3 text-left transition ${
                  isDark ? 'bg-slate-800/80 border-slate-700 hover:border-purple-400' : 'bg-purple-50/60 border-purple-200'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-xs uppercase">Chai Stories</p>
                  <p className="text-[10px] text-slate-400">Desi Folklore</p>
                </div>
              </button>

              {/* Switch Language Course */}
              <button
                onClick={() => {
                  sounds.playPop();
                  setIsMoreOpen(false);
                  if (onOpenLanguageSelector) onOpenLanguageSelector();
                }}
                className={`p-3.5 rounded-2xl border-2 flex items-center gap-3 text-left transition ${
                  isDark ? 'bg-slate-800/80 border-slate-700 hover:border-emerald-400' : 'bg-emerald-50/60 border-emerald-200'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-lg">
                  {selectedLanguage?.flagEmoji || '🇮🇳'}
                </div>
                <div>
                  <p className="font-black text-xs uppercase">All 9 Courses</p>
                  <p className="text-[10px] text-slate-400">{selectedLanguage?.name}</p>
                </div>
              </button>

              {/* Install Mobile App (₹0 Free PWA) */}
              {onOpenInstallModal && (
                <button
                  onClick={() => {
                    sounds.playPop();
                    setIsMoreOpen(false);
                    onOpenInstallModal();
                  }}
                  className={`p-3.5 rounded-2xl border-2 flex items-center gap-3 text-left transition ${
                    isDark ? 'bg-emerald-950/40 border-emerald-800 hover:border-emerald-400 text-emerald-300' : 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase flex items-center gap-1">
                      Install App <span className="text-[9px] bg-emerald-500 text-white px-1 rounded">₹0</span>
                    </p>
                    <p className="text-[10px] opacity-80">Android & iOS</p>
                  </div>
                </button>
              )}
            </div>

            {/* Quick Settings Toggles Row */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => {
                  if (onToggleTransliteration) onToggleTransliteration();
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-black uppercase text-center transition ${
                  showTransliteration
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400'
                }`}
              >
                Aa/अ {showTransliteration ? 'Phonetics ON' : 'Native'}
              </button>

              <button
                onClick={() => {
                  if (onToggleTheme) onToggleTheme();
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-black uppercase text-center flex items-center justify-center gap-1.5 transition ${
                  isDark ? 'bg-slate-800/60 border-slate-700 text-amber-400' : 'bg-slate-100 border-slate-300 text-slate-800'
                }`}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              <button
                onClick={() => {
                  sounds.playPop();
                  setIsMoreOpen(false);
                  onOpenSettings();
                }}
                className="py-2.5 px-3 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-300 hover:text-white"
                title="Settings"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
