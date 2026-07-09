/**
 * Product catalogue — single source of truth.
 * Grounded in the verified Hari Enterprises portfolio (company brochure +
 * IndiaMART listing). Product names are kept descriptive/generic; specific
 * brands, grades and dimensions are offered "on enquiry" to avoid implying
 * manufacturer status or distributorship, and to avoid publishing unverified
 * technical specifications.
 *
 * To add a product: append an object to `products` and reference an existing
 * category id. To add a category: append to `categories`. Add a matching image
 * to /public/images/products (see PRODUCT_IMAGE_GENERATION_PROMPTS.md).
 */

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  image: string;
}

export interface Product {
  slug: string;
  name: string;
  categoryId: string;
  shortDescription: string;
  overview: string;
  whatItIs: string;
  keyCharacteristics: string[];
  applications: string[];
  industries: string[];
  /** Qualitative supply notes only — no invented numbers. */
  supplyNotes?: string[];
  image: string;
  imageAlt: string;
  related: string[];
  keywords: string[];
  seo: { title: string; description: string; h1: string };
}

export const categories: ProductCategory[] = [
  {
    id: 'castables-cement',
    slug: 'refractory-castables-cement',
    name: 'Refractory Castables & Cement',
    shortName: 'Castables & Cement',
    blurb:
      'Monolithic castables and refractory cements for lining, casting and repair of high-temperature equipment.',
    image: '/images/products/category-castables.svg',
  },
  {
    id: 'bricks',
    slug: 'fire-refractory-bricks',
    name: 'Fire & Refractory Bricks',
    shortName: 'Bricks',
    blurb:
      'Fire clay, high-alumina and insulating bricks for furnace, kiln and boiler linings.',
    image: '/images/products/category-bricks.svg',
  },
  {
    id: 'ceramic-fibre',
    slug: 'ceramic-fibre-products',
    name: 'Ceramic Fibre Products',
    shortName: 'Ceramic Fibre',
    blurb:
      'Lightweight ceramic fibre blanket, board and paper for high-temperature insulation and lining back-up.',
    image: '/images/products/category-ceramic-fibre.svg',
  },
  {
    id: 'insulation',
    slug: 'insulation-products',
    name: 'Insulation Products',
    shortName: 'Insulation',
    blurb:
      'LRB / rockwool mattresses, glass wool and mineral wool for thermal insulation of industrial equipment and piping.',
    image: '/images/products/category-insulation.svg',
  },
  {
    id: 'anchors',
    slug: 'refractory-anchors',
    name: 'Refractory Anchors',
    shortName: 'Anchors',
    blurb:
      'Stainless steel refractory anchors that hold monolithic linings and fibre modules securely in place.',
    image: '/images/products/category-anchors.svg',
  },
];

