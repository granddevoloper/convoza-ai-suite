import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Inbox,
  Bot,
  KanbanSquare,
  Megaphone,
  Repeat2,
  BarChart3,
  BookOpen,
  Users,
  UserX,
  CircleSlash,
  ShieldCheck,
  Lock,
  Activity,
  BadgeCheck,
  Plus,
  Minus,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteShell";
import { Reveal, CountUp } from "@/components/site/Reveal";
import {
  MiniInbox,
  MiniAIChat,
  MiniKanban,
  MiniBroadcast,
  MiniFollowups,
  MiniAnalytics,
  MiniKnowledge,
} from "@/components/site/MiniUI";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import flowPipeline from "@/assets/flow-pipeline.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Convoza — Run Sales & Support on WhatsApp with AI" },
      {
        name: "description",
        content:
          "Convoza unifies a shared WhatsApp inbox, autonomous AI agent, sales pipeline and broadcast campaigns in one cockpit. AI replies instantly, your team takes over when it matters.",
      },
      { property: "og:title", content: "Convoza — WhatsApp AI CRM for sales and support teams" },
      {
        property: "og:description",
        content:
          "Shared WhatsApp inbox, AI agent, pipeline and campaigns in one cockpit. Get early access to Convoza.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <SiteLayout>
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Security />
      <PricingTeaser />
      <Faq />
      <FinalCta />
    </SiteLayout>
  );
}

/* ---------------- 1. Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] emerald-halo" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
              <span className="status-dot" />
              Built on the Meta WhatsApp Cloud API
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-6xl">
              Run Your Entire Sales &amp; Support Operation on WhatsApp with AI
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              AI replies instantly. Your team steps in when it matters most. Unify inbox, pipeline, and
              automated broadcasts in one cockpit.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/signup"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Get Early Access
              </Link>
              <Link
                to="/"
                hash="how-it-works"
                className="rounded-lg border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-primary/60"
              >
                See How It Works
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320} className="mt-14">
          <div className="glass-card overflow-hidden p-2">
            <img
              src={heroDashboard}
              width={1600}
              height={1008}
              alt="Convoza dashboard showing WhatsApp analytics tiles and a shared team inbox"
              className="w-full rounded-xl"
            />
          </div>
        </Reveal>

        <Reveal delay={400}>
          <dl className="mt-10 grid gap-4 sm:grid-cols-4">
            {[
              { k: "Median AI first reply", v: 0.9, s: "s", d: 1 },
              { k: "Conversations handled", v: 1.2, s: "M", d: 1 },
              { k: "Deals logged automatically", v: 96, s: "%", d: 0 },
              { k: "API uptime", v: 99.99, s: "%", d: 2 },
            ].map((m) => (
              <div key={m.k} className="glass-card p-5">
                <dt className="text-xs text-muted-foreground">{m.k}</dt>
                <dd className="mt-2 font-display text-3xl font-semibold text-foreground">
                  <CountUp to={m.v} suffix={m.s} decimals={m.d} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 2. Problem ---------------- */

const chatMock = [
  { text: "Hi, do you still have the black one in stock?", bad: false, time: "09:14" },
  { text: "Sent the payment screenshot, please confirm", bad: true, time: "09:41" },
  { text: "Can someone from your team call me today?", bad: false, time: "11:02" },
  { text: "Hello? Still waiting on the quotation…", bad: true, time: "14:38" },
  { text: "Never mind, I ordered somewhere else.", bad: true, time: "18:20" },
];

