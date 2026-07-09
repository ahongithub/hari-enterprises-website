import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded font-medium transition-colors duration-150 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary: 'bg-ember text-white hover:bg-ember-600 active:bg-ember-700 shadow-sm',
  secondary: 'bg-ink text-white hover:bg-ink-700 active:bg-ink-900',
  outline: 'border border-steel-300 bg-white text-ink hover:border-ink hover:bg-steel-50',
  ghost: 'text-ink hover:bg-steel-100',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-6 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: CommonProps &
  ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const external = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
  if (external) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link className={classes} href={href} {...(rest as Record<string, unknown>)}>
      {children}
    </Link>
  );
}

export function ButtonEl({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}
