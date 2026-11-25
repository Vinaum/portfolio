import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";
import { stackApplied, stackStudy } from "@/content/shared/stack";
import { CapabilityFigure } from "@/components/diagrams/CapabilityFigure";

export function Capabilities({ dict }: { dict: Dictionary }) {
  const { capabilities: c, ids } = dict;
  return (
    <section id={ids.capabilities} aria-labelledby="capabilities-title" className="relative border-t border-line bg-graphite/40 py-32 lg:py-44">
      <div className="container-x">
        <SectionHeader label={c.label} title={c.title} titleId="capabilities-title">
          <p className="t-lead col-span-12 text-paper/70 lg:col-span-6" data-reveal>
            {c.intro}
          </p>
        </SectionHeader>

        <ol className="mt-20 border-t border-line lg:mt-28">
          {c.items.map((item) => (
            <li key={item.id} className="grid-12 gap-y-10 border-b border-line py-14 lg:py-20" data-reveal>
              <div className="col-span-12 lg:col-span-6">
                <h3 className="t-h3 text-paper">{item.title}</h3>
                <p className="t-body mt-5">{item.summary}</p>
                <p className="t-mono-sm mt-6 text-muted">{item.keywords.join(" · ")}</p>
                <div className="mt-8 border-l border-accent pl-4">
                  <p className="t-mono text-accent">{item.evidenceLabel}</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-paper/80">{item.evidence}</p>
                </div>
              </div>
              <figure className="col-span-12 lg:col-span-5 lg:col-start-8">
                <div className="lg:pl-6">
                  <CapabilityFigure id={item.id} title={item.title} />
                </div>
              </figure>
            </li>
          ))}
        </ol>

        <div className="grid-12 mt-20 gap-y-8" data-reveal>
          <h3 className="t-mono col-span-12 text-paper lg:col-span-3">{c.stack.title}</h3>
          <dl className="col-span-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:col-span-9">
            <div>
              <dt className="t-mono-sm flex items-center gap-2 text-accent">
                <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true" />
                {c.stack.applied}
              </dt>
              <dd className="mt-4 text-[0.98rem] leading-[1.9] text-paper/85">{stackApplied.join(" · ")}</dd>
            </div>
            <div>
              <dt className="t-mono-sm flex items-center gap-2 text-muted">
                <span className="inline-block h-2 w-2 border border-muted" aria-hidden="true" />
                {c.stack.study}
              </dt>
              <dd className="mt-4 text-[0.98rem] leading-[1.9] text-paper/60">
                {stackStudy.join(" · ")}
                <span className="t-mono-sm mt-2 block normal-case tracking-[0.03em] text-muted">{c.stack.studyNote}</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
