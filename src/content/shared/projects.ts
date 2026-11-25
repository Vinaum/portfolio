import type { Diagram, DiagramNode, DiagramEdge, ProjectShared, Text } from "../types";

const t = (pt: string, en: string): Text => ({ "pt-BR": pt, en });

/** Builds a left-to-right process diagram with an optional second row. */
function linearFlow(steps: { label: Text; sub?: Text; tone?: DiagramNode["tone"] }[]): Diagram {
  const w = 136;
  const gap = 28;
  const y = 48;
  const h = 72;
  const nodes: DiagramNode[] = steps.map((s, i) => ({
    id: `s${i}`,
    x: 12 + i * (w + gap),
    y,
    w,
    h,
    label: s.label,
    sub: s.sub,
    tone: s.tone ?? "default",
  }));
  const edges: DiagramEdge[] = steps.slice(1).map((_, i) => {
    const x1 = 12 + i * (w + gap) + w;
    return { id: `f${i}`, d: `M${x1} ${y + h / 2} H${x1 + gap}`, flow: true };
  });
  return { width: 12 * 2 + steps.length * w + (steps.length - 1) * gap, height: 168, nodes, edges };
}

export const projectsShared: ProjectShared[] = [
  {
    id: "condominium",
    slug: "condominium-management",
    legacySlug: { "pt-BR": "plataforma-gestao-condominial", en: "condominium-operations-platform" },
    kind: "built",
    repo: "https://github.com/Vinaum/gestao-estoque-luminiiv",
    stack: [
      "JavaScript (ES modules)",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "PL/pgSQL",
      "Supabase Storage",
      "Chart.js",
      "Playwright",
      "Python",
      "GitHub Pages",
    ],
    architecture: {
      width: 960,
      height: 500,
      groups: [
        { id: "client", x: 20, y: 40, w: 280, h: 420, label: t("CLIENTE · ESTÁTICO", "CLIENT · STATIC") },
        { id: "supabase", x: 340, y: 40, w: 600, h: 420, label: "SUPABASE" },
      ],
      nodes: [
        { id: "roles", x: 44, y: 80, w: 232, h: 64, label: t("Papéis", "Roles"), sub: t("superadmin · síndico · gestor · morador", "super admin · manager · stock · resident"), tone: "ghost" },
        { id: "app", x: 44, y: 200, w: 232, h: 80, label: "Web app", sub: t("módulos ES · sem build", "ES modules · no build step"), tone: "default" },
        { id: "csp", x: 44, y: 340, w: 232, h: 64, label: "CSP + vendor/", sub: t("checksums SHA-256", "SHA-256 checksums"), tone: "ghost" },
        { id: "auth", x: 380, y: 80, w: 200, h: 64, label: "Auth", sub: t("e-mail confirmado", "confirmed e-mail") },
        { id: "rpc", x: 380, y: 200, w: 200, h: 80, label: t("Funções RPC", "RPC functions"), sub: t("transação · trava · idempotência", "transaction · lock · idempotency"), tone: "accent" },
        { id: "storage", x: 380, y: 340, w: 200, h: 64, label: "Storage", sub: t("notas fiscais · privado", "invoices · private bucket") },
        { id: "views", x: 660, y: 80, w: 250, h: 64, label: "Views", sub: t("estoque = Σ lotes", "stock = Σ lots") },
        { id: "db", x: 660, y: 184, w: 250, h: 112, label: "PostgreSQL", sub: t("RLS por condomínio", "RLS per condominium"), tone: "primary" },
        { id: "ledger", x: 660, y: 340, w: 120, h: 64, label: t("Livro-razão", "Ledger"), sub: t("imutável", "immutable") },
        { id: "audit", x: 790, y: 340, w: 120, h: 64, label: t("Auditoria", "Audit"), sub: "triggers" },
      ],
      edges: [
        { id: "e-roles", d: "M160 144 V200" },
        { id: "e-csp", d: "M160 340 V280" },
        { id: "e-auth", d: "M276 220 H320 V112 H380", label: t("sessão", "session"), lx: 326, ly: 160, la: "start" },
        { id: "e-rpc", d: "M276 240 H380", label: "RPC / REST", lx: 328, ly: 232, la: "middle", flow: true },
        { id: "e-up", d: "M276 260 H320 V372 H380", label: "upload", lx: 326, ly: 330, la: "start" },
        { id: "e-tx", d: "M580 240 H660", label: "tx", lx: 620, ly: 232, la: "middle", flow: true },
        { id: "e-views", d: "M785 184 V144" },
        { id: "e-ledger", d: "M720 296 V340", flow: true },
        { id: "e-audit", d: "M850 296 V340" },
      ],
    },
    flow: (() => {
      const d = linearFlow([
        { label: t("Rascunho", "Draft"), sub: t("gestor", "stock manager") },
        { label: t("Aprovação", "Approval"), sub: t("síndico", "building manager"), tone: "accent" },
        { label: t("Pedido", "Order"), sub: t("fornecedor", "supplier") },
        { label: t("Recebimento", "Receipt"), sub: t("parcial ou total", "partial or full") },
        { label: t("Lotes", "Lots"), sub: t("validade · custo", "expiry · cost") },
        { label: t("Livro-razão", "Ledger"), sub: t("imutável", "immutable"), tone: "primary" },
      ]);
      d.height = 300;
      d.nodes.push({ id: "exit", x: 12 + 4 * 164, y: 196, w: 136, h: 72, label: t("Saída", "Issue"), sub: "FEFO / FIFO" });
      d.edges.push(
        { id: "f-exit", d: `M${12 + 4 * 164 + 68} 120 V196`, flow: true },
        { id: "f-exit2", d: `M${12 + 4 * 164 + 136} 232 H${12 + 5 * 164 + 68} V120`, label: t("sem saldo negativo", "no negative balance"), lx: 12 + 4 * 164 + 148, ly: 254, la: "start" },
      );
      return d;
    })(),
  },
  {
    id: "medical",
    slug: "medical-platform",
    legacySlug: { "pt-BR": "site-medico-plataforma-de-conteudo", en: "medical-website-content-platform" },
    kind: "built",
    repo: "https://github.com/Vinaum/site-hemato",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "PostgreSQL",
      "pg_net",
      "GitHub Actions",
      "GitHub Pages",
      "Vitest",
      "Playwright",
    ],
    architecture: {
      width: 960,
      height: 500,
      groups: [
        { id: "supabase", x: 300, y: 40, w: 300, h: 260, label: "SUPABASE" },
        { id: "github", x: 650, y: 40, w: 290, h: 420, label: "GITHUB" },
      ],
      nodes: [
        { id: "admin", x: 40, y: 80, w: 210, h: 64, label: t("Painel admin", "Admin panel"), sub: "Supabase Auth", tone: "ghost" },
        { id: "content", x: 330, y: 80, w: 240, h: 64, label: "site_content", sub: t("RLS · validação SQL", "RLS · SQL validation"), tone: "primary" },
        { id: "trigger", x: 330, y: 196, w: 240, h: 72, label: "Trigger · pg_net", sub: t("token no Vault", "token in Vault"), tone: "accent" },
        { id: "actions", x: 680, y: 80, w: 230, h: 72, label: "GitHub Actions", sub: t("tipos · lint · testes", "types · lint · tests") },
        { id: "build", x: 680, y: 220, w: 230, h: 64, label: "next build", sub: t("export estático + snapshot", "static export + snapshot") },
        { id: "pages", x: 680, y: 370, w: 230, h: 64, label: "GitHub Pages", sub: "HTTPS · CDN", tone: "primary" },
        { id: "visitor", x: 40, y: 370, w: 210, h: 64, label: t("Visitantes", "Visitors"), sub: t("páginas estáticas", "static pages"), tone: "ghost" },
      ],
      edges: [
        { id: "e-save", d: "M250 112 H330", label: t("salvar", "save"), lx: 290, ly: 104, la: "middle", flow: true },
        { id: "e-change", d: "M450 144 V196", label: t("ao mudar", "on change"), lx: 458, ly: 174, la: "start", flow: true },
        { id: "e-dispatch", d: "M570 244 H625 V116 H680", label: "dispatch", lx: 578, ly: 236, la: "start", flow: true },
        { id: "e-build", d: "M795 152 V220", flow: true },
        { id: "e-deploy", d: "M795 284 V370", label: "deploy", lx: 803, ly: 334, la: "start", flow: true },
        { id: "e-serve", d: "M680 402 H250", label: "HTTPS", lx: 465, ly: 394, la: "middle", flow: true },
      ],
    },
    flow: linearFlow([
      { label: t("Edição", "Edit"), sub: t("painel admin", "admin panel") },
      { label: t("Validação", "Validate"), sub: "SQL + RLS", tone: "accent" },
      { label: "Trigger", sub: "pg_net" },
      { label: "Dispatch", sub: "GitHub API" },
      { label: "Build", sub: t("snapshot do conteúdo", "content snapshot") },
      { label: t("Publicação", "Publish"), sub: "GitHub Pages", tone: "primary" },
    ]),
  },
  {
    id: "community",
    slug: "community-portal",
    legacySlug: { "pt-BR": "portal-de-comunidade", en: "community-portal" },
    kind: "built",
    repo: "https://github.com/Vinaum/portal-paidabartira",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Zod",
      "Supabase",
      "PostgreSQL",
      "pgTAP",
      "Vitest",
      "GitHub Actions",
      "Vercel",
    ],
    architecture: {
      width: 960,
      height: 500,
      nodes: [
        { id: "user", x: 28, y: 200, w: 180, h: 80, label: t("Integrante", "Member"), sub: t("navegador", "browser"), tone: "ghost" },
        { id: "proxy", x: 260, y: 40, w: 200, h: 420, label: "1 · proxy.ts", sub: t("renova sessão · barra anônimos", "refreshes session · blocks anonymous") },
        { id: "layouts", x: 500, y: 40, w: 200, h: 420, label: t("2 · layouts", "2 · layouts"), sub: t("status e permissão no servidor", "server-side status & permission") },
        { id: "rls", x: 740, y: 40, w: 200, h: 420, label: "3 · PostgreSQL RLS", sub: t("decisão final", "final authority"), tone: "primary" },
        { id: "login", x: 280, y: 330, w: 160, h: 56, label: t("anônimo → /login", "anonymous → /login"), tone: "ghost" },
        { id: "zod", x: 520, y: 310, w: 160, h: 48, label: t("schemas Zod", "Zod schemas"), tone: "muted" },
        { id: "actions", x: 520, y: 380, w: 160, h: 48, label: "Server actions", tone: "muted" },
        { id: "auth", x: 760, y: 310, w: 160, h: 48, label: "Auth", tone: "muted" },
        { id: "storage", x: 760, y: 380, w: 160, h: 48, label: "Storage", tone: "muted" },
      ],
      edges: [
        { id: "e1", d: "M208 240 H260", flow: true, label: "request", lx: 234, ly: 230, la: "middle" },
        { id: "e2", d: "M460 240 H500", flow: true },
        { id: "e3", d: "M700 240 H740", flow: true },
        { id: "e4", d: "M360 240 V330", dashed: true },
      ],
    },
    flow: linearFlow([
      { label: t("Solicitação", "Request"), sub: t("acesso", "access") },
      { label: t("Análise", "Review"), sub: "admin", tone: "accent" },
      { label: t("Convite", "Invitation"), sub: "e-mail" },
      { label: t("Senha", "Password"), sub: t("definir senha", "set password") },
      { label: t("Perfil", "Profile"), sub: t("privacidade por seção", "per-section privacy") },
      { label: t("Diretório", "Directory"), sub: t("regras de visibilidade", "visibility rules"), tone: "primary" },
    ]),
  },
  {
    id: "integration-hub",
    slug: "business-integration-hub",
    legacySlug: { "pt-BR": "hub-de-integracao", en: "business-integration-hub" },
    kind: "concept",
    stack: ["REST APIs", "Webhooks", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Prometheus", "Grafana", "AWS"],
    architecture: {
      width: 960,
      height: 500,
      nodes: [
        { id: "rbac", x: 280, y: 40, w: 190, h: 64, label: t("Controle de acesso", "Access control"), sub: t("papéis · segredos", "roles · secrets"), tone: "ghost" },
        { id: "saas", x: 28, y: 80, w: 190, h: 64, label: t("Apps SaaS", "SaaS apps"), sub: "webhooks", tone: "ghost" },
        { id: "internal", x: 28, y: 200, w: 190, h: 64, label: t("Sistemas internos", "Internal systems"), sub: "REST", tone: "ghost" },
        { id: "cron", x: 28, y: 320, w: 190, h: 64, label: t("Agendamentos", "Schedules"), sub: "cron", tone: "ghost" },
        { id: "gateway", x: 280, y: 170, w: 190, h: 124, label: t("Gateway de entrada", "Ingestion gateway"), sub: t("auth · HMAC · idempotência", "auth · HMAC · idempotency"), tone: "accent" },
        { id: "queue", x: 520, y: 200, w: 150, h: 64, label: t("Fila", "Queue"), sub: "outbox" },
        { id: "engine", x: 720, y: 160, w: 212, h: 144, label: t("Motor de workflows", "Workflow engine"), sub: t("etapas · retentativas", "steps · retries"), tone: "primary" },
        { id: "connectors", x: 720, y: 380, w: 212, h: 64, label: t("Conectores", "Connectors"), sub: t("APIs de saída", "outbound APIs") },
        { id: "logs", x: 520, y: 380, w: 150, h: 64, label: t("Log de execução", "Execution log"), sub: t("status por etapa", "per-step status") },
        { id: "monitor", x: 280, y: 380, w: 190, h: 64, label: t("Monitoramento", "Monitoring"), sub: "Prometheus · Grafana" },
      ],
      edges: [
        { id: "i1", d: "M218 112 H248 V200 H280" },
        { id: "i2", d: "M218 232 H280", flow: true },
        { id: "i3", d: "M218 352 H248 V264 H280" },
        { id: "i4", d: "M470 232 H520", flow: true },
        { id: "i5", d: "M670 232 H720", flow: true },
        { id: "i6", d: "M826 304 V380", flow: true },
        { id: "i7", d: "M760 304 V340 H595 V380", dashed: true },
        { id: "i8", d: "M520 412 H470", dashed: true },
        { id: "i9", d: "M375 104 V170", dashed: true },
      ],
    },
    flow: linearFlow([
      { label: t("Evento", "Event"), sub: t("recebido", "received") },
      { label: t("Assinatura", "Signature"), sub: t("verificação HMAC", "HMAC check"), tone: "accent" },
      { label: t("Deduplicação", "Deduplicate"), sub: t("chave de idempotência", "idempotency key") },
      { label: t("Fila", "Enqueue"), sub: "outbox" },
      { label: t("Execução", "Execute"), sub: t("retentativa com backoff", "retry with backoff") },
      { label: "Log", sub: t("métricas · alertas", "metrics · alerts"), tone: "primary" },
    ]),
  },
];

