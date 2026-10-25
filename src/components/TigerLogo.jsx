import React from 'react';

/**
 * TigerLogo - The official brand mark of IndoLingo
 * Features the Royal Bengal Tiger cub with signature Indian Tricolor
 * (Saffron, White, Green) cheek hairs, Bengal stripes, and cultural Tilak.
 */
export default function TigerLogo({ size = 42, className = '', withBadge = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-transform duration-300 ${className}`}
      aria-label="IndoLingo Tiger Logo"
    >
      <defs>
        {/* Warm Royal Bengal Tiger fur gradient */}
        <linearGradient id="tigerHeadGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>

        {/* Creamy snout & chin */}
        <linearGradient id="snoutGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>

        {/* Pink inner ear & tongue */}
        <linearGradient id="earPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>

        {/* Indian Tricolor Gradients for Cheek Hairs */}
        {/* 1. Saffron (Top cheek hair) */}
        <linearGradient id="saffronHairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="100%" stopColor="#FF671F" />
        </linearGradient>

        {/* 2. White (Middle cheek hair) */}
        <linearGradient id="whiteHairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>

        {/* 3. Green (Bottom cheek hair) */}
        <linearGradient id="greenHairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#046A38" />
        </linearGradient>

        {/* Badge Background & Border Gradients */}
        <linearGradient id="badgeBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF671F" />
          <stop offset="50%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        <linearGradient id="badgeBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>

        {/* Soft Shadow for cheek hair contrast on light backgrounds */}
        <filter id="cheekShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#0F172A" floodOpacity="0.25" />
        </filter>

        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#EA580C" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Optional Badge Backdrop */}
      {withBadge && (
        <g>
          {/* Outer Squircle Ring with Tricolor / Golden Gradient */}
          <rect
            x="2.5"
            y="2.5"
            width="95"
            height="95"
            rx="26"
            fill="url(#badgeBgGrad)"
            stroke="url(#badgeBorderGrad)"
            strokeWidth="3.5"
            className="drop-shadow-sm"
          />
          {/* Subtle inner ambient ring */}
          <rect
            x="5.5"
            y="5.5"
            width="89"
            height="89"
            rx="23"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            opacity="0.8"
          />
        </g>
      )}

      {/* Main Tiger Illustration Group */}
      <g filter={withBadge ? undefined : 'url(#logoGlow)'}>
        {/* 1. EARS (Behind head) */}
        {/* Left Ear */}
        <g>
          <ellipse cx="26" cy="25" rx="13" ry="12" transform="rotate(-20 26 25)" fill="url(#tigerHeadGrad)" />
          {/* Black outer rim */}
          <path d="M 15 23 C 18 14, 31 13, 38 20 C 33 18, 20 18, 15 23 Z" fill="#1E293B" />
          {/* Iconic Tiger Ocelli (White back-ear spot) */}
          <circle cx="23" cy="19" r="2.4" fill="#FFFFFF" />
          {/* Pink inner ear */}
          <ellipse cx="28" cy="27" rx="7.5" ry="6.5" transform="rotate(-20 28 27)" fill="url(#earPinkGrad)" />
        </g>

        {/* Right Ear */}
        <g>
          <ellipse cx="74" cy="25" rx="13" ry="12" transform="rotate(20 74 25)" fill="url(#tigerHeadGrad)" />
          {/* Black outer rim */}
          <path d="M 85 23 C 82 14, 69 13, 62 20 C 67 18, 80 18, 85 23 Z" fill="#1E293B" />
          {/* Iconic Tiger Ocelli (White back-ear spot) */}
          <circle cx="77" cy="19" r="2.4" fill="#FFFFFF" />
          {/* Pink inner ear */}
          <ellipse cx="72" cy="27" rx="7.5" ry="6.5" transform="rotate(20 72 27)" fill="url(#earPinkGrad)" />
        </g>

        {/* 2. CHUBBY HEAD BASE */}
        <ellipse cx="50" cy="53" rx="30" ry="26" fill="url(#tigerHeadGrad)" />
        {/* Upper forehead fullness */}
        <ellipse cx="50" cy="43" rx="27" ry="20" fill="url(#tigerHeadGrad)" />

        {/* 3. SIGNATURE INDIAN TRICOLOR CHEEK HAIRS */}
        {/* LEFT CHEEK TRICOLOR HAIRS */}
        <g filter="url(#cheekShadow)">
          {/* Top Hair: SAFFRON (#FF671F / #FF9933) */}
          <path
            d="M 27 46 C 18 44, 9 46, 7 49 C 12 52, 20 53, 26 52 Z"
            fill="url(#saffronHairGrad)"
            stroke="#EA580C"
            strokeWidth="0.5"
          />
          <path d="M 12 49 Q 19 50 25 51 Q 19 52 10 50 Z" fill="#C2410C" opacity="0.35" />

          {/* Middle Hair: WHITE (#FFFFFF) with crisp boundary stroke */}
          <path
            d="M 26 52 C 16 52, 6 55, 5 59 C 11 62, 19 61, 25 60 Z"
            fill="url(#whiteHairGrad)"
            stroke="#CBD5E1"
            strokeWidth="0.8"
          />
          <path d="M 11 58 Q 18 59 24 59.5 Q 17 61 9 60 Z" fill="#94A3B8" opacity="0.25" />

          {/* Bottom Hair: INDIA GREEN (#16A34A / #046A38) */}
          <path
            d="M 25 60 C 16 61, 8 66, 9 71 C 15 70, 22 67, 27 65 Z"
            fill="url(#greenHairGrad)"
            stroke="#065F46"
            strokeWidth="0.5"
          />
          <path d="M 12 68 Q 19 67 25 65 Q 18 69 11 70 Z" fill="#064E3B" opacity="0.35" />
        </g>

        {/* RIGHT CHEEK TRICOLOR HAIRS */}
        <g filter="url(#cheekShadow)">
          {/* Top Hair: SAFFRON (#FF671F / #FF9933) */}
          <path
            d="M 73 46 C 82 44, 91 46, 93 49 C 88 52, 80 53, 74 52 Z"
            fill="url(#saffronHairGrad)"
            stroke="#EA580C"
            strokeWidth="0.5"
          />
          <path d="M 88 49 Q 81 50 75 51 Q 81 52 90 50 Z" fill="#C2410C" opacity="0.35" />

          {/* Middle Hair: WHITE (#FFFFFF) with crisp boundary stroke */}
          <path
            d="M 74 52 C 84 52, 94 55, 95 59 C 89 62, 81 61, 75 60 Z"
            fill="url(#whiteHairGrad)"
            stroke="#CBD5E1"
            strokeWidth="0.8"
          />
          <path d="M 89 58 Q 82 59 76 59.5 Q 83 61 91 60 Z" fill="#94A3B8" opacity="0.25" />

          {/* Bottom Hair: INDIA GREEN (#16A34A / #046A38) */}
          <path
            d="M 75 60 C 84 61, 92 66, 91 71 C 85 70, 78 67, 73 65 Z"
            fill="url(#greenHairGrad)"
            stroke="#065F46"
            strokeWidth="0.5"
          />
          <path d="M 88 68 Q 81 67 75 65 Q 82 69 89 70 Z" fill="#064E3B" opacity="0.35" />
        </g>

        {/* 4. BENGAL TIGER FOREHEAD STRIPES */}
        {/* Central Crown Stripe */}
        <path d="M 48.5 28 L 51.5 28 L 51 36 L 49 36 Z" fill="#1E293B" />
        {/* Top Brow Stripe */}
        <path d="M 42 32 Q 50 34 58 32 Q 50 35 42 32 Z" fill="#1E293B" />
        {/* Mid Forehead Chevron */}
        <path d="M 37 36 Q 50 40 63 36 Q 50 38 37 36 Z" fill="#1E293B" />
        {/* Temple Stripes */}
        <path d="M 32 41 Q 38 43 40 47 Q 36 45 32 42 Z" fill="#1E293B" />
        <path d="M 68 41 Q 62 43 60 47 Q 64 45 68 42 Z" fill="#1E293B" />

        {/* 5. AUSPICIOUS TRADITIONAL TILAK (Red Tikka + Golden Bindi) */}
        <ellipse cx="50" cy="42" rx="2.2" ry="3.5" fill="#DC2626" />
        <circle cx="50" cy="46" r="1.2" fill="#FBBF24" />

        {/* 6. BIG FRIENDLY TIGER CUB EYES */}
        {/* Left Eye */}
        <ellipse cx="37" cy="51" rx="6.5" ry="7.5" fill="#1E293B" />
        <ellipse cx="37" cy="52" rx="5" ry="6" fill="#D97706" />
        <ellipse cx="37" cy="52.5" rx="3.8" ry="4.5" fill="#0F172A" />
        <circle cx="34.8" cy="49" r="2.2" fill="#FFFFFF" />
        <circle cx="39.2" cy="54" r="1.1" fill="#FFFFFF" />
        <path d="M 31 43.5 Q 37 40.5 43 43" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Right Eye */}
        <ellipse cx="63" cy="51" rx="6.5" ry="7.5" fill="#1E293B" />
        <ellipse cx="63" cy="52" rx="5" ry="6" fill="#D97706" />
        <ellipse cx="63" cy="52.5" rx="3.8" ry="4.5" fill="#0F172A" />
        <circle cx="60.8" cy="49" r="2.2" fill="#FFFFFF" />
        <circle cx="65.2" cy="54" r="1.1" fill="#FFFFFF" />
        <path d="M 57 43 Q 63 40.5 69 43.5" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* 7. ROSY BLUSHING CHEEKS */}
        <ellipse cx="31" cy="59" rx="5" ry="3.5" fill="#FDA4AF" opacity="0.65" />
        <ellipse cx="69" cy="59" rx="5" ry="3.5" fill="#FDA4AF" opacity="0.65" />

        {/* 8. SNOUT, NOSE & SMILE */}
        <ellipse cx="44.5" cy="63" rx="8.5" ry="7" fill="url(#snoutGrad)" />
        <ellipse cx="55.5" cy="63" rx="8.5" ry="7" fill="url(#snoutGrad)" />
        <path d="M 45 56 Q 50 57.5 55 56 L 56 62 L 44 62 Z" fill="url(#snoutGrad)" />

        {/* Whisker Base Dots */}
        <circle cx="41" cy="62" r="0.8" fill="#94A3B8" />
        <circle cx="39" cy="64" r="0.8" fill="#94A3B8" />
        <circle cx="42" cy="65.5" r="0.8" fill="#94A3B8" />
        <circle cx="59" cy="62" r="0.8" fill="#94A3B8" />
        <circle cx="61" cy="64" r="0.8" fill="#94A3B8" />
        <circle cx="58" cy="65.5" r="0.8" fill="#94A3B8" />

        {/* TRICOLOR WHISKER HAIRS */}
        {/* Left Side Whiskers (Saffron, White, Green) */}
        <path d="M 36 59 Q 27 57 18 55" stroke="#FF671F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <path d="M 35 63 Q 25 63 16 63" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" fill="none" filter="drop-shadow(0 0.5px 0.8px rgba(0,0,0,0.4))" />
        <path d="M 36 67 Q 27 70 19 72" stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" fill="none" />

        {/* Right Side Whiskers (Saffron, White, Green) */}
        <path d="M 64 59 Q 73 57 82 55" stroke="#FF671F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <path d="M 65 63 Q 75 63 84 63" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" fill="none" filter="drop-shadow(0 0.5px 0.8px rgba(0,0,0,0.4))" />
        <path d="M 64 67 Q 73 70 81 72" stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" fill="none" />

        {/* Pink Nose */}
        <path
          d="M 46.5 57.5 Q 50 55.5 53.5 57.5 Q 52 62.5 50 62.5 Q 48 62.5 46.5 57.5 Z"
          fill="#E11D48"
        />
        <circle cx="48.8" cy="58.2" r="0.8" fill="white" opacity="0.8" />

        {/* Philtrum & Sweet Cub Smile */}
        <path d="M 50 62.5 L 50 64.5" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M 44.5 64.5 Q 47.5 67.5 50 65 Q 52.5 67.5 55.5 64.5"
          stroke="#1E293B"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
