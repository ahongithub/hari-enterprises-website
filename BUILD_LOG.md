# Build Log

## What was built
A complete, production-quality corporate website for **Hari Enterprises**
(Ahmedabad-based B2B refractory material sourcing & supply), using Next.js 14
(App Router) + TypeScript (strict) + Tailwind CSS.

### Pages / routes (45 generated)
- Home, About, Leadership, Why Hari Enterprises (with FAQ), Clients, Contact,
  Request a Quote, Privacy Policy, Terms of Use, 404.
- Products listing (filter + search) + **15 product detail pages** (dynamic).
- Industries listing + **7 industry/application pages** (dynamic).
- Resources listing + **7 knowledge-centre articles** (dynamic).
- `/api/enquiry` (server route), `sitemap.xml`, `robots.txt`.

### Design system
Palette derived from the company logo: engineering **ink navy**, disciplined
**furnace red (ember)** accent, **firebrick** warmth, **steel** neutrals.
Signature devices: the logo's horizontal "grating" lines as section dividers, a
steel→ember "heatline" accent, and a monospace "spec-sheet" utility type for
eyebrows/labels. Fonts: Saira (display) / Inter (body) / IBM Plex Mono (utility).

### Data-driven architecture (single source of truth in `src/data/`)
company, products (5 categories / 15 products), clients (8), industries (7),
articles (7), navigation, seo. No business data duplicated in components.

### Enquiry / RFQ system
Full RFQ form (all requested fields) → `/api/enquiry`: Zod validation
(client + server), honeypot + per-IP rate limiting, file upload with
type/size checks (attached to the internal email), Resend email to
`jharidwari@gmail.com` + buyer acknowledgement, graceful mailto fallback when
email is unconfigured. No secrets in client code (env vars only).

### SEO
Per-page metadata, canonical, Open Graph + Twitter, JSON-LD (Organization,
LocalBusiness, Product, Article, BreadcrumbList, FAQPage), breadcrumbs,
semantic HTML, descriptive alt text, dynamic sitemap + robots.

### Accessibility
Skip link, keyboard-operable nav/menu/accordion, visible focus states,
labelled fields with `aria-invalid`/`role="alert"`, semantic landmarks,
reduced-motion support, sufficient contrast (navy/white, ember on white).

### Assets
Supplied logo and founder portrait optimized (`public/images/`). Original,
text-free placeholder artwork generated for every product/category + hero/OG +
favicon. Replacement prompts provided in `PRODUCT_IMAGE_GENERATION_PROMPTS.md`.

## Verification performed in the build environment
- `tsc --noEmit` (strict) — **PASS**, no type errors.
- `next lint` (eslint) — **PASS**, no warnings or errors.
- `next build` — **PASS**: 45/45 pages generated, all dynamic routes prerendered,
  sitemap/robots emitted, API route compiled. First Load JS ~87–103 kB per route.
  *(The build in the delivery sandbox required a temporary system-font shim only
  because `next/font/google` fetches fonts over the network, which was blocked in
  that sandbox. The delivered code uses `next/font/google`; it builds normally on
  any machine with internet — local or Vercel.)*

## Client-verified facts used
Name/contact/addresses from the business card; portrait of Mr. Jitendra Haridwari;
8 client names from the supplied image; founding year 2005 and portfolio
cross-checked against the company's own IndiaMART listing. See `RESEARCH_SOURCES.md`.

## Not claimed (no evidence)
Manufacturing, capacity, certifications, labs, exports, branches, headcount,
revenue, distributorships/partnerships, testimonials, specific technical specs.
Client logos are shown as consistent text cards (no third-party logos fabricated).

## Requires the owner's configuration before public launch
1. Set env vars (site URL, Resend key/sender, analytics IDs) — see
   `ENVIRONMENT_VARIABLES.md`.
2. Verify a sending domain in Resend and send a test enquiry.
3. Connect the domain and submit the sitemap to Search Console.
4. (Recommended) Replace placeholder product art with real stock photos.
5. Have the Privacy Policy / Terms reviewed professionally.
