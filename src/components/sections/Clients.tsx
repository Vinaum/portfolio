import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";
import { LogoMark } from "@/components/ui/LogoMark";
import { findLogo } from "@/lib/logos";

/** Hidden while dict.clients.items is empty — never shows placeholder names. */
export function Clients({ dict }: { dict: Dictionary }) {
  const { clients: c, ids } = dict;
  if (c.items.length === 0) return null;
  return (
    <section id={ids.clients} aria-labelledby="clients-title" className="relative border-t border-line py-32 lg:py-44">
      <div className="container-x">
        <SectionHeader label={c.label} title={c.title} titleId="clients-title">
          <p className="t-lead col-span-12 text-paper/70 lg:col-span-6" data-reveal>
            {c.intro}
          </p>
        </SectionHeader>

        <ul className="mt-20 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
          {c.items.map((item, i) => {
            const logo = item.logo ? findLogo(item.logo) : null;
            return (
              <li
                key={item.name}
                className="company group relative flex min-h-[13rem] flex-col justify-between gap-6 border-b border-r border-line p-7 lg:p-9"
                data-reveal
                style={{ ["--d" as string]: (i % 3) * 90 }}
              >
                <span className="company-rule absolute inset-x-0 top-[-1px] h-px bg-accent" aria-hidden="true" />
                <div className="flex min-h-[4.5rem] items-center">
                  {logo ? (
                    <LogoMark logo={logo} alt={item.name} height={2.6} className="max-w-[85%]" />
                  ) : (
                    <span className="company-wordmark font-display text-[clamp(1.8rem,2.6vw,2.4rem)] font-medium leading-none tracking-[-0.04em]">
                      {item.name}
                    </span>
                  )}
                </div>
                <p className="t-mono-sm normal-case tracking-[0.03em] text-muted">
                  {logo ? <span className="mr-2 text-paper">{item.name}</span> : null}
                  {item.context}
                </p>
              </li>
            );
          })}
        </ul>
        <p className="t-mono-sm mt-6 text-muted/70">{c.note}</p>
      </div>
    </section>
  );
}
