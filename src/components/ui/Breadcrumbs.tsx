import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from './Container';

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-steel-200 bg-white">
      <Container>
        <ol className="flex flex-wrap items-center gap-1 py-3 font-mono text-2xs uppercase tracking-wide text-steel-500">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3 w-3 text-steel-300" aria-hidden />}
              {item.href ? (
                <Link href={item.href} className="hover:text-ember">
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
