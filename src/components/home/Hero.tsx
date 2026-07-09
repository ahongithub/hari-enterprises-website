import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { company } from '@/data/company-helpers';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-steel-200 bg-ink">
      <div className="absolute inset-0" aria-hidden>
        <Image src="/images/hero/hero-furnace.svg" alt="" fill priority className="object-cover opacity-[0.9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/70" />
        <div className="absolute inset-y-0 right-0 w-1/4 text-white/[0.05] grating" />
      </div>
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow flex items-center gap-2 text-firebrick-light">
            <span className="h-px w-8 bg-firebrick" aria-hidden />
            Refractory Sourcing &amp; Supply · Since {company.establishedYear}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            Refractory materials, sourced and delivered with{' '}
            <span className="text-firebrick-light">dependable coordination</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-steel-300">
            Hari Enterprises helps industrial buyers across Gujarat and India source castables, fire
            bricks, ceramic fibre, insulation and refractory anchors — backed by an established supplier
            network and responsive commercial execution.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/request-a-quote" size="lg">
              Send Your Requirement <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href="/products"
              variant="outline"
              size="lg"
              className="border-white/25 bg-transparent text-white hover:border-white hover:bg-white/10"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
