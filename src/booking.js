export const initialBooking = {
  svc: null, day: null, time: null, step: 1, tried: false,
  form: { name: '', email: '', note: '' },
  card: { num: '', exp: '', cvc: '' },
};

const ALL_SLOTS = ['10:00', '11:30', '16:00', '17:30', '19:00'];

// Next 7 days with their free slots. Placeholder availability until the
// Google Calendar integration exists: no Sundays, short Saturdays.
export function buildDays() {
  const out = [];
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  for (let i = 1; i <= 7; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    const slots = d.getDay() === 0
      ? []
      : ALL_SLOTS.filter((_, j) => (i * 7 + j * 3) % 5 !== 0 && !(d.getDay() === 6 && j > 2));
    out.push({ key: d.toISOString().slice(0, 10), date: d, slots });
  }
  return out;
}

export const validEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

export function stepValid(b) {
  if (b.step === 1) return !!b.svc;
  if (b.step === 2) return !!(b.day && b.time);
  if (b.step === 3) return b.form.name.trim().length > 1 && validEmail(b.form.email);
  if (b.step === 4) {
    return b.card.num.replace(/\s/g, '').length === 16
      && /^\d\d\/\d\d$/.test(b.card.exp)
      && /^\d{3,4}$/.test(b.card.cvc);
  }
  return true;
}

export const fmtCardNum = (v) => v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})(?=.)/g, '$1 ');
export const fmtCardExp = (v) => {
  const d = v.replace(/\D/g, '').slice(0, 4);
  return d.length > 2 ? d.slice(0, 2) + '/' + d.slice(2) : d;
};
export const fmtCardCvc = (v) => v.replace(/\D/g, '').slice(0, 4);
