import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Plug, Bot, Send, ShieldCheck, LineChart } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation — Convoza WhatsApp AI CRM" },
      {
        name: "description",
        content: "Guides for connecting the WhatsApp Business API, training the Convoza AI agent, building pipelines and sending compliant campaigns.",
      },
      { property: "og:title", content: "Documentation — Convoza" },
      { property: "og:description", content: "Setup guides for WhatsApp API, AI agent training, pipelines and campaigns." },
    ],
  }),
  component: DocsPage,
});

const groups = [
  {
    Icon: Plug,
    title: "Connect WhatsApp",
    items: ["Meta Business verification", "Embedded signup flow", "Number migration", "Webhook health checks"],
  },
  {
    Icon: Bot,
    title: "Train the AI agent",
    items: ["Upload PDFs and URLs", "Tone and guardrails", "Handoff intent rules", "Fallback behaviour"],
  },
  {
    Icon: BookOpen,
    title: "Inbox and routing",
    items: ["Team assignment rules", "Ownership and SLAs", "Canned replies", "Internal notes"],
  },
  {
    Icon: Send,
    title: "Campaigns",
    items: ["Template submission", "Audience segments", "Throughput tiers", "Ban-risk safeguards"],
  },
  {
    Icon: LineChart,
    title: "Analytics",
    items: ["Response time metrics", "Conversion attribution", "Agent leaderboards", "CSV export"],
  },
  {
    Icon: ShieldCheck,
    title: "Security",
    items: ["Workspace isolation", "Role-based access", "Audit logs", "Data retention controls"],
  },
];

function DocsPage() {
  return (
    <SiteLayout>
      <section className="relative border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">Documentation</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Everything needed to take a WhatsApp number from Meta verification to a fully automated
            sales desk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="glass-card h-full p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15">
                  <g.Icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="mt-4 text-lg font-semibold">{g.title}</h2>
                <ul className="mt-4 grid gap-2.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-muted-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="glass-card flex flex-col gap-4 p-8 text-center">
            <h2 className="text-2xl font-semibold">Need a guided onboarding?</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Early access workspaces get a hands-on session covering number setup, knowledge base
              import and pipeline design.
            </p>
            <div>
              <Link
                to="/signup"
                className="inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
