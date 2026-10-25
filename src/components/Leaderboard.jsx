import React, { useState } from 'react';
import { Trophy, Award, Clock, ArrowUp, ArrowDown } from 'lucide-react';
import { LEADERBOARD_USERS } from '../data/languages';
import { DESI_LEAGUES } from '../data/innovations';
import Mascot from './Mascot';
import { sounds } from '../utils/audio';

export default function Leaderboard({ 
  userXP = 240, 
  completedLessonsCount = 1,
  equippedOutfit = 'default',
  theme = 'light' 
}) {
  const isDark = theme === 'dark';

  // Determine current league from user XP
  const currentLeague = DESI_LEAGUES.slice().reverse().find(l => userXP >= l.minXp) || DESI_LEAGUES[0];
  const [selectedLeagueId, setSelectedLeagueId] = useState(currentLeague.id);
  const activeLeague = DESI_LEAGUES.find(l => l.id === selectedLeagueId) || currentLeague;

  const allUsers = [
    ...LEADERBOARD_USERS,
    { rank: 8, name: 'You (Learner)', avatar: '🎯', xp: userXP, league: activeLeague.name, country: 'India', isUser: true }
  ].sort((a, b) => b.xp - a.xp).map((u, i) => ({ ...u, rank: i + 1 }));

  const badges = [
    {
      title: 'Chai Connoisseur ☕',
      desc: 'Ordered cutting chai and mastered street food terms',
      unlocked: completedLessonsCount >= 2,
      icon: '🫖'
    },
    {
      title: 'Indian Polyglot 🇮🇳',
      desc: 'Explored multiple Indian language paths',
      unlocked: true,
      icon: '🌍'
    },
    {
      title: 'Akshara Scholar 📜',
      desc: 'Mastered the vowels & consonants in Script Studio',
      unlocked: true,
      icon: '✍️'
    },
    {
      title: 'Rickshaw Navigator 🛺',
      desc: 'Navigated meter rides and Indian street directions',
      unlocked: completedLessonsCount >= 4,
      icon: '🛺'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 select-none">
      
      {/* Desi Regional League Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {DESI_LEAGUES.map((l) => {
          const isSelected = l.id === activeLeague.id;
          const isCurrent = l.id === currentLeague.id;
          return (
            <button
              key={l.id}
              onClick={() => {
                sounds.playPop();
                setSelectedLeagueId(l.id);
              }}
              className={`px-4 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center gap-2 transition cursor-pointer shrink-0 border-2 ${
                isSelected
                  ? 'bg-gradient-to-r ' + l.color + ' text-white border-white/40 shadow-lg scale-105'
                  : 'bg-[#18262d] border-[#38464f] text-slate-300 hover:border-slate-400'
              }`}
            >
              <span className="text-base">{l.icon}</span>
              <span>{l.name}</span>
              {isCurrent && (
                <span className="px-1.5 py-0.5 rounded-full text-[9px] bg-white/20 text-white font-extrabold">
                  YOU
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* League Header Banner */}
      <div className={`bg-gradient-to-r ${activeLeague.color} rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-white/20`}>
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur flex items-center gap-1.5">
                <span>{activeLeague.icon}</span>
                <span>{activeLeague.name} • {activeLeague.nativeName}</span>
              </span>
              <span className="text-xs font-semibold text-white/80 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 3 days left
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              All-India Desi Cultural Leaderboard
            </h1>
            <p className="text-sm text-white/90 font-semibold mt-1 max-w-xl">
              Top 3 learners advance to the next regional league this Sunday midnight!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/20 text-center shrink-0">
            <p className="text-[11px] font-black text-white/80 uppercase tracking-wider">Your Rank</p>
            <p className="text-3xl font-black text-amber-300">
              #{allUsers.find(u => u.isUser)?.rank || 4}
            </p>
            <p className="text-[10px] text-white/70 font-bold mt-0.5">{userXP} Total XP</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Rankings Table */}
        <div className={`md:col-span-2 rounded-3xl border-2 shadow-sm overflow-hidden transition-colors ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className={`p-5 border-b flex items-center justify-between ${
            isDark ? 'border-slate-800 bg-slate-800/50' : 'border-slate-100 bg-slate-50/50'
          }`}>
            <h3 className="font-extrabold text-base flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>Weekly League Rankings</span>
            </h3>
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider">Sorted by XP</span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {allUsers.map((learner) => {
              const isPromotion = learner.rank <= 3;
              const isDemotion = learner.rank >= allUsers.length - 2;
              const showPromotionDivider = learner.rank === 3 && allUsers.length > 3;
              const showDemotionDivider = learner.rank === allUsers.length - 2 && learner.rank > 3;

              return (
                <React.Fragment key={learner.rank}>
                  {showDemotionDivider && (
                    <div className={`px-4 py-1.5 flex items-center justify-center gap-2 text-[10px] font-black tracking-wider uppercase select-none ${
                      isDark ? 'bg-rose-950/20 text-rose-400' : 'bg-rose-50/60 text-rose-600'
                    }`}>
                      <div className="h-px flex-1 bg-rose-200 dark:bg-rose-900/60" />
                      <span className="flex items-center gap-1 shrink-0">
                        <ArrowDown className="w-3 h-3" /> Demotion Zone
                      </span>
                      <div className="h-px flex-1 bg-rose-200 dark:bg-rose-900/60" />
                    </div>
                  )}

                  <div
                    className={`flex items-center justify-between p-4 transition ${
                      learner.isUser
                        ? isDark
                          ? 'bg-emerald-950/40 font-black border-l-4 border-l-emerald-500'
                          : 'bg-emerald-50/80 font-black border-l-4 border-l-emerald-500'
                        : isDark
                        ? 'hover:bg-slate-800/60'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-7 text-center font-black text-sm ${
                        learner.rank === 1 ? 'text-amber-500 text-lg' :
                        learner.rank === 2 ? 'text-slate-400 text-base' :
                        learner.rank === 3 ? 'text-amber-700 text-base' :
                        'text-slate-400'
                      }`}>
                        {learner.rank === 1 ? '🥇' : learner.rank === 2 ? '🥈' : learner.rank === 3 ? '🥉' : `#${learner.rank}`}
                      </span>
                      
                      <span className="text-2xl">{learner.avatar}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className={`text-sm ${
                            learner.isUser ? 'font-black text-emerald-600 dark:text-emerald-400' : 'font-extrabold'
                          }`}>
                            {learner.name}
                          </p>
                          {isPromotion && (
                            <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-1.5 py-0.2 rounded-md flex items-center gap-0.5">
                              <ArrowUp className="w-2.5 h-2.5" /> Promotion
                            </span>
                          )}
                          {isDemotion && !isPromotion && (
                            <span className="text-[10px] font-black uppercase text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-950 px-1.5 py-0.2 rounded-md flex items-center gap-0.5">
                              <ArrowDown className="w-2.5 h-2.5" /> Demotion
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 font-semibold">
                          {learner.country} • {learner.league} League
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-black text-base">
                        {learner.xp}
                      </span>
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400 ml-1">XP</span>
                    </div>
                  </div>

                  {showPromotionDivider && (
                    <div className={`px-4 py-1.5 flex items-center justify-center gap-2 text-[10px] font-black tracking-wider uppercase select-none ${
                      isDark ? 'bg-emerald-950/20 text-emerald-400' : 'bg-emerald-50/60 text-emerald-600'
                    }`}>
                      <div className="h-px flex-1 bg-emerald-200 dark:bg-emerald-900/60" />
                      <span className="flex items-center gap-1 shrink-0">
                        <ArrowUp className="w-3 h-3" /> Promotion Zone
                      </span>
                      <div className="h-px flex-1 bg-emerald-200 dark:bg-emerald-900/60" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Badges / Desi Achievements */}
        <div className={`rounded-3xl p-5 border-2 shadow-sm space-y-4 transition-colors ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base flex items-center gap-1.5">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Language Badges</span>
            </h3>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {badges.filter(b => b.unlocked).length}/{badges.length}
            </span>
          </div>

          <div className="space-y-3">
            {badges.map((b, i) => (
              <div
                key={i}
                className={`p-3.5 rounded-2xl border flex items-start gap-3 transition ${
                  b.unlocked
                    ? isDark
                      ? 'bg-amber-950/20 border-amber-900/40 text-amber-200'
                      : 'bg-amber-50/50 border-amber-200 text-slate-800'
                    : isDark
                    ? 'bg-slate-800/30 border-slate-800 text-slate-500 opacity-60'
                    : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div className={`text-2xl p-2 rounded-xl shadow-xs shrink-0 ${
                  isDark ? 'bg-slate-800' : 'bg-white'
                }`}>
                  {b.icon}
                </div>
                <div>
                  <h4 className="font-black text-xs">
                    {b.title}
                  </h4>
                  <p className={`text-[11px] font-semibold mt-0.5 leading-snug ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <Mascot mood="proud" size={75} outfit={equippedOutfit} message="Keep collecting XP! Shabaash!" className="justify-center" />
          </div>
        </div>

      </div>

    </div>
  );
}
