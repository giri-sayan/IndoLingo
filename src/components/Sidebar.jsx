import React, { useState, useRef, useEffect } from 'react';
import { 
  Home, 
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

function DuoLettersIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="#1cb0f6" stroke="#0284c7" strokeWidth="1.2" />
      <text x="12" y="16.5" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">Aa</text>
    </svg>
  );
}

function DuoBirdhouseIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2.5L3 9.5V20.5C3 21.05 3.45 21.5 4 21.5H20C20.55 21.5 21 21.05 21 20.5V9.5L12 2.5Z" fill="#ffc800" stroke="#e5a500" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M12 2.5L2 10.2H6L12 5.5L18 10.2H22L12 2.5Z" fill="#ff4b4b" stroke="#e53935" strokeWidth="1" strokeLinejoin="round" />
      <circle cx="12" cy="14" r="2.8" fill="#582a0a" stroke="#3a1b06" strokeWidth="0.8" />
      <rect x="11.2" y="17.8" width="1.6" height="3" rx="0.8" fill="#e5a500" />
    </svg>
  );
}

function DuoHeartSpeechIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="15" rx="5" fill="#ff6699" stroke="#f43f5e" strokeWidth="1.2" />
      <path d="M8 18L5 21V18H8Z" fill="#ff6699" stroke="#f43f5e" strokeWidth="1" />
      <path d="M12 14.5l-0.8-.7C8.5 11.4 7 10 7 8.3 7 7 8 6 9.3 6c.7 0 1.5.3 1.9.9.4-.6 1.2-.9 1.9-.9 1.3 0 2.3 1 2.3 2.3 0 1.7-1.5 3.1-4.2 5.5l-.8.7z" fill="#ffffff" />
    </svg>
  );
}

function DuoAvatarProfileIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#00cd9c" stroke="#00a880" strokeWidth="1.2" />
      <circle cx="12" cy="9.5" r="4" fill="#ffffff" />
      <circle cx="12" cy="9.5" r="2" fill="#0f172a" />
      <path d="M5.5 19.5C6.8 16.5 9.2 15 12 15C14.8 15 17.2 16.5 18.5 19.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="15.5" cy="8" r="1" fill="#ffc800" />
    </svg>
  );
}

function DuoShieldLeagueIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L4 5V11C4 16.5 7.4 21.6 12 23C16.6 21.6 20 16.5 20 11V5L12 2Z" fill="#a855f7" stroke="#7e22ce" strokeWidth="1.2" />
      <path d="M12 4.5L6 6.8V11.2C6 15.3 8.6 19.1 12 20.3C15.4 19.1 18 15.3 18 11.2V6.8L12 4.5Z" fill="#c084fc" />
      <circle cx="12" cy="11" r="3" fill="#ffffff" />
    </svg>
  );
}

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
    { id: 'letters', label: 'LETTERS', icon: DuoLettersIcon },
    { id: 'leaderboard', label: 'LEADERBOARDS', icon: Shield },
    { id: 'quests', label: 'QUESTS', icon: Target, badge: unreadQuestsCount > 0 },
    { id: 'shop', label: 'SHOP', icon: Store },
    { id: 'profile', label: 'PROFILE', icon: User },
  ];

  // Streamlined 5 tabs for Mobile Bottom Bar (Exact Duolingo Mobile App Match)
  const mobileNavItems = [
    { id: 'learn', label: 'Learn', icon: DuoBirdhouseIcon },
    { id: 'letters', label: 'Letters', icon: DuoLettersIcon },
    { id: 'leaderboard', label: 'Leagues', icon: DuoShieldLeagueIcon },
    { id: 'quests', label: 'Quests', icon: DuoHeartSpeechIcon, badge: unreadQuestsCount > 0 },
    { id: 'profile', label: 'Profile', icon: DuoAvatarProfileIcon },
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

      {/* Duolingo Stories */}
      <button
        onClick={() => {
          sounds.playPop();
          setIsMoreOpen(false);
          onSelectTab('stories');
        }}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer text-left ${
          isDark ? 'hover:bg-[#20333d] text-amber-400' : 'hover:bg-slate-100 text-amber-600'
        }`}
      >
        <Coffee className="w-4 h-4 text-amber-400" />
        <span>DUOLINGO STORIES</span>
      </button>

      {/* Mistakes Inbox */}
      <button
        onClick={() => {
          sounds.playPop();
          setIsMoreOpen(false);
          onSelectTab('mistakes');
        }}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer text-left ${
          isDark ? 'hover:bg-[#20333d] text-rose-400' : 'hover:bg-slate-100 text-rose-600'
        }`}
      >
        <span className="w-4 h-4 flex items-center justify-center font-black text-rose-400">⚠️</span>
        <span>MISTAKES INBOX</span>
      </button>

      {/* Spoken Roleplay */}
      <button
        onClick={() => {
          sounds.playPop();
          setIsMoreOpen(false);
          onSelectTab('roleplay');
        }}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer text-left ${
          isDark ? 'hover:bg-[#20333d] text-cyan-400' : 'hover:bg-slate-100 text-cyan-600'
        }`}
      >
        <span className="w-4 h-4 flex items-center justify-center font-black text-cyan-400">💬</span>
        <span>SPOKEN ROLEPLAY</span>
      </button>

      {/* 9-Language Matrix */}
      <button
        onClick={() => {
          sounds.playPop();
          setIsMoreOpen(false);
          onSelectTab('matrix');
        }}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer text-left ${
          isDark ? 'hover:bg-[#20333d] text-purple-400' : 'hover:bg-slate-100 text-purple-600'
        }`}
      >
        <Languages className="w-4 h-4 text-purple-400" />
        <span>9-LANGUAGE MATRIX</span>
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
              const isActive = activeTab === item.id || (item.id === 'letters' && (activeTab === 'practice' || activeTab === 'akshara' || activeTab === 'letters'));
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
                      : (item.id === 'learn' ? 'text-amber-500' : item.id === 'courses' ? 'text-emerald-400' : item.id === 'letters' ? 'text-[#1cb0f6]' : item.id === 'leaderboard' ? 'text-amber-400' : item.id === 'quests' ? 'text-amber-500' : item.id === 'shop' ? 'text-rose-500' : 'text-slate-400')
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

      {/* Mobile Sticky Bottom Navigation Bar (Exact Duolingo Match: 6 Clean Icons, No Cramped Text) */}
      <nav className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t flex items-center justify-around px-2 py-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] transition-colors shadow-2xl w-full max-w-full overflow-hidden ${
        isDark ? 'bg-[#131f24] border-[#202f36] text-slate-200' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id || (item.id === 'letters' && (activeTab === 'practice' || activeTab === 'akshara' || activeTab === 'letters'));
          return (
            <button
              key={item.id}
              onClick={() => {
                sounds.playPop();
                onSelectTab(item.id);
              }}
              aria-label={item.label}
              title={item.label}
              className={`flex items-center justify-center p-2 rounded-2xl transition-all cursor-pointer relative min-h-[44px] min-w-[44px] ${
                isActive
                  ? isDark
                    ? 'border-2 border-[#1cb0f6] bg-[#1cb0f6]/15 text-[#1cb0f6]'
                    : 'border-2 border-emerald-500 bg-emerald-50 text-emerald-600'
                  : 'border-2 border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-6 h-6 shrink-0" />
              {item.badge && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-[#131f24]" />
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
          aria-label="More options"
          title="More"
          className={`flex items-center justify-center p-2 rounded-2xl transition-all cursor-pointer relative min-h-[44px] min-w-[44px] ${
            activeTab === 'stories' || activeTab === 'shop'
              ? isDark
                ? 'border-2 border-purple-400 bg-purple-500/20 text-purple-400'
                : 'border-2 border-purple-500 bg-purple-50 text-purple-600'
              : 'border-2 border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <MoreHorizontal className="w-6 h-6 shrink-0" />
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
