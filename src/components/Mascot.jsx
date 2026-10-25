import React from 'react';

/**
 * Sheru (शेरू) - The adorable Royal Bengal Tiger Cub Mascot!
 * India's national animal, embodying courage, curiosity, and playful language learning.
 */
export default function Mascot({ mood = 'happy', message = '', size = 120, className = '', outfit = 'default' }) {
  return (
    <div className={`relative flex items-end gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105 drop-shadow-md"
      >
        <defs>
          {/* Vibrant warm tiger cub fur gradient */}
          <linearGradient id="tigerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          {/* Soft creamy belly and snout */}
          <linearGradient id="tigerBelly" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF5" />
            <stop offset="100%" stopColor="#FEF3C7" />
          </linearGradient>

          {/* Pink inner ears & tongue */}
          <linearGradient id="tigerPink" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDA4AF" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>

          {/* Royal Desi golden medallion */}
          <linearGradient id="goldLocket" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Ruby center gem */}
          <radialGradient id="rubyGem" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#F87171" />
            <stop offset="100%" stopColor="#991B1B" />
          </radialGradient>

          {/* Indian Tricolor Gradients for Cheek Hairs */}
          <linearGradient id="mascotSaffron" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9933" />
            <stop offset="100%" stopColor="#FF671F" />
          </linearGradient>
          <linearGradient id="mascotWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
          <linearGradient id="mascotGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16A34A" />
            <stop offset="100%" stopColor="#046A38" />
          </linearGradient>
          <filter id="mascotCheekShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#0F172A" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 1. Curled Tiger Tail */}
        {mood === 'cheering' ? (
          <g className="animate-bounce" style={{ transformOrigin: '40px 140px' }}>
            <path
              d="M 64 148 C 30 148, 12 128, 18 100 C 22 84, 38 86, 35 100 C 32 114, 44 130, 72 135 Z"
              fill="url(#tigerGrad)"
            />
            {/* Tail Stripes */}
            <path d="M 38 134 C 32 130, 26 124, 25 116 C 29 116, 35 124, 42 128 Z" fill="#1E293B" />
            <path d="M 24 114 C 21 108, 21 102, 23 96 C 27 97, 28 104, 30 110 Z" fill="#1E293B" />
            {/* Black Tail Tip */}
            <path d="M 21 99 C 23 88, 35 88, 35 98 C 30 98, 24 98, 21 99 Z" fill="#1E293B" />
          </g>
        ) : (
          <g>
            <path
              d="M 64 150 C 35 152, 18 135, 20 110 C 22 96, 36 96, 35 108 C 34 122, 45 136, 72 138 Z"
              fill="url(#tigerGrad)"
            />
            {/* Tail Stripes */}
            <path d="M 42 142 C 36 138, 32 132, 30 125 C 33 124, 38 132, 45 136 Z" fill="#1E293B" />
            <path d="M 28 122 C 24 116, 23 110, 24 105 C 28 105, 29 112, 32 118 Z" fill="#1E293B" />
            {/* Black Tail Tip */}
            <path d="M 22 108 C 22 98, 34 98, 35 106 C 31 106, 25 106, 22 108 Z" fill="#1E293B" />
          </g>
        )}

        {/* 2. Chubby Body */}
        <path
          d="M 62 118 C 50 134, 52 165, 75 174 C 88 178, 112 178, 125 174 C 148 165, 150 134, 138 118 C 126 123, 74 123, 62 118 Z"
          fill="url(#tigerGrad)"
        />

        {/* Soft Cream Belly Patch */}
        <ellipse cx="100" cy="148" rx="27" ry="24" fill="url(#tigerBelly)" />

        {/* Body Flank Stripes */}
        {/* Left Side Stripes */}
        <path d="M 57 132 Q 68 135 74 133 Q 68 139 58 139 Z" fill="#1E293B" />
        <path d="M 62 148 Q 72 150 78 147 Q 72 154 64 155 Z" fill="#1E293B" />
        {/* Right Side Stripes */}
        <path d="M 143 132 Q 132 135 126 133 Q 132 139 142 139 Z" fill="#1E293B" />
        <path d="M 138 148 Q 128 150 122 147 Q 128 154 136 155 Z" fill="#1E293B" />

        {/* 3. Hind Feet with Soft Pads */}
        <ellipse cx="72" cy="174" rx="14" ry="10" fill="url(#tigerGrad)" />
        <ellipse cx="72" cy="175" rx="9" ry="6" fill="url(#tigerBelly)" />
        <circle cx="66" cy="173" r="2.2" fill="#FDA4AF" opacity="0.8" />
        <circle cx="72" cy="171" r="2.2" fill="#FDA4AF" opacity="0.8" />
        <circle cx="78" cy="173" r="2.2" fill="#FDA4AF" opacity="0.8" />

        <ellipse cx="128" cy="174" rx="14" ry="10" fill="url(#tigerGrad)" />
        <ellipse cx="128" cy="175" rx="9" ry="6" fill="url(#tigerBelly)" />
        <circle cx="122" cy="173" r="2.2" fill="#FDA4AF" opacity="0.8" />
        <circle cx="128" cy="171" r="2.2" fill="#FDA4AF" opacity="0.8" />
        <circle cx="134" cy="173" r="2.2" fill="#FDA4AF" opacity="0.8" />

        {/* 4. Front Paws & Arms (Mood Variations) */}
        {mood === 'cheering' ? (
          <g>
            {/* Left arm waving high */}
            <path
              d="M 68 122 C 50 115, 36 92, 44 76 C 52 68, 66 82, 74 104 Z"
              fill="url(#tigerGrad)"
              className="animate-pulse"
            />
            <circle cx="48" cy="78" r="7.5" fill="url(#tigerBelly)" />
            <circle cx="48" cy="78" r="4" fill="#FDA4AF" />

            {/* Right arm waving high */}
            <path
              d="M 132 122 C 150 115, 164 92, 156 76 C 148 68, 134 82, 126 104 Z"
              fill="url(#tigerGrad)"
              className="animate-pulse"
            />
            <circle cx="152" cy="78" r="7.5" fill="url(#tigerBelly)" />
            <circle cx="152" cy="78" r="4" fill="#FDA4AF" />
          </g>
        ) : mood === 'proud' ? (
          <g>
            {/* Proud hands on hips */}
            <path
              d="M 66 122 C 46 126, 44 142, 60 148 C 68 150, 72 138, 70 128 Z"
              fill="url(#tigerGrad)"
            />
            <path
              d="M 134 122 C 154 126, 156 142, 140 148 C 132 150, 128 138, 130 128 Z"
              fill="url(#tigerGrad)"
            />
          </g>
        ) : mood === 'sad' ? (
          <g>
            {/* Shy folded paws */}
            <ellipse cx="88" cy="142" rx="10" ry="7.5" transform="rotate(-15 88 142)" fill="url(#tigerGrad)" />
            <ellipse cx="88" cy="142" rx="6" ry="4.5" transform="rotate(-15 88 142)" fill="url(#tigerBelly)" />
            <ellipse cx="112" cy="142" rx="10" ry="7.5" transform="rotate(15 112 142)" fill="url(#tigerGrad)" />
            <ellipse cx="112" cy="142" rx="6" ry="4.5" transform="rotate(15 112 142)" fill="url(#tigerBelly)" />
          </g>
        ) : mood === 'chai' ? (
          <g>
            {/* Paws holding cutting chai glass */}
            <ellipse cx="86" cy="140" rx="8" ry="6.5" fill="url(#tigerGrad)" />
            <ellipse cx="114" cy="140" rx="8" ry="6.5" fill="url(#tigerGrad)" />
          </g>
        ) : (
          <g>
            {/* Default Happy: Left paw on belly, Right paw waving hello */}
            <ellipse cx="82" cy="138" rx="9" ry="7.5" fill="url(#tigerGrad)" />
            <ellipse cx="82" cy="138" rx="5.5" ry="4.5" fill="url(#tigerBelly)" />
            <path
              d="M 130 126 C 146 122, 158 108, 155 96 C 149 88, 137 100, 128 116 Z"
              fill="url(#tigerGrad)"
            />
            <circle cx="151" cy="98" r="6.5" fill="url(#tigerBelly)" />
            <circle cx="151" cy="98" r="3.5" fill="#FDA4AF" />
          </g>
        )}

        {/* 5. Desi Royal Saffron Collar with Golden Pendant */}
        <path
          d="M 74 112 C 86 122, 114 122, 126 112 C 122 120, 112 126, 100 127 C 88 126, 78 120, 74 112 Z"
          fill="#D97706"
          stroke="#B45309"
          strokeWidth="1"
        />
        <path
          d="M 76 113 C 87 121, 113 121, 124 113"
          stroke="#FBBF24"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Golden Royal Pendant / Ghungroo Bell */}
        <circle cx="100" cy="126" r="7" fill="url(#goldLocket)" stroke="#92400E" strokeWidth="1.2" />
        <circle cx="100" cy="126" r="3.5" fill="url(#rubyGem)" />
        <circle cx="98.5" cy="124.5" r="1.2" fill="white" />

        {/* 6. Ears (Behind Head) */}
        {mood === 'sad' ? (
          <g>
            {/* Drooping sad cub ears */}
            <ellipse cx="58" cy="52" rx="19" ry="17" transform="rotate(-35 58 52)" fill="url(#tigerGrad)" />
            <path d="M 44 48 C 48 38, 66 38, 74 47 C 68 44, 52 44, 44 48 Z" fill="#1E293B" />
            <ellipse cx="60" cy="53" rx="11" ry="9" transform="rotate(-35 60 53)" fill="url(#tigerPink)" />

            <ellipse cx="142" cy="52" rx="19" ry="17" transform="rotate(35 142 52)" fill="url(#tigerGrad)" />
            <path d="M 156 48 C 152 38, 134 38, 126 47 C 132 44, 148 44, 156 48 Z" fill="#1E293B" />
            <ellipse cx="140" cy="53" rx="11" ry="9" transform="rotate(35 140 53)" fill="url(#tigerPink)" />
          </g>
        ) : (
          <g>
            {/* Left Ear */}
            <ellipse cx="60" cy="42" rx="20" ry="19" transform="rotate(-18 60 42)" fill="url(#tigerGrad)" />
            <path d="M 44 38 C 48 26, 68 25, 78 35 C 72 32, 54 32, 44 38 Z" fill="#1E293B" />
            {/* Iconic white ear-back spot (Ocelli) */}
            <circle cx="58" cy="34" r="3.2" fill="#FFFFFF" opacity="0.95" />
            <ellipse cx="62" cy="44" rx="12" ry="11" transform="rotate(-18 62 44)" fill="url(#tigerPink)" />
            <path d="M 54 50 C 58 45, 66 45, 68 52 Z" fill="#FEF3C7" opacity="0.75" />

            {/* Right Ear */}
            <ellipse cx="140" cy="42" rx="20" ry="19" transform="rotate(18 140 42)" fill="url(#tigerGrad)" />
            <path d="M 156 38 C 152 26, 132 25, 122 35 C 128 32, 146 32, 156 38 Z" fill="#1E293B" />
            {/* Iconic white ear-back spot (Ocelli) */}
            <circle cx="142" cy="34" r="3.2" fill="#FFFFFF" opacity="0.95" />
            <ellipse cx="138" cy="44" rx="12" ry="11" transform="rotate(18 138 44)" fill="url(#tigerPink)" />
            <path d="M 146 50 C 142 45, 134 45, 132 52 Z" fill="#FEF3C7" opacity="0.75" />
          </g>
        )}

        {/* 7. Chubby Head & Cheeks */}
        <ellipse cx="100" cy="74" rx="44" ry="38" fill="url(#tigerGrad)" />
        {/* Left Cheek Fluff - Indian Tricolor Cheek Hairs */}
        <g filter="url(#mascotCheekShadow)">
          {/* Top Hair: Saffron */}
          <path
            d="M 64 68 C 50 68, 44 71, 46 76 C 52 79, 60 78, 64 76 Z"
            fill="url(#mascotSaffron)"
            stroke="#EA580C"
            strokeWidth="0.6"
          />
          {/* Middle Hair: White */}
          <path
            d="M 62 76 C 46 77, 42 81, 45 86 C 52 87, 59 85, 62 83 Z"
            fill="url(#mascotWhite)"
            stroke="#CBD5E1"
            strokeWidth="0.8"
          />
          {/* Bottom Hair: India Green */}
          <path
            d="M 62 84 C 47 86, 45 92, 48 97 C 54 96, 61 93, 64 90 Z"
            fill="url(#mascotGreen)"
            stroke="#065F46"
            strokeWidth="0.6"
          />
        </g>

        {/* Right Cheek Fluff - Indian Tricolor Cheek Hairs */}
        <g filter="url(#mascotCheekShadow)">
          {/* Top Hair: Saffron */}
          <path
            d="M 136 68 C 150 68, 156 71, 154 76 C 148 79, 140 78, 136 76 Z"
            fill="url(#mascotSaffron)"
            stroke="#EA580C"
            strokeWidth="0.6"
          />
          {/* Middle Hair: White */}
          <path
            d="M 138 76 C 154 77, 158 81, 155 86 C 148 87, 141 85, 138 83 Z"
            fill="url(#mascotWhite)"
            stroke="#CBD5E1"
            strokeWidth="0.8"
          />
          {/* Bottom Hair: India Green */}
          <path
            d="M 138 84 C 153 86, 155 92, 152 97 C 146 96, 139 93, 136 90 Z"
            fill="url(#mascotGreen)"
            stroke="#065F46"
            strokeWidth="0.6"
          />
        </g>

        {/* 8. Iconic Bengal Tiger Forehead Markings */}
        <path d="M 98 42 L 102 42 L 101 53 L 99 53 Z" fill="#1E293B" />
        <path d="M 92 46 Q 100 48 108 46 Q 100 49 92 46 Z" fill="#1E293B" />
        <path d="M 83 45 Q 91 50 93 56 Q 89 53 82 48 Z" fill="#1E293B" />
        <path d="M 117 45 Q 109 50 107 56 Q 111 53 118 48 Z" fill="#1E293B" />

        {/* Traditional Cultural Tilak / Tikka */}
        <ellipse cx="100" cy="57" rx="2.5" ry="4" fill="#DC2626" />
        <circle cx="100" cy="61.5" r="1.3" fill="#FBBF24" />

        {/* 9. Cheek Stripes */}
        {/* Left cheek stripes */}
        <path d="M 58 74 Q 68 76 73 77 Q 67 79 57 79 Z" fill="#1E293B" />
        <path d="M 60 83 Q 69 85 73 86 Q 67 88 61 89 Z" fill="#1E293B" />
        {/* Right cheek stripes */}
        <path d="M 142 74 Q 132 76 127 77 Q 133 79 143 79 Z" fill="#1E293B" />
        <path d="M 140 83 Q 131 85 127 86 Q 133 88 139 89 Z" fill="#1E293B" />

        {/* 10. Muzzle, Nose & Whiskers */}
        <ellipse cx="92" cy="88" rx="14" ry="11" fill="url(#tigerBelly)" />
        <ellipse cx="108" cy="88" rx="14" ry="11" fill="url(#tigerBelly)" />
        <path d="M 94 77 Q 100 79 106 77 L 108 86 L 92 86 Z" fill="url(#tigerBelly)" />

        {/* Whisker Dots */}
        <circle cx="87" cy="86" r="1.2" fill="#94A3B8" />
        <circle cx="83" cy="89" r="1.2" fill="#94A3B8" />
        <circle cx="88" cy="91" r="1.2" fill="#94A3B8" />
        <circle cx="113" cy="86" r="1.2" fill="#94A3B8" />
        <circle cx="117" cy="89" r="1.2" fill="#94A3B8" />
        <circle cx="112" cy="91" r="1.2" fill="#94A3B8" />

        {/* Indian Tricolor Whiskers */}
        {/* Left Cheek Whiskers */}
        <path d="M 80 86 Q 66 84 56 83" stroke="#FF671F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 80 89 Q 65 90 54 90" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none" filter="drop-shadow(0 0.5px 1px rgba(0,0,0,0.3))" />
        <path d="M 81 92 Q 68 96 58 98" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Right Cheek Whiskers */}
        <path d="M 120 86 Q 134 84 144 83" stroke="#FF671F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 120 89 Q 135 90 146 90" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none" filter="drop-shadow(0 0.5px 1px rgba(0,0,0,0.3))" />
        <path d="M 119 92 Q 132 96 142 98" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Soft Pink Nose */}
        <path
          d="M 94 81 Q 100 78 106 81 Q 103 88 100 88 Q 97 88 94 81 Z"
          fill="#E11D48"
        />
        <circle cx="98.5" cy="82" r="1.2" fill="white" opacity="0.75" />

        {/* Philtrum */}
        <path d="M 100 88 L 100 91" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" />

        {/* Mouth (Mood-dependent) */}
        {mood === 'cheering' || mood === 'proud' ? (
          <g>
            {/* Big joyful open smile */}
            <path
              d="M 91 91 Q 100 105 109 91 Z"
              fill="#991B1B"
              stroke="#1E293B"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Tongue */}
            <path d="M 94 97 Q 100 93 106 97 Q 100 104 94 97 Z" fill="#FB7185" />
            {/* Cute Little Cub Fangs */}
            <polygon points="92,91 94,94 95,91" fill="white" />
            <polygon points="105,91 106,94 108,91" fill="white" />
          </g>
        ) : mood === 'sad' ? (
          /* Sad downturned pout */
          <path d="M 93 95 Q 100 90 107 95" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        ) : mood === 'chai' ? (
          /* Content 'w' smile */
          <path d="M 93 91 Q 96 95 100 92 Q 104 95 107 91" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
        ) : (
          /* Happy Sweet Cat/Cub Smile */
          <path d="M 92 91 Q 96 96 100 92 Q 104 96 108 91" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        )}

        {/* 11. Rosy Blushing Cheeks */}
        <ellipse cx="73" cy="84" rx="7" ry="5" fill="#FDA4AF" opacity="0.75" />
        <ellipse cx="127" cy="84" rx="7" ry="5" fill="#FDA4AF" opacity="0.75" />

        {/* 12. Expressive Eyes */}
        {mood === 'sad' ? (
          <g>
            {/* Teary eyes */}
            <ellipse cx="80" cy="72" rx="8" ry="9" fill="#1E293B" />
            <circle cx="78" cy="70" r="3" fill="white" />
            <path d="M 72 61 Q 80 65 88 63" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" fill="none" />

            <ellipse cx="120" cy="72" rx="8" ry="9" fill="#1E293B" />
            <circle cx="118" cy="70" r="3" fill="white" />
            <path d="M 112 63 Q 120 65 128 61" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" fill="none" />

            {/* Teardrop */}
            <path
              d="M 127 77 C 131 82, 131 87, 127 89 C 123 87, 123 82, 127 77 Z"
              fill="#38BDF8"
              className="animate-pulse"
            />
          </g>
        ) : mood === 'cheering' || mood === 'proud' ? (
          <g>
            {/* Cheerful arched squinting eyes */}
            <path d="M 72 72 Q 80 61 88 72" stroke="#1E293B" strokeWidth="3.8" strokeLinecap="round" fill="none" />
            <path d="M 112 72 Q 120 61 128 72" stroke="#1E293B" strokeWidth="3.8" strokeLinecap="round" fill="none" />
            <path d="M 73 57 Q 81 53 89 57" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 111 57 Q 119 53 127 57" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Celebratory golden sparkle stars */}
            <path d="M 38 45 Q 43 45 43 40 Q 43 45 48 45 Q 43 45 43 50 Q 43 45 38 45 Z" fill="#FBBF24" />
            <path d="M 158 42 Q 163 42 163 37 Q 163 42 168 42 Q 163 42 163 47 Q 163 42 158 42 Z" fill="#FBBF24" />
          </g>
        ) : mood === 'chai' ? (
          <g>
            {/* Peaceful eyes enjoying chai */}
            <path d="M 73 72 Q 80 64 87 72" stroke="#1E293B" strokeWidth="3.2" strokeLinecap="round" fill="none" />
            <path d="M 113 72 Q 120 64 127 72" stroke="#1E293B" strokeWidth="3.2" strokeLinecap="round" fill="none" />
          </g>
        ) : (
          <g>
            {/* Big Friendly Anime/Duolingo-style Tiger Cub Eyes */}
            {/* Left Eye */}
            <ellipse cx="80" cy="71" rx="9" ry="10.5" fill="#1E293B" />
            <ellipse cx="80" cy="72" rx="7.5" ry="8.5" fill="#D97706" />
            <ellipse cx="80" cy="73" rx="6" ry="7" fill="#0F172A" />
            <circle cx="77" cy="68" r="3.2" fill="white" />
            <circle cx="83" cy="75" r="1.5" fill="white" />
            <path d="M 72 58 Q 80 54 88 57" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Right Eye */}
            <ellipse cx="120" cy="71" rx="9" ry="10.5" fill="#1E293B" />
            <ellipse cx="120" cy="72" rx="7.5" ry="8.5" fill="#D97706" />
            <ellipse cx="120" cy="73" rx="6" ry="7" fill="#0F172A" />
            <circle cx="117" cy="68" r="3.2" fill="white" />
            <circle cx="123" cy="75" r="1.5" fill="white" />
            <path d="M 112 57 Q 120 54 128 58" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        )}

        {/* 13. Cutting Chai Glass (If mood === 'chai') */}
        {mood === 'chai' && (
          <g transform="translate(90, 126)">
            {/* Glass */}
            <polygon points="4,2 16,2 14,24 6,24" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
            <polygon points="5,7 15,7 13,22 7,22" fill="#B45309" opacity="0.9" />
            {/* Wafting Steam */}
            <path
              d="M 8,-3 Q 11,-9 9,-14"
              stroke="#CBD5E1"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M 13,-2 Q 16,-8 14,-13"
              stroke="#CBD5E1"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              className="animate-pulse"
            />
          </g>
        )}

        {/* 14. Sheru Outfits from Shop */}
        {outfit === 'shades' && (
          <g id="outfit-shades" className="drop-shadow-md">
            {/* Sunglasses bridge & frames */}
            <rect x="68" y="64" width="26" height="17" rx="6" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
            <rect x="106" y="64" width="26" height="17" rx="6" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
            <path d="M 94 68 Q 100 66 106 68" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            <path d="M 68 68 L 54 64" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 132 68 L 146 64" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
            {/* Gloss reflection */}
            <path d="M 72 67 L 88 77" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
            <path d="M 110 67 L 126 77" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
          </g>
        )}

        {outfit === 'headphones' && (
          <g id="outfit-headphones" className="drop-shadow-md">
            {/* Headband spanning over top of head */}
            <path d="M 52 48 C 50 16, 150 16, 148 48" stroke="#1E293B" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M 54 46 C 54 22, 146 22, 146 46" stroke="#3B82F6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Left Ear Cup */}
            <ellipse cx="50" cy="46" rx="9" ry="15" transform="rotate(-15 50 46)" fill="#0F172A" stroke="#3B82F6" strokeWidth="2" />
            <ellipse cx="50" cy="46" rx="5" ry="9" transform="rotate(-15 50 46)" fill="#1E293B" />
            {/* Right Ear Cup */}
            <ellipse cx="150" cy="46" rx="9" ry="15" transform="rotate(15 150 46)" fill="#0F172A" stroke="#3B82F6" strokeWidth="2" />
            <ellipse cx="150" cy="46" rx="5" ry="9" transform="rotate(15 150 46)" fill="#1E293B" />
          </g>
        )}

        {outfit === 'royal' && (
          <g id="outfit-royal" className="drop-shadow-lg">
            {/* Royal Saffron Turban / Pagri */}
            <ellipse cx="100" cy="40" rx="42" ry="20" fill="#FF9933" />
            <path d="M 62 44 Q 100 24 138 44 Q 100 32 62 44 Z" fill="#EA580C" />
            <path d="M 66 38 Q 100 18 134 38 Q 100 26 66 38 Z" fill="#F59E0B" />
            {/* Turban folds */}
            <path d="M 70 48 Q 100 38 130 48" stroke="#C2410C" strokeWidth="2" fill="none" />
            {/* Golden Sarpech / Jewel with Peacock feather */}
            <ellipse cx="100" cy="32" rx="6" ry="8" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
            <circle cx="100" cy="32" r="3.5" fill="#DC2626" />
            <path d="M 100 24 Q 106 10 114 4 Q 102 12 100 24 Z" fill="#0D9488" />
            <circle cx="110" cy="7" r="2.5" fill="#3B82F6" />
          </g>
        )}

        {outfit === 'chaiwala' && (
          <g id="outfit-chaiwala">
            {/* Tea stall apron */}
            <path d="M 78 126 L 122 126 L 128 168 L 72 168 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
            {/* Apron strap */}
            <path d="M 82 126 L 76 112" stroke="#991B1B" strokeWidth="2.5" />
            <path d="M 118 126 L 124 112" stroke="#991B1B" strokeWidth="2.5" />
            {/* Apron pocket with Cutting Chai logo */}
            <rect x="88" y="138" width="24" height="20" rx="4" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="1" />
            <text x="94" y="152" fontSize="11" fill="white">☕</text>
          </g>
        )}

        {outfit === 'kurta' && (
          <g id="outfit-kurta">
            {/* White Silk Kurta */}
            <path d="M 70 120 C 60 134, 62 166, 75 174 C 88 178, 112 178, 125 174 C 138 166, 140 134, 130 120 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
            {/* Nehru collar & golden buttons */}
            <path d="M 90 114 L 110 114 L 108 124 L 92 124 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="100" y1="124" x2="100" y2="164" stroke="#F59E0B" strokeWidth="1.5" />
            <circle cx="100" cy="132" r="2" fill="#D97706" />
            <circle cx="100" cy="144" r="2" fill="#D97706" />
            <circle cx="100" cy="156" r="2" fill="#D97706" />
          </g>
        )}

        {outfit === 'veshti' && (
          <g id="outfit-veshti">
            {/* Traditional Tamil Pattu Silk Veshti wrap with golden zari border */}
            <path d="M 68 136 C 58 148, 60 168, 74 174 C 88 178, 112 178, 126 174 C 140 168, 142 148, 132 136 Z" fill="#FFFDF5" stroke="#E2E8F0" strokeWidth="1.5" />
            {/* Golden Zari Border (கரை) */}
            <path d="M 72 166 C 86 172, 114 172, 128 166 L 126 174 C 112 178, 88 178, 74 174 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
            <line x1="100" y1="136" x2="100" y2="174" stroke="#FBBF24" strokeWidth="1.2" strokeDasharray="2,2" />
            {/* Angavastram (Golden Silk Shawl draped over shoulder) */}
            <path d="M 74 116 Q 84 130 92 150 L 98 148 Q 90 128 80 114 Z" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1" />
            {/* Golden Vibhuti & Kungumam Tilak on Forehead */}
            <line x1="90" y1="52" x2="110" y2="52" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="92" y1="55" x2="108" y2="55" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="100" cy="53.5" r="1.5" fill="#DC2626" />
          </g>
        )}

        {outfit === 'pancha' && (
          <g id="outfit-pancha">
            {/* Andhra Pancha Kattu (Silk dhoti with gold zari) */}
            <path d="M 68 136 C 58 148, 60 168, 74 174 C 88 178, 112 178, 126 174 C 140 168, 142 148, 132 136 Z" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1.5" />
            <path d="M 72 166 C 86 172, 114 172, 128 166 L 126 174 C 112 178, 88 178, 74 174 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
            {/* Crimson Red Kanduva draped over shoulder */}
            <path d="M 72 116 Q 86 130 96 152 L 102 148 Q 92 126 78 114 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
            <line x1="74" y1="116" x2="100" y2="152" stroke="#FBBF24" strokeWidth="1.5" />
            {/* Telugu Srichurnam Tilak on forehead */}
            <line x1="97" y1="50" x2="97" y2="56" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="100" y1="49" x2="100" y2="57" stroke="#DC2626" strokeWidth="1.8" />
            <line x1="103" y1="50" x2="103" y2="56" stroke="#FFFFFF" strokeWidth="1.2" />
          </g>
        )}

        {outfit === 'dhuti' && (
          <g id="outfit-dhuti">
            {/* Bengali Crimson Panjabi Kurta */}
            <path d="M 70 120 C 60 134, 62 166, 75 174 C 88 178, 112 178, 125 174 C 138 166, 140 134, 130 120 Z" fill="#B91C1C" stroke="#991B1B" strokeWidth="1.5" />
            <path d="M 92 114 L 108 114 L 106 126 L 94 126 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
            <circle cx="100" cy="136" r="1.5" fill="#FDE68A" />
            <circle cx="100" cy="146" r="1.5" fill="#FDE68A" />
            {/* Cream folded Uttariyo shawl */}
            <path d="M 72 114 Q 86 132 94 154 L 100 150 Q 90 126 78 112 Z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
            {/* Chandan Tilak */}
            <circle cx="100" cy="52" r="2.5" fill="#FFFFFF" stroke="#FEF3C7" strokeWidth="0.8" />
          </g>
        )}

        {outfit === 'peta' && (
          <g id="outfit-peta" className="drop-shadow-lg">
            {/* Royal Mysore Peta Turban */}
            <ellipse cx="100" cy="40" rx="38" ry="18" fill="#7F1D1D" stroke="#991B1B" strokeWidth="1.5" />
            <path d="M 64 42 Q 100 24 136 42 Q 100 30 64 42 Z" fill="#F59E0B" />
            <path d="M 70 36 Q 100 20 130 36" stroke="#FBBF24" strokeWidth="2" fill="none" />
            <ellipse cx="100" cy="30" rx="4" ry="6" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
            <circle cx="100" cy="30" r="2" fill="#DC2626" />
            {/* Maroon Silk Shalya over body */}
            <path d="M 72 118 Q 84 132 94 152 L 100 148 Q 88 126 78 114 Z" fill="#991B1B" stroke="#7F1D1D" strokeWidth="1" />
            <line x1="74" y1="120" x2="98" y2="152" stroke="#FBBF24" strokeWidth="1.5" />
          </g>
        )}

        {outfit === 'kasavu' && (
          <g id="outfit-kasavu">
            {/* Kerala Kasavu Mundu with broad gold border */}
            <path d="M 68 136 C 58 148, 60 168, 74 174 C 88 178, 112 178, 126 174 C 140 168, 142 148, 132 136 Z" fill="#FEFDF8" stroke="#E2E8F0" strokeWidth="1.5" />
            <path d="M 70 164 C 86 172, 114 172, 130 164 L 126 174 C 112 178, 88 178, 74 174 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
            {/* Kasavu Neriyathu */}
            <path d="M 72 114 Q 84 130 94 152 L 100 148 Q 88 126 78 112 Z" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1" />
            {/* Sandalwood Chandanam on forehead */}
            <ellipse cx="100" cy="52" rx="6" ry="2" fill="#FEF08A" stroke="#CA8A04" strokeWidth="0.8" />
          </g>
        )}

        {outfit === 'fheta' && (
          <g id="outfit-fheta" className="drop-shadow-lg">
            {/* Peshwai Puneri Saffron Fheta */}
            <ellipse cx="100" cy="38" rx="40" ry="18" fill="#EA580C" stroke="#C2410C" strokeWidth="1.5" />
            <path d="M 62 42 Q 100 20 138 42 Q 100 28 62 42 Z" fill="#F97316" />
            <path d="M 126 36 L 144 26 L 138 48 Z" fill="#EA580C" stroke="#C2410C" strokeWidth="1" />
            <path d="M 70 42 Q 100 32 130 42" stroke="#FBBF24" strokeWidth="2" fill="none" />
            <ellipse cx="100" cy="30" rx="4" ry="5" fill="#FBBF24" />
            {/* Shivaji Chandrakor Crescent Tilak */}
            <path d="M 96 52 Q 100 56 104 52 Q 100 54 96 52 Z" fill="#DC2626" />
            <circle cx="100" cy="56" r="1" fill="#DC2626" />
          </g>
        )}

        {outfit === 'pagri' && (
          <g id="outfit-pagri" className="drop-shadow-lg">
            {/* Patiala Shahi Saffron Pagri with Turrha */}
            <ellipse cx="100" cy="38" rx="42" ry="20" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
            <path d="M 60 44 Q 100 16 140 44 Q 100 28 60 44 Z" fill="#FBBF24" />
            <path d="M 66 38 Q 100 12 134 38 Q 100 22 66 38 Z" fill="#FDE047" />
            <path d="M 96 16 L 104 16 L 108 6 L 92 6 Z" fill="#EA580C" stroke="#B45309" strokeWidth="1" />
            <line x1="92" y1="6" x2="108" y2="6" stroke="#FEF08A" strokeWidth="1.5" />
          </g>
        )}

        {outfit === 'kediyu' && (
          <g id="outfit-kediyu">
            {/* Gujarati Kutch Kediyu Frock Kurta with mirror-work */}
            <path d="M 66 122 C 54 136, 56 166, 72 174 C 88 178, 112 178, 128 174 C 144 166, 146 136, 134 122 Z" fill="#1E3A8A" stroke="#172554" strokeWidth="1.5" />
            <path d="M 76 130 L 124 130 L 132 168 L 68 168 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
            <circle cx="85" cy="148" r="3" fill="#FFFFFF" stroke="#FBBF24" strokeWidth="1" />
            <circle cx="100" cy="148" r="3" fill="#FFFFFF" stroke="#FBBF24" strokeWidth="1" />
            <circle cx="115" cy="148" r="3" fill="#FFFFFF" stroke="#FBBF24" strokeWidth="1" />
            <circle cx="92" cy="160" r="2.5" fill="#FFFFFF" stroke="#FBBF24" strokeWidth="1" />
            <circle cx="108" cy="160" r="2.5" fill="#FFFFFF" stroke="#FBBF24" strokeWidth="1" />
          </g>
        )}
      </svg>

      {/* Speech Bubble */}
      {message && (
        <div className="relative bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 shadow-md text-sm font-extrabold text-slate-800 dark:text-slate-100 max-w-xs animate-in fade-in slide-in-from-left-2 duration-300">
          <p>{message}</p>
          {/* Bubble Arrow */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white dark:border-r-slate-800 drop-shadow-[-2px_0_0_#e2e8f0] dark:drop-shadow-[-2px_0_0_#334155]" />
        </div>
      )}
    </div>
  );
}

