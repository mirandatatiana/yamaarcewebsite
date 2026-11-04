import { useId } from 'react';

// Ballpoint-style line drawings in the spirit of Yama's sketchbook: one ink
// colour per drawing, slightly wobbly strokes and light hatching. Used as the
// art for image slots that don't have a photo or scan yet.

const r2 = (n) => Math.round(n * 10) / 10;

// Spiky starburst: alternating long and short rays around a small core.
function Burst({ cx, cy, r, n = 16 }) {
  const rays = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + 0.2;
    const len = i % 2 ? r * 0.5 : r * (0.85 + ((i * 7) % 5) * 0.04);
    rays.push(`M${r2(cx + Math.cos(a) * 3)} ${r2(cy + Math.sin(a) * 3)} L${r2(cx + Math.cos(a) * len)} ${r2(cy + Math.sin(a) * len)}`);
  }
  return (
    <g>
      <path d={rays.join(' ')} strokeWidth=".9" />
      <circle cx={cx} cy={cy} r={r * 0.16} strokeWidth=".6" strokeDasharray="1 1.4" />
    </g>
  );
}

// Faceted star: `points` outer tips, each split into a light and shaded half.
function FacetStar({ cx, cy, R, r, points = 8, rot = -Math.PI / 2 }) {
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const a = rot + (i / (points * 2)) * Math.PI * 2;
    const rad = i % 2 ? r : R;
    pts.push([r2(cx + Math.cos(a) * rad), r2(cy + Math.sin(a) * rad)]);
  }
  const facets = pts.filter((_, i) => i % 2 === 0).map(([x, y]) => `M${cx} ${cy} L${x} ${y}`).join(' ');
  return (
    <g>
      <path d={'M' + pts.map((p) => p.join(' ')).join(' L') + 'Z'} />
      <path d={facets} strokeWidth=".7" opacity=".8" />
    </g>
  );
}

function Wobble({ id }) {
  return (
    <filter id={id} x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="4" />
      <feDisplacementMap in="SourceGraphic" scale="2.2" />
    </filter>
  );
}

function Sheet({ viewBox, ink, label, children }) {
  const id = 'ink' + useId().replace(/:/g, '');
  return (
    <svg viewBox={viewBox} role="img" aria-label={label} className="drawing">
      <defs><Wobble id={id} /></defs>
      <g filter={`url(#${id})`} fill="none" stroke="currentColor" style={{ color: `var(--ink-${ink})` }} strokeWidth="1.3"
        strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}

// Eye whose lashes grow into stars.
export function StarEye({ ink = 'blue' }) {
  const lashes = [
    [[62, 112], [52, 66], [22, 44]],
    [[88, 100], [88, 58], [64, 30]],
    [[118, 95], [132, 56], [112, 22]],
    [[148, 97], [138, 58], [160, 30]],
    [[176, 106], [176, 70], [206, 46]],
  ];
  const spokes = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return `M${r2(118 + Math.cos(a) * 9)} ${r2(132 + Math.sin(a) * 9)} L${r2(118 + Math.cos(a) * 21)} ${r2(132 + Math.sin(a) * 21)}`;
  }).join(' ');
  return (
    <Sheet viewBox="0 0 240 200" ink={ink} label="Ojo con pestañas de estrellas">
      {lashes.map(([[x0, y0], [cx, cy], [x1, y1]], i) => (
        <g key={i}>
          <path d={`M${x0} ${y0} Q${cx} ${cy} ${x1} ${y1}`} strokeWidth="1.6" />
          <Burst cx={x1} cy={y1} r={17 + (i % 2) * 3} />
        </g>
      ))}
      <path d="M28 134 C70 88 168 82 214 116" strokeWidth="1.7" />
      <path d="M44 120 C92 84 162 86 202 106" strokeWidth=".9" />
      <path d="M28 134 C72 176 164 178 210 122" strokeWidth="1.5" />
      <path d="M60 172 C100 186 150 184 188 164" strokeWidth=".5" strokeDasharray="5 3" opacity=".6" />
      <circle cx="118" cy="132" r="24" fill={`var(--ink-${ink})`} fillOpacity=".85" />
      <path d={spokes} stroke="var(--paper)" strokeWidth="2.2" opacity=".8" />
      <circle cx="118" cy="132" r="8" fill={`var(--ink-${ink})`} />
      <path d="M70 114 L76 108 M84 108 L88 102 M150 104 L154 110 M164 108 L170 114" strokeWidth=".6" opacity=".6" />
    </Sheet>
  );
}

