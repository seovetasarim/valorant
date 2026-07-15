import Link from 'next/link'

const WORD = 'ValoCross'

/**
 * FPS HUD reticle — open strokes only, no plate.
 * Reads as aim/crosshair without copying Riot's V mark.
 */
function LogoMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="logo-mark h-8 w-8 shrink-0 md:h-9 md:w-9"
      aria-hidden
      fill="none"
    >
      <defs>
        <linearGradient
          id="vcGrad"
          x1="4"
          y1="4"
          x2="44"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ff3e48" />
          <stop offset="0.5" stopColor="#ff8a40" />
          <stop offset="1" stopColor="#dfff00" />
        </linearGradient>
        <filter id="vcSoft" x="-45%" y="-45%" width="190%" height="190%">
          <feGaussianBlur stdDeviation="1.05" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g
        stroke="url(#vcGrad)"
        filter="url(#vcSoft)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer tactical ring with scope gaps */}
        <circle
          cx="24"
          cy="24"
          r="18"
          strokeWidth="1.8"
          strokeDasharray="10 5.5 10 5.5"
        />

        {/* Corner brackets — HUD feel */}
        <path d="M10 16 V11 H15" strokeWidth="2" />
        <path d="M38 16 V11 H33" strokeWidth="2" />
        <path d="M10 32 V37 H15" strokeWidth="2" />
        <path d="M38 32 V37 H33" strokeWidth="2" />

        {/* Crosshair arms (gap in center) */}
        <path d="M24 8 V16.5" strokeWidth="2.4" />
        <path d="M24 31.5 V40" strokeWidth="2.4" />
        <path d="M8 24 H16.5" strokeWidth="2.4" />
        <path d="M31.5 24 H40" strokeWidth="2.4" />
      </g>

      {/* Center pip */}
      <circle
        cx="24"
        cy="24"
        r="2.4"
        fill="url(#vcGrad)"
        filter="url(#vcSoft)"
      />
      {/* Tiny inner hole for optic look */}
      <circle cx="24" cy="24" r="0.9" fill="#151929" />
    </svg>
  )
}

const Logo = () => {
  return (
    <Link
      href={'/'}
      className="logo-brand my-4 ml-2 mr-2 flex items-center gap-2.5 md:ml-4"
      aria-label="ValoCross ana sayfa"
    >
      <LogoMark />
      <span className="logo-neon hidden md:inline" aria-hidden="true">
        {WORD.split('').map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="logo-neon-letter"
            style={{ animationDelay: `${i * -0.22}s` }}
          >
            {char}
          </span>
        ))}
      </span>
    </Link>
  )
}

export default Logo
