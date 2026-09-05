import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Wordmark } from "./SiteShell";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] emerald-halo" />

      <div className="relative mx-auto flex min-h-screen max-w-lg flex-col justify-center px-4 py-14 sm:px-6">
        <div className="flex justify-center">
          <Wordmark />
        </div>

        <div className="glass-card mt-8 p-6 sm:p-8">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-xs text-muted-foreground transition-colors hover:text-primary">
            Back to Convoza
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Field({
  label,
  type = "text",
  placeholder,
  id,
  hint,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  id: string;
  hint?: ReactNode;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        {hint}
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="w-full rounded-lg border border-input bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/70 focus:ring-2 focus:ring-primary/25"
      />
    </div>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-100"
    >
      {children}
    </button>
  );
}
