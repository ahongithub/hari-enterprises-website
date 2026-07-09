import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ValuePillars } from '@/components/home/ValuePillars';
import { ProcessFlow } from '@/components/home/ProcessFlow';
import { CtaBand } from '@/components/CtaBand';
import { ClientCard } from '@/components/ClientCard';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { categories } from '@/data/products';
import { industries } from '@/data/industries';
import { clients, clientsDisclaimer } from '@/data/clients';
import { company } from '@/data/company';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({ path: '/' });

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Product categories */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow index="01">Product Portfolio</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              A broad refractory-material portfolio
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-steel-600">
              From monolithic castables to fire bricks, ceramic fibre, insulation and anchors — sourced
              to match your application and requirement.
            </p>
          </div>
          <Button href="/products" variant="outline">
            All products <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/products?category=${c.id}`}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-steel-200 bg-white shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-steel-100">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-ink group-hover:text-ember">{c.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-steel-600">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ember">
                  View range <ChevronRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* More than product supply */}
      <Section className="bg-steel-50">
        <div className="max-w-2xl">
          <Eyebrow index="02">More Than Product Supply</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            The value is in the sourcing and coordination
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-steel-600">
            Buying refractory materials well is about more than a price list. It is about getting the
            right material, at the right time, coordinated reliably. That is what we focus on.
          </p>
        </div>
        <div className="mt-12">
          <ValuePillars />
        </div>
      </Section>

      {/* How we work */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow index="03">How We Work</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            A simple, transparent process
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-steel-600">
            From your first enquiry to delivery and ongoing support — a clear path designed around how
            industrial buyers actually work.
          </p>
        </div>
        <div className="mt-10">
          <ProcessFlow />
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-ink text-white">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow index="04">Industries &amp; Applications</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Materials matched to the application
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-steel-300">
              Not sure which product you need? Start from your equipment or application and we will help
              you identify suitable materials.
            </p>
          </div>
          <Button href="/industries" variant="outline"
            className="border-white/25 bg-transparent text-white hover:border-white hover:bg-white/10">
            All industries <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 8).map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              <h3 className="text-base font-semibold text-white group-hover:text-firebrick-light">
                {ind.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-steel-400">{ind.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Clients */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow index="05">Selected Organisations Served</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Experience supporting industrial requirements
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-steel-600">
            Over the years we have supplied and coordinated refractory material requirements for a range
            of industrial businesses.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((c) => (
            <ClientCard key={c.name} client={c} />
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-5 text-steel-400">{clientsDisclaimer}</p>
      </Section>

      {/* Leadership preview */}
      <Section className="bg-steel-50">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-lg border border-steel-200 shadow-card">
              <Image
                src={company.founder.portrait}
                alt={company.founder.portraitAlt}
                fill
                sizes="(max-width:1024px) 60vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <Eyebrow index="06">Leadership</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              Led by {company.founder.name}
            </h2>
            <p className="mt-2 font-mono text-sm text-steel-500">
              {company.founder.title} · {company.founder.qualification}
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-steel-600">
              With over {company.founder.experienceYears} years in marketing and business development —
              and active in the refractory-material domain since {company.founder.inDomainSince} —{' '}
              {company.founder.name} has built Hari Enterprises on long-standing industry relationships,
              responsive execution and dependable fulfilment.
            </p>
            <Button href="/leadership" variant="outline" className="mt-7">
              Read leadership profile <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
