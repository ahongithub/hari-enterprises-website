import { PageHeader } from '@/components/ui/PageHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { company } from '@/data/company';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Terms of Use | Hari Enterprises',
  description: 'The terms governing your use of the Hari Enterprises website.',
  path: '/terms-of-use',
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms of Use' }]} />
      <PageHeader eyebrow="Legal" title="Terms of Use" />
      <Section>
        <div className="prose-hari mx-auto max-w-3xl">
          <p>
            These Terms of Use govern your use of the {company.name} website. By using this website, you
            agree to these terms. This page is provided for general information and does not constitute
            legal advice.
          </p>
          <h2>Use of the website</h2>
          <p>
            This website is provided for general information about our products and services. You agree to
            use it lawfully and not to misuse it, disrupt it or attempt unauthorised access.
          </p>
          <h2>Product information</h2>
          <p>
            Product descriptions on this website are indicative. Specifications, grades, dimensions,
            packaging and availability may vary based on application and requirement, and are confirmed at
            the time of enquiry. Nothing on this website constitutes a binding offer.
          </p>
          <h2>Business model</h2>
          <p>
            {company.name} is a business-to-business trading and supply company. We source refractory
            materials through our supplier network and coordinate commercial execution and delivery. We do
            not represent that we manufacture all products listed.
          </p>
          <h2>Third-party names &amp; marks</h2>
          <p>
            Any third-party names or marks referenced on this website are the property of their respective
            owners and are used solely for identification. Their use does not imply endorsement or
            partnership.
          </p>
          <h2>Intellectual property</h2>
          <p>
            The content, design and layout of this website are owned by or licensed to {company.name} and
            may not be reproduced without permission.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            The website is provided &quot;as is&quot;. To the extent permitted by law, {company.name} is not liable
            for any loss arising from reliance on website content. Commercial terms for any supply are
            governed by the specific agreement for that transaction.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
          <p className="text-xs text-steel-400">Last updated: January 2026.</p>
        </div>
      </Section>
    </>
  );
}
