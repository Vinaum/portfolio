import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { LegacyRedirect } from "@/components/projects/LegacyRedirect";
import { legacyMetadata, legacyStaticParams, resolveLegacy } from "@/lib/case-route";

type Props = { params: Promise<{ slug: string }> };

/** Former URL — kept so existing links still work. */
export const dynamicParams = false;
export function generateStaticParams() {
  return legacyStaticParams("pt-BR");
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return legacyMetadata("pt-BR", (await params).slug);
}
export default async function Page({ params }: Props) {
  const { project, target } = resolveLegacy("pt-BR", (await params).slug);
  return <LegacyRedirect target={target} name={project.content.name} notice={getDictionary("pt-BR").caseStudy.redirectNotice} />;
}
