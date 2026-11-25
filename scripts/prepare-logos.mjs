// Prepares company / institution logos for the site (runs before dev and build).
//
// For every image in public/logos/ (except README and *-app-icon files):
//  1. trims the empty margin around the artwork (transparent or flat background),
//  2. measures proportions, transparency and "ink coverage" (how much of the
//     trimmed box the artwork actually fills),
//  3. writes the trimmed copy to public/logos/_/<id>.<ext> and a manifest to
//     src/content/generated/logos.json.
//
// The site uses the manifest to give logos an equal *optical* size: wide or heavy
// logos are drawn smaller, compact or thin ones larger — without distorting them.
import { readdirSync, mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join, parse } from "node:path";
import sharp from "sharp";

const root = new URL("..", import.meta.url).pathname;
const SRC = join(root, "public", "logos");
const OUT = join(SRC, "_");
const MANIFEST = join(root, "src", "content", "generated", "logos.json");
const RASTER = new Set([".png", ".webp", ".jpg", ".jpeg"]);

mkdirSync(OUT, { recursive: true });
const manifest = {};

for (const file of readdirSync(SRC).sort()) {
  const { name, ext } = parse(file);
  const e = ext.toLowerCase();
  if (name.endsWith("-app-icon") || (!RASTER.has(e) && e !== ".svg")) continue;

  if (e === ".svg") {
    const svg = readFileSync(join(SRC, file), "utf8");
    const vb = svg.match(/viewBox="[\d.\s-]*?([\d.]+)\s+([\d.]+)"/);
    writeFileSync(join(OUT, file), svg);
    manifest[name] = { file: `_/${file}`, w: vb ? +vb[1] : 1, h: vb ? +vb[2] : 1, alpha: true, coverage: 0.35 };
    continue;
  }

  const input = sharp(join(SRC, file)).ensureAlpha();
  const trimmed = await input.trim({ threshold: 12 }).toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = trimmed.info;

  // Ink coverage: share of pixels that differ from the background.
  const { data, info } = await sharp(trimmed.data).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  const bg = [data[0], data[1], data[2], data[3]];
  const transparentBg = bg[3] < 16;
  let ink = 0;
  let anyAlpha = false;
  for (let i = 0; i < data.length; i += ch) {
    const a = data[i + 3];
    if (a < 250) anyAlpha = true;
    if (transparentBg) {
      if (a > 64) ink++;
    } else {
      const d = Math.abs(data[i] - bg[0]) + Math.abs(data[i + 1] - bg[1]) + Math.abs(data[i + 2] - bg[2]);
      if (d > 60) ink++;
    }
  }
  const coverage = +(ink / (w * h)).toFixed(3);

  const outName = `${name}${e === ".jpeg" ? ".jpg" : e}`;
  const pipeline = sharp(trimmed.data);
  if (e === ".png") await pipeline.png().toFile(join(OUT, outName));
  else if (e === ".webp") await pipeline.webp({ lossless: true }).toFile(join(OUT, outName));
  else await pipeline.jpeg({ quality: 92 }).toFile(join(OUT, outName));

  manifest[name] = { file: `_/${outName}`, w, h, alpha: transparentBg || anyAlpha, coverage };
}

mkdirSync(parse(MANIFEST).dir, { recursive: true });
const previous = existsSync(MANIFEST) ? readFileSync(MANIFEST, "utf8") : "";
const next = JSON.stringify(manifest, null, 2) + "\n";
if (next !== previous) writeFileSync(MANIFEST, next);
console.log(`Logos prepared: ${Object.entries(manifest).map(([k, v]) => `${k} ${v.w}×${v.h} ink ${v.coverage}`).join(" · ")}`);
