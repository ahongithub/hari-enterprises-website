/**
 * Knowledge Centre articles. Content is technically responsible and vendor-neutral;
 * Hari Enterprises is described as a supplier/sourcing partner, never a manufacturer.
 * Body is a simple block model rendered by /resources/[slug].
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  readMinutes: number;
  updated: string; // ISO date
  category: 'Guides' | 'Material Selection' | 'Buyer Resources';
  relatedProducts: string[]; // product slugs
  body: Block[];
  seo: { title: string; description: string };
}

export const articles: Article[] = [
  {
    slug: 'types-of-refractory-materials',
    title: 'Types of Refractory Materials and Their Applications',
    excerpt:
      'A practical overview of the main families of refractory materials, bricks, castables, ceramic fibre and insulation, and where each is used.',
    readMinutes: 6,
    updated: '2026-01-15',
    category: 'Guides',
    relatedProducts: ['fire-bricks', 'insulating-castable', 'ceramic-fibre-blanket', 'lrb-mattress'],
    body: [
      { type: 'p', text: 'Refractory materials are engineered to withstand high temperatures without losing their structural or chemical stability. They line the furnaces, kilns, boilers and reactors at the heart of most heavy industry. Choosing the right family of material for each part of the equipment has a direct effect on safety, energy use and how long a lining lasts.' },
      { type: 'h2', text: 'Refractory bricks' },
      { type: 'p', text: 'Bricks are the traditional building block of refractory construction. Fire-clay bricks handle sustained heat and thermal cycling at a modest cost, while high-alumina bricks add refractoriness and chemical resistance for hotter, more aggressive zones. Insulating (lightweight) bricks trade mechanical strength for low thermal conductivity, cutting heat loss and shell temperature.' },
      { type: 'h2', text: 'Monolithic castables and cements' },
      { type: 'p', text: 'Castables are dry refractory mixes that are combined with water and cast, poured or gunned into place, curing into a seamless (monolithic) lining. Dense castables provide strong, abrasion-resistant hot faces; insulating castables reduce heat loss. Refractory cements are used for jointing, bedding and repair.' },
      { type: 'h2', text: 'Ceramic fibre products' },
      { type: 'p', text: 'Ceramic fibre, supplied as blanket, board and paper, is lightweight, flexible and stores very little heat. That makes it ideal for lining, back-up insulation, expansion joints and equipment that cycles frequently.' },
      { type: 'h2', text: 'Insulation materials' },
      { type: 'p', text: 'Rockwool (LRB) mattresses, glass wool and mineral wool insulate equipment, ducts and piping. They control surface temperatures and reduce heat loss on the cooler side of the process.' },
      { type: 'h2', text: 'Choosing between them' },
      { type: 'p', text: 'Most real installations combine several families: a durable hot face, an insulating back-up, and anchoring to hold it all in place. The right combination depends on temperature, wear, chemistry and how the equipment is operated. If you are unsure which materials suit your equipment, share the details with our team and we will help you identify suitable options.' },
    ],
    seo: {
      title: 'Types of Refractory Materials and Their Applications',
      description:
        'Overview of refractory bricks, castables, ceramic fibre and insulation, and where each is used. A practical guide from Hari Enterprises, Ahmedabad.',
    },
  },
  {
    slug: 'castable-vs-fire-bricks',
    title: 'Castable Refractory vs Fire Bricks: How to Choose',
    excerpt:
      'When a monolithic castable lining makes more sense than brickwork, and when it does not.',
    readMinutes: 5,
    updated: '2026-01-15',
    category: 'Material Selection',
    relatedProducts: ['dense-castable', 'insulating-castable', 'fire-bricks', 'refractory-cement'],
    body: [
      { type: 'p', text: 'Castables and fire bricks can often do the same job, but each has strengths that suit particular situations. Understanding the trade-offs helps you specify the right lining and avoid rework.' },
      { type: 'h2', text: 'Where castables win' },
      { type: 'ul', items: [
        'Complex shapes and curved surfaces where cutting bricks is impractical',
        'Fast installation and repair, especially by gunning or casting in place',
        'Seamless linings with no joints that can open up',
        'Areas that need frequent patch repairs',
      ] },
      { type: 'h2', text: 'Where bricks win' },
      { type: 'ul', items: [
        'Large, regular flat or cylindrical zones that suit standard shapes',
        'Applications where predictable, factory-controlled properties matter',
        'Certain high-wear or high-temperature zones where a specific brick grade performs best',
        'Situations where dry-out time for a cast lining is hard to accommodate',
      ] },
      { type: 'h2', text: 'A common answer: use both' },
      { type: 'p', text: 'Many linings combine brickwork in stable, regular zones with castable in complex geometry, burner blocks and repair areas. The decision comes down to geometry, downtime, service conditions and installation resources.' },
      { type: 'p', text: 'Share your equipment details and operating conditions with us, and we can help you weigh the options and source suitable material for each zone.' },
    ],
    seo: {
      title: 'Castable Refractory vs Fire Bricks: How to Choose',
      description:
        'A practical comparison of monolithic castables and fire bricks, installation, geometry, repair and service conditions. From Hari Enterprises, Ahmedabad.',
    },
  },
  {
    slug: 'selecting-refractory-high-temperature',
    title: 'How to Select Refractory Materials for High-Temperature Applications',
    excerpt:
      'The key factors, temperature, atmosphere, wear and chemistry, that drive refractory selection.',
    readMinutes: 6,
    updated: '2026-01-15',
    category: 'Material Selection',
    relatedProducts: ['high-alumina-bricks', 'dense-castable', 'ceramic-fibre-blanket', 'refractory-anchors'],
    body: [
      { type: 'p', text: 'Selecting refractory materials is about matching the material to the real conditions inside your equipment. Getting the specification right the first time avoids premature failure and unplanned downtime.' },
      { type: 'h2', text: '1. Operating temperature' },
      { type: 'p', text: 'Start with the maximum continuous temperature and any peaks. This narrows the material class and grade quickly, but temperature is only the beginning.' },
      { type: 'h2', text: '2. Atmosphere and chemistry' },
      { type: 'p', text: 'Reducing or oxidising atmospheres, slag, molten metal, alkalis and process gases all attack refractories differently. The right choice resists the specific chemistry your process presents.' },
      { type: 'h2', text: '3. Mechanical and thermal stress' },
      { type: 'p', text: 'Abrasion, impact and thermal cycling determine whether you need a dense, strong hot face or a shock-tolerant material. Frequent cycling favours low-heat-storage materials such as ceramic fibre.' },
      { type: 'h2', text: '4. Insulation and heat loss' },
      { type: 'p', text: 'Behind the hot face, insulating layers control heat loss and shell temperature. A well-designed lining balances hot-face durability with back-up insulation.' },
      { type: 'h2', text: '5. Installation and anchoring' },
      { type: 'p', text: 'How the lining will be installed, and how it is anchored, matters as much as the material itself. Monolithic linings need correctly specified anchors and dry-out.' },
      { type: 'h2', text: 'Getting help with selection' },
      { type: 'p', text: 'If you can share operating temperature, atmosphere, wear conditions and equipment type, our team can help you identify suitable material options and source them for your requirement.' },
    ],
    seo: {
      title: 'How to Select Refractory Materials for High-Temperature Applications',
      description:
        'The key factors in refractory selection, temperature, atmosphere, wear, insulation and anchoring. A buyer guide from Hari Enterprises, Ahmedabad.',
    },
  },
  {
    slug: 'ceramic-fibre-blanket-properties',
    title: 'Ceramic Fibre Blanket: Properties and Applications',
    excerpt:
      'Why ceramic fibre blanket is so widely used for high-temperature insulation, and where it fits.',
    readMinutes: 4,
    updated: '2026-01-15',
    category: 'Guides',
    relatedProducts: ['ceramic-fibre-blanket', 'ceramic-fibre-board', 'ceramic-fibre-paper'],
    body: [
      { type: 'p', text: 'Ceramic fibre blanket has become a default choice for high-temperature insulation because it combines low weight, low heat storage and easy installation. Here is what makes it useful and where it fits.' },
      { type: 'h2', text: 'Key properties' },
      { type: 'ul', items: [
        'Very low heat storage, heats and cools quickly, saving energy on cyclic equipment',
        'Lightweight and flexible, wraps around complex shapes',
        'Good thermal-shock resistance',
        'Available in a range of densities and thicknesses',
      ] },
      { type: 'h2', text: 'Common applications' },
      { type: 'ul', items: [
        'Furnace and kiln linings and back-up insulation',
        'Expansion joints and seals',
        'Wrapping of pipes, ducts and equipment',
        'Insulation upgrades to reduce fuel use',
      ] },
      { type: 'p', text: 'Blanket is chosen where flexibility matters; board is used where a rigid, self-supporting panel is needed; and paper suits thin gaskets and seals. Share your temperature, density and thickness needs and we will help you source the right form.' },
    ],
    seo: {
      title: 'Ceramic Fibre Blanket: Properties and Applications',
      description:
        'Properties, benefits and applications of ceramic fibre blanket for high-temperature insulation. From Hari Enterprises, Ahmedabad.',
    },
  },
  {
    slug: 'refractory-anchors-selection',
    title: 'Refractory Anchors: Types and Selection Considerations',
    excerpt:
      'How anchor type, material and spacing affect the life of a monolithic lining.',
    readMinutes: 4,
    updated: '2026-01-15',
    category: 'Material Selection',
    relatedProducts: ['refractory-anchors', 'dense-castable', 'insulating-castable'],
    body: [
      { type: 'p', text: 'A castable lining is only as reliable as the anchors that hold it to the shell. Anchor selection is often overlooked, yet it is a common cause of lining failure.' },
      { type: 'h2', text: 'Anchor types' },
      { type: 'p', text: 'Common profiles include wave (waveform), V, Y and other shapes, chosen to suit lining thickness and the way loads are carried. The right profile depends on the lining and geometry.' },
      { type: 'h2', text: 'Material grade' },
      { type: 'p', text: 'Anchors are typically stainless steel, with the grade selected for the service temperature. Under-specifying the grade can lead to anchor failure and lining loss.' },
      { type: 'h2', text: 'Spacing and layout' },
      { type: 'p', text: 'Spacing, orientation and how anchors are welded to the shell all influence how well the lining is retained, especially on vertical and curved surfaces.' },
      { type: 'p', text: 'If you can share your lining thickness, temperature and shell details, we can help you identify suitable anchor profiles and grades and supply them to your requirement.' },
    ],
    seo: {
      title: 'Refractory Anchors: Types and Selection Considerations',
      description:
        'How anchor type, stainless steel grade and spacing affect monolithic lining life. A selection guide from Hari Enterprises, Ahmedabad.',
    },
  },
  {
    slug: 'common-causes-refractory-failure',
    title: 'Common Causes of Refractory Failure',
    excerpt:
      'The recurring reasons refractory linings fail early, and how better specification and installation help.',
    readMinutes: 5,
    updated: '2026-01-15',
    category: 'Guides',
    relatedProducts: ['dense-castable', 'fire-bricks', 'refractory-anchors', 'ceramic-fibre-blanket'],
    body: [
      { type: 'p', text: 'Refractory linings rarely fail for a single reason. Recognising the common causes helps you specify, install and operate linings that last their full campaign.' },
      { type: 'h2', text: 'Wrong material for the conditions' },
      { type: 'p', text: 'A material chosen for temperature alone may fail when abrasion, chemistry or thermal shock are the real driver. Selection should reflect all the service conditions.' },
      { type: 'h2', text: 'Poor installation and dry-out' },
      { type: 'p', text: 'Incorrect mixing, placement or dry-out of castables, and rushed schedules, are frequent causes of early failure. Proper procedures matter as much as the material.' },
      { type: 'h2', text: 'Inadequate anchoring' },
      { type: 'p', text: 'Under-specified or poorly placed anchors let linings detach, particularly on vertical and curved surfaces.' },
      { type: 'h2', text: 'Thermal cycling and shock' },
      { type: 'p', text: 'Rapid heating and cooling stresses linings. Materials and designs that tolerate cycling extend life on equipment that starts and stops often.' },
      { type: 'h2', text: 'Mechanical damage and overheating' },
      { type: 'p', text: 'Impact, abrasion and operation beyond design temperature all shorten lining life. Matching material grade to the real duty helps.' },
      { type: 'p', text: 'If you are dealing with recurring lining failures, share the details with us and we can help you review suitable material options for the conditions.' },
    ],
    seo: {
      title: 'Common Causes of Refractory Failure',
      description:
        'The recurring reasons refractory linings fail early, material choice, installation, anchoring, thermal shock and mechanical damage. From Hari Enterprises.',
    },
  },
  {
    slug: 'what-to-share-when-requesting-quote',
    title: 'What to Share When Requesting a Refractory Material Quote',
    excerpt:
      'A short checklist that helps you get an accurate, fast quotation for refractory materials.',
    readMinutes: 3,
    updated: '2026-01-15',
    category: 'Buyer Resources',
    relatedProducts: ['insulating-castable', 'fire-bricks', 'ceramic-fibre-blanket', 'refractory-anchors'],
    body: [
      { type: 'p', text: 'The more clearly you describe your requirement, the faster and more accurate the quotation. Here is a simple checklist to share when you request a quote.' },
      { type: 'h2', text: 'Product and grade' },
      { type: 'ul', items: [
        'Product type (e.g. castable, fire brick, ceramic fibre blanket, anchor)',
        'Any grade, brand or specification you already use',
        'Sizes, thicknesses or dimensions, if known',
      ] },
      { type: 'h2', text: 'Quantity and packaging' },
      { type: 'ul', items: [
        'Required quantity and unit (kg, bags, pieces, rolls, square metres)',
        'Any packaging preferences',
      ] },
      { type: 'h2', text: 'Application and conditions' },
      { type: 'ul', items: [
        'Equipment type and application',
        'Operating temperature, if known',
        'Any special conditions (abrasion, chemistry, cycling)',
      ] },
      { type: 'h2', text: 'Delivery and timeline' },
      { type: 'ul', items: [
        'Delivery location (city and state)',
        'Required delivery timeline',
        'Preferred contact method',
      ] },
      { type: 'p', text: 'You can share all of this in one step using our Request a Quote form, including drawings, BOQs or specification documents.' },
    ],
    seo: {
      title: 'What to Share When Requesting a Refractory Material Quote',
      description:
        'A simple checklist to get an accurate, fast refractory material quotation from Hari Enterprises, Ahmedabad. Product, quantity, application and delivery details.',
    },
  },
];

export const getArticle = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);
