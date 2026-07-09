import Image from 'next/image';
import type { Client } from '@/data/clients';

/** Text-based client card (or logo, if a permission-cleared logo path is set). */
export function ClientCard({ client }: { client: Client }) {
  const initials = client.name
    .replace(/\(.*?\)/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex items-center gap-4 rounded-lg border border-steel-200 bg-white p-5 shadow-card">
      {client.logo ? (
        <Image src={client.logo} alt={`${client.name} logo`} width={56} height={56} className="h-12 w-12 object-contain" />
      ) : (
        <span
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-ink font-display text-sm font-semibold text-white"
        >
          {initials}
        </span>
      )}
      <div className="min-w-0">
        <p className="truncate font-medium text-ink">{client.name}</p>
        {client.sector && <p className="text-xs text-steel-500">{client.sector}</p>}
      </div>
    </div>
  );
}
