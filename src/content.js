// All site copy and data, in Spanish and English.

export const PAGES = ['home', 'services', 'book', 'about', 'videos', 'workshops', 'contact'];

export const STR = {
  es: { nav: { home: 'Inicio', services: 'Servicios', book: 'Reservar', about: 'Sobre mí', videos: 'Vídeos', workshops: 'Talleres', contact: 'Contacto' },
    bookCta: 'Reservar sesión', seeServices: 'Ver servicios',
    heroLine: 'Guía intuitiva para escuchar lo que ya sabes. Sesiones para mirar hacia dentro con calma, claridad y cuidado.',
    onlineNote: 'Todas las sesiones son online, por videollamada.',
    servicesKicker: 'Sesiones', servicesTitle: 'Formas de acompañarte', allServices: 'Todos los servicios',
    servicesIntro: 'Cada sesión es un espacio tranquilo y sin juicios. Todas son online, por videollamada, y puedes reservar hasta una semana antes.',
    quote: 'La intuición no grita. Susurra, y hay que hacer silencio para oírla.', moreVideos: 'Ver más vídeos',
    wsKicker: 'Próximamente', wsTitle: 'Talleres', allWorkshops: 'Todos los talleres', reserveSeat: 'Reservar plaza',
    wsIntro: 'Encuentros presenciales y virtuales para aprender en grupo, a tu ritmo.',
    duration: 'Duración', format: 'Formato', online: 'Online', price: 'Precio', bookThis: 'Reservar esta sesión',
    bookTitle: 'Reserva tu sesión', availNote: 'Disponibilidad sincronizada con Google Calendar · reservas hasta 7 días vista',
    steps: ['Servicio', 'Día y hora', 'Tus datos', 'Pago'],
    chooseService: '¿Qué sesión quieres?', chooseDay: 'Elige un día', chooseTime: 'Horarios disponibles', tz: 'Horario de España (CET)',
    noSlots: 'No hay horarios libres este día.', yourDetails: 'Tus datos', fName: 'Nombre', fNote: '¿Algo que quieras contarme? (opcional)',
    fNotePh: 'Tu pregunta, tu fecha y hora de nacimiento para la revolución solar…', errName: 'Escribe tu nombre.', errEmail: 'Revisa tu email.',
    payTitle: 'Pago', paySecure: 'Pago seguro con tarjeta. Se cobra al confirmar.', cardNum: 'Número de tarjeta', cardExp: 'Caducidad', expPh: 'MM/AA',
    errCard: 'Revisa los datos de la tarjeta.', back: 'Atrás', cont: 'Continuar', pay: 'Pagar y confirmar',
    summary: 'Tu reserva', service: 'Sesión', date: 'Día', time: 'Hora',
    policy: 'Puedes cambiar la fecha hasta 24 horas antes desde el enlace de tu email de confirmación.',
    doneTitle: 'Reserva confirmada', doneEmail: 'Email de confirmación', doneCal: 'Evento en tu calendario', doneReminder: 'Recordatorio 24 h antes',
    doneMsg: (n, e, s, d, h) => `Gracias, ${n}. Tu sesión de ${s} es el ${d} a las ${h}. Te he enviado la confirmación y el enlace de la videollamada a ${e}.`,
    newBooking: 'Hacer otra reserva',
    aboutHello: 'Hola, soy Yama', aboutLead: 'Dibujo, leo cartas y escucho. Mi trabajo es ayudarte a escucharte.',
    about1: 'Desde pequeña me acompañan las cartas, las plantas y una forma de mirar que no siempre sabía nombrar. Con los años entendí que la intuición se cuida y se entrena, como un jardín.',
    about2: 'Hoy acompaño a personas de muchos lugares a través del tarot, los Registros Akáshicos, la astrología y las esencias florales. No vengo a decirte qué va a pasar: vengo a ayudarte a ver con más claridad lo que ya está en ti.',
    about3: 'Mis sesiones son un espacio tranquilo, sin juicios y con mucho cuidado. Te espero.',
    videosTitle: 'Vídeos', all: 'Todos', soonKicker: 'Próximamente · diciembre', soonBadge: 'Diciembre', soonCover: 'Vídeos en diciembre',
    videosSoon: 'Estoy preparando vídeos cortos sobre tarot, Registros Akáshicos, astrología y flores. Los primeros llegan en diciembre.',
    contactTitle: 'Escríbeme', contactSub: 'Para dudas sobre las sesiones, talleres o colaboraciones.', fMsg: 'Mensaje', send: 'Enviar',
    errContact: 'Completa nombre, email y mensaje.', sentTitle: 'Gracias por escribir', sentMsg: 'Te responderé lo antes posible.',
    wsMsg: (w) => `Hola Yama, quiero reservar plaza en el taller «${w}».`,
    inPerson: 'Presencial', virtual: 'Virtual',
    footerLine: 'Guía intuitiva · Tarot, Registros Akáshicos, Revolución Solar y Terapia Floral. Sesiones online.', explore: 'Explorar', madeWith: 'Hecho con calma',
    rights: 'Todos los derechos reservados', backTop: 'Volver arriba', menu: 'Menú', closeMenu: 'Cerrar menú' },
  en: { nav: { home: 'Home', services: 'Services', book: 'Book', about: 'About', videos: 'Videos', workshops: 'Workshops', contact: 'Contact' },
    bookCta: 'Book a session', seeServices: 'See services',
    heroLine: 'Intuitive guidance to help you hear what you already know. Sessions to look inward with calm, clarity and care.',
    onlineNote: 'All sessions are online, by video call.',
    servicesKicker: 'Sessions', servicesTitle: 'Ways I can guide you', allServices: 'All services',
    servicesIntro: 'Every session is a calm, judgement-free space. All are online by video call, and you can book up to one week ahead.',
    quote: "Intuition doesn't shout. It whispers, and you have to be quiet to hear it.", moreVideos: 'More videos',
    wsKicker: 'Coming up', wsTitle: 'Workshops', allWorkshops: 'All workshops', reserveSeat: 'Reserve a seat',
    wsIntro: 'In-person and virtual gatherings to learn together, at your own pace.',
    duration: 'Duration', format: 'Format', online: 'Online', price: 'Price', bookThis: 'Book this session',
    bookTitle: 'Book your session', availNote: 'Availability synced with Google Calendar · bookable up to 7 days ahead',
    steps: ['Service', 'Date & time', 'Your details', 'Payment'],
    chooseService: 'Which session would you like?', chooseDay: 'Choose a day', chooseTime: 'Available times', tz: 'Spain time (CET)',
    noSlots: 'No free times on this day.', yourDetails: 'Your details', fName: 'Name', fNote: 'Anything you want to share? (optional)',
    fNotePh: 'Your question, or your birth date and time for the solar return…', errName: 'Please add your name.', errEmail: 'Please check your email.',
    payTitle: 'Payment', paySecure: 'Secure card payment. Charged when you confirm.', cardNum: 'Card number', cardExp: 'Expiry', expPh: 'MM/YY',
    errCard: 'Please check your card details.', back: 'Back', cont: 'Continue', pay: 'Pay and confirm',
    summary: 'Your booking', service: 'Session', date: 'Date', time: 'Time',
    policy: 'You can reschedule up to 24 hours before using the link in your confirmation email.',
    doneTitle: 'Booking confirmed', doneEmail: 'Confirmation email', doneCal: 'Calendar invite', doneReminder: 'Reminder 24 h before',
    doneMsg: (n, e, s, d, h) => `Thank you, ${n}. Your ${s} session is on ${d} at ${h}. I've sent the confirmation and video call link to ${e}.`,
    newBooking: 'Make another booking',
    aboutHello: "Hi, I'm Yama", aboutLead: 'I draw, I read cards and I listen. My work is helping you listen to yourself.',
    about1: "Cards, plants and a way of seeing I couldn't always name have been with me since I was little. Over the years I learned that intuition is something you tend and practise, like a garden.",
    about2: "Today I guide people from many places through tarot, the Akashic Records, astrology and flower essences. I'm not here to tell you what will happen. I'm here to help you see more clearly what is already in you.",
    about3: 'My sessions are a calm space, free of judgement and held with care. I look forward to meeting you.',
    videosTitle: 'Videos', all: 'All', soonKicker: 'Coming in December', soonBadge: 'December', soonCover: 'Videos in December',
    videosSoon: "I'm making short videos about tarot, the Akashic Records, astrology and flowers. The first ones arrive in December.",
    contactTitle: 'Write to me', contactSub: 'For questions about sessions, workshops or collaborations.', fMsg: 'Message', send: 'Send',
    errContact: 'Please fill in name, email and message.', sentTitle: 'Thank you for writing', sentMsg: "I'll get back to you as soon as I can.",
    wsMsg: (w) => `Hi Yama, I'd like to reserve a seat at the “${w}” workshop.`,
    inPerson: 'In person', virtual: 'Virtual',
    footerLine: 'Intuitive guide · Tarot, Akashic Records, Solar Return and Floral Therapy. Online sessions.', explore: 'Explore', madeWith: 'Made slowly',
    rights: 'All rights reserved', backTop: 'Back to top', menu: 'Menu', closeMenu: 'Close menu' },
};

