import type { Locale } from "@/content/types";
import { getDictionary, homePath, otherLocale } from "@/content";
import { personJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalePreference } from "@/components/layout/LocalePreference";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Work } from "@/components/sections/Work";
import { Technology } from "@/components/sections/Technology";
import { Journey } from "@/components/sections/Journey";
import { Principles } from "@/components/sections/Principles";
import { Contact } from "@/components/sections/Contact";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const alt = homePath(otherLocale(locale));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(dict)) }} />
      {locale === "pt-BR" ? <LocalePreference englishHref={homePath("en")} /> : null}
      <Header dict={dict} locale={locale} alternateHref={alt} onHome />
      <main id="main">
        <Hero dict={dict} />
        <About dict={dict} />
        <Capabilities dict={dict} />
        <Work dict={dict} />
        <Technology dict={dict} />
        <Journey dict={dict} />
        <Principles dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
