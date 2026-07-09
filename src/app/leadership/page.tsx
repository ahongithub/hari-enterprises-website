import Image from 'next/image';
import { PageHeader } from '@/components/ui/PageHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { company } from '@/data/company';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: `${company.founder.name}, ${company.founder.title} | Hari Enterprises`,
  description: `${company.founder.name}, ${company.founder.title} of Hari Enterprises. ${company.founder.qualification}, with over ${company.founder.experienceYears} years of marketing and business experience in the refractory-material domain since ${company.founder.inDomainSince}.`,
  path: '/leadership',
});

export default function LeadershipPage() {
  const f = company.founder;
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Leadership', path: '/leadership' }])} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leadership' }]} />
      <PageHeader eyebrow="Leadership" title="The experience behind Hari Enterprises" />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-steel-200 shadow-card">
              <Image
                src={f.portrait}
                alt={f.portraitAlt}
                fill
                sizes="(max-width:1024px) 80vw, 33vw"
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-4 rounded-lg border border-steel-200 bg-steel-50 p-5">
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-mono text-2xs uppercase tracking-wide text-steel-500">Role</dt>
                  <dd className="text-ink">{f.title}</dd>
                </div>
                <div>
                  <dt className="font-mono text-2xs uppercase tracking-wide text-steel-500">Education</dt>
                  <dd className="text-ink">{f.qualification}</dd>
                </div>
                <div>
                  <dt className="font-mono text-2xs uppercase tracking-wide text-steel-500">Experience</dt>
                  <dd className="text-ink">{f.experienceYears}+ years in marketing &amp; business</dd>
                </div>
                <div>
                  <dt className="font-mono text-2xs uppercase tracking-wide text-steel-500">In this domain since</dt>
                  <dd className="text-ink">{f.inDomainSince}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Eyebrow>{f.title}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-ink">{f.name}</h2>
            <div className="prose-hari mt-6">
              <p>
                {f.name} is the {f.title} of Hari Enterprises. An {f.qualification}, he has spent over{' '}
                {f.experienceYears} years in marketing and business development, and has been active in
                the refractory-material business since {f.inDomainSince}.
              </p>
              <p>
                Over that time he has built Hari Enterprises around a simple idea: that industrial buyers
                value a supplier who understands their requirement, responds quickly and delivers
                reliably. His focus has been on developing long-standing industry relationships,
                strengthening the company&apos;s sourcing capability and ensuring that commercial
                coordination is handled with care.
              </p>
              <p>
                That combination of commercial understanding and customer orientation continues to shape
                how the company works today, responsive, dependable and relationship-led.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
