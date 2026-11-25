import Link from "next/link";
import { site } from "@/content";

/**
 * GitHub Pages cannot send HTTP 301s, so old project URLs render this page:
 * an immediate meta refresh, a canonical pointing at the new URL (set in metadata),
 * noindex, and a plain link as a fallback.
 */
export function LegacyRedirect({ target, notice, name }: { target: string; notice: string; name: string }) {
  const href = `${site.basePath}${target}`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <main id="main" className="container-x flex min-h-[60vh] flex-col justify-center gap-4 py-24">
        <p className="t-mono text-muted">{notice}</p>
        <Link href={target} className="link-u w-fit font-display text-[1.75rem] text-paper">
          {name}
        </Link>
      </main>
    </>
  );
}
