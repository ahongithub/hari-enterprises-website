import Image from 'next/image';
import { PageHeader } from '@/components/ui/PageHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { company } from '@/data/company';
import { formatYearsSinceLabel } from '@/data/company-helpers';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Hari Enterprises — Refractory Sourcing & Supply, Ahmedabad',
  description:
    'Hari Enterprises is an Ahmedabad-based B2B refractory material sourcing and supply business, active since 2005, serving industrial buyers across Gujarat and India.',
  path: '/about',
});

const values = [
  { title: 'Reliability', body: 'We do what we say — on availability, timelines and follow-through.' },
  { title: 'Responsiveness', body: 'Clear, timely communication keeps your procurement moving.' },
  { title: 'Integrity', body: 'Straightforward dealing and accurate information, every time.' },
  { title: 'Relationships', body: 'We invest in long-term partnerships, not one-off transactions.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <PageHeader
        eyebrow="About Us"
        title="An established refractory sourcing and supply partner"
        intro={`Based in Ahmedabad and active in the refractory-material business since ${company.establishedYear}, Hari Enterprises helps industrial buyers source the materials they need with dependable coordination.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-hari">
            <h2>Who we are</h2>
            <p>
              Hari Enterprises is a business-to-business trading and supply company dealing in refractory
              materials and allied industrial products. From our base in Ahmedabad, Gujarat, we serve
              procurement and maintenance teams, plant heads, fabricators and EPC contractors who need
              reliable access to castables, fire bricks, ceramic fibre, insulation and refractory anchors.
            </p>
            <p>
              We are not a manufacturer. Our role — and our value — is in understanding a requirement,
              sourcing the right material through an established supplier network, and coordinating
              commercial execution and delivery so our customers can get on with running their plants.
            </p>
            <h2>Our approach</h2>
            <p>
              Good refractory buying is rarely just about a product name. It depends on the application,
              the operating conditions and the timeline. We start by understanding the requirement, then
              draw on our supplier relationships to source suitable material and confirm availability,
              pricing and terms. From there we coordinate delivery to the customer&apos;s location and stay
              available for repeat requirements.
            </p>
            <h2>Our journey</h2>
            <p>
              What began in {company.establishedYear} has grown, through {formatYearsSinceLabel(company.establishedYear)}{' '}
              years of industry relationships, into a dependable supply partner for businesses across
              Gujarat and — where commercially and operationally feasible — the wider Indian market. Our
              presence on IndiaMART complements this website as a discovery and trust channel.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-steel-200 bg-steel-50 p-6">
              <Eyebrow>Mission</Eyebrow>
              <p className="mt-3 text-[15px] leading-7 text-steel-700">
                To help industrial buyers source refractory materials dependably — with responsive
                coordination, accurate information and reliable fulfilment.
              </p>
            </div>
            <div className="rounded-lg border border-steel-200 bg-steel-50 p-6">
              <Eyebrow>Vision</Eyebrow>
              <p className="mt-3 text-[15px] leading-7 text-steel-700">
                To be a trusted, professionally managed refractory sourcing and industrial supply partner,
                known for responsiveness, dependable execution and long-term customer relationships.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <Eyebrow>Core values</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold text-ink">What guides how we work</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-steel-200 bg-white p-6 shadow-card">
                <h3 className="text-base font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-steel-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
