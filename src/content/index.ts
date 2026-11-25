import { en } from "./en";
import { ptBR } from "./pt-BR";
import { projectsShared, heroDiagram } from "./shared/projects";
import { site } from "./shared/site";
import type { Dictionary, Locale, ProjectContent, ProjectShared, Text } from "./types";

export { site, heroDiagram, projectsShared };
export * from "./types";

const dictionaries: Record<Locale, Dictionary> = { "pt-BR": ptBR, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "pt-BR" ? "en" : "pt-BR";
}

/** Resolves a language-neutral-or-localized Text value. */
export function tx(value: Text | undefined, locale: Locale): string {
  if (value === undefined) return "";
  return typeof value === "string" ? value : value[locale];
}

export type Project = ProjectShared & { content: ProjectContent };

export function getProjects(locale: Locale): Project[] {
  const dict = getDictionary(locale);
  return projectsShared.map((shared) => {
    const content = dict.projects.find((p) => p.id === shared.id);
    if (!content) throw new Error(`Missing ${locale} content for project ${shared.id}`);
    return { ...shared, content };
  });
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}

export function getProjectByLegacySlug(locale: Locale, slug: string): Project | undefined {
  return getProjects(locale).find((p) => p.legacySlug[locale] === slug);
}

/* ---------- Routes (no basePath — next/link adds it) ---------- */

export function homePath(locale: Locale): string {
  return locale === "en" ? "/en/" : "/";
}

export function projectPath(locale: Locale, project: Pick<ProjectShared, "slug">): string {
  return locale === "en" ? `/en/projects/${project.slug}/` : `/projects/${project.slug}/`;
}

/** Earlier project URLs — now static redirect pages. */
export function legacyProjectPath(locale: Locale, project: Pick<ProjectShared, "legacySlug">): string {
  return locale === "en" ? `/en/work/${project.legacySlug.en}/` : `/projetos/${project.legacySlug["pt-BR"]}/`;
}

export function sectionHref(locale: Locale, id: string, onHome = true): string {
  return onHome ? `#${id}` : `${homePath(locale)}#${id}`;
}

export function absoluteUrl(path: string): string {
  return `${site.url}${site.basePath}${path}`;
}
