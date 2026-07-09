import { PageHeader } from '@/components/ui/PageHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { company } from '@/data/company';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy Policy | Hari Enterprises',
  description: 'How Hari Enterprises collects, uses and protects the information you share through this website.',
  path: '/privacy-policy',
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <div className="prose-hari mx-auto max-w-3xl">
          <p>
            This Privacy Policy explains how {company.name} (&quot;we&quot;, &quot;us&quot;) handles information you
            provide through this website. We are committed to handling your information responsibly. This
            policy is provided for general information and does not constitute legal advice.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you submit an enquiry or contact form, we collect the details you provide — such as your
            name, company, designation, email, phone number, city, state, product requirement and any
            files you attach. We may also collect basic technical data (such as your approximate region
            and pages visited) through analytics tools, where enabled.
          </p>
          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your enquiry and provide quotations and information.</li>
            <li>To coordinate sourcing, commercial terms and delivery for your requirement.</li>
            <li>To communicate with you about your enquiry and, where relevant, future requirements.</li>
            <li>To improve our website and understand how it is used (via analytics, where enabled).</li>
          </ul>
          <h2>Sharing of information</h2>
          <p>
            We do not sell your personal information. We may share relevant details with suppliers or
            logistics partners strictly as needed to fulfil your requirement. We may disclose information
            where required by law.
          </p>
          <h2>Data retention</h2>
          <p>
            We retain enquiry information for as long as needed to serve your requirement and maintain our
            business relationship, unless a longer period is required by law.
          </p>
          <h2>Cookies &amp; analytics</h2>
          <p>
            Where enabled, this website may use analytics tools (such as Google Analytics and Microsoft
            Clarity) that set cookies to help us understand site usage. You can control cookies through
            your browser settings.
          </p>
          <h2>Your choices</h2>
          <p>
            You may contact us to ask about the information you have shared or to request that we update
            or remove it, subject to any legal obligations.
          </p>
          <h2>Contact</h2>
          <p>
            For any privacy questions, contact us at{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a> or {company.phone.display}.
          </p>
          <p className="text-xs text-steel-400">Last updated: January 2026.</p>
        </div>
      </Section>
    </>
  );
}
