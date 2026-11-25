import type { CompanyId, Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";
import { LogoMark } from "@/components/ui/LogoMark";
import { findLogo } from "@/lib/logos";

export const companyAnchor = (id: CompanyId | "others") => `exp-${id}`;

/** Professional experience: four featured companies with equal weight, the rest as a quiet second layer. */
export function Companies({ dict }: { dict: Dictionary }) {
  const { companies: c, ids } = dict;
  return (
    <section id={ids.companies} aria-labelledby="companies-title" className="relative border-t border-line py-32 lg:py-44">
      <div className="container-x">
        <SectionHeader label={c.label} title={c.title} titleId="companies-title">
          <p className="t-lead col-span-12 text-paper/70 lg:col-span-6" data-reveal>
            {c.intro}
          </p>
        </SectionHeader>

        <ol className="mt-20 grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 lg:mt-28 xl:grid-cols-4 xl:gap-x-10">
          {c.featured.map((co, i) => {
            const logo = findLogo(co.id);
            return (
              <li
                key={co.id}
                id={companyAnchor(co.id)}
                className="company relative flex scroll-mt-28 flex-col"
                data-reveal
                style={{ ["--d" as string]: i * 100 }}
              >
                <h3 className="flex h-28 items-center justify-center border-b border-line">
                  {logo ? (
                    <LogoMark logo={logo} alt={co.name} height={2.6} align="center" />
                  ) : (
                    <span className="company-wordmark font-display text-[2.1rem] font-medium leading-none tracking-[-0.04em]">
                      {co.name}
                    </span>
                  )}
                </h3>
                <span className="company-rule absolute inset-x-0 top-28 h-px bg-accent" aria-hidden="true" />

                <p className="t-mono-sm mt-6 text-muted">
                  {co.sector}
                  <span className="block pt-1 text-muted/70">{co.brands ?? " "}</span>
                </p>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-paper/55 xl:min-h-[4.25rem]">{co.description}</p>

                <dl className="mt-6 flex flex-col gap-6">
                  <div>
                    <dt className="t-mono-sm text-accent">{c.roleLabel}</dt>
                    <dd className="mt-2 font-display text-[1.2rem] leading-snug tracking-[-0.015em] text-paper xl:min-h-[3.25rem]">
                      {co.relationship}
                      {co.period ? <span className="text-paper/50"> · {co.period}</span> : null}
                    </dd>
                  </div>
                  <div>
                    <dt className="t-mono-sm text-muted">{c.responsibilitiesLabel}</dt>
                    <dd>
                      <ul className="mt-2">
                        {co.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2 py-1 text-[0.92rem] leading-snug text-paper/80">
                            <span className="mt-[0.6rem] h-px w-2.5 shrink-0 bg-line" aria-hidden="true" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="t-mono-sm text-muted">{c.skillsLabel}</dt>
                    <dd className="mt-2 text-[0.9rem] text-accent">{co.skills.join(" · ")}</dd>
                  </div>
                </dl>
              </li>
            );
          })}
        </ol>

        {/* Secondary layer */}
        <div id={companyAnchor("others")} className="grid-12 mt-28 scroll-mt-28 gap-y-6" data-reveal>
          <h3 className="t-mono col-span-12 text-muted lg:col-span-3">{c.othersTitle}</h3>
          <ul className="col-span-12 lg:col-span-9">
            {c.others.map((o) => (
              <li key={o.name} className="grid grid-cols-1 gap-1 border-t border-line/70 py-5 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:gap-8">
                <span>
                  <span className="font-display text-[1.15rem] tracking-[-0.015em] text-paper">{o.name}</span>
                  {o.role ? <span className="t-mono-sm ml-3 text-accent">{o.role}</span> : null}
                </span>
                <span className="text-[0.9rem] leading-relaxed text-muted">
                  {o.area}
                  {o.note ? <span className="block text-muted/80">{o.note}</span> : null}
                </span>
              </li>
            ))}
          </ul>
          <p className="t-mono-sm col-span-12 text-muted/60 lg:col-span-9 lg:col-start-4">{c.trademarkNote}</p>
        </div>
      </div>
    </section>
  );
}
