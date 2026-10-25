import React, { useState } from 'react';
import { Volume2, CheckCircle2 } from 'lucide-react';
import { CULTURAL_STORIES } from '../data/languages';
import { sounds } from '../utils/audio';

export default function CulturalStories({ onEarnChaiPoints, theme = 'light' }) {
  const isDark = theme === 'dark';
  const [selectedStory, setSelectedStory] = useState(CULTURAL_STORIES[0]);
  const [readStories, setReadStories] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('bhasha_read_stories') || '{}');
    } catch {
      return {};
    }
  });

  const handleFinishStory = (storyId) => {
    if (readStories[storyId]) return;
    sounds.playCorrect();
    const updated = { ...readStories, [storyId]: true };
    setReadStories(updated);
    localStorage.setItem('bhasha_read_stories', JSON.stringify(updated));
    onEarnChaiPoints?.(15);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16 select-none">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur">
              Chai Break Stories ☕
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              Desi Culture, Idioms & Etiquette
            </h1>
            <p className="text-sm text-white/90 font-semibold mt-1 max-w-xl">
              Languages in India are deeply rooted in daily rituals, street warmth, food culture, and affectionate gestures.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Story Selector List */}
        <div className="space-y-3">
          {CULTURAL_STORIES.map((story) => {
            const isSelected = selectedStory.id === story.id;
            const isRead = !!readStories[story.id];

            return (
              <button
                key={story.id}
                onClick={() => {
                  sounds.playPop();
                  setSelectedStory(story);
                }}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? isDark 
                      ? 'border-amber-500 bg-amber-950/40 ring-2 ring-amber-400/20' 
                      : 'border-amber-500 bg-amber-50/80 shadow-sm ring-2 ring-amber-400/20'
                    : isDark
                    ? 'border-slate-800 bg-slate-900 hover:border-slate-700'
                    : 'border-slate-200 bg-white hover:border-amber-300'
                }`}
              >
                <div className={`text-3xl p-2 rounded-xl shrink-0 ${
                  isDark ? 'bg-amber-950/60' : 'bg-amber-100/60'
                }`}>
                  {story.imageEmoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      {story.lang}
                    </span>
                    {isRead && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-0.5">
                    {story.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold line-clamp-1 mt-0.5">
                    {story.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Story Reader View */}
        <div className={`md:col-span-2 rounded-3xl p-6 sm:p-8 border-2 shadow-sm space-y-6 transition-colors ${
          isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
        }`}>
          <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                {selectedStory.lang}
              </span>
              <h2 className="text-2xl font-black mt-1">
                {selectedStory.title}
              </h2>
            </div>
            <span className="text-4xl">{selectedStory.imageEmoji}</span>
          </div>

          <div className="space-y-4 leading-relaxed font-semibold text-sm sm:text-base">
            {selectedStory.story.map((para, idx) => (
              <p key={idx} className={`p-4 rounded-2xl border ${
                isDark ? 'bg-slate-800/50 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-100 text-slate-700'
              }`}>
                {para}
              </p>
            ))}
          </div>

          {/* Desi Vocabulary Callout */}
          <div className={`p-4 rounded-2xl border-2 flex items-center justify-between ${
            isDark ? 'bg-amber-950/20 border-amber-900/50 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'
          }`}>
            <div>
              <p className="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">Key Phrase to Remember:</p>
              <p className="text-base font-black mt-0.5">{selectedStory.desiWord}</p>
            </div>
            <button
              onClick={() => {
                sounds.speak(selectedStory.desiWord.split('(')[0].trim(), selectedStory.langCode || 'hi-IN');
                try {
                  const prev = Number(localStorage.getItem('bhasha_audio_count') || 0);
                  localStorage.setItem('bhasha_audio_count', prev + 1);
                } catch {}
              }}
              className="p-3 rounded-xl btn-duo-orange text-white cursor-pointer"
              title="Listen pronunciation"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Completion Button */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => handleFinishStory(selectedStory.id)}
              disabled={readStories[selectedStory.id]}
              className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                readStories[selectedStory.id]
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 cursor-default'
                  : 'btn-duo-green text-white'
              }`}
            >
              {readStories[selectedStory.id] ? 'Completed (+15 🫖 Claimed)' : 'Finish Story & Claim 15 🫖'}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
