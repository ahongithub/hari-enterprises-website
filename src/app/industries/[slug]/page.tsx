import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, ArrowRight } from 'lucide-react';
import { industries, getIndustry } from '@/data/industries';
import { getCategory, getProductsByCategory } from '@/data/products';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ProductCard';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ind = getIndustry(params.slug);
  if (!ind) return buildMetadata({ title: 'Not found', noIndex: true });
  return buildMetadata({
    title: ind.seo.title,
    description: ind.seo.description,
    path: `/industries/${ind.slug}`,
  });
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const ind = getIndustry(params.slug);
  if (!ind) notFound();

  const relatedCategories = ind.materials.map(getCategory).filter(Boolean);
  const sampleProducts = ind.materials
    .flatMap((id) => getProductsByCategory(id).slice(0, 1))
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
          { name: ind.name, path: `/industries/${ind.slug}` },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: ind.name },
        ]}
      />
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Industry &amp; Application</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{ind.seo.h1}</h1>
          <p className="mt-4 text-lg leading-8 text-steel-600">{ind.challenge}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-ink">Selection considerations</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {ind.considerations.map((c) => (
                <li key={c} className="flex gap-2.5 text-[15px] text-steel-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-semibold text-ink">Relevant material categories</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {relatedCategories.map((c) =>
                c ? (
                  <Link
                    key={c.id}
                    href={`/products?category=${c.id}`}
                    className="inline-flex items-center gap-1 rounded-full border border-steel-300 bg-white px-4 py-2 text-sm font-medium text-ink hover:border-ink"
                  >
                    {c.name} <ArrowRight className="h-3.5 w-3.5 text-ember" aria-hidden />
                  </Link>
                ) : null,
              )}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-lg border border-steel-200 bg-ink p-6 text-white">
              <h2 className="text-base font-semibold text-white">Discuss your requirement</h2>
              <p className="mt-2 text-sm leading-6 text-steel-300">
                Share your equipment, temperature and conditions and we will help identify suitable
                materials.
              </p>
              <Button href="/request-a-quote" className="mt-4 w-full">
                Request a Quote
              </Button>
            </div>
          </aside>
        </div>

        {sampleProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-ink">Products often used here</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sampleProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </Section>
      <CtaBand />
    </>
  );
}
