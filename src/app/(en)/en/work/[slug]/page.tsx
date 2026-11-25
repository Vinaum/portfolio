import type { Metadata } from "next";
import { CaseStudy } from "@/components/projects/CaseStudy";
import { caseMetadata, caseStaticParams, resolveCase } from "@/lib/case-route";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return caseStaticParams("en");
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return caseMetadata("en", (await params).slug);
}
export default async function Page({ params }: Props) {
  const project = resolveCase("en", (await params).slug);
  return <CaseStudy project={project} locale="en" />;
}
