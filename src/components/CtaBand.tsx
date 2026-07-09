import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { company, telHref, whatsappHref } from '@/data/company';

export function CtaBand({
  title = 'Tell us what you need, we\u2019ll help you source it reliably.',
  intro = 'Share your requirement with specifications, quantities and delivery location. Our team reviews every enquiry and responds with availability and commercial details.',
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 text-white/[0.05] grating" aria-hidden />
      <Container className="relative py-14 sm:py-16">
        <div className="max-w-2xl">
          <Eyebrow>Send your requirement</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
          <p className="mt-4 text-[15px] leading-7 text-steel-300">{intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/request-a-quote" size="lg">
              Request a Quote
            </Button>
            <Button href={telHref} variant="outline-light" size="lg" data-analytics="phone-click">
              Call {company.phone.display}
            </Button>
            <Button href={whatsappHref} variant="outline-light" size="lg" data-analytics="whatsapp-click">
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
