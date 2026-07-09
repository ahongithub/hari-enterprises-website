import { cn } from '@/lib/utils';
import { Container } from './Container';

export function Section({
  children,
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-24', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
