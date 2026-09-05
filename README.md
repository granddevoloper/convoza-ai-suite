# Convoza AI Suite

Create a complete, high-converting, enterprise-grade B2B SaaS platform website for "Convoza" (WhatsApp AI CRM SaaS). Match the visual polish, feature depth, interactive aesthetics, and design system of top-tier platforms like On Cloud API. 

## 1. DESIGN SYSTEM & MOTION FRAMEWORK

### Color Theme & Rhythm

- Primary Dark Theme (80% of page): Background `#05070A`, Card Surfaces `#0B0F14` with glassmorphic `backdrop-blur-md`, Borders `#1C242E`, Body `#A1A1AA`, Headlines `#FFFFFF`. Accent: Emerald `#00E676` (used sparingly for CTAs, active states, status dots, icon badges). Danger indicator: Muted Rose `#F2555A`.

- Cream/Bone Editorial Chapter Panels (20% of page for Chapter 4 & 7): Warm off-white `#F5F1E8`, dark ink headers `#0F172A`, emerald accent CTA buttons.

- Styling: Dark glassmorphic card containers, subtle neon green (`#00E676`) hover borders, hover card scale-up (`scale-105`), crisp rounded buttons. NO heavy neon over-saturation.

### Motion & Micro-Interactions

- Scroll Reveals: Staggered Framer Motion-style `fade-in-up` entrance animations (~24px rise, 400ms ease-out) for all grids, feature cards, and list items (`stagger-children`).

- Interactive Element Motion: Gentle hover lift (2-4px) + border brightening on cards. Smooth SVG light trail animations along architecture connection lines to simulate live data streaming.

- Micro-UI: Dynamic number tick/counter transitions on metrics and live pulse green status indicators (`pulse`) next to active channels/nodes.

- Strict Guidelines: NO ALL-CAPS eyebrow labels, NO marquee banners, NO arrow-suffixed button text ("Learn More ->"), NO dot-separated meta captions ("X · Y · Z").

### Image Constraints — STRICT Sitewide Limit: EXACTLY 2 Real Images

1. Hero Image: High-fidelity product screenshot/mockup showing analytics tiles + shared inbox glimpse.

2. "How It Works" Chapter Image: Pipeline flow visual (WhatsApp -> AI Agent -> CRM/Team).

*Note: ALL other product previews, chat lists, and pipeline cards MUST be hand-built using pure HTML/CSS/SVG components (chat bubbles, mini kanban boards, UI badges).*

---

## 2. NAVIGATION & TOP CAPABILITY RAIL

- Header Nav: Text-based wordmark "Convoza". Nav links: [Features], [How It Works], [Security], [Pricing], [Docs]. Action Buttons: `Login` (Outline) and `Get Early Access` (Primary Emerald).

- Capability Rail (Fixed below Nav): Restyled horizontal dark bar with emerald icons: Shared WhatsApp Inbox • AI Agent • Human Takeover • Sales Pipeline • Follow-ups • Campaigns • Knowledge Base • Analytics.

---

## 3. LANDING PAGE — SECTION BREAKDOWN

1. Hero Section (Dark Theme):

- Headline: "Run Your Entire Sales & Support Operation on WhatsApp with AI"

- Subheadline: "AI replies instantly. Your team steps in when it matters most. Unify inbox, pipeline, and automated broadcasts in one cockpit."

- Action CTAs: Primary Emerald `Get Early Access`, Secondary `See How It Works`.

- Media: Real Image #1 (Dashboard Product Screenshot).

2. Problem Section (Dark Theme):

- Headline: "WhatsApp wasn't built to run a business."

- Subheadline: "Every message lands in a personal chat — with no record, no owner, and no next step."

- Split Screen: 

  - Left: Hand-built HTML/CSS WhatsApp chat list mock with 5 bubbles alternating normal (emerald left-border) and unresolved/problem messages (muted rose left-border, faded).

  - Right: 3 Callout rows with circular emerald icon badges: "No shared inbox", "No conversation ownership", "No follow-through". Include a single clean sentence caption underneath.

3. Feature Grid (Bento Box - Dark Theme):

- 7 Bento Cards with staggered scroll reveals (Icon + Title + 1-line description + hand-built CSS mini UI):

  1. Shared WhatsApp Inbox (Multi-agent team routing)

  2. Autonomous AI Agent (Instant responses using your Knowledge Base)

  3. Visual Sales Pipeline (Drag-and-drop Kanban columns)

  4. Template Broadcast Campaigns (Bulk messaging without ban risk)

  5. Automated Follow-ups (Drip messaging & abandoned chat triggers)

  6. Real-Time Telemetry & Analytics (Response speed & conversion tracking)

  7. Custom Knowledge Base (Upload PDFs, URLs & docs for AI training)

4. "How It Works" Section (Cream/Bone Chapter Panel `#F5F1E8`):

- Editorial styling with dark ink text.

- Media: Real Image #2 (Flow & Message Pipeline visual).

- 4-Step Interactive Flow Timeline:

  - Step 1: Customer messages on WhatsApp

  - Step 2: AI Agent evaluates & replies instantly using Knowledge Base

  - Step 3: Seamless Human Handoff triggers when high-intent deal detected

  - Step 4: Automatically logged into CRM Pipeline & Analytics

5. Security & Trust Section (Dark Theme):

- Headline: "Enterprise-Grade Data Isolation & Control"

- Key Trust Badges: Per-tenant access control, workspace data isolation, 99.99% API uptime, Meta Cloud API compliant.

6. Interactive WhatsApp Cost & Pricing Teaser (Dark Theme):

- Dynamic WhatsApp cost calculation preview block (0% markup direct Meta billing model).

- Headline: "Simple, Transparent Subscriptions. 0% Added Markup."

- Single prominent CTA: `View Full Interactive Pricing Page` linking to full pricing page.

7. FAQ Accordion (Cream/Bone Panel `#F5F1E8`):

- Smooth collapsible accordion items for: WhatsApp Business API setup, AI takeover logic, number ban protection, data security, and team seat allocation.

8. Final High-Impact Call to Action (Dark Theme):

- Closing Headline: "Ready to Turn WhatsApp into Your #1 Sales Channel?"

- Single Primary CTA: `Get Early Access Now`.

9. Global Footer:

- Brand: Convoza. Navigation links, Social icons, Copyright line.

- Legal Links: [Privacy Policy], [Terms of Service], [Data Deletion Policy].

---

## 4. SUPPORTING LEGAL & AUTH PAGES

Generate clear, dark-themed, highly readable sub-page views for:

1. Legal Templates (Long-form typography, numbered H2 sections, clean spacing):

- `/privacy-policy` (Privacy Policy)

- `/terms-of-service` (Terms of Service)

- `/data-deletion` (Data Deletion Policy)

2. Auth Suite (Clean dark theme, glassmorphic card containers, NO images, text wordmark header):

- `/login`: Email & Password fields, "Forgot Password?" link, "Sign Up" route, Emerald Submit button.

- `/signup`: Multi-step progress indicator bar (Account -> Workspace -> Complete), input fields, Submit CTA.

- `/forgot-password`: Email field, Submit CTA, and an interactive inline confirmation banner ("Check your inbox for reset instructions").

- `/reset-password`: New Password + Confirm Password fields, strength meter indicator, Submit CTA.

Generate the full interactive prototype with these exact color shifts, staggered scroll reveals, CSS micro-interactions, and visual layout.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/409dbc47-8eb0-4fac-ba6e-82fca6f99158).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
