import { describe, expect, it } from "vitest";
import { getDictionary, getProjects, projectsShared, projectPath, tx } from "@/content";
import { locales, type Dictionary } from "@/content/types";

/** Recursively lists the structural shape (keys + array lengths) of a value. */
function shape(v: unknown, path = ""): string[] {
  if (Array.isArray(v)) return [`${path}[${v.length}]`, ...v.flatMap((x, i) => shape(x, `${path}[${i}]`))];
  if (v && typeof v === "object")
    return Object.keys(v).sort().flatMap((k) => shape((v as Record<string, unknown>)[k], `${path}.${k}`));
  return [path];
}

const strip = (d: Dictionary) => ({ ...d, locale: undefined, htmlLang: undefined, ogLocale: undefined });

describe("translations", () => {
  it("PT-BR and EN have the same structure", () => {
    expect(shape(strip(getDictionary("en")))).toEqual(shape(strip(getDictionary("pt-BR"))));
  });

  it("no empty strings in either language", () => {
    for (const l of locales) {
      const json = JSON.stringify(getDictionary(l));
      expect(json).not.toMatch(/:""/);
    }
  });

  it("section ids are unique per language", () => {
    for (const l of locales) {
      const ids = Object.values(getDictionary(l).ids);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });
});

describe("projects", () => {
  it("every shared project has content in both languages", () => {
    for (const l of locales) expect(getProjects(l)).toHaveLength(projectsShared.length);
  });

  it("slugs are unique and URL-safe", () => {
    for (const l of locales) {
      const slugs = projectsShared.map((p) => p.slug[l]);
      expect(new Set(slugs).size).toBe(slugs.length);
      slugs.forEach((s) => expect(s).toMatch(/^[a-z0-9-]+$/));
    }
  });

  it("concepts are never presented with a repository or documented results", () => {
    for (const l of locales)
      for (const p of getProjects(l).filter((x) => x.kind === "concept")) {
        expect(p.repo).toBeUndefined();
        expect(p.content.results).toHaveLength(0);
      }
  });

  it("routes are language-specific", () => {
    const p = projectsShared[0];
    expect(projectPath("pt-BR", p)).toMatch(/^\/projetos\//);
    expect(projectPath("en", p)).toMatch(/^\/en\/work\//);
  });

  it("diagram labels resolve in both languages", () => {
    for (const p of projectsShared)
      for (const n of [...p.architecture.nodes, ...p.flow.nodes])
        for (const l of locales) expect(tx(n.label, l).length).toBeGreaterThan(0);
  });
});
