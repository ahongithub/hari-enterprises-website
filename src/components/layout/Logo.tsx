import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';

export function Logo({ variant = 'default' }: { variant?: 'default' | 'footer' }) {
  const img = (
    <Image
      src="/images/logo.png"
      alt={`${company.name} logo`}
      width={168}
      height={72}
      priority={variant === 'default'}
      className="h-11 w-auto"
    />
  );
  return (
    <Link href="/" className="inline-flex items-center" aria-label={`${company.name} — home`}>
      {variant === 'footer' ? (
        <span className="inline-flex items-center rounded bg-white px-3 py-2 shadow-ring">{img}</span>
      ) : (
        img
      )}
    </Link>
  );
}
