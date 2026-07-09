import { PageHeader } from '@/components/ui/PageHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { EnquiryForm } from '@/components/EnquiryForm';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { company, telHref, mailHref, whatsappHref } from '@/data/company';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Request a Quote / Send Requirement | Hari Enterprises',
  description:
    'Send your refractory material requirement to Hari Enterprises, Ahmedabad. Share product, quantity, application and delivery details, and attach drawings or a BOQ.',
  path: '/request-a-quote',
});

export default function RequestQuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Request a Quote', path: '/request-a-quote' }])} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Request a Quote' }]} />
      <PageHeader
        eyebrow="Request a Quote / Send Requirement"
        title="Tell us what you need"
        intro="Share your requirement below. The more detail you provide, specification, quantity, application and delivery location, the faster and more accurately we can respond."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <EnquiryForm />
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-lg border border-steel-200 bg-white p-6 shadow-card">
                <h2 className="text-base font-semibold text-ink">Prefer to reach us directly?</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href={telHref} data-analytics="phone-click" className="flex items-center gap-2.5 text-steel-700 hover:text-ember">
                      <Phone className="h-4 w-4 text-firebrick" aria-hidden /> {company.phone.display}
                    </a>
                  </li>
                  <li>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp-click" className="flex items-center gap-2.5 text-steel-700 hover:text-ember">
                      <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden /> WhatsApp us
                    </a>
                  </li>
                  <li>
                    <a href={mailHref} data-analytics="email-click" className="flex items-center gap-2.5 text-steel-700 hover:text-ember">
                      <Mail className="h-4 w-4 text-firebrick" aria-hidden /> {company.email}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-steel-200 bg-steel-50 p-6">
                <h2 className="flex items-center gap-2 text-base font-semibold text-ink">
                  <Clock className="h-4 w-4 text-ember" aria-hidden /> What happens next
                </h2>
                <ol className="mt-4 space-y-3 text-sm text-steel-600">
                  <li className="flex gap-2"><span className="font-mono text-ember">1.</span> We review your requirement.</li>
                  <li className="flex gap-2"><span className="font-mono text-ember">2.</span> We source suitable material and confirm availability.</li>
                  <li className="flex gap-2"><span className="font-mono text-ember">3.</span> We respond with commercial details.</li>
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
