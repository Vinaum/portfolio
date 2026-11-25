import type { Capability, Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";
import { CapabilityFigure } from "@/components/diagrams/CapabilityFigure";

export const capabilityAnchor = (id: Capability["id"]) => `cap-${id}`;

function Items({ items, dict }: { items: Capability["items"]; dict: Dictionary }) {
  const c = dict.capabilities;
  return (
    <ul className="mt-7">
      {items.map((it) => (
        <li key={it.text} className="flex items-baseline gap-3 py-1.5 text-[0.97rem] leading-snug text-paper/85">
          <span
            aria-hidden="true"
            className={`mt-[0.45rem] inline-block h-2 w-2 shrink-0 ${it.status === "study" ? "border border-muted" : "bg-accent"}`}
          />
          <span className={it.status === "study" ? "text-paper/60" : undefined}>
            {it.text}
            {it.status ? <span className="sr-only"> — {it.status === "study" ? c.study : c.applied}</span> : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Evidence({ item }: { item: Capability }) {
  return (
    <div className="mt-8 border-l border-accent pl-4">
      <p className="t-mono-sm text-accent">{item.evidenceLabel}</p>
      <p className="mt-2 text-[0.93rem] leading-relaxed text-paper/75">{item.evidence}</p>
    </div>
  );
}

/** Four pillars: three technical, one human — People & Team Building gets its own treatment. */
export function Capabilities({ dict }: { dict: Dictionary }) {
  const { capabilities: c, ids } = dict;
  const tech = c.items.filter((i) => i.id !== "people");
  const people = c.items.find((i) => i.id === "people");

  return (
    <section id={ids.capabilities} aria-labelledby="capabilities-title" className="relative border-t border-line pt-32 lg:pt-44">
      <div className="container-x">
        <SectionHeader label={c.label} title={c.title} titleId="capabilities-title">
          <p className="t-lead col-span-12 text-paper/70 lg:col-span-6" data-reveal>
            {c.intro}
          </p>
        </SectionHeader>

        <div className="mt-20 lg:mt-28">
          {tech.map((item) => (
            <article
              key={item.id}
              id={capabilityAnchor(item.id)}
              aria-labelledby={`${capabilityAnchor(item.id)}-h`}
              className="grid-12 scroll-mt-28 gap-y-10 border-t border-line/70 py-16 lg:py-20"
              data-reveal
            >
              <div className="col-span-12 lg:col-span-6">
                <h3 id={`${capabilityAnchor(item.id)}-h`} className="t-h3 text-paper">
                  {item.title}
                </h3>
                <p className="t-body mt-4">{item.summary}</p>
                <Items items={item.items} dict={dict} />
                {item.id === "cloud" ? (
                  <p className="t-mono-sm mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 normal-case tracking-[0.03em] text-muted">
                    <span className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true" />
                      {c.applied}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 border border-muted" aria-hidden="true" />
                      {c.study} — {c.studyNote}
                    </span>
                  </p>
                ) : null}
                <Evidence item={item} />
              </div>
              <figure className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-center">
                <CapabilityFigure id={item.id} title={item.title} />
              </figure>
            </article>
          ))}
        </div>
      </div>

      {/* People & Team Building — the differentiator, given equal weight and its own surface */}
      {people ? (
        <article
          id={capabilityAnchor("people")}
          aria-labelledby={`${capabilityAnchor("people")}-h`}
          className="scroll-mt-28 bg-deep-graphite/70 py-20 lg:py-28"
        >
          <div className="container-x">
            <div className="grid-12 gap-y-12" data-reveal>
              <div className="col-span-12 lg:col-span-6">
                <h3 id={`${capabilityAnchor("people")}-h`} className="t-h3 text-paper">
                  {people.title}
                </h3>
                <p className="t-body mt-4">{people.summary}</p>
                <Items items={people.items} dict={dict} />
                <Evidence item={people} />
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <p className="t-mono-sm text-accent">{c.people.kicker}</p>
                <blockquote className="mt-5">
                  <p className="font-display text-[clamp(1.5rem,2.3vw,2rem)] leading-[1.18] tracking-[-0.025em] text-paper">
                    {c.people.message}
                  </p>
                </blockquote>
                <p className="mt-6 text-[0.97rem] leading-relaxed text-paper/70">{c.people.perspective}</p>
                <figure className="mt-10">
                  <CapabilityFigure id="people" title={people.title} />
                </figure>
              </div>
            </div>
          </div>
        </article>
      ) : null}
    </section>
  );
}
