export const locales = ["pt-BR", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt-BR";

/** Text that differs per language. Plain strings are language-neutral (product names, protocols). */
export type Text = string | Record<Locale, string>;

export type ProjectId = "condominium" | "medical" | "community" | "integration-hub";

export type TechStatus = "applied" | "study";

/* ---------- Diagrams (language-neutral geometry, localizable labels) ---------- */

export type NodeTone = "primary" | "accent" | "default" | "muted" | "ghost";

export interface DiagramNode {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: Text;
  sub?: Text;
  tone?: NodeTone;
}

export interface DiagramEdge {
  id: string;
  /** SVG path in the diagram's coordinate space. Direction = direction of flow. */
  d: string;
  label?: Text;
  lx?: number;
  ly?: number;
  /** Anchor for the label text. */
  la?: "start" | "middle" | "end";
  dashed?: boolean;
  /** Animated packet travels along this edge on hover / reveal. */
  flow?: boolean;
}

export interface DiagramGroup {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: Text;
}

export interface Diagram {
  width: number;
  height: number;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  groups?: DiagramGroup[];
}

/* ---------- Shared (language-neutral) project data ---------- */

export interface ProjectShared {
  id: ProjectId;
  slug: Record<Locale, string>;
  kind: "built" | "concept";
  repo?: string;
  stack: string[];
  architecture: Diagram;
  flow: Diagram;
}

/* ---------- Localized content ---------- */

export interface Decision {
  title: string;
  body: string;
}

export interface ProjectContent {
  id: ProjectId;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  context: string;
  problem: string;
  objective: string;
  solution: string;
  architectureCaption: string;
  flowTitle: string;
  flowCaption: string;
  decisions: Decision[];
  implementation: string[];
  status: { label: string; detail: string };
  results: string[];
  type: string;
}

export interface Capability {
  id: "architecture" | "integration" | "cloud" | "business";
  title: string;
  summary: string;
  keywords: string[];
  evidenceLabel: string;
  evidence: string;
}

export interface TechItem {
  name: string;
  status: TechStatus;
  evidence?: string;
}

export interface TechGroup {
  id: string;
  title: string;
  items: TechItem[];
}

export interface Chapter {
  id: string;
  title: string;
  period: string;
  organizations: { name: string; role?: string }[];
  body: string;
  highlights?: { value: string; label: string }[];
  contributions: string[];
}

export type CompanyId = "pier" | "gobots" | "pagegroup";

export interface FeaturedCompany {
  id: CompanyId;
  name: string;
  /** Group brands the experience happened under, when different from the name. */
  brands?: string;
  sector: string;
  descriptor: string;
  context: string;
  exposure: string;
  /** Optional — fill only with confirmed information. */
  role?: string;
  period?: string;
}

export interface TeamDimension {
  id: "technical" | "composition" | "behavioral" | "business";
  title: string;
  body: string;
  reading: string;
}

export interface Dictionary {
  locale: Locale;
  htmlLang: string;
  ogLocale: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  ids: {
    about: string;
    clients: string;
    companies: string;
    teams: string;
    capabilities: string;
    work: string;
    technology: string;
    experience: string;
    principles: string;
    contact: string;
  };
  nav: {
    skip: string;
    home: string;
    about: string;
    capabilities: string;
    work: string;
    experience: string;
    contact: string;
    menu: string;
    close: string;
    language: string;
    switchTo: string;
  };
  hero: {
    role: string;
    roleSub: string;
    headline: string;
    supporting: string;
    ctaPrimary: string;
    ctaSecondary: string;
    availability: string;
    availabilityDetail: string;
    facts: string[];
    diagramTitle: string;
    diagramDescription: string;
  };
  about: {
    label: string;
    title: string;
    lead: string;
    paragraphs: string[];
    factsTitle: string;
    facts: { k: string; v: string }[];
    education: { label: string; degree: string; institution: string; short: string };
  };
  clients: {
    label: string;
    title: string;
    intro: string;
    /**
     * Only organizations you have permission to name publicly.
     * `logo` is the file name in public/logos (without extension); `context` says how you worked together.
     * The section is hidden while this list is empty.
     */
    items: { name: string; logo?: string; context: string }[];
    note: string;
  };
  companies: {
    label: string;
    title: string;
    intro: string;
    sectorLabel: string;
    contextLabel: string;
    exposureLabel: string;
    roleLabel: string;
    featured: FeaturedCompany[];
    othersTitle: string;
    others: { name: string; area: string; role?: string }[];
    trademarkNote: string;
  };
  teams: {
    label: string;
    title: string;
    statement: string;
    dimensionsLabel: string;
    dimensions: TeamDimension[];
    figureCaption: string;
    outcome: string;
    team: string;
    profiles: { tech: string; style: string }[];
    stat: { value: string; label: string; note: string };
    bridge: {
      label: string;
      quote: string;
      intro: string;
      abilities: string[];
      systems: string;
      people: string;
    };
  };
  capabilities: {
    label: string;
    title: string;
    intro: string;
    items: Capability[];
  };
  work: {
    label: string;
    title: string;
    intro: string;
    viewCase: string;
    status: string;
    stack: string;
    concept: string;
    built: string;
  };
  technology: {
    label: string;
    title: string;
    intro: string;
    applied: string;
    study: string;
    all: string;
    filterLabel: string;
    groups: TechGroup[];
  };
  journey: {
    label: string;
    title: string;
    intro: string;
    contributionsLabel: string;
    chapters: Chapter[];
  };
  principles: {
    label: string;
    title: string;
    items: { title: string; body: string }[];
  };
  contact: {
    label: string;
    headline: string;
    body: string;
    email: string;
    linkedin: string;
    github: string;
    emailHint: string;
    figureFrom: string;
    figureTo: string;
  };
  footer: {
    rights: string;
    built: string;
    top: string;
  };
  caseStudy: {
    back: string;
    work: string;
    type: string;
    status: string;
    stack: string;
    repository: string;
    viewRepo: string;
    noRepo: string;
    conceptNotice: string;
    sections: {
      context: string;
      problem: string;
      objective: string;
      solution: string;
      architecture: string;
      flow: string;
      decisions: string;
      implementation: string;
      technologies: string;
      status: string;
      results: string;
    };
    plannedDecisions: string;
    plannedImplementation: string;
    candidateStack: string;
    next: string;
    metaTitleSuffix: string;
  };
  projects: ProjectContent[];
}
