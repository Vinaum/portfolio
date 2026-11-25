import type { Dictionary } from "@/content/types";
import { site } from "@/content";
import { HeroDiagram } from "@/components/diagrams/HeroDiagram";
import { LogoMark } from "@/components/ui/LogoMark";
import { findLogo } from "@/lib/logos";
import { ArrowDown, ArrowRight, MaskWords } from "@/components/ui/primitives";

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero, ids } = dict;
  const unicamp = findLogo("unicamp");
  // Keep the closing period as the single accent mark in the headline.
  const headline = hero.headline.replace(/\.$/, "");

  return (
    <section id="hero" aria-labelledby="hero-title" className="relative pt-[calc(var(--header-h)+2rem)] lg:min-h-[100svh]">
      <div className="container-x grid-12 gap-y-14 pb-14 lg:pb-10">
        <div className="col-span-12 flex flex-col lg:col-span-7 lg:pt-8">
          <p className="t-mono flex flex-wrap items-center gap-x-3 gap-y-1 text-muted" data-reveal="fade">
            <span className="pulse-dot" aria-hidden="true" />
            <span className="text-paper">{hero.availability}</span>
            <span aria-hidden="true" className="hidden text-line sm:inline">
              —
            </span>
            <span className="hidden sm:inline">{hero.availabilityDetail}</span>
          </p>

          <h1 id="hero-title" className="mt-8 font-display" data-reveal style={{ ["--d" as string]: 80 }}>
            <span className="block text-[clamp(1.05rem,1.5vw,1.3rem)] font-medium uppercase tracking-[0.14em] text-paper">
              {site.name}
            </span>
            <span className="sr-only"> — </span>
            <span className="t-mono mt-3 flex flex-wrap gap-x-3 gap-y-1 text-muted">
              <span className="text-accent">{hero.role}</span>
              <span aria-hidden="true">/</span>
              <span>{hero.roleSub}</span>
            </span>
          </h1>

          <p className="t-display mt-10 max-w-[14ch] text-paper lg:mt-12">
            <MaskWords text={headline} delay={180} />
            <span className="text-accent" aria-hidden="true">
              .
            </span>
          </p>

          <p className="t-lead mt-8 max-w-[48ch] text-paper/75" data-reveal style={{ ["--d" as string]: 520 }}>
            {hero.supporting}
          </p>

          <div className="mt-10 flex flex-wrap gap-3" data-reveal style={{ ["--d" as string]: 680 }}>
            <a href={`#${ids.work}`} className="btn btn-primary">
              {hero.ctaPrimary}
              <ArrowRight />
            </a>
            <a href={`#${ids.contact}`} className="btn">
              {hero.ctaSecondary}
              <ArrowRight />
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:self-center">
          <HeroDiagram
            locale={dict.locale}
            title={hero.diagramTitle}
            description={hero.diagramDescription}
          />
        </div>
      </div>

      <div className="container-x">
        <div className="grid-12 border-t border-line" data-reveal="fade" style={{ ["--d" as string]: 900 }}>
          <ul className="col-span-12 grid grid-cols-1 sm:grid-cols-3 lg:col-span-10">
            {hero.facts.map((f, i) => (
              <li
                key={f}
                className={`t-mono flex items-center gap-3 py-5 text-muted ${i > 0 ? "sm:border-l sm:border-line sm:pl-5" : ""} ${i > 0 ? "border-t border-line sm:border-t-0" : ""}`}
              >
                {i === 0 && unicamp ? <LogoMark logo={unicamp} alt="" height={1.4} /> : null}
                {f}
              </li>
            ))}
          </ul>
          <div className="col-span-2 hidden items-center justify-end lg:flex">
            <a href={`#${ids.about}`} className="t-mono flex items-center gap-3 text-muted transition-colors hover:text-accent">
              {dict.nav.about}
              <ArrowDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
