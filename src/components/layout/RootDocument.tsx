import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource-variable/inter/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@/styles/globals.css";

import type { ReactNode } from "react";
import type { Dictionary } from "@/content/types";
import { RevealObserver } from "./RevealObserver";

/** Shared <html>/<body> shell for both language root layouts. */
export function RootDocument({ dict, children }: { dict: Dictionary; children: ReactNode }) {
  return (
    <html lang={dict.htmlLang} suppressHydrationWarning>
      {/* App Router root layouts may render <head> directly; this rule targets the Pages Router. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* Enables reveal styles only when JS runs; content is fully visible otherwise. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="bg-obsidian text-paper">
        <a href="#main" className="skip-link">
          {dict.nav.skip}
        </a>
        <div className="guides" aria-hidden="true">
          <div>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="noise" aria-hidden="true" />
        <div id="top" className="absolute top-0 h-px w-px" aria-hidden="true" />
        <div className="relative z-[2]">{children}</div>
        <RevealObserver />
      </body>
    </html>
  );
}
