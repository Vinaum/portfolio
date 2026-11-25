import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";

/** Teaching & social impact — two short chapters side by side. */
export function Beyond({ dict }: { dict: Dictionary }) {
  const { beyond: b, ids } = dict;
  const t = b.teaching;
  const s = b.association;

  return (
    <section id={ids.beyond} aria-labelledby="beyond-title" className="relative border-t border-line bg-graphite/40 py-32 lg:py-44">
      <div className="container-x">
        <SectionHeader label={b.label} title={b.title} titleId="beyond-title" />

        <div className="grid-12 mt-20 gap-y-20 lg:mt-28">
          <article aria-labelledby="teaching-title" className="col-span-12 lg:col-span-5" data-reveal>
            <p className="t-mono-sm text-muted">{t.label}</p>
            <h3 id="teaching-title" className="t-h3 mt-5 text-paper">
              {t.title}
            </h3>
            <p className="mt-8 flex flex-wrap gap-x-5 gap-y-1 font-display text-[1.35rem] tracking-[-0.02em] text-paper/90">
              {t.tools.map((tool, i) => (
                <span key={tool}>
                  {tool}
                  {i < t.tools.length - 1 ? <span className="ml-5 text-line" aria-hidden="true">/</span> : null}
                </span>
              ))}
            </p>
            <p className="t-body mt-8">{t.body}</p>
            <p className="mt-6 border-l border-accent pl-4 text-[0.97rem] leading-relaxed text-paper/75">{t.note}</p>
            <ul className="mt-8 grid gap-x-6 sm:grid-cols-2">
              {t.skills.map((sk) => (
                <li key={sk} className="border-t border-line/60 py-3 text-[0.9rem] leading-snug text-paper/75">
                  {sk}
                </li>
              ))}
            </ul>
          </article>

          <article aria-labelledby="association-title" className="col-span-12 lg:col-span-6 lg:col-start-7" data-reveal style={{ ["--d" as string]: 120 }}>
            <p className="t-mono-sm text-muted">{s.label}</p>
            <h3 id="association-title" className="t-h3 mt-5 text-paper">
              {s.role}
              <span className="block text-paper/55">{s.organization}</span>
            </h3>
            <p className="t-mono-sm mt-6 normal-case tracking-[0.03em] text-accent">{s.partner}</p>
            <p className="t-body mt-6">{s.body}</p>
            <p className="t-mono-sm mt-8 flex flex-wrap gap-x-4 gap-y-2 text-muted">
              {s.points.map((p, i) => (
                <span key={p}>
                  {p}
                  {i < s.points.length - 1 ? <span className="ml-4" aria-hidden="true">·</span> : null}
                </span>
              ))}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
