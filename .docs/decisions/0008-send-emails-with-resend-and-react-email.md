# Send Formatted Emails with Resend and React Email

## Context and Problem Statement

We need to send HTML emails with rich formatting (transactional, marketing) to users of the application. Mailgun covers plain text and raw HTML emails, but composing and maintaining HTML email templates is error-prone. We want a developer-friendly way to author email templates using React components, and a reliable delivery service that integrates well with the Next.js ecosystem.

## Considered Options

- Resend + React Email
- Mailgun (existing) with raw HTML templates
- SendGrid
- Postmark

## Decision Outcome

Chosen option: "Resend + React Email", because it provides first-class React component support for email templating, a clean API that fits Next.js server actions, and generous free tier for early-stage products.

The email adapter layer (`src/adapters/email`) is provider-agnostic: Resend is loaded only when `RESEND_API_KEY` is set, falling back to Mailgun or a no-op blank provider. This keeps the architecture open for future provider changes without modifying call sites.

### Implementation Notes

- Resend client is instantiated at module scope in `src/adapters/email/resend/index.tsx` — this file must only be imported server-side (server actions, route handlers). Never import it from a `'use client'` component directly.
- The `from` address falls back to `RESEND_EMAIL_FROM` env var if not specified on the email object.
- Required env vars: `RESEND_API_KEY`, `RESEND_EMAIL_FROM`.

### Consequences

- Good, because email templates are authored as React components — type-safe, composable, and easy to preview.
- Good, because the adapter pattern allows Mailgun and Resend to coexist; each handles the methods it supports.
- Bad, because React Email components must be rendered server-side only, adding a constraint on where `sendFormattedEmail` can be called.
