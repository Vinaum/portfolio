"use client";

import { useState } from "react";
import type { Dictionary, TechStatus } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";

type Filter = "all" | TechStatus;

export function Technology({ dict, index }: { dict: Dictionary; index: string }) {
  const { technology: t, ids } = dict;
  const [filter, setFilter] = useState<Filter>("all");
  const options: { id: Filter; label: string }[] = [
    { id: "all", label: t.all },
    { id: "applied", label: t.applied },
    { id: "study", label: t.study },
  ];

  return (
    <section id={ids.technology} aria-labelledby="technology-title" className="relative border-t border-line bg-graphite/40 py-28 lg:py-40">
      <div className="container-x">
        <SectionHeader index={index} label={t.label} code={t.code} title={t.title} titleId="technology-title">
          <p className="t-lead col-span-12 text-paper/70 lg:col-span-6" data-reveal>
            {t.intro}
          </p>
        </SectionHeader>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-y border-line py-4" data-reveal="fade">
          <div className="t-mono flex flex-wrap items-center gap-x-6 gap-y-2 text-muted">
            <span className="flex items-center gap-2">
              <span className="marker" data-status="applied" aria-hidden="true" />
              {t.applied}
            </span>
            <span className="flex items-center gap-2">
              <span className="marker" data-status="study" aria-hidden="true" />
              {t.study}
            </span>
          </div>
          <div role="group" aria-label={t.filterLabel} className="flex border border-line">
            {options.map((o) => (
              <button
                key={o.id}
                type="button"
                aria-pressed={filter === o.id}
                onClick={() => setFilter(o.id)}
                className={`t-mono-sm h-9 px-3 transition-colors sm:px-4 ${
                  filter === o.id ? "bg-paper text-obsidian" : "text-muted hover:text-paper"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <div className="tech-map mt-0 grid grid-cols-1 border-l border-line sm:grid-cols-2 lg:grid-cols-3" data-filter={filter}>
          {t.groups.map((g, gi) => (
            <div key={g.id} className="border-b border-r border-line p-6 sm:p-8" data-reveal style={{ ["--d" as string]: (gi % 3) * 90 }}>
              <h3 className="t-mono flex items-baseline justify-between gap-4 text-paper">
                <span>{g.title}</span>
                <span className="text-muted">T.{String(gi + 1).padStart(2, "0")}</span>
              </h3>
              <ul className="mt-8 flex flex-col gap-5">
                {g.items.map((item) => (
                  <li key={item.name} className="tech-item flex gap-3" data-status={item.status}>
                    <span className="marker mt-[0.55rem]" data-status={item.status} aria-hidden="true" />
                    <div>
                      <p className="font-display text-[1.2rem] leading-tight tracking-[-0.015em] text-paper">
                        {item.name}
                        <span className="sr-only"> — {item.status === "applied" ? t.applied : t.study}</span>
                      </p>
                      <p className="t-mono-sm mt-1.5 normal-case tracking-[0.02em] text-muted">
                        {item.evidence ?? t.study}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
