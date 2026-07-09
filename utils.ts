import { PageHeader } from '@/components/ui/PageHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { EnquiryForm } from '@/components/EnquiryForm';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Phone, Mail, MessageCircle, MapPin, Warehouse, ExternalLink } from 'lucide-react';
import { company, telHref, mailHref, whatsappHref } from '@/data/company';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact Hari Enterprises — Ahmedabad, Gujarat',
  description:
    'Contact Hari Enterprises for refractory materials. Call +91 95588 19332, WhatsApp, email jharidwari@gmail.com, or visit us in Sabarmati, Ahmedabad. Godown in Vatva.',
  path: '/contact',
});

const mapQuery = encodeURIComponent(
  `${company.address.office.lines.join(', ')}`,
);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <PageHeader
        eyebrow="Contact Us"
        title="Let's discuss your requirement"
        intro="Reach us by phone, WhatsApp or email, or send your requirement through the form. We are based in Ahmedabad and supply across Gujarat and India."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Contact details */}
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a href={telHref} data-analytics="phone-click"
                className="flex items-start gap-3 rounded-lg border border-steel-200 bg-white p-5 shadow-card hover:border-ink">
                <Phone className="mt-0.5 h-5 w-5 text-ember" aria-hidden />
                <span>
                  <span className="block font-mono text-2xs uppercase tracking-wide text-steel-500">Call</span>
                  <span className="text-ink">{company.phone.display}</span>
                </span>
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp-click"
                className="flex items-start gap-3 rounded-lg border border-steel-200 bg-white p-5 shadow-card hover:border-ink">
                <MessageCircle className="mt-0.5 h-5 w-5 text-[#25D366]" aria-hidden />
                <span>
                  <span className="block font-mono text-2xs uppercase tracking-wide text-steel-500">WhatsApp</span>
                  <span className="text-ink">{company.phone.display}</span>
                </span>
              </a>
              <a href={mailHref} data-analytics="email-click"
                className="flex items-start gap-3 rounded-lg border border-steel-200 bg-white p-5 shadow-card hover:border-ink">
                <Mail className="mt-0.5 h-5 w-5 text-ember" aria-hidden />
                <span>
                  <span className="block font-mono text-2xs uppercase tracking-wide text-steel-500">Email</span>
                  <span className="break-all text-ink">{company.email}</span>
                </span>
              </a>
              <a href={company.indiamartUrl} target="_blank" rel="noopener noreferrer" data-analytics="indiamart-click"
                className="flex items-start gap-3 rounded-lg border border-steel-200 bg-white p-5 shadow-card hover:border-ink">
                <ExternalLink className="mt-0.5 h-5 w-5 text-ember" aria-hidden />
                <span>
                  <span className="block font-mono text-2xs uppercase tracking-wide text-steel-500">IndiaMART</span>
                  <span className="text-ink">View our profile</span>
                </span>
              </a>
            </div>

            <div className="mt-6 space-y-5">
              <div className="rounded-lg border border-steel-200 bg-steel-50 p-5">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <MapPin className="h-4 w-4 text-ember" aria-hidden /> {company.address.office.label}
                </h2>
                <address className="mt-2 not-italic text-sm leading-6 text-steel-600">
                  {company.address.office.lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </address>
              </div>
              <div className="rounded-lg border border-steel-200 bg-steel-50 p-5">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Warehouse className="h-4 w-4 text-ember" aria-hidden /> {company.address.godown.label}
                </h2>
                <address className="mt-2 not-italic text-sm leading-6 text-steel-600">
                  {company.address.godown.lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </address>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-lg border border-steel-200">
              <iframe
                title="Hari Enterprises location on Google Maps"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="text-xl font-semibold text-ink">Send a business enquiry</h2>
            <p className="mt-2 text-[15px] text-steel-600">
              Prefer to send details now? Fill in the form and we&apos;ll get back to you.
            </p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
