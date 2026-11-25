import type { Capability } from "@/content/types";

/**
 * One distinct, hand-drawn technical figure per capability area.
 * Pure SVG, server-rendered; lines draw in when the row is revealed.
 */
const L = { pathLength: 1, className: "dl", style: { ["--len" as string]: 1 } } as const;
const line = "#3c4a42";
const green = "#36A477";
const muted = "#929B94";
const paper = "#E8EAE5";

function Box({ x, y, w, h, label, tone = "default", d = 0 }: { x: number; y: number; w: number; h: number; label: string; tone?: "default" | "accent" | "ghost"; d?: number }) {
  return (
    <g className="dn" style={{ ["--d" as string]: d }}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={tone === "accent" ? "#146B4C" : tone === "ghost" ? "none" : "#1B2420"}
        stroke={tone === "accent" ? green : line}
        strokeDasharray={tone === "ghost" ? "3 3" : undefined}
      />
      <text x={x + 10} y={y + h / 2 + 3.5} fill={paper} fontSize="10" fontFamily="var(--font-mono)" letterSpacing="0.08em">
        {label}
      </text>
    </g>
  );
}

function Label({ x, y, children, anchor = "start", color = muted, d = 0 }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end"; color?: string; d?: number }) {
  return (
    <text className="dn" style={{ ["--d" as string]: d }} x={x} y={y} fill={color} fontSize="9.5" fontFamily="var(--font-mono)" letterSpacing="0.06em" textAnchor={anchor}>
      {children}
    </text>
  );
}

function Architecture() {
  return (
    <>
      <Box x={10} y={40} w={118} h={36} label="REQUIREMENTS" />
      <Box x={10} y={150} w={118} h={36} label="CONSTRAINTS" d={80} />
      <path {...L} d="M128 58 H160 V113 H186" stroke={line} fill="none" />
      <path {...L} d="M128 168 H160 V113" stroke={line} fill="none" />
      <Box x={186} y={96} w={74} h={34} label="OPTIONS" d={200} />
      <path {...L} d="M260 113 H282 V62 H300" stroke={line} fill="none" style={{ ["--d" as string]: 300, ["--len" as string]: 1 }} />
      <path {...L} d="M260 113 H300" stroke={green} fill="none" style={{ ["--d" as string]: 360, ["--len" as string]: 1 }} />
      <path {...L} d="M282 113 V164 H300" stroke={line} fill="none" style={{ ["--d" as string]: 420, ["--len" as string]: 1 }} />
      <Label x={306} y={66} d={500}>A · cost</Label>
      <Label x={306} y={117} color={green} d={560}>B · fit ✓</Label>
      <Label x={306} y={168} d={620}>C · risk</Label>
      <Label x={10} y={222} d={700}>{"→ DECISION RECORD · WHY · WHAT WOULD CHANGE IT"}</Label>
    </>
  );
}

function Integration() {
  const cols = [
    { x: 50, label: "APP" },
    { x: 200, label: "API" },
    { x: 350, label: "SERVICE" },
  ];
  return (
    <>
      {cols.map((c, i) => (
        <g key={c.label}>
          <Box x={c.x - 40} y={10} w={80} h={30} label={c.label} d={i * 80} />
          <path {...L} d={`M${c.x} 40 V230`} stroke={line} strokeDasharray="2 4" fill="none" className="dn" />
        </g>
      ))}
      <path {...L} d="M50 80 H196" stroke={green} fill="none" style={{ ["--d" as string]: 300, ["--len" as string]: 1 }} />
      <polygon className="dn" points="200,80 192,76 192,84" fill={green} style={{ ["--d" as string]: 700 }} />
      <Label x={58} y={72} d={400}>POST /orders</Label>
      <path {...L} d="M200 122 H54" stroke={line} strokeDasharray="4 3" fill="none" className="dn" style={{ ["--d" as string]: 500 }} />
      <polygon className="dn" points="50,122 58,118 58,126" fill={line} style={{ ["--d" as string]: 700 }} />
      <Label x={192} y={114} anchor="end" d={600}>202 accepted</Label>
      <path {...L} d="M200 164 H346" stroke={line} fill="none" style={{ ["--d" as string]: 800, ["--len" as string]: 1 }} />
      <polygon className="dn" points="350,164 342,160 342,168" fill={line} style={{ ["--d" as string]: 1200 }} />
      <Label x={208} y={156} d={900}>event · order.created</Label>
      <path {...L} d="M350 204 H204" stroke={green} fill="none" style={{ ["--d" as string]: 1100, ["--len" as string]: 1 }} />
      <polygon className="dn" points="200,204 208,200 208,208" fill={green} style={{ ["--d" as string]: 1500 }} />
      <Label x={342} y={196} anchor="end" d={1200}>webhook · HMAC signed</Label>
    </>
  );
}