function Problem() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">WhatsApp wasn't built to run a business.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every message lands in a personal chat — with no record, no owner, and no next step.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-xs font-semibold text-foreground">
                  WA
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">Personal business number</p>
                  <p className="truncate text-xs text-muted-foreground">1 phone, 1 person, 340 unread</p>
                </div>
              </div>
              <ul className="mt-4 grid gap-3">
                {chatMock.map((c, i) => (
                  <Reveal as="li" key={c.text} delay={120 + i * 70}>
                    <div
                      className={`rounded-lg border-l-2 bg-background/60 px-3.5 py-3 ${
                        c.bad ? "border-l-destructive opacity-60" : "border-l-primary"
                      }`}
                    >
                      <p className="text-sm text-foreground">{c.text}</p>
                      <p className="mt-1.5 flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span>{c.time}</span>
                        <span
                          className={c.bad ? "text-destructive" : "text-primary"}
                        >
                          {c.bad ? "Unanswered" : "Replied"}
                        </span>
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid content-start gap-4">
            {[
              {
                Icon: Users,
                title: "No shared inbox",
                body: "One phone holds every lead, so nobody else on the team can see or answer it.",
              },
              {
                Icon: UserX,
                title: "No conversation ownership",
                body: "Two people reply, or nobody does — there is no assignment and no accountability.",
              },
              {
                Icon: CircleSlash,
                title: "No follow-through",
                body: "Warm buyers slip past the scroll because there is no reminder and no pipeline stage.",
              },
            ].map((r, i) => (
              <Reveal key={r.title} delay={i * 110}>
                <div className="lift-card flex gap-4 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur-md">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15">
                    <r.Icon className="h-5 w-5 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{r.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{r.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={340}>
              <p className="rounded-2xl border border-border bg-surface-2/50 p-5 text-sm text-muted-foreground">
                Convoza turns that single crowded chat list into a routed, owned, and measurable sales
                desk.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. Feature bento ---------------- */

const features = [
  {
    Icon: Inbox,
    title: "Shared WhatsApp Inbox",
    desc: "Route one business number across your whole team with clear ownership.",
    span: "lg:col-span-2",
    ui: <MiniInbox />,
  },
  {
    Icon: Bot,
    title: "Autonomous AI Agent",
    desc: "Instant responses drafted from your own knowledge base, day or night.",
    span: "",
    ui: <MiniAIChat />,
  },
  {
    Icon: KanbanSquare,
    title: "Visual Sales Pipeline",
    desc: "Drag conversations across stages and watch deals move in real time.",
    span: "",
    ui: <MiniKanban />,
  },
  {
    Icon: Megaphone,
    title: "Template Broadcast Campaigns",
    desc: "Send approved bulk messages at scale without risking your number.",
    span: "lg:col-span-2",
    ui: <MiniBroadcast />,
  },
  {
    Icon: Repeat2,
    title: "Automated Follow-ups",
    desc: "Drip sequences and abandoned-chat triggers that recover quiet leads.",
    span: "",
    ui: <MiniFollowups />,
  },
  {
    Icon: BarChart3,
    title: "Real-Time Telemetry & Analytics",
    desc: "Track response speed, agent load and conversion in one live view.",
    span: "",
    ui: <MiniAnalytics />,
  },
  {
    Icon: BookOpen,
    title: "Custom Knowledge Base",
    desc: "Upload PDFs, URLs and docs so the AI answers exactly like your team.",
    span: "",
    ui: <MiniKnowledge />,
  },
];

function Features() {
  return (
    <section id="features" className="scroll-mt-36 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">One cockpit for the whole conversation</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Seven building blocks that turn WhatsApp into a system of record your revenue team can
            actually run on.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className={f.span}>
              <article className="glass-card flex h-full flex-col p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15">
                  <f.Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                <div className="mt-5">{f.ui}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. How it works (bone panel) ---------------- */

const steps = [
  {
    title: "Customer messages on WhatsApp",
    body: "A lead writes to your business number from an ad, a link or a QR code. The conversation lands in the shared inbox with full history attached.",
  },
  {
    title: "AI Agent evaluates and replies instantly",
    body: "The agent reads intent, pulls the answer from your knowledge base and responds in seconds, in the customer's language and your tone.",
  },
  {
    title: "Human handoff on high intent",
    body: "When the AI detects pricing, negotiation or a complaint, the thread is assigned to the right teammate with a summary of what happened.",
  },
  {
    title: "Logged into pipeline and analytics",
    body: "The deal is created, staged and timestamped automatically, so forecasting and response metrics stay accurate without manual entry.",
  },
];

function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="bone scroll-mt-36 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">How Convoza works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One pipeline from first message to closed deal, with a human in the loop exactly where it
            pays off.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-panel">
              <img
                src={flowPipeline}
                width={1408}
                height={912}
                loading="lazy"
                alt="Flow diagram of a WhatsApp message passing through the Convoza AI agent to the CRM pipeline and human team"
                className="w-full rounded-xl"
              />
              <svg viewBox="0 0 600 40" className="mt-3 w-full" aria-hidden="true">
                <line
                  x1="20"
                  y1="20"
                  x2="580"
                  y2="20"
                  stroke="var(--emerald-accent)"
                  strokeWidth="2"
                  className="flow-line"
                  strokeLinecap="round"
                />
                {[20, 200, 400, 580].map((x) => (
                  <circle key={x} cx={x} cy="20" r="5" fill="var(--emerald-accent)" />
                ))}
              </svg>
            </div>
          </Reveal>

          <ol className="grid gap-3">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    active === i
                      ? "border-primary/60 bg-card shadow-panel"
                      : "border-border bg-transparent hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-semibold transition-colors ${
                        active === i
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold">{s.title}</h3>
                      <p
                        className={`mt-1.5 overflow-hidden text-sm text-muted-foreground transition-all duration-300 ${
                          active === i ? "max-h-40 opacity-100" : "max-h-10 opacity-70"
                        }`}
                      >
                        {s.body}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. Security ---------------- */

const trust = [
  { Icon: Lock, title: "Per-tenant access control", body: "Roles, seat scopes and granular permissions on every inbox action." },
  { Icon: ShieldCheck, title: "Workspace data isolation", body: "Each workspace is logically separated with encrypted storage." },
  { Icon: Activity, title: "99.99% API uptime", body: "Redundant message workers with live delivery monitoring." },
  { Icon: BadgeCheck, title: "Meta Cloud API compliant", body: "Official platform access, approved templates, no grey routes." },
];

function Security() {
  return (
    <section id="security" className="scroll-mt-36 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Enterprise-Grade Data Isolation &amp; Control</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your customer conversations are business-critical records. Convoza treats them that way.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <div className="glass-card h-full p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15">
                  <t.Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-6">
          <div className="glass-card grid gap-6 p-6 sm:grid-cols-3">
            {[
              { k: "Encryption at rest", v: "AES-256" },
              { k: "Transport security", v: "TLS 1.2+" },
              { k: "Audit retention", v: "365 days" },
            ].map((s) => (
              <div key={s.k} className="min-w-0">
                <p className="text-xs text-muted-foreground">{s.k}</p>
                <p className="mt-1 font-display text-xl font-semibold text-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 6. Pricing teaser ---------------- */

function PricingTeaser() {
  const [volume, setVolume] = useState(5000);
  const rate = 0.0166;
  const meta = volume * rate;

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Simple, Transparent Subscriptions. 0% Added Markup.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              You pay Convoza for the platform, and Meta for conversations at exactly their published
              rate. We never take a cut of your messaging spend.
            </p>
            <ul className="mt-6 grid gap-3">
              {[
                "Direct Meta billing, passed through at cost",
                "Service conversations stay free inside the 24-hour window",
                "Seat-based plans with no per-message platform fee",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/pricing"
              className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              View Full Interactive Pricing Page
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-card p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-foreground">Monthly conversation volume</p>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="status-dot" />
                  Live estimate
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={40000}
                step={500}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                aria-label="Monthly conversation volume"
                className="mt-5 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-[var(--emerald-accent)]"
              />
              <p className="mt-2 text-sm tabular-nums text-primary">{volume.toLocaleString()} conversations</p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-surface-2/60 p-5">
                  <p className="text-xs text-muted-foreground">Meta conversation cost</p>
                  <p className="mt-2 font-display text-3xl font-semibold text-foreground">
                    $<CountUp key={meta.toFixed(2)} to={meta} decimals={2} duration={450} />
                  </p>
                </div>
                <div className="rounded-xl border border-primary/40 bg-primary/10 p-5">
                  <p className="text-xs text-muted-foreground">Convoza markup</p>
                  <p className="mt-2 font-display text-3xl font-semibold text-primary">$0.00</p>
                </div>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Based on indicative utility conversation rates. Final pricing follows Meta's published
                country table.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. FAQ (bone panel) ---------------- */

const faqs = [
  {
    q: "How do I set up the WhatsApp Business API?",
    a: "Convoza uses Meta's embedded signup. You verify your business, pick or migrate a number, and the connection is live in the same session — no BSP paperwork and no waiting on a reseller.",
  },
  {
    q: "When does the AI hand a conversation to a human?",
    a: "You define the triggers: pricing talk, negotiation, complaints, repeated confusion, or an explicit request for a person. The thread is assigned instantly with an AI-written summary so your agent has context.",
  },
  {
    q: "How is my number protected from bans?",
    a: "Campaigns only send pre-approved templates, throughput respects your Meta quality tier, opt-outs are enforced automatically, and quality-rating drops pause sending before Meta restricts the number.",
  },
  {
    q: "How is my data secured?",
    a: "Every workspace is isolated with per-tenant access control, encrypted in transit and at rest, with role-based permissions and audit logs. You can export or delete your data at any time.",
  },
  {
    q: "How do team seats work?",
    a: "Seats are named per teammate and can be reassigned when someone leaves. Each seat carries a role — admin, agent or viewer — that controls inbox visibility, pipeline edits and campaign sending.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bone scroll-mt-36 border-b border-border">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl">Questions teams ask before switching</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Straight answers on setup, automation limits and compliance.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={f.q} delay={i * 70}>
                <div
                  className={`rounded-2xl border bg-card transition-colors ${
                    isOpen ? "border-primary/50" : "border-border"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="min-w-0 text-base font-medium text-foreground">{f.q}</span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary">
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5 text-foreground" />
                      ) : (
                        <Plus className="h-3.5 w-3.5 text-foreground" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden px-5 transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="min-h-0 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- 8. Final CTA ---------------- */

function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 emerald-halo" />
      <div className="relative mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-5xl">
            Ready to Turn WhatsApp into Your #1 Sales Channel?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Connect your number, train the agent on your own docs, and let your team focus on the
            conversations worth closing.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <Link
            to="/signup"
            className="mt-9 inline-flex rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
          >
            Get Early Access Now
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
