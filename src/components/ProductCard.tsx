import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/products';
import { getCategory } from '@/data/products';

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.categoryId);
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-steel-200 bg-white shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        {category && (
          <span className="font-mono text-2xs uppercase tracking-wide text-steel-500">
            {category.shortName}
          </span>
        )}
        <h3 className="mt-1.5 flex items-start justify-between gap-2 text-lg font-semibold text-ink">
          <span className="group-hover:text-ember">{product.name}</span>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-steel-300 transition-colors group-hover:text-ember" aria-hidden />
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-6 text-steel-600">{product.shortDescription}</p>
      </div>
    </Link>
  );
}
