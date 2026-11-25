import type { Metadata } from "next";
import type { Dictionary, Locale } from "@/content/types";
import { absoluteUrl, homePath, projectPath, site, type Project } from "@/content";

/* ============================================================
   Page metadata — unique title, description, canonical, hreflang, OG, Twitter
   ============================================================ */

export function pageMetadata({
  dict,
  title,
  description,
  path,
  alternates,
  type = "website",
}: {
  dict: Dictionary;
  title: string;
  description: string;
  path: string;
  alternates: Record<Locale, string>;
  type?: "website" | "article" | "profile";
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(dict.locale === "en" ? "/og-en.png" : "/og-pt.png");
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    authors: [{ name: site.name, url: site.linkedin }],
    creator: site.name,
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": absoluteUrl(alternates["pt-BR"]),
        en: absoluteUrl(alternates.en),
        "x-default": absoluteUrl(alternates["pt-BR"]),
      },
    },
    openGraph: {
      type: type === "profile" ? "profile" : type,
      url,
      title,
      description,
      siteName: site.name,
      locale: dict.ogLocale,
      alternateLocale: dict.locale === "en" ? ["pt_BR"] : ["en_US"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === "profile" ? { firstName: "Vinicius", lastName: "Campanha Sartori" } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage, alt: title }],
    },
    robots: { index: true, follow: true },
    icons: { icon: `${site.basePath}/icon.svg` },
  };
}

/* ============================================================
   Structured data (JSON-LD). Only facts that are visible on the site.
   ============================================================ */

const PERSON_ID = `${site.url}${site.basePath}/#person`;
const WEBSITE_ID = `${site.url}${site.basePath}/#website`;

export function personNode(dict: Dictionary) {
  const edu = dict.about.education;
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.name,
    alternateName: site.shortName,
    url: absoluteUrl(homePath(dict.locale)),
    image: absoluteUrl(dict.locale === "en" ? "/og-en.png" : "/og-pt.png"),
    email: `mailto:${site.email}`,
    jobTitle: "Solutions Engineer",
    description: dict.meta.description,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: `${edu.institution} (${edu.short})`,
      sameAs: "https://www.unicamp.br/",
    },
    hasCredential: edu.items.map((item) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: item.level,
      name: item.title,
    })),
    knowsAbout: [
      "Solutions Engineering",
      "Solutions Architecture",
      "Systems Integration",
      "API Integration",
      "REST APIs",
      "Webhooks",
      "Business Process Automation",
      "CI/CD",
      "PostgreSQL",
      "Supabase",
      "Team Building",
      "Technical Talent Assessment",
      "Stakeholder Management",
    ],
    sameAs: [site.linkedin, site.github],
  };
}

export function homeJsonLd(dict: Dictionary) {
  const url = absoluteUrl(homePath(dict.locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: absoluteUrl("/"),
        name: site.name,
        inLanguage: ["pt-BR", "en"],
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profile`,
        url,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: dict.htmlLang,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
      },
      personNode(dict),
    ],
  };
}

export function projectJsonLd(dict: Dictionary, project: Project) {
  const url = absoluteUrl(projectPath(dict.locale, project));
  const p = project.content;
  const base = {
    "@id": `${url}#work`,
    name: p.name,
    description: p.seoDescription,
    url,
    inLanguage: dict.htmlLang,
    author: { "@id": PERSON_ID },
    keywords: project.stack.join(", "),
  };
  const work =
    project.kind === "built" && project.repo
      ? {
          "@type": "SoftwareSourceCode",
          ...base,
          codeRepository: project.repo,
          programmingLanguage: project.stack.filter((s) => /^(TypeScript|JavaScript.*|Python|PL\/pgSQL|SQL)$/.test(s)),
          runtimePlatform: project.stack.filter((s) => /Next\.js|Supabase|Node/.test(s)),
          creativeWorkStatus: p.status.label,
        }
      : { "@type": "CreativeWork", ...base, creativeWorkStatus: p.status.label };

  return {
    "@context": "https://schema.org",
    "@graph": [
      work,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.nav.home, item: absoluteUrl(homePath(dict.locale)) },
          {
            "@type": "ListItem",
            position: 2,
            name: dict.caseStudy.work,
            item: `${absoluteUrl(homePath(dict.locale))}#${dict.ids.work}`,
          },
          { "@type": "ListItem", position: 3, name: p.name, item: url },
        ],
      },
      { ...personNode(dict), hasCredential: undefined, knowsAbout: undefined },
    ],
  };
}
