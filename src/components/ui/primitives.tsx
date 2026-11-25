import { Fragment, type ElementType, type ReactNode } from "react";

/** Mask-based typographic reveal. Text stays as plain, crawlable words. */
export function MaskWords({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  id,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const words = text.split(" ");
  return (
    <Tag id={id} className={`mask-words ${className}`} data-reveal="mask" style={{ ["--d" as string]: delay }}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="w" style={{ ["--i" as string]: i }}>
            <span>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={`arrow ${className}`} width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
      <path d="M0 5H16M12 1l4 4-4 4" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg className={`arrow ${className}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg className={`arrow ${className}`} width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden="true">
      <path d="M5 0V16M1 12l4 4 4-4" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

/**
 * Section opener: a descriptive H2 (the section name — what search engines and screen readers
 * use), a drawn rule, then the editorial line as large display text.
 */
export function SectionHeader({
  label,
  title,
  titleId,
  children,
}: {
  label: string;
  title: string;
  titleId: string;
  children?: ReactNode;
}) {
  return (
    <header className="grid-12 gap-y-10">
      <div className="col-span-12" data-reveal="fade">
        <h2 id={titleId} className="t-mono text-accent">
          {label}
        </h2>
        <div className="mt-5 h-px w-full bg-line rule-draw" aria-hidden="true" />
      </div>
      <MaskWords as="p" text={title} className="t-h2 col-span-12 lg:col-span-9" />
      {children ? <div className="col-span-12 grid-12">{children}</div> : null}
    </header>
  );
}
