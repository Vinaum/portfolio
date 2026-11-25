import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/primitives";

export function Principles({ dict }: { dict: Dictionary }) {
  const { principles: p, ids } = dict;
  return (
    <section id={ids.principles} aria-labelledby="principles-title" className="relative border-t border-line bg-graphite/40 py-28 lg:py-40">
      <div className="container-x">
        <SectionHeader label={p.label} title={p.title} titleId="principles-title" />
        <ol className="mt-20 border-t border-line lg:mt-28">
          {p.items.map((item) => (
            <li key={item.title} className="principle grid-12 gap-y-6 border-b border-line py-12 lg:py-16" data-reveal>
              <h3 className="principle-title col-span-12 font-display text-[clamp(2.25rem,5.2vw,5rem)] font-medium uppercase leading-[0.92] tracking-[-0.045em] lg:col-span-8">
                {item.title}
              </h3>
              <p className="t-body col-span-12 self-end md:col-span-8 lg:col-span-4">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
