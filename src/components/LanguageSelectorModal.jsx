import React from 'react';
import { X, Check, Users, MapPin } from 'lucide-react';
import { INDIAN_LANGUAGES } from '../data/languages';
import { sounds } from '../utils/audio';

export default function LanguageSelectorModal({
  isOpen,
  onClose,
  selectedLanguage,
  onSelectLanguage,
  theme = 'light'
}) {
  if (!isOpen) return null;
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200 select-none">
      <div className={`rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden border transition-colors ${
        isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Modal Header */}
        <div className={`px-6 py-5 border-b flex items-center justify-between ${
          isDark 
            ? 'border-slate-800 bg-slate-800/80' 
            : 'border-slate-100 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-transparent'
        }`}>
          <div>
            <h2 className="text-xl font-black flex items-center gap-2">
              <span>🇮🇳</span> Select a Language Course
            </h2>
            <p className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Master any of the 9 classical & modern languages of India
            </p>
          </div>
          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className={`p-2 rounded-xl transition cursor-pointer ${
              isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language Grid */}
        <div className="p-6 overflow-y-auto space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {INDIAN_LANGUAGES.map((lang) => {
              const isSelected = lang.id === selectedLanguage.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => {
                    sounds.playPop();
                    sounds.speak(lang.greeting.split(' ')[0], lang.code);
                    onSelectLanguage(lang);
                    onClose();
                  }}
                  className={`relative p-4 rounded-3xl border-2 text-left transition-all flex flex-col justify-between group cursor-pointer ${
                    isSelected
                      ? isDark
                        ? 'border-emerald-500 bg-emerald-950/40 ring-2 ring-emerald-500/30'
                        : 'border-emerald-500 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-400/20'
                      : isDark
                      ? 'border-slate-800 bg-slate-800/60 hover:border-emerald-500/50 hover:bg-slate-800'
                      : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      {lang.id === 'hindi' || lang.flagEmoji === '🇮🇳' ? (
                        <svg viewBox="0 0 900 600" className="w-8 h-6 rounded-md overflow-hidden shadow-sm shrink-0">
                          <rect width="900" height="200" fill="#FF9933" />
                          <rect y="200" width="900" height="200" fill="#FFFFFF" />
                          <rect y="400" width="900" height="200" fill="#138808" />
                          <circle cx="450" cy="300" r="80" fill="none" stroke="#000080" strokeWidth="10" />
                          <circle cx="450" cy="300" r="16" fill="#000080" />
                        </svg>
                      ) : (
                        <span className="text-3xl leading-none">{lang.flagEmoji}</span>
                      )}
                      {isSelected && (
                        <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <p className="font-black text-base group-hover:text-emerald-500 transition-colors">
                      {lang.name}
                    </p>
                    <p className="font-extrabold text-lg text-emerald-500 mt-0.5">
                      {lang.nativeName}
                    </p>
                    <p className="text-xs text-slate-400 font-semibold italic mt-1 line-clamp-1">
                      {lang.greeting}
                    </p>
                  </div>

                  <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-bold ${
                    isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-400'
                  }`}>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {lang.speakers}
                    </span>
                    <span className="flex items-center gap-1 max-w-[110px] truncate text-right">
                      <MapPin className="w-3 h-3 shrink-0" />
                      {lang.region.split('&')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className={`px-6 py-4 border-t flex items-center justify-between text-xs font-bold ${
          isDark ? 'bg-slate-800/60 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-500'
        }`}>
          <span>💡 Switch courses anytime — your XP and streak are saved!</span>
          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="font-black text-emerald-500 hover:underline cursor-pointer uppercase tracking-wider"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
