import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, Phone, Mail, FileText, ArrowRight } from 'lucide-react';
import { products, getProduct, getCategory, getRelated } from '@/data/products';
import { company, telHref, mailHref } from '@/data/company';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ProductCard';
import { JsonLd } from '@/components/JsonLd';
import { productSchema, breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return buildMetadata({ title: 'Product not found', noIndex: true });
  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/products/${product.slug}`,
    ogImage: product.image,
    keywords: product.keywords,
  });
}

const VARY_NOTE =
  'Specifications, grades, dimensions and packaging options may vary based on application and requirement. Contact Hari Enterprises with your requirement for availability and commercial details.';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const category = getCategory(product.categoryId);
  const related = getRelated(product);

  return (
    <>
      <JsonLd
        data={[
          productSchema({
            name: product.name,
            description: product.seo.description,
            image: product.image,
            slug: product.slug,
            category: category?.name ?? 'Refractory Materials',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]}
      />

      {/* Hero */}
      <Section className="!pb-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-steel-200 bg-steel-100 shadow-card">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
          <div>
            {category && (
              <Link href={`/products?category=${category.id}`}>
                <Eyebrow>{category.name}</Eyebrow>
              </Link>
            )}
            <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{product.seo.h1}</h1>
            <p className="mt-4 text-[15px] leading-7 text-steel-600">{product.overview}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={`/request-a-quote?product=${product.slug}`} data-analytics="product-enquiry">
                Request a Quote
              </Button>
              <Button href={telHref} variant="outline" data-analytics="phone-click">
                <Phone className="h-4 w-4" aria-hidden /> Contact Sales
              </Button>
            </div>

            <div className="mt-6 rounded border border-steel-200 bg-steel-50 p-4">
              <p className="text-xs leading-6 text-steel-600">{VARY_NOTE}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Details */}
      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-ink">What it is</h2>
            <p className="mt-3 text-[15px] leading-7 text-steel-600">{product.whatItIs}</p>

            <h2 className="mt-10 text-xl font-semibold text-ink">Key characteristics</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.keyCharacteristics.map((k) => (
                <li key={k} className="flex gap-2.5 text-[15px] text-steel-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden />
                  {k}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-semibold text-ink">Typical applications</h2>
            <ul className="mt-4 space-y-2">
              {product.applications.map((a) => (
                <li key={a} className="flex gap-2.5 text-[15px] text-steel-700">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-firebrick" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>

            {product.supplyNotes && (
              <>
                <h2 className="mt-10 text-xl font-semibold text-ink">Supply information</h2>
                <ul className="mt-4 space-y-2">
                  {product.supplyNotes.map((s) => (
                    <li key={s} className="flex gap-2.5 text-[15px] text-steel-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden />
                      {s}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-lg border border-steel-200 bg-white p-6 shadow-card">
                <h2 className="text-base font-semibold text-ink">Common industries</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {product.industries.map((ind) => (
                    <li key={ind} className="rounded-full bg-steel-100 px-3 py-1 text-xs text-steel-700">
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-steel-200 bg-ink p-6 text-white">
                <h2 className="text-base font-semibold text-white">Send this requirement</h2>
                <p className="mt-2 text-sm leading-6 text-steel-300">
                  Share your specification, quantity and delivery location for availability and pricing.
                </p>
                <div className="mt-4 space-y-2">
                  <Button href={`/request-a-quote?product=${product.slug}`} className="w-full" data-analytics="product-enquiry">
                    <FileText className="h-4 w-4" aria-hidden /> Request a Quote
                  </Button>
                  <Button href={telHref} variant="outline" data-analytics="phone-click"
                    className="w-full border-white/25 bg-transparent text-white hover:bg-white/10">
                    <Phone className="h-4 w-4" aria-hidden /> {company.phone.display}
                  </Button>
                  <Button href={mailHref} variant="ghost" data-analytics="email-click"
                    className="w-full text-white hover:bg-white/10">
                    <Mail className="h-4 w-4" aria-hidden /> Email us
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section className="bg-steel-50 !pt-16">
          <Eyebrow>Related products</Eyebrow>
          <h2 className="mt-3 text-2xl font-semibold text-ink">You may also need</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
