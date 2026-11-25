import { existsSync } from "node:fs";
import { join } from "node:path";
import type { CompanyId } from "@/content/types";
import { site } from "@/content";

/**
 * Official logos are picked up at build time from public/logos/<id>.svg|png|webp.
 * If no file exists, the company name is set as an editorial wordmark instead.
 */
export function companyLogo(id: CompanyId): string | null {
  for (const ext of ["svg", "png", "webp"]) {
    if (existsSync(join(process.cwd(), "public", "logos", `${id}.${ext}`))) {
      return `${site.basePath}/logos/${id}.${ext}`;
    }
  }
  return null;
}
