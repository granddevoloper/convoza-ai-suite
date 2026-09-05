import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Convoza" },
      {
        name: "description",
        content: "How Convoza collects, processes, stores and protects WhatsApp conversation data and workspace information.",
      },
      { property: "og:title", content: "Privacy Policy — Convoza" },
      { property: "og:description", content: "How Convoza handles and protects your WhatsApp and workspace data." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      updated="1 September 2026"
      intro="This policy explains what data Convoza processes when you connect a WhatsApp Business number, how long we keep it, and the controls available to workspace owners."
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>
                We collect account details you provide (name, work email, company, WhatsApp Business
                number), workspace configuration, and the message content routed through the Meta Cloud
                API so it can be displayed in your shared inbox.
              </p>
              <p>
                We also record technical metadata such as delivery receipts, agent assignment events,
                and API response timings used for analytics and reliability monitoring.
              </p>
            </>
          ),
        },
        {
          heading: "How we use your data",
          body: (
            <p>
              Data is used to operate the product: deliver and store conversations, generate AI replies
              from your knowledge base, run pipeline automation and follow-ups, produce analytics, bill
              accurately, and provide support. We do not sell personal data or use customer message
              content to train shared, cross-tenant models.
            </p>
          ),
        },
        {
          heading: "Legal bases for processing",
          body: (
            <p>
              We process data to perform our contract with you, to meet legal obligations, and on the
              basis of legitimate interests in securing and improving the service. Where required, we
              rely on consent, which you may withdraw at any time.
            </p>
          ),
        },
        {
          heading: "Data isolation and storage",
          body: (
            <p>
              Every workspace is logically isolated with per-tenant access controls. Data is encrypted
              in transit with TLS 1.2+ and at rest with AES-256. Access by our staff is role-restricted,
              logged, and limited to support tasks you request.
            </p>
          ),
        },
        {
          heading: "Sub-processors",
          body: (
            <p>
              We rely on vetted infrastructure and AI providers to deliver messaging, hosting, and model
              inference. Each sub-processor is bound by data protection terms, and an up-to-date list is
              available on request.
            </p>
          ),
        },
        {
          heading: "Retention",
          body: (
            <p>
              Conversation history is retained for the period configured by your workspace owner.
              Deleted records are purged from primary storage immediately and from encrypted backups
              within 30 days.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              You may request access, correction, export, restriction, or deletion of personal data.
              Workspace owners can action most of these directly in settings; anything else can be
              requested at privacy@convoza.app.
            </p>
          ),
        },
        {
          heading: "International transfers",
          body: (
            <p>
              Where data moves across regions, we use recognised transfer mechanisms including standard
              contractual clauses and apply the same encryption and access controls everywhere.
            </p>
          ),
        },
        {
          heading: "Changes to this policy",
          body: (
            <p>
              Material changes are announced in-product and by email at least 14 days before they take
              effect. Continued use after that date constitutes acceptance.
            </p>
          ),
        },
      ]}
    />
  ),
});
