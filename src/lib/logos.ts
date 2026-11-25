import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { CompanyId } from "@/content/types";
import { site } from "@/content";

/**
 * How a logo is fitted into the dark palette:
 * - "silhouette": transparent logo → solid off-white shape (any colour, any weight).
 * - "invert": logo on an opaque (usually white) background → background removed,
 *   artwork turned light. Uses grayscale + invert + screen blend.
 * - "original": brand colours untouched.
 */
export type LogoTreatment = "silhouette" | "invert" | "original";

/** Optional per-company override. Leave empty to let the build decide from the file. */
export const logoOverrides: Partial<Record<CompanyId, LogoTreatment>> = {
  pier: "original",   // ou "silhouette" / "invert"
};
export interface Logo {
  src: string;
  treatment: LogoTreatment;
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
export function companyLogo(id: CompanyId): Logo | null {
  for (const ext of EXTENSIONS) {
    const file = join(process.cwd(), "public", "logos", `${id}.${ext}`);
    if (!existsSync(file)) continue;
    const auto: LogoTreatment = hasTransparency(readFileSync(file), ext) ? "silhouette" : "invert";
    return { src: `${site.basePath}/logos/${id}.${ext}`, treatment: logoOverrides[id] ?? auto };
  }
  return null;
}
