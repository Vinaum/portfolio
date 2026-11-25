"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary, Locale } from "@/content/types";
import { homePath, site } from "@/content";
import { storageKeys } from "@/content/shared/site";
import type { MenuItem } from "@/lib/menu";

interface Props {
  dict: Dictionary;
  locale: Locale;
  /** Equivalent page in the other language. */
  alternateHref: string;
  onHome: boolean;
  menu: MenuItem[];
  /** Home section id → menu key, for the active indicator. */
  sectionKeys: Record<string, MenuItem["key"]>;
  /** Menu item to mark as current on non-home pages. */
  currentKey?: MenuItem["key"];
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
      <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

const isInternal = (href: string) => href.startsWith("/") || href.startsWith("#");

function NavAnchor({ href, className, children, onClick, current }: { href: string; className?: string; children: React.ReactNode; onClick?: () => void; current?: boolean }) {
  // Hash links stay plain anchors (smooth scroll on the same page); paths use next/link (basePath, prefetch).
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} onClick={onClick} aria-current={current ? "true" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick} aria-current={current ? "true" : undefined} prefetch={isInternal(href) ? undefined : false}>
      {children}
    </Link>
  );
}

export function Header({ dict, locale, alternateHref, onHome, menu, sectionKeys, currentKey }: Props) {
  const { nav } = dict;
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<MenuItem["key"] | null>(currentKey ?? null);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<MenuItem["key"] | null>(null);
  const [expanded, setExpanded] = useState<MenuItem["key"] | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);

  // Header surface changes once the page leaves the top.
  useEffect(() => {
    const top = document.getElementById("top");
    if (!top) return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting), { rootMargin: "48px 0px 0px 0px" });
    io.observe(top);
    return () => io.disconnect();
  }, []);

  // Active section indicator (home only).
  useEffect(() => {
    if (!onHome) return;
    const els = Object.keys(sectionKeys)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(sectionKeys[e.target.id] ?? null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome, sectionKeys]);

  // Desktop dropdowns: Escape closes, clicking outside closes.
  useEffect(() => {
    if (!dropdown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const key = dropdown;
        setDropdown(null);
        navRef.current?.querySelector<HTMLButtonElement>(`[data-toggle="${key}"]`)?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [dropdown]);

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  // Mobile menu: scroll lock, Escape, focus.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const rememberLocale = (l: Locale) => {
    try {
      localStorage.setItem(storageKeys.locale, l);
    } catch {
      /* storage unavailable — preference simply isn't kept */
    }
  };

  const other: Locale = locale === "pt-BR" ? "en" : "pt-BR";

  const langSwitch = (
    <div className="t-mono flex items-center gap-2" role="group" aria-label={nav.language}>
      {(["pt-BR", "en"] as Locale[]).map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 ? (
            <span aria-hidden="true" className="text-line">
              /
            </span>
          ) : null}
          {l === locale ? (
            <span aria-current="true" className="text-paper">
              {l === "pt-BR" ? "PT" : "EN"}
            </span>
          ) : (
            <Link
              href={alternateHref}
              hrefLang={other}
              lang={other}
              className="text-muted transition-colors hover:text-accent"
              onClick={() => rememberLocale(other)}
              aria-label={nav.switchTo}
            >
              {l === "pt-BR" ? "PT" : "EN"}
            </Link>
          )}
        </span>
      ))}
    </div>
  );

  const openOnHover = (key: MenuItem["key"]) => {
    window.clearTimeout(hoverTimer.current);
    setDropdown(key);
  };
  const closeOnLeave = () => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setDropdown(null), 180);
  };

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50" data-scrolled={scrolled || open ? "true" : "false"}>
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href={homePath(locale)} className="group flex items-center gap-3" aria-label={`${site.name} — ${nav.home}`}>
          <span className="grid h-8 w-8 place-items-center border border-line font-mono text-[0.62rem] tracking-[0.06em] text-paper transition-colors group-hover:border-accent group-hover:text-accent">
            {site.initials}
          </span>
          <span className="t-mono hidden text-paper sm:inline">{site.shortName}</span>
        </Link>

        {/* Desktop navigation */}
        <nav ref={navRef} aria-label={nav.menu} className="hidden lg:block">
          <ul className="t-mono flex items-center gap-7">
            {menu.map((item) => {
              const isOpen = dropdown === item.key;
              const panelId = `nav-panel-${item.key}`;
              return (
                <li
                  key={item.key}
                  className="relative flex items-center gap-1.5"
                  onMouseEnter={item.children ? () => openOnHover(item.key) : undefined}
                  onMouseLeave={item.children ? closeOnLeave : undefined}
                >
                  <NavAnchor href={item.href} className="nav-link" current={active === item.key}>
                    {item.label}
                  </NavAnchor>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        data-toggle={item.key}
                        className="grid h-6 w-5 place-items-center text-muted transition-colors hover:text-accent"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        aria-label={`${nav.submenu} ${item.label}`}
                        onClick={() => setDropdown(isOpen ? null : item.key)}
                      >
                        <Chevron open={isOpen} />
                      </button>
                      <div
                        id={panelId}
                        hidden={!isOpen}
                        className="nav-panel absolute left-[-1rem] top-full pt-3"
                      >
                        <ul className="min-w-[17rem] border border-line bg-obsidian/95 py-2 backdrop-blur-md">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <NavAnchor
                                href={c.href}
                                onClick={() => setDropdown(null)}
                                className="block px-4 py-2.5 normal-case tracking-[0.02em] text-paper/80 transition-colors hover:bg-graphite hover:text-paper focus-visible:bg-graphite"
                              >
                                {c.label}
                              </NavAnchor>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <a href={site.linkedin} target="_blank" rel="me noopener noreferrer" className="t-mono hidden text-muted transition-colors hover:text-accent xl:inline">
            LinkedIn ↗
          </a>
          {langSwitch}
          <button
            ref={buttonRef}
            type="button"
            className="t-mono flex h-10 items-center gap-3 border border-line px-3 text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => (open ? close() : setOpen(true))}
          >
            <span>{open ? nav.close : nav.menu}</span>
            <span aria-hidden="true" className="relative block h-2.5 w-4">
              <span className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${open ? "top-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation: compact accordion */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto border-t border-line bg-obsidian lg:hidden"
      >
        <nav aria-label={nav.menu} className="container-x flex min-h-full flex-col justify-between py-8">
          <ul className="flex flex-col">
            {menu.map((item) => {
              const isOpen = expanded === item.key;
              const panelId = `m-panel-${item.key}`;
              return (
                <li key={item.key} className="border-b border-line">
                  <div className="flex items-center justify-between gap-4">
                    <NavAnchor
                      href={item.href}
                      onClick={() => setOpen(false)}
                      current={active === item.key}
                      className="flex-1 py-4 font-display text-[1.7rem] leading-none tracking-[-0.03em] text-paper transition-colors hover:text-accent aria-[current=true]:text-accent"
                    >
                      {item.label}
                    </NavAnchor>
                    {item.children ? (
                      <button
                        type="button"
                        className="grid h-11 w-11 place-items-center border border-line text-paper"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        aria-label={`${nav.submenu} ${item.label}`}
                        onClick={() => setExpanded(isOpen ? null : item.key)}
                      >
                        <Chevron open={isOpen} />
                      </button>
                    ) : null}
                  </div>
                  {item.children ? (
                    <ul id={panelId} hidden={!isOpen} className="pb-4 pl-1">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <NavAnchor href={c.href} onClick={() => setOpen(false)} className="t-mono block py-2.5 normal-case tracking-[0.02em] text-paper/75 hover:text-accent">
                            {c.label}
                          </NavAnchor>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <div className="t-mono mt-10 flex flex-col gap-3 text-muted">
            <a className="link-u w-fit" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="link-u w-fit" href={site.linkedin} rel="me noopener" target="_blank">
              LinkedIn
            </a>
            <a className="link-u w-fit" href={site.github} rel="me noopener" target="_blank">
              GitHub
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
