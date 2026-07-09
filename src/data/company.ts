/**
 * Central company information.
 * ⚠️  This is the single source of truth for all contact details, addresses and
 * leadership information shown across the site. Edit values here only.
 */

export const company = {
  name: 'Hari Enterprises',
  legalName: 'Hari Enterprises',
  tagline: 'Dealing in Refractory Products',
  // Public-facing positioning line
  positioning:
    'Refractory material sourcing & supply partner for industrial buyers across Gujarat and India.',
  descriptionShort:
    'Ahmedabad-based B2B supplier of refractory materials, castables, fire bricks, ceramic fibre, insulation and refractory anchors, backed by an established supplier network and responsive commercial coordination.',
  establishedYear: 2005,

  phone: {
    display: '+91 95588 19332',
    e164: '+919558819332',
    // Digits only, for tel: and wa.me links
    tel: '919558819332',
  },
  whatsapp: {
    enabled: true,
    number: '919558819332',
    defaultMessage:
      'Hello Hari Enterprises, I would like to enquire about refractory materials.',
  },
  email: 'jharidwari@gmail.com',

  indiamartUrl: 'https://www.indiamart.com/harienterprises-ahmedabad/',

  address: {
    office: {
      label: 'Office',
      lines: [
        '13, Jay Laxmi Society, Nr. Vallabh Park',
        "'D' Cabin Road, Sabarmati",
        'Ahmedabad, Gujarat – 380019',
      ],
      city: 'Ahmedabad',
      state: 'Gujarat',
      postalCode: '380019',
      country: 'India',
      // Approx. Sabarmati, Ahmedabad, update with the exact pin when a GMB
      // listing is created (see LOCAL_SEO_PLAN.md).
      geo: { lat: 23.0834, lng: 72.5806 },
    },
    godown: {
      label: 'Godown / Warehouse',
      lines: [
        '10, Shree Harikrupa Industrial Park, Hathijan Circle',
        'Nr. Ramol Over Bridge – Express Highway',
        'Vatva, Ahmedabad, Gujarat',
      ],
    },
  },

  // Primary and broader markets
  markets: {
    primary: 'Gujarat',
    broader: 'Serving industrial buyers across India',
  },

  // Social profiles, leave empty strings if not available; footer hides empties.
  social: {
    linkedin: '',
    facebook: '',
    instagram: '',
    youtube: '',
  },

  founder: {
    name: 'Jitendra Haridwari',
    shortName: 'Mr. Jitendra Haridwari',
    title: 'Founder & Director',
    qualification: 'MBA in Marketing',
    experienceYears: 26,
    inDomainSince: 2005,
    portrait: '/images/leadership/jitendra-haridwari-founder-director.webp',
    portraitAlt: 'Portrait of Mr. Jitendra Haridwari, Founder & Director of Hari Enterprises',
  },
} as const;

export type Company = typeof company;

/** Helpers used across CTAs. */
export const telHref = `tel:+${company.phone.tel}`;
export const mailHref = `mailto:${company.email}`;
export const whatsappHref = `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(
  company.whatsapp.defaultMessage,
)}`;
