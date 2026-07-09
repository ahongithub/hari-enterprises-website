import { company } from '@/data/company';
import { siteUrl } from '@/data/seo';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    email: company.email,
    telephone: company.phone.e164,
    foundingDate: String(company.establishedYear),
    founder: { '@type': 'Person', name: company.founder.name, jobTitle: company.founder.title },
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.office.lines.join(', '),
      addressLocality: company.address.office.city,
      addressRegion: company.address.office.state,
      postalCode: company.address.office.postalCode,
      addressCountry: 'IN',
    },
    sameAs: [company.indiamartUrl, ...Object.values(company.social).filter(Boolean)],
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: company.name,
    image: `${siteUrl}/images/logo.png`,
    url: siteUrl,
    telephone: company.phone.e164,
    email: company.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.office.lines.join(', '),
      addressLocality: company.address.office.city,
      addressRegion: company.address.office.state,
      postalCode: company.address.office.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.address.office.geo.lat,
      longitude: company.address.office.geo.lng,
    },
    areaServed: [
      { '@type': 'State', name: 'Gujarat' },
      { '@type': 'Country', name: 'India' },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${siteUrl}${it.path}`,
    })),
  };
}

export function productSchema(p: { name: string; description: string; image: string; slug: string; category: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    image: `${siteUrl}${p.image}`,
    category: p.category,
    url: `${siteUrl}/products/${p.slug}`,
    brand: { '@type': 'Brand', name: company.name },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: { '@type': 'Organization', name: company.name },
      // Price on enquiry — no fabricated figure.
      url: `${siteUrl}/products/${p.slug}`,
    },
  };
}

export function articleSchema(a: { title: string; description: string; slug: string; updated: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    datePublished: a.updated,
    dateModified: a.updated,
    author: { '@type': 'Organization', name: company.name },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo.png` },
    },
    mainEntityOfPage: `${siteUrl}/resources/${a.slug}`,
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}
