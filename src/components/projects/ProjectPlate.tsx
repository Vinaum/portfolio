import Link from "next/link";
import type { Dictionary, Locale } from "@/content/types";
import { projectPath, type Project } from "@/content";
import { Diagram } from "@/components/diagrams/Diagram";
import { ArrowRight } from "@/components/ui/primitives";

export function ProjectPlate({
  project,
  index,
  dict,
  locale,
}: {
  project: Project;
  index: number;
  dict: Dictionary;
  locale: Locale;
}) {
  const { content: p } = project;
  const isConcept = project.kind === "concept";
  const flip = index % 2 === 1;
  const href = projectPath(locale, project);
  const titleId = `plate-${project.id}`;

  return (
    <article className="plate border-b border-line" aria-labelledby={titleId} data-reveal>
      <div className="grid-12 gap-y-10 py-14 lg:py-20">
        <div className={`col-span-12 flex flex-col lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
          <div className="t-mono flex flex-wrap items-center gap-x-4 gap-y-2 text-muted">
            <span className="text-accent">P/{String(index + 1).padStart(2, "0")}</span>
            <span>{p.category}</span>
          </div>
          <h3 id={titleId} className="plate-title mt-6 font-display text-[clamp(2rem,3.4vw,3.25rem)] leading-[1.02] tracking-[-0.035em] text-paper/90">
            <Link href={href} className="after:absolute after:inset-0 after:z-[2] after:content-['']">
              {p.name}
            </Link>
          </h3>
          <p className="t-body mt-5">{p.tagline}</p>

          <dl className="mt-8 grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-3 border-t border-line pt-6 text-[0.92rem]">
            <dt className="t-mono pt-[3px] text-muted">{dict.work.status}</dt>
            <dd className="flex items-center gap-2 text-paper">
              <span
                aria-hidden="true"
                className={`inline-block h-2 w-2 ${isConcept ? "border border-muted" : "bg-accent"}`}
              />
              {p.status.label}
              {isConcept ? <span className="chip ml-1 border-accent/60 text-accent">{dict.work.concept}</span> : null}
            </dd>
            <dt className="t-mono pt-[3px] text-muted">{dict.work.stack}</dt>
            <dd className="font-mono text-[0.78rem] leading-relaxed text-paper/75">
              {project.stack.slice(0, 6).join(" · ")}
            </dd>
          </dl>

          <span className="plate-cta t-mono mt-10 inline-flex items-center gap-3 text-paper">
            {dict.work.viewCase}
            <ArrowRight />
          </span>
        </div>

        <figure className={`col-span-12 lg:col-span-7 ${flip ? "lg:order-1" : "lg:col-start-6"}`}>
          <div className="plate-figure overflow-hidden border border-line bg-obsidian/80 p-4 sm:p-6">
            <Diagram
              data={project.architecture}
              locale={locale}
              title={`${p.name} — ${dict.caseStudy.sections.architecture}`}
              planned={isConcept}
              interactive={false}
              className="block h-auto w-full"
              idPrefix={`plate-dg-${project.id}`}
            />
          </div>
          <figcaption className="t-mono-sm mt-3 flex justify-between gap-4 text-muted">
            <span>FIG. P{index + 1}.1</span>
            <span className="truncate">{dict.caseStudy.sections.architecture}</span>
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
