/**
 * Selected organisations served. Source of truth: the company's Clients document.
 * Logos are the actual marks supplied in that document, presented on neutral cards
 * with object-contain (no stretching, no fabricated logos).
 */

export interface Client {
  name: string;
  logo?: string;
  sector?: string;
}

export const clients: Client[] = [
  { name: 'Aditya Birla Insulators', logo: '/images/clients/client-aditya-birla-insulators.webp', sector: 'Insulators & Ceramics' },
  { name: 'BTV Limited (Bharat Tanks and Vessels)', logo: '/images/clients/client-btv-limited.webp', sector: 'Process Equipment' },
  { name: 'FAB Industries', logo: '/images/clients/client-fab-industries.webp', sector: 'Fabrication' },
  { name: 'Fry-Tech Food Equipment', logo: '/images/clients/client-frytech-food-equipment.webp', sector: 'Food Processing Equipment' },
  { name: 'ISGEC Hitachi Zosen Limited', logo: '/images/clients/client-isgec-hitachi-zosen.webp', sector: 'Heavy Engineering & EPC' },
  { name: 'Sun Energy System', logo: '/images/clients/client-sun-energy-system.webp', sector: 'Energy Systems' },
];

export const clientsDisclaimer =
  'Company names and trademarks shown are the property of their respective owners and are presented solely to identify organisations served. No endorsement or formal partnership is implied.';
