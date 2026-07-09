const steps = [
  { n: '01', title: 'Share your requirement', body: 'Send product, quantity, specification and delivery details.' },
  { n: '02', title: 'Requirement review', body: 'We review specification, application and feasibility.' },
  { n: '03', title: 'Sourcing & commercial coordination', body: 'We source the right material and confirm terms.' },
  { n: '04', title: 'Confirmation', body: 'Availability, pricing and timeline confirmed with you.' },
  { n: '05', title: 'Delivery coordination', body: 'Supply and delivery coordinated to your location.' },
  { n: '06', title: 'Ongoing support', body: 'We stay available for repeat and future requirements.' },
];

export function ProcessFlow() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s) => (
        <li key={s.n} className="bg-white p-6">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm font-medium text-ember">{s.n}</span>
            <span className="h-px flex-1 grating text-steel-200" aria-hidden />
          </div>
          <h3 className="mt-3 text-base font-semibold text-ink">{s.title}</h3>
          <p className="mt-1.5 text-sm leading-6 text-steel-600">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