/** The hero "living architecture" — the system context of the whole practice. */
export const heroDiagram: Diagram = {
  width: 600,
  height: 640,
  nodes: [
    { id: "business", x: 190, y: 40, w: 220, h: 72, label: "BUSINESS", sub: t("metas · processos · pessoas", "goals · process · people"), tone: "default" },
    { id: "applications", x: 30, y: 196, w: 180, h: 60, label: "APPLICATIONS", sub: "web · mobile" },
    { id: "data", x: 400, y: 196, w: 170, h: 60, label: "DATA", sub: "postgres · storage" },
    { id: "apis", x: 230, y: 312, w: 140, h: 72, label: "APIs", sub: t("contratos", "contracts"), tone: "primary" },
    { id: "automation", x: 30, y: 432, w: 170, h: 60, label: "AUTOMATION", sub: "workflows · CI" },
    { id: "cloud", x: 410, y: 420, w: 160, h: 60, label: "CLOUD", sub: t("serviços gerenciados", "managed services") },
    { id: "infrastructure", x: 170, y: 556, w: 260, h: 60, label: "INFRASTRUCTURE", sub: t("computação · rede", "compute · network") },
  ],
  edges: [
    { id: "h1", d: "M250 112 V152 H120 V196", label: t("requisitos", "requirements"), lx: 128, ly: 145, la: "start", flow: true },
    { id: "h2", d: "M485 196 V152 H350 V112", label: "insight", lx: 478, ly: 145, la: "end", flow: true },
    { id: "h3", d: "M210 226 H300 V312", label: "REST / JSON", lx: 216, ly: 218, la: "start", flow: true },
    { id: "h4", d: "M370 330 H485 V256", label: "SQL · RLS", lx: 378, ly: 322, la: "start", flow: true },
    { id: "h5", d: "M300 384 V556", label: "CI / CD", lx: 308, ly: 470, la: "start", flow: true },
    { id: "h6", d: "M370 366 H440 V420", label: t("eventos", "events"), lx: 378, ly: 358, la: "start", flow: true },
    { id: "h7", d: "M200 462 H250 V384", label: "webhooks", lx: 244, ly: 424, la: "end", flow: true },
    { id: "h8", d: "M115 492 V586 H170", label: "IaC", lx: 123, ly: 540, la: "start", flow: true },
    { id: "h9", d: "M490 480 V586 H430", flow: true },
    { id: "h10", d: "M120 256 V432", dashed: true, label: "triggers", lx: 112, ly: 350, la: "end" },
  ],
};
