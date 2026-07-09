/** Industries & applications. Each maps refractory challenges to relevant material categories. */

export interface Industry {
  slug: string;
  name: string;
  summary: string;
  challenge: string;
  materials: string[]; // category ids from products.ts
  considerations: string[];
  image: string;
  seo: { title: string; description: string; h1: string };
}

export const industries: Industry[] = [
  {
    slug: 'foundry-metal-casting',
    name: 'Foundry & Metal Casting',
    summary:
      'Melting, holding and pouring metal demands linings that resist heat, thermal cycling and metal or slag contact.',
    challenge:
      'Furnaces, ladles and launders in foundries face intense heat, repeated thermal cycling and contact with molten metal and slag. Linings must resist wear and chemical attack while keeping heat losses in check.',
    materials: ['castables-cement', 'bricks', 'anchors', 'ceramic-fibre'],
    considerations: [
      'Operating temperature and the metal being handled',
      'Abrasion and slag/chemical attack in the hot face',
      'Thermal cycling and shock resistance',
      'Anchoring for monolithic linings',
    ],
    image: '/images/hero/industry-foundry.svg',
    seo: {
      title: 'Refractory Materials for Foundries & Metal Casting, Hari Enterprises',
      description:
        'Castables, fire bricks, ceramic fibre and refractory anchors for foundry and metal-casting furnaces, ladles and launders. Supplied by Hari Enterprises, Ahmedabad.',
      h1: 'Refractory Materials for Foundry & Metal Casting',
    },
  },
  {
    slug: 'ceramics-kilns',
    name: 'Ceramics & Kilns',
    summary:
      'Kilns need efficient, stable linings that hold temperature and reduce fuel consumption cycle after cycle.',
    challenge:
      'Ceramic and brick kilns run long, repeated firing cycles. Linings must hold temperature efficiently, resist thermal shock and keep shell temperatures and fuel use down.',
    materials: ['bricks', 'ceramic-fibre', 'castables-cement'],
    considerations: [
      'Firing temperature and cycle length',
      'Energy efficiency and heat storage',
      'Thermal-shock resistance',
      'Insulating back-up to lower heat loss',
    ],
    image: '/images/hero/industry-kiln.svg',
    seo: {
      title: 'Refractory Materials for Ceramics & Kilns, Hari Enterprises',
      description:
        'Fire bricks, insulating bricks and ceramic fibre for ceramic and brick kilns. Supplied by Hari Enterprises, Ahmedabad. Send your kiln lining requirement.',
      h1: 'Refractory Materials for Ceramics & Kilns',
    },
  },
  {
    slug: 'boilers-heaters',
    name: 'Boilers & Heaters',
    summary:
      'Boilers, heaters and ducts need reliable insulation and linings to control heat loss and surface temperature.',
    challenge:
      'Industrial boilers, heaters and ducting must contain heat safely and efficiently. The right mix of linings and insulation controls heat loss, protects the shell and keeps surface temperatures safe.',
    materials: ['insulation', 'ceramic-fibre', 'castables-cement', 'bricks'],
    considerations: [
      'Continuous vs. cyclic operation',
      'Surface-temperature and safety limits',
      'Insulation thickness and heat-loss targets',
      'Ease of maintenance and repair',
    ],
    image: '/images/hero/industry-boiler.svg',
    seo: {
      title: 'Refractory & Insulation for Boilers & Heaters, Hari Enterprises',
      description:
        'Insulation, ceramic fibre and castable linings for industrial boilers, heaters and ducts. Supplied by Hari Enterprises, Ahmedabad. Request your requirement.',
      h1: 'Refractory & Insulation for Boilers & Heaters',
    },
  },
  {
    slug: 'cement-lime',
    name: 'Cement & Lime',
    summary:
      'High-temperature, high-abrasion process equipment needs dense, durable linings and reliable anchoring.',
    challenge:
      'Cement and lime process equipment runs hot and abrasive. Linings must resist high temperature, abrasion and chemical attack while staying anchored to the shell over long campaigns.',
    materials: ['castables-cement', 'bricks', 'anchors'],
    considerations: [
      'High temperature and abrasion resistance',
      'Chemical/alkali attack resistance',
      'Robust anchoring for long campaigns',
      'Fast, reliable installation and repair',
    ],
    image: '/images/hero/industry-cement.svg',
    seo: {
      title: 'Refractory Materials for Cement & Lime, Hari Enterprises',
      description:
        'Dense castables, high-alumina bricks and refractory anchors for cement and lime process equipment. Supplied by Hari Enterprises, Ahmedabad.',
      h1: 'Refractory Materials for Cement & Lime',
    },
  },
  {
    slug: 'chemical-process',
    name: 'Chemical & Process',
    summary:
      'Reactors, heaters and vessels need insulation and linings matched to temperature and process chemistry.',
    challenge:
      'Chemical and process plants run vessels, heaters and reactors across a wide temperature range. Insulation and linings must be matched carefully to temperature and process conditions.',
    materials: ['insulation', 'ceramic-fibre', 'castables-cement'],
    considerations: [
      'Process temperature range',
      'Insulation performance and heat-loss control',
      'Compatibility with process conditions',
      'Maintenance access and turnaround needs',
    ],
    image: '/images/hero/industry-chemical.svg',
    seo: {
      title: 'Refractory & Insulation for Chemical & Process Plants, Hari Enterprises',
      description:
        'Insulation, ceramic fibre and castable linings for chemical and process equipment. Supplied by Hari Enterprises, Ahmedabad. Send your requirement.',
      h1: 'Refractory & Insulation for Chemical & Process',
    },
  },
  {
    slug: 'power-utilities',
    name: 'Power & Utilities',
    summary:
      'Power and utility plant equipment needs dependable insulation and linings for efficiency and safety.',
    challenge:
      'Power and utility installations rely on efficient, safe thermal management. Insulation and refractory linings help maintain efficiency, protect equipment and control surface temperatures.',
    materials: ['insulation', 'ceramic-fibre', 'castables-cement', 'anchors'],
    considerations: [
      'Efficiency and heat-loss control',
      'Reliability over long service periods',
      'Surface-temperature and safety limits',
      'Planned-maintenance compatibility',
    ],
    image: '/images/hero/industry-power.svg',
    seo: {
      title: 'Refractory & Insulation for Power & Utilities, Hari Enterprises',
      description:
        'Insulation and refractory materials for power and utility plant equipment. Supplied by Hari Enterprises, Ahmedabad. Request your requirement.',
      h1: 'Refractory & Insulation for Power & Utilities',
    },
  },
  {
    slug: 'thermal-processing',
    name: 'Thermal Processing & Heat Treatment',
    summary:
      'Heat-treatment furnaces and thermal equipment need stable, efficient linings and insulation.',
    challenge:
      'Heat-treatment and thermal-processing furnaces demand accurate, stable temperatures. Efficient linings and insulation help hold temperature, save energy and protect equipment.',
    materials: ['ceramic-fibre', 'bricks', 'castables-cement', 'insulation'],
    considerations: [
      'Temperature accuracy and stability',
      'Low heat storage for faster cycling',
      'Energy efficiency',
      'Durability under repeated cycling',
    ],
    image: '/images/hero/industry-thermal.svg',
    seo: {
      title: 'Refractory Materials for Thermal Processing & Heat Treatment, Hari Enterprises',
      description:
        'Ceramic fibre, bricks and castables for heat-treatment and thermal-processing furnaces. Supplied by Hari Enterprises, Ahmedabad.',
      h1: 'Refractory Materials for Thermal Processing & Heat Treatment',
    },
  },
];

export const getIndustry = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);
