Official logos, named by id (any of .svg, .png, .webp, .jpg):

- `pier`, `gobots`, `pagegroup`, `sharepeoplehub` — featured companies
- `unicamp` — education

`npm run dev` and `npm run build` first run `scripts/prepare-logos.mjs`, which trims
empty margins (transparent or flat background), measures each logo and writes the
trimmed copies to `public/logos/_/` plus `src/content/generated/logos.json`.
The site then sizes every logo by its *ink area*, so wide/heavy and compact/light
logos look equally large without being distorted. Without a file, the name is set
as a typographic wordmark.

Fine-tuning (optional) in `src/lib/logos.ts`:
- `logoScale` — per-logo size multiplier (1 = automatic size)
- `logoOverrides` — `"silhouette"`, `"tonal"`, `"invert"` or `"original"`

`*-app-icon.*` files are ignored.
