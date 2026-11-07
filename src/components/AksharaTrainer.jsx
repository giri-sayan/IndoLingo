import React, { useState } from 'react';
import { PenTool, AlertCircle, MessageSquare, Globe2 } from 'lucide-react';
import { sounds } from '../utils/audio';
import LettersView from './LettersView';
import MistakesInboxView from './MistakesInboxView';
import RoleplayView from './RoleplayView';
import LanguageMatrixView from './LanguageMatrixView';

export default function AksharaTrainer({
  selectedLanguage,
  onAddGems,
  onPracticeHeart,
  onNavigateLearn,
  initialSubMode = 'letters',
  theme = 'dark'
}) {
  const isDark = theme === 'dark';
  // Sub-modes: 'letters' (Duolingo Letters) | 'mistakes' (Mistakes Inbox) | 'roleplay' (Spoken Scenarios) | 'matrix' (9-Language Matrix)
  const [subMode, setSubMode] = useState(initialSubMode);
  const [prevInitial, setPrevInitial] = useState(initialSubMode);

  if (initialSubMode !== prevInitial) {
    setPrevInitial(initialSubMode);
    setSubMode(initialSubMode);
  }

  const inactiveBtnStyle = isDark
    ? 'text-slate-400 hover:text-white hover:bg-[#20333d]'
    : 'text-slate-600 hover:text-slate-900 hover:bg-white';

  return (
    <div className="space-y-6">
      {/* Duolingo Practice Hub Sub-Navigation Bar */}
      <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl border-2 ${
        isDark ? 'bg-[#18262d] border-[#38464f]' : 'bg-slate-100 border-slate-200'
      }`}>
        <button
          onClick={() => { sounds.playPop(); setSubMode('letters'); }}
          className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-black text-xs uppercase tracking-wider transition cursor-pointer ${
            subMode === 'letters'
              ? 'bg-[#58cc02] text-white shadow-md'
              : inactiveBtnStyle
          }`}
        >
          <PenTool className="w-4 h-4 shrink-0" />
          <span>Characters</span>
        </button>

        <button
          onClick={() => { sounds.playPop(); setSubMode('mistakes'); }}
          className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-black text-xs uppercase tracking-wider transition cursor-pointer ${
            subMode === 'mistakes'
              ? 'bg-rose-500 text-white shadow-md'
              : inactiveBtnStyle
          }`}
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Mistakes Inbox</span>
        </button>

        <button
          onClick={() => { sounds.playPop(); setSubMode('roleplay'); }}
          className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-black text-xs uppercase tracking-wider transition cursor-pointer ${
            subMode === 'roleplay'
              ? 'bg-[#1cb0f6] text-white shadow-md'
              : inactiveBtnStyle
          }`}
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>Roleplay</span>
        </button>

        <button
          onClick={() => { sounds.playPop(); setSubMode('matrix'); }}
          className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-black text-xs uppercase tracking-wider transition cursor-pointer ${
            subMode === 'matrix'
              ? 'bg-[#a855f7] text-white shadow-md'
              : inactiveBtnStyle
          }`}
        >
          <Globe2 className="w-4 h-4 shrink-0" />
          <span>Language Matrix</span>
        </button>
      </div>

      {/* Render Active View */}
      {subMode === 'letters' && (
        <LettersView
          selectedLanguage={selectedLanguage}
          onAddGems={onAddGems}
          theme={theme}
        />
      )}

      {subMode === 'mistakes' && (
        <MistakesInboxView
          selectedLanguage={selectedLanguage}
          onAddGems={onAddGems}
          onPracticeHeart={onPracticeHeart}
          onNavigateLearn={onNavigateLearn}
          theme={theme}
        />
      )}

      {subMode === 'roleplay' && (
        <RoleplayView
          selectedLanguage={selectedLanguage}
          onAddGems={onAddGems}
          theme={theme}
        />
      )}

      {subMode === 'matrix' && (
        <LanguageMatrixView
          selectedLanguage={selectedLanguage}
          theme={theme}
        />
      )}
    </div>
  );
}
