import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { AuthShell, Field, SubmitButton } from "@/components/site/AuthShell";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Get early access — Convoza WhatsApp AI CRM" },
      {
        name: "description",
        content: "Create your Convoza workspace: shared WhatsApp inbox, AI agent, sales pipeline and campaigns in one place.",
      },
      { property: "og:title", content: "Get early access — Convoza" },
      { property: "og:description", content: "Create your Convoza WhatsApp AI CRM workspace in minutes." },
    ],
  }),
  component: SignupPage,
});

const steps = ["Account", "Workspace", "Complete"];

function SignupPage() {
  const [step, setStep] = useState(0);

  return (
    <AuthShell
      title="Create your workspace"
      subtitle="Three short steps and your WhatsApp cockpit is ready."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <ol className="mb-7 grid grid-cols-3 gap-2">
        {steps.map((s, i) => (
          <li key={s} className="min-w-0">
            <div
              className="h-1.5 rounded-full transition-colors duration-300"
              style={{ backgroundColor: i <= step ? "var(--emerald-accent)" : "var(--border)" }}
            />
            <p
              className={`mt-2 truncate text-xs ${i <= step ? "text-foreground" : "text-muted-foreground"}`}
            >
              {i + 1}. {s}
            </p>
          </li>
        ))}
      </ol>

      <form
        className="grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setStep((v) => Math.min(v + 1, 2));
        }}
      >
        {step === 0 && (
          <>
            <Field id="name" label="Full name" placeholder="Ayesha Khan" />
            <Field id="email" label="Work email" type="email" placeholder="you@company.com" />
            <Field id="password" label="Password" type="password" placeholder="••••••••" />
            <SubmitButton>Continue to workspace</SubmitButton>
          </>
        )}

        {step === 1 && (
          <>
            <Field id="workspace" label="Workspace name" placeholder="Convoza HQ" />
            <Field id="phone" label="WhatsApp business number" placeholder="+92 300 0000000" />
            <Field id="team" label="Team size" placeholder="1-5 agents" />
            <SubmitButton>Finish setup</SubmitButton>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to account details
            </button>
          </>
        )}

        {step === 2 && (
          <div className="grid gap-4 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/15">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-foreground">You're on the list</p>
              <p className="mt-1 text-sm text-muted-foreground">
                We'll email your workspace invite and WhatsApp API onboarding steps shortly.
              </p>
            </div>
            <Link
              to="/"
              className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Explore the product
            </Link>
          </div>
        )}
      </form>
    </AuthShell>
  );
}
