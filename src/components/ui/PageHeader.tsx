import { Container } from './Container';
import { Eyebrow } from './Eyebrow';

export function PageHeader({
  eyebrow,
  title,
  intro,
  index,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  index?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-steel-200 bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 text-white/[0.06] grating"
        aria-hidden
      />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <Eyebrow index={index}>{eyebrow}</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          {intro ? <p className="mt-4 max-w-2xl text-[15px] leading-7 text-steel-300">{intro}</p> : null}
        </div>
      </Container>
      <div className="heatline h-1 w-full" aria-hidden />
    </header>
  );
}