function Cloud() {
  const bands = [
    { label: "EDGE · CDN · HTTPS", y: 20 },
    { label: "COMPUTE · CONTAINERS", y: 70 },
    { label: "DATA · MANAGED POSTGRES", y: 120 },
    { label: "IaC · CI/CD PIPELINES", y: 170 },
  ];
  return (
    <>
      {bands.map((b, i) => (
        <g key={b.label} className="dn" style={{ ["--d" as string]: i * 120 }}>
          <rect x={20 + i * 14} y={b.y} width={290} height={38} fill={i === 3 ? "#146B4C" : "#1B2420"} stroke={i === 3 ? green : line} />
          <text x={34 + i * 14} y={b.y + 23} fill={paper} fontSize="10" fontFamily="var(--font-mono)" letterSpacing="0.08em">
            {b.label}
          </text>
          <text x={300 + i * 14} y={b.y + 23} fill={muted} fontSize="9" fontFamily="var(--font-mono)" textAnchor="end">
            {`L${4 - i}`}
          </text>
        </g>
      ))}
      <path {...L} d="M372 196 V40" stroke={green} fill="none" style={{ ["--d" as string]: 600, ["--len" as string]: 1 }} />
      <polygon className="dn" points="372,34 368,42 376,42" fill={green} style={{ ["--d" as string]: 1500 }} />
      <Label x={380} y={120} d={900}>deploy</Label>
    </>
  );
}

function People() {
  // Complementary profiles around a team, converging on a shared objective.
  const hub = { x: 200, y: 140 };
  const nodes = [
    { x: 60, y: 92, l: "TECH" },
    { x: 60, y: 200, l: "BUSINESS" },
    { x: 340, y: 92, l: "SKILLS" },
    { x: 340, y: 200, l: "BEHAVIOR" },
  ];
  return (
    <>
      <g className="dn">
        <rect x={140} y={10} width={120} height={30} fill="none" stroke={green} strokeDasharray="4 4" />
        <text x={200} y={29} fill={paper} fontSize="9.5" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.1em">
          OBJECTIVE
        </text>
      </g>
      <path {...L} d={`M${hub.x} ${hub.y - 18} V40`} stroke={green} fill="none" style={{ ["--d" as string]: 700, ["--len" as string]: 1 }} />
      {nodes.map((n, i) => (
        <path key={`e${i}`} {...L} d={`M${n.x} ${n.y} L${hub.x} ${hub.y}`} stroke={line} fill="none" style={{ ["--d" as string]: 200 + i * 90, ["--len" as string]: 1 }} />
      ))}
      <path {...L} d="M60 92 L60 200" stroke={green} strokeDasharray="3 4" fill="none" className="dn" />
      <path {...L} d="M340 92 L340 200" stroke={green} strokeDasharray="3 4" fill="none" className="dn" />
      {nodes.map((n, i) => (
        <g key={n.l} className="dn" style={{ ["--d" as string]: i * 80 }}>
          <rect x={n.x - 7} y={n.y - 7} width={14} height={14} fill="#146B4C" stroke={green} />
          <text x={n.x} y={n.y + 24} fill={muted} fontSize="9.5" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.08em">
            {n.l}
          </text>
        </g>
      ))}
      <g className="dn" style={{ ["--d" as string]: 400 }}>
        <rect x={hub.x - 40} y={hub.y - 18} width={80} height={36} fill="#1B2420" stroke={line} />
        <text x={hub.x} y={hub.y + 4} fill={paper} fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.14em">
          TEAM
        </text>
      </g>
      <Label x={200} y={236} anchor="middle" d={900}>{"complementary profiles · shared goal"}</Label>
    </>
  );
}

const figures: Record<Capability["id"], () => React.JSX.Element> = {
  architecture: Architecture,
  integration: Integration,
  cloud: Cloud,
  people: People,
};

export function CapabilityFigure({ id, title }: { id: Capability["id"]; title: string }) {
  const Fig = figures[id];
  return (
    <svg viewBox="0 0 400 240" className="draw block h-auto w-full overflow-visible" role="img" aria-label={title}>
      <Fig />
    </svg>
  );
}
