import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { company } from '@/data/company-helpers';

const collage = [
  { src: '/images/products/fire-bricks.webp', alt: 'Refractory fire bricks' },
  { src: '/images/products/ceramic-fibre-blanket.webp', alt: 'Ceramic fibre blanket' },
  { src: '/images/products/lrb-mattress.webp', alt: 'LRB rockwool insulation mattress' },
  { src: '/images/products/refractory-anchors.webp', alt: 'Stainless steel refractory anchors' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-steel-200 bg-ink">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 text-white/[0.05] grating lg:block" aria-hidden />
      <Container className="relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div>
          <p className="flex items-center gap-2 font-mono text-2xs font-medium uppercase tracking-[0.18em] text-firebrick-light">
            <span className="h-px w-8 bg-firebrick" aria-hidden />
            Refractory Sourcing &amp; Supply · Since {company.establishedYear}
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-[1.12] text-white sm:text-4xl lg:text-[2.9rem]">
            Refractory materials, sourced and delivered with{' '}
            <span className="text-firebrick-light">dependable coordination</span>.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-steel-300">
            Hari Enterprises helps industrial buyers across Gujarat and India source castables, fire
            bricks, ceramic fibre, insulation and refractory anchors, backed by an established supplier
            network and responsive commercial execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/request-a-quote" size="lg">
              Send Your Requirement <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/products" variant="outline-light" size="lg">
              Explore Products
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {collage.map((c, i) => (
              <div
                key={c.src}
                className={`relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-white ${
                  i % 2 === 1 ? 'lg:translate-y-6' : ''
                }`}
              >
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width:1024px) 45vw, 22vw"
                  priority={i < 2}
                  className="object-contain p-1"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="heatline h-1 w-full" aria-hidden />
    </section>
  );
}