// Tulip glass on a fluted foot, with a shooting star rising from it.
export function StarChalice({ ink = 'green' }) {
  const hatch = Array.from({ length: 9 }, (_, i) => {
    const y = 108 + i * 6;
    return `M${56 + i * 0.4} ${y} L${62 + i * 0.6} ${y + 4} M${104 - i * 0.4} ${y} L${98 - i * 0.6} ${y + 4}`;
  }).join(' ');
  const flutes = [62, 70, 78, 86, 94].map((x) => `M80 222 L${x} 240`).join(' ');
  return (
    <Sheet viewBox="0 0 160 260" ink={ink} label="Copa con estrella fugaz">
      <path d="M40 28 L44 40 L56 42 L45 47 L48 60 L40 51 L30 58 L34 46 L24 40 L36 39 Z" />
      <path d="M48 52 C60 70 72 82 78 100 M54 46 C68 62 84 78 88 98" strokeWidth="1" />
      <path d="M58 62 L66 70 M62 58 L72 66 M66 76 L74 82" strokeWidth=".6" opacity=".7" />
      <ellipse cx="80" cy="100" rx="30" ry="7" />
      <path d="M50 100 C44 124 48 152 64 166 C72 173 88 173 96 166 C112 152 116 124 110 100" strokeWidth="1.5" />
      <path d={hatch} strokeWidth=".6" opacity=".7" />
      <path d="M72 172 L74 204 M88 172 L86 204" />
      <ellipse cx="80" cy="207" rx="9" ry="3.5" />
      <path d="M75 211 L74 222 M85 211 L86 222" />
      <path d="M52 240 C60 226 100 226 108 240" />
      <path d={flutes} strokeWidth=".8" />
      <path d="M52 240 Q58 246 64 240 Q70 246 76 240 Q82 246 88 240 Q94 246 100 240 Q106 246 108 240" />
    </Sheet>
  );
}

// Pointed-arch card with a radiant sword and an infinity loop.
export function ArchCard({ ink = 'green' }) {
  const rays = Array.from({ length: 32 }, (_, i) => {
    const a = (i / 32) * Math.PI * 2;
    const r0 = 26 + (i % 3) * 2, r1 = 34 + ((i * 5) % 4) * 2;
    return `M${r2(80 + Math.cos(a) * r0)} ${r2(98 + Math.sin(a) * r0)} L${r2(80 + Math.cos(a) * r1)} ${r2(98 + Math.sin(a) * r1)}`;
  }).join(' ');
  return (
    <Sheet viewBox="0 0 160 220" ink={ink} label="Carta con espada e infinito">
      <path d="M18 72 L80 14 L142 72 L142 206 L18 206 Z" strokeWidth="1.2" />
      <path d="M30 76 L80 30 L130 76 L130 194 L30 194 Z" strokeWidth="1.2" />
      <path d="M24 74 L80 22 L136 74 L136 200 L24 200 Z" strokeWidth="7" strokeDasharray="9 7" opacity=".4" strokeLinecap="butt" />
      <path d={rays} strokeWidth=".8" />
      <path d="M80 68 L86 126 L74 126 Z" />
      <path d="M80 74 L80 124" strokeWidth=".6" />
      <path d="M66 128 Q80 124 94 128" strokeWidth="1.6" />
      <path d="M80 130 L80 148 M76 134 L84 136 M76 139 L84 141 M76 144 L84 146" strokeWidth="1" />
      <circle cx="80" cy="151" r="3" />
      <path d="M80 172 C70 161 56 161 56 172 C56 183 70 183 80 172 C90 161 104 161 104 172 C104 183 90 183 80 172 Z" />
    </Sheet>
  );
}

const qPoint = ([x0, y0], [cx, cy], [x1, y1], t) => {
  const u = 1 - t;
  return [u * u * x0 + 2 * u * t * cx + t * t * x1, u * u * y0 + 2 * u * t * cy + t * t * y1];
};

