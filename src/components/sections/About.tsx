import type { Dictionary } from "@/content/types";
import { MaskWords, SectionHeader } from "@/components/ui/primitives";
import { LogoMark } from "@/components/ui/LogoMark";
import { findLogo } from "@/lib/logos";

export const aboutAnchors = {
  education: "about-education",
  entrepreneurship: "about-entrepreneurship",
  leadership: "about-leadership",
} as const;

/** About: a non-linear path told as convergence, then education, entrepreneurship and leadership. */
export function About({ dict }: { dict: Dictionary }) {
  const { about: a, ids } = dict;
  const edu = a.education;
  const unicamp = findLogo("unicamp");

  return (
    <section id={ids.about} aria-labelledby="about-title" className="relative border-t border-line py-32 lg:py-44">
      <div className="container-x">
        <SectionHeader label={a.label} title={a.title} titleId="about-title">
          <p className="t-lead col-span-12 text-paper/75 lg:col-span-7" data-reveal>
            {a.lead}
          </p>
        </SectionHeader>

        {/* Convergence — the path as one line of steps, no dates */}
        <div className="mt-20 lg:mt-28" data-reveal>
          <h3 className="t-mono text-accent">{a.convergence.label}</h3>
          <ol className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {a.convergence.steps.map((s, i) => (
              <li key={s.title} className="relative border-t border-line pt-5">
                <span
                  aria-hidden="true"
                  className={`absolute -top-[3px] left-0 h-[5px] w-[5px] ${i === a.convergence.steps.length - 1 ? "bg-accent" : "bg-muted"}`}
                />
                <p className="font-display text-[1.08rem] leading-tight tracking-[-0.015em] text-paper">{s.title}</p>
                <p className="mt-2 text-[0.86rem] leading-snug text-paper/60">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-[60ch] border-l border-accent pl-5 font-display text-[clamp(1.2rem,1.8vw,1.5rem)] leading-[1.35] tracking-[-0.015em] text-paper">
            {a.convergence.closing}
          </p>
        </div>

        <div className="grid-12 mt-24 gap-y-20 lg:mt-32">
          {/* Academic education */}
          <section id={aboutAnchors.education} aria-labelledby={`${aboutAnchors.education}-h`} className="col-span-12 scroll-mt-28 lg:col-span-5" data-reveal>
            <h3 id={`${aboutAnchors.education}-h`} className="t-mono text-accent">
              {edu.label}
            </h3>
            <div className="mt-10 flex items-end gap-6">
              {unicamp ? (
                <LogoMark logo={unicamp} alt={`${edu.short} — ${edu.institution}`} height={5.2} />
              ) : (
                <span className="font-display text-[4rem] font-medium leading-[0.85] tracking-[-0.045em] text-paper">{edu.short}</span>
              )}
              <p className="t-mono-sm pb-1 normal-case tracking-[0.03em] text-muted">{edu.institution}</p>
            </div>
            <dl className="mt-10">
              {edu.items.map((item) => (
                <div key={item.title} className="grid grid-cols-[8.5rem_1fr] items-baseline gap-4 border-t border-line/70 py-5">
                  <dt className="t-mono-sm text-muted">{item.level}</dt>
                  <dd className="font-display text-[1.25rem] leading-tight tracking-[-0.02em] text-paper">
                    {item.title}
                    {item.institution ? <span className="text-paper/50"> — {item.institution}</span> : null}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="col-span-12 flex flex-col gap-20 lg:col-span-6 lg:col-start-7">
            {/* Entrepreneurship */}
            <section id={aboutAnchors.entrepreneurship} aria-labelledby={`${aboutAnchors.entrepreneurship}-h`} className="scroll-mt-28" data-reveal>
              <h3 id={`${aboutAnchors.entrepreneurship}-h`} className="t-mono text-accent">
                {a.entrepreneurship.label}
              </h3>
              <p className="mt-6 font-display text-[1.7rem] leading-tight tracking-[-0.025em] text-paper">
                {a.entrepreneurship.name}
                <span className="t-mono-sm ml-3 align-middle text-accent">{a.entrepreneurship.role}</span>
              </p>
              <p className="t-body mt-4">{a.entrepreneurship.body}</p>
              <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
                {a.entrepreneurship.highlights.map((h) => (
                  <div key={h.label} className="flex flex-col-reverse justify-end gap-1">
                    <dt className="text-[0.82rem] leading-snug text-muted">{h.label}</dt>
                    <dd className="font-display text-[2rem] leading-none tracking-[-0.04em] text-paper">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Leadership */}
            <section id={aboutAnchors.leadership} aria-labelledby={`${aboutAnchors.leadership}-h`} className="scroll-mt-28" data-reveal>
              <h3 id={`${aboutAnchors.leadership}-h`} className="t-mono text-accent">
                {a.leadership.label}
              </h3>
              <div className="mt-6 flex items-end gap-6">
                <MaskWords
                  as="span"
                  text={a.leadership.stat.value}
                  className="font-display text-[clamp(4.5rem,8vw,6.5rem)] font-medium leading-[0.8] tracking-[-0.06em] text-paper"
                />
                <span className="pb-1">
                  <span className="block font-display text-[1.1rem] leading-snug tracking-[-0.015em] text-paper">{a.leadership.stat.label}</span>
                  <span className="t-mono-sm mt-2 block normal-case tracking-[0.03em] text-muted">{a.leadership.stat.note}</span>
                </span>
              </div>
              <p className="t-body mt-8">{a.leadership.body}</p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
