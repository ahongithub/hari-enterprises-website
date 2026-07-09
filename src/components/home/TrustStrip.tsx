import { Container } from '@/components/ui/Container';
import { company } from '@/data/company-helpers';

const items = [
  { stat: `Since ${company.establishedYear}`, label: 'Established refractory supply business' },
  { stat: 'Ahmedabad', label: 'Based in Gujarat, India' },
  { stat: 'Across India', label: 'Serving industrial buyers nationwide' },
  { stat: 'B2B Supply', label: 'Refractory & insulation materials' },
];

export function TrustStrip() {
  return (
    <section className="border-b border-steel-200 bg-white">
      <Container>
        <dl className="grid grid-cols-2 divide-steel-200 lg:grid-cols-4 lg:divide-x">
          {items.map((it, i) => (
            <div key={i} className="px-2 py-7 text-center lg:px-6">
              <dt className="font-display text-2xl font-semibold text-ink sm:text-3xl">{it.stat}</dt>
              <dd className="mt-1.5 text-sm text-steel-500">{it.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
