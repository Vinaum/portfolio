// Validates every internal link and #anchor in the static export (out/).
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname;
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html")) files.push(p);
  }
})(OUT);

const ids = new Map();
for (const f of files) {
  const html = readFileSync(f, "utf8");
  ids.set(f, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}

function resolve(from, href) {
  let [path, hash] = href.split("#");
  if (!path) return { file: from, hash };
  if (BASE && path.startsWith(BASE)) path = path.slice(BASE.length) || "/";
  let target = join(OUT, path);
  if (path.endsWith("/")) target = join(target, "index.html");
  else if (!existsSync(target) && existsSync(target + ".html")) target += ".html";
  return { file: target, hash };
}

let errors = 0;
let checked = 0;
const external = new Set();
for (const f of files) {
  if (f.endsWith("404.html") || f.includes("_not-found")) continue;
  const html = readFileSync(f, "utf8");
  for (const [, href] of html.matchAll(/<a[^>]*\shref="([^"]+)"/g)) {
    if (/^(https?:|mailto:)/.test(href)) { external.add(href); continue; }
    checked++;
    const { file, hash } = resolve(f, href);
    if (!existsSync(file)) { console.error(`✗ ${relative(OUT, f)} → ${href} (missing page)`); errors++; continue; }
    if (hash && !ids.get(file)?.has(hash)) { console.error(`✗ ${relative(OUT, f)} → ${href} (missing #${hash})`); errors++; }
  }
}
console.log(`Checked ${checked} internal links across ${files.length} pages. External links found: ${external.size}.`);
[...external].sort().forEach((u) => console.log(`  ↗ ${u}`));
if (errors) { console.error(`${errors} broken link(s).`); process.exit(1); }
console.log("All internal links and anchors resolve.");
