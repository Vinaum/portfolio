import type { Metadata } from "next";
import type { Dictionary, Locale } from "@/content/types";
import { absoluteUrl, site } from "@/content";

export function pageMetadata({
  dict,
  title,
  description,
  path,
  alternates,
}: {
  dict: Dictionary;
  title: string;
  description: string;
  path: string;
  alternates: Record<Locale, string>;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(dict.locale === "en" ? "/og-en.png" : "/og-pt.png");
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    keywords: dict.meta.keywords,
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
      type: "website",
      url,
      title,
      description,
      siteName: site.name,
      locale: dict.ogLocale,
      alternateLocale: dict.locale === "en" ? ["pt_BR"] : ["en_US"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
    icons: { icon: `${site.basePath}/icon.svg` },
  };
}

export function personJsonLd(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: absoluteUrl(dict.locale === "en" ? "/en/" : "/"),
    email: `mailto:${site.email}`,
    jobTitle: "Solutions Engineer",
    description: dict.meta.description,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: site.alumniOf,
    },
    knowsAbout: [
      "Solutions Engineering",
      "Systems Integration",
      "API Integration",
      "Cloud Computing",
      "Automation",
      "PostgreSQL",
      "Supabase",
      "Next.js",
      "TypeScript",
      "Technical Recruitment",
    ],
    sameAs: [site.linkedin, site.github],
  };
}
