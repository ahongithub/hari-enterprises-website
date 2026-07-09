# Product Image Generation Prompts

The site currently ships with **clean, original placeholder artwork** (SVG) for
each product and category, so it looks complete out of the box. For the strongest
result, replace them with **real photographs of your own stock** (most credible),
or with AI-generated photoreal images using the prompts below.

## Rules (important)
- Do **not** copy manufacturer catalogue photos or use competitor imagery.
- No fake logos, no fake packaging labels, no watermarks, **no text baked into images**.
- Neutral industrial studio background, consistent soft lighting, realistic texture.
- Export ~**1600×1200 (4:3)**, optimized (WebP/JPEG, < 250 KB), descriptive filename.
- Save to `public/images/products/<slug>.<ext>` and update the product's `image`
  field in `src/data/products.ts` (e.g. `/images/products/fire-bricks.jpg`).

## How to replace
1. Get the image (photo or generated).
2. Optimize: `npx @squoosh/cli --webp auto image.jpg` (or any optimizer).
3. Save as `public/images/products/<slug>.webp`.
4. In `src/data/products.ts`, set `image: '/images/products/<slug>.webp'` and a
   descriptive `imageAlt`.

## Prompts (one per product)

**insulating-castable** — "Photorealistic studio product shot of a cast block of
lightweight insulating refractory castable, pale beige porous texture, beside a
plain paper bag of dry castable mix (no labels), neutral light-grey seamless
background, soft even studio lighting, high detail, industrial catalogue style."

**dense-castable** — "Photorealistic studio shot of a dense high-alumina
refractory castable block, hard grey-tan aggregate surface, sharp edges, neutral
grey seamless background, soft studio lighting, industrial product photography."

**refractory-cement** — "Photorealistic studio shot of grey refractory cement
powder in an open plain bag with a small poured pile in front, neutral background,
soft lighting, no labels or text, industrial catalogue style."

**super-castable-cement** — "Photorealistic studio shot of a plain bag of
refractory castable cement next to a small cast test cube, light grey powder,
neutral seamless background, soft even lighting, no branding."

**fire-bricks** — "Photorealistic studio shot of a neat stack of tan/buff fire
clay refractory bricks, standard rectangular shape, visible fired texture, neutral
grey seamless background, soft studio lighting, industrial catalogue style."

**high-alumina-bricks** — "Photorealistic studio shot of high-alumina refractory
bricks, denser off-white/cream colour, crisp edges, stacked, neutral background,
soft lighting, industrial product photography, no text."

**insulation-bricks** — "Photorealistic studio shot of lightweight insulating fire
bricks, very pale white porous surface, low-density look, stacked, neutral grey
background, soft lighting."

**ceramic-fibre-blanket** — "Photorealistic studio shot of a partially unrolled
white ceramic fibre insulation blanket, soft fibrous texture, neutral grey
seamless background, soft lighting, no labels."

**ceramic-fibre-board** — "Photorealistic studio shot of a rigid white ceramic
fibre insulation board, flat rectangular panel with matte fibrous surface, neutral
background, soft lighting."

**ceramic-fibre-paper** — "Photorealistic studio shot of a roll of thin white
ceramic fibre insulation paper, slightly unrolled, delicate fibrous texture,
neutral grey background, soft lighting."

**lrb-mattress** — "Photorealistic studio shot of a resin-bonded rockwool (LRB)
insulation mattress, brownish-yellow dense fibrous slab, neutral grey background,
soft lighting, industrial catalogue style, no text."

**glass-wool** — "Photorealistic studio shot of a roll of yellow glass wool
insulation, fluffy fibrous texture, partially unrolled, neutral grey seamless
background, soft lighting."

**mineral-wool** — "Photorealistic studio shot of grey-brown mineral wool
insulation, dense fibrous slab and some loose fibre, neutral background, soft
lighting, industrial product photography."

**refractory-anchors** — "Photorealistic studio shot of an arrangement of
stainless steel refractory anchors in V, Y and wave shapes, clean metallic finish,
neutral grey seamless background, soft directional studio lighting, high detail."

## Category & hero images (optional)
Category cards reuse product-style art. For a hero photo, use a **real** photo of a
furnace/kiln interior or your own stock/godown (avoid generic handshake/office
stock). Replace `public/images/hero/hero-furnace.svg` and update `src/components/home/Hero.tsx`.
