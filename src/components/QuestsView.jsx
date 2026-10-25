import React, { useState } from 'react';
import { Target, Zap, Award, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';
import Mascot from './Mascot';

export default function QuestsView({
  completedLessonsCount = 1,
  onAddGems,
  theme = 'light'
}) {
  const isDark = theme === 'dark';
  const [claimedQuests, setClaimedQuests] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('bhasha_claimed_quests') || '{}');
    } catch {
      return {};
    }
  });

  const aksharaCount = Number(localStorage.getItem('bhasha_akshara_count') || (completedLessonsCount > 0 ? 8 : 4));
  const audioCount = Number(localStorage.getItem('bhasha_audio_count') || (completedLessonsCount > 0 ? 6 : 3));

  const quests = [
    {
      id: 'q-xp',
      title: 'Earn 50 XP today',
      desc: 'Complete lessons or review letters to gain XP',
      current: Math.min(50, completedLessonsCount * 25),
      target: 50,
      reward: 15,
      icon: Zap,
      color: 'text-amber-500'
    },
    {
      id: 'q-lessons',
      title: 'Complete 2 lessons',
      desc: 'Advance through your language learning path',
      current: Math.min(2, completedLessonsCount),
      target: 2,
      reward: 20,
      icon: Target,
      color: 'text-emerald-500'
    },
    {
      id: 'q-akshara',
      title: 'Practice 10 Akshara characters',
      desc: 'Test your phonetic recognition in Script Studio',
      current: Math.min(10, aksharaCount),
      target: 10,
      reward: 10,
      icon: Sparkles,
      color: 'text-blue-500'
    },
    {
      id: 'q-listen',
      title: 'Listen to 5 native audio phrases',
      desc: 'Sharpen your Indian language ear with native voice clips',
      current: Math.min(5, audioCount),
      target: 5,
      reward: 15,
      icon: Award,
      color: 'text-purple-500'
    }
  ];

  const handleClaim = (quest) => {
    if (claimedQuests[quest.id]) return;
    sounds.playFanfare();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    const updated = { ...claimedQuests, [quest.id]: true };
    setClaimedQuests(updated);
    localStorage.setItem('bhasha_claimed_quests', JSON.stringify(updated));
    onAddGems?.(quest.reward);
  };

  const completedCount = quests.filter(q => q.current >= q.target).length;

  const now = new Date();
  const monthName = now.toLocaleString('en-US', { month: 'long' });
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const daysLeft = Math.max(1, endOfMonth.getDate() - now.getDate());

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      
      {/* Monthly Challenge Banner (Duolingo Style) */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full backdrop-blur">
              {monthName} Challenge • {daysLeft} {daysLeft === 1 ? 'Day' : 'Days'} Left
            </span>
            <h1 className="text-2xl sm:text-3xl font-black">
              Sheru's Royal Chai Quest 🐯
            </h1>
            <p className="text-sm font-semibold text-white/90 max-w-md">
              Complete 20 daily quests this month to unlock the exclusive Royal Bengal Tiger Badge!
            </p>

            {/* Monthly Progress Meter */}
            <div className="pt-2 space-y-1.5 max-w-sm">
              <div className="flex justify-between text-xs font-extrabold text-amber-100">
                <span>Quest Progress</span>
                <span>{completedCount + 6} / 20 Quests</span>
              </div>
              <div className="h-3.5 bg-black/25 rounded-full overflow-hidden p-0.5">
                <div 
                  className="bg-amber-300 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${((completedCount + 6) / 20) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Badge Display */}
          <div className="shrink-0 flex flex-col items-center bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20">
            <Mascot mood="cheering" size={100} />
            <span className="text-xs font-black tracking-wide text-amber-200 mt-1">
              Royal Chai Badge ✨
            </span>
          </div>
        </div>
      </div>

      {/* Daily Quests List */}
      <div className={`rounded-3xl border-2 p-6 sm:p-8 transition-colors ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-black flex items-center gap-2">
              <Target className="w-5 h-5 text-rose-500" />
              <span>Daily Quests</span>
            </h2>
            <p className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Quests reset every day at midnight.
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Resets in 6h
          </span>
        </div>

        <div className="space-y-4">
          {quests.map((q) => {
            const Icon = q.icon;
            const isCompleted = q.current >= q.target;
            const isClaimed = !!claimedQuests[q.id];
            const pct = Math.min(100, Math.round((q.current / q.target) * 100));

            return (
              <div
                key={q.id}
                className={`p-4 sm:p-5 rounded-2xl border-2 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isClaimed
                    ? isDark ? 'bg-slate-800/30 border-slate-800 opacity-60' : 'bg-slate-50 border-slate-200 opacity-70'
                    : isCompleted
                    ? isDark ? 'bg-emerald-950/20 border-emerald-500/50' : 'bg-emerald-50/50 border-emerald-300'
                    : isDark ? 'bg-slate-800/60 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl shrink-0 ${
                    isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Icon className={`w-6 h-6 ${q.color}`} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                      {q.title}
                    </h3>
                    <p className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {q.desc}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-3 flex items-center gap-3 w-48 sm:w-64">
                      <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-amber-500 h-full rounded-full transition-all duration-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        {q.current} / {q.target}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Claim / Reward Button */}
                <div className="flex items-center gap-3 self-end sm:self-center">
                  <span className="font-black text-sm text-amber-600 dark:text-amber-400 flex items-center gap-1">
                    <span>🫖</span> +{q.reward}
                  </span>

                  {isClaimed ? (
                    <span className="px-4 py-2 rounded-xl text-xs font-black bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Claimed
                    </span>
                  ) : isCompleted ? (
                    <button
                      onClick={() => handleClaim(q)}
                      className="px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider btn-duo-green text-white cursor-pointer"
                    >
                      Claim Reward
                    </button>
                  ) : (
                    <button
                      disabled
                      className="px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider btn-duo-gray cursor-not-allowed"
                    >
                      In Progress
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
