import type { MetadataRoute } from "next";
import { absoluteUrl, getProjects, homePath, projectPath } from "@/content";

export const dynamic = "force-static";

/** Canonical, indexable URLs only — legacy redirect pages are excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const home = { "pt-BR": absoluteUrl(homePath("pt-BR")), en: absoluteUrl(homePath("en")) };
  const entries: MetadataRoute.Sitemap = [
    { url: home["pt-BR"], lastModified, priority: 1, alternates: { languages: home } },
    { url: home.en, lastModified, priority: 1, alternates: { languages: home } },
  ];
  for (const p of getProjects("pt-BR")) {
    const languages = { "pt-BR": absoluteUrl(projectPath("pt-BR", p)), en: absoluteUrl(projectPath("en", p)) };
    const priority = p.kind === "built" ? 0.8 : 0.5;
    entries.push({ url: languages["pt-BR"], lastModified, priority, alternates: { languages } });
    entries.push({ url: languages.en, lastModified, priority, alternates: { languages } });
  }
  return entries;
}
