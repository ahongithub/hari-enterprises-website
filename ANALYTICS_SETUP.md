# Analytics Setup

All analytics are **opt-in via env vars** — nothing loads unless you set the IDs.
Loaders live in `src/components/Analytics.tsx`.

## 1. Google Analytics 4 (GA4)
1. Create a GA4 property → get the Measurement ID (`G-XXXXXXXXXX`).
2. Set `NEXT_PUBLIC_GA_ID` in your environment.
3. Redeploy. GA4 loads via `gtag.js`.

## 2. Google Tag Manager (optional)
1. Create a GTM container → get `GTM-XXXXXXX`.
2. Set `NEXT_PUBLIC_GTM_ID`. Use GTM to manage additional tags without code changes.

## 3. Microsoft Clarity (heatmaps + session replay)
1. Create a Clarity project → get the project ID.
2. Set `NEXT_PUBLIC_CLARITY_ID`.

## 4. Google Search Console
1. Add the property (domain or URL prefix) and verify (DNS or the HTML tag).
2. Submit `https://<your-domain>/sitemap.xml`.

## Conversion events (already wired)
Clicks on elements tagged with `data-analytics="…"` automatically push an event to
both `gtag` and `dataLayer`. Tagged actions:

| Event name | Where it fires |
|---|---|
| `phone-click` | Phone links (header, footer, contact, product) |
| `email-click` | Email links |
| `whatsapp-click` | WhatsApp buttons (floating, mobile bar, contact) |
| `indiamart-click` | IndiaMART links |
| `product-enquiry` | "Request a Quote" from a product page |

**Form submissions:** the enquiry form posts to `/api/enquiry`. To count a
successful submission as a conversion, add a `gtag('event','rfq_submitted')` call
in the success branch of `src/components/EnquiryForm.tsx` (marked by `setStatus('success')`),
or track the `/request-a-quote` → success state in GTM. Recommended GA4 key events:
`rfq_submitted`, `phone-click`, `whatsapp-click`, `product-enquiry`.

## Privacy
Update `src/app/privacy-policy/page.tsx` to reflect the tools you actually enable.
Consider a cookie consent banner if required for your audience/region.