export const SERVICES = [
  { id: 'tarot', icon: 'eye', ink: 'blue', dur: 60, price: 40, name: { es: 'Tarot', en: 'Tarot' },
    short: { es: 'Las cartas como espejo para una pregunta o un momento de cambio.', en: 'The cards as a mirror for a question or a moment of change.' },
    desc: { es: 'Una lectura para iluminar una pregunta, una decisión o un momento de cambio. Trabajamos las cartas como espejo, no como sentencia, y te llevas claridad y pasos concretos.', en: 'A reading to shed light on a question, a decision or a moment of change. We use the cards as a mirror, not a verdict, and you leave with clarity and concrete next steps.' } },
  { id: 'akashic', icon: 'star', ink: 'green', dur: 75, price: 55, name: { es: 'Registros Akáshicos', en: 'Akashic Records' },
    short: { es: 'Mensajes sobre tu camino, tus patrones y lo que estás lista para soltar.', en: 'Messages about your path, your patterns and what you are ready to release.' },
    desc: { es: 'Abro tus registros para recibir mensajes sobre tu camino, tus patrones y lo que estás lista para soltar. Puedes traer preguntas o dejar que la sesión fluya.', en: 'I open your records to receive messages about your path, your patterns and what you are ready to release. Bring questions, or let the session unfold.' } },
  { id: 'solar', icon: 'sun', ink: 'gold', dur: 90, price: 60, name: { es: 'Revolución Solar', en: 'Solar Return' },
    short: { es: 'Tu carta del año, de cumpleaños a cumpleaños.', en: 'Your chart for the year, birthday to birthday.' },
    desc: { es: 'Leemos tu carta del año, de cumpleaños a cumpleaños: los temas, los ciclos y dónde poner tu energía. Necesito tu fecha, hora y lugar de nacimiento.', en: 'We read your chart for the year ahead, birthday to birthday: its themes, cycles and where to place your energy. I need your birth date, time and place.' } },
  { id: 'floral', icon: 'flower', ink: 'red', dur: 45, price: 45, name: { es: 'Terapia Floral', en: 'Floral Therapy' },
    short: { es: 'Tu fórmula de esencias florales para acompañar tu proceso.', en: 'Your own flower essence blend to support your process.' },
    desc: { es: 'Una consulta para crear tu fórmula de esencias florales, pensada para acompañar tu proceso emocional. Incluye seguimiento por mensaje.', en: 'A consultation to create your own flower essence blend, made to support your emotional process. Includes a follow-up by message.' } },
];

