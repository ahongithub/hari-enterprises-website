import { PageHeader } from '@/components/ui/PageHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ClientCard } from '@/components/ClientCard';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { clients, clientsDisclaimer } from '@/data/clients';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Clients & Market Presence | Hari Enterprises',
  description:
    'Selected organisations served by Hari Enterprises across diverse industrial businesses. Refractory material sourcing and supply from Ahmedabad, Gujarat.',
  path: '/clients',
});

export default function ClientsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Clients', path: '/clients' }])} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Clients' }]} />
      <PageHeader
        eyebrow="Clients & Market Presence"
        title="Experience supporting industrial requirements across diverse businesses"
        intro="Over the years, we have supplied and coordinated refractory material requirements for a range of organisations — from heavy engineering to food and energy equipment."
      />
      <Section>
        <Eyebrow>Selected organisations served</Eyebrow>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <ClientCard key={c.name} client={c} />
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-5 text-steel-400">{clientsDisclaimer}</p>
      </Section>
      <CtaBand />
    </>
  );
}
