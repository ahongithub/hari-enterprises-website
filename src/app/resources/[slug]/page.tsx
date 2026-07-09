import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Clock } from 'lucide-react';
import { articles, getArticle } from '@/data/articles';
import { getProduct } from '@/data/products';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ProductCard } from '@/components/ProductCard';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return buildMetadata({ title: 'Not found', noIndex: true });
  return buildMetadata({
    title: `${a.seo.title} | Hari Enterprises`,
    description: a.seo.description,
    path: `/resources/${a.slug}`,
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();
  const related = a.relatedProducts.map(getProduct).filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ title: a.title, description: a.seo.description, slug: a.slug, updated: a.updated }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/resources' },
            { name: a.title, path: `/resources/${a.slug}` },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: a.title },
        ]}
      />
      <Section className="!pb-12">
        <article className="mx-auto max-w-3xl">
          <Eyebrow>{a.category}</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-[2.5rem]">{a.title}</h1>
          <p className="mt-4 flex items-center gap-1 font-mono text-2xs uppercase tracking-wide text-steel-500">
            <Clock className="h-3.5 w-3.5" aria-hidden /> {a.readMinutes} min read
          </p>
          <div className="prose-hari mt-8">
            {a.body.map((block, i) => {
              if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
              if (block.type === 'ul')
                return (
                  <ul key={i}>
                    {block.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </div>
          <div className="mt-10 rounded-lg border border-steel-200 bg-steel-50 p-6">
            <p className="text-sm text-steel-600">
              Have a specific requirement?{' '}
              <Link href="/request-a-quote" className="font-medium text-ember hover:underline">
                Request a quote
              </Link>{' '}
              and our team will help you source suitable material.
            </p>
          </div>
        </article>
      </Section>

      {related.length > 0 && (
        <Section className="bg-steel-50 !pt-14">
          <Eyebrow>Related products</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold text-ink">Products mentioned in this guide</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => p && <ProductCard key={p.slug} product={p} />)}
          </div>
        </Section>
      )}
      <CtaBand />
    </>
  );
}
