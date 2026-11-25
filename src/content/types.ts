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
  /** URL slug, shared by both languages: /projects/<slug>/ and /en/projects/<slug>/ */
  slug: string;
  /** Earlier URLs, kept as redirect pages so old links keep working. */
  legacySlug: Record<Locale, string>;
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
  /** Unique meta description for the project page (≈150–160 characters). */
  seoDescription: string;
  context: string;
  problem: string;
  objective: string;
  solution: string;
  architectureCaption: string;
  flowTitle: string;
  flowCaption: string;
  /** What you did — stated honestly (incl. AI assistance where the repository shows it). */
  contribution: string;
  decisions: Decision[];
  security: string[];
  delivery: string[];
  implementation: string[];
  limitations: string[];
  status: { label: string; detail: string };
  results: string[];
  type: string;
}

export interface Capability {
  id: "architecture" | "integration" | "cloud" | "people";
  title: string;
  summary: string;
  /** "applied" = used in the documented projects or professional work; "study" = courses and labs only. */
  items: { text: string; status?: "applied" | "study" }[];
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

export type CompanyId = "pier" | "gobots" | "pagegroup" | "sharepeoplehub";

export interface FeaturedCompany {
  id: CompanyId;
  name: string;
  /** Group brands the experience happened under, when different from the name. */
  brands?: string;
  sector: string;
  /** What the company is — verifiable facts only. */
  description: string;
  /** Your actual role, as confirmed by you. */
  relationship: string;
  /** Responsibilities confirmed by you — never inferred. */
  responsibilities: string[];
  /** Competencies the role developed (framing of the confirmed responsibilities). */
  skills: string[];
  /** Optional — fill only with confirmed information. */
  period?: string;
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
    companies: string;
    capabilities: string;
    work: string;
    clients: string;
    beyond: string;
    learning: string;
    contact: string;
  };

  nav: {
    skip: string;
    home: string;
    projects: string;
    capabilities: string;
    experience: string;
    about: string;
    contact: string;
    otherExperience: string;
    submenu: string;
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
    convergence: { label: string; steps: { title: string; body: string }[]; closing: string };
    education: {
      label: string;
      institution: string;
      short: string;
      items: { level: string; title: string; institution?: string }[];
    };
    entrepreneurship: { label: string; name: string; role: string; body: string; highlights: { value: string; label: string }[] };
    leadership: { label: string; body: string; stat: { value: string; label: string; note: string } };
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
    roleLabel: string;
    responsibilitiesLabel: string;
    skillsLabel: string;
    featured: FeaturedCompany[];
    othersTitle: string;
    others: { name: string; area: string; role?: string; note?: string }[];
    trademarkNote: string;
  };



  capabilities: {
    label: string;
    title: string;
    intro: string;
    applied: string;
    study: string;
    studyNote: string;
    items: Capability[];
    people: { kicker: string; message: string; perspective: string };
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



  beyond: {
    label: string;
    title: string;
    teaching: {
      label: string;
      title: string;
      body: string;
      note: string;
      tools: string[];
      skills: string[];
    };
    association: {
      label: string;
      role: string;
      organization: string;
      body: string;
      partner: string;
      points: string[];
    };
  };

  learning: {
    label: string;
    title: string;
    intro: string;
    note: string;
    recordLink: string;
    introductory: string;
    /** "{n}" is replaced by a number. */
    courseOne: string;
    courseMany: string;
    more: string;
    areas: Record<"devops" | "programming" | "security" | "business" | "ai" | "frontend", string>;
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
      contribution: string;
      decisions: string;
      security: string;
      delivery: string;
      implementation: string;
      limitations: string;
      technologies: string;
      status: string;
      results: string;
    };
    planned: string;
    redirectNotice: string;
    plannedDecisions: string;
    plannedImplementation: string;
    candidateStack: string;
    next: string;
    metaTitleSuffix: string;
    conceptTitleSuffix: string;
  };
  projects: ProjectContent[];
}
