# abhinavshukla.me

Personal portfolio. React 19 + TypeScript + Vite, Tailwind CSS v4, Motion, Lenis.
Deployed to Firebase Hosting.

## Running it

```bash
npm install
npm run dev
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server on :5173 |
| `npm run build` | Typecheck, then build to `dist/` |
| `npm run preview` | Serve the built output |
| `npm run lint` | ESLint |
| `npm run images` | Re-encode `assets/raw/*.png` into `public/images/` |

## Structure

```
assets/raw/          Source screenshots — NOT shipped. Input to `npm run images`.
assets/archive/      Screenshots for retired projects.
public/              Static output: optimised images, résumé, favicon, OG card.
scripts/             Build-time image + brand-asset generation.
src/
  data/              All content lives here — projects, timeline, skills, site info.
  components/
    layout/          Nav
    sections/        Hero, Work, Path, About, Contact
    ui/              Reveal, SplitText, Marquee, MagneticLink, Grain, …
  hooks/             useTheme, useLenis, useActiveSection
  styles/            globals.css — design tokens and base layer
```

## Editing content

Everything a visitor reads is in `src/data/`:

- `projects.ts` — the work index. Each entry has a `pitch` (card face) and a
  `hardPart` (the engineering problem). Set `liveUrl` / `repoUrl` to `null` to
  hide a button.
- `timeline.ts` — the Path section.
- `skills.ts` — the toolkit list and the marquee.
- `site.ts` — name, email, socials, résumé path, stats.

No copy is hardcoded in components.

## Images

Raw screenshots live in `assets/raw/`, outside `public/`, so Vite never ships
them. `npm run images` re-encodes them to AVIF + WebP + JPEG at 640px and
1280px in `public/images/`, and `ProjectImage` picks the best format per
browser. The current set went from 4159 KB to 146 KB.

Commit `public/images/` — CI runs `npm run build`, not `npm run images`.

## Brand assets

`node scripts/generate-brand.mjs` regenerates `og-image.png`, `favicon.svg`
and `apple-touch-icon.png` from the palette in that script.

## Theme

One source of truth: a `data-theme` attribute on `<html>`. Set before first
paint by an inline script in `index.html` (no flash), then owned by
`useTheme`. Preference persists to `localStorage`; without a stored choice it
follows `prefers-color-scheme`.

## Deploy

Push to `master`. GitHub Actions runs `npm install && npm run build` and
deploys `dist/` to Firebase Hosting.
