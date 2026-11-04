import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Share, PlusSquare, CheckCircle, X, ShieldCheck, Sparkles } from 'lucide-react';
import TigerLogo from './TigerLogo';
import { sounds } from '../utils/audio';

export default function InstallAppModal({ isOpen, onClose, theme = 'dark' }) {
  const isDark = theme === 'dark';
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installSuccess, setInstallSuccess] = useState(false);

  // Derive device & standalone mode synchronously during initialization
  const [isStandalone] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  });

  const [isIOS] = useState(() => {
    if (typeof window === 'undefined') return false;
    return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
  });

  useEffect(() => {
    // Capture Android beforeinstallprompt
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallAndroid = async () => {
    sounds.playPop();
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        sounds.playFanfare();
        setInstallSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      }
      setDeferredPrompt(null);
    } else {
      // Fallback instruction
      alert("To install, tap your browser's menu (⋮) and tap 'Install App' or 'Add to Home screen'.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className={`relative w-full max-w-md rounded-3xl p-6 shadow-2xl border-2 transition-all ${
        isDark ? 'bg-[#18262d] border-[#38464f] text-white' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playPop();
            onClose();
          }}
          className={`absolute top-4 right-4 p-2 rounded-2xl transition cursor-pointer ${
            isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
          }`}
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-3 pt-2 pb-4">
          <div className="flex justify-center">
            <div className="relative">
              <TigerLogo size={72} withBadge={true} />
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 shadow-md">
                <Smartphone className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> 100% Free • ₹0 Cost Forever
            </div>
            <h2 className="text-2xl font-black">
              Install IndoLingo App
            </h2>
            <p className={`text-xs font-bold mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Master 9 Indian Languages directly on your phone with zero app store fees!
            </p>
          </div>
        </div>

        {/* If already installed */}
        {isStandalone ? (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 mb-4">
            <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
            <p className="font-black text-sm text-emerald-500">
              You are already using the installed IndoLingo App!
            </p>
            <p className="text-xs text-slate-400">
              Enjoy your offline learning, native speech, and daily streaks.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Benefits grid */}
            <div className={`p-4 rounded-2xl border space-y-2.5 ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-3 text-xs font-bold">
                <span className="w-6 h-6 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✓</span>
                <span>Works on <strong>Android, iPhone, iPad, & PC</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold">
                <span className="w-6 h-6 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">⚡</span>
                <span><strong>No Browser URL Bar</strong> — Full-Screen App Experience</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold">
                <span className="w-6 h-6 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">📴</span>
                <span><strong>Offline Practice</strong> with Local Storage Sync</span>
              </div>
            </div>

            {/* Platform Instructions */}
            {isIOS ? (
              /* iOS Safari Instructions */
              <div className={`p-4 rounded-2xl border space-y-3 ${
                isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-amber-50/70 border-amber-200'
              }`}>
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> How to Install on iPhone / iPad:
                </h4>
                <ol className="text-xs font-bold space-y-2.5 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] shrink-0 font-black">1</span>
                    <span>Tap the <strong>Share</strong> button <Share className="w-3.5 h-3.5 inline mx-1 text-blue-500" /> at the bottom of Safari.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] shrink-0 font-black">2</span>
                    <span>Scroll down and select <strong>"Add to Home Screen"</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-1 text-slate-500" />.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] shrink-0 font-black">3</span>
                    <span>Tap <strong>"Add"</strong> in the top-right corner. That's it!</span>
                  </li>
                </ol>
              </div>
            ) : (
              /* Android 1-Click Install Button */
              <div>
                {installSuccess ? (
                  <div className="py-3 text-center text-emerald-500 font-black text-sm flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Installed successfully! Opening app...
                  </div>
                ) : (
                  <button
                    onClick={handleInstallAndroid}
                    className="w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider btn-duo-green text-white cursor-pointer shadow-lg flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>INSTALL APP NOW (FREE)</span>
                  </button>
                )}
                <p className={`text-[11px] text-center mt-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  (Or tap browser menu ⋮ → <strong>"Install App"</strong>)
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 mt-4 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Safe & Secure PWA
          </span>
          <span>Zero Store Accounts Needed</span>
        </div>
      </div>
    </div>
  );
}
