import type { Metadata } from 'next';
import { seoDefaults, siteUrl } from '@/data/seo';

interface BuildMetaArgs {
  title?: string;
  description?: string;
  path?: string; // e.g. '/products'
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/** Central metadata builder — reused by every page for consistent SEO tags. */
export function buildMetadata({
  title,
  description,
  path = '/',
  ogImage,
  noIndex = false,
  keywords,
}: BuildMetaArgs = {}): Metadata {
  const url = `${siteUrl}${path === '/' ? '' : path}`;
  const resolvedTitle = title ?? seoDefaults.defaultTitle;
  const resolvedDescription = description ?? seoDefaults.defaultDescription;
  const image = ogImage ?? seoDefaults.defaultOgImage;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: keywords ?? seoDefaults.keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      type: 'website',
      siteName: seoDefaults.siteName,
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      locale: seoDefaults.locale,
      images: [{ url: image, width: 1200, height: 630, alt: seoDefaults.siteName }],
    },
    twitter: {
      card: seoDefaults.twitterCard,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [image],
    },
  };
}
