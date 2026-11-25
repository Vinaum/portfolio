import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";
import { LogoMark } from "@/components/ui/LogoMark";
import { findLogo } from "@/lib/logos";

/** About + Education: the personal narrative beside the academic foundation. */
export function About({ dict }: { dict: Dictionary }) {
  const { about, ids } = dict;
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
      </div>
    </section>
  );
}
