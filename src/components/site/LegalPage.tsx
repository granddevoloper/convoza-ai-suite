import type { ReactNode } from "react";
import { SiteLayout } from "./SiteShell";

export type LegalSection = { heading: string; body: ReactNode };

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <SiteLayout>
      <div className="relative border-b border-border">
        <div className="pointer-events-none absolute inset-0 emerald-halo opacity-60" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="status-dot" />
            Last updated {updated}
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-3xl gap-10 px-4 py-14 sm:px-6">
        <nav className="glass-card p-5">
          <h2 className="text-sm font-semibold text-foreground">On this page</h2>
          <ol className="mt-3 grid gap-2">
            {sections.map((s, i) => (
              <li key={s.heading}>
                <a
                  href={`#section-${i + 1}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {sections.map((s, i) => (
          <section key={s.heading} id={`section-${i + 1}`} className="scroll-mt-32">
            <h2 className="text-xl font-semibold">
              <span className="mr-2 text-primary">{i + 1}.</span>
              {s.heading}
            </h2>
            <div className="mt-3 grid gap-3 text-[0.95rem] leading-7 text-muted-foreground">{s.body}</div>
          </section>
        ))}

        <p className="rounded-xl border border-border bg-surface/60 p-5 text-sm text-muted-foreground">
          Questions about this policy? Write to legal@convoza.app and our team will respond within two
          business days.
        </p>
      </div>
    </SiteLayout>
  );
}
