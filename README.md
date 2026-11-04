# Yama Arce — website

Single-page site (Vite + React) built from the Claude Design prototype
`Yama Arce Website.dc.html`. Spanish and English, seven pages: Inicio, Servicios,
Reservar, Sobre mí, Vídeos, Talleres, Contacto.

```sh
npm install
npm run dev      # local dev server
npm run build    # static build in dist/, deployable to any static host
```

## Where things live

- `src/content.js`: all copy (ES/EN), services, workshops, videos, contact details,
  and the home layout options (`LAYOUT.heroLayout`, `LAYOUT.homeFeature`).
- `src/images.js`: image for each slot. Put files in `public/images/` and set the path.
  Until a slot has an image it shows an ink drawing from `src/components/Drawings.jsx`.
- `src/booking.js`: booking steps, validation and (placeholder) availability.
- `src/styles.css`: colours, type and all component styles.

## Not wired up yet

The booking and contact flows are UI only:

- **Availability** is generated, not read from Google Calendar.
- **Payment**: the card form validates format but charges nothing. Use a payment
  provider's hosted checkout (e.g. Stripe Checkout) before going live rather than
  collecting card numbers in this form.
- **Confirmation emails and contact messages** are not sent anywhere.
