import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, Field, SubmitButton } from "@/components/site/AuthShell";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Convoza WhatsApp AI CRM" },
      {
        name: "description",
        content: "Sign in to your Convoza workspace to manage your shared WhatsApp inbox, AI agent and sales pipeline.",
      },
      { property: "og:title", content: "Login — Convoza" },
      { property: "og:description", content: "Sign in to your Convoza WhatsApp AI CRM workspace." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your Convoza workspace."
      footer={
        <>
          New to Convoza?{" "}
          <Link to="/signup" className="font-medium text-primary hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <Field id="email" label="Email" type="email" placeholder="you@company.com" />
        <Field
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          hint={
            <Link to="/forgot-password" className="text-xs text-primary hover:underline">
              Forgot password?
            </Link>
          }
        />
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input type="checkbox" className="h-4 w-4 rounded border-input accent-[var(--emerald-accent)]" />
          Keep me signed in for 30 days
        </label>
        <SubmitButton>Sign in</SubmitButton>
      </form>
    </AuthShell>
  );
}
