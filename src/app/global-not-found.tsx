import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource-variable/inter/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `404 — ${site.name}`,
  robots: { index: false },
};

/** Bilingual 404 — rendered outside both language root layouts. */
export default function GlobalNotFound() {
  const base = site.basePath;
  return (
    <html lang="pt-BR">
      <body className="bg-obsidian text-paper">
        <main className="container-x flex min-h-[100dvh] flex-col justify-center py-20">
          <p className="t-mono text-accent">ERR 404 · ROUTE NOT FOUND</p>
          <h1 className="t-display mt-8 max-w-[14ch]">Esta conexão não leva a lugar nenhum.</h1>
          <p className="t-lead mt-6 text-paper/70" lang="en">
            This connection leads nowhere.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <a href={`${base}/`} className="btn btn-primary">
              Voltar ao início
            </a>
            <a href={`${base}/en/`} className="btn" lang="en">
              Back to home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
