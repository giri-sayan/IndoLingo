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
  ChevronDown,
  Globe
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
  unreadQuestsCount = 1
}) {
  const isDark = theme === 'dark';
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const mobileMoreRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        moreRef.current && !moreRef.current.contains(event.target) &&
        (!mobileMoreRef.current || !mobileMoreRef.current.contains(event.target))
      ) {
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
              <div className="flex items-center gap-1 shrink-0">
                <span className={`px-2 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition ${
                  isDark
                    ? 'bg-[#2b3e48] text-[#1cb0f6] group-hover:bg-[#1cb0f6] group-hover:text-white'
                    : 'bg-emerald-200 text-emerald-800 group-hover:bg-emerald-500 group-hover:text-white'
                }`}>
                  SWITCH
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition" />
              </div>
            </div>
          )}

          {/* Nav Items List */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sounds.playPop();
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

      {/* Mobile Sticky Bottom Navigation Bar */}
      <nav className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t flex items-center justify-around py-2 px-1 transition-colors ${
        isDark ? 'bg-[#131f24]/95 border-[#2b3e48] text-slate-200 backdrop-blur' : 'bg-white/95 border-slate-200 text-slate-800 backdrop-blur'
      }`}>
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
              className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all cursor-pointer relative ${
                isActive
                  ? isDark
                    ? 'bg-[#18262d] text-[#1cb0f6]'
                    : 'bg-emerald-50 text-emerald-600'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-tight">{item.label}</span>
              {item.badge && (
                <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-rose-500" />
              )}
            </button>
          );
        })}

        {/* Mobile MORE Button */}
        <div className="relative" ref={mobileMoreRef}>
          <button
            onClick={() => {
              sounds.playPop();
              setIsMoreOpen(prev => !prev);
            }}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all cursor-pointer relative ${
              isMoreOpen || activeTab === 'stories'
                ? isDark
                  ? 'bg-[#18262d] text-purple-400'
                  : 'bg-purple-50 text-purple-600'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MoreHorizontal className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-tight">MORE</span>
          </button>

          {isMoreOpen && (
            <div className="absolute bottom-full mb-3 right-0">
              {renderMenuContent()}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

