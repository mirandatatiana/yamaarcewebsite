import { useMemo } from 'react';
import { SERVICES, fmtDate, fmtLongDate } from '../content';
import { buildDays, fmtCardCvc, fmtCardExp, fmtCardNum, stepValid, validEmail } from '../booking';
import { Calendar, Lock, Sparkle } from '../components/Icons';
import Drawing from '../components/Drawings';

export default function Book({ t, lang, booking: b, update, reset }) {
  const days = useMemo(buildDays, []);
  const dayObj = days.find((d) => d.key === b.day);
  const svc = SERVICES.find((x) => x.id === b.svc);
  const valid = stepValid(b);
  const done = b.step === 5;

  const setField = (group, key, fmt) => (e) => {
    const v = fmt ? fmt(e.target.value) : e.target.value;
    update((s) => ({ [group]: { ...s[group], [key]: v } }));
  };
  const next = () => {
    if (!valid) { update({ tried: true }); return; }
    update((s) => ({ step: s.step + 1, tried: false }));
  };
  const back = () => update((s) => ({ step: Math.max(1, s.step - 1), tried: false }));

  const errName = b.tried && b.step === 3 && b.form.name.trim().length < 2;
  const errEmail = b.tried && b.step === 3 && !validEmail(b.form.email);
  const errCard = b.tried && b.step === 4 && !valid;

  return (
    <div className="page page-mid fade-in" style={{ paddingTop: 'clamp(48px,7vw,80px)' }}>
      <div className="head-row" style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="kicker">{t.nav.book}</div>
          <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,76px)' }}>{t.bookTitle}</h1>
          <div className="muted" style={{ fontSize: 13.5, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <Calendar />{t.availNote}
          </div>
        </div>
        <div className="head-art head-art-sm"><Drawing name="sun" /></div>
      </div>

      {!done && (
        <ol className="stepper">
          {t.steps.map((label, i) => {
            const n = i + 1;
            return (
              <li key={label} aria-current={n === b.step ? 'step' : undefined} className={n < b.step ? 'step-done' : undefined}>
                <span className="step-dot">{n < b.step ? '✓' : n}</span>{label}
              </li>
            );
          })}
        </ol>
      )}

      <div className="book-layout">
        <div className="book-main card">
          {b.step === 1 && (
            <>
              <h2 className="h3" style={{ marginBottom: 24 }}>{t.chooseService}</h2>
              <div className="choice-grid">
                {SERVICES.map((s) => (
                  <button key={s.id} className="choice" aria-pressed={b.svc === s.id} onClick={() => update({ svc: s.id })}>
                    <span className="label" style={{ letterSpacing: '.2em' }}>{s.name[lang]}</span>
                    <span className="muted" style={{ fontSize: 13.5 }}>{s.dur} min · online</span>
                    <span className="price" style={{ fontSize: 26 }}>€{s.price}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {b.step === 2 && (
            <>
              <h2 className="h3" style={{ marginBottom: 6 }}>{t.chooseDay}</h2>
              <div className="muted" style={{ fontSize: 13, marginBottom: 22 }}>{t.tz}</div>
              <div className="days">
                {days.map((d) => (
                  <button key={d.key} className="day" disabled={d.slots.length === 0} aria-pressed={d.key === b.day}
                    onClick={() => update({ day: d.key, time: null })}>
                    <span className="day-wd">{fmtDate(d.date, lang, { weekday: 'short' })}</span>
                    <span className="day-num">{d.date.getDate()}</span>
                    <span className="day-mon">{fmtDate(d.date, lang, { month: 'short' })}</span>
                  </button>
                ))}
              </div>
              {dayObj && (
                <>
                  <div className="kicker" style={{ letterSpacing: '.22em', marginBottom: 12 }}>{t.chooseTime}</div>
                  <div className="times">
                    {dayObj.slots.map((h) => (
                      <button key={h} className="time" aria-pressed={b.time === h} onClick={() => update({ time: h })}>{h}</button>
                    ))}
                    {dayObj.slots.length === 0 && <span className="muted" style={{ fontSize: 14 }}>{t.noSlots}</span>}
                  </div>
                </>
              )}
            </>
          )}

          {b.step === 3 && (
            <>
              <h2 className="h3" style={{ marginBottom: 24 }}>{t.yourDetails}</h2>
              <div className="fields">
                <label className="field">{t.fName}
                  <input className="input" value={b.form.name} onChange={setField('form', 'name')} autoComplete="name" />
                  {errName && <span className="error">{t.errName}</span>}
                </label>
                <label className="field">Email
                  <input className="input" type="email" value={b.form.email} onChange={setField('form', 'email')} autoComplete="email" />
                  {errEmail && <span className="error">{t.errEmail}</span>}
                </label>
                <label className="field">{t.fNote}
                  <textarea className="input" rows={4} value={b.form.note} onChange={setField('form', 'note')} placeholder={t.fNotePh} />
                </label>
              </div>
            </>
          )}

          {b.step === 4 && (
            <>
              <h2 className="h3" style={{ marginBottom: 6 }}>{t.payTitle}</h2>
              <div className="muted" style={{ fontSize: 13, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Lock />{t.paySecure}
              </div>
              <div className="fields">
                <label className="field">{t.cardNum}
                  <input className="input" style={{ letterSpacing: '.04em' }} value={b.card.num} onChange={setField('card', 'num', fmtCardNum)}
                    inputMode="numeric" autoComplete="cc-number" placeholder="1234 5678 9012 3456" />
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <label className="field">{t.cardExp}
                    <input className="input" value={b.card.exp} onChange={setField('card', 'exp', fmtCardExp)}
                      inputMode="numeric" autoComplete="cc-exp" placeholder={t.expPh} />
                  </label>
                  <label className="field">CVC
                    <input className="input" value={b.card.cvc} onChange={setField('card', 'cvc', fmtCardCvc)}
                      inputMode="numeric" autoComplete="cc-csc" placeholder="123" />
                  </label>
                </div>
                {errCard && <span className="error">{t.errCard}</span>}
              </div>
            </>
          )}

          {done && (
            <div className="done">
              <Sparkle size={44} fill="var(--rose)" />
              <h2 className="h2" style={{ fontSize: 'clamp(40px,5vw,56px)' }}>{t.doneTitle}</h2>
              <p>
                {svc && dayObj && t.doneMsg(b.form.name.trim().split(' ')[0], b.form.email, svc.name[lang], fmtLongDate(dayObj.date, lang), b.time)}
              </p>
              <div className="chips">
                <span>✓ {t.doneEmail}</span>
                <span>✓ {t.doneCal}</span>
                <span>✓ {t.doneReminder}</span>
              </div>
              <button className="btn btn-sm btn-ghost" style={{ marginTop: 8, letterSpacing: '.06em' }} onClick={reset}>{t.newBooking}</button>
            </div>
          )}

          {!done && (
            <div className="book-nav">
              {b.step > 1 && <button className="back-btn" onClick={back}>← {t.back}</button>}
              <span style={{ flex: 1 }} />
              <button className="btn" style={{ letterSpacing: '.06em', opacity: valid ? 1 : .45 }} onClick={next}>
                {b.step === 4 ? `${t.pay} · €${svc ? svc.price : ''}` : t.cont}
              </button>
            </div>
          )}
        </div>

        <aside className="summary">
          <div className="kicker">{t.summary}</div>
          <dl>
            <div><dt>{t.service}</dt><dd>{svc ? svc.name[lang] : '—'}</dd></div>
            <div><dt>{t.date}</dt><dd>{dayObj ? fmtLongDate(dayObj.date, lang) : '—'}</dd></div>
            <div><dt>{t.time}</dt><dd>{b.time || '—'}</dd></div>
            <div><dt>{t.format}</dt><dd>{t.online}</dd></div>
          </dl>
          <div className="summary-total">
            <span className="label" style={{ letterSpacing: '.2em' }}>Total</span>
            <span className="price" style={{ fontSize: 34 }}>{svc ? '€' + svc.price : '—'}</span>
          </div>
          <p className="muted" style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6 }}>{t.policy}</p>
        </aside>
      </div>
    </div>
  );
}
