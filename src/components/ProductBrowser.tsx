'use client';

import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import type { Product, ProductCategory } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { cn } from '@/lib/utils';

export function ProductBrowser({
  products,
  categories,
  initialCategory,
}: {
  products: Product[];
  categories: ProductCategory[];
  initialCategory?: string;
}) {
  const [active, setActive] = useState<string>(
    initialCategory && categories.some((c) => c.id === initialCategory) ? initialCategory : 'all',
  );
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCat = active === 'all' || p.categoryId === active;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [products, active, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <SlidersHorizontal className="h-4 w-4 shrink-0 text-steel-400" aria-hidden />
          <div className="flex gap-2">
            <button
              onClick={() => setActive('all')}
              className={cn(
                'whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
                active === 'all'
                  ? 'border-ink bg-ink text-white'
                  : 'border-steel-300 bg-white text-steel-600 hover:border-ink',
              )}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  'whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
                  active === c.id
                    ? 'border-ink bg-ink text-white'
                    : 'border-steel-300 bg-white text-steel-600 hover:border-ink',
                )}
              >
                {c.shortName}
              </button>
            ))}
          </div>
        </div>
        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-steel-400" aria-hidden />
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="w-full rounded border border-steel-300 bg-white py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-steel-400 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ember/20"
          />
        </div>
      </div>

      <p className="mt-4 font-mono text-2xs uppercase tracking-wide text-steel-500">
        {filtered.length} product{filtered.length === 1 ? '' : 's'}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-lg border border-dashed border-steel-300 p-12 text-center">
          <p className="text-steel-600">No products match your search.</p>
          <button onClick={() => { setQuery(''); setActive('all'); }} className="mt-2 text-sm font-medium text-ember">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
