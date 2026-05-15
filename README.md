# Andrei Metgher — Personal Site

A warm, paper-textured single-page portfolio. Built with **Vite + React + TypeScript**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Scripts

| command           | what it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | start the Vite dev server                 |
| `npm run build`   | typecheck + build to `dist/`              |
| `npm run preview` | preview the production build locally      |
| `npm run typecheck` | run `tsc` in noEmit mode                |

## Project layout

```
src/
├── components/      # one section per file (Nav, Hero, About, …)
├── data/            # typed content — edit these to update the site
├── hooks/           # useReveal, useActiveSection, useScrollProgress, useReducedMotion
├── styles/          # global CSS with design tokens
├── App.tsx
└── main.tsx
```

### Editing content

All copy lives in `src/data/`:

- `profile.ts` — name, tagline, contact info
- `projects.ts` — the five "field notes"
- `skills.ts` — the pegboard
- `experience.ts` — the timeline

Components render straight off these arrays, so you don't have to touch JSX to update the site.

## Design notes

The visual language is a warm paper palette (`--paper`, `--ink`, `--rust`, `--sage`)
with three typefaces — Instrument Serif (display), Geist + Geist Mono (body & labels),
and Caveat (handwritten accents). Tokens live at the top of `src/styles/globals.css`.

Subtle behaviors:

- **scroll progress** rust-colored bar at the top of the page
- **reveal-on-scroll** sections fade up as they enter the viewport
- **active nav** the current section is marked with a small ✦
- **polaroid parallax** the hero polaroids drift to follow the cursor
- **postcard send** a hand-written stamp flies up when you submit the form

All motion respects `prefers-reduced-motion`.

## Deploying

Any static host works — `npm run build` outputs `dist/`.

- **Vercel / Netlify**: import the repo, framework preset *Vite*, no env vars needed.
- **GitHub Pages**: build, then push `dist/` to the `gh-pages` branch (or wire up an Action).
- **Cloudflare Pages**: build command `npm run build`, output directory `dist`.
