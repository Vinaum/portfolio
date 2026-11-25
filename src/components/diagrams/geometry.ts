import type { DiagramNode } from "@/content/types";

export type Pt = { x: number; y: number };

/** Parses absolute M/L/H/V path commands into a point list. */
export function pathPoints(d: string): Pt[] {
  const tokens = d.match(/[MLHV]|-?\d*\.?\d+/g) ?? [];
  const pts: Pt[] = [];
  let cmd = "";
  let x = 0;
  let y = 0;
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (/[MLHV]/.test(tok)) {
      cmd = tok;
      continue;
    }
    if (cmd === "M" || cmd === "L") {
      x = parseFloat(tok);
      y = parseFloat(tokens[++i]);
    } else if (cmd === "H") {
      x = parseFloat(tok);
    } else if (cmd === "V") {
      y = parseFloat(tok);
    }
    pts.push({ x, y });
  }
  return pts;
}

export function pathLength(d: string): number {
  const p = pathPoints(d);
  let len = 0;
  for (let i = 1; i < p.length; i++) len += Math.hypot(p[i].x - p[i - 1].x, p[i].y - p[i - 1].y);
  return len;
}

/** Small arrowhead polygon at the end of a path. */
export function arrowHead(d: string, size = 6): string {
  const p = pathPoints(d);
  if (p.length < 2) return "";
  const a = p[p.length - 2];
  const b = p[p.length - 1];
  const ang = Math.atan2(b.y - a.y, b.x - a.x);
  const s = size;
  const p1 = { x: b.x - s * Math.cos(ang) + (s / 2) * Math.sin(ang), y: b.y - s * Math.sin(ang) - (s / 2) * Math.cos(ang) };
  const p2 = { x: b.x - s * Math.cos(ang) - (s / 2) * Math.sin(ang), y: b.y - s * Math.sin(ang) + (s / 2) * Math.cos(ang) };
  return `${b.x},${b.y} ${p1.x.toFixed(2)},${p1.y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
}

function touches(n: DiagramNode, pt: Pt, tol = 3): boolean {
  return pt.x >= n.x - tol && pt.x <= n.x + n.w + tol && pt.y >= n.y - tol && pt.y <= n.y + n.h + tol;
}

/** Ids of the nodes an edge connects, derived from geometry (start & end points). */
export function edgeEndpoints(d: string, nodes: DiagramNode[]): string[] {
  const p = pathPoints(d);
  if (p.length < 2) return [];
  const ends = [p[0], p[p.length - 1]];
  const ids = new Set<string>();
  for (const pt of ends) {
    // Prefer the smallest node containing the point (inner nodes over containers).
    const hits = nodes.filter((n) => touches(n, pt)).sort((a, b) => a.w * a.h - b.w * b.h);
    if (hits[0]) ids.add(hits[0].id);
  }
  return [...ids];
}

/** Greedy word wrap by character budget — monospace makes this predictable. */
export function wrap(text: string, maxChars: number): string[] {
  if (text.length <= maxChars) return [text];
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}
