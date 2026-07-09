import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { industries } from '@/data/industries';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Industries & Applications for Refractory Materials | Hari Enterprises',
  description:
    'Find refractory materials by industry and application, foundries, kilns, boilers, cement, chemical, power and heat-treatment. Guidance from Hari Enterprises, Ahmedabad.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries' }])} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries' }]} />
      <PageHeader
        eyebrow="Industries & Applications"
        title="Applications supported by our product portfolio"
        intro="If you know the equipment or the problem but not the exact product, these pages help you connect your application to suitable refractory material categories."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex flex-col rounded-lg border border-steel-200 bg-white p-7 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <h2 className="text-xl font-semibold text-ink group-hover:text-ember">{ind.name}</h2>
              <p className="mt-2 flex-1 text-[15px] leading-7 text-steel-600">{ind.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ember">
                View guidance <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
