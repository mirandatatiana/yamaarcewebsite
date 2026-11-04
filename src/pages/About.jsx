import ImageSlot from '../components/ImageSlot';

export default function About({ t, go }) {
  return (
    <div className="page page-mid about fade-in">
      <div className="about-art">
        <ImageSlot id="about-photo" className="fill arch-about" alt="Yama Arce" placeholder="Foto de Yama" />
        <div className="about-drawing">
          <ImageSlot id="about-drawing" className="fill" placeholder="Dibujo" drawing="chalice" />
        </div>
      </div>
      <div className="about-copy">
        <div className="kicker">{t.nav.about}</div>
        <h1 className="h1" style={{ fontSize: 'clamp(48px,7vw,84px)' }}>{t.aboutHello}</h1>
        <p className="about-lead">{t.aboutLead}</p>
        <p className="body">{t.about1}</p>
        <p className="body">{t.about2}</p>
        <p className="body">{t.about3}</p>
        <div className="signature">Yama</div>
        <div><button className="btn" onClick={() => go('book')}>{t.bookCta}</button></div>
      </div>
    </div>
  );
}
