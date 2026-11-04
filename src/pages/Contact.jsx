import { CONTACT_EMAIL, INSTAGRAM } from '../content';
import { validEmail } from '../booking';
import { Sparkle } from '../components/Icons';
import Drawing from '../components/Drawings';

export default function Contact({ t, contact: c, setContact }) {
  const complete = c.name.trim() && validEmail(c.email) && c.msg.trim();
  const set = (key) => (e) => setContact((s) => ({ ...s, [key]: e.target.value }));
  const send = () => setContact((s) => (complete ? { ...s, sent: true, tried: false } : { ...s, tried: true }));

  return (
    <div className="page page-narrow contact fade-in">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div className="kicker">{t.nav.contact}</div>
        <h1 className="h1" style={{ fontSize: 'clamp(48px,7vw,84px)' }}>{t.contactTitle}</h1>
        <p className="lead">{t.contactSub}</p>
        <div className="contact-links">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener">Instagram · @{INSTAGRAM}</a>
        </div>
        <div className="contact-art"><Drawing name="wreath" /></div>
      </div>
      <div className="card" style={{ padding: 'clamp(24px,4vw,40px)' }}>
        {c.sent ? (
          <div className="sent">
            <Sparkle size={36} fill="var(--sage)" />
            <div className="serif" style={{ fontSize: 34, lineHeight: 1.1 }}>{t.sentTitle}</div>
            <p style={{ margin: 0, fontSize: 15 }}>{t.sentMsg}</p>
          </div>
        ) : (
          <div className="fields">
            <label className="field">{t.fName}
              <input className="input" value={c.name} onChange={set('name')} autoComplete="name" />
            </label>
            <label className="field">Email
              <input className="input" type="email" value={c.email} onChange={set('email')} autoComplete="email" />
            </label>
            <label className="field">{t.fMsg}
              <textarea className="input" rows={6} value={c.msg} onChange={set('msg')} />
            </label>
            {c.tried && !complete && <span className="error">{t.errContact}</span>}
            <div><button className="btn" onClick={send}>{t.send}</button></div>
          </div>
        )}
      </div>
    </div>
  );
}
