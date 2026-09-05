import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/data-deletion")({
  head: () => ({
    meta: [
      { title: "Data Deletion Policy — Convoza" },
      {
        name: "description",
        content: "How to request deletion of WhatsApp conversation data, contacts and workspaces from Convoza, and the timelines we follow.",
      },
      { property: "og:title", content: "Data Deletion Policy — Convoza" },
      { property: "og:description", content: "Request deletion of your Convoza workspace or conversation data." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Data Deletion Policy"
      updated="1 September 2026"
      intro="This policy explains how end users and workspace owners can request deletion of data held in Convoza, and how quickly those requests are completed."
      sections={[
        {
          heading: "What can be deleted",
          body: (
            <p>
              Conversation history, contact records, uploaded knowledge base files, campaign logs,
              analytics events, and the workspace itself, including all member accounts.
            </p>
          ),
        },
        {
          heading: "Self-service deletion",
          body: (
            <p>
              Workspace owners can delete individual contacts and conversations from the inbox, remove
              knowledge base documents from settings, and delete the entire workspace from the billing
              screen. Deletion is immediate and irreversible.
            </p>
          ),
        },
        {
          heading: "Requesting deletion by email",
          body: (
            <p>
              If you cannot access the app, email delete@convoza.app from the address associated with
              the account and include the workspace name and the WhatsApp number involved. We verify
              ownership before acting.
            </p>
          ),
        },
        {
          heading: "End-user requests",
          body: (
            <p>
              If you messaged a business that uses Convoza and want your data removed, contact that
              business directly as the data controller. If they cannot be reached, we will forward your
              request and confirm once it has been actioned.
            </p>
          ),
        },
        {
          heading: "Timelines",
          body: (
            <p>
              Verified requests are completed within 7 days. Data is removed from primary systems
              immediately and expires from encrypted backups within 30 days.
            </p>
          ),
        },
        {
          heading: "What we must retain",
          body: (
            <p>
              Invoices, tax records, and limited security audit logs are retained where law requires.
              These records exclude message content.
            </p>
          ),
        },
        {
          heading: "Confirmation",
          body: (
            <p>
              You receive written confirmation once deletion is complete, including the categories
              removed and the date of the final backup expiry.
            </p>
          ),
        },
      ]}
    />
  ),
});
