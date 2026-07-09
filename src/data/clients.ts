/**
 * Selected organisations served.
 * ⚠️  Names are presented as text-based cards. No third-party logos are
 * fabricated. If you obtain permission to use a client's logo, add the file to
 * /public/images/clients and set `logo` to its path (e.g. '/images/clients/xyz.png').
 * Verify exact spelling/entity naming before publishing any client.
 */

export interface Client {
  name: string;
  /** Optional logo path once permission is obtained; otherwise a text card is shown. */
  logo?: string;
  /** Short neutral descriptor (industry/type) — no endorsement implied. */
  sector?: string;
}

export const clients: Client[] = [
  { name: 'Aditya Birla Insulators', sector: 'Insulators & Ceramics' },
  { name: 'BTV Limited (Bharat Tanks and Vessels LLP)', sector: 'Process Equipment' },
  { name: 'FAB Industries', sector: 'Fabrication' },
  { name: 'Fry-Tech Food Equipments', sector: 'Food Processing Equipment' },
  { name: 'ISGEC Hitachi Zosen Ltd.', sector: 'Heavy Engineering & EPC' },
  { name: 'Dream Tech Group Machinery Equipment Pvt. Ltd.', sector: 'Machinery & Equipment' },
  { name: 'Nishan Exports', sector: 'Exports & Manufacturing' },
  { name: 'Sun Energy System', sector: 'Energy Systems' },
];

/** Legally cautious note shown alongside the client list. */
export const clientsDisclaimer =
  'Names and marks shown are the property of their respective owners and are presented solely to indicate organisations served, where applicable. No endorsement or formal partnership is implied.';
