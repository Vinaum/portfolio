Place official company logos here, named by company id:

- `pier.webp` / `pier.png` / `pier.svg`
- `gobots.webp` / `gobots.png` / `gobots.svg`
- `pagegroup.webp` / `pagegroup.png` / `pagegroup.svg`

Detected at build time. The build reads each file's header:

- transparent background → rendered as an off-white silhouette;
- opaque background (e.g. logo on white) → background removed, artwork turned light.

To force a treatment for one company, edit `logoOverrides` in `src/lib/logos.ts`
(`"silhouette"`, `"invert"` or `"original"`).
Without a file, the company name is set as a typographic wordmark.
