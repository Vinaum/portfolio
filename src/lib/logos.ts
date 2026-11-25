import manifest from "@/content/generated/logos.json";
import { site } from "@/content";

/**
 * Logos live in public/logos/<id>.svg|png|webp|jpg. Before dev/build,
 * scripts/prepare-logos.mjs trims their empty margins and measures them;
 * this module turns those measurements into a balanced on-screen size.
 *
 * Treatments fit a logo into the dark palette:
 * - "silhouette": transparent logo → solid off-white shape.
 * - "tonal": transparent multi-tone logo → greyscale, lifted, internal detail kept.
 * - "invert": logo on an opaque (usually white) background → background removed, artwork light.
 * - "original": brand colours untouched.
 */
export type LogoTreatment = "silhouette" | "tonal" | "invert" | "original";

export type LogoId = "pier" | "gobots" | "pagegroup" | "sharepeoplehub" | "unicamp" | (string & {});

/** Optional per-logo treatment override. Leave empty to decide from the file. */
export const logoOverrides: Partial<Record<LogoId, LogoTreatment>> = {
  gobots: "tonal",
  unicamp: "original", // file already prepared for dark backgrounds (light artwork, red accents)
};

/** Optional fine-tuning on top of the automatic optical balance (1 = no change). */
export const logoScale: Partial<Record<LogoId, number>> = {
  pagegroup: 1.12, // hairline serif strokes read lighter than their ink area
  gobots: 1.12, // grey "tonal" rendering reads lighter than a solid silhouette
};

export interface Logo {
  src: string;
  treatment: LogoTreatment;
  /** Multiplier applied to the caller's base height. */
  scale: number;
  /** Width / height of the trimmed artwork. */
  aspect: number;
}

interface Measured {
  file: string;
  w: number;
  h: number;
  alpha: boolean;
  coverage: number;
}

const REFERENCE = 0.35 * 3; // a 3:1 logo that fills 35% of its box draws at scale 1

/**
 * Equal optical size = equal ink area. A logo drawn at height h covers
 * coverage × aspect × h² of ink, so h ∝ 1 / √(coverage × aspect).
 */
export function opticalScale(m: Pick<Measured, "w" | "h" | "coverage">): number {
  if (!m.w || !m.h || !m.coverage) return 1;
  const s = Math.sqrt(REFERENCE / (m.coverage * (m.w / m.h)));
  return Math.min(1.6, Math.max(0.6, s));
}

export function findLogo(id: LogoId): Logo | null {
  const m = (manifest as Record<string, Measured>)[id];
  if (!m) return null;
  return {
    src: `${site.basePath}/logos/${m.file}`,
    treatment: logoOverrides[id] ?? (m.alpha ? "silhouette" : "invert"),
    scale: opticalScale(m) * (logoScale[id] ?? 1),
    aspect: m.w / m.h,
  };
}
