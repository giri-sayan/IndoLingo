import React, { useState } from 'react';
import { Globe2, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import { sounds } from '../utils/audio';
import { BHASHA_SANGAM_CATEGORIES, BHASHA_SANGAM_SENTENCES, INDIAN_LANGUAGES } from '../data/languages';
import { PAN_INDIAN_COGNATES } from '../data/innovations';
import Mascot from './Mascot';

export default function LanguageMatrixView({ selectedLanguage, theme = 'dark' }) {
  const isDark = theme === 'dark';
  const [subTab, setSubTab] = useState('sentences'); // 'sentences' | 'cognates'
  const [category, setCategory] = useState('all');
  const [expandedSentenceId, setExpandedSentenceId] = useState(null);

  const langKeyMap = {
    hindi: 'hi',
    tamil: 'ta',
    telugu: 'te',
    bengali: 'bn',
    kannada: 'kn',
    malayalam: 'ml',
    marathi: 'mr',
    punjabi: 'pa',
    gujarati: 'gu'
  };

  const activeKey = langKeyMap[selectedLanguage?.id] || 'hi';

  const filteredSentences = category === 'all'
    ? BHASHA_SANGAM_SENTENCES
    : BHASHA_SANGAM_SENTENCES.filter(s => s.category === category);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 select-none">
      {/* Matrix Header */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur flex items-center gap-1.5 w-fit">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Comparative Linguistics • 9 Indian Languages</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              Pan-Indian Language Matrix
            </h1>
            <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1 max-w-xl">
              Compare common everyday sentences and linguistic cognates simultaneously across all 9 major Indian languages!
            </p>
          </div>

          <div className="shrink-0 hidden sm:block">
            <Mascot mood="happy" size={85} outfit="royal" />
          </div>
        </div>
      </div>

      {/* Mode Switcher: Sentences vs Cognates */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => { sounds.playPop(); setSubTab('sentences'); }}
          className={`flex-1 sm:flex-none px-6 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider transition cursor-pointer border-2 ${
            subTab === 'sentences'
              ? 'bg-[#a855f7] border-[#a855f7] text-white shadow-md'
              : isDark
              ? 'bg-[#18262d] border-[#38464f] text-slate-300 hover:border-slate-400'
              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
          }`}
        >
          9-Language Sentences
        </button>

        <button
          onClick={() => { sounds.playPop(); setSubTab('cognates'); }}
          className={`flex-1 sm:flex-none px-6 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider transition cursor-pointer border-2 ${
            subTab === 'cognates'
              ? 'bg-[#a855f7] border-[#a855f7] text-white shadow-md'
              : isDark
              ? 'bg-[#18262d] border-[#38464f] text-slate-300 hover:border-slate-400'
              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
          }`}
        >
          Shared Cognates Matrix
        </button>
      </div>

      {/* 1. SENTENCES COMPARISON MODE */}
      {subTab === 'sentences' && (
        <div className="space-y-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {BHASHA_SANGAM_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => { sounds.playPop(); setCategory(cat.id); }}
                className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer shrink-0 border ${
                  category === cat.id
                    ? 'bg-[#a855f7]/20 border-[#a855f7] text-[#a855f7]'
                    : isDark
                    ? 'bg-[#18262d] border-[#2b3e48] text-slate-400 hover:text-white'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sentence Cards */}
          <div className="space-y-3">
            {filteredSentences.map(item => {
              const isExpanded = expandedSentenceId === item.id;
              const activeTranslation = item.translations[activeKey] || item.translations.hi;

              return (
                <div
                  key={item.id}
                  className={`rounded-3xl p-5 border-2 transition-all ${
                    isDark ? 'bg-[#18262d] border-[#38464f]' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {item.english}
                      </h3>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-sm sm:text-base font-black text-[#a855f7]">
                          {activeTranslation.text}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          ({activeTranslation.phonetics})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => sounds.speak(activeTranslation.text, selectedLanguage?.code || 'hi-IN')}
                        className="p-2.5 rounded-2xl bg-[#a855f7]/10 text-[#a855f7] hover:bg-[#a855f7] hover:text-white transition cursor-pointer"
                        title="Listen active language"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          sounds.playPop();
                          setExpandedSentenceId(isExpanded ? null : item.id);
                        }}
                        className="p-2.5 rounded-2xl bg-slate-100 dark:bg-[#20333d] hover:bg-slate-200 dark:hover:bg-[#283f4c] text-slate-400 hover:text-white transition cursor-pointer"
                        title={isExpanded ? 'Collapse' : 'Expand all 9 languages'}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded 9 Languages Grid */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-[#2b3e48] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-in fade-in duration-150">
                      {INDIAN_LANGUAGES.map(lang => {
                        const code = langKeyMap[lang.id];
                        const trans = item.translations[code];
                        if (!trans) return null;

                        return (
                          <div
                            key={lang.id}
                            className={`p-3 rounded-2xl border flex items-center justify-between gap-2 ${
                              lang.id === selectedLanguage?.id
                                ? 'border-[#a855f7] bg-[#a855f7]/10'
                                : isDark
                                ? 'bg-[#20333d] border-[#2b3e48]'
                                : 'bg-slate-50 border-slate-200'
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs">{lang.flagEmoji}</span>
                                <span className="text-[10px] font-black uppercase text-slate-400">{lang.name}</span>
                              </div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                                {trans.text}
                              </p>
                              <p className="text-[11px] text-slate-400 font-medium">
                                {trans.phonetics}
                              </p>
                            </div>

                            <button
                              onClick={() => sounds.speak(trans.text, lang.code)}
                              className="p-2 rounded-xl text-slate-400 hover:text-[#a855f7] transition cursor-pointer shrink-0"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. COGNATES MATRIX MODE */}
      {subTab === 'cognates' && (
        <div className="space-y-4">
          <p className="text-xs font-semibold text-slate-400">
            India's linguistic heritage combines Sanskrit and Proto-Dravidian etymologies. Notice the shared roots across states:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PAN_INDIAN_COGNATES.map(cog => (
              <div
                key={cog.id}
                className={`rounded-3xl p-5 border-2 space-y-3 ${
                  isDark ? 'bg-[#18262d] border-[#38464f]' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl p-2 rounded-2xl bg-purple-500/10">{cog.emoji}</span>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">{cog.concept}</h3>
                  </div>
                </div>

                <p className="text-xs font-semibold text-amber-400 bg-amber-400/10 p-2.5 rounded-xl border border-amber-400/20">
                  {cog.rootEtymology}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs">
                  {Object.entries(cog.words).map(([lKey, w]) => (
                    <div
                      key={lKey}
                      className={`p-2 rounded-xl border ${
                        lKey === activeKey
                          ? 'border-[#a855f7] bg-[#a855f7]/10 font-bold'
                          : isDark ? 'border-[#2b3e48] bg-[#20333d]' : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-black text-slate-400 block">{lKey}</span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block mt-0.5">{w.text}</span>
                      <span className="text-[10px] text-slate-400 block">{w.roman}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
