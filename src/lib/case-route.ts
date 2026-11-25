import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/content/types";
import {
  absoluteUrl,
  getDictionary,
  getProjectByLegacySlug,
  getProjectBySlug,
  getProjects,
  projectPath,
} from "@/content";
import { pageMetadata } from "./seo";

/* ---------- Canonical project pages: /projects/<slug>/ and /en/projects/<slug>/ ---------- */

export function caseStaticParams(locale: Locale) {
  return getProjects(locale).map((p) => ({ slug: p.slug }));
}

export function resolveCase(locale: Locale, slug: string) {
  const project = getProjectBySlug(locale, slug);
  if (!project) notFound();
  return project;
}

export function caseMetadata(locale: Locale, slug: string): Metadata {
  const project = getProjectBySlug(locale, slug);
  if (!project) return {};
  const dict = getDictionary(locale);
  return pageMetadata({
    dict,
    title: `${project.content.name} — ${
      project.kind === "concept" ? dict.caseStudy.conceptTitleSuffix : dict.caseStudy.metaTitleSuffix
    }`,
    description: project.content.seoDescription,
    path: projectPath(locale, project),
    alternates: { "pt-BR": projectPath("pt-BR", project), en: projectPath("en", project) },
    type: "article",
  });
}

/* ---------- Legacy URLs: /projetos/<old>/ and /en/work/<old>/ → static redirect pages ---------- */

export function legacyStaticParams(locale: Locale) {
  return getProjects(locale).map((p) => ({ slug: p.legacySlug[locale] }));
}

export function resolveLegacy(locale: Locale, slug: string) {
  const project = getProjectByLegacySlug(locale, slug);
  if (!project) notFound();
  return { project, target: projectPath(locale, project) };
}

export function legacyMetadata(locale: Locale, slug: string): Metadata {
  const project = getProjectByLegacySlug(locale, slug);
  if (!project) return {};
  return {
    title: project.content.name,
    robots: { index: false, follow: true },
    alternates: { canonical: absoluteUrl(projectPath(locale, project)) },
  };
}
