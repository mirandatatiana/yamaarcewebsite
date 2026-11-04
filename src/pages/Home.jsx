import { LAYOUT, SERVICES, WORKSHOPS, workshopView } from '../content';
import ImageSlot from '../components/ImageSlot';
import { EyeLogo, ServiceIcon, Sparkle, SpinBadge, Wave } from '../components/Icons';

const DISCIPLINES = 'Tarot · Registros Akáshicos · Revolución Solar · Terapia Floral';

function SplitHero({ t, go }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="kicker">{DISCIPLINES}</div>
        <h1 className="hero-title">Yama<br /><em>Arce</em></h1>
        <p className="hero-line">{t.heroLine}</p>
        <div className="btn-row">
          <button className="btn btn-lg" onClick={() => go('book')}>{t.bookCta}</button>
          <button className="btn btn-lg btn-ghost" onClick={() => go('services')}>{t.seeServices}</button>
        </div>
        <div className="online-note">{t.onlineNote}</div>
      </div>
      <div className="hero-art">
        <ImageSlot id="hero-art" className="fill arch-hero" alt="Yama Arce" placeholder="Ilustración de Yama — rosa, ojo, vela" drawing="eye" />
        <Sparkle size={30} fill="var(--gold)" style={{ position: 'absolute', right: -14, top: '12%', pointerEvents: 'none' }} />
        <Sparkle size={16} fill="var(--rose)" style={{ position: 'absolute', right: 20, top: '4%', pointerEvents: 'none' }} />
        <SpinBadge />
      </div>
    </section>
  );
}

function CenteredHero({ t, go }) {
  return (
    <section className="hero-centered">
      <EyeLogo width={56} height={34} strokeWidth={1} />
      <div className="kicker">{DISCIPLINES}</div>
      <h1 className="hero-title">Yama <em>Arce</em></h1>
      <p className="hero-line">{t.heroLine}</p>
      <div className="btn-row">
        <button className="btn btn-lg" onClick={() => go('book')}>{t.bookCta}</button>
        <button className="btn btn-lg btn-ghost" onClick={() => go('services')}>{t.seeServices}</button>
      </div>
      <div className="hero-wide-art">
        <ImageSlot id="hero-art-wide" className="arch-wide" alt="Yama Arce" placeholder="Ilustración de Yama — formato apaisado" drawing="eye" />
      </div>
    </section>
  );
}

export default function Home({ t, lang, go, bookService, reserveWorkshop }) {
  const showQuote = LAYOUT.homeFeature !== 'video';
  const showVideo = LAYOUT.homeFeature !== 'quote';
  return (
    <div className="fade-in">
      {LAYOUT.heroLayout === 'centered' ? <CenteredHero t={t} go={go} /> : <SplitHero t={t} go={go} />}

      <div className="wrap">
        <div className="divider"><span /><Sparkle fill="var(--gold)" /><span /></div>
      </div>

      <section className="section reveal">
        <div className="section-head">
          <div>
            <div className="kicker">{t.servicesKicker}</div>
            <h2 className="h2">{t.servicesTitle}</h2>
          </div>
          <button className="link-btn" onClick={() => go('services')}>{t.allServices} →</button>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <button key={s.id} className={`svc-card tint-${s.ink}`} onClick={() => bookService(s.id)}>
              <div className={`svc-icon ink-${s.ink}`}><ServiceIcon icon={s.icon} /></div>
              <div className="label">{s.name[lang]}</div>
              <p>{s.short[lang]}</p>
              <div className="svc-card-foot">
                <span style={{ color: 'var(--sage)' }}>{s.dur} min · online</span>
                <span className="price" style={{ fontSize: 24 }}>€{s.price}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {(showQuote || showVideo) && (
        <section className="feature reveal">
          {showQuote && (
            <figure className="quote">
              <Wave />
              <blockquote>“{t.quote}”</blockquote>
              <figcaption className="label" style={{ color: 'var(--sage)' }}>— Yama</figcaption>
            </figure>
          )}
          {showVideo && (
            <div className="video-feature">
              <div className="video-frame">
                <ImageSlot id="home-video" className="fill rounded" placeholder="Vídeo corto o reel de Yama" drawing="vine" />
                <div className="soon-badge soon-badge-lg">{t.soonCover}</div>
              </div>
              <button className="text-btn" onClick={() => go('videos')}>{t.moreVideos} →</button>
            </div>
          )}
        </section>
      )}

      <section className="band reveal reveal-20">
        <div className="band-inner">
          <div className="section-head">
            <div>
              <div className="kicker">{t.wsKicker}</div>
              <h2 className="h2">{t.wsTitle}</h2>
            </div>
            <button className="link-btn" onClick={() => go('workshops')}>{t.allWorkshops} →</button>
          </div>
          <div>
            {WORKSHOPS.map((raw) => {
              const w = workshopView(raw, t, lang);
              return (
                <div key={w.id} className="ws-row">
                  <div className="date-badge">
                    <div className="date-day">{w.day}</div>
                    <div className="date-month">{w.month}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div className="ws-row-title">{w.title}</div>
                    <div className="ws-row-meta">{w.mode} · {w.time} · {w.place}</div>
                  </div>
                  <div className="ws-row-end">
                    <span className="serif" style={{ fontSize: 26 }}>{w.priceLabel}</span>
                    <button className="btn btn-xs btn-line" onClick={() => reserveWorkshop(w.title)}>{t.reserveSeat}</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
