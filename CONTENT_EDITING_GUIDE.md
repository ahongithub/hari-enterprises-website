# Content Editing Guide

This site keeps content **separate from code**. Most edits are made in
`src/data/` — you don't need to touch page components. After any change, run
`npm run build` locally (or push to trigger a Vercel deploy) to publish.

> Tip: values marked with a red `*` on forms are required for buyers, not for you.

## Contact details, address, founder — `src/data/company.ts`
Change phone, email, office/godown address, IndiaMART link, WhatsApp number and
founder details in one place. These flow to the header, footer, contact page and
structured data automatically.

- WhatsApp: set `whatsapp.number` (country code + number, digits only) and
  `whatsapp.defaultMessage`.
- Map: `contact` page uses the office address automatically. To pin an exact
  location, update `address.office.geo` lat/lng.

## Products — `src/data/products.ts`
**Add a product:** copy an existing object in the `products` array, change the
fields, and give it a unique `slug`. Reference an existing `categoryId`.
Add a matching image at `public/images/products/<slug>.svg` (or `.jpg/.webp`) and
set `image` to that path. Product detail pages, cards, sitemap and schema update
automatically.

**Add a category:** append to the `categories` array with a unique `id`.

> Do **not** invent technical specifications. Keep grades/dimensions as
> "available on enquiry" unless you have verified data.

## Clients — `src/data/clients.ts`
Add `{ name, sector }`. Cards render as clean text badges by default.
To show a real logo, obtain permission, drop the file in
`public/images/clients/`, and set `logo: '/images/clients/<file>.png'`.

## Industries — `src/data/industries.ts`
Each industry maps a challenge to relevant product `categoryId`s. Edit copy or
add a new industry object with a unique `slug`.

## Articles / Knowledge Centre — `src/data/articles.ts`
Add an article object. `body` is a list of blocks:
`{ type: 'p', text }`, `{ type: 'h2', text }`, or `{ type: 'ul', items: [...] }`.
Set `relatedProducts` to product slugs to show related cards.

## Menus — `src/data/navigation.ts`
Edit the header/footer link groups here.

## SEO defaults — `src/data/seo.ts`
Site name, default title/description and keyword defaults. Per-page SEO is set on
each page via `buildMetadata({...})`.

## Images
- Replace the founder portrait: overwrite `public/images/founder-jitendra-haridwari.jpg`.
- Replace the logo: overwrite `public/images/logo.png` (keep it roughly 3:1).
- Replace placeholder product art with real photos: see
  `PRODUCT_IMAGE_GENERATION_PROMPTS.md`, then set the product's `image` path.

## Legal pages
Edit `src/app/privacy-policy/page.tsx` and `src/app/terms-of-use/page.tsx`.
Have a professional review these before relying on them.
