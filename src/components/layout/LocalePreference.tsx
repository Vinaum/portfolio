"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { storageKeys } from "@/content/shared/site";

/**
 * Only mounted on the default (PT-BR) home page. If the visitor explicitly chose
 * English before, send them to the English home. Never guesses from the browser.
 */
export function LocalePreference({ englishHref }: { englishHref: string }) {
  const router = useRouter();
  useEffect(() => {
    try {
      if (localStorage.getItem(storageKeys.locale) === "en" && !window.location.hash) {
        router.replace(englishHref);
      }
    } catch {
      /* storage unavailable */
    }
  }, [router, englishHref]);
  return null;
}
