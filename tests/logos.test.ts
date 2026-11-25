import { describe, expect, it } from "vitest";
import { hasTransparency } from "@/lib/logos";

function png(colourType: number, extra = "") {
  const b = Buffer.alloc(40);
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]).copy(b, 0);
  b.write("IHDR", 12, "ascii");
  b[25] = colourType;
  return Buffer.concat([b, Buffer.from(extra)]);
}
function webp(chunk: "VP8 " | "VP8L" | "VP8X", alpha: boolean) {
  const b = Buffer.alloc(32);
  b.write("RIFF", 0, "ascii");
  b.write("WEBP", 8, "ascii");
  b.write(chunk, 12, "ascii");
  if (chunk === "VP8X" && alpha) b[20] = 0x10;
  if (chunk === "VP8L" && alpha) b[24] = 0x10;
  return b;
}

describe("logo transparency detection", () => {
  it("PNG", () => {
    expect(hasTransparency(png(6), "png")).toBe(true); // RGBA
    expect(hasTransparency(png(4), "png")).toBe(true); // grey + alpha
    expect(hasTransparency(png(2), "png")).toBe(false); // RGB
    expect(hasTransparency(png(3, "....tRNS"), "png")).toBe(true); // palette with transparency
  });
  it("WebP", () => {
    expect(hasTransparency(webp("VP8X", true), "webp")).toBe(true);
    expect(hasTransparency(webp("VP8X", false), "webp")).toBe(false);
    expect(hasTransparency(webp("VP8L", true), "webp")).toBe(true);
    expect(hasTransparency(webp("VP8L", false), "webp")).toBe(false);
    expect(hasTransparency(webp("VP8 ", false), "webp")).toBe(false);
  });
  it("SVG is treated as transparent, JPEG as opaque", () => {
    expect(hasTransparency(Buffer.from("<svg/>"), "svg")).toBe(true);
    expect(hasTransparency(Buffer.alloc(10), "jpg")).toBe(false);
  });
});

import { readFileSync } from "node:fs";
import { imageSize, opticalScale } from "@/lib/logos";

describe("logo sizing", () => {
  it("reads dimensions of the committed logo files", () => {
    expect(imageSize(readFileSync("public/logos/pier.png"), "png")).toEqual({ w: 365, h: 97 });
    expect(imageSize(readFileSync("public/logos/gobots.webp"), "webp")).toEqual({ w: 343, h: 160 });
    expect(imageSize(readFileSync("public/logos/pagegroup.webp"), "webp")).toEqual({ w: 658, h: 150 });
  });
  it("balances wide and compact marks", () => {
    expect(opticalScale({ w: 300, h: 100 })).toBeCloseTo(1);
    expect(opticalScale({ w: 600, h: 100 })).toBeLessThan(1);
    expect(opticalScale({ w: 200, h: 100 })).toBeGreaterThan(1);
    expect(opticalScale(null)).toBe(1);
  });
});
