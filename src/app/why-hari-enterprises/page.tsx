import { Search, PackageSearch, MessageSquareReply, Truck, Handshake, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Accordion } from '@/components/ui/Accordion';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { company } from '@/data/company';
import { formatYearsSinceLabel } from '@/data/company-helpers';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Why Hari Enterprises, Our Capabilities | Refractory Supply Partner',
  description:
    'Why industrial buyers choose Hari Enterprises for refractory materials: requirement understanding, reliable sourcing, responsive coordination and dependable fulfilment.',
  path: '/why-hari-enterprises',
});

const capabilities = [
  { icon: Search, title: 'Requirement Understanding', body: 'We take time to understand your application, specification and operating conditions before recommending anything.' },
  { icon: PackageSearch, title: 'Reliable Sourcing', body: 'An established supplier network lets us source the right material and grade, across a broad portfolio.' },
  { icon: MessageSquareReply, title: 'Commercial Responsiveness', body: 'Timely, clear responses on availability, pricing and terms, so procurement decisions do not stall.' },
  { icon: Truck, title: 'Coordinated Fulfilment', body: 'We coordinate supply and delivery through our supplier and logistics network to your location.' },
  { icon: Handshake, title: 'Relationship-Led Service', body: 'We aim to be a dependable long-term partner for repeat and future requirements.' },
  { icon: ShieldCheck, title: 'Accurate Information', body: 'Straightforward, honest information about what we can supply and how, no over-promising.' },
];

const reasons = [
  `Active in the refractory-material business since ${company.establishedYear}, ${formatYearsSinceLabel(company.establishedYear)} years of relationships and know-how.`,
  'Broad portfolio spanning castables, bricks, ceramic fibre, insulation and anchors.',
  'Based in Ahmedabad with a Gujarat focus and Pan-India supply capability where feasible.',
  'Requirement-based, application-led approach rather than a fixed catalogue.',
  'Responsive communication across phone, email and WhatsApp.',
  'A trusted owned digital presence alongside an established IndiaMART profile.',
];

const faqs = [
  { q: 'Is Hari Enterprises a manufacturer?', a: 'No. Hari Enterprises is a B2B trading and supply business. We source refractory materials through an established supplier network and coordinate commercial execution and delivery to our customers.' },
  { q: 'Which areas do you supply?', a: 'Our primary market is Gujarat, with supply to customers across India wherever it is commercially and operationally feasible. Share your delivery location and we will confirm.' },
  { q: 'Can you help if I know the problem but not the product?', a: 'Yes. If you describe your equipment, application and operating conditions, we can help you identify suitable material categories and grades, then source them for your requirement.' },
  { q: 'How do I get pricing?', a: 'Pricing depends on the material, grade, quantity and delivery location. Send your requirement through our Request a Quote form, or call or WhatsApp us, and we will respond with availability and commercial details.' },
  { q: 'What information should I share for a quote?', a: 'Product type, any grade or specification, quantity and unit, application, delivery location and timeline. You can also attach drawings, a BOQ or a specification document to the enquiry form.' },
];

export default function WhyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Why Hari Enterprises', path: '/why-hari-enterprises' }]),
          faqSchema(faqs),
        ]}
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Why Hari Enterprises' }]} />
      <PageHeader
        eyebrow="Why Hari Enterprises / Our Capabilities"
        title="Dependable sourcing, responsive coordination"
        intro="The real difference in refractory buying is not just the product, it is how reliably it is sourced, coordinated and delivered. That is where we focus."
      />

      <Section>
        <Eyebrow>Our capabilities</Eyebrow>
        <h2 className="mt-3 text-2xl font-semibold text-ink">What we bring to your procurement</h2>
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded border border-steel-200 bg-white text-ember shadow-ring">
                <c.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-steel-600">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-steel-50 !pt-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Reasons to choose us</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-ink">Reasons industrial buyers work with us</h2>
            <ul className="mt-6 space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex gap-3 text-[15px] leading-7 text-steel-700">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Common questions</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-ink">Frequently asked</h2>
            <div className="mt-6">
              <Accordion items={faqs} />
            </div>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
