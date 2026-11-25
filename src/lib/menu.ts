import type { Dictionary, Locale } from "@/content/types";
import { getProjects, homePath, projectPath, sectionHref } from "@/content";

export interface MenuLink {
  label: string;
  href: string;
}

export interface MenuItem extends MenuLink {
  /** Key used for the active-section indicator. */
  key: "home" | "projects" | "capabilities" | "experience" | "about" | "contact";
  children?: MenuLink[];
}

/**
 * Main navigation: six items, four with discreet sub-menus.
 * Sub-links point to anchors on the home page (or to project pages), in the current language.
 */
export function buildMenu(dict: Dictionary, locale: Locale, onHome: boolean): MenuItem[] {
  const { nav, ids } = dict;
  const at = (id: string) => sectionHref(locale, id, onHome);
  return [
    { key: "home", label: nav.home, href: onHome ? "#top" : homePath(locale) },
    {
      key: "projects",
      label: nav.projects,
      href: at(ids.work),
      children: getProjects(locale).map((p) => ({ label: p.content.shortName, href: projectPath(locale, p) })),
    },
    {
      key: "capabilities",
      label: nav.capabilities,
      href: at(ids.capabilities),
      children: dict.capabilities.items.map((c) => ({ label: c.title, href: at(`cap-${c.id}`) })),
    },
    {
      key: "experience",
      label: nav.experience,
      href: at(ids.companies),
      children: [
        ...dict.companies.featured.map((c) => ({ label: c.name, href: at(`exp-${c.id}`) })),
        { label: nav.otherExperience, href: at("exp-others") },
      ],
    },
    {
      key: "about",
      label: nav.about,
      href: at(ids.about),
      children: [
        { label: dict.about.education.label, href: at("about-education") },
        { label: dict.about.entrepreneurship.label, href: at("about-entrepreneurship") },
        { label: dict.about.leadership.label, href: at("about-leadership") },
        { label: dict.beyond.label, href: at(ids.beyond) },
      ],
    },
    { key: "contact", label: nav.contact, href: at(ids.contact) },
  ];
}

/** Which menu item is active for each home section id. */
export function sectionToMenuKey(dict: Dictionary): Record<string, MenuItem["key"]> {
  const { ids } = dict;
  return {
    hero: "home",
    [ids.work]: "projects",
    [ids.clients]: "projects",
    [ids.capabilities]: "capabilities",
    [ids.companies]: "experience",
    [ids.about]: "about",
    [ids.beyond]: "about",
    [ids.learning]: "about",
    [ids.contact]: "contact",
  };
}
