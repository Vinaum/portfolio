"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";

export function Journey({ dict }: { dict: Dictionary }) {
  const { journey: j, ids } = dict;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = j.chapters
      .map((c) => document.getElementById(`chapter-${c.id}`))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [j.chapters]);

  const progress = (active + 1) / j.chapters.length;

  return (
    <section id={ids.experience} aria-labelledby="journey-title" className="relative border-t border-line py-28 lg:py-40">
      <div className="container-x">
        <SectionHeader label={j.label} title={j.title} titleId="journey-title">
          <p className="t-lead col-span-12 text-paper/70 lg:col-span-6" data-reveal>
            {j.intro}
          </p>
        </SectionHeader>

        <div className="grid-12 mt-20 gap-y-12 lg:mt-28">
          {/* Sticky rail */}
          <nav aria-label={j.label} className="col-span-12 hidden lg:col-span-4 lg:block">
            <div className="sticky top-[calc(var(--header-h)+3rem)] flex gap-6">
              <div className="relative w-px bg-line" aria-hidden="true">
                <div className="journey-rail-progress absolute inset-0 bg-accent" style={{ ["--p" as string]: progress }} />
              </div>
              <ol className="flex flex-col gap-7 py-1">
                {j.chapters.map((c, i) => (
                  <li key={c.id}>
                    <a
                      href={`#chapter-${c.id}`}
                      className="chapter-link group flex items-baseline gap-4"
                      aria-current={active === i ? "step" : undefined}
                    >
                      <span>
                        <span className="block font-display text-[1.15rem] leading-tight tracking-[-0.015em] transition-colors group-hover:text-paper">
                          {c.title}
                        </span>
                        <span className="t-mono-sm mt-1 block text-muted">{c.period}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <ol className="col-span-12 flex flex-col lg:col-span-8">
            {j.chapters.map((c, i) => (
              <li
                key={c.id}
                id={`chapter-${c.id}`}
                data-index={i}
                className="scroll-mt-28 border-t border-line py-12 first:border-t-0 first:pt-0 lg:py-16"
              >
                <article data-reveal>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="t-mono text-accent">
                        {c.period}
                      </p>
                      <h3 className="t-h3 mt-4 text-paper">{c.title}</h3>
                    </div>
                  </div>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {c.organizations.map((o) => (
                      <li key={o.name} className="chip text-paper">
                        {o.name}
                        {o.role ? <span className="text-accent">· {o.role}</span> : null}
                      </li>
                    ))}
                  </ul>

                  <p className="t-body mt-7">{c.body}</p>

                  {c.highlights ? (
                    <dl className="mt-10 grid grid-cols-2 border-l border-t border-line md:grid-cols-4">
                      {c.highlights.map((h) => (
                        <div key={h.label} className="flex flex-col-reverse justify-end gap-2 border-b border-r border-line p-5">
                          <dt className="t-mono-sm leading-relaxed text-muted">{h.label}</dt>
                          <dd className="font-display text-[clamp(2rem,3vw,2.75rem)] leading-none tracking-[-0.04em] text-paper">
                            {h.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="t-mono-sm text-muted">{j.contributionsLabel}</span>
                    {c.contributions.map((k) => (
                      <span key={k} className="t-mono-sm flex items-center gap-2 text-paper/85">
                        <span className="h-px w-3 bg-accent" aria-hidden="true" />
                        {k}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
