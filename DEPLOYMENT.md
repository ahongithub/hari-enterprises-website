# Deployment

Recommended host: **Vercel** (first-party Next.js support, free tier suitable).

## Deploy to Vercel
1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel → **New Project** → import the repo. Framework auto-detected as Next.js.
3. Add Environment Variables (Production + Preview) — see `ENVIRONMENT_VARIABLES.md`:
   - `NEXT_PUBLIC_SITE_URL` = your final URL (e.g. `https://www.harienterprises.co.in`)
   - `RESEND_API_KEY`, `ENQUIRY_FROM`, `ENQUIRY_TO`
   - (optional) `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_CLARITY_ID`
4. **Deploy**.

## Custom domain
1. Vercel → Project → **Settings → Domains** → add `harienterprises.co.in` and `www`.
2. At your registrar, point DNS as Vercel instructs (A/ALIAS + CNAME for www).
3. Set `NEXT_PUBLIC_SITE_URL` to the canonical URL you chose (with or without `www` —
   be consistent) and redeploy so sitemap/canonical tags match.

## Post-deploy checklist
- [ ] Submit a test enquiry → confirm it arrives at `ENQUIRY_TO` and the buyer gets an ack.
- [ ] Visit `/sitemap.xml` and `/robots.txt` — both should render with your domain.
- [ ] Submit `sitemap.xml` in Google Search Console (see `LOCAL_SEO_PLAN.md`).
- [ ] Validate structured data: https://search.google.com/test/rich-results
- [ ] Run Lighthouse (mobile) on Home, a product page, and Contact.
- [ ] Confirm phone/WhatsApp/email links open correctly on a real phone.

## Alternative hosts
Any Node host that runs `npm run build && npm run start` works (Netlify, Render,
a VPS with PM2). The `/api/enquiry` route needs the Node.js runtime (already set).
