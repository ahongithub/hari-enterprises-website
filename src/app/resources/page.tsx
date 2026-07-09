import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { articles } from '@/data/articles';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Refractory Knowledge Centre — Guides & Buyer Resources | Hari Enterprises',
  description:
    'Practical, vendor-neutral guides on refractory materials — selection, castables vs bricks, ceramic fibre, anchors, failure causes and how to request a quote.',
  path: '/resources',
});

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources' }])} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />
      <PageHeader
        eyebrow="Knowledge Centre"
        title="Practical guidance for refractory buyers"
        intro="Vendor-neutral articles to help you specify, compare and buy refractory materials with confidence."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/resources/${a.slug}`}
              className="group flex flex-col rounded-lg border border-steel-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="font-mono text-2xs uppercase tracking-wide text-ember">{a.category}</span>
              <h2 className="mt-2 text-lg font-semibold text-ink group-hover:text-ember">{a.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-steel-600">{a.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-steel-500">
                  <Clock className="h-3.5 w-3.5" aria-hidden /> {a.readMinutes} min read
                </span>
                <ArrowRight className="h-4 w-4 text-steel-300 group-hover:text-ember" aria-hidden />
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
