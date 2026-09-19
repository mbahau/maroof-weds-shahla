# Maroof weds Shahla

A mobile-first wedding invitation website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

Requirements:

- [Node.js](https://nodejs.org/) 20 or newer
- npm (installed with Node.js)

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal, usually `http://localhost:5173`.

## Create a production build

```bash
npm run build
```

The deployable files are created in `dist/`.

To preview that production build locally:

```bash
npm run preview
```

## Update invitation details

All wedding-specific information is kept in [src/data/weddingData.ts](src/data/weddingData.ts). Update that file for:

- Couple names and displayed date
- Event names, dates, and times
- Venue, contact information, and guest instructions
- Couple story and photo gallery
- Instagram hashtag, YouTube video ID, and music URL

Fields intentionally set to `null` were not provided, so the website shows an honest pending state rather than invented details.

## Key files

- `src/components/Hero.tsx` — sky-blue invitation cover and palace portal transition
- `src/components/Functions.tsx` — event schedule
- `src/components/RSVP.tsx` — locally stored RSVP demonstration
- `src/components/Wishes.tsx` — wishes wall stored in the browser
- `public/mughal-palace.png` — transparent Mughal palace artwork
