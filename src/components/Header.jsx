import { useEffect, useState } from 'react';
import { PAGES } from '../content';
import { EyeLogo } from './Icons';

export default function Header({ t, lang, page, go, setLang }) {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const nav = (k) => {
    setOpen(false);
    go(k);
  };

  return (
    <header className={'site-header' + (open ? ' is-open' : '')}>
      <div className="wrap header-inner">
        <button className="brand" onClick={() => nav('home')} aria-label="Yama Arce — inicio">
          <EyeLogo />
          <span className="brand-name">Yama Arce</span>
        </button>
        <nav className="nav" id="site-nav" aria-label={t.menu}>
          {PAGES.map((k) => (
            <button key={k} className="nav-link" onClick={() => nav(k)} aria-current={page === k ? 'page' : undefined}>
              {t.nav[k]}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang" role="group" aria-label="Idioma / Language">
            {['es', 'en'].map((c) => (
              <button key={c} onClick={() => setLang(c)} aria-pressed={lang === c}>{c.toUpperCase()}</button>
            ))}
          </div>
          <button className="btn btn-xs header-cta" onClick={() => nav('book')}>{t.bookCta}</button>
          <button className="menu-btn" aria-expanded={open} aria-controls="site-nav"
            aria-label={open ? t.closeMenu : t.menu} onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
