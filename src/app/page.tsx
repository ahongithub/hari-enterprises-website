import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, PackageSearch, MessageSquareReply, Boxes, Handshake } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { CtaBand } from '@/components/CtaBand';
import { ClientCard } from '@/components/ClientCard';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { categories } from '@/data/products';
import { clients, clientsDisclaimer } from '@/data/clients';
import { company } from '@/data/company';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({ path: '/' });

const differentiators = [
  { icon: Boxes, title: 'Established Market Experience', body: 'Active in the refractory-material business since 2005, with long-standing industry relationships.' },
  { icon: PackageSearch, title: 'Broad Product Portfolio', body: 'Castables, bricks, ceramic fibre, insulation and refractory anchors, sourced to your requirement.' },
  { icon: MessageSquareReply, title: 'Responsive Coordination', body: 'Clear, timely responses on availability, pricing and terms so your procurement keeps moving.' },
  { icon: Handshake, title: 'Reliable Fulfilment', body: 'Sourcing and delivery coordinated through an established supplier and logistics network.' },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Product portfolio preview */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow index="01">Product Portfolio</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
              A broad refractory and insulation portfolio
            </h2>
            <p className="mt-3 text-base leading-7 text-steel-600">
              Sourced to match your application, grade and requirement.
            </p>
          </div>
          <Button href="/products" variant="outline">
            View all products <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/products?category=${c.id}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-steel-200 bg-white shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col border-t border-steel-100 p-5">
                <h3 className="text-lg font-semibold text-ink group-hover:text-ember">{c.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-6 text-steel-600">{c.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ember">
                  View range <ChevronRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why us */}
      <Section className="bg-steel-50">
        <div className="max-w-2xl">
          <Eyebrow index="02">Why Hari Enterprises</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
            The value is in the sourcing and coordination
          </h2>
        </div>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d) => (
            <div key={d.title} className="rounded-lg border border-steel-200 bg-white p-6 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded border border-steel-200 text-ember">
                <d.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{d.title}</h3>
              <p className="mt-2 text-sm leading-6 text-steel-600">{d.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/why-hari-enterprises" variant="outline">
            More about our capabilities <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Section>

      {/* Selected clients */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow index="03">Selected Clients</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
              Organisations we have supplied
            </h2>
          </div>
          <Button href="/clients" variant="outline">
            View all clients <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
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
            <div className="relative mx-auto aspect-[4/5] max-w-xs overflow-hidden rounded-lg border border-steel-200 shadow-card">
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
            <Eyebrow index="04">Leadership</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
              Led by {company.founder.name}
            </h2>
            <p className="mt-2 font-mono text-sm text-steel-500">
              {company.founder.title} · {company.founder.qualification}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-steel-600">
              With over {company.founder.experienceYears} years in marketing and business development, and
              active in the refractory-material domain since {company.founder.inDomainSince},{' '}
              {company.founder.name} has built Hari Enterprises on long-standing relationships, responsive
              execution and dependable fulfilment.
            </p>
            <Button href="/about" variant="outline" className="mt-6">
              About the company <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
