import { CONTACT_EMAIL, INSTAGRAM, PAGES } from '../content';
import { EyeLogo, Sparkle } from './Icons';

export default function Footer({ t, go }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-name">
              <EyeLogo width={44} height={26} strokeWidth={1.2} />
              <span className="display">Yama <em className="accent">Arce</em></span>
            </div>
            <p>{t.footerLine}</p>
            <div><button className="btn btn-sm footer-cta" onClick={() => go('book')}>{t.bookCta}</button></div>
          </div>
          <div className="footer-col">
            <div className="kicker">{t.explore}</div>
            <div className="footer-links">
              {PAGES.map((k) => (
                <button key={k} className="footer-link" onClick={() => go(k)}>{t.nav[k]}</button>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <div className="kicker">{t.nav.contact}</div>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener">Instagram · @{INSTAGRAM}</a>
            <span className="footer-note">{t.onlineNote}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Yama Arce · {t.rights}</span>
          <span className="footer-made"><Sparkle size={10} fill="var(--gold)" /> {t.madeWith}</span>
          <button className="footer-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t.backTop} ↑</button>
        </div>
      </div>
    </footer>
  );
}
