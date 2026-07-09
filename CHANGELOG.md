# Changelog — Revision 2 (Polish & Real Assets)

This revision modifies the existing live site in place. Routes, SEO, enquiry
workflow, structured data, sitemap and deployment config are preserved.

## Header & navigation
- Replaced the pasted-looking logo with a cleaned transparent-background PNG that
  integrates into the header (and sits on a white chip in the dark footer).
- Renamed "Why Hari Enterprises" to "Why Us" in navigation (route unchanged:
  /why-hari-enterprises, so SEO/links are preserved).
- Removed the phone number from the primary desktop navigation (it now lives only
  in the utility bar and footer), fixing the awkward wrapping and crowding.
- Added "Clients" as a top-level nav item.
- Nav now reads: Home · Products ▾ · Industries · Why Us · About · Clients · Resources · Contact · Request a Quote.

## Logo
- Source: supplied Logo.jpg. Trimmed and background flood-filled to transparent.
- Output: public/images/brand/hari-enterprises-logo-transparent.png (identity, text,
  colours and proportions preserved; not redesigned). Verified on light and dark.

## Hero
- Fixed the invisible secondary CTA (was white text on a white fill due to
  conflicting utility classes). Introduced a dedicated `outline-light` button
  variant used on all dark sections so labels can never disappear.
- Reduced the oversized headline, tightened vertical padding, shortened supporting
  copy, and added a real product-photo collage (brochure images) on the right so
  the previously empty dark space is used.

## Homepage (shortened from ~8 sections to 7)
- Retained: Hero, credibility strip, product portfolio preview, Why Us
  (4 differentiators), Selected Clients (real logos), Leadership preview, final CTA.
- Removed from the homepage: the long "How We Work" process flow and the full
  Industries block (both remain reachable via their own pages), and the duplicated
  5-pillar section (condensed to 4 differentiators).

## Product images (strict: brochure only)
- Removed all AI-generated SVG product placeholders.
- Extracted the embedded product photographs from the brochure PDF and mapped each
  to the correct product and category (see ASSET_MAPPING.md). Exported as optimized
  WebP on a neutral tile; product/category images now render with object-contain so
  real photos are not cropped.

## Clients
- Rebuilt the client list from the supplied Clients document (authoritative source):
  Aditya Birla Insulators, BTV Limited (Bharat Tanks and Vessels), FAB Industries,
  Fry-Tech Food Equipment, ISGEC Hitachi Zosen Limited, Sun Energy System.
- Used the actual client logos from the document (object-contain, neutral tiles,
  no stretching, no fabricated logos). Added the compact Selected Clients strip on
  the homepage and refreshed the Clients page hero ("Relationships built through
  reliable execution") and disclaimer.

## Copy & messaging
- Removed "Supply where feasible"; Pan-India messaging rewritten to confident,
  defensible wording ("Across India", "Serving industrial buyers nationwide").
- Removed every user-facing em dash across the codebase (rewritten with commas,
  colons or periods). Verified zero remaining.
- Reframed the Industries page as "Applications supported by our product portfolio".

## Buttons, colour & typography
- Consistent button system; added `outline-light` for dark backgrounds; audited
  primary/secondary/outline/ghost for contrast (no white-on-white).
- Body prose bumped to 16px for readability; hero display size reduced.

## Assets architecture
- public/images/brand, /products, /clients, /leadership with meaningful filenames
  (e.g. hari-enterprises-logo-transparent.png, refractory-anchors.webp,
  client-fab-industries.webp, jitendra-haridwari-founder-director.webp).

## Files
- Added: CHANGELOG.md, ASSET_MAPPING.md, QA_REPORT.md; brand/leadership/clients
  images; real product WebPs.
- Removed: SVG product/category placeholders.
- Modified: navigation, clients, company, products data; Hero, TrustStrip, Logo,
  Button, ClientCard, ProductCard, homepage, clients/industries pages; globals.css.

## Preserved
- Framework (Next.js 14), routes, SEO metadata, JSON-LD, sitemap, robots, enquiry
  API + validation + rate limiting + email, analytics prep, deployment config.