export const WORKSHOPS = [
  { id: 'akashic-intro', date: '2026-11-21', time: '10:00–14:00', price: 120, inPerson: true,
    title: { es: 'Iniciación en Registros Akáshicos', en: 'Introduction to the Akashic Records' },
    desc: { es: 'Un día para aprender a abrir tus propios registros: oración, práctica guiada y preguntas en grupo reducido.', en: 'A day to learn how to open your own records: prayer, guided practice and questions in a small group.' },
    place: { es: 'Ubicación por confirmar', en: 'Location to be confirmed' } },
  { id: 'tarot-start', date: '2026-12-05', time: '18:00–20:00 CET', price: 45, inPerson: false,
    title: { es: 'Tarot para empezar', en: 'Tarot for beginners' },
    desc: { es: 'Dos horas por videollamada para conocer los Arcanos Mayores y hacer tu primera tirada.', en: 'Two hours by video call to meet the Major Arcana and do your first spread.' },
    place: { es: 'Online · Zoom', en: 'Online · Zoom' } },
];

export const VIDEOS = [
  { id: 1, topic: 'tarot', len: '1:12', title: { es: 'Cómo hacerle una pregunta al tarot', en: 'How to ask the tarot a question' } },
  { id: 2, topic: 'registros', len: '2:40', title: { es: '¿Qué son los Registros Akáshicos?', en: 'What are the Akashic Records?' } },
  { id: 3, topic: 'astro', len: '3:05', title: { es: 'Tu revolución solar, explicada', en: 'Your solar return, explained' } },
  { id: 4, topic: 'flores', len: '1:48', title: { es: 'Esencias florales para días de ansiedad', en: 'Flower essences for anxious days' } },
  { id: 5, topic: 'tarot', len: '0:58', title: { es: 'Los Arcanos Mayores en un minuto', en: 'The Major Arcana in a minute' } },
  { id: 6, topic: 'flores', len: '2:15', title: { es: 'Preparar tu esencia floral en casa', en: 'Making a flower essence at home' } },
];

