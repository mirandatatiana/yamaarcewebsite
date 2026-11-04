import { useEffect, useState } from 'react';
import { PAGES, STR } from './content';
import { initialBooking } from './booking';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Book from './pages/Book';
import About from './pages/About';
import Videos from './pages/Videos';
import Workshops from './pages/Workshops';
import Contact from './pages/Contact';

// Pages live at #/services, #/book, … so links can be shared and the site
// works on any static host without rewrite rules.
const readPage = () => {
  const p = window.location.hash.replace(/^#\/?/, '');
  return PAGES.includes(p) ? p : 'home';
};

const initialContact = { name: '', email: '', msg: '', sent: false, tried: false };

export default function App() {
  const [page, setPage] = useState(readPage);
  const [lang, setLang] = useState('es');
  const [booking, setBooking] = useState(initialBooking);
  const [contact, setContact] = useState(initialContact);
  const t = STR[lang];

  useEffect(() => {
    const onHash = () => setPage(readPage());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const go = (p) => {
    window.location.hash = p === 'home' ? '/' : '/' + p;
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateBooking = (patch) =>
    setBooking((b) => ({ ...b, ...(typeof patch === 'function' ? patch(b) : patch) }));

  const bookService = (svc) => {
    updateBooking({ svc, step: 2, tried: false });
    go('book');
  };

  const reserveWorkshop = (title) => {
    setContact((c) => ({ ...c, msg: t.wsMsg(title), sent: false }));
    go('contact');
  };

  const shared = { t, lang, go };

  return (
    <div className="app">
      <Header {...shared} page={page} setLang={setLang} />
      <main>
        {page === 'home' && <Home {...shared} bookService={bookService} reserveWorkshop={reserveWorkshop} />}
        {page === 'services' && <Services {...shared} bookService={bookService} />}
        {page === 'book' && <Book {...shared} booking={booking} update={updateBooking} reset={() => setBooking(initialBooking)} />}
        {page === 'about' && <About {...shared} />}
        {page === 'videos' && <Videos {...shared} />}
        {page === 'workshops' && <Workshops {...shared} reserveWorkshop={reserveWorkshop} />}
        {page === 'contact' && <Contact {...shared} contact={contact} setContact={setContact} />}
      </main>
      <Footer {...shared} />
    </div>
  );
}
