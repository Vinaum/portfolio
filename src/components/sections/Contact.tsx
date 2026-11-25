import type { Dictionary } from "@/content/types";
import { site } from "@/content";
import { ArrowUpRight, MaskWords } from "@/components/ui/primitives";

export function Contact({ dict, index }: { dict: Dictionary; index: string }) {
  const { contact: c, ids } = dict;
  const rows = [
    { label: "E-mail", cta: c.email, value: site.email, href: `mailto:${site.email}`, external: false, hint: c.emailHint },
    { label: "LinkedIn", cta: c.linkedin, value: "/in/viniciussartori", href: site.linkedin, external: true },
    { label: "GitHub", cta: c.github, value: `/${site.githubHandle}`, href: site.github, external: true },
  ];
  return (
    <section id={ids.contact} aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line pb-20 pt-28 lg:pt-40">
      <div className="container-x">
        <div className="t-mono flex items-center gap-4 text-muted" data-reveal="fade">
          <span className="text-accent">{index}</span>
          <span className="text-paper">{c.label}</span>
          <span aria-hidden="true" className="hidden sm:inline">
            /
          </span>
          <span className="hidden sm:inline">{c.code}</span>
        </div>

        <MaskWords as="h2" id="contact-title" text={c.headline} className="t-display mt-14 max-w-[14ch] text-paper" />

        {/* Closing figure: the connection the whole page has been drawing. */}
        <div className="mt-14 hidden md:block" data-reveal="fade" aria-hidden="true">
          <svg viewBox="0 0 1200 40" className="draw block h-auto w-full overflow-visible">
            <rect className="dn" x="0" y="8" width="150" height="24" fill="none" stroke="#3c4a42" />
            <text className="dn" x="12" y="24" fill="#929B94" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="0.1em">
              {c.figureFrom}
            </text>
            <path className="dl" pathLength={1} style={{ ["--len" as string]: 1, ["--d" as string]: 200 }} d="M150 20 H1040" stroke="#36A477" fill="none" />
            <rect className="dn" style={{ ["--d" as string]: 1300 }} x="1040" y="8" width="160" height="24" fill="#146B4C" stroke="#36A477" />
            <text className="dn" style={{ ["--d" as string]: 1300 }} x="1052" y="24" fill="#E8EAE5" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="0.1em">
              {c.figureTo}
            </text>
          </svg>
        </div>

        <div className="grid-12 mt-14 gap-y-10">
          <p className="t-lead col-span-12 text-paper/75 lg:col-span-5" data-reveal>
            {c.body}
          </p>
          <ul className="col-span-12 border-t border-line lg:col-span-7">
            {rows.map((r, i) => (
              <li key={r.label} data-reveal style={{ ["--d" as string]: i * 90 }}>
                <a
                  href={r.href}
                  {...(r.external ? { target: "_blank", rel: "me noopener noreferrer" } : {})}
                  className="group grid grid-cols-[5.5rem_1fr_auto] items-center gap-4 border-b border-line py-6 transition-colors hover:border-accent sm:grid-cols-[7rem_1fr_auto]"
                  aria-label={r.hint ? `${r.cta} — ${r.value} (${r.hint})` : `${r.cta} — ${r.value}`}
                >
                  <span className="t-mono text-muted">{r.label}</span>
                  <span className="min-w-0">
                    <span className="block font-display text-[clamp(1.3rem,2.4vw,2rem)] leading-tight tracking-[-0.025em] text-paper transition-colors group-hover:text-accent">
                      {r.cta}
                    </span>
                    <span className="t-mono-sm mt-1 block truncate normal-case tracking-[0.04em] text-muted">{r.value}</span>
                  </span>
                  <span className="grid h-11 w-11 place-items-center border border-line text-paper transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-obsidian">
                    <ArrowUpRight />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
