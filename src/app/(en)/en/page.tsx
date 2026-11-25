import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/seo";
import { HomePage } from "@/components/HomePage";

const dict = getDictionary("en");

export const metadata: Metadata = pageMetadata({
  dict,
  title: dict.meta.title,
  description: dict.meta.description,
  path: "/en/",
  alternates: { "pt-BR": "/", en: "/en/" },
});

export default function Page() {
  return <HomePage locale="en" />;
}