export const products: Product[] = [
  {
    slug: 'insulating-castable',
    name: 'Insulating Castable',
    categoryId: 'castables-cement',
    shortDescription:
      'Lightweight castable for the back-up and hot-face insulation of furnaces and heaters.',
    overview:
      'Insulating castables are low-density monolithic refractories used where thermal insulation and reduced heat loss matter as much as temperature resistance. They are mixed with water, cast or gunned in place, and cured to form a seamless lining.',
    whatItIs:
      'A pre-blended dry mix of lightweight aggregates and a hydraulic binder that sets into a rigid, low-conductivity refractory lining after casting and curing.',
    keyCharacteristics: [
      'Lower density and thermal conductivity for reduced heat loss',
      'Cast, poured or gunned as a seamless monolithic lining',
      'Available across a range of temperature and density grades',
      'Suited to back-up layers and lower-abrasion hot faces',
    ],
    applications: [
      'Back-up insulation behind dense linings',
      'Insulating layers in furnaces, heaters and ducts',
      'Repair and patching of insulating linings',
    ],
    industries: ['Foundry & Metal Casting', 'Ceramics & Kilns', 'Thermal Processing'],
    supplyNotes: [
      'Multiple density and temperature grades available — shared on enquiry.',
      'Typically supplied in bags; packaging confirmed against your requirement.',
    ],
    image: '/images/products/insulating-castable.svg',
    imageAlt: 'Bag and cast sample of insulating refractory castable',
    related: ['dense-castable', 'refractory-cement', 'super-castable-cement'],
    keywords: ['insulating castable supplier', 'refractory castable Ahmedabad', 'lightweight castable Gujarat'],
    seo: {
      title: 'Insulating Castable Supplier in Ahmedabad, Gujarat',
      description:
        'Lightweight insulating refractory castables for furnace and heater linings, supplied by Hari Enterprises, Ahmedabad. Send your requirement for grades and availability.',
      h1: 'Insulating Castable',
    },
  },
  {
    slug: 'dense-castable',
    name: 'Dense / High-Alumina Castable',
    categoryId: 'castables-cement',
    shortDescription:
      'High-strength dense castable for hot-face linings exposed to abrasion and high temperature.',
    overview:
      'Dense and high-alumina castables provide a hard, abrasion-resistant hot face for equipment operating at elevated temperatures. They are widely used where mechanical wear, impact or slag contact demands a robust monolithic lining.',
    whatItIs:
      'A dense monolithic refractory mix based on high-alumina aggregates and hydraulic binders, cast in place to form a strong, wear-resistant lining.',
    keyCharacteristics: [
      'High mechanical strength and abrasion resistance',
      'Suited to demanding hot-face and high-temperature service',
      'Monolithic installation — no joints to fail',
      'Multiple alumina and temperature grades',
    ],
    applications: [
      'Hot-face linings of furnaces and kilns',
      'High-abrasion zones and impact areas',
      'Burner blocks and pouring spouts',
    ],
    industries: ['Foundry & Metal Casting', 'Cement & Lime', 'Thermal Processing'],
    supplyNotes: [
      'Alumina content and grade selected to suit application — discussed on enquiry.',
    ],
    image: '/images/products/dense-castable.svg',
    imageAlt: 'Dense high-alumina refractory castable sample block',
    related: ['insulating-castable', 'refractory-cement', 'high-alumina-bricks'],
    keywords: ['dense castable supplier', 'high alumina castable Gujarat', 'refractory castable supplier Ahmedabad'],
    seo: {
      title: 'Dense & High-Alumina Castable Supplier — Ahmedabad, Gujarat',
      description:
        'Dense, abrasion-resistant high-alumina refractory castables for hot-face furnace linings. Supplied by Hari Enterprises, Ahmedabad. Request grades and pricing.',
      h1: 'Dense / High-Alumina Castable',
    },
  },
  {
    slug: 'refractory-cement',
    name: 'Refractory Cement',
    categoryId: 'castables-cement',
    shortDescription:
      'Hydraulic-setting refractory cement for jointing, bedding and repair of refractory linings.',
    overview:
      'Refractory cement is used to join and bed refractory bricks and to carry out patch repairs of linings. Formulated from calcium aluminates and refractory fillers, it withstands temperatures far beyond ordinary construction cement.',
    whatItIs:
      'A hydraulic refractory binder based on calcium aluminates and fine refractory aggregates, used for jointing, bedding and small-scale repair work.',
    keyCharacteristics: [
      'Withstands high service temperatures',
      'Good bonding for brick jointing and bedding',
      'Convenient for on-site patch repairs',
      'Available in setting grades to suit the job',
    ],
    applications: [
      'Jointing and bedding of refractory bricks',
      'Patching and repair of linings',
      'Setting of burner blocks and fittings',
    ],
    industries: ['Foundry & Metal Casting', 'Ceramics & Kilns', 'Boilers & Heaters'],
    supplyNotes: ['Setting grade and packaging confirmed against requirement.'],
    image: '/images/products/refractory-cement.svg',
    imageAlt: 'Refractory cement powder in an open bag',
    related: ['dense-castable', 'super-castable-cement', 'fire-bricks'],
    keywords: ['refractory cement supplier', 'castable cement Ahmedabad', 'refractory cement Gujarat'],
    seo: {
      title: 'Refractory Cement Supplier in Ahmedabad, Gujarat',
      description:
        'Hydraulic refractory cement for jointing, bedding and repair of refractory linings. Supplied by Hari Enterprises, Ahmedabad. Send your requirement for availability.',
      h1: 'Refractory Cement',
    },
  },
  {
    slug: 'super-castable-cement',
    name: 'Castable Cement',
    categoryId: 'castables-cement',
    shortDescription:
      'General-purpose castable cement for lining, casting and maintenance of thermal equipment.',
    overview:
      'Castable cement is a versatile monolithic refractory used for lining and repair across a wide range of thermal equipment. It is mixed with water and cast or trowelled into place, making it practical for both new linings and maintenance.',
    whatItIs:
      'A ready-to-mix refractory cement blend that sets into a durable lining, available in standard and higher-performance grades.',
    keyCharacteristics: [
      'Versatile — casting, lining and maintenance',
      'Simple water-mix installation',
      'Available in standard and premium grades',
      'Balanced strength and temperature resistance',
    ],
    applications: [
      'General furnace and heater linings',
      'Maintenance and repair work',
      'Small custom-cast refractory shapes',
    ],
    industries: ['Foundry & Metal Casting', 'Boilers & Heaters', 'Ceramics & Kilns'],
    supplyNotes: ['Standard and premium grades available — confirmed on enquiry.'],
    image: '/images/products/super-castable-cement.svg',
    imageAlt: 'Castable cement mix ready for application',
    related: ['insulating-castable', 'refractory-cement', 'dense-castable'],
    keywords: ['castable cement supplier', 'castable cement Ahmedabad', 'refractory castable cement Gujarat'],
    seo: {
      title: 'Castable Cement Supplier in Ahmedabad, Gujarat',
      description:
        'General-purpose refractory castable cement for lining and repair of thermal equipment. Supplied by Hari Enterprises, Ahmedabad. Request grades and pricing.',
      h1: 'Castable Cement',
    },
  },
  {
    slug: 'fire-bricks',
    name: 'Fire Bricks (Clay)',
    categoryId: 'bricks',
    shortDescription:
      'Fire-clay bricks for the linings of furnaces, kilns, boilers and fireplaces.',
    overview:
      'Fire bricks are the workhorse of refractory construction — dense fire-clay bricks that resist heat, thermal cycling and general wear. They are used to build and reline the hot zones of a wide range of thermal equipment.',
    whatItIs:
      'Pressed and fired refractory bricks made from fire clay, designed to withstand sustained high temperatures and thermal cycling.',
    keyCharacteristics: [
      'Reliable resistance to sustained high heat',
      'Good thermal-shock behaviour',
      'Standard shapes and sizes for easy construction',
      'Durable, cost-effective hot-face material',
    ],
    applications: [
      'Furnace and kiln walls and floors',
      'Boiler and incinerator linings',
      'Fireplaces and heat-treatment equipment',
    ],
    industries: ['Foundry & Metal Casting', 'Ceramics & Kilns', 'Boilers & Heaters'],
    supplyNotes: [
      'Standard sizes available; special shapes sourced against requirement.',
    ],
    image: '/images/products/fire-bricks.svg',
    imageAlt: 'Stack of refractory fire-clay bricks',
    related: ['high-alumina-bricks', 'insulation-bricks', 'refractory-cement'],
    keywords: ['fire brick supplier Ahmedabad', 'refractory brick supplier Gujarat', 'fire clay brick supplier'],
    seo: {
      title: 'Fire Brick Supplier in Ahmedabad, Gujarat',
      description:
        'Fire-clay refractory bricks for furnace, kiln and boiler linings, supplied by Hari Enterprises, Ahmedabad. Send your size and quantity requirement for a quote.',
      h1: 'Fire Bricks (Clay)',
    },
  },
  {
    slug: 'high-alumina-bricks',
    name: 'High-Alumina Refractory Bricks',
    categoryId: 'bricks',
    shortDescription:
      'Higher-alumina bricks for more demanding, higher-temperature furnace zones.',
    overview:
      'High-alumina bricks carry a higher alumina content than standard fire bricks, giving improved refractoriness and resistance to chemical attack. They are chosen for the hotter, more aggressive zones of furnaces and kilns.',
    whatItIs:
      'Refractory bricks with elevated alumina content for higher service temperatures and better resistance to slag and chemical attack.',
    keyCharacteristics: [
      'Higher refractoriness than standard fire clay',
      'Better resistance to slag and chemical attack',
      'Available in a range of alumina grades',
      'Suited to demanding hot zones',
    ],
    applications: [
      'High-temperature furnace and kiln zones',
      'Areas exposed to slag or chemical attack',
      'Ladle and pouring applications',
    ],
    industries: ['Foundry & Metal Casting', 'Cement & Lime', 'Ceramics & Kilns'],
    supplyNotes: ['Alumina grade selected to match service conditions.'],
    image: '/images/products/high-alumina-bricks.svg',
    imageAlt: 'High-alumina refractory bricks',
    related: ['fire-bricks', 'insulation-bricks', 'dense-castable'],
    keywords: ['high alumina brick supplier', 'refractory brick supplier Gujarat', 'high alumina refractory Ahmedabad'],
    seo: {
      title: 'High-Alumina Refractory Brick Supplier — Ahmedabad, Gujarat',
      description:
        'High-alumina refractory bricks for demanding, high-temperature furnace zones. Supplied by Hari Enterprises, Ahmedabad. Request grades and availability.',
      h1: 'High-Alumina Refractory Bricks',
    },
  },
  {
    slug: 'insulation-bricks',
    name: 'Insulation Bricks',
    categoryId: 'bricks',
    shortDescription:
      'Lightweight insulating fire bricks (IFB / HFK-type) that reduce heat loss and shell temperature.',
    overview:
      'Insulating fire bricks are lightweight, high-porosity bricks used as back-up insulation behind dense linings, or as a hot face in lower-load applications. They cut heat loss and lower outer shell temperatures, improving energy efficiency.',
    whatItIs:
      'Low-density, high-porosity refractory bricks engineered for thermal insulation rather than mechanical load.',
    keyCharacteristics: [
      'Low density and low thermal conductivity',
      'Reduces heat loss and shell temperature',
      'Lightweight and easy to handle',
      'Various temperature classifications',
    ],
    applications: [
      'Back-up insulation behind dense linings',
      'Insulating hot faces in low-load service',
      'Energy-efficiency upgrades',
    ],
    industries: ['Ceramics & Kilns', 'Foundry & Metal Casting', 'Boilers & Heaters'],
    supplyNotes: ['Temperature classification confirmed on enquiry.'],
    image: '/images/products/insulation-bricks.svg',
    imageAlt: 'Lightweight insulating fire bricks',
    related: ['fire-bricks', 'high-alumina-bricks', 'ceramic-fibre-board'],
    keywords: ['insulation brick supplier', 'IFB supplier Gujarat', 'insulating fire brick Ahmedabad'],
    seo: {
      title: 'Insulation Brick Supplier in Ahmedabad, Gujarat',
      description:
        'Lightweight insulating fire bricks (IFB/HFK-type) that cut heat loss and shell temperature. Supplied by Hari Enterprises, Ahmedabad. Send your requirement.',
      h1: 'Insulation Bricks',
    },
  },
  {
    slug: 'ceramic-fibre-blanket',
    name: 'Ceramic Fibre Blanket',
    categoryId: 'ceramic-fibre',
    shortDescription:
      'Lightweight, flexible high-temperature insulation blanket for lining, wrapping and back-up.',
    overview:
      'Ceramic fibre blanket is a flexible, lightweight insulation made from spun or blown ceramic fibres. It offers excellent thermal insulation with very low heat storage, making it ideal for furnace linings, expansion joints and equipment wrapping.',
    whatItIs:
      'A needled blanket of high-purity ceramic fibres supplied in rolls, used for high-temperature insulation and lining back-up.',
    keyCharacteristics: [
      'Excellent thermal insulation, very low heat storage',
      'Lightweight and flexible — easy to install',
      'Good resistance to thermal shock',
      'Supplied in rolls in a range of densities and thicknesses',
    ],
    applications: [
      'Furnace and kiln lining and back-up',
      'Expansion joints and seals',
      'Wrapping of pipes, ducts and equipment',
    ],
    industries: ['Foundry & Metal Casting', 'Ceramics & Kilns', 'Boilers & Heaters', 'Thermal Processing'],
    supplyNotes: [
      'Available in multiple densities and thicknesses; temperature grade confirmed on enquiry.',
      'Supplied in rolls; pack sizes confirmed against requirement.',
    ],
    image: '/images/products/ceramic-fibre-blanket.svg',
    imageAlt: 'Roll of white ceramic fibre insulation blanket',
    related: ['ceramic-fibre-board', 'ceramic-fibre-paper', 'lrb-mattress'],
    keywords: ['ceramic blanket supplier', 'ceramic fibre blanket supplier Gujarat', 'ceramic fiber blanket Ahmedabad'],
    seo: {
      title: 'Ceramic Fibre Blanket Supplier in Ahmedabad, Gujarat',
      description:
        'Ceramic fibre (ceramic wool) insulation blanket for high-temperature lining and wrapping. Supplied by Hari Enterprises, Ahmedabad. Request density, thickness and pricing.',
      h1: 'Ceramic Fibre Blanket',
    },
  },
  {
    slug: 'ceramic-fibre-board',
    name: 'Ceramic Fibre Board',
    categoryId: 'ceramic-fibre',
    shortDescription:
      'Rigid ceramic fibre board for self-supporting high-temperature insulation.',
    overview:
      'Ceramic fibre board is a rigid form of ceramic fibre insulation that holds its shape without support. It is used where a firm, machinable insulating panel is needed — for hot-face linings, back-up insulation and equipment construction.',
    whatItIs:
      'A rigid, self-supporting board of ceramic fibre and binder, offered in standard panel sizes and thicknesses.',
    keyCharacteristics: [
      'Rigid and self-supporting',
      'Low thermal conductivity and heat storage',
      'Can be cut and machined to shape',
      'Good for hot-face and back-up insulation',
    ],
    applications: [
      'Self-supporting furnace linings',
      'Back-up insulation panels',
      'Equipment and appliance construction',
    ],
    industries: ['Ceramics & Kilns', 'Foundry & Metal Casting', 'Thermal Processing'],
    supplyNotes: ['Board size and thickness confirmed on enquiry.'],
    image: '/images/products/ceramic-fibre-board.svg',
    imageAlt: 'Rigid ceramic fibre insulation board',
    related: ['ceramic-fibre-blanket', 'ceramic-fibre-paper', 'insulation-bricks'],
    keywords: ['ceramic fibre board supplier', 'ceramic fiber board Gujarat', 'ceramic board Ahmedabad'],
    seo: {
      title: 'Ceramic Fibre Board Supplier in Ahmedabad, Gujarat',
      description:
        'Rigid, machinable ceramic fibre insulation board for self-supporting high-temperature insulation. Supplied by Hari Enterprises, Ahmedabad. Send your requirement.',
      h1: 'Ceramic Fibre Board',
    },
  },
  {
    slug: 'ceramic-fibre-paper',
    name: 'Ceramic Fibre Paper',
    categoryId: 'ceramic-fibre',
    shortDescription:
      'Thin, uniform ceramic fibre paper for gaskets, seals and back-up insulation.',
    overview:
      'Ceramic fibre paper is a thin, flexible sheet of ceramic fibres used where a uniform, easily cut insulating layer is needed — for gaskets, expansion joints, seals and delicate back-up insulation.',
    whatItIs:
      'A thin, uniform sheet of ceramic fibres with a small amount of organic binder, supplied in rolls.',
    keyCharacteristics: [
      'Thin, uniform and flexible',
      'Easy to cut and form',
      'Good for gaskets, seals and fine insulation',
      'Low heat storage',
    ],
    applications: [
      'Gaskets and seals',
      'Expansion-joint infill',
      'Back-up and parting layers',
    ],
    industries: ['Foundry & Metal Casting', 'Ceramics & Kilns', 'Thermal Processing'],
    supplyNotes: ['Thickness and roll size confirmed on enquiry.'],
    image: '/images/products/ceramic-fibre-paper.svg',
    imageAlt: 'Roll of ceramic fibre insulation paper',
    related: ['ceramic-fibre-blanket', 'ceramic-fibre-board', 'refractory-cement'],
    keywords: ['ceramic fibre paper supplier', 'ceramic fiber paper Gujarat', 'ceramic paper Ahmedabad'],
    seo: {
      title: 'Ceramic Fibre Paper Supplier in Ahmedabad, Gujarat',
      description:
        'Thin ceramic fibre insulation paper for gaskets, seals and back-up insulation. Supplied by Hari Enterprises, Ahmedabad. Request thickness and roll size.',
      h1: 'Ceramic Fibre Paper',
    },
  },
  {
    slug: 'lrb-mattress',
    name: 'LRB / Rockwool Mattress',
    categoryId: 'insulation',
    shortDescription:
      'Resin-bonded rockwool (LRB) mattresses for thermal insulation of equipment and piping.',
    overview:
      'LRB (Lightly Resin Bonded) rockwool mattresses are flexible insulation blankets used to lag boilers, ducts, tanks and large-diameter piping. They provide effective thermal insulation and help control surface temperatures on hot equipment.',
    whatItIs:
      'A flexible mattress of resin-bonded mineral (rock) wool, often faced or stitched, used for industrial thermal insulation.',
    keyCharacteristics: [
      'Effective thermal insulation for equipment and piping',
      'Flexible — wraps around curved surfaces',
      'Available in a range of densities and thicknesses',
      'Helps control hot-surface temperatures',
    ],
    applications: [
      'Lagging of boilers, ducts and tanks',
      'Insulation of large-bore piping',
      'General industrial thermal insulation',
    ],
    industries: ['Boilers & Heaters', 'Chemical & Process', 'Power & Utilities'],
    supplyNotes: ['Density and thickness confirmed on enquiry; facing options available.'],
    image: '/images/products/lrb-mattress.svg',
    imageAlt: 'LRB resin-bonded rockwool insulation mattress',
    related: ['glass-wool', 'mineral-wool', 'ceramic-fibre-blanket'],
    keywords: ['LRB mattress supplier', 'rockwool mattress Gujarat', 'rockwool insulation Ahmedabad'],
    seo: {
      title: 'LRB / Rockwool Mattress Supplier — Ahmedabad, Gujarat',
      description:
        'Resin-bonded rockwool (LRB) mattresses for thermal insulation of boilers, ducts and piping. Supplied by Hari Enterprises, Ahmedabad. Request density and thickness.',
      h1: 'LRB / Rockwool Mattress',
    },
  },
  {
    slug: 'glass-wool',
    name: 'Glass Wool Insulation',
    categoryId: 'insulation',
    shortDescription:
      'Glass wool rolls and slabs for thermal and acoustic insulation.',
    overview:
      'Glass wool is a lightweight fibrous insulation used for thermal and acoustic control across industrial and building applications. It is supplied in rolls and slabs for lagging, cladding and general insulation.',
    whatItIs:
      'A resilient fibrous insulation spun from glass, supplied in rolls or slabs, offering thermal and acoustic insulation.',
    keyCharacteristics: [
      'Thermal and acoustic insulation',
      'Lightweight and easy to install',
      'Supplied in rolls and slabs',
      'Cost-effective general insulation',
    ],
    applications: [
      'Duct and equipment insulation',
      'Acoustic control',
      'General thermal insulation',
    ],
    industries: ['Boilers & Heaters', 'Chemical & Process', 'Power & Utilities'],
    supplyNotes: ['Density, thickness and facing confirmed on enquiry.'],
    image: '/images/products/glass-wool.svg',
    imageAlt: 'Roll of glass wool insulation',
    related: ['lrb-mattress', 'mineral-wool', 'ceramic-fibre-blanket'],
    keywords: ['glass wool supplier', 'glass wool insulation Gujarat', 'glass wool Ahmedabad'],
    seo: {
      title: 'Glass Wool Insulation Supplier in Ahmedabad, Gujarat',
      description:
        'Glass wool insulation rolls and slabs for thermal and acoustic insulation. Supplied by Hari Enterprises, Ahmedabad. Send your requirement for availability.',
      h1: 'Glass Wool Insulation',
    },
  },
  {
    slug: 'mineral-wool',
    name: 'Mineral Wool',
    categoryId: 'insulation',
    shortDescription:
      'Loose and blanket mineral wool for high-temperature thermal insulation and fire protection.',
    overview:
      'Mineral wool provides robust thermal insulation and fire resistance for industrial equipment and structures. It is supplied loose, as blankets or as slabs for a range of insulation and packing applications.',
    whatItIs:
      'A fibrous insulation made from molten rock or slag, offering thermal insulation and fire-resistant properties.',
    keyCharacteristics: [
      'Good high-temperature thermal insulation',
      'Fire-resistant properties',
      'Supplied loose, as blanket or slab',
      'Useful for packing and infill',
    ],
    applications: [
      'High-temperature equipment insulation',
      'Fire-protection packing and infill',
      'Duct and vessel insulation',
    ],
    industries: ['Boilers & Heaters', 'Chemical & Process', 'Power & Utilities'],
    supplyNotes: ['Form (loose/blanket/slab) and density confirmed on enquiry.'],
    image: '/images/products/mineral-wool.svg',
    imageAlt: 'Mineral wool insulation material',
    related: ['lrb-mattress', 'glass-wool', 'ceramic-fibre-blanket'],
    keywords: ['mineral wool supplier', 'mineral wool insulation Gujarat', 'mineral wool Ahmedabad'],
    seo: {
      title: 'Mineral Wool Supplier in Ahmedabad, Gujarat',
      description:
        'Mineral wool for high-temperature thermal insulation and fire protection, in loose, blanket and slab forms. Supplied by Hari Enterprises, Ahmedabad.',
      h1: 'Mineral Wool',
    },
  },
  {
    slug: 'refractory-anchors',
    name: 'Refractory Anchors (Stainless Steel)',
    categoryId: 'anchors',
    shortDescription:
      'Stainless steel anchors that hold monolithic linings and fibre modules securely in place.',
    overview:
      'Refractory anchors are metal fixings that hold castable linings and ceramic fibre modules onto the equipment shell. Choosing the right anchor material, type and spacing is critical to the life of a monolithic lining.',
    whatItIs:
      'Stainless steel anchors — in wave, V, Y and other profiles — welded to the shell to retain refractory linings.',
    keyCharacteristics: [
      'Holds castable linings and fibre modules in place',
      'Stainless steel grades for high-temperature service',
      'Available in common anchor profiles and sizes',
      'Correct selection extends lining life',
    ],
    applications: [
      'Anchoring of monolithic castable linings',
      'Fixing of ceramic fibre modules',
      'Retention of linings on curved and vertical shells',
    ],
    industries: ['Foundry & Metal Casting', 'Cement & Lime', 'Thermal Processing', 'Power & Utilities'],
    supplyNotes: [
      'Anchor profile, steel grade and size selected to suit the lining — confirmed on enquiry.',
    ],
    image: '/images/products/refractory-anchors.svg',
    imageAlt: 'Stainless steel refractory anchors in various profiles',
    related: ['dense-castable', 'insulating-castable', 'ceramic-fibre-blanket'],
    keywords: ['refractory anchor supplier', 'SS refractory anchor Gujarat', 'refractory anchor Ahmedabad'],
    seo: {
      title: 'Refractory Anchor Supplier in Ahmedabad, Gujarat',
      description:
        'Stainless steel refractory anchors for retaining castable linings and fibre modules. Supplied by Hari Enterprises, Ahmedabad. Request profiles, grades and pricing.',
      h1: 'Refractory Anchors (Stainless Steel)',
    },
  },
];

/* ---- helpers ---- */
export const getProductsByCategory = (categoryId: string): Product[] =>
  products.filter((p) => p.categoryId === categoryId);

export const getProduct = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getCategory = (id: string): ProductCategory | undefined =>
  categories.find((c) => c.id === id);

export const getRelated = (product: Product): Product[] =>
  product.related.map((s) => getProduct(s)).filter((p): p is Product => Boolean(p));
