import { CONTACT_EMAIL, INSTAGRAM, PAGES } from '../content';

export default function Footer({ t, go }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="display" style={{ fontSize: 38, lineHeight: 1.05 }}>
              Yama <em className="accent">Arce</em>
            </div>
            <p>{t.footerLine}</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <div className="kicker">{t.explore}</div>
              {PAGES.map((k) => (
                <button key={k} className="footer-link" onClick={() => go(k)}>{t.nav[k]}</button>
              ))}
            </div>
            <div className="footer-col">
              <div className="kicker">{t.nav.contact}</div>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener">@{INSTAGRAM}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Yama Arce</span>
          <span>{t.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}
