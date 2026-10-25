import React, { useState } from 'react';
import { Share2, X, Check, Sparkles, MessageCircle } from 'lucide-react';
import Mascot from './Mascot';
import { LIFETIME_ACHIEVEMENTS } from '../data/diplomas';
import { sounds } from '../utils/audio';

const ProfileView = ({ streak, _gems, _hearts, completedLessonsCount, selectedLanguage, equippedOutfit, theme }) => {
  const isDark = theme === 'dark';
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  
  const totalXp = completedLessonsCount * 50 + 350;

  const flawlessCount = Number(localStorage.getItem('bhasha_flawless') || (completedLessonsCount > 0 ? 1 : 0));
  const completed = (() => {
    try { return JSON.parse(localStorage.getItem('bhasha_completed') || '{}'); } catch { return {}; }
  })();
  const distinctCoursePrefixes = new Set(Object.keys(completed).map(k => k.split('-')[0]).filter(p => !p.startsWith('chest')));
  const polyglotCount = Math.max(1, distinctCoursePrefixes.size);

  const currentHour = new Date().getHours();
  const isEarly = (currentHour < 9 && completedLessonsCount > 0) ? 1 : 0;
  const isNight = (currentHour >= 22 && completedLessonsCount > 0) ? 1 : 0;
  const isWeekend = ([0, 6].includes(new Date().getDay()) && completedLessonsCount > 0) ? 1 : 0;
  
  const langKey = selectedLanguage?.id || 'tamil';
  const nativeBadge = LIFETIME_ACHIEVEMENTS[langKey] || LIFETIME_ACHIEVEMENTS.hindi;

  const achievements = [
    { id: 'wildfire', title: 'Wildfire', description: 'Reach a 3 day streak', icon: '🔥', current: streak, max: 3, levels: [3, 7, 14, 30, 50, 100, 365] },
    { id: 'chai', title: 'Chai Connoisseur', description: 'Earn 100 XP', icon: '🫖', current: totalXp, max: 100, levels: [100, 500, 1000, 5000] },
    { id: 'words', title: 'Word Collector', description: 'Master 8 vocabulary words', icon: '📚', current: completedLessonsCount * 8, max: 8, levels: [8, 40, 80, 200, 400] },
    { id: 'flawless', title: 'Flawless Finisher', description: 'Complete a lesson with no mistakes', icon: '✨', current: flawlessCount, max: 1, levels: [1, 5, 10] },
    { id: 'early', title: 'Early Bird', description: 'Complete a lesson before 9am', icon: '🌅', current: isEarly, max: 1, levels: [1, 5] },
    { id: 'night', title: 'Night Owl', description: 'Complete a lesson after 10pm', icon: '🦉', current: isNight, max: 1, levels: [1, 5] },
    { id: 'weekend', title: 'Weekend Warrior', description: 'Complete a lesson on the weekend', icon: '⚔️', current: isWeekend, max: 1, levels: [1, 5] },
    { id: 'polyglot', title: 'Polyglot Explorer', description: 'Explore multiple language courses', icon: '🌍', current: polyglotCount, max: 2, levels: [2, 3, 5] },
    { id: `lifetime_${langKey}`, title: nativeBadge.title, description: nativeBadge.description, icon: nativeBadge.icon, current: Math.max(1, completedLessonsCount), max: 8, levels: [1, 4, 8, 25] },
  ];

  return (
    <div className={`max-w-4xl mx-auto p-4 md:p-8 ${isDark ? 'text-white' : 'text-slate-700'}`}>
      <div className={`relative mb-8 rounded-2xl overflow-hidden border-2 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className="h-32 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600"></div>
        <div className="px-6 pb-6 pt-16 relative flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="absolute -top-16 left-6 w-32 h-32 rounded-full border-4 border-white bg-slate-100 dark:border-slate-800 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
            <Mascot mood="happy" size={96} outfit={equippedOutfit} />
          </div>
          <div className="mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">Learner</h1>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Joined {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sounds.playPop();
                setShowShareModal(true);
              }}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:brightness-110 active:translate-y-0.5 cursor-pointer transition"
            >
              <Share2 className="w-4 h-4" /> Share Desi Milestone
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
            <span className="text-2xl">🔥</span>
            <span className="font-bold text-xl">{streak}</span>
            <span className={`text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Streak</span>
          </div>
          <div className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-xl">{totalXp}</span>
            <span className={`text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Total XP</span>
          </div>
          <div className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
            <span className="text-2xl">💎</span>
            <span className="font-bold text-xl">Amethyst</span>
            <span className={`text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Current League</span>
          </div>
          <div className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
            <span className="text-2xl">📅</span>
            <span className="font-bold text-xl">{streak + 2}</span>
            <span className={`text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Days Active</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Courses</h2>
        <div className={`p-4 rounded-2xl border-2 flex items-center justify-between ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center gap-4">
            <span className="text-3xl">{selectedLanguage?.flagEmoji || selectedLanguage?.flag || '🇮🇳'}</span>
            <div>
              <h3 className="font-bold">{selectedLanguage?.name || 'Hindi'}</h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Active Course</p>
            </div>
          </div>
          <div className="text-right">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">{totalXp} XP</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((ach) => {
            const isUnlocked = ach.current > 0;
            const progress = Math.min(100, Math.max(0, (ach.current / ach.max) * 100));
            const currentLevelIndex = ach.levels.findIndex(l => l > ach.current);
            const level = currentLevelIndex === -1 ? ach.levels.length : currentLevelIndex;
            
            return (
              <div key={ach.id} className={`p-4 rounded-2xl border-2 flex items-center gap-4 ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} ${!isUnlocked ? 'opacity-60' : ''}`}>
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-slate-100 dark:bg-slate-700 border-2 ${isUnlocked ? 'border-amber-400' : 'border-transparent'}`}>
                  {ach.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-bold text-sm md:text-base">{ach.title}</h3>
                    <span className={`text-xs font-black px-2 py-0.5 rounded-full ${isUnlocked ? 'bg-amber-400 text-amber-950' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
                      Level {level}
                    </span>
                  </div>
                  <p className={`text-xs md:text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{ach.description}</p>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                  </div>
                  <div className={`text-xs mt-1 text-right font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {ach.current} / {ach.max}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Shareable Desi Milestone Card Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#18262d] border-2 border-[#38464f] rounded-3xl p-6 sm:p-8 max-w-md w-full text-white shadow-2xl relative space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#2b3e48]">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Share Your Achievement
              </span>
              <button
                onClick={() => setShowShareModal(false)}
                title="Close Share Modal"
                className="p-1 rounded-full text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Generated Shareable Card Preview */}
            <div className="rounded-3xl p-6 bg-gradient-to-b from-[#20333d] to-[#131f24] border-2 border-emerald-500/40 text-center space-y-4 shadow-xl relative overflow-hidden">
              <div className="absolute top-2 right-3 text-2xl opacity-40 select-none">
                {selectedLanguage?.flagEmoji || '🇮🇳'}
              </div>

              <div className="flex justify-center">
                <Mascot mood="cheering" size={105} outfit={equippedOutfit} />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full">
                  IndoLingo Polyglot
                </span>
                <h3 className="text-xl font-black text-white mt-2">
                  Learning {selectedLanguage?.name || 'Indian Languages'}!
                </h3>
                <p className="text-xs text-slate-300 font-semibold">
                  "{nativeBadge.title} • {selectedLanguage?.nativeName}"
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2b3e48]">
                <div className="p-2.5 rounded-xl bg-[#18262d] border border-[#38464f]">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Streak</p>
                  <p className="text-base font-black text-[#ff9600]">🔥 {streak} Days</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#18262d] border border-[#38464f]">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Total XP</p>
                  <p className="text-base font-black text-amber-400">⚡ {totalXp}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#18262d] border border-[#38464f]">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Lessons</p>
                  <p className="text-base font-black text-emerald-400">✓ {completedLessonsCount}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={() => {
                  sounds.playPop();
                  const shareText = `I am on a ${streak}-day streak learning ${selectedLanguage?.name} (${selectedLanguage?.nativeName}) on IndoLingo! Master all 9 Indian languages from zero. 🇮🇳✨`;
                  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
                }}
                className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" /> Share on WhatsApp
              </button>

              <button
                onClick={() => {
                  sounds.playPop();
                  navigator.clipboard.writeText(`I'm learning ${selectedLanguage?.name} on IndoLingo! ${streak}-day streak 🔥`);
                  setCopiedLink(true);
                  setTimeout(() => setCopiedLink(false), 2000);
                }}
                className="w-full py-3 rounded-2xl border-2 border-[#38464f] hover:border-slate-300 text-slate-200 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedLink ? 'Copied to Clipboard!' : 'Copy Brag Message'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileView;
