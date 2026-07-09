import { Suspense } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/CtaBand';
import { ProductBrowser } from '@/components/ProductBrowser';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { products, categories } from '@/data/products';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Refractory Products, Castables, Fire Bricks, Ceramic Fibre & Anchors | Hari Enterprises',
  description:
    'Explore the refractory-material portfolio supplied by Hari Enterprises, Ahmedabad: castables & cement, fire & refractory bricks, ceramic fibre, insulation and refractory anchors.',
  path: '/products',
});

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }])} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />
      <PageHeader
        eyebrow="Product Portfolio"
        title="Refractory materials for high-temperature industry"
        intro="A broad, application-driven portfolio, sourced to match your specification, grade and requirement. Filter by category or search to find what you need."
      />
      <Section>
        <Suspense>
          <ProductBrowser products={products} categories={categories} initialCategory={searchParams.category} />
        </Suspense>
      </Section>
      <CtaBand />
    </>
  );
}
