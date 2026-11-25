import type { Dictionary } from "@/content/types";
import { MaskWords, SectionHeader } from "@/components/ui/primitives";
import { LogoMark } from "@/components/ui/LogoMark";
import { findLogo } from "@/lib/logos";

/** About + Education: the personal narrative beside the academic foundation. */
export function About({ dict }: { dict: Dictionary }) {
  const { about, ids, teams } = dict;
  const edu = about.education;
  const unicamp = findLogo("unicamp");

  return (
    <section id={ids.about} aria-labelledby="about-title" className="relative py-32 lg:py-44">
      <div className="container-x">
        <SectionHeader label={about.label} title={about.title} titleId="about-title" />

        <div className="grid-12 mt-20 gap-y-20 lg:mt-28">
          <div className="col-span-12 lg:col-span-6">
            <p className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] tracking-[-0.025em] text-paper" data-reveal>
              {about.lead}
            </p>
            <div className="mt-12 flex flex-col gap-7">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="t-body" data-reveal>
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-5 lg:col-start-8" aria-labelledby="education-title" data-reveal>
            <h3 id="education-title" className="t-mono text-accent">
              {edu.label}
            </h3>
            <div className="mt-10 flex items-end gap-6">
              {unicamp ? (
                <LogoMark logo={unicamp} alt={`${edu.short} — ${edu.institution}`} height={5.2} />
              ) : (
                <span className="font-display text-[4rem] font-medium leading-[0.85] tracking-[-0.045em] text-paper">
                  {edu.short}
                </span>
              )}
              <p className="t-mono-sm pb-1 normal-case tracking-[0.03em] text-muted">{edu.institution}</p>
            </div>
            <dl className="mt-12">
              {edu.items.map((item) => (
                <div key={item.title} className="grid grid-cols-[8.5rem_1fr] items-baseline gap-4 border-t border-line/70 py-5">
                  <dt className="t-mono-sm text-muted">{item.level}</dt>
                  <dd className="font-display text-[1.3rem] leading-tight tracking-[-0.02em] text-paper">
                    {item.title}
                    {item.institution ? <span className="text-paper/50"> — {item.institution}</span> : null}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        {/* Leadership & team building — the differentiator, condensed */}
        <div className="mt-28 border-t border-line pt-20 lg:mt-36 lg:pt-28" aria-labelledby="teams-title">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 lg:col-span-5" data-reveal>
              <h3 id="teams-title" className="t-mono text-accent">
                {teams.label}
              </h3>
              <MaskWords as="p" text={teams.title} className="t-h3 mt-6 max-w-[16ch] text-[clamp(1.9rem,3.2vw,2.9rem)] text-paper" />
              <div className="mt-12 flex items-end gap-6">
                <span className="font-display text-[clamp(5rem,9vw,7.5rem)] font-medium leading-[0.8] tracking-[-0.06em] text-paper">
                  {teams.stat.value}
                </span>
                <span className="pb-1">
                  <span className="block font-display text-[1.15rem] leading-snug tracking-[-0.015em] text-paper">{teams.stat.label}</span>
                  <span className="t-mono-sm mt-2 block normal-case tracking-[0.03em] text-muted">{teams.stat.note}</span>
                </span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7" data-reveal>
              <p className="t-lead text-paper/80">{teams.statement}</p>
              <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {teams.dimensions.map((d) => (
                  <div key={d.id}>
                    <dt className="font-display text-[1.2rem] leading-tight tracking-[-0.015em] text-paper">{d.title}</dt>
                    <dd className="mt-2 text-[0.92rem] leading-relaxed text-paper/65">{d.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="grid-12 mt-20 gap-y-8" data-reveal>
            <blockquote className="col-span-12 lg:col-span-5">
              <p className="font-display text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.15] tracking-[-0.025em] text-paper">
                {teams.bridge.quote}
              </p>
            </blockquote>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <p className="t-mono-sm text-muted">{teams.bridge.label}</p>
              <ul className="mt-4">
                {teams.bridge.abilities.map((a) => (
                  <li key={a} className="border-b border-line/60 py-3 text-[0.97rem] text-paper/85 first:pt-0">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
