import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { company, telHref, mailHref } from '@/data/company';
import { Container } from '@/components/ui/Container';

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-ink text-steel-300 lg:block">
      <Container className="flex h-10 items-center justify-between text-[13px]">
        <div className="flex items-center gap-6">
          <a href={telHref} className="flex items-center gap-1.5 hover:text-white">
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {company.phone.display}
          </a>
          <a href={mailHref} className="flex items-center gap-1.5 hover:text-white">
            <Mail className="h-3.5 w-3.5" aria-hidden />
            {company.email}
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {company.address.office.city}, {company.address.office.state}
          </span>
        </div>
        <a
          href={company.indiamartUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics="indiamart-click"
          className="flex items-center gap-1.5 hover:text-white"
        >
          View us on IndiaMART
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </Container>
    </div>
  );
}