// Fern of berry branches under a radiant star, rooted in a crescent moon.
export function StarFern({ ink = 'red' }) {
  const branches = [
    [[96, 118], [60, 110], [26, 128]],
    [[100, 132], [140, 104], [176, 96]],
    [[100, 150], [62, 142], [30, 160]],
    [[102, 164], [144, 136], [178, 128]],
    [[102, 184], [66, 176], [36, 192]],
    [[103, 196], [140, 172], [172, 162]],
  ];
  let berries = '';
  const tips = [];
  branches.forEach((b, bi) => {
    for (let i = 1; i < 10; i++) {
      const t = i / 10;
      const [x, y] = qPoint(...b, t);
      const [x2, y2] = qPoint(...b, t + 0.01);
      const len = Math.hypot(x2 - x, y2 - y) || 1;
      const nx = -(y2 - y) / len, ny = (x2 - x) / len;
      for (const s of [1, -1]) {
        berries += `M${r2(x)} ${r2(y)} L${r2(x + nx * 7 * s)} ${r2(y + ny * 7 * s)} `;
        tips.push([r2(x + nx * 9 * s), r2(y + ny * 9 * s), bi * 20 + i * 2 + s]);
      }
    }
  });
  return (
    <Sheet viewBox="0 0 200 290" ink={ink} label="Helecho con estrella y luna">
      <path d="M86 70 C60 40 40 46 26 30 M90 62 C88 34 98 20 92 6 M104 66 C120 40 138 44 150 26 M110 78 C136 72 150 82 172 74 M70 84 C46 92 32 86 14 98"
        strokeWidth="1" />
      <FacetStar cx={88} cy={72} R={34} r={12} />
      <path d="M94 104 C96 140 104 180 104 214 C104 236 82 248 84 230 C86 214 112 222 110 244" strokeWidth="1.6" />
      {branches.map((b, i) => (
        <path key={i} d={`M${b[0].join(' ')} Q${b[1].join(' ')} ${b[2].join(' ')}`} strokeWidth="1.3" />
      ))}
      <path d={berries} strokeWidth=".7" />
      {tips.map(([x, y, k]) => <circle key={k} cx={x} cy={y} r="2.3" strokeWidth=".9" />)}
      {branches.map(([, , [x, y]], i) => (
        <g key={i}>
          <path d={`M${x - 5} ${y + 5} C${x - 9} ${y - 2} ${x - 5} ${y - 8} ${x} ${y - 8} C${x + 5} ${y - 8} ${x + 9} ${y - 2} ${x + 5} ${y + 5} L${x + 4} ${y + 8} L${x - 4} ${y + 8} Z`} />
          <circle cx={x - 2.6} cy={y} r="2" fill="currentColor" stroke="none" />
          <circle cx={x + 2.6} cy={y} r="2" fill="currentColor" stroke="none" />
          <path d={`M${x} ${y + 3} l-.8 1.6 h1.6 Z M${x - 2} ${y + 6} v2 M${x} ${y + 6} v2 M${x + 2} ${y + 6} v2`} strokeWidth=".7" />
        </g>
      ))}
      <path d="M58 250 C78 284 142 286 170 236 C146 266 96 272 58 250 Z" strokeWidth="1.4" />
      <path d="M80 262 L86 270 M100 268 L104 276 M122 268 L124 276 M142 260 L146 266" strokeWidth=".6" opacity=".7" />
    </Sheet>
  );
}

