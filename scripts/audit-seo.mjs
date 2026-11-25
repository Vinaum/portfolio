// SEO audit of the static export (out/): metadata uniqueness, canonical/hreflang
// reciprocity, JSON-LD validity, sitemap ↔ pages, legacy redirects, robots.txt.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname;
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vinaum.github.io").replace(/\/$/, "");
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ORIGIN = SITE + BASE;
const errors = [];
const fail = (m) => errors.push(m);

const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f === "index.html") files.push(p);
  }
})(OUT);

const attr = (html, re) => (html.match(re) || [])[1];
const urlToFile = (url) => join(OUT, url.replace(ORIGIN, ""), "index.html");

const pages = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  const page = {
    file: relative(OUT, f),
    lang: attr(html, /<html[^>]*\slang="([^"]+)"/),
    title: attr(html, /<title>([^<]*)<\/title>/),
    description: attr(html, /<meta name="description" content="([^"]*)"/),
    canonical: attr(html, /<link rel="canonical" href="([^"]+)"/),
    robots: attr(html, /<meta name="robots" content="([^"]+)"/) ?? "",
    refresh: /http-equiv="refresh"/.test(html),
    hreflang: Object.fromEntries([...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]])),
    og: Object.fromEntries([...html.matchAll(/<meta property="og:([a-z:_]+)" content="([^"]*)"/g)].map((m) => [m[1], m[2]])),
    twitter: attr(html, /<meta name="twitter:card" content="([^"]+)"/),
    h1: [...html.matchAll(/<h1\b/g)].length,
    jsonld: [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]),
  };
  pages.push(page);
}

const indexable = pages.filter((p) => !p.robots.includes("noindex") && !p.file.startsWith("404") && !p.file.startsWith("_not-found"));
const legacy = pages.filter((p) => p.refresh);

for (const p of indexable) {
  const where = p.file;
  if (!p.title) fail(`${where}: missing <title>`);
  if (!p.description) fail(`${where}: missing meta description`);
  else if (p.description.length > 200) fail(`${where}: description ${p.description.length} chars`);
  else if (p.description.length > 160) console.warn(`  ! ${where}: description is ${p.description.length} chars (may be truncated in results)`);
  if (!p.canonical) fail(`${where}: missing canonical`);
  else if (!existsSync(urlToFile(p.canonical))) fail(`${where}: canonical points to missing page ${p.canonical}`);
  else if (urlToFile(p.canonical) !== join(OUT, p.file)) fail(`${where}: canonical is not self-referencing (${p.canonical})`);
  if (p.h1 !== 1) fail(`${where}: expected exactly one <h1>, found ${p.h1}`);
  for (const k of ["title", "description", "url", "image", "type", "locale"]) if (!p.og[k]) fail(`${where}: missing og:${k}`);
  if (p.twitter !== "summary_large_image") fail(`${where}: twitter card missing`);
  for (const k of ["pt-BR", "en", "x-default"]) if (!p.hreflang[k]) fail(`${where}: missing hreflang ${k}`);
  // reciprocity: each alternate must point back to this canonical
  for (const [lang, href] of Object.entries(p.hreflang)) {
    if (lang === "x-default") continue;
    const target = pages.find((q) => q.canonical === href);
    if (!target) fail(`${where}: hreflang ${lang} → ${href} not found`);
    else if (!Object.values(target.hreflang).includes(p.canonical)) fail(`${where}: hreflang ${lang} not reciprocal`);
    if (target && lang === "en" && target.lang !== "en") fail(`${target.file}: html lang should be en`);
    if (target && lang === "pt-BR" && target.lang !== "pt-BR") fail(`${target.file}: html lang should be pt-BR`);
  }
  if (p.jsonld.length === 0) fail(`${where}: no JSON-LD`);
  for (const raw of p.jsonld) {
    try {
      const data = JSON.parse(raw);
      if (data["@context"] !== "https://schema.org") fail(`${where}: JSON-LD without schema.org context`);
    } catch (e) {
      fail(`${where}: invalid JSON-LD (${e.message})`);
    }
  }
}
for (const key of ["title", "description", "canonical"]) {
  const seen = new Map();
  for (const p of indexable) {
    if (seen.has(p[key])) fail(`duplicate ${key}: ${p.file} and ${seen.get(p[key])}`);
    seen.set(p[key], p.file);
  }
}
for (const p of legacy) {
  if (!p.robots.includes("noindex")) fail(`${p.file}: legacy redirect should be noindex`);
  if (!p.canonical || !existsSync(urlToFile(p.canonical))) fail(`${p.file}: legacy redirect canonical missing/broken`);
}

// sitemap
const sitemap = readFileSync(join(OUT, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const loc of locs) {
  if (!existsSync(urlToFile(loc))) fail(`sitemap: ${loc} has no page`);
  const page = pages.find((p) => p.canonical === loc);
  if (!page || page.robots.includes("noindex")) fail(`sitemap: ${loc} is not an indexable canonical page`);
}
for (const p of indexable) if (!locs.includes(p.canonical)) fail(`sitemap: missing ${p.canonical}`);

// robots
const robots = readFileSync(join(OUT, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${ORIGIN}/sitemap.xml`)) fail(`robots.txt: sitemap line should be ${ORIGIN}/sitemap.xml`);
if (/Disallow: \/\s*$/m.test(robots)) fail("robots.txt disallows everything");

console.log(`Indexable pages: ${indexable.length} · legacy redirects: ${legacy.length} · sitemap URLs: ${locs.length}`);
for (const p of indexable) console.log(`  ${p.lang?.padEnd(5)} ${p.canonical.replace(SITE, "")}  —  ${p.title}`);
if (errors.length) {
  console.error(`\n${errors.length} SEO issue(s):`);
  errors.forEach((e) => console.error("  ✗ " + e));
  process.exit(1);
}
console.log("SEO audit passed.");
