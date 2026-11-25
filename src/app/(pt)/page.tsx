import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/seo";
import { HomePage } from "@/components/HomePage";

const dict = getDictionary("pt-BR");

export const metadata: Metadata = pageMetadata({
  dict,
  title: dict.meta.title,
  description: dict.meta.description,
  path: "/",
  alternates: { "pt-BR": "/", en: "/en/" },
});

export default function Page() {
  return <HomePage locale="pt-BR" />;
}