// A leaf with a feathered edge and an eye inside, base at 0 0, tip up.
function EyeLeaf({ x, y, rot, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M0 0 C-22 -16 -20 -50 6 -66 L10 -58 L8 -55 L15 -52 L12 -48 L19 -45 L15 -41 L21 -37 L17 -33 L22 -28 L18 -24 L21 -18 C17 -9 9 -3 0 0 Z"
        fill="var(--paper)" strokeWidth="2.2" />
      <path d="M0 0 C-22 -16 -20 -50 6 -66 L10 -58 L8 -55 L15 -52 L12 -48 L19 -45 L15 -41 L21 -37 L17 -33 L22 -28 L18 -24 L21 -18 C17 -9 9 -3 0 0 Z"
        fill="currentColor" fillOpacity=".12" stroke="none" />
      <path d="M-3 -6 C-14 -20 -15 -40 -4 -54" strokeWidth="3" opacity=".35" />
      <path d="M-11 -22 C-4 -38 8 -42 14 -36" strokeWidth="1.8" />
      <path d="M-11 -22 C-2 -18 8 -22 14 -36" strokeWidth=".9" />
      <ellipse cx="3" cy="-30" rx="3.6" ry="5.4" transform="rotate(30 3 -30)" fill="currentColor" stroke="none" />
      <path d="M0 2 L-6 -2 M0 2 L-5 6 M0 2 L5 6 M0 2 L6 -1 M0 2 L0 8" strokeWidth="1.1" />
    </g>
  );
}

// Thick painted stem with a pale core, as on the canvas banner.
function Tube({ d }) {
  return (
    <g>
      <path d={d} strokeWidth="6" />
      <path d={d} strokeWidth="2.2" stroke="var(--paper)" opacity=".85" />
    </g>
  );
}

// Lobed frond along a quadratic midrib; lobes lean toward the tip.
function Frond({ from, ctrl, to, side = 1, n = 6 }) {
  let lobes = '';
  for (let i = 0; i < n; i++) {
    const t = 0.15 + (i / n) * 0.8;
    const [x, y] = qPoint(from, ctrl, to, t);
    const [x2, y2] = qPoint(from, ctrl, to, t + 0.02);
    const len = Math.hypot(x2 - x, y2 - y) || 1;
    const ux = (x2 - x) / len, uy = (y2 - y) / len;
    const L = 22 * (1 - t * 0.7);
    const ex = x - uy * L * side + ux * L * 0.6, ey = y + ux * L * side + uy * L * 0.6;
    lobes += `M${r2(x)} ${r2(y)} Q${r2(x - uy * L * 0.6 * side)} ${r2(y + ux * L * 0.6 * side)} ${r2(ex)} ${r2(ey)} `;
  }
  return (
    <g>
      <path d={`M${from.join(' ')} Q${ctrl.join(' ')} ${to.join(' ')}`} strokeWidth="4" />
      <path d={lobes} strokeWidth="6" />
    </g>
  );
}

const twinkle = (x, y, r) => `M${x} ${y - r} Q${x} ${y} ${x + r * 0.6} ${y} Q${x} ${y} ${x} ${y + r} Q${x} ${y} ${x - r * 0.6} ${y} Q${x} ${y} ${x} ${y - r} Z`;

// Eye-leaves on long stems that loop into a knot, with fronds and sparkles.
export function EyeVine({ ink = 'green' }) {
  return (
    <Sheet viewBox="0 0 200 250" ink={ink} label="Hojas con ojos y tallos enlazados">
      <Frond from={[118, 200]} ctrl={[160, 170]} to={[190, 112]} side={-1} />
      <Frond from={[96, 206]} ctrl={[50, 214]} to={[10, 196]} side={-1} />
      <Tube d="M42 128 C54 170 98 150 120 190 C136 222 96 236 86 214 C76 192 140 196 150 220 C158 238 120 244 104 230" />
      <Tube d="M100 80 C82 112 132 130 118 170 C110 196 120 214 142 210" />
      <Tube d="M152 58 C136 98 162 130 136 170 C122 192 96 200 100 222" />
      <EyeLeaf x={42} y={128} rot={-28} s={1.05} />
      <EyeLeaf x={100} y={80} rot={14} s={0.95} />
      <EyeLeaf x={152} y={58} rot={18} s={0.9} />
      <path d={twinkle(20, 34, 8) + twinkle(184, 24, 6) + twinkle(64, 50, 4)} fill="currentColor" stroke="none" />
    </Sheet>
  );
}

