import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { CompanyId } from "@/content/types";
import { site } from "@/content";

/**
 * How a logo is fitted into the dark palette:
 * - "silhouette": transparent logo → solid off-white shape (any colour, any weight).
 * - "invert": logo on an opaque (usually white) background → background removed,
 *   artwork turned light. Uses grayscale + invert + screen blend.
 * - "tonal": transparent logo with several tones (e.g. letters inside coloured shapes) →
 *   greyscale, lifted for the dark ground, keeping internal detail.
 * - "original": brand colours untouched.
 */
export type LogoTreatment = "silhouette" | "tonal" | "invert" | "original";

/** Optional per-logo override. Leave empty to let the build decide from the file. */
export const logoOverrides: Partial<Record<LogoId, LogoTreatment>> = {
  gobots: "tonal",
  unicamp: "original", // file already prepared for dark backgrounds (light artwork, red accents)
};

/** Intrinsic size from the file header (PNG, WebP, SVG viewBox); null when unknown. */
export function imageSize(buf: Buffer, ext: string): { w: number; h: number } | null {
  try {
    if (ext === "png" && buf.toString("ascii", 12, 16) === "IHDR") {
      return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
    }
    if (ext === "webp") {
      const chunk = buf.toString("ascii", 12, 16);
      if (chunk === "VP8X") return { w: buf.readUIntLE(24, 3) + 1, h: buf.readUIntLE(27, 3) + 1 };
      if (chunk === "VP8L") {
        const bits = buf.readUInt32LE(21);
        return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
      }
      if (chunk === "VP8 ") return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
    }
    if (ext === "svg") {
      const vb = buf.toString("utf8").match(/viewBox="[\d.\s-]*?([\d.]+)\s+([\d.]+)"/);
      if (vb) return { w: parseFloat(vb[1]), h: parseFloat(vb[2]) };
    }
  } catch {
    /* fall through */
  }
  return null;
}

/**
 * Optical balance: wide wordmarks are drawn a little shorter and compact marks a
 * little taller, so logos of different proportions read at a similar visual weight.
 */
export function opticalScale(size: { w: number; h: number } | null): number {
  if (!size || !size.w || !size.h) return 1;
  return Math.min(1.35, Math.max(0.75, Math.sqrt(3 / (size.w / size.h))));
}

/**
 * Manual size adjustment per logo, on top of the automatic optical balance (1 = no change). Logo files differ in padding and
 * proportions; raise a value when a logo looks small next to the others.
 */
export const logoScale: Partial<Record<LogoId, number>> = {
  pier: 0.85, // heavy, bold letters read large
  gobots: 1.1,
  pagegroup: 1.3, // fine serif strokes read small
};


/** Company ids, "unicamp", or any client id used in the clients section. */
export type LogoId = CompanyId | "unicamp" | (string & {});

export interface Logo {
  src: string;
  treatment: LogoTreatment;
  scale: number;
}

const EXTENSIONS = ["svg", "png", "webp", "jpg", "jpeg"] as const;

/** Reads only the file header — no image library needed. */
export function hasTransparency(buf: Buffer, ext: string): boolean {
  if (ext === "svg") return true;
  if (ext === "png") {
    if (buf.length < 26 || buf.toString("ascii", 1, 4) !== "PNG") return false;
    const colourType = buf[25];
    if (colourType === 4 || colourType === 6) return true; // grey+alpha, RGBA
    return buf.includes(Buffer.from("tRNS")); // palette / colour-key transparency
  }
  if (ext === "webp") {
    if (buf.length < 30 || buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") return false;
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8X") return (buf[20] & 0x10) !== 0; // extended: alpha flag
    if (chunk === "VP8L") return ((buf[24] >> 4) & 1) === 1; // lossless: alpha_is_used bit
    return false; // "VP8 " lossy without alpha
  }
  return false; // jpeg has no alpha
}

/**
 * Official logos are picked up at build time from public/logos/<id>.svg|png|webp|jpg.
 * Returns null when there is no file — the company name is then set as a wordmark.
 */
export function findLogo(id: LogoId): Logo | null {
  for (const ext of EXTENSIONS) {
    const file = join(process.cwd(), "public", "logos", `${id}.${ext}`);
    if (!existsSync(file)) continue;
    const buf = readFileSync(file);
    const auto: LogoTreatment = hasTransparency(buf, ext) ? "silhouette" : "invert";
    return {
      src: `${site.basePath}/logos/${id}.${ext}`,
      treatment: logoOverrides[id] ?? auto,
      scale: opticalScale(imageSize(buf, ext)) * (logoScale[id] ?? 1),
    };
  }
  return null;
}

export const companyLogo = findLogo;
