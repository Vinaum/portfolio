"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { Dictionary, TeamDimension } from "@/content/types";
import { MaskWords, SectionHeader } from "@/components/ui/primitives";

const HUB = { x: 300, y: 252 };
const GOAL = { x: 180, y: 18, w: 240, h: 46 };
const PROFILES = [
  { x: 110, y: 168 },
  { x: 128, y: 352 },
  { x: 300, y: 404 },
  { x: 472, y: 352 },
  { x: 490, y: 168 },
];

function TeamDiagram({ dict, dim }: { dict: Dictionary; dim: TeamDimension["id"] }) {
  const t = dict.teams;
  const ring = PROFILES.map((p, i) => {
    const q = PROFILES[(i + 1) % PROFILES.length];
    return `M${p.x} ${p.y} L${q.x} ${q.y}`;
  });
  return (
    <svg viewBox="0 0 600 470" className="team-dg block h-auto w-full" data-dim={dim} role="img" aria-labelledby="team-dg-title">
      <title id="team-dg-title">{t.figureCaption}</title>
      {/* Composition: complementary links */}
      {ring.map((d, i) => (
        <path key={`r${i}`} className="t-edge t-ring" d={d} />
      ))}
      {/* Spokes into the team */}
      {PROFILES.map((p, i) => (
        <path key={`s${i}`} className="t-edge t-spoke" d={`M${p.x} ${p.y} L${HUB.x} ${HUB.y}`} />
      ))}
      {/* Team → business objective */}
      <path className="t-edge t-goal" d={`M${HUB.x} ${HUB.y - 18} V${GOAL.y + GOAL.h}`} />

      <rect className="t-outcome" x={GOAL.x} y={GOAL.y} width={GOAL.w} height={GOAL.h} />
      <text className="t-label" x={300} y={GOAL.y + 28} textAnchor="middle">
        {t.outcome}
      </text>

      <rect className="t-hub" x={HUB.x - 44} y={HUB.y - 18} width={88} height={36} />
      <text className="t-label" x={HUB.x} y={HUB.y + 4} textAnchor="middle">
        {t.team}
      </text>

      {PROFILES.map((p, i) => (
        <g key={`p${i}`}>
          <rect className="t-node" x={p.x - 8} y={p.y - 8} width={16} height={16} />
          <text className="t-tech" x={p.x} y={p.y + 30} textAnchor="middle" style={{ paintOrder: "stroke", stroke: "#111513", strokeWidth: 5 }}>
            {t.profiles[i].tech}
          </text>
          <text className="t-style" x={p.x} y={p.y + 47} textAnchor="middle" style={{ paintOrder: "stroke", stroke: "#111513", strokeWidth: 5 }}>
            {t.profiles[i].style}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function TeamBuilding({ dict, index }: { dict: Dictionary; index: string }) {
  const { teams: t, ids } = dict;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = t.dimensions[active];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = t.dimensions.length;
    let next = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % n;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next >= 0) {
      e.preventDefault();
      setActive(next);
      tabs.current[next]?.focus();
    }
  };

  return (
    <section id={ids.teams} aria-labelledby="teams-title" className="relative border-t border-line bg-graphite/40 py-28 lg:py-40">
      <div className="container-x">
        <SectionHeader index={index} label={t.label} code={t.code} title={t.title} titleId="teams-title">
          <p className="t-lead col-span-12 text-paper/75 lg:col-span-7" data-reveal>
            {t.statement}
          </p>
        </SectionHeader>

        <div className="grid-12 mt-20 gap-y-12 lg:mt-28">
          {/* Dimensions as tabs */}
          <div className="col-span-12 lg:col-span-5" data-reveal>
            <p className="t-mono text-accent">{t.dimensionsLabel}</p>
            <div role="tablist" aria-orientation="vertical" aria-label={t.dimensionsLabel} className="mt-5 border-t border-line">
              {t.dimensions.map((d, i) => (
                <button
                  key={d.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`dim-tab-${d.id}`}
                  aria-selected={active === i}
                  aria-controls="dim-panel"
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKey(e, i)}
                  onMouseEnter={() => setActive(i)}
                  className="dim-tab grid w-full grid-cols-[2.75rem_1fr] gap-3 border-b border-line py-6 pl-5 pr-3 text-left"
                >
                  <span className={`t-mono pt-1 ${active === i ? "text-accent" : "text-muted"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span
                      className={`block font-display text-[1.35rem] leading-tight tracking-[-0.02em] transition-colors ${
                        active === i ? "text-paper" : "text-paper/60"
                      }`}
                    >
                      {d.title}
                    </span>
                    <span className="mt-2 block text-[0.94rem] leading-relaxed text-paper/68">{d.body}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Diagram panel */}
          <figure
            id="dim-panel"
            role="tabpanel"
            aria-labelledby={`dim-tab-${current.id}`}
            className="col-span-12 lg:col-span-7 lg:col-start-6"
            data-reveal
          >
            <div className="border border-line bg-obsidian/80 p-4 sm:p-8">
              <div className="t-mono-sm mb-4 flex items-center justify-between gap-4 text-muted">
                <span>{t.figure}</span>
                <span className="text-accent">
                  {String(active + 1).padStart(2, "0")} / {String(t.dimensions.length).padStart(2, "0")}
                </span>
              </div>
              <TeamDiagram dict={dict} dim={current.id} />
              <p className="mt-4 border-t border-line pt-4 font-display text-[1.15rem] tracking-[-0.015em] text-paper" aria-live="polite">
                {current.title} — <span className="text-paper/70">{current.reading}</span>
              </p>
            </div>
            <figcaption className="t-mono-sm mt-3 normal-case tracking-[0.03em] text-muted">{t.figureCaption}</figcaption>
          </figure>
        </div>

        {/* The number — with an explicit scope note */}
        <div className="grid-12 mt-20 items-end gap-y-6 border-t border-line pt-12 lg:mt-28" data-reveal>
          <p className="col-span-12 font-display text-[clamp(6rem,15vw,13rem)] font-medium leading-[0.8] tracking-[-0.06em] text-paper md:col-span-5 lg:col-span-4">
            {t.stat.value}
          </p>
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <p className="font-display text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.02em] text-paper">{t.stat.label}</p>
            <p className="t-mono-sm mt-4 flex items-center gap-3 text-muted">
              <span className="h-px w-4 bg-accent" aria-hidden="true" />
              {t.stat.note}
            </p>
          </div>
        </div>

        {/* People · Technology · Business — the bridge */}
        <div className="mt-24 border-t border-line pt-14 lg:mt-32 lg:pt-20">
          <p className="t-mono text-accent" data-reveal="fade">
            {t.bridge.label}
          </p>
          <blockquote className="mt-8">
            <MaskWords as="p" text={t.bridge.quote} className="t-h2 max-w-[22ch] text-paper" />
          </blockquote>

          <div className="grid-12 mt-16 gap-y-10" data-reveal>
            <div className="col-span-12 lg:col-span-4">
              <p className="t-body">{t.bridge.intro}</p>
              <div className="t-mono mt-10 hidden items-center gap-4 lg:flex" aria-hidden="true">
                <span className="border border-line px-3 py-2 text-paper">{t.bridge.systems}</span>
                <span className="h-px flex-1 bg-accent" />
                <span className="border border-accent bg-deep-green px-3 py-2 text-paper">{t.bridge.people}</span>
              </div>
            </div>
            <ol className="col-span-12 border-t border-line lg:col-span-7 lg:col-start-6">
              {t.bridge.abilities.map((a, i) => (
                <li key={a} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-line py-5">
                  <span className="t-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[clamp(1.15rem,1.7vw,1.45rem)] leading-snug tracking-[-0.015em] text-paper">{a}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
