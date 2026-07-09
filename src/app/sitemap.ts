import type { MetadataRoute } from 'next';
import { siteUrl } from '@/data/seo';
import { products } from '@/data/products';
import { industries } from '@/data/industries';
import { articles } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    { path: '/', priority: 1.0, freq: 'weekly' as const },
    { path: '/products', priority: 0.9, freq: 'weekly' as const },
    { path: '/industries', priority: 0.8, freq: 'monthly' as const },
    { path: '/why-hari-enterprises', priority: 0.7, freq: 'monthly' as const },
    { path: '/about', priority: 0.7, freq: 'monthly' as const },
    { path: '/leadership', priority: 0.6, freq: 'yearly' as const },
    { path: '/clients', priority: 0.6, freq: 'monthly' as const },
    { path: '/resources', priority: 0.7, freq: 'weekly' as const },
    { path: '/request-a-quote', priority: 0.9, freq: 'monthly' as const },
    { path: '/contact', priority: 0.8, freq: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, freq: 'yearly' as const },
    { path: '/terms-of-use', priority: 0.3, freq: 'yearly' as const },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((s) => ({
    url: `${siteUrl}${s.path === '/' ? '' : s.path}`,
    lastModified: now,
    changeFrequency: s.freq,
    priority: s.priority,
  }));

  for (const p of products)
    entries.push({ url: `${siteUrl}/products/${p.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 });
  for (const i of industries)
    entries.push({ url: `${siteUrl}/industries/${i.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 });
  for (const a of articles)
    entries.push({ url: `${siteUrl}/resources/${a.slug}`, lastModified: new Date(a.updated), changeFrequency: 'monthly', priority: 0.6 });

  return entries;
}
