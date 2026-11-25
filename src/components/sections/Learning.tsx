import type { Dictionary } from "@/content/types";
import { aluraRecordUrl, learningAreas } from "@/content/shared/learning";
import { ArrowUpRight } from "@/components/ui/primitives";

const PREVIEW = 3;

/** Complementary education — compact: per area, a count and the most relevant titles, plus the full record. */
export function Learning({ dict }: { dict: Dictionary }) {
  const { learning: l, ids } = dict;
  const count = (n: number) => (n === 1 ? l.courseOne : l.courseMany.replace("{n}", String(n)));

  return (
    <section id={ids.learning} aria-labelledby="learning-title" className="relative border-t border-line py-28 lg:py-36">
      <div className="container-x grid-12 gap-y-12">
        <div className="col-span-12 lg:col-span-4" data-reveal>
          <h2 id="learning-title" className="t-mono text-accent">
            {l.label}
          </h2>
          <p className="t-h3 mt-6 text-paper">{l.title}</p>
          <p className="t-body mt-5">{l.intro}</p>
          <a href={aluraRecordUrl} target="_blank" rel="noopener noreferrer" className="t-mono link-u mt-8 inline-flex items-center gap-2 text-paper">
            {l.recordLink}
            <ArrowUpRight />
          </a>
          <p className="t-mono-sm mt-8 normal-case tracking-[0.03em] text-muted">{l.note}</p>
        </div>

        <ul className="col-span-12 lg:col-span-7 lg:col-start-6" data-reveal>
          {learningAreas.map((area) => {
            const shown = area.courses.slice(0, PREVIEW);
            const rest = area.courses.length - shown.length;
            return (
              <li key={area.id} className="grid grid-cols-1 gap-2 border-t border-line/70 py-5 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-8">
                <p>
                  <span className="block font-display text-[1.15rem] leading-tight tracking-[-0.015em] text-paper">{l.areas[area.id]}</span>
                  <span className="t-mono-sm mt-1 block text-muted">{count(area.courses.length)}</span>
                </p>
                <p className="text-[0.9rem] leading-relaxed text-paper/70">
                  {shown.map((c, i) => (
                    <span key={c.title}>
                      {c.title}
                      {c.intro ? <span className="text-muted"> ({l.introductory})</span> : null}
                      {i < shown.length - 1 ? <span className="text-muted"> · </span> : null}
                    </span>
                  ))}
                  {rest > 0 ? <span className="t-mono-sm ml-2 whitespace-nowrap text-muted">{l.more.replace("{n}", String(rest))}</span> : null}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
