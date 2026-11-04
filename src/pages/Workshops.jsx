import { WORKSHOPS, workshopView } from '../content';
import ImageSlot from '../components/ImageSlot';

export default function Workshops({ t, lang, reserveWorkshop }) {
  return (
    <div className="page page-narrow fade-in">
      <div className="page-head" style={{ marginBottom: 56 }}>
        <div className="kicker">{t.nav.workshops}</div>
        <h1 className="h1">{t.wsTitle}</h1>
        <p className="lead">{t.wsIntro}</p>
      </div>
      <div className="ws-list">
        {WORKSHOPS.map((raw) => {
          const w = workshopView(raw, t, lang);
          return (
            <article key={w.id} className="ws-card reveal reveal-30">
              <div className="ws-media">
                <ImageSlot id={`ws-${w.id}`} className="fill" alt={w.title} placeholder="Imagen o ilustración del taller"
                  drawing={w.id === 'akashic-intro' ? 'arch' : 'chalice'} ink={w.id === 'akashic-intro' ? 'green' : 'blue'} />
                <div className="ws-date">
                  <div className="date-day">{w.day}</div>
                  <div className="date-month">{w.month}</div>
                </div>
              </div>
              <div className="ws-body">
                <span className="tag">{w.mode}</span>
                <h2>{w.title}</h2>
                <p>{w.desc}</p>
                <div className="muted" style={{ fontSize: 14, lineHeight: 1.6 }}>{w.fullDate} · {w.time}<br />{w.place}</div>
                <div className="ws-foot">
                  <span className="price" style={{ fontSize: 32 }}>{w.priceLabel}</span>
                  <button className="btn btn-sm" onClick={() => reserveWorkshop(w.title)}>{t.reserveSeat}</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
