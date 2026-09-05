import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Convoza" },
      {
        name: "description",
        content: "The terms that govern use of the Convoza WhatsApp AI CRM platform, subscriptions, messaging costs and acceptable use.",
      },
      { property: "og:title", content: "Terms of Service — Convoza" },
      { property: "og:description", content: "Terms governing subscriptions, messaging and acceptable use of Convoza." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms of Service"
      updated="1 September 2026"
      intro="These terms govern access to the Convoza platform. By creating a workspace you agree to them on behalf of your organisation."
      sections={[
        {
          heading: "Agreement and eligibility",
          body: (
            <p>
              You must be authorised to bind your organisation and be at least 18 years old. If you do
              not agree to these terms, do not use the platform.
            </p>
          ),
        },
        {
          heading: "The service",
          body: (
            <p>
              Convoza provides a shared WhatsApp inbox, AI response agent, sales pipeline, campaign
              tooling and analytics on top of the WhatsApp Business Platform. Features may evolve; we
              will not materially degrade a paid capability during an active term.
            </p>
          ),
        },
        {
          heading: "Accounts and seats",
          body: (
            <p>
              Seats are named to individuals and may be reassigned when a team member leaves. You are
              responsible for the activity of every account in your workspace and for keeping
              credentials secure.
            </p>
          ),
        },
        {
          heading: "Subscriptions and billing",
          body: (
            <p>
              Subscription fees are billed in advance per billing period and are non-refundable except
              where required by law. WhatsApp conversation charges are billed by Meta at cost with 0%
              markup added by Convoza.
            </p>
          ),
        },
        {
          heading: "Acceptable use",
          body: (
            <p>
              You may not use Convoza to send unsolicited bulk messages, unlawful, deceptive, or abusive
              content, or to breach WhatsApp Business Platform policies. Repeated policy violations may
              result in template rejection or number restriction by Meta.
            </p>
          ),
        },
        {
          heading: "Customer data and ownership",
          body: (
            <p>
              You retain ownership of your customer data and knowledge base content. You grant us a
              limited licence to process it solely to provide and support the service.
            </p>
          ),
        },
        {
          heading: "AI output",
          body: (
            <p>
              AI-generated replies are drafted from your configured knowledge base and may contain
              errors. You remain responsible for reviewing automation rules and for the commitments made
              to your customers.
            </p>
          ),
        },
        {
          heading: "Availability and support",
          body: (
            <p>
              We target 99.99% API availability measured monthly, excluding planned maintenance and
              upstream provider incidents. Support response targets depend on your plan.
            </p>
          ),
        },
        {
          heading: "Suspension and termination",
          body: (
            <p>
              Either party may terminate for material breach that remains uncured after 14 days' notice.
              We may suspend immediately where use threatens platform security or violates Meta policy.
            </p>
          ),
        },
        {
          heading: "Liability",
          body: (
            <p>
              To the maximum extent permitted by law, neither party is liable for indirect or
              consequential losses, and our aggregate liability is limited to the fees paid in the 12
              months preceding the claim.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: (
            <p>
              These terms are governed by the laws of the jurisdiction stated in your order form, and
              disputes will be resolved in the courts of that jurisdiction.
            </p>
          ),
        },
      ]}
    />
  ),
});