// One large eye-leaf on a curling stem, between two fronds.
export function EyeSprig({ ink = 'green' }) {
  return (
    <Sheet viewBox="0 0 160 210" ink={ink} label="Hoja con ojo y helechos">
      <Frond from={[72, 178]} ctrl={[34, 170]} to={[8, 128]} side={1} />
      <Frond from={[86, 184]} ctrl={[124, 176]} to={[152, 140]} side={-1} />
      <Tube d="M80 96 C62 128 106 144 88 170 C78 186 56 192 66 204 C76 214 100 200 82 184" />
      <EyeLeaf x={80} y={96} rot={6} s={1.35} />
      <path d={twinkle(26, 30, 8) + twinkle(140, 52, 6) + twinkle(126, 20, 3.5)} fill="currentColor" stroke="none" />
    </Sheet>
  );
}

const PETAL = 'M0 0 C-8 -10 -7 -24 0 -32 C7 -24 8 -10 0 0 Z';

// A sun whose rays are leaves, with an open eye at its centre.
export function SunEye({ ink = 'gold' }) {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    const r = i % 2 ? 44 : 48;
    return { x: r2(100 + Math.cos(a) * r), y: r2(100 + Math.sin(a) * r), deg: r2((a * 180) / Math.PI + 90), s: i % 2 ? 0.75 : 1 };
  });
  return (
    <Sheet viewBox="0 0 200 200" ink={ink} label="Sol de hojas con un ojo">
      {rays.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${p.deg}) scale(${p.s})`}>
          <path d={PETAL} fill="currentColor" fillOpacity=".14" strokeWidth="2" />
          <path d="M0 -4 L0 -24" strokeWidth=".9" />
        </g>
      ))}
      <circle cx="100" cy="100" r="38" fill="var(--paper)" strokeWidth="2.4" />
      <circle cx="100" cy="100" r="32" strokeWidth=".8" strokeDasharray="2 3" />
      <path d="M74 102 C86 84 114 84 126 102" strokeWidth="2" />
      <path d="M74 102 C86 116 114 116 126 102" strokeWidth="1.4" />
      <circle cx="100" cy="101" r="8" fill="currentColor" stroke="none" />
      <circle cx="97" cy="98" r="2" fill="var(--paper)" stroke="none" />
      <path d={twinkle(24, 26, 8) + twinkle(178, 176, 7) + twinkle(176, 30, 4)} fill="currentColor" stroke="none" />
    </Sheet>
  );
}

// A round vine wreath with leaves, crowned by two eye-leaves.
export function VineWreath({ ink = 'green' }) {
  const leaves = Array.from({ length: 14 }, (_, i) => {
    const a = Math.PI * 0.62 + (i / 14) * Math.PI * 1.76;
    const out = i % 2 ? 1 : -1;
    return { x: r2(100 + Math.cos(a) * 66), y: r2(104 + Math.sin(a) * 66), deg: r2((a * 180) / Math.PI + 90 + out * 50) };
  });
  return (
    <Sheet viewBox="0 -24 200 226" ink={ink} label="Corona de hojas con ojos">
      <Tube d="M84 40 C48 48 32 80 34 108 C36 146 66 170 100 170 C134 170 164 146 166 108 C168 80 152 48 116 40" />
      {leaves.map((p, i) => (
        <path key={i} d={PETAL} transform={`translate(${p.x} ${p.y}) rotate(${p.deg}) scale(.62)`}
          fill="currentColor" fillOpacity=".3" strokeWidth="2.4" />
      ))}
      <Tube d="M92 172 C80 186 98 196 104 184 C108 176 96 176 100 194" />
      <EyeLeaf x={86} y={40} rot={-34} s={0.85} />
      <EyeLeaf x={114} y={40} rot={30} s={0.85} />
      <path d={twinkle(100, 104, 12) + twinkle(76, 128, 4) + twinkle(126, 84, 5)} fill="currentColor" stroke="none" />
    </Sheet>
  );
}

export const DRAWINGS = {
  eye: StarEye, chalice: StarChalice, arch: ArchCard, fern: StarFern,
  vine: EyeVine, sprig: EyeSprig, sun: SunEye, wreath: VineWreath,
};

// Default ink of each drawing, used to tint the paper behind it.
export const DRAWING_INK = {
  eye: 'blue', chalice: 'green', arch: 'green', fern: 'red',
  vine: 'green', sprig: 'green', sun: 'gold', wreath: 'green',
};

export default function Drawing({ name, ink }) {
  const D = DRAWINGS[name];
  return D ? <D ink={ink} /> : null;
}
