/** Language-neutral facts about the site owner. Single source of truth for contact data. */
export const site = {
  name: "Vinicius Campanha Sartori",
  shortName: "Vinicius Sartori",
  initials: "VCS",
  email: "vinicius.sartori@gmail.com",
  linkedin: "https://www.linkedin.com/in/viniciussartori/",
  github: "https://github.com/Vinaum",
  githubHandle: "Vinaum",
  /** Public URL without trailing slash. Override with NEXT_PUBLIC_SITE_URL at build time. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vinaum.github.io").replace(/\/$/, ""),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  alumniOf: "Universidade Estadual de Campinas (UNICAMP)",
} as const;

export const storageKeys = {
  locale: "vcs:locale",
} as const;
