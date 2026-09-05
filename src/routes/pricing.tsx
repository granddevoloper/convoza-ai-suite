import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteShell";
import { Reveal, CountUp } from "@/components/site/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Convoza WhatsApp AI CRM" },
      {
        name: "description",
        content: "Transparent Convoza subscriptions with 0% markup on WhatsApp conversation costs. Estimate your monthly Meta billing before you commit.",
      },
      { property: "og:title", content: "Pricing — Convoza" },
      {
        property: "og:description",
        content: "Transparent subscriptions and 0% markup on WhatsApp conversation costs.",
      },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter",
    price: 39,
    blurb: "For a small team proving the channel.",
    features: ["3 agent seats", "Shared WhatsApp inbox", "AI agent, 1 knowledge base", "Basic analytics"],
    featured: false,
  },
  {
    name: "Growth",
    price: 129,
    blurb: "For sales teams running WhatsApp daily.",
    features: [
      "10 agent seats",
      "Visual sales pipeline",
      "Automated follow-ups & drips",
      "Template broadcast campaigns",
      "Full telemetry dashboard",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: 349,
    blurb: "For multi-team operations and BPOs.",
    features: [
      "Unlimited seats",
      "Multi-number routing",
      "Role-based access control",
      "Priority support & SLA",
      "Audit log export",
    ],
    featured: false,
  },
];

const rates: Record<string, { label: string; marketing: number; utility: number; service: number }> = {
  in: { label: "India", marketing: 0.0099, utility: 0.0014, service: 0 },
  pk: { label: "Pakistan", marketing: 0.0473, utility: 0.0166, service: 0 },
  ae: { label: "United Arab Emirates", marketing: 0.0384, utility: 0.0158, service: 0 },
  uk: { label: "United Kingdom", marketing: 0.0705, utility: 0.0358, service: 0 },
  us: { label: "United States", marketing: 0.025, utility: 0.014, service: 0 },
};

function PricingPage() {
  const [country, setCountry] = useState("pk");
  const [marketing, setMarketing] = useState(3000);
  const [utility, setUtility] = useState(1500);
  const [service, setService] = useState(4000);

  const r = rates[country]!;
  const metaCost = marketing * r.marketing + utility * r.utility + service * r.service;

  return (
    <SiteLayout>
      <section className="relative border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-40" />
        <div className="pointer-events-none absolute inset-0 emerald-halo" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">Simple subscriptions. 0% added markup.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            You pay Convoza for the software and Meta for conversations, at cost. Nothing hidden in
            between.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`glass-card h-full p-6 ${p.featured ? "border-primary/50 shadow-glow" : ""}`}
              >
                {p.featured && (
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                    <span className="status-dot" />
                    Most chosen
                  </span>
                )}
                <h2 className="text-xl font-semibold">{p.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                <p className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-semibold text-foreground">${p.price}</span>
                  <span className="pb-1 text-sm text-muted-foreground">/ month</span>
                </p>
                <Link
                  to="/signup"
                  className={`mt-6 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    p.featured
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground hover:border-primary/60"
                  }`}
                >
                  Get Early Access
                </Link>
                <ul className="mt-6 grid gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="glass-card p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div className="min-w-0">
                <h2 className="text-2xl font-semibold">WhatsApp conversation cost estimator</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Meta charges per conversation category and country. Move the sliders to see your
                  monthly messaging bill, billed to you at exactly what Meta charges us.
                </p>

                <div className="mt-6 grid gap-5">
                  <div className="grid gap-2">
                    <label htmlFor="country" className="text-sm font-medium text-foreground">
                      Country
                    </label>
                    <select
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="rounded-lg border border-input bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary/70"
                    >
                      {Object.entries(rates).map(([k, v]) => (
                        <option key={k} value={k}>
                          {v.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Slider label="Marketing conversations" value={marketing} max={20000} onChange={setMarketing} />
                  <Slider label="Utility conversations" value={utility} max={20000} onChange={setUtility} />
                  <Slider label="Service conversations" value={service} max={20000} onChange={setService} />
                </div>
              </div>

              <div className="min-w-0 rounded-2xl border border-border bg-surface-2/60 p-6">
                <p className="text-sm text-muted-foreground">Estimated monthly Meta cost</p>
                <p className="mt-2 font-display text-5xl font-semibold text-primary">
                  $<CountUp to={metaCost} decimals={2} duration={500} key={metaCost.toFixed(2)} />
                </p>
                <ul className="mt-6 grid gap-3 text-sm">
                  <Row label="Convoza markup" value="0%" accent />
                  <Row label="Marketing" value={`$${(marketing * r.marketing).toFixed(2)}`} />
                  <Row label="Utility" value={`$${(utility * r.utility).toFixed(2)}`} />
                  <Row
                    label="Service"
                    value={r.service === 0 ? "Free" : `$${(service * r.service).toFixed(2)}`}
                  />
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">
                  Indicative rates for planning only. Meta publishes final per-country pricing and
                  updates it periodically.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function Slider({
  label,
  value,
  max,
  onChange,
}: {
  label: string;
  value: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm tabular-nums text-primary">{value.toLocaleString()}</span>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        step={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-[var(--emerald-accent)]"
      />
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-border pb-2.5 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className={accent ? "font-semibold text-primary" : "text-foreground"}>{value}</span>
    </li>
  );
}
