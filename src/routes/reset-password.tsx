import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell, Field, SubmitButton } from "@/components/site/AuthShell";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set a new password — Convoza" },
      {
        name: "description",
        content: "Choose a new password for your Convoza workspace and get back to your WhatsApp inbox.",
      },
      { property: "og:title", content: "Set a new password — Convoza" },
      { property: "og:description", content: "Choose a new password for your Convoza workspace." },
    ],
  }),
  component: ResetPasswordPage,
});

function score(pw: string) {
  let s = 0;
  if (pw.length >= 8) s++;
  if (pw.length >= 12) s++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
  if (/\d/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return Math.min(s, 4);
}

const labels = ["Too short", "Weak", "Fair", "Strong", "Excellent"];

function ResetPasswordPage() {
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const s = score(pw);
  const mismatch = confirm.length > 0 && confirm !== pw;

  return (
    <AuthShell
      title="Set a new password"
      subtitle="Choose a strong password you haven't used before."
      footer={
        <>
          Changed your mind?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Back to login
          </Link>
        </>
      }
    >
      <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <Field
          id="new-password"
          label="New password"
          type="password"
          placeholder="••••••••"
          value={pw}
          onChange={setPw}
        />

        <div className="grid gap-2">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-1.5 flex-1 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor:
                    i < s
                      ? s <= 1
                        ? "var(--danger)"
                        : s === 2
                          ? "oklch(0.8 0.16 85)"
                          : "var(--emerald-accent)"
                      : "var(--border)",
                }}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Password strength: <span className="text-foreground">{labels[s]}</span>
          </p>
        </div>

        <Field
          id="confirm-password"
          label="Confirm password"
          type="password"
          placeholder="••••••••"
          value={confirm}
          onChange={setConfirm}
        />
        {mismatch && <p className="text-xs text-destructive">Passwords don't match yet.</p>}

        <SubmitButton>Update password</SubmitButton>
      </form>
    </AuthShell>
  );
}
