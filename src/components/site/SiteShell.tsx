import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  Inbox,
  Bot,
  UserRoundCheck,
  KanbanSquare,
  Repeat2,
  Megaphone,
  BookOpen,
  BarChart3,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Features", to: "/", hash: "features" },
  { label: "How It Works", to: "/", hash: "how-it-works" },
  { label: "Security", to: "/", hash: "security" },
  { label: "Pricing", to: "/pricing", hash: undefined },
  { label: "Docs", to: "/docs", hash: undefined },
] as const;

const capabilities = [
  { label: "Shared WhatsApp Inbox", Icon: Inbox },
  { label: "AI Agent", Icon: Bot },
  { label: "Human Takeover", Icon: UserRoundCheck },
  { label: "Sales Pipeline", Icon: KanbanSquare },
  { label: "Follow-ups", Icon: Repeat2 },
  { label: "Campaigns", Icon: Megaphone },
  { label: "Knowledge Base", Icon: BookOpen },
  { label: "Analytics", Icon: BarChart3 },
];

export function Wordmark({ tone = "light" }: { tone?: "light" | "ink" }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-sm font-bold">
        C
      </span>
      <span
        className={
          tone === "ink"
            ? "font-display text-lg font-semibold tracking-tight text-ink"
            : "font-display text-lg font-semibold tracking-tight text-foreground"
        }
      >
        Convoza
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3.5 sm:px-6">
          <div className="flex min-w-0 items-center gap-8">
            <Wordmark />
            <nav className="hidden items-center gap-6 lg:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/login"
              className="hidden rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-secondary sm:inline-flex"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Get Early Access
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="ml-1 rounded-lg border border-border p-2 text-foreground lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border px-4 py-3 lg:hidden">
            <ul className="grid gap-1">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    hash={l.hash}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <div className="border-b border-border bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] backdrop-blur-md">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex w-max items-center gap-2 py-2">
            {capabilities.map(({ label, Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-border/70 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The WhatsApp cockpit for sales and support teams: shared inbox, AI agent, pipeline
              and campaigns in one workspace.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {["X", "in", "GH", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-8 w-8 place-items-center rounded-lg border border-border text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Product"
            items={[
              { label: "Features", to: "/", hash: "features" },
              { label: "How It Works", to: "/", hash: "how-it-works" },
              { label: "Security", to: "/", hash: "security" },
              { label: "Pricing", to: "/pricing" },
            ]}
          />
          <FooterCol
            title="Resources"
            items={[
              { label: "Docs", to: "/docs" },
              { label: "FAQ", to: "/", hash: "faq" },
              { label: "Login", to: "/login" },
              { label: "Sign up", to: "/signup" },
            ]}
          />
          <FooterCol
            title="Legal"
            items={[
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Terms of Service", to: "/terms-of-service" },
              { label: "Data Deletion Policy", to: "/data-deletion" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Convoza. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="status-dot" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string; hash?: string }[];
}) {
  return (
    <div className="min-w-0">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              to={i.to as any}
              hash={i.hash}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
