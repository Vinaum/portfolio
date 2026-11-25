import type { Dictionary } from "@/content/types";
import { MaskWords, SectionHeader } from "@/components/ui/primitives";

/**
 * Beyond business — two clearly separated chapters in one editorial section:
 * teaching programming in social projects, and institutional leadership with social impact.
 */
export function Beyond({ dict }: { dict: Dictionary }) {
  const { beyond: b, ids } = dict;
  const t = b.teaching;
  const l = b.leadership;

  return (
    <section id={ids.beyond} aria-labelledby="beyond-title" className="relative border-t border-line py-32 lg:py-44">
      <div className="container-x">
        <SectionHeader label={b.label} title={b.title} titleId="beyond-title" />

        {/* Chapter 1 — Teaching */}
        <article aria-labelledby="teaching-title" className="grid-12 mt-24 gap-y-12 lg:mt-36">
          <div className="col-span-12 lg:col-span-5" data-reveal>
            <p className="t-mono text-accent">{t.label}</p>
            <MaskWords as="h3" id="teaching-title" text={t.title} className="t-h3 mt-6 max-w-[16ch] text-[clamp(1.9rem,3.2vw,2.9rem)] text-paper" />
            <div className="mt-12">
              <p className="t-mono-sm text-muted">{t.toolsLabel}</p>
              <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                {t.tools.map((tool) => (
                  <li key={tool} className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-tight tracking-[-0.025em] text-paper/90">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7" data-reveal>
            <p className="t-lead text-paper/85">{t.body}</p>
            <p className="mt-6 border-l border-accent pl-4 text-[0.98rem] leading-relaxed text-paper/70">{t.note}</p>

            <div className="mt-12">
              <div>
                <p className="t-mono-sm text-muted">{t.skillsLabel}</p>
                <ul className="mt-3">
                  {t.skills.map((s) => (
                    <li key={s} className="border-b border-line/60 py-3 text-[0.97rem] leading-snug text-paper/85 first:pt-0">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Chapter 2 — Leadership & social impact */}
        <article aria-labelledby="leadership-title" className="mt-28 border-t border-line pt-24 lg:mt-36 lg:pt-36">
          <div className="grid-12 gap-y-6" data-reveal>
            <p className="t-mono col-span-12 text-accent">{l.label}</p>
            <MaskWords as="h3" id="leadership-title" text={l.title} className="t-h3 col-span-12 max-w-[18ch] text-[clamp(1.9rem,3.2vw,2.9rem)] text-paper" />
          </div>

          <div className="grid-12 mt-16 gap-y-16">
            <div className="col-span-12 lg:col-span-5" data-reveal>
              <p className="t-mono-sm text-muted">{l.institutional.label}</p>
              <p className="mt-5 font-display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-[1.1] tracking-[-0.025em] text-paper">
                {l.institutional.role}
                <span className="block text-paper/60">{l.institutional.organization}</span>
              </p>
              <ul className="mt-8">
                {l.institutional.points.map((p) => (
                  <li key={p} className="border-b border-line/60 py-3 text-[0.97rem] text-paper/80 first:pt-0">
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7" data-reveal style={{ ["--d" as string]: 120 }}>
              <p className="t-mono-sm text-muted">{l.impact.label}</p>
              <p className="mt-5 font-display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-[1.1] tracking-[-0.025em] text-paper">
                {l.impact.title}
              </p>
              <p className="t-mono-sm mt-3 normal-case tracking-[0.03em] text-accent">{l.impact.partner}</p>
              <p className="t-body mt-8">{l.impact.body}</p>
              <ul className="mt-8">
                {l.impact.points.map((p) => (
                  <li key={p} className="flex gap-3 py-2 text-[0.97rem] text-paper/80">
                    <span className="mt-[0.72rem] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
