import Image from 'next/image';
import type { Client } from '@/data/clients';

/** Client card: real logo on a neutral white tile (object-contain), or a clean text card. */
export function ClientCard({ client }: { client: Client }) {
  if (client.logo) {
    return (
      <div className="flex h-28 items-center justify-center rounded-lg border border-steel-200 bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover">
        <div className="relative h-full w-full">
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            fill
            sizes="(max-width:640px) 45vw, 22vw"
            className="object-contain"
          />
        </div>
      </div>
    );
  }
  const initials = client.name
    .replace(/\(.*?\)/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  return (
    <div className="flex h-28 items-center gap-4 rounded-lg border border-steel-200 bg-white p-5 shadow-card">
      <span
        aria-hidden
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-ink font-display text-sm font-semibold text-white"
      >
        {initials}
      </span>
      <div className="min-w-0">
        <p className="font-medium text-ink">{client.name}</p>
        {client.sector && <p className="text-xs text-steel-500">{client.sector}</p>}
      </div>
    </div>
  );
}
