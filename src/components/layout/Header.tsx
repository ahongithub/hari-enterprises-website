'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { primaryNav } from '@/data/navigation';
import { telHref, whatsappHref } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('?')[0] ?? href);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow',
        scrolled ? 'border-steel-200 shadow-sm' : 'border-transparent',
      )}
    >
      <Container className="flex h-[68px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 whitespace-nowrap rounded px-2.5 py-2 text-[15px] font-medium',
                    isActive(item.href) ? 'text-ember' : 'text-ink hover:text-ember',
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 text-steel-400" aria-hidden />
                </Link>
                {productsOpen && (
                  <div className="absolute left-0 top-full w-72 pt-2">
                    <ul className="overflow-hidden rounded-md border border-steel-200 bg-white py-1.5 shadow-card">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="block px-4 py-2.5 text-sm text-steel-700 hover:bg-steel-50 hover:text-ember"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'whitespace-nowrap rounded px-2.5 py-2 text-[15px] font-medium',
                  isActive(item.href) ? 'text-ember' : 'text-ink hover:text-ember',
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <Button href="/request-a-quote" size="sm">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <nav
            aria-label="Mobile"
            className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-steel-200 bg-white px-5 pb-8 pt-2"
          >
            <ul className="divide-y divide-steel-100">
              {primaryNav.map((item) => (
                <li key={item.label} className="py-1">
                  <Link
                    href={item.href}
                    className={cn(
                      'block py-3 text-base font-medium',
                      isActive(item.href) ? 'text-ember' : 'text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-2 ml-3 border-l border-steel-200 pl-3">
                      {item.children.slice(1).map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block py-2 text-sm text-steel-600">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button href={telHref} variant="outline" size="md" data-analytics="phone-click">
                Call
              </Button>
              <Button href={whatsappHref} variant="outline" size="md" data-analytics="whatsapp-click">
                WhatsApp
              </Button>
            </div>
            <Button href="/request-a-quote" size="lg" className="mt-3 w-full">
              Request a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
