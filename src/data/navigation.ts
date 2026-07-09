/** Primary navigation + footer link groups. Edit here to change site menus. */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'All Products', href: '/products' },
      { label: 'Refractory Castables & Cement', href: '/products?category=castables-cement' },
      { label: 'Fire & Refractory Bricks', href: '/products?category=bricks' },
      { label: 'Ceramic Fibre Products', href: '/products?category=ceramic-fibre' },
      { label: 'Insulation Products', href: '/products?category=insulation' },
      { label: 'Refractory Anchors', href: '/products?category=anchors' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Why Us', href: '/why-hari-enterprises' },
  { label: 'About', href: '/about' },
  { label: 'Clients', href: '/clients' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Why Hari Enterprises', href: '/why-hari-enterprises' },
      { label: 'Clients & Market Presence', href: '/clients' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  products: {
    title: 'Products',
    links: [
      { label: 'Refractory Castables & Cement', href: '/products?category=castables-cement' },
      { label: 'Fire & Refractory Bricks', href: '/products?category=bricks' },
      { label: 'Ceramic Fibre Products', href: '/products?category=ceramic-fibre' },
      { label: 'Insulation Products', href: '/products?category=insulation' },
      { label: 'Refractory Anchors', href: '/products?category=anchors' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Knowledge Centre', href: '/resources' },
      { label: 'Industries & Applications', href: '/industries' },
      { label: 'Request a Quote', href: '/request-a-quote' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
    ],
  },
} as const;
