import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";
import { CapabilityFigure } from "@/components/diagrams/CapabilityFigure";

export function Capabilities({ dict }: { dict: Dictionary }) {
  const { capabilities: c, ids } = dict;
  return (
    <section id={ids.capabilities} aria-labelledby="capabilities-title" className="relative border-t border-line bg-graphite/40 py-28 lg:py-40">
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
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Keywords">
                  {item.keywords.map((k) => (
                    <li key={k} className="chip">
                      {k}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-l border-accent pl-4">
                  <p className="t-mono text-accent">{item.evidenceLabel}</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-paper/80">{item.evidence}</p>
                </div>
              </div>
              <figure className="col-span-12 lg:col-span-5 lg:col-start-8">
                <div className="border border-line bg-obsidian/70 p-5 sm:p-7">
                  <CapabilityFigure id={item.id} title={item.title} />
                </div>
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
