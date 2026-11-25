import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";
import { LogoMark } from "@/components/ui/LogoMark";
import { findLogo } from "@/lib/logos";

export function About({ dict, index }: { dict: Dictionary; index: string }) {
  const { about, ids } = dict;
  const unicamp = findLogo("unicamp");
  const edu = about.education;
  return (
    <section id={ids.about} aria-labelledby="about-title" className="relative py-28 lg:py-40">
      <div className="container-x">
        <SectionHeader index={index} label={about.label} code={about.code} title={about.title} titleId="about-title" />

        <div className="grid-12 mt-16 gap-y-14 lg:mt-24">
          <aside className="col-span-12 lg:col-span-4" aria-label={about.factsTitle}>
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]" data-reveal>
              <div className="company group relative mb-12 border border-line bg-obsidian/60 p-7">
                <span className="company-rule absolute inset-x-0 top-[-1px] h-px bg-accent" aria-hidden="true" />
                <p className="t-mono-sm text-accent">{edu.label}</p>
                <div className="mt-6 flex min-h-[4.5rem] items-end">
                  {unicamp ? (
                    <LogoMark logo={unicamp} alt={`${edu.short} — ${edu.institution}`} height={3.6} />
                  ) : (
                    <span className="company-wordmark font-display text-[3.4rem] font-medium leading-[0.85] tracking-[-0.045em]">
                      {edu.short}
                    </span>
                  )}
                </div>
                <p className="mt-6 border-t border-line pt-5 font-display text-[1.35rem] leading-tight tracking-[-0.02em] text-paper">
                  {edu.degree}
                </p>
                <p className="t-mono-sm mt-2 normal-case tracking-[0.03em] text-muted">{edu.institution}</p>
              </div>
              <p className="t-mono text-accent">{about.factsTitle}</p>
              <dl className="mt-5 border-t border-line">
                {about.facts.map((f) => (
                  <div key={f.k} className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-line py-4">
                    <dt className="t-mono pt-[3px] text-muted">{f.k}</dt>
                    <dd className="text-[0.95rem] leading-snug text-paper">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] tracking-[-0.025em] text-paper" data-reveal>
              {about.lead}
            </p>
            <div className="mt-12 flex flex-col gap-8">
              {about.paragraphs.map((p, i) => (
                <div key={i} className="grid grid-cols-[3rem_1fr] gap-4 md:grid-cols-[4.5rem_1fr]" data-reveal>
                  <span className="t-mono pt-[0.35rem] text-muted" aria-hidden="true">
                    ¶{String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="t-body">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
