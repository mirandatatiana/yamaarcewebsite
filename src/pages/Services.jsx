import { SERVICES } from '../content';
import { ServiceIcon } from '../components/Icons';
import Drawing from '../components/Drawings';

export default function Services({ t, lang, bookService }) {
  return (
    <div className="page page-narrow fade-in">
      <div className="head-row">
        <div className="page-head">
          <div className="kicker">{t.nav.services}</div>
          <h1 className="h1">{t.servicesTitle}</h1>
          <p className="lead">{t.servicesIntro}</p>
        </div>
        <div className="head-art"><Drawing name="sprig" /></div>
      </div>
      {SERVICES.map((s, i) => (
        <article key={s.id} className="svc-article reveal reveal-30">
          <div className="svc-article-head">
            <div className={`svc-icon svc-icon-lg ink-${s.ink}`}><ServiceIcon icon={s.icon} size={30} strokeWidth={1} /></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="kicker" style={{ fontSize: 12 }}>{String(i + 1).padStart(2, '0')}</div>
              <h2>{s.name[lang]}</h2>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <p className="body" style={{ lineHeight: 1.7 }}>{s.desc[lang]}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <div className="svc-facts">
                <span><span className="fact-label">{t.duration}</span>{s.dur} min</span>
                <span><span className="fact-label">{t.format}</span>{t.online}</span>
                <span><span className="fact-label">{t.price}</span>€{s.price}</span>
              </div>
              <button className="btn btn-sm" style={{ marginLeft: 'auto' }} onClick={() => bookService(s.id)}>{t.bookThis}</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
