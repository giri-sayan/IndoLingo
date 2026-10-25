import React from 'react';
import { Heart, Shield, Check, Store } from 'lucide-react';
import { sounds } from '../utils/audio';
import Mascot from './Mascot';

export default function ShopView({
  gems,
  hearts,
  onRefillHearts,
  onSpendGems,
  equippedOutfit,
  onEquipOutfit,
  unlockedOutfits = ['default'],
  theme = 'light'
}) {
  const isDark = theme === 'dark';

  const outfits = [
    {
      id: 'default',
      name: 'Classic Bengal Tiger',
      desc: 'Sheru in his natural wild glory with royal golden locket.',
      price: 0,
      outfitId: 'default'
    },
    {
      id: 'shades',
      name: 'Bollywood Superstar Shades',
      desc: 'Aviator dark shades for confident dialogue delivery!',
      price: 120,
      outfitId: 'shades'
    },
    {
      id: 'headphones',
      name: 'Studio DJ Headphones',
      desc: 'Premium over-ear stereo headphones for acute listening practice.',
      price: 130,
      outfitId: 'headphones'
    },
    {
      id: 'chaiwala',
      name: 'Tapri Chaiwala Apron',
      desc: 'Authentic red tea stall apron with cutting chai pocket.',
      price: 150,
      outfitId: 'chaiwala'
    },
    {
      id: 'royal',
      name: 'Royal Saffron Pagri & Sarpech',
      desc: 'Regal turban with ruby jewel and peacock plume.',
      price: 250,
      outfitId: 'royal'
    },
    {
      id: 'kurta',
      name: 'Khadi Silk White Kurta',
      desc: 'Hand-loomed festive kurta with golden Nehru buttons.',
      price: 180,
      outfitId: 'kurta'
    },
    {
      id: 'veshti',
      name: 'Pattu Veshti & Golden Angavastram (Tamil)',
      desc: 'Traditional Tamil pure silk dhoti with golden zari border and sacred tilak.',
      price: 200,
      outfitId: 'veshti'
    },
    {
      id: 'pancha',
      name: 'Andhra Pancha Kattu & Kanduva (Telugu)',
      desc: 'Regal Telugu cream silk dhoti with crimson kanduva and Srichurnam tilak.',
      price: 200,
      outfitId: 'pancha'
    },
    {
      id: 'dhuti',
      name: 'Bengali Dhuti Panjabi & Uttariyo (Bengali)',
      desc: 'Festive crimson embroidered silk kurta with cream pleated dhoti.',
      price: 200,
      outfitId: 'dhuti'
    },
    {
      id: 'peta',
      name: 'Mysore Royal Peta & Shalya (Kannada)',
      desc: 'Grand Mysore royal turban with gold kalasa jewel and silk shalya.',
      price: 220,
      outfitId: 'peta'
    },
    {
      id: 'kasavu',
      name: 'Kerala Kasavu Mundu & Neriyathu (Malayalam)',
      desc: 'Pure handloom Kasavu with broad gold zari and sacred sandalwood paste.',
      price: 200,
      outfitId: 'kasavu'
    },
    {
      id: 'fheta',
      name: 'Peshwai Puneri Fheta & Chandrakor (Marathi)',
      desc: 'Royal saffron pleated turban with gold zaree feather and Shivaji crescent tilak.',
      price: 220,
      outfitId: 'fheta'
    },
    {
      id: 'pagri',
      name: 'Patiala Shahi Pagri & Turrha (Punjabi)',
      desc: 'Vibrant royal saffron Patiala turban with upright plume turrha.',
      price: 220,
      outfitId: 'pagri'
    },
    {
      id: 'kediyu',
      name: 'Kutch Embroidered Kediyu & Chorno (Gujarati)',
      desc: 'Traditional colorful Gujarati flared frock kurta with mirror-work accents.',
      price: 210,
      outfitId: 'kediyu'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      
      {/* Bazaar Shop Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-emerald-500/30">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="p-1.5 rounded-xl bg-white/20 border border-white/30 text-white">
                <Store className="w-4 h-4" />
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-200">
                Chai Points Bazaar
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Spend Your Hard-Earned Chai Points
            </h1>
            <p className="text-sm font-semibold text-emerald-100 max-w-lg leading-relaxed">
              Refill hearts, maintain your learning streak, and customize Sheru the Tiger with authentic Indian cultural outfits!
            </p>
          </div>

          <div className="shrink-0 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center min-w-[140px]">
            <p className="text-xs font-black uppercase tracking-wider text-emerald-200">Balance</p>
            <p className="text-3xl font-black text-amber-300 flex items-center justify-center gap-1.5 mt-1">
              <span>🫖</span> {gems}
            </p>
          </div>
        </div>
      </div>

      {/* Hearts & Refills */}
      <div className={`rounded-3xl border-2 p-6 sm:p-8 transition-colors ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <h2 className="text-xl font-black flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <span>Hearts & Energy</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Refill Hearts */}
          <div className={`p-5 rounded-2xl border-2 flex items-center justify-between gap-4 ${
            isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-rose-50/40 border-rose-100'
          }`}>
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Heart className="w-6 h-6 fill-white" />
              </div>
              <div>
                <h3 className="font-black text-base text-slate-900 dark:text-slate-100">
                  Refill Full Hearts
                </h3>
                <p className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Restore your hearts back to 5. Currently: {hearts}/5
                </p>
              </div>
            </div>

            <button
              onClick={onRefillHearts}
              disabled={hearts >= 5 || gems < 20}
              className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                hearts >= 5 || gems < 20
                  ? 'btn-duo-gray'
                  : 'btn-duo-green text-white cursor-pointer'
              }`}
            >
              {hearts >= 5 ? 'FULL' : '20 🫖'}
            </button>
          </div>

          {/* Streak Freeze */}
          <div className={`p-5 rounded-2xl border-2 flex items-center justify-between gap-4 ${
            isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-amber-50/40 border-amber-100'
          }`}>
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-base text-slate-900 dark:text-slate-100">
                  Cutting Chai Streak Freeze
                </h3>
                <p className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Protects your streak if you miss a day of practice.
                </p>
              </div>
            </div>

            <span className="px-4 py-2 rounded-xl text-xs font-black bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
              EQUIPPED ✨
            </span>
          </div>
        </div>
      </div>

      {/* Mascot Sheru Wardrobe */}
      <div className={`rounded-3xl border-2 p-6 sm:p-8 transition-colors ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-black flex items-center gap-2">
              <Store className="w-5 h-5 text-purple-500" />
              <span>Sheru's Wardrobe (Mascot Outfits)</span>
            </h2>
            <p className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Customize Sheru with traditional and modern Indian cultural attire!
            </p>
          </div>
          <span className="text-sm font-black text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <span>🫖</span> {gems} Chai Points
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {outfits.map((outfit) => {
            const isEquipped = equippedOutfit === outfit.outfitId;
            const isUnlocked = unlockedOutfits.includes(outfit.outfitId) || outfit.price === 0;

            return (
              <div
                key={outfit.id}
                className={`p-5 rounded-3xl border-2 transition-all flex flex-col justify-between ${
                  isEquipped
                    ? isDark ? 'border-emerald-500 bg-emerald-950/20' : 'border-emerald-500 bg-emerald-50/50 shadow-md'
                    : isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-center p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl">
                    <Mascot mood="happy" size={90} outfit={outfit.outfitId} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                      {outfit.name}
                    </h3>
                    <p className={`text-xs font-semibold mt-1 leading-snug ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {outfit.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-black text-xs text-amber-600 dark:text-amber-400">
                    {outfit.price === 0 ? 'FREE' : `${outfit.price} 🫖`}
                  </span>

                  {isEquipped ? (
                    <span className="px-4 py-2 rounded-xl text-xs font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 stroke-[3]" /> EQUIPPED
                    </span>
                  ) : isUnlocked ? (
                    <button
                      onClick={() => {
                        sounds.playPop();
                        onEquipOutfit(outfit.outfitId);
                      }}
                      className="px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider btn-duo-blue text-white cursor-pointer"
                    >
                      EQUIP
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (gems >= outfit.price) {
                          sounds.playFanfare();
                          onSpendGems(outfit.price, outfit.outfitId);
                        } else {
                          sounds.playWrong();
                        }
                      }}
                      disabled={gems < outfit.price}
                      className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider ${
                        gems >= outfit.price ? 'btn-duo-green text-white cursor-pointer' : 'btn-duo-gray'
                      }`}
                    >
                      BUY
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
