# Setup

## 1. Prerequisites
- Node.js **18.17+** (LTS recommended)
- npm (bundled with Node)

## 2. Install
```bash
npm install
```

## 3. Environment
```bash
cp .env.example .env.local
```
Fill in values — see `ENVIRONMENT_VARIABLES.md`. For a first local run you can
leave everything blank; the site works and the enquiry form shows a mailto
fallback until email is configured.

## 4. Run
```bash
npm run dev      # http://localhost:3000
```

## 5. Configure email (Resend)
1. Create a free account at https://resend.com.
2. Add and verify your sending domain (e.g. `harienterprises.co.in`). For a
   quick test you can skip this and use `onboarding@resend.dev` as `ENQUIRY_FROM`.
3. Create an API key → set `RESEND_API_KEY` in `.env.local`.
4. Set `ENQUIRY_FROM` to a verified sender and `ENQUIRY_TO` to the destination
   inbox (defaults to `jharidwari@gmail.com`).
5. Restart the dev server and submit a test enquiry.

**How the form behaves**
- Valid submission → internal email to `ENQUIRY_TO` (with any uploaded file
  attached) + an acknowledgement email to the buyer.
- No `RESEND_API_KEY` → submission validates and the UI shows a graceful
  "email us directly" message instead of failing.

## 6. Verify
```bash
npm run typecheck   # types
npm run lint        # linting
npm run build       # production build (needs internet for first font fetch)
```

## Swapping the email provider
Email lives in `src/lib/email.ts`. To use Nodemailer/SMTP or another provider,
replace the `sendEnquiryEmails` implementation — the API route and form don't
change. Keep the `emailConfigured` flag accurate so the mailto fallback works.
