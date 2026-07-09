'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-steel-200 border-y border-steel-200">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-medium text-ink">{item.q}</span>
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0 text-ember" aria-hidden />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-steel-400" aria-hidden />
                )}
              </button>
            </h3>
            {isOpen && <p className="prose-hari pb-6 pr-8">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
