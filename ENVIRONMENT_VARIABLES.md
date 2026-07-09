# Environment Variables

Copy `.env.example` → `.env.local` for local dev. In production (Vercel), set
these in **Project → Settings → Environment Variables**. Never commit secrets.
Only variables prefixed `NEXT_PUBLIC_` are exposed to the browser.

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public URL, no trailing slash. Drives canonical URLs, sitemap, OG tags. Defaults to `https://www.harienterprises.co.in`. |
| `RESEND_API_KEY` | For email | Resend API key. Without it, the form validates and shows a mailto fallback (no email is sent). |
| `ENQUIRY_TO` | Optional | Inbox that receives enquiries. Defaults to `jharidwari@gmail.com`. |
| `ENQUIRY_FROM` | For email | Verified sender, e.g. `Hari Enterprises <enquiries@harienterprises.co.in>`. Must be a domain verified in Resend. `onboarding@resend.dev` works for testing. |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 ID (`G-XXXXXXX`). |
| `NEXT_PUBLIC_GTM_ID` | Optional | Google Tag Manager ID (`GTM-XXXXXX`). |
| `NEXT_PUBLIC_CLARITY_ID` | Optional | Microsoft Clarity project ID. |

## Security notes
- `RESEND_API_KEY`, `ENQUIRY_TO`, `ENQUIRY_FROM` are **server-only** — never sent to the browser.
- The enquiry API applies Zod validation, a honeypot field, per-IP rate limiting, and file-type/size checks server-side.
