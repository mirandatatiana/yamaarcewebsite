const SPARKLE = 'M12 1 L13.4 10.6 L23 12 L13.4 13.4 L12 23 L10.6 13.4 L1 12 L10.6 10.6Z';

export function EyeLogo({ width = 34, height = 20, strokeWidth = 1.3 }) {
  return (
    <svg viewBox="0 0 40 24" width={width} height={height} fill="none" stroke="var(--rose)"
      strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
      <path d="M2 12 C10 2 30 2 38 12 C30 22 10 22 2 12 Z" />
      <circle cx="20" cy="12" r="5" />
      <circle cx="20" cy="12" r="1.6" fill="var(--rose)" />
    </svg>
  );
}

export function Sparkle({ size = 14, fill = 'currentColor', style }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} style={style} aria-hidden="true">
      <path d={SPARKLE} />
    </svg>
  );
}

export function Play({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="var(--terra)" aria-hidden="true">
      <path d="M8 5 L19 12 L8 19Z" />
    </svg>
  );
}

export function Calendar() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10 H21 M8 3 V7 M16 3 V7" />
    </svg>
  );
}

export function Lock() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11 V8 a4 4 0 0 1 8 0 V11" />
    </svg>
  );
}

export function Wave() {
  return (
    <svg viewBox="0 0 60 24" width="60" height="24" fill="none" stroke="var(--sage)" strokeWidth="1" aria-hidden="true">
      <path d="M2 20 C14 20 18 4 30 4 C42 4 46 20 58 20" />
      <circle cx="30" cy="4" r="2.5" fill="var(--sage)" />
    </svg>
  );
}

// Service icons: eye (tarot), star (akashic), sun (solar), flower (floral).
export function ServiceIcon({ icon, size = 26, strokeWidth = 1.1 }) {
  const common = { viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: 'currentColor', strokeWidth, 'aria-hidden': true };
  if (icon === 'eye') {
    return (
      <svg {...common} strokeLinecap="round">
        <path d="M2 12 C6 6 18 6 22 12 C18 18 6 18 2 12 Z" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 4.5 V2.5 M7 5.8 L6 4 M17 5.8 L18 4" />
      </svg>
    );
  }
  if (icon === 'star') {
    return (
      <svg {...common} strokeLinejoin="round">
        <path d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4Z" />
        <circle cx="19" cy="5" r="1" />
        <circle cx="5" cy="19" r=".8" />
      </svg>
    );
  }
  if (icon === 'sun') {
    return (
      <svg {...common} strokeLinecap="round">
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2 V4.5 M12 19.5 V22 M2 12 H4.5 M19.5 12 H22 M4.9 4.9 L6.7 6.7 M17.3 17.3 L19.1 19.1 M4.9 19.1 L6.7 17.3 M17.3 6.7 L19.1 4.9" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="6.5" r="3.5" />
      <circle cx="17.2" cy="10.3" r="3.5" />
      <circle cx="15.2" cy="16.4" r="3.5" />
      <circle cx="8.8" cy="16.4" r="3.5" />
      <circle cx="6.8" cy="10.3" r="3.5" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

// Rotating "guía intuitiva" badge that overlaps the hero art.
export function SpinBadge() {
  return (
    <svg viewBox="0 0 200 200" className="spin-badge" aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="var(--cream)" stroke="rgba(58,31,31,.2)" />
      <g className="spin-badge-ring">
        <defs>
          <path id="badge-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text fill="var(--ink)" className="spin-badge-text">
          <textPath href="#badge-circle" textLength="460">GUÍA INTUITIVA ✦ OJO EN YAMAS ✦ SESIONES ONLINE ✦</textPath>
        </text>
      </g>
      <path d="M70 100 C82 84 118 84 130 100 C118 116 82 116 70 100 Z" fill="none" stroke="var(--rose)" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="8" fill="none" stroke="var(--rose)" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="2.5" fill="var(--rose)" />
    </svg>
  );
}
