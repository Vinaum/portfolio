import type { Dictionary } from "@/content/types";
import { getProjects } from "@/content";
import { SectionHeader } from "@/components/ui/primitives";
import { ProjectPlate } from "@/components/projects/ProjectPlate";

export function Work({ dict }: { dict: Dictionary }) {
  const { work, ids } = dict;
  const projects = getProjects(dict.locale);
  return (
    <section id={ids.work} aria-labelledby="work-title" className="relative border-t border-line py-28 lg:py-40">
      <div className="container-x">
        <SectionHeader index="05" label={work.label} code={work.code} title={work.title} titleId="work-title">
          <p className="t-lead col-span-12 text-paper/70 lg:col-span-6" data-reveal>
            {work.intro}
          </p>
        </SectionHeader>
        <div className="mt-20 border-t border-line lg:mt-28">
          {projects.map((p, i) => (
            <ProjectPlate key={p.id} project={p} index={i} dict={dict} locale={dict.locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
