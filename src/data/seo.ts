/** Site-wide SEO defaults. Set NEXT_PUBLIC_SITE_URL in the environment for production. */
import { company } from './company';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.harienterprises.co.in').replace(
  /\/$/,
  '',
);

export const seoDefaults = {
  siteName: company.name,
  titleTemplate: `%s | ${company.name}`,
  defaultTitle: `${company.name} — Refractory Material Supplier in Ahmedabad, Gujarat`,
  defaultDescription:
    'Hari Enterprises is an Ahmedabad-based B2B supplier of refractory materials — castables, fire bricks, ceramic fibre, insulation and refractory anchors — serving industrial buyers across Gujarat and India since 2005.',
  defaultOgImage: '/images/og/og-default.svg',
  locale: 'en_IN',
  twitterCard: 'summary_large_image' as const,
  keywords: [
    'refractory material supplier Ahmedabad',
    'refractory material supplier Gujarat',
    'fire brick supplier Ahmedabad',
    'refractory brick supplier Gujarat',
    'castable refractory supplier',
    'ceramic fibre blanket supplier',
    'refractory anchor supplier',
    'industrial refractory materials India',
  ],
};
