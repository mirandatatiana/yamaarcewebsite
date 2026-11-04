import { PAGES } from '../content';
import { EyeLogo } from './Icons';

export default function Header({ t, lang, page, go, setLang }) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <button className="brand" onClick={() => go('home')} aria-label="Yama Arce — inicio">
          <EyeLogo />
          <span className="brand-name">Yama Arce</span>
        </button>
        <nav className="nav">
          {PAGES.map((k) => (
            <button key={k} className="nav-link" onClick={() => go(k)} aria-current={page === k ? 'page' : undefined}>
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
          <button className="btn btn-xs" onClick={() => go('book')}>{t.bookCta}</button>
        </div>
      </div>
    </header>
  );
}
