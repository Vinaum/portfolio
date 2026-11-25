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

function Business() {
  const left = ["GOAL", "COST", "RISK", "DEADLINE"];
  const right = ["ARCHITECTURE", "EFFORT", "TRADE-OFF", "SCOPE"];
  return (
    <>
      <Label x={10} y={14} d={0}>BUSINESS</Label>
      <Label x={390} y={14} anchor="end" d={0}>TECHNOLOGY</Label>
      {left.map((l, i) => (
        <Box key={l} x={10} y={28 + i * 50} w={96} h={30} label={l} d={i * 70} />
      ))}
      {right.map((r, i) => (
        <Box key={r} x={284} y={28 + i * 50} w={106} h={30} label={r} d={i * 70 + 40} />
      ))}
      {left.map((_, i) => (
        <path key={`l${i}`} {...L} d={`M106 ${43 + i * 50} H150 V118 H160`} stroke={line} fill="none" style={{ ["--d" as string]: 300 + i * 60, ["--len" as string]: 1 }} />
      ))}
      {right.map((_, i) => (
        <path key={`r${i}`} {...L} d={`M240 118 H250 V${43 + i * 50} H284`} stroke={line} fill="none" style={{ ["--d" as string]: 500 + i * 60, ["--len" as string]: 1 }} />
      ))}
      <g className="dn" style={{ ["--d" as string]: 400 }}>
        <rect x={160} y={100} width={80} height={36} fill="#146B4C" stroke={green} />
        <text x={200} y={122} fill={paper} fontSize="9.5" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.06em">
          TRANSLATE
        </text>
      </g>
    </>
  );
}

const figures: Record<Capability["id"], () => React.JSX.Element> = {
  architecture: Architecture,
  integration: Integration,
  cloud: Cloud,
  business: Business,
};

export function CapabilityFigure({ id, title }: { id: Capability["id"]; title: string }) {
  const Fig = figures[id];
  return (
    <svg viewBox="0 0 400 240" className="draw block h-auto w-full overflow-visible" role="img" aria-label={title}>
      <Fig />
    </svg>
  );
}
