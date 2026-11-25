"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary, Locale } from "@/content/types";
import { homePath, sectionHref, site } from "@/content";
import { storageKeys } from "@/content/shared/site";

interface Props {
  dict: Dictionary;
  locale: Locale;
  /** Equivalent page in the other language. */
  alternateHref: string;
  onHome: boolean;
}

export function Header({ dict, locale, alternateHref, onHome }: Props) {
  const { nav, ids } = dict;
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const links = [
    { id: ids.about, label: nav.about },
    { id: ids.capabilities, label: nav.capabilities },
    { id: ids.work, label: nav.work },
    { id: ids.experience, label: nav.experience },
    { id: ids.contact, label: nav.contact },
  ];

  // Header surface changes once the page leaves the top.
  useEffect(() => {
    const top = document.getElementById("top");
    if (!top) return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting), { rootMargin: "48px 0px 0px 0px" });
    io.observe(top);
    return () => io.disconnect();
  }, []);

  // Active section indicator.
  useEffect(() => {
    if (!onHome) return;
    const sections = [ids.about, ids.capabilities, ids.work, ids.technology, ids.experience, ids.principles, ids.contact]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const map: Record<string, string> = {
      [ids.technology]: ids.work,
      [ids.principles]: ids.experience,
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(map[e.target.id] ?? e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    const hero = document.getElementById("hero");
    const heroIo = new IntersectionObserver(([e]) => e.isIntersecting && setActive(null), {
      rootMargin: "-45% 0px -50% 0px",
    });
    if (hero) heroIo.observe(hero);
    return () => {
      io.disconnect();
      heroIo.disconnect();
    };
  }, [onHome, ids]);

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

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50" data-scrolled={scrolled || open ? "true" : "false"}>
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href={homePath(locale)} className="group flex items-center gap-3" aria-label={`${site.name} — ${nav.home}`}>
          <span className="grid h-8 w-8 place-items-center border border-line font-mono text-[0.62rem] tracking-[0.06em] text-paper transition-colors group-hover:border-accent group-hover:text-accent">
            {site.initials}
          </span>
          <span className="t-mono hidden text-paper sm:inline">{site.shortName}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="t-mono flex items-center gap-8">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={sectionHref(locale, l.id, onHome)}
                  className="nav-link"
                  aria-current={active === l.id ? "true" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
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
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${open ? "top-1/2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${open ? "top-1/2 -rotate-45" : "bottom-0"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto border-t border-line bg-obsidian lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x flex min-h-full flex-col justify-between py-10">
          <ol className="flex flex-col">
            {links.map((l, i) => (
              <li key={l.id} className="border-b border-line">
                <a
                  href={sectionHref(locale, l.id, onHome)}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-5 py-5 font-display text-[2.1rem] leading-none tracking-[-0.03em] text-paper transition-colors hover:text-accent"
                >
                  <span className="t-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ol>
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
