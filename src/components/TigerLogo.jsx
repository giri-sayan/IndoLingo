import React, { useId } from 'react';

/**
 * TigerLogo - The official brand mascot mark of IndoLingo
 * Features Sheru, the friendly Royal Bengal Tiger cub with signature Indian Tricolor
 * (Saffron, White, Green) whiskers, Bengal forehead stripes, and cultural Tilak.
 */
export default function TigerLogo({ size = 40, className = '', withBadge = false }) {
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '');

  const headGradId = `tigerHeadGrad_${uid}`;
  const snoutGradId = `snoutGrad_${uid}`;
  const earPinkGradId = `earPinkGrad_${uid}`;
  const badgeBorderGradId = `badgeBorderGrad_${uid}`;
  const badgeBgGradId = `badgeBgGrad_${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox={withBadge ? '0 0 100 100' : '10 12 80 76'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none shrink-0 ${className}`}
      aria-label="IndoLingo Tiger Mascot Logo"
    >
      <defs>
        {/* Vibrant warm tiger cub fur gradient */}
        <linearGradient id={headGradId} x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FFA033" />
          <stop offset="45%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#E65100" />
        </linearGradient>

        {/* Soft creamy snout */}
        <linearGradient id={snoutGradId} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFF3D6" />
        </linearGradient>

        {/* Soft pink inner ears */}
        <linearGradient id={earPinkGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB3BA" />
          <stop offset="100%" stopColor="#FF6B8B" />
        </linearGradient>

        {withBadge && (
          <>
            <linearGradient id={badgeBorderGradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id={badgeBgGradId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E2E38" />
              <stop offset="100%" stopColor="#131F24" />
            </linearGradient>
          </>
        )}
      </defs>

      {/* Optional Badge Backdrop (for app icons) */}
      {withBadge && (
        <g>
          <rect
            x="3"
            y="3"
            width="94"
            height="94"
            rx="26"
            fill={`url(#${badgeBgGradId})`}
            stroke={`url(#${badgeBorderGradId})`}
            strokeWidth="3.5"
          />
        </g>
      )}

      {/* Main Tiger Cub Illustration */}
      <g>
        {/* 1. EARS */}
        {/* Left Ear */}
        <g>
          <ellipse cx="26" cy="24" rx="13" ry="12" transform="rotate(-20 26 24)" fill={`url(#${headGradId})`} />
          <path d="M 15 22 C 18 13, 31 12, 38 19 C 33 17, 20 17, 15 22 Z" fill="#1E293B" />
          <circle cx="23" cy="18" r="2.5" fill="#FFFFFF" />
          <ellipse cx="28" cy="26" rx="7.5" ry="6.5" transform="rotate(-20 28 26)" fill={`url(#${earPinkGradId})`} />
        </g>

        {/* Right Ear */}
        <g>
          <ellipse cx="74" cy="24" rx="13" ry="12" transform="rotate(20 74 24)" fill={`url(#${headGradId})`} />
          <path d="M 85 22 C 82 13, 69 12, 62 19 C 67 17, 80 17, 85 22 Z" fill="#1E293B" />
          <circle cx="77" cy="18" r="2.5" fill="#FFFFFF" />
          <ellipse cx="72" cy="26" rx="7.5" ry="6.5" transform="rotate(20 72 26)" fill={`url(#${earPinkGradId})`} />
        </g>

        {/* 2. CHUBBY HEAD BASE */}
        <ellipse cx="50" cy="52" rx="31" ry="26" fill={`url(#${headGradId})`} />
        <ellipse cx="50" cy="42" rx="28" ry="20" fill={`url(#${headGradId})`} />

        {/* 3. BENGAL TIGER FOREHEAD STRIPES */}
        <path d="M 48.5 26 L 51.5 26 L 51 34 L 49 34 Z" fill="#1E293B" />
        <path d="M 42 30 Q 50 32 58 30 Q 50 33 42 30 Z" fill="#1E293B" />
        <path d="M 37 34 Q 50 38 63 34 Q 50 36 37 34 Z" fill="#1E293B" />
        <path d="M 31 39 Q 37 41 39 45 Q 35 43 31 40 Z" fill="#1E293B" />
        <path d="M 69 39 Q 63 41 61 45 Q 65 43 69 40 Z" fill="#1E293B" />

        {/* 4. AUSPICIOUS TRADITIONAL TILAK (Red Tikka + Golden Bindi) */}
        <ellipse cx="50" cy="40" rx="2.4" ry="3.8" fill="#DC2626" />
        <circle cx="50" cy="44.5" r="1.3" fill="#FBBF24" />

        {/* 5. BIG FRIENDLY TIGER CUB EYES */}
        {/* Left Eye */}
        <ellipse cx="37" cy="50" rx="6.5" ry="7.5" fill="#1E293B" />
        <ellipse cx="37" cy="51" rx="5" ry="6" fill="#D97706" />
        <ellipse cx="37" cy="51.5" rx="3.8" ry="4.5" fill="#0F172A" />
        <circle cx="34.8" cy="48" r="2.4" fill="#FFFFFF" />
        <circle cx="39.2" cy="53" r="1.2" fill="#FFFFFF" />
        <path d="M 31 42.5 Q 37 39.5 43 42" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Right Eye */}
        <ellipse cx="63" cy="50" rx="6.5" ry="7.5" fill="#1E293B" />
        <ellipse cx="63" cy="51" rx="5" ry="6" fill="#D97706" />
        <ellipse cx="63" cy="51.5" rx="3.8" ry="4.5" fill="#0F172A" />
        <circle cx="60.8" cy="48" r="2.4" fill="#FFFFFF" />
        <circle cx="65.2" cy="53" r="1.2" fill="#FFFFFF" />
        <path d="M 57 42 Q 63 39.5 69 42.5" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* 6. ROSY BLUSHING CHEEKS */}
        <ellipse cx="30" cy="58" rx="5" ry="3.5" fill="#FDA4AF" opacity="0.75" />
        <ellipse cx="70" cy="58" rx="5" ry="3.5" fill="#FDA4AF" opacity="0.75" />

        {/* 7. SNOUT, NOSE & SMILE */}
        <ellipse cx="44.5" cy="62" rx="8.5" ry="7" fill={`url(#${snoutGradId})`} />
        <ellipse cx="55.5" cy="62" rx="8.5" ry="7" fill={`url(#${snoutGradId})`} />
        <path d="M 45 55 Q 50 56.5 55 55 L 56 61 L 44 61 Z" fill={`url(#${snoutGradId})`} />

        {/* Whisker Base Dots */}
        <circle cx="41" cy="61" r="0.9" fill="#94A3B8" />
        <circle cx="39" cy="63" r="0.9" fill="#94A3B8" />
        <circle cx="42" cy="64.5" r="0.9" fill="#94A3B8" />
        <circle cx="59" cy="61" r="0.9" fill="#94A3B8" />
        <circle cx="61" cy="63" r="0.9" fill="#94A3B8" />
        <circle cx="58" cy="64.5" r="0.9" fill="#94A3B8" />

        {/* 8. SIGNATURE INDIAN TRICOLOR WHISKERS */}
        {/* Left Side (Saffron, White, Green) */}
        <path d="M 36 58 Q 25 55 16 53" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 35 62 Q 23 62 14 62" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M 36 66 Q 25 69 17 71" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Right Side (Saffron, White, Green) */}
        <path d="M 64 58 Q 75 55 84 53" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 65 62 Q 77 62 86 62" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M 64 66 Q 75 69 83 71" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Pink Nose */}
        <path
          d="M 46.5 56.5 Q 50 54.5 53.5 56.5 Q 52 61.5 50 61.5 Q 48 61.5 46.5 56.5 Z"
          fill="#E11D48"
        />
        <circle cx="48.8" cy="57.2" r="0.8" fill="white" opacity="0.9" />

        {/* Philtrum & Sweet Cub Smile */}
        <path d="M 50 61.5 L 50 63.5" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M 44.5 63.5 Q 47.5 66.5 50 64 Q 52.5 66.5 55.5 63.5"
          stroke="#1E293B"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
