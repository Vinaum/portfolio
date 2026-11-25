"use client";

import { useEffect, useRef } from "react";
import { heroDiagram } from "@/content";
import type { Locale } from "@/content/types";
import { Diagram } from "./Diagram";

interface Props {
  locale: Locale;
  title: string;
  description: string;
  figure: string;
}

const W = heroDiagram.width;
const H = heroDiagram.height;

/**
 * The hero's "living architecture": a real system-context diagram rendered in SVG,
 * with three depth layers that respond (subtly) to the pointer on desktop.
 * No animation loop — pointer updates are coalesced into a single rAF per event burst,
 * and SMIL packets pause whenever the diagram leaves the viewport.
 */
export function HeroDiagram({ locale, title, description, figure }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;

    // Pause SMIL packets off-screen.
    const svg = el.querySelector<SVGSVGElement>("svg.dg");
    const io = new IntersectionObserver(([entry]) => {
      if (!svg) return;
      if (entry.isIntersecting) svg.unpauseAnimations();
      else svg.pauseAnimations();
    });
    io.observe(el);

    if (reduce || !fine) return () => io.disconnect();

    let frame = 0;
    let nx = 0;
    let ny = 0;
    const section = el.closest("section") ?? el;
    const onMove = (ev: PointerEvent) => {
      const r = el.getBoundingClientRect();
      nx = Math.max(-1, Math.min(1, ((ev.clientX - r.left) / r.width) * 2 - 1));
      ny = Math.max(-1, Math.min(1, ((ev.clientY - r.top) / r.height) * 2 - 1));
      if (!frame) {
        frame = requestAnimationFrame(() => {
          el.style.setProperty("--mx", nx.toFixed(3));
          el.style.setProperty("--my", ny.toFixed(3));
          frame = 0;
        });
      }
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };
    section.addEventListener("pointermove", onMove as EventListener, { passive: true });
    section.addEventListener("pointerleave", onLeave);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onMove as EventListener);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const ticks = Array.from({ length: Math.floor(W / 40) + 1 }, (_, i) => i * 40);
  const vticks = Array.from({ length: Math.floor(H / 40) + 1 }, (_, i) => i * 40);

  return (
    <div
      ref={ref}
      className="hero-dg relative mx-auto w-full max-w-[620px]"
      style={{ aspectRatio: `${W + 60} / ${H + 60}` }}
      data-reveal="fade"
    >
      {/* Back layer: drawing grid, frame and rulers */}
      <svg
        viewBox={`-30 -30 ${W + 60} ${H + 60}`}
        className="layer-back pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="0.5" cy="0.5" r="0.9" fill="#303A34" />
          </pattern>
        </defs>
        <rect x="0" y="0" width={W} height={H} fill="url(#hero-dots)" />
        <rect x="0" y="0" width={W} height={H} fill="none" stroke="#303A34" strokeWidth="1" />
        {ticks.map((t) => (
          <line key={`t${t}`} x1={t} x2={t} y1={-6} y2={t % 200 === 0 ? -14 : -9} stroke="#3c4a42" />
        ))}
        {vticks.map((t) => (
          <line key={`v${t}`} y1={t} y2={t} x1={W + 6} x2={t % 200 === 0 ? W + 14 : W + 9} stroke="#3c4a42" />
        ))}
        {[
          [0, 0],
          [W, 0],
          [0, H],
          [W, H],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`} stroke="#36A477" strokeWidth="1">
            <line x1={x - 6} x2={x + 6} y1={y} y2={y} />
            <line x1={x} x2={x} y1={y - 6} y2={y + 6} />
          </g>
        ))}
      </svg>

      {/* Front layer: the architecture itself */}
      <div
        className="layer-front absolute"
        style={{
          left: `${(30 / (W + 60)) * 100}%`,
          top: `${(30 / (H + 60)) * 100}%`,
          width: `${(W / (W + 60)) * 100}%`,
          height: `${(H / (H + 60)) * 100}%`,
        }}
      >
        <Diagram
          data={heroDiagram}
          locale={locale}
          title={title}
          description={description}
          className="block h-full w-full"
          packets
          indices
          idPrefix="hero"
        />
      </div>

      {/* Annotation layer: figure label and drawing metadata */}
      <svg
        viewBox={`-30 -30 ${W + 60} ${H + 60}`}
        className="layer-annot hide-sm pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <text x="0" y="-16" className="fill-[#929B94] font-mono text-[10px] tracking-[0.12em]">
          {figure}
        </text>
        <text x={W} y={H + 22} textAnchor="end" className="fill-[#929B94] font-mono text-[10px] tracking-[0.12em]">
          REV. 2026 · SCALE 1:1
        </text>
        <text x="0" y={H + 22} className="fill-[#36A477] font-mono text-[10px] tracking-[0.12em]">
          ● LIVE
        </text>
      </svg>
    </div>
  );
}