// Ink drawing shown for each video topic until a thumbnail is set.
export const TOPIC_DRAWING = { tarot: 'eye', registros: 'arch', astro: 'fern', flores: 'chalice' };

export const TOPICS = {
  tarot: { es: 'Tarot', en: 'Tarot' },
  registros: { es: 'Registros', en: 'Records' },
  astro: { es: 'Astrología', en: 'Astrology' },
  flores: { es: 'Flores', en: 'Flowers' },
};

export const CONTACT_EMAIL = 'hola@ojoenyamas.com';
export const INSTAGRAM = 'ojo_en_yamas';

// Home page layout options from the design: heroLayout 'split' | 'centered',
// homeFeature 'both' | 'quote' | 'video'.
export const LAYOUT = { heroLayout: 'split', homeFeature: 'both' };

export const locale = (lang) => (lang === 'es' ? 'es-ES' : 'en-GB');
export const fmtDate = (d, lang, opts) => d.toLocaleDateString(locale(lang), opts).replace('.', '');
export const fmtLongDate = (d, lang) => fmtDate(d, lang, { weekday: 'long', day: 'numeric', month: 'long' });

export function workshopView(w, t, lang) {
  const d = new Date(w.date + 'T12:00:00');
  return {
    id: w.id, title: w.title[lang], desc: w.desc[lang], place: w.place[lang], time: w.time,
    priceLabel: '€' + w.price, day: d.getDate(), month: fmtDate(d, lang, { month: 'short' }),
    fullDate: fmtLongDate(d, lang), mode: w.inPerson ? t.inPerson : t.virtual,
  };
}
