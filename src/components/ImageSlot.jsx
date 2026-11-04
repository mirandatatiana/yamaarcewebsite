import { IMAGES } from '../images';
import Drawing, { DRAWING_INK } from './Drawings';

// An image area from the design. Shows the configured image for `id`; while
// none is set, shows the ink `drawing` if given, else a soft placeholder.
export default function ImageSlot({ id, alt = '', placeholder, drawing, ink, className = '', style }) {
  const src = IMAGES[id];
  const paper = !src && drawing ? `slot-paper tint-${ink || DRAWING_INK[drawing]} ` : '';
  return (
    <div className={'slot ' + paper + className} style={style}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : drawing ? (
        <div className="slot-drawing"><Drawing name={drawing} ink={ink} /></div>
      ) : (
        <div className="slot-empty" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          {placeholder && <span>{placeholder}</span>}
        </div>
      )}
    </div>
  );
}
