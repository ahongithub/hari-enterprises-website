import { Container } from '@/components/ui/Container';
import { company, formatYearsSinceLabel } from '@/data/company-helpers';

const items = [
  { stat: formatYearsSinceLabel(company.establishedYear), label: 'Years in the refractory business' },
  { stat: 'Ahmedabad', label: 'Based in Gujarat, India' },
  { stat: 'Pan-India', label: 'Supply where feasible' },
  { stat: '5+', label: 'Refractory material categories' },
];

export function TrustStrip() {
  return (
    <section className="border-b border-steel-200 bg-white">
      <Container>
        <dl className="grid grid-cols-2 divide-steel-200 lg:grid-cols-4 lg:divide-x">
          {items.map((it, i) => (
            <div key={i} className="px-2 py-8 text-center lg:px-6">
              <dt className="font-display text-3xl font-semibold text-ink sm:text-4xl">{it.stat}</dt>
              <dd className="mt-1.5 text-sm text-steel-500">{it.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
