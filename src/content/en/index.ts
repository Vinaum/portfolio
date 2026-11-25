import type { Dictionary } from "../types";

export const en: Dictionary = {
  locale: "en",
  htmlLang: "en",
  ogLocale: "en_US",
  meta: {
    title: "Vinicius Campanha Sartori — Solutions Engineer · Systems Integration, Cloud & Automation",
    description:
      "Computer Engineer (UNICAMP) working across solutions design, systems integration, cloud and automation — with a business and people perspective shaped by entrepreneurship and years in technology recruitment.",
    keywords: [
      "Solutions Engineer",
      "Systems Integration",
      "API Integration",
      "Cloud Solutions",
      "Implementation Engineer",
      "Technical Consultant",
      "Computer Engineer",
      "Automation",
      "AWS",
      "Supabase",
      "Next.js",
    ],
  },
  ids: {
    about: "about",
    capabilities: "capabilities",
    work: "work",
    technology: "technology",
    experience: "experience",
    principles: "principles",
    contact: "contact",
  },
  nav: {
    skip: "Skip to content",
    home: "Home",
    about: "About",
    capabilities: "Capabilities",
    work: "Work",
    experience: "Experience",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    language: "Language",
    switchTo: "Ver em português",
  },
  hero: {
    role: "Solutions Engineer",
    roleSub: "Systems Integration · Cloud & Automation",
    headline: "Connecting business challenges to technology solutions.",
    supporting:
      "Computer Engineer combining technology, systems thinking and a business perspective to design and implement meaningful digital solutions.",
    ctaPrimary: "Explore my work",
    ctaSecondary: "Let’s connect",
    availability: "Open to new opportunities",
    availabilityDetail: "Solutions · Integration · Implementation",
    facts: [
      "Computer Engineering — UNICAMP",
      "Co-founder — Raiz Universitária",
      "7+ years in technology recruitment",
    ],
    diagramTitle: "System context diagram",
    diagramDescription:
      "An architecture diagram connecting Business to Applications and Data, Applications to APIs, and APIs to Cloud, Automation and Infrastructure.",
    figure: "FIG. 01 — SYSTEM CONTEXT",
  },
  about: {
    label: "About",
    code: "CONTEXT",
    title: "Technology is more than code. It’s about understanding how everything connects.",
    lead:
      "My path didn’t run in a straight line through software — and that is exactly what shapes how I approach it.",
    paragraphs: [
      "I trained as a Computer Engineer at UNICAMP, where I learned to see technology as a set of interdependent systems: hardware, software and the constraints that hold them together. I went further with postgraduate studies in Computer Hardware Engineering, and later an MBA in People and Performance Management.",
      "I co-founded Raiz Universitária, a startup that ran 80 events across five universities and built a community of more than 10,000 students, and took third place at the Desafio UNICAMP de Inovação Tecnológica. It taught me what no course did: how to turn an idea into something people actually use, with limited resources and real deadlines.",
      "Then came technology, telecommunications and business development — followed by more than seven years in specialized technology recruitment, including leading recruitment teams. That work kept me in constant conversation with engineers and hiring managers about stacks, architectures and what a team really needs. It’s where I learned to translate between technical depth and business intent.",
      "Today I build. Independent projects — a multi-tenant operations platform, a content-managed medical website, a community portal — are where I apply engineering, integration and product thinking end to end: from requirements discovery to database security policies to deployment pipelines.",
    ],
    factsTitle: "At a glance",
    facts: [
      { k: "Degree", v: "Computer Engineering — UNICAMP" },
      { k: "Postgraduate", v: "Computer Hardware Engineering" },
      { k: "MBA", v: "People and Performance Management" },
      { k: "Entrepreneurship", v: "Co-founder, Raiz Universitária" },
      { k: "Recruitment", v: "7+ years in tech, incl. team leadership" },
      { k: "Now", v: "Independent technology projects" },
    ],
  },
  capabilities: {
    label: "Capabilities",
    code: "CAPABILITY MAP",
    title: "Four areas where engineering meets the business.",
    intro:
      "Depth varies across them, and I’d rather show it than claim it — each area lists where the experience actually comes from.",
    items: [
      {
        id: "architecture",
        title: "Solutions Architecture",
        summary:
          "Understanding requirements, analyzing constraints, designing architectures and evaluating technology choices.",
        keywords: ["Requirements", "Constraints", "Trade-offs", "Decision records"],
        evidenceLabel: "Applied in",
        evidence:
          "A written technical plan with explicit, approved decisions before implementation — condominium operations platform.",
      },
      {
        id: "integration",
        title: "Systems Integration",
        summary:
          "APIs, webhooks, system interoperability, workflow automation and application communication.",
        keywords: ["REST", "Webhooks", "Events", "Workflow automation"],
        evidenceLabel: "Applied in",
        evidence:
          "A database trigger that calls the GitHub API to rebuild and republish a static site when content changes — medical website.",
      },
      {
        id: "cloud",
        title: "Cloud & Infrastructure",
        summary:
          "Cloud computing, infrastructure automation, containers, infrastructure as code and cloud fundamentals.",
        keywords: ["CI/CD", "Managed Postgres", "Static hosting", "IaC"],
        evidenceLabel: "Applied in / studying",
        evidence:
          "CI/CD on GitHub Actions, hosting on GitHub Pages and Vercel, managed Postgres on Supabase. AWS, Terraform and Ansible: ongoing study.",
      },
      {
        id: "business",
        title: "Technology & Business",
        summary:
          "Requirements discovery, stakeholder management, product thinking, business analysis and technical communication.",
        keywords: ["Discovery", "Stakeholders", "Product", "Communication"],
        evidenceLabel: "Comes from",
        evidence:
          "Co-founding a startup, 7+ years translating between engineering teams and the business, and leading recruitment teams.",
      },
    ],
  },
  work: {
    label: "Selected work",
    code: "CASE FILES",
    title: "Projects that started from an operational problem — not from a technology choice.",
    intro:
      "Each case is documented from its repository: what was built, how, and what is still in progress. The concept is labelled as a concept.",
    viewCase: "Read the case study",
    status: "Status",
    stack: "Stack",
    concept: "Concept",
    built: "Built",
  },
  technology: {
    label: "Technology",
    code: "STACK TAXONOMY",
    title: "A map of tools — and how I know them.",
    intro:
      "No percentage bars. Each tool is marked by the evidence behind it: applied in the projects above, or currently in study and lab practice.",
    applied: "Applied in projects",
    study: "Study & labs",
    all: "All",
    filterLabel: "Filter by evidence",
    groups: [
      {
        id: "cloud",
        title: "Cloud & hosting",
        items: [
          { name: "AWS", status: "study" },
          { name: "GitHub Pages", status: "applied", evidence: "Medical website, condominium platform" },
          { name: "Vercel", status: "applied", evidence: "Community portal" },
        ],
      },
      {
        id: "infra",
        title: "Infrastructure & automation",
        items: [
          { name: "CI/CD · GitHub Actions", status: "applied", evidence: "Test and deploy pipelines" },
          { name: "Linux", status: "applied", evidence: "Day-to-day environment" },
          { name: "Docker", status: "applied", evidence: "Local Supabase stack for database tests" },
          { name: "Terraform", status: "study" },
          { name: "Ansible", status: "study" },
        ],
      },
      {
        id: "integration",
        title: "Integration & development",
        items: [
          { name: "REST APIs", status: "applied", evidence: "PostgREST / RPC, GitHub REST API" },
          { name: "Webhooks & events", status: "applied", evidence: "workflow_dispatch from a database trigger" },
          { name: "JavaScript / TypeScript", status: "applied", evidence: "All projects" },
          { name: "Next.js · React", status: "applied", evidence: "Medical website, community portal" },
          { name: "Node.js", status: "applied", evidence: "Build and verification scripts" },
          { name: "Python", status: "applied", evidence: "Test tooling, security audit script" },
        ],
      },
      {
        id: "data",
        title: "Data & backend",
        items: [
          { name: "PostgreSQL", status: "applied", evidence: "Schemas, views, functions, RLS" },
          { name: "Supabase", status: "applied", evidence: "Auth, Storage, Vault, pg_net" },
        ],
      },
      {
        id: "quality",
        title: "Quality",
        items: [
          { name: "Playwright", status: "applied", evidence: "Browser tests" },
          { name: "Vitest", status: "applied", evidence: "Unit tests" },
          { name: "pgTAP", status: "applied", evidence: "RLS access-denial tests" },
        ],
      },
      {
        id: "observability",
        title: "Observability",
        items: [
          { name: "Prometheus", status: "study" },
          { name: "Grafana", status: "study" },
        ],
      },
    ],
  },
  journey: {
    label: "Experience",
    code: "TRAJECTORY",
    title: "A route through engineering, business and people.",
    intro:
      "Not a straight line — four chapters that each added a layer to how I understand technology projects.",
    contributionsLabel: "What it added",
    chapters: [
      {
        id: "entrepreneurship",
        index: "I",
        title: "Entrepreneurship",
        period: "Raiz Universitária",
        organizations: [{ name: "Raiz Universitária", role: "Co-founder" }],
        body:
          "Co-founding a startup meant doing a bit of everything — product, operations, events, people — and learning to deliver with limited resources.",
        highlights: [
          { value: "80", label: "events" },
          { value: "5", label: "universities" },
          { value: "10,000+", label: "students in the community" },
          { value: "3rd", label: "place — Desafio UNICAMP de Inovação Tecnológica" },
        ],
        contributions: ["Execution under constraints", "Turning an idea into adoption", "Founding-team leadership"],
      },
      {
        id: "telecom",
        index: "II",
        title: "Technology, telecom & business",
        period: "Trópico Telecomunicações",
        organizations: [{ name: "Trópico Telecomunicações" }],
        body:
          "Experience in technology, telecommunications and business development: seeing how infrastructure-heavy products meet commercial decisions.",
        contributions: ["Business understanding", "Infrastructure context", "Business development"],
      },
      {
        id: "recruitment",
        index: "III",
        title: "Technology recruitment & leadership",
        period: "7+ years",
        organizations: [
          { name: "GoBots" },
          { name: "Share RH" },
          { name: "Pier Digital" },
          { name: "Page Outsourcing / Michael Page" },
          { name: "Share People Hub" },
        ],
        body:
          "More than seven years in specialized technology recruitment, including leading recruitment teams. It isn’t software engineering — but it demands technical literacy: understanding stacks, architectures and seniority well enough to assess fit, and translating between what engineering teams need and what the business can offer.",
        contributions: ["Technical communication", "Stakeholder management", "Requirements discovery", "Team leadership"],
      },
      {
        id: "independent",
        index: "IV",
        title: "Independent technology projects",
        period: "Now",
        organizations: [{ name: "Independent projects" }],
        body:
          "Designing and building real applications end to end — requirements, data modelling, security policies, integrations, testing and deployment.",
        contributions: ["Systems integration", "Cloud & CI/CD", "Product mindset"],
      },
    ],
  },
  principles: {
    label: "How I think",
    code: "OPERATING PRINCIPLES",
    title: "Four principles I work by.",
    items: [
      {
        title: "Understand before building.",
        body:
          "Many projects fail by solving the wrong problem well. I start with the people, the process and the constraints — and only then with the stack.",
      },
      {
        title: "Architecture before implementation.",
        body:
          "A short plan with explicit decisions is cheaper than a rewrite. I write down what we decided, why, and what would make us change our minds.",
      },
      {
        title: "Technology aligned with business.",
        body:
          "Every technical choice has a cost, a risk and an owner. The right solution is the one the business can afford to run — not the most impressive one.",
      },
      {
        title: "People make solutions happen.",
        body:
          "Years in recruitment taught me that systems are built, operated and used by people. Clear communication is part of the architecture.",
      },
    ],
  },
  contact: {
    label: "Contact",
    code: "INTERFACE",
    headline: "Have a challenge worth solving?",
    body:
      "I’m open to Solutions Engineering, Integration, Implementation and Technical Consulting roles — and to conversations about problems worth solving.",
    email: "Let’s talk",
    linkedin: "Connect on LinkedIn",
    github: "Explore GitHub",
    emailHint: "Opens your e-mail client",
    figureFrom: "CHALLENGE",
    figureTo: "SOLUTION",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Designed and built with Next.js, TypeScript and hand-drawn SVG.",
    top: "Back to top",
  },
  caseStudy: {
    back: "All work",
    work: "Work",
    type: "Type",
    status: "Status",
    stack: "Stack",
    repository: "Repository",
    viewRepo: "View on GitHub",
    noRepo: "Not published yet",
    conceptNotice:
      "This is a concept and demonstrator. Everything below describes the intended design — none of it is presented as delivered.",
    sections: {
      context: "Context",
      problem: "Problem",
      objective: "Objective",
      solution: "Proposed solution",
      architecture: "Architecture",
      flow: "Flow",
      decisions: "Technical decisions",
      implementation: "Implementation",
      technologies: "Technologies",
      status: "Current status",
      results: "Documented results",
    },
    plannedDecisions: "Design decisions (planned)",
    plannedImplementation: "Planned scope",
    candidateStack: "Candidate stack",
    next: "Next case",
    figure: "FIG.",
    metaTitleSuffix: "Case study — Vinicius Campanha Sartori",
  },
  projects: [
    {
      id: "condominium",
      name: "Condominium Operations Platform",
      shortName: "Condominium platform",
      category: "Operations platform · Multi-tenant SaaS",
      type: "Independent project",
      tagline:
        "Stock, purchasing and day-to-day operations for residential condominiums — with tenant isolation enforced by the database itself.",
      context:
        "A residential condominium managed its maintenance stock and purchases with a first-generation inventory app. It worked, but it stored stock as an editable number, had no approval trail and had grown beyond its original design.",
      problem:
        "Stock figures could drift from reality, purchases had no approval history, and records could change without a trace. The building manager needed control, the committee needed visibility and residents needed information — each with different permissions, across more than one condominium.",
      objective:
        "Evolve the app into an operations platform where stock is always derived from verifiable records, purchases follow an approval workflow, and each role sees exactly what it should.",
      solution:
        "A static web application built on plain ES modules, backed by Supabase. Every stock change goes through database functions that run in a single transaction; the browser has no direct write access to lots, movements or the audit trail. Row Level Security isolates each condominium.",
      architectureCaption:
        "The client never writes stock directly: it calls RPC functions that validate role, tenant and balance inside one transaction.",
      flowTitle: "Purchasing and stock flow",
      flowCaption:
        "Purchasing is separated from receiving. Receipts create lots; issues pick the lot that expires first (FEFO) or the oldest (FIFO).",
      decisions: [
        {
          title: "Stock is a result, never a field",
          body: "An item’s balance is the sum of its lots, computed in a view. There is no stock number anyone can edit by hand.",
        },
        {
          title: "An immutable ledger",
          body: "Movements are never updated or deleted. Mistakes are corrected with reversals or justified adjustments that reference the original record.",
        },
        {
          title: "The database is the last line of defence",
          body: "Permissions, sufficient balance, tenant and positive quantities are validated in the database. Composite foreign keys (item + condominium) prevent cross-tenant references.",
        },
        {
          title: "Idempotent, concurrency-safe operations",
          body: "Sensitive operations carry an idempotency key and a lock, so a double click never duplicates a movement.",
        },
        {
          title: "No build step, pinned dependencies",
          body: "Plain ES modules fit static hosting. Third-party libraries are vendored with SHA-256 checksums under a strict Content Security Policy — no eval, no inline scripts.",
        },
        {
          title: "Parallel run before cutover",
          body: "New tables coexist with the legacy model so the current app keeps working. Removing the legacy schema is a separate migration that requires explicit approval.",
        },
      ],
      implementation: [
        "Four roles: super admin, building manager, stock manager and resident.",
        "Lot-based inventory with expiry, cost and origin; automatic FEFO / FIFO picking with no negative balances.",
        "Purchasing workflow: draft → manager approval → order → partial or full receipt in multiple lots; invoices stored in a private bucket.",
        "Contracted services and payments, retroactive invoices, announcements with read tracking, meeting minutes, recommended providers, towers and apartments.",
        "Dashboard and reports (Chart.js): critical items, expiries, pending purchases, spending and stock coverage.",
        "22 versioned SQL migrations, each safe to re-run.",
        "Test layers: static security audit, unit tests, Playwright browser tests with a mocked Supabase, SQL scenarios and a concurrency test on a disposable Postgres.",
      ],
      status: {
        label: "Active development",
        detail: "The new version runs in parallel with the legacy app. The cutover is a separate, planned step.",
      },
      results: [
        "The feature set above is implemented in the new version of the app.",
        "An automated test suite that never touches the production database.",
        "Documented permissions model, test map and cutover plan.",
      ],
    },
    {
      id: "medical",
      name: "Medical Professional Website & Content Platform",
      shortName: "Medical website",
      category: "Digital product · Systems integration",
      type: "Independent project",
      tagline:
        "A static, fast institutional website that its owner can update — publishing itself through an event-driven pipeline.",
      context:
        "A medical specialist needed an institutional website: practice areas, appointments, publications and contact details — written within the Brazilian Federal Council of Medicine’s advertising rules.",
      problem:
        "Static hosting is fast, inexpensive and secure, but a static site usually means every text change needs a developer. The practice needed to update contact details and temporary notices on its own, without running a server.",
      objective:
        "Keep the site fully static on GitHub Pages while giving the owner a small admin panel whose changes are published automatically.",
      solution:
        "A Next.js static export whose editable content lives in Supabase. At build time the site embeds a snapshot of the content table. When content changes in the admin panel, a database trigger calls the GitHub API to dispatch the deployment workflow, which rebuilds and republishes the site.",
      architectureCaption:
        "Saving in the panel never waits for a deploy: the trigger fires an asynchronous HTTP call, and GitHub Actions does the rest.",
      flowTitle: "Content publishing pipeline",
      flowCaption:
        "From a change in the admin panel to a new static version online — without anyone running a deploy by hand.",
      decisions: [
        {
          title: "Static by default",
          body: "output: export with a configurable base path, so the same build works on a GitHub Pages sub-path or a custom domain.",
        },
        {
          title: "Event-driven publishing",
          body: "A Postgres trigger uses pg_net to call workflow_dispatch asynchronously. The GitHub token lives in Supabase Vault, never in code.",
        },
        {
          title: "Fail loudly in CI",
          body: "If the content snapshot can’t be read during a CI build, the build stops instead of publishing stale data. Locally it falls back to the values in code.",
        },
        {
          title: "Validation in the database",
          body: "Content blocks are validated by a SQL function — allowed fields, types, phone formats — and protected by RLS. The admin UI is a convenience, not the guard.",
        },
        {
          title: "A publication lock",
          body: "A placeholder check blocks publishing while any unfilled marker remains in the built output; search indexing is enabled only by an explicit flag.",
        },
        {
          title: "Scheduled rebuilds",
          body: "Two scheduled builds a day refresh content and keep the free-tier database active.",
        },
      ],
      implementation: [
        "Pages for home, about, practice areas, appointments, publications and privacy; sitemap and robots generated at build time.",
        "Admin area with Supabase Auth and an editor for temporary notices with start and end dates.",
        "CI pipeline: TypeScript, ESLint, unit tests (Vitest) and Playwright navigation tests against a build with a simulated base path — then production build and deploy.",
        "Database tests for RLS and notice validation.",
      ],
      status: {
        label: "Pre-launch",
        detail: "The technical foundation is complete. Final content and approvals from the practice are pending before publication.",
      },
      results: [
        "Publishing pipeline implemented end to end: panel → database → GitHub Actions → GitHub Pages.",
        "An automated quality gate on every push: types, lint, unit and browser tests.",
      ],
    },
    {
      id: "community",
      name: "Community & Association Portal",
      shortName: "Community portal",
      category: "Web platform · Access control",
      type: "Independent project",
      tagline:
        "A members’ portal for a university house community founded in 2007 — memory, networking and the association’s operations, with privacy designed in.",
      context:
        "A university student house (a república) founded in 2007 has generations of former residents spread across cities and careers. The community wanted a single place for its memory, its network and its association.",
      problem:
        "Bringing members from different periods together means handling personal data with care: who can see whom, what each person chooses to share, and who may administer money and content.",
      objective:
        "A portal with access requests and approval, per-section privacy controls, and modules for events, the association’s finances and the community’s history.",
      solution:
        "A Next.js App Router application with Supabase Auth, PostgreSQL with RLS and Storage. Security works in three layers: a proxy that renews sessions and blocks anonymous access, server-side permission checks in layouts, and RLS as the final authority.",
      architectureCaption:
        "Three independent layers of access control — if one fails, the next still holds. The database has the final word.",
      flowTitle: "Access lifecycle",
      flowCaption: "Nobody gets in by default: access is requested, reviewed and granted by invitation.",
      decisions: [
        {
          title: "Defence in depth",
          body: "Route guard in the proxy, permission checks in server layouts and RLS in Postgres. Each layer assumes the previous one might fail.",
        },
        {
          title: "Organised by domain",
          body: "Code is grouped by feature — access, profiles, events, association, store, museum, jobs — each with its own actions, Zod schemas and components.",
        },
        {
          title: "Privacy per profile section",
          body: "Members choose the visibility of each part of their profile, including multiple periods of residence and social links.",
        },
        {
          title: "Testing that access is denied",
          body: "pgTAP tests assert that unauthorised access fails. CI runs them against the official Supabase image.",
        },
        {
          title: "Database tests without Docker",
          body: "A shim imitates Supabase objects (auth.users, auth.uid(), storage) on plain Postgres 16, so RLS tests also run locally.",
        },
      ],
      implementation: [
        "Access requests, approval and invitations; profiles with privacy settings.",
        "Directory, events, a shared fund, a store with cart and PIX payments, announcements and stories.",
        "A photo “museum”, job postings and per-event flyers.",
        "Association module: membership, monthly fees via PIX, ledger and documents.",
        "31 versioned migrations; CI with lint, types, unit tests, build and database tests.",
      ],
      status: {
        label: "MVP in progress",
        detail: "Stage 3 (MVP) is underway; the modules above are marked as complete in the repository.",
      },
      results: [
        "Modules listed above implemented and covered by CI.",
        "Access-denial tests at the database level for restricted data.",
      ],
    },
    {
      id: "integration-hub",
      name: "Business Integration Hub",
      shortName: "Integration hub",
      category: "Concept · Demonstrator",
      type: "Concept / demonstrator",
      tagline:
        "A demonstrator for connecting business applications through APIs, webhooks and observable workflows.",
      context:
        "Small and mid-sized businesses often connect their tools with ad-hoc scripts and point-to-point automations. When something fails, it is hard to know where.",
      problem:
        "Point-to-point integrations multiply without shared logging, retries or access control — and stay invisible until they break.",
      objective:
        "Design a hub that receives events, routes them through configurable workflows and records every execution — to practise and demonstrate integration patterns end to end.",
      solution:
        "An ingestion gateway that authenticates and normalises inbound events, a queue between ingestion and execution, a workflow engine with retries, an execution log with per-step status, monitoring and role-based access to connections and secrets.",
      architectureCaption: "Intended architecture. Dashed lines mark observability and control paths.",
      flowTitle: "Intended event lifecycle",
      flowCaption: "Every inbound event is verified, deduplicated, queued, executed with retries and logged.",
      decisions: [
        {
          title: "Idempotency on every inbound event",
          body: "Webhook providers retry. A deduplication key per event keeps a retry from running a workflow twice.",
        },
        {
          title: "Signed webhooks",
          body: "HMAC signature verification before anything is accepted into the system.",
        },
        {
          title: "Decouple ingestion from execution",
          body: "A queue (outbox pattern) so slow or failing targets never block the reception of new events.",
        },
        {
          title: "Observable by design",
          body: "Structured execution logs and metrics from day one, rather than bolted on after the first incident.",
        },
      ],
      implementation: [
        "REST API and webhook endpoints.",
        "Workflow automation with configurable steps.",
        "Application connectors.",
        "Execution logs and monitoring dashboards.",
        "Access control for connections and secrets.",
      ],
      status: {
        label: "Concept",
        detail: "Architecture and scope defined. Implementation has not been published yet.",
      },
      results: [],
    },
  ],
};
