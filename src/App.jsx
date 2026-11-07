import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LessonPath from './components/LessonPath';
import RightSidebar from './components/RightSidebar';
import LessonModal from './components/LessonModal';
import GuidebookModal from './components/GuidebookModal';
import LanguageSelectorModal from './components/LanguageSelectorModal';
import AksharaTrainer from './components/AksharaTrainer';
import CulturalStories from './components/CulturalStories';
import Leaderboard from './components/Leaderboard';
import QuestsView from './components/QuestsView';
import ShopView from './components/ShopView';
import ProfileView from './components/ProfileView';
import SettingsModal from './components/SettingsModal';
import InstallAppModal from './components/InstallAppModal';
import { INDIAN_LANGUAGES } from './data/languages';
import { sounds } from './utils/audio';

export default function App() {
  // Theme state: 'light' | 'dark' (Defaulting to Duolingo dark mode, strictly sanitizing any legacy 'saffron' values)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('bhasha_theme');
    return saved === 'light' ? 'light' : 'dark';
  });


  // Selected Indian language (defaults to Hindi, supports ?lang= URL query param)
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      if (langParam) {
        const found = INDIAN_LANGUAGES.find(l => l.id.toLowerCase() === langParam.toLowerCase());
        if (found) return found;
      }
    }
    const saved = localStorage.getItem('bhasha_lang');
    if (saved) {
      const found = INDIAN_LANGUAGES.find(l => l.id === saved);
      if (found) return found;
    }
    return INDIAN_LANGUAGES[0];
  });

  // Navigation tab: 'learn' | 'letters' | 'practice' | 'mistakes' | 'roleplay' | 'matrix' | 'leaderboard' | 'quests' | 'shop' | 'stories' | 'profile'
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (tabParam && ['learn', 'letters', 'practice', 'akshara', 'mistakes', 'roleplay', 'matrix', 'leaderboard', 'quests', 'shop', 'profile', 'stories'].includes(tabParam)) {
        return tabParam;
      }
    }
    return 'learn';
  });

  // Gamification states
  const [streak, setStreak] = useState(() => Number(localStorage.getItem('bhasha_streak') || 3));
  const [gems, setGems] = useState(() => Number(localStorage.getItem('bhasha_gems') || 280));
  const [hearts, setHearts] = useState(() => Number(localStorage.getItem('bhasha_hearts') || 5));
  const [dailyGoalXP, setDailyGoalXP] = useState(() => Number(localStorage.getItem('bhasha_daily_goal') || 20));
  const [equippedOutfit, setEquippedOutfit] = useState(() => localStorage.getItem('bhasha_outfit') || 'default');
  const [unlockedOutfits, setUnlockedOutfits] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('bhasha_outfits') || '["default"]');
    } catch {
      return ['default'];
    }
  });

  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('bhasha_completed') || '{}');
    } catch {
      return {};
    }
  });

  // Settings & Toggles
  const [soundMuted, setSoundMuted] = useState(false);
  const [showTransliteration, setShowTransliteration] = useState(true);

  // Modals
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeUnit, setActiveUnit] = useState(null);
  const [guidebookUnit, setGuidebookUnit] = useState(null);

  // Apply theme to <html> element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-saffron');
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
    localStorage.setItem('bhasha_theme', theme);
  }, [theme]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('bhasha_lang', selectedLanguage.id);
  }, [selectedLanguage]);

  // Synchronize deep-linking on browser history navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (tabParam && ['learn', 'letters', 'practice', 'akshara', 'mistakes', 'roleplay', 'matrix', 'leaderboard', 'quests', 'shop', 'profile', 'stories'].includes(tabParam)) {
        setActiveTab(tabParam);
      }
      const lessonParam = params.get('lesson');
      if (lessonParam) {
        const allLessons = selectedLanguage.units?.flatMap(u => u.lessons || []) || [];
        const targetLesson = allLessons.find(l => l.id === lessonParam);
        if (targetLesson) {
          const targetUnit = selectedLanguage.units.find(u => u.lessons?.some(l => l.id === targetLesson.id));
          setActiveLesson(targetLesson);
          setActiveUnit(targetUnit);
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedLanguage]);

  useEffect(() => {
    localStorage.setItem('bhasha_streak', streak);
    localStorage.setItem('bhasha_gems', gems);
    localStorage.setItem('bhasha_hearts', hearts);
    localStorage.setItem('bhasha_daily_goal', dailyGoalXP);
    localStorage.setItem('bhasha_outfit', equippedOutfit);
    localStorage.setItem('bhasha_outfits', JSON.stringify(unlockedOutfits));
    localStorage.setItem('bhasha_completed', JSON.stringify(completedLessons));
  }, [streak, gems, hearts, dailyGoalXP, equippedOutfit, unlockedOutfits, completedLessons]);

  // Toggle Theme
  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleSound = () => {
    sounds.muted = !soundMuted;
    setSoundMuted(!soundMuted);
    sounds.playPop();
  };

  const handleToggleTransliteration = () => {
    sounds.playPop();
    setShowTransliteration(prev => !prev);
  };

  // Start a lesson
  const handleStartLesson = (lesson, unit) => {
    if (hearts <= 0) {
      setHearts(5);
    }
    setActiveLesson(lesson);
    setActiveUnit(unit);
  };

  // Jump to lesson & unlock prior lessons in path
  const handleUnlockUpToLesson = (targetLessonId) => {
    const allLessons = selectedLanguage.units?.flatMap(u => u.lessons || []) || [];
    const targetIdx = allLessons.findIndex(l => l.id === targetLessonId);
    if (targetIdx !== -1) {
      setCompletedLessons(prev => {
        const next = { ...prev };
        for (let i = 0; i <= targetIdx; i++) {
          next[allLessons[i].id] = true;
        }
        return next;
      });
      sounds.playFanfare();
    }
  };

  // Practice to earn +1 heart for free
  const handlePracticeHeart = () => {
    sounds.playCorrect();
    setHearts(prev => Math.min(5, prev + 1));
  };

  // Complete a lesson
  const handleCompleteLesson = (lessonId, _xp, isFlawless = false) => {
    setCompletedLessons(prev => ({ ...prev, [lessonId]: true }));
    setGems(prev => prev + 25 + (isFlawless ? 5 : 0));
    setStreak(prev => prev + 1);
  };

  // Deduct heart on mistake
  const handleDeductHeart = () => {
    setHearts(prev => Math.max(0, prev - 1));
  };

  // Refill hearts with Chai points (20 gems)
  const handleRefillHearts = () => {
    if (gems >= 20 && hearts < 5) {
      sounds.playCorrect();
      setGems(prev => prev - 20);
      setHearts(5);
    }
  };

  // Spend gems for shop items
  const handleSpendGems = (amount, outfitId) => {
    if (gems >= amount) {
      setGems(prev => prev - amount);
      if (outfitId) {
        setUnlockedOutfits(prev => [...new Set([...prev, outfitId])]);
        setEquippedOutfit(outfitId);
      }
    }
  };

  // Claim unit chest reward
  const handleClaimChest = (unitId) => {
    const key = `chest_${unitId}`;
    if (!completedLessons[key]) {
      setCompletedLessons(prev => ({ ...prev, [key]: true }));
      setGems(prev => prev + 50);
      sounds.playFanfare();
    }
  };

  // Reset Progress
  const handleResetProgress = () => {
    setCompletedLessons({});
    setStreak(1);
    setGems(100);
    setHearts(5);
    setEquippedOutfit('default');
    setUnlockedOutfits(['default']);
    localStorage.removeItem('bhasha_completed');
    localStorage.removeItem('bhasha_read_stories');
    localStorage.removeItem('bhasha_claimed_quests');
    localStorage.removeItem('bhasha_flawless');
    localStorage.removeItem('bhasha_akshara_count');
    localStorage.removeItem('bhasha_audio_count');
    sounds.playPop();
  };

  const completedLessonsCount = Object.keys(completedLessons).filter(k => !k.startsWith('chest_')).length;

  return (
    <div className={`min-h-screen flex flex-row font-sans transition-colors duration-200 overflow-x-clip max-w-full w-full ${
      theme === 'light' 
        ? 'bg-white text-slate-800'
        : 'bg-[#131f24] text-white'
    }`}>
      
      {/* Duolingo Left Fixed Navigation Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        selectedLanguage={selectedLanguage}
        onOpenLanguageSelector={() => setIsLangModalOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        showTransliteration={showTransliteration}
        onToggleTransliteration={handleToggleTransliteration}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
      />

      {/* Main Column (Header + Content Area) */}
      <div className="flex-1 flex flex-col min-w-0 max-w-full overflow-x-clip">
        
        {/* Top Header Bar (Mobile/Tablet only for Learn view, or compact top bar for other full-width views) */}
        <Header
          selectedLanguage={selectedLanguage}
          allLanguages={INDIAN_LANGUAGES}
          onSelectLanguage={(lang) => {
            setSelectedLanguage(lang);
            setActiveTab('learn');
          }}
          onOpenLanguageSelector={() => setIsLangModalOpen(true)}
          streak={streak}
          gems={gems}
          hearts={hearts}
          completedLessonsCount={completedLessonsCount}
          onRefillHearts={handleRefillHearts}
          onPracticeHeart={handlePracticeHeart}
          soundMuted={soundMuted}
          onToggleSound={handleToggleSound}
          showTransliteration={showTransliteration}
          onToggleTransliteration={handleToggleTransliteration}
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenInstallModal={() => setIsInstallModalOpen(true)}
        />

        {/* Dynamic Main View */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 pb-28 lg:pb-12 max-w-full overflow-x-clip">
          
          {activeTab === 'learn' && (
            <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 items-start justify-center w-full">
              {/* Central Duolingo Snake Path */}
              <div className="flex-1 w-full max-w-xl mx-auto">
                <LessonPath
                  key={selectedLanguage.id}
                  selectedLanguage={selectedLanguage}
                  completedLessons={completedLessons}
                  onStartLesson={handleStartLesson}
                  onUnlockUpToLesson={handleUnlockUpToLesson}
                  onClaimChest={handleClaimChest}
                  onOpenGuidebook={(unit) => setGuidebookUnit(unit)}
                  equippedOutfit={equippedOutfit}
                  theme={theme}
                />
              </div>

              {/* Right Gamification Sidebar */}
              <RightSidebar
                selectedLanguage={selectedLanguage}
                onOpenLanguageSelector={() => setIsLangModalOpen(true)}
                streak={streak}
                hearts={hearts}
                gems={gems}
                onRefillHearts={handleRefillHearts}
                onPracticeHeart={handlePracticeHeart}
                onOpenLeagues={() => setActiveTab('leaderboard')}
                onOpenQuests={() => setActiveTab('quests')}
                onOpenShop={() => setActiveTab('shop')}
                equippedOutfit={equippedOutfit}
                completedLessonsCount={completedLessonsCount}
                theme={theme}
              />
            </div>
          )}

          {['letters', 'practice', 'akshara', 'mistakes', 'roleplay', 'matrix'].includes(activeTab) && (
            <AksharaTrainer
              key={selectedLanguage.id}
              selectedLanguage={selectedLanguage}
              onAddGems={(amount) => setGems(prev => prev + amount)}
              onPracticeHeart={handlePracticeHeart}
              onNavigateLearn={() => setActiveTab('learn')}
              initialSubMode={
                activeTab === 'mistakes' ? 'mistakes' :
                activeTab === 'roleplay' ? 'roleplay' :
                activeTab === 'matrix' ? 'matrix' : 'letters'
              }
              theme={theme}
            />
          )}

          {activeTab === 'leaderboard' && (
            <Leaderboard
              userXP={350 + completedLessonsCount * 50}
              completedLessonsCount={completedLessonsCount}
              equippedOutfit={equippedOutfit}
              theme={theme}
            />
          )}


          {activeTab === 'quests' && (
            <QuestsView
              completedLessonsCount={completedLessonsCount}
              onAddGems={(amount) => setGems(prev => prev + amount)}
              theme={theme}
            />
          )}

          {activeTab === 'shop' && (
            <ShopView
              gems={gems}
              hearts={hearts}
              onRefillHearts={handleRefillHearts}
              onSpendGems={handleSpendGems}
              equippedOutfit={equippedOutfit}
              onEquipOutfit={(id) => setEquippedOutfit(id)}
              unlockedOutfits={unlockedOutfits}
              theme={theme}
            />
          )}

          {activeTab === 'stories' && (
            <CulturalStories
              onEarnChaiPoints={(amount) => setGems(prev => prev + amount)}
              theme={theme}
            />
          )}

          {activeTab === 'profile' && (
            <ProfileView
              streak={streak}
              _gems={gems}
              _hearts={hearts}
              completedLessonsCount={completedLessonsCount}
              selectedLanguage={selectedLanguage}
              equippedOutfit={equippedOutfit}
              theme={theme}
            />
          )}

        </main>
      </div>

      {/* Interactive Lesson Modal */}
      {activeLesson && (
        <LessonModal
          key={activeLesson.id}
          isOpen={!!activeLesson}
          lesson={activeLesson}
          unit={activeUnit}
          selectedLanguage={selectedLanguage}
          hearts={hearts}
          onDeductHeart={handleDeductHeart}
          onCompleteLesson={handleCompleteLesson}
          onClose={() => setActiveLesson(null)}
          showTransliteration={showTransliteration}
          equippedOutfit={equippedOutfit}
          theme={theme}
          gems={gems}
          onRefillHearts={handleRefillHearts}
          onPracticeHeart={handlePracticeHeart}
          onOpenShop={() => {
            setActiveLesson(null);
            setActiveTab('shop');
          }}
        />
      )}

      {/* Unit Guidebook Modal */}
      {guidebookUnit && (
        <GuidebookModal
          isOpen={!!guidebookUnit}
          onClose={() => setGuidebookUnit(null)}
          unit={guidebookUnit}
          selectedLanguage={selectedLanguage}
          theme={theme}
        />
      )}

      {/* Language Course Selector Modal */}
      <LanguageSelectorModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={(lang) => {
          setSelectedLanguage(lang);
          setActiveTab('learn');
          if (hearts <= 0) {
            setHearts(5);
          }
        }}
        theme={theme}
      />

      {/* Settings & Preferences Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        theme={theme}
        onSelectTheme={setTheme}
        soundMuted={soundMuted}
        onToggleSound={handleToggleSound}
        showTransliteration={showTransliteration}
        onToggleTransliteration={handleToggleTransliteration}
        dailyGoalXP={dailyGoalXP}
        onChangeDailyGoal={setDailyGoalXP}
        onResetProgress={handleResetProgress}
        selectedLanguage={selectedLanguage}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
      />

      {/* Free Progressive Web App (PWA) Install Modal */}
      <InstallAppModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        theme={theme}
      />

    </div>
  );
}
