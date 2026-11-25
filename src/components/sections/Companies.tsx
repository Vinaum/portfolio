import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";
import { companyLogo } from "@/lib/logos";
import { LogoMark } from "@/components/ui/LogoMark";

export function Companies({ dict }: { dict: Dictionary }) {
  const { companies: c, ids } = dict;
  return (
    <section id={ids.companies} aria-labelledby="companies-title" className="relative border-t border-line py-28 lg:py-40">
      <div className="container-x">
        <SectionHeader label={c.label} title={c.title} titleId="companies-title">
          <p className="t-lead col-span-12 text-paper/70 lg:col-span-6" data-reveal>
            {c.intro}
          </p>
        </SectionHeader>

        {/* Primary layer — the three environments, given full editorial weight */}
        <ol className="mt-20 grid grid-cols-1 border-t border-line lg:mt-28 lg:grid-cols-3">
          {c.featured.map((co, i) => {
            const logo = companyLogo(co.id);
            return (
              <li
                key={co.id}
                className={`company group relative flex flex-col border-b border-line py-12 lg:border-b-0 lg:py-14 ${
                  i > 0 ? "lg:border-l lg:pl-10" : ""
                } ${i < c.featured.length - 1 ? "lg:pr-10" : ""}`}
                data-reveal
                style={{ ["--d" as string]: i * 120 }}
              >
                <span className="company-rule absolute inset-x-0 top-[-1px] h-px bg-accent" aria-hidden="true" />
                <p className="t-mono text-muted lg:min-h-[2.6rem]">{co.sector}</p>

                <h3 className="mt-8 flex min-h-[5rem] items-center justify-center lg:mt-12 lg:min-h-[6.5rem]">
                  {logo ? (
                    <LogoMark logo={logo} alt={co.name} height={3.5} align="center" />
                  ) : (
                    <span className="company-wordmark font-display text-[clamp(3rem,5vw,4.75rem)] font-medium leading-[0.9] tracking-[-0.05em]">
                      {co.name}
                    </span>
                  )}
                </h3>
                {co.brands ? <p className="t-mono-sm mt-4 text-center text-muted">{co.brands}</p> : <p className="t-mono-sm mt-4 opacity-0" aria-hidden="true">·</p>}

                <p className="mt-8 border-t border-line pt-8 font-display text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-paper">
                  {co.descriptor}
                </p>

                <dl className="mt-8 flex flex-1 flex-col gap-7">
                  <div>
                    <dt className="t-mono-sm text-muted">{c.contextLabel}</dt>
                    <dd className="mt-2 text-[0.95rem] leading-relaxed text-paper/72">{co.context}</dd>
                  </div>
                  <div className="border-l border-accent pl-4">
                    <dt className="t-mono-sm text-accent">{c.exposureLabel}</dt>
                    <dd className="mt-2 text-[0.95rem] leading-relaxed text-paper/88">{co.exposure}</dd>
                  </div>
                  {co.role || co.period ? (
                    <div>
                      <dt className="t-mono-sm text-muted">{c.roleLabel}</dt>
                      <dd className="mt-2 text-[0.95rem] text-paper">
                        {[co.role, co.period].filter(Boolean).join(" · ")}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </li>
            );
          })}
        </ol>

        {/* Secondary layer — the rest of the trajectory */}
        <div className="grid-12 mt-16 gap-y-6 border-t border-line pt-10 lg:mt-20" data-reveal>
          <h3 className="t-mono col-span-12 text-paper lg:col-span-3">{c.othersTitle}</h3>
          <ul className="col-span-12 lg:col-span-9">
            {c.others.map((o) => (
              <li
                key={o.name}
                className="grid grid-cols-1 gap-1 border-b border-line py-4 first:pt-0 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_8rem] sm:items-baseline sm:gap-6"
              >
                <span className="font-display text-[1.2rem] tracking-[-0.015em] text-paper">{o.name}</span>
                <span className="t-mono-sm text-muted">{o.area}</span>
                <span className="t-mono-sm text-accent">{o.role ?? ""}</span>
              </li>
            ))}
          </ul>
          <p className="t-mono-sm col-span-12 text-muted/70 lg:col-span-9 lg:col-start-4">{c.trademarkNote}</p>
        </div>
      </div>
    </section>
  );
}
