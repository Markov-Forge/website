// The Markov Forge icon (public/brand/markovforge-icon.svg) redrawn without its
// background tile, with transitions that flow and states that pulse.
// Geometry is copied from the source SVG so it stays on-brand.

const states = [
  { id: "s0", x: 170, y: 255, r: 28, label: "observe", lx: 98, ly: 330 },
  { id: "s1", x: 256, y: 140, r: 32, label: "reason", lx: 256, ly: 52 },
  { id: "s2", x: 342, y: 255, r: 28, label: "act", lx: 414, ly: 330 },
];

export function ForgeEmblem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="40 20 432 400"
      className={className}
      role="img"
      aria-label="Markov Forge emblem: a three-state Markov chain glowing above an anvil"
    >
      <defs>
        <linearGradient id="fe-flame" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF3B00" />
          <stop offset="50%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#FFB800" />
        </linearGradient>
        <linearGradient id="fe-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFC837" />
          <stop offset="100%" stopColor="#FF8008" />
        </linearGradient>
        <linearGradient id="fe-steel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <filter id="fe-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="fe-haze" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="28" />
        </filter>
        {/* Transition paths, reused for the travelling "token" particles. */}
        <path id="fe-t01" d="M 175 255 C 160 185, 215 140, 256 140" />
        <path id="fe-t12" d="M 256 140 C 297 140, 352 185, 337 255" />
        <path id="fe-t20" d="M 337 255 C 310 325, 202 325, 175 255" />
      </defs>

      {/* Ambient forge heat */}
      <circle cx="256" cy="260" r="150" fill="#FF5E00" opacity="0.14" filter="url(#fe-haze)" className="animate-pulse-soft origin-center [transform-box:fill-box]" />

      {/* Anvil */}
      <g transform="translate(0, 10)">
        <path d="M 146 376 L 366 376 L 340 336 L 172 336 Z" fill="url(#fe-steel)" stroke="#475569" strokeWidth="1.5" />
        <path d="M 172 336 L 340 336 L 316 260 L 196 260 Z" fill="#161F30" stroke="#334155" strokeWidth="1.5" />
        <path d="M 216 336 L 256 260 L 296 336 Z" fill="url(#fe-steel)" opacity="0.5" />
      </g>

      {/* Transitions */}
      <g filter="url(#fe-glow)" fill="none" stroke="url(#fe-flame)" strokeWidth="5" strokeLinecap="round">
        <use href="#fe-t01" strokeDasharray="6 4" className="animate-flow" />
        <use href="#fe-t12" strokeDasharray="14 6" className="animate-flow" />
        <use href="#fe-t20" strokeDasharray="14 6" className="animate-flow" />
        <path d="M 244 135 C 235 95, 277 95, 268 135" stroke="#FFD000" strokeWidth="3.5" />
      </g>
      <polygon points="256,134 268,140 256,146" fill="#FFB800" />
      <polygon points="334,260 342,248 330,248" fill="#FFB800" transform="rotate(15, 337, 255)" />
      <polygon points="175,250 183,262 171,262" fill="#FF7A00" transform="rotate(-20, 175, 255)" />

      {/* Tokens travelling the chain */}
      {[
        { path: "#fe-t01", dur: "2.4s", begin: "0s" },
        { path: "#fe-t12", dur: "2.4s", begin: "0.8s" },
        { path: "#fe-t20", dur: "2.4s", begin: "1.6s" },
      ].map((t) => (
        <circle key={t.path} r="4.5" fill="#FFF7ED" filter="url(#fe-glow)">
          <animateMotion dur={t.dur} begin={t.begin} repeatCount="indefinite">
            <mpath href={t.path} />
          </animateMotion>
        </circle>
      ))}

      {/* States */}
      {states.map((s) => (
        <g key={s.id} transform={`translate(${s.x}, ${s.y})`}>
          <circle r={s.r} fill={s.id === "s1" ? "#150B05" : "#0E1626"} stroke={s.id === "s1" ? "url(#fe-gold)" : "url(#fe-flame)"} strokeWidth="4" filter="url(#fe-glow)" />
          <circle r={s.r * 0.57} fill={s.id === "s1" ? "url(#fe-flame)" : "url(#fe-gold)"} className="animate-pulse-soft origin-center [transform-box:fill-box]" />
          <circle r={s.r * 0.22} fill="#FFFFFF" />
        </g>
      ))}

      {/* Core */}
      <g transform="translate(256, 255)">
        <polygon points="0,-24 21,12 -21,12" fill="url(#fe-flame)" opacity="0.85" filter="url(#fe-glow)" />
        <circle r="8" fill="#FFFFFF" filter="url(#fe-glow)" />
      </g>

      {/* Sparks */}
      <g filter="url(#fe-glow)">
        <circle cx="210" cy="98" r="3" fill="#FFB800" className="animate-float" />
        <circle cx="304" cy="92" r="2.5" fill="#FF7A00" className="animate-float [animation-delay:1.2s]" />
        <circle cx="160" cy="120" r="2" fill="#FF9900" className="animate-float [animation-delay:2.4s]" />
        <circle cx="350" cy="115" r="2.5" fill="#FFC837" className="animate-float [animation-delay:3.1s]" />
      </g>

      {/* State labels */}
      {states.map((s) => (
        <text
          key={s.label}
          x={s.lx}
          y={s.ly}
          textAnchor="middle"
          className="fill-slate-400 font-mono text-[13px] tracking-[0.2em] uppercase"
        >
          {s.label}
        </text>
      ))}
    </svg>
  );
}
