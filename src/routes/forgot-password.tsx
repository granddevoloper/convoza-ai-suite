import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MailCheck } from "lucide-react";
import { AuthShell, Field, SubmitButton } from "@/components/site/AuthShell";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset your password — Convoza" },
      {
        name: "description",
        content: "Request a secure password reset link for your Convoza WhatsApp AI CRM workspace.",
      },
      { property: "og:title", content: "Reset your password — Convoza" },
      { property: "og:description", content: "Request a secure password reset link for Convoza." },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <AuthShell
      title="Forgot your password?"
      subtitle="Enter your work email and we'll send reset instructions."
      footer={
        <>
          Remembered it?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Back to login
          </Link>
        </>
      }
    >
      <form
        className="grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <Field
          id="email"
          label="Work email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={setEmail}
        />
        <SubmitButton>Send reset link</SubmitButton>
      </form>

      {sent && (
        <div className="reveal reveal-in mt-5 flex items-start gap-3 rounded-xl border border-primary/40 bg-primary/10 p-4">
          <MailCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground">Check your inbox for reset instructions</p>
            <p className="mt-1 text-xs text-muted-foreground">
              We sent a secure link{email ? ` to ${email}` : ""}. It expires in 30 minutes.
            </p>
          </div>
        </div>
      )}
    </AuthShell>
  );
}
