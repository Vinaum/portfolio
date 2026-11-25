import type { Dictionary } from "@/content/types";
import { aluraRecordUrl, learningAreas } from "@/content/shared/learning";
import { ArrowUpRight, SectionHeader } from "@/components/ui/primitives";

/** Continuous learning — real, completed courses from the public Alura record, grouped by area. */
export function Learning({ dict }: { dict: Dictionary }) {
  const { learning: l, ids } = dict;
  return (
    <section id={ids.learning} aria-labelledby="learning-title" className="relative border-t border-line bg-graphite/40 py-32 lg:py-44">
      <div className="container-x">
        <SectionHeader label={l.label} title={l.title} titleId="learning-title">
          <div className="col-span-12 lg:col-span-6" data-reveal>
            <p className="t-lead text-paper/70">{l.intro}</p>
            <a
              href={aluraRecordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="t-mono link-u mt-8 inline-flex items-center gap-2 text-paper"
            >
              {l.recordLink}
              <ArrowUpRight />
            </a>
          </div>
        </SectionHeader>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:mt-28 lg:grid-cols-3">
          {learningAreas.map((area, i) => (
            <section key={area.id} aria-labelledby={`learn-${area.id}`} data-reveal style={{ ["--d" as string]: (i % 3) * 90 }}>
              <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                <h3 id={`learn-${area.id}`} className="font-display text-[1.35rem] leading-tight tracking-[-0.02em] text-paper">
                  {l.areas[area.id]}
                </h3>
                <span className="t-mono-sm shrink-0 text-muted">{area.courses.length === 1 ? l.courseOne : l.courseMany.replace("{n}", String(area.courses.length))}</span>
              </div>
              {area.trail ? (
                <p className="t-mono-sm mt-4 normal-case tracking-[0.03em] text-accent">
                  {l.trail}: {area.trail}
                </p>
              ) : null}
              <ul className="mt-4">
                {area.courses.map((c) => (
                  <li key={c.title} className="py-2 text-[0.9rem] leading-snug text-paper/75">
                    {c.title}
                    {c.intro ? <span className="t-mono-sm ml-2 whitespace-nowrap text-muted">· {l.introductory}</span> : null}
                    {c.trail ? <span className="t-mono-sm ml-2 whitespace-nowrap text-muted">· {l.trail}</span> : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="t-mono-sm mt-16 normal-case tracking-[0.03em] text-muted">{l.note}</p>
      </div>
    </section>
  );
}
