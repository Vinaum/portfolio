import Link from "next/link";
import type { Locale } from "@/content/types";
import { getDictionary, getProjects, homePath, otherLocale, projectPath, sectionHref, type Project } from "@/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Diagram } from "@/components/diagrams/Diagram";
import { ArrowRight, ArrowUpRight, MaskWords } from "@/components/ui/primitives";
import { projectJsonLd } from "@/lib/seo";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="border-t border-line/70">
      {items.map((item) => (
        <li key={item} className="flex gap-4 border-b border-line/70 py-4 text-paper/85">
          <span className="mt-[0.75rem] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`${n}-h`} className="grid-12 gap-y-6 border-t border-line py-14 lg:py-20" data-reveal>
      <div className="col-span-12 lg:col-span-3">
        <h2 id={`${n}-h`} className="t-mono text-accent">
          {title}
        </h2>
      </div>
      <div className="col-span-12 lg:col-span-9">{children}</div>
    </section>
  );
}

export function CaseStudy({ project, locale }: { project: Project; locale: Locale }) {
  const dict = getDictionary(locale);
  const cs = dict.caseStudy;
  const s = cs.sections;
  const p = project.content;
  const isConcept = project.kind === "concept";
  const all = getProjects(locale);
  const idx = all.findIndex((x) => x.id === project.id);
  const next = all[(idx + 1) % all.length];
  const alternate = projectPath(otherLocale(locale), project);

  return (
    <>
      <Header dict={dict} locale={locale} alternateHref={alternate} onHome={false} />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(dict, project)) }} />
        <article aria-labelledby="case-title">
          {/* Opening */}
          <header className="relative pt-[calc(var(--header-h)+3rem)]">
            <div className="container-x">
              <nav aria-label="Breadcrumb" className="t-mono flex flex-wrap items-center gap-3 text-muted" data-reveal="fade">
                <Link href={homePath(locale)} className="link-u">
                  {dict.nav.home}
                </Link>
                <span aria-hidden="true">/</span>
                <Link href={sectionHref(locale, dict.ids.work, false)} className="link-u">
                  {cs.work}
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-accent" aria-current="page">
                  {p.shortName}
                </span>
              </nav>

              <MaskWords as="h1" id="case-title" text={p.name} className="t-display mt-12 max-w-[16ch] text-paper" />
              <p className="t-lead mt-10 max-w-[52ch] text-paper/75" data-reveal style={{ ["--d" as string]: 300 }}>
                {p.tagline}
              </p>

              {isConcept ? (
                <p
                  role="note"
                  className="mt-10 flex max-w-3xl gap-4 border border-accent/50 bg-deep-green/15 p-5 text-[0.95rem] leading-relaxed text-paper"
                  data-reveal
                >
                  <span className="t-mono shrink-0 text-accent">{dict.work.concept}</span>
                  {cs.conceptNotice}
                </p>
              ) : null}

              <dl className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4" data-reveal="fade">
                <div className="border-b border-line py-5 sm:pr-6 lg:border-b-0">
                  <dt className="t-mono text-muted">{cs.type}</dt>
                  <dd className="mt-2 text-paper">{p.type}</dd>
                </div>
                <div className="border-b border-line py-5 sm:border-l sm:pl-6 lg:border-b-0">
                  <dt className="t-mono text-muted">{cs.status}</dt>
                  <dd className="mt-2 flex items-center gap-2 text-paper">
                    <span aria-hidden="true" className={`inline-block h-2 w-2 ${isConcept ? "border border-muted" : "bg-accent"}`} />
                    {p.status.label}
                  </dd>
                </div>
                <div className="border-b border-line py-5 sm:pr-6 lg:border-b-0 lg:border-l lg:pl-6">
                  <dt className="t-mono text-muted">{cs.stack}</dt>
                  <dd className="mt-2 text-paper">{project.stack.slice(0, 3).join(", ")}…</dd>
                </div>
                <div className="py-5 sm:border-l sm:pl-6">
                  <dt className="t-mono text-muted">{cs.repository}</dt>
                  <dd className="mt-2">
                    {project.repo ? (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="link-u inline-flex items-center gap-2 text-paper">
                        {cs.viewRepo}
                        <ArrowUpRight />
                      </a>
                    ) : (
                      <span className="text-muted">{cs.noRepo}</span>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </header>

          <div className="container-x mt-10">
            <Block n="b01" title={s.context}>
              <p className="font-display text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.3] tracking-[-0.02em] text-paper">{p.context}</p>
            </Block>

            <Block n="b02" title={`${s.problem} / ${s.objective}`}>
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <p className="t-mono text-muted">{s.problem}</p>
                  <p className="t-body mt-4">{p.problem}</p>
                </div>
                <div className="md:border-l md:border-line md:pl-10">
                  <p className="t-mono text-accent">{s.objective}</p>
                  <p className="mt-4 max-w-[62ch] text-paper">{p.objective}</p>
                </div>
              </div>
            </Block>

            <Block n="b025" title={s.contribution}>
              <p className="font-display text-[clamp(1.2rem,1.8vw,1.55rem)] leading-[1.35] tracking-[-0.015em] text-paper">
                {p.contribution}
              </p>
            </Block>

            <Block n="b03" title={s.solution}>
              <p className="t-lead max-w-[60ch] text-paper/85">{p.solution}</p>
            </Block>
          </div>

          {/* Architecture — full-bleed composition */}
          <section aria-labelledby="arch-h" className="border-y border-line bg-graphite/40 py-16 lg:py-24">
            <div className="container-x">
              <div className="flex flex-wrap items-baseline justify-between gap-4" data-reveal="fade">
                <h2 id="arch-h" className="t-mono text-accent">
                  {s.architecture}
                </h2>
              </div>
              <figure className="mt-10">
                <div className="-mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)] md:mx-0 md:px-0" tabIndex={0} aria-label={s.architecture}>
                  <div className="min-w-[760px] border border-line bg-obsidian p-5 md:min-w-0 md:p-10" data-reveal="fade">
                    <Diagram
                      data={project.architecture}
                      locale={locale}
                      title={`${p.name} — ${s.architecture}`}
                      description={p.architectureCaption}
                      planned={isConcept}
                      className="block h-auto w-full"
                      idPrefix="case-arch"
                    />
                  </div>
                </div>
                <figcaption className="mt-5 max-w-[70ch] text-[0.95rem] leading-relaxed text-muted">{p.architectureCaption}</figcaption>
              </figure>

              <div className="mt-20 flex flex-wrap items-baseline justify-between gap-4" data-reveal="fade">
                <h2 className="t-mono text-accent">{p.flowTitle}</h2>
              </div>
              <figure className="mt-10">
                <div className="-mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)] md:mx-0 md:px-0" tabIndex={0} aria-label={p.flowTitle}>
                  <div className="min-w-[760px] border border-line bg-obsidian p-5 md:min-w-0 md:p-10" data-reveal="fade">
                    <Diagram
                      data={project.flow}
                      locale={locale}
                      title={p.flowTitle}
                      description={p.flowCaption}
                      planned={isConcept}
                      packets={!isConcept}
                      className="block h-auto w-full"
                      idPrefix="case-flow"
                    />
                  </div>
                </div>
                <figcaption className="mt-5 max-w-[70ch] text-[0.95rem] leading-relaxed text-muted">{p.flowCaption}</figcaption>
              </figure>
            </div>
          </section>

          <div className="container-x">
            <Block n="b06" title={isConcept ? cs.plannedDecisions : s.decisions}>
              <ol className="grid gap-px border border-line bg-line md:grid-cols-2">
                {p.decisions.map((d) => (
                  <li key={d.title} className="bg-obsidian p-6 lg:p-8">
                    <h3 className="font-display text-[1.3rem] leading-snug tracking-[-0.015em] text-paper">{d.title}</h3>
                    <p className="mt-3 text-[0.97rem] leading-relaxed text-paper/72">{d.body}</p>
                  </li>
                ))}
              </ol>
            </Block>

            <Block n="b065" title={isConcept ? `${s.security} (${cs.planned})` : s.security}>
              <Bullets items={p.security} />
            </Block>

            <Block n="b066" title={isConcept ? `${s.delivery} (${cs.planned})` : s.delivery}>
              <Bullets items={p.delivery} />
            </Block>

            <Block n="b07" title={isConcept ? cs.plannedImplementation : s.implementation}>
              <ul className="border-t border-line">
                {p.implementation.map((item, i) => (
                  <li key={i} className="border-b border-line py-4 text-paper/85">
                    {item}
                  </li>
                ))}
              </ul>
            </Block>

            <Block n="b08" title={isConcept ? cs.candidateStack : s.technologies}>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <li key={t} className="chip text-paper">
                    {t}
                  </li>
                ))}
              </ul>
            </Block>

            <Block n="b09" title={p.results.length ? `${s.status} / ${s.results}` : s.status}>
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <p className="flex items-center gap-3 font-display text-[1.6rem] tracking-[-0.02em] text-paper">
                    <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 ${isConcept ? "border border-muted" : "bg-accent"}`} />
                    {p.status.label}
                  </p>
                  <p className="t-body mt-4">{p.status.detail}</p>
                </div>
                {p.results.length ? (
                  <div className="md:border-l md:border-line md:pl-10">
                    <p className="t-mono text-muted">{s.results}</p>
                    <ul className="mt-4 flex flex-col gap-3">
                      {p.results.map((r) => (
                        <li key={r} className="flex gap-3 text-paper/85">
                          <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </Block>

            <Block n="b10" title={s.limitations}>
              <Bullets items={p.limitations} />
            </Block>
          </div>

          {/* Next case */}
          <nav aria-label={cs.next} className="border-t border-line">
            <Link
              href={projectPath(locale, next)}
              className="group container-x grid-12 items-end gap-y-6 py-16 lg:py-24"
            >
              <span className="t-mono col-span-12 text-muted lg:col-span-3">{cs.next}</span>
              <span className="col-span-12 font-display text-[clamp(2rem,4.6vw,4.25rem)] leading-[1] tracking-[-0.04em] text-paper/80 transition-colors group-hover:text-paper lg:col-span-8">
                {next.content.name}
              </span>
              <span className="col-span-12 flex text-accent lg:col-span-1 lg:justify-end">
                <ArrowRight className="h-5 w-8 transition-transform duration-500 group-hover:translate-x-2" />
              </span>
            </Link>
          </nav>

          <div className="container-x pb-16">
            <Link href={sectionHref(locale, dict.ids.work, false)} className="btn">
              <ArrowRight className="rotate-180" />
              {cs.back}
            </Link>
          </div>
        </article>
      </main>
      <Footer dict={dict} />
    </>
  );
}
