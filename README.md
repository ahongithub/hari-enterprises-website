# Hari Enterprises — Corporate Website

Production website for **Hari Enterprises**, an Ahmedabad-based B2B refractory
material sourcing & supply business. Built to generate qualified industrial
enquiries, communicate capability and support long-term organic search.

> Positioning: Hari Enterprises is a **B2B trader/supplier and sourcing partner** —
> not a manufacturer. All copy reflects this accurately.

## Tech stack
- **Next.js 14** (App Router) + **React 18** + **TypeScript** (strict)
- **Tailwind CSS** design system derived from the company logo
- **Zod** validation · **Resend** transactional email · in-memory rate limiting
- **lucide-react** icons · `next/font` (Saira / Inter / IBM Plex Mono)
- SEO: metadata, canonical, Open Graph/Twitter, JSON-LD (Organization,
  LocalBusiness, Product, Article, Breadcrumb, FAQ), dynamic `sitemap.xml` & `robots.txt`

## Quick start
```bash
npm install
cp .env.example .env.local   # fill in values (see ENVIRONMENT_VARIABLES.md)
npm run dev                  # http://localhost:3000
```
Requires **Node 18.17+** and internet access on first build (fonts are fetched
by `next/font/google`).

## Scripts
| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run format` | Prettier |

## Project structure
```
src/
  app/               # Routes (App Router) + api/enquiry + sitemap + robots
  components/        # Layout, UI primitives, home sections, forms
  data/              # ← EDIT HERE: company, products, clients, industries,
                     #   articles, navigation, seo (single source of truth)
  lib/               # seo, schema, validation, email, rate-limit, utils
public/images/       # Optimized logo + portrait, placeholder product art
```

## Where to change common content
Almost everything editable lives in `src/data/`. See **CONTENT_EDITING_GUIDE.md**.

- Phone / email / address / IndiaMART / founder → `src/data/company.ts`
- Products & categories → `src/data/products.ts`
- Clients → `src/data/clients.ts`
- Industries → `src/data/industries.ts`
- Articles → `src/data/articles.ts`
- Menus → `src/data/navigation.ts`

## Documentation
- `SETUP.md` — local setup & email config
- `DEPLOYMENT.md` — deploy to Vercel + domain + email
- `CONTENT_EDITING_GUIDE.md` — non-developer editing guide
- `SEO_STRATEGY.md` — keyword map & on-page SEO
- `LOCAL_SEO_PLAN.md` — Google Business Profile & local citations
- `ANALYTICS_SETUP.md` — GA4 / GTM / Clarity & conversion events
- `PRODUCT_IMAGE_GENERATION_PROMPTS.md` — prompts to replace placeholder art
- `ENVIRONMENT_VARIABLES.md` — every env var explained
- `RESEARCH_SOURCES.md` — sources used for content/SEO
- `BUILD_LOG.md` — what was built & verification results
