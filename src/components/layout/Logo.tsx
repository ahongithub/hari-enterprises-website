import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';

/**
 * Company logo. Uses the cleaned transparent-background PNG so it integrates
 * into the header without a pasted-on grey box. On the dark footer it sits on a
 * small white chip (the mark's navy wordmark needs a light background).
 */
export function Logo({ variant = 'default' }: { variant?: 'default' | 'footer' }) {
  const img = (
    <Image
      src="/images/brand/hari-enterprises-logo-transparent.png"
      alt="Hari Enterprises, refractory material supplier in Ahmedabad"
      width={676}
      height={270}
      priority={variant === 'default'}
      className="h-10 w-auto sm:h-11"
    />
  );
  return (
    <Link href="/" className="inline-flex items-center" aria-label={`${company.name}, home`}>
      {variant === 'footer' ? (
        <span className="inline-flex items-center rounded-md bg-white px-3 py-2">{img}</span>
      ) : (
        img
      )}
    </Link>
  );
}
