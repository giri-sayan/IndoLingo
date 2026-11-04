import React, { useState } from 'react';
import { Target, Zap, Sparkles, Clock, CheckCircle2, Users, Gift, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';
import Mascot from './Mascot';

export default function QuestsView({
  completedLessonsCount = 1,
  onAddGems,
  theme = 'light'
}) {
  const isDark = theme === 'dark';
  const [nudged, setNudged] = useState(false);
  const [gifted, setGifted] = useState(false);
  const [claimedQuests, setClaimedQuests] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('bhasha_claimed_quests') || '{}');
    } catch {
      return {};
    }
  });

  const aksharaCount = Number(localStorage.getItem('bhasha_akshara_count') || (completedLessonsCount > 0 ? 8 : 4));
  const _audioCount = Number(localStorage.getItem('bhasha_audio_count') || (completedLessonsCount > 0 ? 6 : 3));

  const quests = [
    {
      id: 'q-xp',
      title: 'Earn 50 XP today',
      desc: 'Complete lessons or review letters to gain XP',
      current: Math.min(50, completedLessonsCount * 25),
      target: 50,
      reward: 15,
      icon: Zap,
      color: 'text-[#ffc800]',
      tier: 'Bronze Chest'
    },
    {
      id: 'q-lessons',
      title: 'Complete 2 lessons',
      desc: 'Advance through your language learning path',
      current: Math.min(2, completedLessonsCount),
      target: 2,
      reward: 20,
      icon: Target,
      color: 'text-[#58cc02]',
      tier: 'Silver Chest'
    },
    {
      id: 'q-akshara',
      title: 'Practice 10 Akshara characters',
      desc: 'Test your phonetic recognition in Script Studio',
      current: Math.min(10, aksharaCount),
      target: 10,
      reward: 25,
      icon: Sparkles,
      color: 'text-[#1cb0f6]',
      tier: 'Gold Chest'
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
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 pb-16">
      
      {/* Monthly Challenge Banner (Duolingo Exact Match) */}
      <div className="bg-gradient-to-r from-[#1cb0f6] via-[#6366f1] to-[#a855f7] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full backdrop-blur">
              {monthName} Quest • {daysLeft} {daysLeft === 1 ? 'Day' : 'Days'} Left
            </span>
            <h1 className="text-2xl sm:text-3xl font-black">
              Royal Explorer Badge ✨
            </h1>
            <p className="text-sm font-semibold text-white/90 max-w-md">
              Complete 25 quests this month to forge the permanent Royal Emblem!
            </p>

            {/* Monthly Progress Meter */}
            <div className="pt-2 space-y-1.5 max-w-sm">
              <div className="flex justify-between text-xs font-black text-white/90">
                <span>Quest Progress</span>
                <span>{completedCount + 7} / 25</span>
              </div>
              <div className="h-4 bg-black/25 rounded-full overflow-hidden p-0.5">
                <div 
                  className="bg-[#58cc02] h-full rounded-full transition-all duration-500 shadow-sm" 
                  style={{ width: `${((completedCount + 7) / 25) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Badge Display */}
          <div className="shrink-0 flex flex-col items-center bg-white/15 backdrop-blur-md p-4 rounded-3xl border border-white/25 shadow-lg">
            <Mascot mood="cheering" size={100} />
            <span className="text-xs font-black tracking-wide text-white mt-1">
              Monthly Badge
            </span>
          </div>
        </div>
      </div>

      {/* Friends Quest Section (Duolingo App Match) */}
      <div className={`rounded-3xl border-2 p-5 sm:p-6 transition-colors ${
        isDark ? 'bg-[#18262d] border-[#2b3e48]' : 'bg-white border-slate-200'
      }`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl shrink-0">
              <Users className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-base text-white">Friends Quest</h3>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-400 font-bold mt-0.5">
                Complete 15 lessons together with Vikram • <strong className="text-white">11 / 15</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={() => {
                sounds.playPop();
                setNudged(true);
                setTimeout(() => setNudged(false), 2000);
              }}
              disabled={nudged}
              className={`px-4 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 ${
                nudged
                  ? 'bg-emerald-500 text-white'
                  : 'bg-[#20333d] hover:bg-[#2b3e48] border border-[#38464f] text-slate-200'
              }`}
            >
              <Bell className="w-3.5 h-3.5" />
              <span>{nudged ? 'Nudged! 👋' : 'Nudge'}</span>
            </button>

            <button
              onClick={() => {
                sounds.playPop();
                setGifted(true);
                setTimeout(() => setGifted(false), 2000);
              }}
              disabled={gifted}
              className={`px-4 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 ${
                gifted
                  ? 'bg-pink-500 text-white'
                  : 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-sm'
              }`}
            >
              <Gift className="w-3.5 h-3.5" />
              <span>{gifted ? 'Sent +5 XP 🎁' : 'Send Gift'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Daily Quests List */}
      <div className={`rounded-3xl border-2 p-6 sm:p-8 transition-colors ${
        isDark ? 'bg-[#18262d] border-[#2b3e48]' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-black flex items-center gap-2">
              <Target className="w-5 h-5 text-rose-500" />
              <span>Daily Quests</span>
            </h2>
            <p className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Complete daily goals to open tiered treasure chests.
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full flex items-center gap-1">
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
                    ? 'bg-[#131f24]/50 border-[#202f36] opacity-60'
                    : isCompleted
                    ? 'bg-emerald-950/20 border-emerald-500/50'
                    : 'bg-[#20333d]/60 border-[#2b3e48]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl shrink-0 ${
                    isDark ? 'bg-[#18262d] text-slate-200' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Icon className={`w-6 h-6 ${q.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-base text-slate-100">
                        {q.title}
                      </h3>
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        {q.tier}
                      </span>
                    </div>
                    <p className="text-xs font-semibold mt-0.5 text-slate-400">
                      {q.desc}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-3 flex items-center gap-3 w-full max-w-[14rem] sm:max-w-[16rem]">
                      <div className="flex-1 bg-[#131f24] h-2.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-[#58cc02] h-full rounded-full transition-all duration-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-400">
                        {q.current} / {q.target}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Claim / Reward Button */}
                <div className="flex items-center gap-3 self-end sm:self-center">
                  <span className="font-black text-sm text-[#1cb0f6] flex items-center gap-1">
                    <span>💎</span> +{q.reward}
                  </span>

                  {isClaimed ? (
                    <span className="px-4 py-2 rounded-xl text-xs font-black bg-slate-800 text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Claimed
                    </span>
                  ) : isCompleted ? (
                    <button
                      onClick={() => handleClaim(q)}
                      className="px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider btn-duo-green text-white cursor-pointer"
                    >
                      Open Chest
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
