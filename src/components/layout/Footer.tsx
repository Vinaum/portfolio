import type { Dictionary } from "@/content/types";
import { site } from "@/content";
import { ArrowUpRight } from "@/components/ui/primitives";

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-x grid-12 gap-y-6 py-10">
        <p className="t-mono col-span-12 text-muted md:col-span-5">
          © {year} {site.name}. {dict.footer.rights}
        </p>
        <p className="t-mono col-span-12 text-muted md:col-span-5">{dict.footer.built}</p>
        <div className="col-span-12 md:col-span-2 md:justify-self-end">
          <a href="#top" className="t-mono link-u inline-flex items-center gap-2 text-muted">
            {dict.footer.top}
            <ArrowUpRight className="-rotate-45" />
          </a>
        </div>
      </div>
    </footer>
  );
}
