import { CountUp } from "./Reveal";

export function MiniInbox() {
  const rows = [
    { name: "Rohan M.", msg: "Is the bulk price still valid?", tag: "Neha", unread: 2 },
    { name: "Sara A.", msg: "Need the invoice again", tag: "Kabir", unread: 0 },
    { name: "Bilal K.", msg: "Can we ship to Lahore?", tag: "AI", unread: 1 },
  ];
  return (
    <div className="rounded-xl border border-border bg-surface-2/60 p-3">
      <ul className="grid gap-2">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center gap-2.5 rounded-lg bg-background/60 p-2.5">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-[10px] font-semibold text-primary">
              {r.name.slice(0, 2)}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-medium text-foreground">{r.name}</span>
              <span className="block truncate text-[11px] text-muted-foreground">{r.msg}</span>
            </span>
            <span className="shrink-0 rounded-md border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">
              {r.tag}
            </span>
            {r.unread > 0 && (
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {r.unread}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MiniAIChat() {
  return (
    <div className="grid gap-2 rounded-xl border border-border bg-surface-2/60 p-3">
      <p className="max-w-[80%] rounded-2xl rounded-bl-sm bg-background/70 px-3 py-2 text-[11px] text-muted-foreground">
        Do you deliver to Karachi on Sundays?
      </p>
      <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary/15 px-3 py-2 text-[11px] text-foreground">
        Yes — Sunday delivery runs 10am to 6pm, free above $40.
      </p>
      <p className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
        <span className="status-dot" />
        Answered in 0.9s from Knowledge Base
      </p>
    </div>
  );
}

export function MiniKanban() {
  const cols = [
    { name: "New", cards: 2, tone: "muted" },
    { name: "Qualified", cards: 3, tone: "accent" },
    { name: "Won", cards: 1, tone: "accent" },
  ];
  return (
    <div className="grid grid-cols-3 gap-2 rounded-xl border border-border bg-surface-2/60 p-3">
      {cols.map((c) => (
        <div key={c.name} className="min-w-0">
          <p className="mb-2 truncate text-[10px] text-muted-foreground">{c.name}</p>
          <div className="grid gap-1.5">
            {Array.from({ length: c.cards }).map((_, i) => (
              <div
                key={i}
                className={`h-6 rounded-md border ${
                  c.tone === "accent" ? "border-primary/40 bg-primary/10" : "border-border bg-background/60"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function MiniBroadcast() {
  return (
    <div className="rounded-xl border border-border bg-surface-2/60 p-3">
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-foreground">Eid Sale — Template</span>
        <span className="text-primary">Approved</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
        <div className="h-full w-[78%] rounded-full bg-primary transition-all duration-700" />
      </div>
      <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
        <span>
          <CountUp to={9420} /> delivered
        </span>
        <span>78% read</span>
      </div>
    </div>
  );
}

export function MiniFollowups() {
  const steps = ["Day 0 — Reply", "Day 2 — Nudge", "Day 5 — Offer"];
  return (
    <ul className="grid gap-2 rounded-xl border border-border bg-surface-2/60 p-3">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2.5">
          <span
            className={`h-2 w-2 shrink-0 rounded-full ${i === 0 ? "bg-primary" : "bg-border"}`}
          />
          <span className="h-6 flex-1 rounded-md border border-border bg-background/60 px-2 text-[10px] leading-6 text-muted-foreground">
            {s}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function MiniAnalytics() {
  const bars = [40, 62, 48, 78, 66, 91, 84];
  return (
    <div className="rounded-xl border border-border bg-surface-2/60 p-3">
      <div className="flex items-end justify-between gap-1.5" style={{ height: 64 }}>
        {bars.map((b, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-sm bg-primary/70 transition-all duration-500 hover:bg-primary"
            style={{ height: `${b}%` }}
          />
        ))}
      </div>
      <p className="mt-2 text-[10px] text-muted-foreground">
        Median first reply <span className="text-primary">
          <CountUp to={1.4} decimals={1} suffix="s" />
        </span>
      </p>
    </div>
  );
}

export function MiniKnowledge() {
  const files = ["pricing-2026.pdf", "shipping-faq.md", "convoza.app/docs"];
  return (
    <ul className="grid gap-2 rounded-xl border border-border bg-surface-2/60 p-3">
      {files.map((f) => (
        <li
          key={f}
          className="flex items-center justify-between gap-2 rounded-md border border-border bg-background/60 px-2.5 py-1.5 text-[10px] text-muted-foreground"
        >
          <span className="truncate">{f}</span>
          <span className="shrink-0 text-primary">Indexed</span>
        </li>
      ))}
    </ul>
  );
}
