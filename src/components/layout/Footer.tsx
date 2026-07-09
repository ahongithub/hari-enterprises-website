import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink, Warehouse } from 'lucide-react';
import { company, telHref, mailHref } from '@/data/company';
import { footerNav } from '@/data/navigation';
import { Container } from '@/components/ui/Container';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-steel-300">
      <div className="heatline h-1 w-full" aria-hidden />
      <Container className="grid gap-12 py-14 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-4">
          <Logo variant="footer" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-steel-400">{company.descriptionShort}</p>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-firebrick" aria-hidden />
              <address className="not-italic leading-6">
                <span className="mb-0.5 block font-medium text-white">Office</span>
                {company.address.office.lines.map((l) => (
                  <span key={l} className="block text-steel-400">
                    {l}
                  </span>
                ))}
              </address>
            </div>
            <div className="flex gap-2.5">
              <Warehouse className="mt-0.5 h-4 w-4 shrink-0 text-firebrick" aria-hidden />
              <address className="not-italic leading-6">
                <span className="mb-0.5 block font-medium text-white">{company.address.godown.label}</span>
                {company.address.godown.lines.map((l) => (
                  <span key={l} className="block text-steel-400">
                    {l}
                  </span>
                ))}
              </address>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
          {Object.values(footerNav).map((group) => (
            <div key={group.title}>
              <h2 className="font-mono text-2xs uppercase tracking-[0.16em] text-steel-500">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-steel-400 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-mono text-2xs uppercase tracking-[0.16em] text-steel-500">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={telHref} data-analytics="phone-click" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-firebrick" aria-hidden />
                {company.phone.display}
              </a>
            </li>
            <li>
              <a href={mailHref} data-analytics="email-click" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-firebrick" aria-hidden />
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={company.indiamartUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="indiamart-click"
                className="flex items-center gap-2 hover:text-white"
              >
                <ExternalLink className="h-4 w-4 text-firebrick" aria-hidden />
                IndiaMART profile
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-start justify-between gap-2 py-6 text-xs text-steel-500 sm:flex-row sm:items-center">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>Refractory material sourcing &amp; supply · Ahmedabad, Gujarat, India</p>
        </Container>
      </div>
    </footer>
  );
}
