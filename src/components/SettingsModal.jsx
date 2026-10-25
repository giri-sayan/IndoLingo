import React, { useState } from 'react';
import { X, Moon, Sun, Sparkles, Volume2, VolumeX, Target, RotateCcw, Check, Palette } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function SettingsModal({
  isOpen,
  onClose,
  theme,
  onSelectTheme,
  soundMuted,
  onToggleSound,
  showTransliteration,
  onToggleTransliteration,
  dailyGoalXP,
  onChangeDailyGoal,
  onResetProgress,
  selectedLanguage
}) {
  const [activeTab, setActiveTab] = useState('appearance'); // 'appearance' | 'audio' | 'learning' | 'account'

  if (!isOpen) return null;

  const themes = [
    {
      id: 'light',
      name: 'Light',
      desc: 'Clean, high contrast everyday look',
      icon: Sun,
      color: 'bg-white text-slate-800 border-slate-300'
    },
    {
      id: 'dark',
      name: 'Dark Night (Duo Style)',
      desc: 'Sleek dark mode for late night study',
      icon: Moon,
      color: 'bg-slate-900 text-slate-100 border-slate-700'
    },
    {
      id: 'saffron',
      name: 'Festive Saffron',
      desc: 'Warm marigold & saffron aesthetic',
      icon: Sparkles,
      color: 'bg-orange-50 text-orange-950 border-orange-300'
    }
  ];

  const dailyGoals = [
    { xp: 10, label: 'Casual', time: '3 mins / day' },
    { xp: 20, label: 'Regular', time: '7 mins / day' },
    { xp: 30, label: 'Serious', time: '12 mins / day' },
    { xp: 50, label: 'Polyglot', time: '20 mins / day' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className={`rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border transition-colors ${
        theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Header */}
        <div className={`px-6 py-5 border-b flex items-center justify-between ${
          theme === 'dark' ? 'border-slate-800 bg-slate-900/90' : 'border-slate-100 bg-slate-50/70'
        }`}>
          <div>
            <h2 className="text-xl font-black flex items-center gap-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/10 text-emerald-600">⚙️</span>
              Settings & Preferences
            </h2>
            <p className={`text-xs font-semibold mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              Customize your learning experience just like Duolingo
            </p>
          </div>

          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className={`p-2 rounded-xl transition cursor-pointer ${
              theme === 'dark' ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className={`flex border-b px-6 pt-3 gap-3 text-xs font-bold ${
          theme === 'dark' ? 'border-slate-800 bg-slate-900' : 'border-slate-100 bg-white'
        }`}>
          <button
            onClick={() => { sounds.playPop(); setActiveTab('appearance'); }}
            className={`pb-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'appearance'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <Palette className="w-3.5 h-3.5" /> Appearance
          </button>
          <button
            onClick={() => { sounds.playPop(); setActiveTab('audio'); }}
            className={`pb-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'audio'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" /> Audio & Sound
          </button>
          <button
            onClick={() => { sounds.playPop(); setActiveTab('learning'); }}
            className={`pb-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'learning'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <Target className="w-3.5 h-3.5" /> Learning Goals
          </button>
          <button
            onClick={() => { sounds.playPop(); setActiveTab('account'); }}
            className={`pb-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'account'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" /> Progress
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">

          {/* 1. APPEARANCE TAB */}
          {activeTab === 'appearance' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <h3 className="font-extrabold text-sm">Theme Selection</h3>
                <p className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  Choose how IndoLingo looks on your device.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {themes.map((t) => {
                  const isSelected = theme === t.id;
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        sounds.playPop();
                        onSelectTheme(t.id);
                      }}
                      className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between group cursor-pointer ${
                        isSelected
                          ? 'border-emerald-500 ring-2 ring-emerald-400/30 shadow-md'
                          : theme === 'dark'
                          ? 'border-slate-700 bg-slate-800/80 hover:border-slate-600'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-xl ${
                          isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />}
                      </div>
                      <p className="font-extrabold text-xs">{t.name}</p>
                      <p className={`text-[11px] mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                        {t.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className={`p-4 rounded-2xl border flex items-center justify-between ${
                theme === 'dark' ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}>
                <div>
                  <p className="text-xs font-bold">Quick Switch on Homepage</p>
                  <p className={`text-[11px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    You can also toggle between Light & Dark mode directly via the sun/moon button in the top navigation bar!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. AUDIO & SOUND TAB */}
          {activeTab === 'audio' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <h3 className="font-extrabold text-sm">Sound & Pronunciation</h3>
                <p className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  Manage audio feedback, celebratory chimes, and speech voices.
                </p>
              </div>

              {/* Sound Effects Toggle */}
              <div className={`p-4 rounded-2xl border flex items-center justify-between ${
                theme === 'dark' ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
                    {soundMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-bold text-xs">Game Sound Effects</p>
                    <p className={`text-[11px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      Play chimes on correct answers and fanfare on completion
                    </p>
                  </div>
                </div>

                <button
                  onClick={onToggleSound}
                  className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                    !soundMuted ? 'bg-emerald-500' : 'bg-slate-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    !soundMuted ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Speech Voice Test */}
              <div className={`p-4 rounded-2xl border flex items-center justify-between ${
                theme === 'dark' ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}>
                <div>
                  <p className="font-bold text-xs">Indian Accent Speech Engine</p>
                  <p className={`text-[11px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    Test native {selectedLanguage?.name || 'Indian'} voice synthesis
                  </p>
                </div>
                <button
                  onClick={() => {
                    const phrase = selectedLanguage?.greeting ? selectedLanguage.greeting.split('(')[0].trim() : 'नमस्ते';
                    const code = selectedLanguage?.code || 'hi-IN';
                    sounds.speak(phrase, code);
                  }}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold btn-3d-blue text-white cursor-pointer"
                >
                  Test {selectedLanguage?.flagEmoji || '🔊'} Audio
                </button>
              </div>
            </div>
          )}

          {/* 3. LEARNING GOALS TAB */}
          {activeTab === 'learning' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <h3 className="font-extrabold text-sm">Daily Learning Goal</h3>
                <p className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  Set a daily target to maintain your streak and boost retention.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {dailyGoals.map((g) => {
                  const isSelected = dailyGoalXP === g.xp;
                  return (
                    <button
                      key={g.xp}
                      onClick={() => {
                        sounds.playPop();
                        onChangeDailyGoal?.(g.xp);
                      }}
                      className={`p-4 rounded-2xl border-2 text-left transition cursor-pointer ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-400/20'
                          : theme === 'dark'
                          ? 'border-slate-700 bg-slate-800 hover:border-slate-600'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-sm text-emerald-600">{g.xp} XP</span>
                        {isSelected && <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />}
                      </div>
                      <p className="font-extrabold text-xs mt-1">{g.label}</p>
                      <p className={`text-[10px] mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                        {g.time}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Transliteration Setting */}
              <div className={`p-4 rounded-2xl border flex items-center justify-between ${
                theme === 'dark' ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}>
                <div>
                  <p className="font-bold text-xs">Phonetic Romanized Text (Transliteration)</p>
                  <p className={`text-[11px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    Show Latin script pronunciation aids underneath Indian scripts
                  </p>
                </div>

                <button
                  onClick={onToggleTransliteration}
                  className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                    showTransliteration ? 'bg-emerald-500' : 'bg-slate-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    showTransliteration ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </div>
          )}

          {/* 4. ACCOUNT & PROGRESS TAB */}
          {activeTab === 'account' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <h3 className="font-extrabold text-sm">Learning Progress & Data</h3>
                <p className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  Manage your local progress and stored achievements.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border space-y-3 ${
                theme === 'dark' ? 'bg-rose-950/20 border-rose-900/50' : 'bg-rose-50 border-rose-200'
              }`}>
                <div>
                  <h4 className="font-black text-xs text-rose-600 uppercase tracking-wider">
                    Danger Zone
                  </h4>
                  <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    Reset all completed lesson checkmarks, streak counts, and Chai points back to initial state.
                  </p>
                </div>

                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
                      onResetProgress();
                      onClose();
                    }
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-black bg-rose-600 hover:bg-rose-700 text-white transition cursor-pointer"
                >
                  Reset Progress & Start Fresh
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className={`px-6 py-4 border-t flex items-center justify-end ${
          theme === 'dark' ? 'border-slate-800 bg-slate-900/70' : 'border-slate-100 bg-slate-50'
        }`}>
          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl font-bold text-xs btn-3d-green text-white cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
