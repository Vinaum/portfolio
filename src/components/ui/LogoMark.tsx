import type { Logo } from "@/lib/logos";

/**
 * Renders an official logo fitted to the dark palette, at a base height scaled per logo.
 * Falls back to nothing — callers decide the wordmark.
 */
export function LogoMark({
  logo,
  alt,
  height,
  align = "left",
  className = "",
}: {
  logo: Logo;
  alt: string;
  /** Base height in rem before the per-logo scale is applied. */
  height: number;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <span className={`company-logo-wrap inline-flex max-w-full ${className}`} data-treatment={logo.treatment}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, intrinsic logo files */}
      <img
        src={logo.src}
        alt={alt}
        loading="lazy"
        decoding="async"
        data-treatment={logo.treatment}
        className={`company-logo w-auto max-w-full object-contain ${align === "center" ? "object-center" : "object-left"}`}
        style={{ height: `${(height * logo.scale).toFixed(2)}rem` }}
      />
    </span>
  );
}
