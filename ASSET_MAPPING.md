# Asset Mapping

## Brand
| Original | Cleaned | Processing |
|---|---|---|
| Logo.jpg (supplied) | public/images/brand/hari-enterprises-logo-transparent.png | Trimmed; background flood-filled to transparent; identity/colours preserved. Used in header. |
| Logo.jpg | public/images/brand/hari-enterprises-logo.png | Trimmed white-matte fallback. |

## Leadership
| Source | Optimized | Used on |
|---|---|---|
| Professional_Photo.png (supplied portrait) | public/images/leadership/jitendra-haridwari-founder-director.webp | /leadership, homepage leadership preview |

## Products (brochure → website)
All product photos are the embedded images extracted from `hari-enterprises_brochure.pdf`.
Exported as WebP (600×600, neutral tile) at public/images/products/<slug>.webp.

| Product (website) | Brochure page | Brochure label | Asset |
|---|---|---|---|
| Insulating Castable | 5 | White Heat A Castable | insulating-castable.webp |
| Dense / High-Alumina Castable | 5 | Refractory White Heat K Castable | dense-castable.webp |
| Refractory Cement | 10 | Refractory Castable (Accoset-50 bag) | refractory-cement.webp |
| Castable Cement | 8 | Super Castable Cement (Ceratec bag) | super-castable-cement.webp |
| Fire Bricks (Clay) | 3 | Refractory Fire Bricks | fire-bricks.webp |
| High-Alumina Refractory Bricks | 7 | Alumina Refractory Brick | high-alumina-bricks.webp |
| Insulation Bricks | 3 | Insulation Brick Refractories | insulation-bricks.webp |
| Ceramic Fibre Blanket | 7 | Ceramic Fiber Blanket | ceramic-fibre-blanket.webp |
| Ceramic Fibre Board | 5 | Accoset 50 (rigid board form) | ceramic-fibre-board.webp |
| Ceramic Fibre Paper | 8 | Ceramic Fiber Paper | ceramic-fibre-paper.webp |
| LRB / Rockwool Mattress | 6 | LRB Rockwool Mattress | lrb-mattress.webp |
| Glass Wool Insulation | 4 | Glass Wool | glass-wool.webp |
| Mineral Wool | 4 | Mineral Wool Loose | mineral-wool.webp |
| Refractory Anchors (SS) | 8 | SS Refractory Anchor | refractory-anchors.webp |

### Category images (reuse a representative brochure photo)
| Category | Asset | Source photo |
|---|---|---|
| Refractory Castables & Cement | category-castables.webp | Super Castable Cement (p8) |
| Fire & Refractory Bricks | category-bricks.webp | Refractory Fire Bricks (p3) |
| Ceramic Fibre Products | category-ceramic-fibre.webp | Ceramic Fiber Blanket (p7) |
| Insulation Products | category-insulation.webp | Glass Wool (p4) |
| Refractory Anchors | category-anchors.webp | SS Refractory Anchor (p8) |

Note: the website product taxonomy is broader/generic than the brochure's exact
labels; each product uses the closest matching brochure photograph. Additional
brochure images (Aluminium Sheet, SS Wire, Fiber Glass Surface Mat, Cera Wool
Blanket, Ortex binder, etc.) were extracted and retained in the build source but
are not all surfaced as separate catalogue items; they can be added later.

## Clients (Clients.docx → website)
Logos are the actual marks embedded in the supplied Clients document.
public/images/clients/<file>.webp (trimmed, object-contain, neutral tile).

| Client | Source image | Asset | Used on |
|---|---|---|---|
| Aditya Birla Insulators | image1.jpeg | client-aditya-birla-insulators.webp | /clients, homepage |
| BTV Limited (Bharat Tanks and Vessels) | image2.jpeg | client-btv-limited.webp | /clients, homepage |
| FAB Industries | image3.png | client-fab-industries.webp | /clients, homepage |
| Fry-Tech Food Equipment | image4.png | client-frytech-food-equipment.webp | /clients, homepage |
| ISGEC Hitachi Zosen Limited | image5.png | client-isgec-hitachi-zosen.webp | /clients, homepage |
| Sun Energy System | image6.jpeg | client-sun-energy-system.webp | /clients, homepage |
