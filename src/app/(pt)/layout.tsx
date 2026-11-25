import type { ReactNode } from "react";
import type { Viewport } from "next";
import { getDictionary } from "@/content";
import { RootDocument } from "@/components/layout/RootDocument";

export const viewport: Viewport = { themeColor: "#111513", colorScheme: "dark" };

export default function PortugueseRootLayout({ children }: { children: ReactNode }) {
  return <RootDocument dict={getDictionary("pt-BR")}>{children}</RootDocument>;
}
