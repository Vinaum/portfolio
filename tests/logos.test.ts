import { describe, expect, it } from "vitest";
import manifest from "@/content/generated/logos.json";
import { findLogo, opticalScale } from "@/lib/logos";

describe("logo optical sizing", () => {
  it("reference logo draws at scale 1", () => {
    expect(opticalScale({ w: 300, h: 100, coverage: 0.35 })).toBeCloseTo(1);
  });

  it("wider or heavier logos draw smaller, compact or lighter ones larger", () => {
    const base = opticalScale({ w: 300, h: 100, coverage: 0.35 });
    expect(opticalScale({ w: 600, h: 100, coverage: 0.35 })).toBeLessThan(base);
    expect(opticalScale({ w: 300, h: 100, coverage: 0.6 })).toBeLessThan(base);
    expect(opticalScale({ w: 200, h: 100, coverage: 0.35 })).toBeGreaterThan(base);
    expect(opticalScale({ w: 300, h: 100, coverage: 0.2 })).toBeGreaterThan(base);
  });

  it("is clamped to a sane range", () => {
    expect(opticalScale({ w: 5000, h: 10, coverage: 1 })).toBe(0.6);
    expect(opticalScale({ w: 10, h: 100, coverage: 0.01 })).toBe(1.6);
  });

  it("every prepared logo resolves with a positive scale", () => {
    for (const id of Object.keys(manifest)) {
      const logo = findLogo(id);
      expect(logo).not.toBeNull();
      expect(logo!.scale).toBeGreaterThan(0);
      expect(logo!.src).toMatch(/\/logos\/_\//);
    }
  });

  it("featured company logos end up with similar ink area", () => {
    const area = (id: string) => {
      const m = (manifest as Record<string, { w: number; h: number; coverage: number }>)[id];
      const logo = findLogo(id)!;
      const h = logo.scale; // relative height
      return m.coverage * (m.w / m.h) * h * h;
    };
    const ids = ["pier", "gobots", "pagegroup"].filter((id) => id in manifest);
    const areas = ids.map(area);
    expect(Math.max(...areas) / Math.min(...areas)).toBeLessThan(1.4);
  });
});
