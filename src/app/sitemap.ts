import type { MetadataRoute } from "next";
import { absoluteUrl, getProjects, projectPath } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const home = {
    url: absoluteUrl("/"),
    lastModified: now,
    alternates: { languages: { "pt-BR": absoluteUrl("/"), en: absoluteUrl("/en/") } },
  };
  const homeEn = { ...home, url: absoluteUrl("/en/") };
  const cases = getProjects("pt-BR").flatMap((p) => {
    const languages = { "pt-BR": absoluteUrl(projectPath("pt-BR", p)), en: absoluteUrl(projectPath("en", p)) };
    return [
      { url: languages["pt-BR"], lastModified: now, alternates: { languages } },
      { url: languages.en, lastModified: now, alternates: { languages } },
    ];
  });
  return [home, homeEn, ...cases];
}
