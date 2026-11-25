import type { Dictionary } from "../types";

export const en: Dictionary = {
  locale: "en",
  htmlLang: "en",
  ogLocale: "en_US",
  meta: {
    title: "Vinicius Sartori | Solutions Engineer & Systems Integration",
    description:
      "Vinicius Campanha Sartori — Computer Engineer (UNICAMP) and Solutions Engineer: systems integration, APIs, automation, cloud and team building.",
    keywords: [
      "Solutions Engineer",
      "Systems Integration",
      "API Integration",
      "Cloud Solutions",
      "Implementation Engineer",
      "Technical Consultant",
      "Computer Engineer",
      "Automation",
      "Team Building",
      "AWS",
      "Supabase",
      "Next.js",
    ],
  },
  ids: {
    about: "about",
    companies: "experience",
    capabilities: "capabilities",
    work: "work",
    clients: "clients",
    beyond: "beyond-business",
    learning: "learning",
    contact: "contact",
  },
  nav: {
    skip: "Skip to content",
    home: "Home",
    projects: "Projects",
    capabilities: "Capabilities",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    otherExperience: "Other experience",
    submenu: "Show sections of",
    menu: "Menu",
    close: "Close",
    language: "Language",
    switchTo: "Ver em português",
  },
  hero: {
    role: "Solutions Engineer",
    roleSub: "Systems Integration · Solutions Architecture · Automation",
    headline: "Connecting technology, business and people into solutions that work.",
    supporting:
      "Computer Engineer from UNICAMP. I design and integrate solutions with the technical problem, the business context and the people who will build and use them in view — a perspective shaped by 7+ years assessing technical talent and leading teams.",
    ctaPrimary: "Explore my work",
    ctaSecondary: "Let’s connect",
    availability: "Open to new opportunities",
    availabilityDetail: "Solutions · Integration · Implementation · Consulting",
    facts: [
      "Computer Engineering — UNICAMP",
      "Co-founder — Raiz Universitária",
      "7+ years in technology recruitment",
    ],
    diagramTitle: "System context diagram",
    diagramDescription:
      "An architecture diagram connecting People and Business to Applications and Data, Applications to APIs, and APIs to Cloud, Automation and Infrastructure.",
  },
  about: {
    label: "About, education & leadership",
    title: "Good solutions start with understanding the problem. Great ones also depend on the people who build them.",
    lead:
      "My path hasn’t been linear — and that is the point. Engineering, business and people are not three separate careers in my story; they are the parts of one way of working.",
    convergence: {
      label: "How the pieces converge",
      steps: [
        { title: "Computer Engineering", body: "Systems thinking and a technical foundation." },
        { title: "Entrepreneurship", body: "Turning an idea into something people use." },
        { title: "Technology recruitment", body: "Seven-plus years reading technical skills, maturity and team needs." },
        { title: "Team leadership", body: "Developing consultants and leading teams of up to 17." },
        { title: "Teaching", body: "Making technical concepts accessible to beginners." },
        { title: "Associations & social projects", body: "Coordinating people and institutions around a shared goal." },
        { title: "Digital solutions", body: "Designing, integrating and shipping real applications." },
      ],
      closing:
        "My move into solutions work is not a restart. It is where a technical education, business experience and an understanding of people finally meet.",
    },
    education: {
      label: "Academic education",
      institution: "Universidade Estadual de Campinas",
      short: "UNICAMP",
      items: [
        { level: "Bachelor’s degree", title: "Computer Engineering", institution: "UNICAMP" },
        { level: "Postgraduate", title: "Computer Hardware Engineering" },
        { level: "MBA", title: "People and Performance Management" },
      ],
    },
    entrepreneurship: {
      label: "Entrepreneurship",
      name: "Raiz Universitária",
      role: "Co-founder",
      body: "My first lesson in turning an idea into something people actually use — with limited resources and real deadlines.",
      highlights: [
        { value: "80", label: "events" },
        { value: "5", label: "universities" },
        { value: "10,000+", label: "students in the community" },
        { value: "3rd", label: "place, Desafio UNICAMP de Inovação Tecnológica" },
      ],
    },
    leadership: {
      label: "Leadership",
      body:
        "At PageGroup and Share People Hub I led recruitment teams: developing and training consultants, managing client relationships and running team goals and indicators. These were recruitment teams — not engineering teams — and they taught me how people, skills and objectives fit together.",
      stat: { value: "17", label: "recruitment consultants in the largest team I led", note: "Recruitment teams, not software engineering teams." },
    },
  },
  companies: {
    label: "Professional experience",
    title: "Where I learned how technology businesses actually work.",
    intro:
      "Four companies shaped my perspective the most: an insurtech, an applied-AI company and two specialized recruitment firms.",
    roleLabel: "Role",
    responsibilitiesLabel: "Responsibilities",
    skillsLabel: "Developed",
    featured: [
      {
        id: "pier",
        name: "Pier",
        sector: "Insurtech",
        description: "Brazil’s first digital insurer authorized by Susep.",
        relationship: "In-house technology recruiter",
        responsibilities: [
          "Recruiting technical profiles",
          "Aligning profiles with technical hiring managers",
          "Technical and behavioral assessment",
          "Talent attraction and employer branding",
        ],
        skills: ["Technical Talent Assessment", "Stakeholder Management"],
      },
      {
        id: "gobots",
        name: "GoBots",
        sector: "Applied AI · E-commerce",
        description: "AI automation for retailers on marketplaces such as Mercado Livre, Amazon, Shopee and Magalu.",
        relationship: "Sales Manager",
        responsibilities: [
          "Prospecting and managing the sales pipeline",
          "Presenting an AI product to business clients",
          "Uncovering client needs before proposing",
        ],
        skills: ["Business discovery", "Solution presentation"],
      },
      {
        id: "pagegroup",
        name: "PageGroup",
        brands: "Page Outsourcing · Michael Page",
        sector: "Specialized recruitment",
        description: "A FTSE 250 recruitment group operating in more than 30 countries.",
        relationship: "Led a team of recruitment consultants",
        responsibilities: [
          "Developing and training consultants",
          "Technology recruitment for client companies",
          "Client relationship management",
          "Team goals and indicators",
        ],
        skills: ["Leadership & Team Development", "Client management"],
      },
      {
        id: "sharepeoplehub",
        name: "Share People Hub",
        brands: "formerly Share RH",
        sector: "HR solutions · Recruitment",
        description: "An HR solutions hub founded in 2015 in São Paulo.",
        relationship: "Led several teams and coordinated end-to-end projects",
        responsibilities: [
          "Recruitment, selection and Education Recruiting projects, end to end",
          "Technology recruitment",
          "Designing selection processes",
          "Developing and training consultants",
          "Client and stakeholder management",
        ],
        skills: ["Project coordination", "Process design", "Team Building"],
      },
    ],
    othersTitle: "Other experience",
    others: [
      { name: "Trópico Telecomunicações", area: "Technology & telecom" },
      { name: "Independent technology projects", area: "Solutions engineering — see Projects" },
    ],
    trademarkNote: "Company names and logos belong to their respective owners.",
  },
  clients: {
    label: "Clients",
    title: "Companies that have trusted my work.",
    intro: "Organizations I have worked with or delivered for.",
    items: [],
    note: "Names and logos belong to their respective owners and are shown to identify past collaborations.",
  },
  capabilities: {
    label: "Solutions engineering capabilities",
    title: "Technology, business and people — four pillars of the same practice.",
    intro: "Each pillar shows where the experience comes from. Cloud items are marked as applied in projects or in study.",
    applied: "Applied",
    study: "In study",
    studyNote: "Courses and lab practice — not professional experience.",
    items: [
      {
        id: "architecture",
        title: "Solutions Engineering & Architecture",
        summary: "Understanding the problem first, then designing a solution the business can actually run.",
        items: [
          { text: "Requirements gathering and analysis" },
          { text: "Solution design" },
          { text: "Systems architecture" },
          { text: "Feasibility analysis" },
          { text: "Technical decisions driven by business goals" },
        ],
        evidenceLabel: "Applied in",
        evidence: "A written technical plan with explicit decisions approved before implementation — condominium platform.",
      },
      {
        id: "integration",
        title: "Systems Integration & Automation",
        summary: "Connecting applications, data and processes so they work as one system.",
        items: [
          { text: "REST APIs" },
          { text: "Webhooks and event-driven triggers" },
          { text: "Integration between systems and SaaS" },
          { text: "Business process automation" },
          { text: "Data modelling and data flow" },
          { text: "Error handling and reliability: idempotency, locks, validation" },
        ],
        evidenceLabel: "Applied in",
        evidence: "A database trigger that calls the GitHub API to republish a site; idempotent, concurrency-safe stock operations.",
      },
      {
        id: "cloud",
        title: "Cloud & Infrastructure",
        summary: "Hosting, pipelines and security for what I build — with an honest line between practice and study.",
        items: [
          { text: "Managed platforms: Supabase, Vercel, GitHub Pages", status: "applied" },
          { text: "CI/CD with GitHub Actions", status: "applied" },
          { text: "Linux", status: "applied" },
          { text: "Application security: RLS, CSP, secrets in a vault", status: "applied" },
          { text: "Cloud computing on AWS", status: "study" },
          { text: "Infrastructure as code: Terraform, Ansible", status: "study" },
          { text: "Observability, SRE and FinOps", status: "study" },
          { text: "Platform Engineering (introductory)", status: "study" },
        ],
        evidenceLabel: "Applied in / studying",
        evidence: "Pipelines and hosting of the three implemented projects; AWS, IaC, SRE and FinOps through courses.",
      },
      {
        id: "people",
        title: "People & Team Building",
        summary:
          "Seven-plus years in specialized technology recruitment gave me a wide view of technical skills, professional maturity, team composition and what organizations really need.",
        items: [
          { text: "Team Building & Team Composition" },
          { text: "Technical Talent Assessment" },
          { text: "Leadership & Team Development" },
          { text: "Stakeholder Management" },
          { text: "Cross-functional Collaboration" },
          { text: "Technical Communication" },
          { text: "Technology-Business-People Alignment" },
        ],
        evidenceLabel: "Comes from",
        evidence:
          "Technology recruitment, leading recruitment teams of up to 17 consultants, teaching programming and co-founding a startup. Not engineering management.",
      },
    ],
    people: {
      kicker: "Why it matters in solutions work",
      message:
        "Understanding technology is essential. Understanding the people who build, use and sustain that technology matters just as much.",
      perspective:
        "When I look at a solution I consider the technical problem, the business context, the people involved, the skills it requires, how different areas will collaborate — and whether it can be sustained over time.",
    },
  },
  work: {
    label: "Selected projects",
    title: "Projects that started from an operational problem — not from a technology choice.",
    intro:
      "Each case is documented from its repository: what was built, how, and what is still in progress. The concept is labelled as a concept.",
    viewCase: "Read the case study",
    status: "Status",
    stack: "Stack",
    concept: "Concept",
    built: "Built",
  },
  beyond: {
    label: "Teaching & social impact",
    title: "Explaining technology and organizing people around a shared goal.",
    teaching: {
      label: "Teaching programming",
      title: "Teaching technology, empowering people.",
      body:
        "For a few years I taught programming in social projects to people with no prior experience — logic, computational thinking, Scratch, Python and Java. The point was never just the languages: it was making technical ideas understandable at every level.",
      note: "That is where I learned to explain technology — long before working with solutions.",
      tools: ["Logic", "Computational thinking", "Scratch", "Python", "Java"],
      skills: [
        "Explaining complex concepts in plain language",
        "Adapting the method to each learner’s level",
        "Structured problem solving",
        "Developing people and sharing knowledge",
      ],
    },
    association: {
      label: "Leadership & social impact",
      role: "President",
      organization: "Associação de Repúblicas da UNICAMP — the association of UNICAMP’s student houses",
      body:
        "As president, I led a member-based organization, brought different student houses together and represented them institutionally. With CORI, UNICAMP’s international relations office, I helped coordinate an initiative that secured housing for a number of refugee university students from Haiti.",
      partner: "In partnership with CORI · UNICAMP",
      points: ["Institutional leadership", "Coordination between the association and the university", "Collective responsibility", "Social impact"],
    },
  },
  learning: {
    label: "Continuous learning",
    title: "Still studying — by area.",
    intro: "Completed free courses on Alura, with the full record available to check.",
    note: "Free online courses completed on Alura between 2017 and 2026 — not professional certifications.",
    recordLink: "View full learning record",
    introductory: "introductory",
    courseOne: "1 course",
    courseMany: "{n} courses",
    more: "+{n} more",
    areas: {
      devops: "DevOps & Cloud",
      programming: "Programming",
      security: "Cybersecurity",
      business: "Business, Management & Product",
      ai: "Artificial Intelligence",
      frontend: "Front-end",
    },
  },
  contact: {
    label: "Contact",
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
      contribution: "My contribution",
      decisions: "Technical decisions & trade-offs",
      security: "Security & access control",
      delivery: "Testing & deployment",
      implementation: "Implementation",
      technologies: "Technologies",
      status: "Current status",
      results: "Documented results",
      limitations: "Limitations & next steps",
    },
    planned: "planned",
    redirectNotice: "This page has moved to",
    plannedDecisions: "Design decisions (planned)",
    plannedImplementation: "Planned scope",
    candidateStack: "Candidate stack",
    next: "Next case",
    metaTitleSuffix: "Case study | Vinicius Sartori",
    conceptTitleSuffix: "Concept | Vinicius Sartori",
  },
  projects: [
    {
      id: "condominium",
      name: "Condominium Operations Platform",
      shortName: "Condominium Management",
      category: "Operations platform · Multi-tenant SaaS",
      type: "Independent project",
      tagline:
        "Stock, purchasing and day-to-day operations for residential condominiums — with tenant isolation enforced by the database itself.",
      seoDescription:
        "Case study: a multi-tenant condominium operations platform on Supabase — RLS tenant isolation, RPC-only writes, lot-based inventory and purchase approvals.",
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
      contribution:
        "Independent project: requirements and a written technical plan submitted for the client’s approval, data model, security policies, implementation, tests and deployment.",
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
      security: [
        "Row Level Security isolates each condominium; composite foreign keys block cross-tenant references.",
        "Four roles, with permissions enforced in the database — not only in the interface.",
        "The browser cannot write lots, movements or audit records directly; every change goes through RPC functions.",
        "Strict Content Security Policy, vendored libraries with SHA-256 checksums, and escaping of all user text — an automated audit blocks unescaped HTML.",
        "Invoices stored in a private bucket.",
      ],
      delivery: [
        "Static hosting compatible with GitHub Pages: plain ES modules, no build step.",
        "22 versioned SQL migrations, each safe to re-run.",
        "Static security audit, unit tests, Playwright browser tests with a mocked Supabase, SQL scenarios and a concurrency test on a disposable Postgres.",
      ],
      implementation: [
        "Four roles: super admin, building manager, stock manager and resident.",
        "Lot-based inventory with expiry, cost and origin; automatic FEFO / FIFO picking with no negative balances.",
        "Purchasing workflow: draft → manager approval → order → partial or full receipt in multiple lots; invoices stored in a private bucket.",
        "Contracted services and payments, retroactive invoices, announcements with read tracking, meeting minutes, recommended providers, towers and apartments.",
        "Dashboard and reports (Chart.js): critical items, expiries, pending purchases, spending and stock coverage.",
      ],
      limitations: [
        "The new version still runs in parallel with the legacy app; the cutover — including an irreversible legacy-removal migration — is pending.",
        "Supabase free tier: the project pauses when inactive, storage is limited to 1 GB and invitation e-mails are rate-limited.",
        "Physical stock counts are out of scope for this round (the adjustments table already supports them).",
        "No usage metrics published yet.",
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
      shortName: "Medical Platform",
      category: "Digital product · Systems integration",
      type: "Independent project",
      tagline:
        "A static, fast institutional website that its owner can update — publishing itself through an event-driven pipeline.",
      seoDescription:
        "Case study: a static Next.js medical website on GitHub Pages, republished automatically when a Supabase trigger calls GitHub Actions (workflow_dispatch).",
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
      contribution:
        "Independent project: architecture, implementation, publishing pipeline, tests and deployment. Content and approvals come from the practice.",
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
      security: [
        "Content blocks are validated by a SQL function and protected by RLS; only authenticated administrators can edit.",
        "The GitHub token lives in Supabase Vault, never in the repository.",
        "Publishing lock: the build fails while any unfilled content marker remains, and indexing is enabled only by an explicit flag.",
      ],
      delivery: [
        "Static export to GitHub Pages with a configurable base path.",
        "CI on every push: TypeScript, ESLint, Vitest unit tests and Playwright navigation tests, then build and deploy.",
        "Rebuilds triggered by content changes (database trigger → workflow_dispatch) and twice a day on a schedule.",
        "Database tests for RLS and notice validation.",
      ],
      implementation: [
        "Pages for home, about, practice areas, appointments, publications and privacy; sitemap and robots generated at build time.",
        "Admin area with Supabase Auth and an editor for temporary notices with start and end dates.",
      ],
      limitations: [
        "Not public yet: final texts, contact details, photo and confirmed publications are pending from the practice.",
        "Structured data, final share image and favicon will be added with the real content.",
        "The privacy policy is still to be written, with an LGPD review.",
        "A content change needs a full static rebuild before it appears — minutes, not seconds.",
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
      shortName: "Community Portal",
      category: "Web platform · Access control",
      type: "Independent project",
      tagline:
        "A members’ portal for a university house community founded in 2007 — memory, networking and the association’s operations, with privacy designed in.",
      seoDescription:
        "Case study: a Next.js and Supabase members’ portal with three-layer access control, per-section privacy and pgTAP tests for row-level security.",
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
      contribution:
        "Independent project built with AI-assisted development: I defined the scope, access model and privacy rules, and directed, reviewed, tested and deployed an implementation written largely with Claude, an AI coding assistant.",
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
      security: [
        "Three independent layers: a proxy route guard, server-side permission checks in layouts, and RLS as the final authority.",
        "Access by request, review and invitation — nobody gets in by default.",
        "Members choose the visibility of each section of their profile.",
        "Uploaded images are re-encoded on the server: non-images are rejected, sizes limited and files converted to WebP.",
        "pgTAP tests assert that unauthorized access is denied.",
      ],
      delivery: [
        "31 versioned migrations.",
        "CI: lint, types, Vitest unit tests, build, and pgTAP database tests against the official Supabase image.",
        "Local RLS tests on plain Postgres 16 through a shim — no Docker required.",
        "Hosted on Vercel.",
      ],
      implementation: [
        "Access requests, approval and invitations; profiles with privacy settings.",
        "Directory, events, a shared fund, a store with cart and PIX payments, announcements and stories.",
        "A photo “museum”, job postings and per-event flyers.",
        "Association module: membership, monthly fees via PIX, ledger and documents.",
      ],
      limitations: [
        "Stage 3 (MVP) is still in progress.",
        "Automated backups are not implemented yet; they are planned for a later stage.",
        "Publishing the store module depends on a hosting decision.",
        "Some data-retention clean-up runs on user activity rather than on a scheduler, until the plan allows pg_cron.",
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
      shortName: "Business Integration Hub",
      category: "Concept · Demonstrator",
      type: "Concept / demonstrator",
      tagline:
        "A demonstrator for connecting business applications through APIs, webhooks and observable workflows.",
      seoDescription:
        "Concept: design for a business integration hub — REST APIs, signed webhooks, queued idempotent workflows, execution logs and monitoring. Not yet implemented.",
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
      contribution:
        "Concept and architecture design. No code has been published yet.",
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
      security: [
        "HMAC signature verification on every inbound webhook.",
        "Secrets kept in a vault, never inside workflow definitions.",
        "Role-based access to connections, with least-privilege connectors.",
      ],
      delivery: [
        "Containerized services (Docker) with a CI/CD pipeline.",
        "Metrics in Prometheus and dashboards in Grafana.",
      ],
      implementation: [
        "REST API and webhook endpoints.",
        "Workflow automation with configurable steps.",
        "Application connectors.",
        "Execution logs and monitoring dashboards.",
        "Access control for connections and secrets.",
      ],
      limitations: [
        "Not implemented: this page describes the intended design only.",
        "The candidate stack has not been validated in practice yet.",
      ],
      status: {
        label: "Concept",
        detail: "Architecture and scope defined. Implementation has not been published yet.",
      },
      results: [],
    },
  ],
};
