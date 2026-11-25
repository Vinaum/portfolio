import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/content/types";
import { getDictionary, getProjectBySlug, getProjects, projectPath } from "@/content";
import { pageMetadata } from "./seo";

export function caseStaticParams(locale: Locale) {
  return getProjects(locale).map((p) => ({ slug: p.slug[locale] }));
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
    title: `${project.content.name} — ${dict.caseStudy.metaTitleSuffix}`,
    description: project.content.tagline,
    path: projectPath(locale, project),
    alternates: { "pt-BR": projectPath("pt-BR", project), en: projectPath("en", project) },
  });
}
