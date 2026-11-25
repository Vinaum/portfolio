"use client";

import { useMemo, useState } from "react";
import type { Diagram as DiagramData, Locale } from "@/content/types";
import { tx } from "@/content";
import { arrowHead, edgeEndpoints, pathLength, wrap } from "./geometry";

const LABEL_CHAR = 7.9; // px per char at 13px mono
const SUB_CHAR = 6.4; // px per char at 10.5px mono

export interface DiagramProps {
  data: DiagramData;
  locale: Locale;
  title: string;
  description?: string;
  className?: string;
  /** Concept diagrams use dashed strokes throughout. */
  planned?: boolean;
  /** Animated packets travelling along flow edges. */
  packets?: boolean;
  /** Draw-in sequencing on reveal (requires a parent with data-reveal or the class itself). */
  draw?: boolean;
  /** Enable hover highlighting of connected nodes / edges. */
  interactive?: boolean;
  /** Show node index numbers (N.01 …). */
  indices?: boolean;
  /** Extra class names applied per element for responsive hiding. */
  hideSubOnSmall?: boolean;
  idPrefix: string;
}

export function Diagram({
  data,
  locale,
  title,
  description,
  className = "",
  planned = false,
  packets = false,
  draw = true,
  interactive = true,
  indices = false,
  idPrefix,
}: DiagramProps) {
  const [hot, setHot] = useState<string | null>(null);

  const edges = useMemo(
    () =>
      data.edges.map((e) => ({
        ...e,
        ends: edgeEndpoints(e.d, data.nodes),
        len: pathLength(e.d),
        head: arrowHead(e.d),
      })),
    [data],
  );

  const hotNodes = useMemo(() => {
    if (!hot) return null;
    const set = new Set<string>([hot]);
    edges.forEach((e) => e.ends.includes(hot) && e.ends.forEach((id) => set.add(id)));
    return set;
  }, [hot, edges]);

  const titleId = `${idPrefix}-title`;
  const descId = `${idPrefix}-desc`;

  return (
    <svg
      viewBox={`0 0 ${data.width} ${data.height}`}
      className={`dg ${planned ? "dg-planned" : ""} ${draw ? "draw" : ""} ${className}`}
      role="img"
      aria-labelledby={description ? `${titleId} ${descId}` : titleId}
      onMouseLeave={() => setHot(null)}
    >
      <title id={titleId}>{title}</title>
      {description ? <desc id={descId}>{description}</desc> : null}

      {data.groups?.map((g, i) => (
        <g key={g.id} className="dn" style={{ ["--d" as string]: i * 80 }}>
          <rect className="group-rect" x={g.x} y={g.y} width={g.w} height={g.h} />
          <text className="group-label" x={g.x + 12} y={g.y + 18}>
            {tx(g.label, locale)}
          </text>
        </g>
      ))}

      <g>
        {edges.map((e, i) => {
          const isHot = hot ? e.ends.includes(hot) : false;
          const cls = hot ? (isHot ? "is-hot" : "is-dim") : "";
          return (
            <g key={e.id} className={`edge ${cls}`} data-flow={e.flow ? "true" : "false"}>
              <path
                className={`edge-path ${e.dashed ? "is-dashed dn" : planned ? "dn" : "dl"}`}
                d={e.d}
                style={{ ["--d" as string]: 300 + i * 90, ["--len" as string]: e.len.toFixed(1) }}
              />
              <polygon className="edge-arrow dn" points={e.head} style={{ ["--d" as string]: 700 + i * 90 }} />
              {e.label ? (
                <text
                  className="edge-label dn hide-sm"
                  x={e.lx}
                  y={e.ly}
                  textAnchor={e.la ?? "start"}
                  style={{ ["--d" as string]: 900 + i * 90 }}
                >
                  {tx(e.label, locale)}
                </text>
              ) : null}
            </g>
          );
        })}
      </g>

      <g>
        {data.nodes.map((n, i) => {
          const label = tx(n.label, locale);
          const sub = tx(n.sub, locale);
          const labelLines = wrap(label, Math.max(6, Math.floor((n.w - 24) / LABEL_CHAR)));
          const subLines = sub ? wrap(sub, Math.max(8, Math.floor((n.w - 24) / SUB_CHAR))) : [];
          const cls = hotNodes ? (hotNodes.has(n.id) ? "is-hot" : "is-dim") : "";
          return (
            <g
              key={n.id}
              className={`node dn ${cls}`}
              data-tone={n.tone ?? "default"}
              style={{ ["--d" as string]: i * 70 }}
              onMouseEnter={interactive ? () => setHot(n.id) : undefined}
              onFocus={interactive ? () => setHot(n.id) : undefined}
              onBlur={interactive ? () => setHot(null) : undefined}
            >
              <rect className="node-rect" x={n.x} y={n.y} width={n.w} height={n.h} />
              {n.tone === "primary" || n.tone === "accent" ? (
                <rect className="node-tick" x={n.x - 2} y={n.y - 2} width={4} height={4} />
              ) : null}
              {labelLines.map((line, li) => (
                <text key={li} className="node-label" x={n.x + 12} y={n.y + 22 + li * 16}>
                  {line}
                </text>
              ))}
              {subLines.map((line, si) => (
                <text
                  key={si}
                  className="node-sub"
                  x={n.x + 12}
                  y={n.y + 22 + labelLines.length * 16 + 2 + si * 14}
                >
                  {line}
                </text>
              ))}
              {indices ? (
                <text className="node-sub hide-sm" x={n.x + n.w - 10} y={n.y + 16} textAnchor="end">
                  {`N.${String(i + 1).padStart(2, "0")}`}
                </text>
              ) : null}
            </g>
          );
        })}
      </g>

      {packets ? (
        <g className="packets" aria-hidden="true">
          {edges
            .filter((e) => e.flow)
            .map((e, i) => {
              const dur = Math.max(2.4, e.len / 70);
              return (
                <circle key={e.id} className="packet" r={2.6} opacity={0}>
                  <animateMotion dur={`${dur}s`} begin={`${1.8 + i * 0.55}s`} repeatCount="indefinite" path={e.d} />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.1;0.85;1"
                    dur={`${dur}s`}
                    begin={`${1.8 + i * 0.55}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
        </g>
      ) : null}
    </svg>
  );
}
