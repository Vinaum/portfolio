# Vinicius Campanha Sartori — Portfolio

Bilingual (PT-BR / EN) personal portfolio. Dark editorial technology design, static export, no backend.

## Stack

Next.js 16 (App Router, `output: "export"`) · React 19 · TypeScript · Tailwind CSS 4 · self-hosted fonts (@fontsource: Space Grotesk, Inter, IBM Plex Mono) · hand-written SVG diagrams. No animation library and no icon library: motion uses CSS (transitions, scroll-driven animations), one IntersectionObserver, and SVG SMIL for the hero packets.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Prepares logos, then static export to `out/` |
| `npm run typecheck` / `npm run lint` / `npm test` | Types, ESLint, Vitest (content and translation integrity) |
| `npm run check:links` | Checks every internal link and `#anchor` in `out/` |
| `npm run check` | All of the above, in order |

## Configuration

| Variable | Default | Use |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://vinaum.github.io` | Canonical URLs, sitemap, Open Graph |
| `NEXT_PUBLIC_BASE_PATH` | *(empty)* | Set to `/repo-name` when hosting at `user.github.io/repo-name/` |

## Routes

| PT-BR | EN |
| --- | --- |
| `/` | `/en/` |
| `/projetos/<slug>/` | `/en/work/<slug>/` |

Each language has its own root layout, so `<html lang>`, metadata, canonical and `hreflang` are correct in the static HTML. Inside a language, navigation is client-side. Switching language loads the other language's document and stores the choice in `localStorage`. The PT home page sends back to `/en/` only visitors who explicitly chose English before.

## Where to edit content

```
src/content/
  pt-BR/index.ts     all Portuguese text
  en/index.ts        all English text (same structure, enforced by tests)
  shared/site.ts     name, e-mail, LinkedIn, GitHub, site URL
  shared/projects.ts slugs, repositories, stacks, and the architecture / flow diagrams
  types.ts           content model
```

- **Add a project:** add an entry to `shared/projects.ts` plus one in each language's `projects` array. Pages, sitemap and navigation update automatically.
- **Technology evidence:** each item is marked `applied` or `study` in `technology.groups`. Change the status as your experience changes.
- **Career timeline:** `journey.chapters`. Each organization accepts an optional `role`. Dates are deliberately absent; add them to `period` once confirmed.

## Company logos

Drop official files into `public/logos/` (`pier`, `gobots`, `pagegroup`, `sharepeoplehub`, `unicamp` — `.svg`, `.png`, `.webp` or `.jpg`). Before every dev/build run, `scripts/prepare-logos.mjs` trims empty margins and measures each logo, and the site sizes them by ink area so they read at the same optical size. See `public/logos/README.md`.

## Learning record

Courses in the Continuous learning section come from the public Alura record and live in `src/content/shared/learning.ts` (real titles, completed items only).

## Deploying to GitHub Pages

Build with `npm run build` and publish `out/` (for example with `actions/upload-pages-artifact` + `actions/deploy-pages`). Add an empty `out/.nojekyll` so `_next/` is served.
