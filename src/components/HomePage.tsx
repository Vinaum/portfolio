import type { Locale } from "@/content/types";
import { getDictionary, homePath, otherLocale } from "@/content";
import { personJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalePreference } from "@/components/layout/LocalePreference";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Companies } from "@/components/sections/Companies";
import { TeamBuilding } from "@/components/sections/TeamBuilding";
import { Clients } from "@/components/sections/Clients";
import { Work } from "@/components/sections/Work";
import { Technology } from "@/components/sections/Technology";
import { Journey } from "@/components/sections/Journey";
import { Principles } from "@/components/sections/Principles";
import { Contact } from "@/components/sections/Contact";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const alt = homePath(otherLocale(locale));
  // Section order. Empty sections are skipped.
  const sections = [
    { key: "about", C: About },
    { key: "companies", C: Companies },
    { key: "capabilities", C: Capabilities },
    { key: "teams", C: TeamBuilding },
    { key: "work", C: Work },
    { key: "clients", C: Clients, show: dict.clients.items.length > 0 },
    { key: "technology", C: Technology },
    { key: "experience", C: Journey },
    { key: "principles", C: Principles },
    { key: "contact", C: Contact },
  ].filter((s) => s.show !== false);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(dict)) }} />
      {locale === "pt-BR" ? <LocalePreference englishHref={homePath("en")} /> : null}
      <Header dict={dict} locale={locale} alternateHref={alt} onHome />
      <main id="main">
        <Hero dict={dict} />
        {sections.map(({ key, C }) => (
          <C key={key} dict={dict} />
        ))}
      </main>
      <Footer dict={dict} />
    </>
  );
}
