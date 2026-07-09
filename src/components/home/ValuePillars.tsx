import { Search, PackageSearch, MessageSquareReply, Truck, Handshake } from 'lucide-react';

const pillars = [
  { icon: Search, title: 'Requirement Understanding', body: 'We start by understanding your specification, application and operating conditions, not just the product name.' },
  { icon: PackageSearch, title: 'Reliable Sourcing', body: 'An established supplier network lets us source the right material and grade for your requirement.' },
  { icon: MessageSquareReply, title: 'Commercial Responsiveness', body: 'Clear, timely responses on availability, pricing and terms so your procurement keeps moving.' },
  { icon: Truck, title: 'Coordinated Fulfilment', body: 'We coordinate supply and delivery through our supplier and logistics network to your location.' },
  { icon: Handshake, title: 'Relationship-Led Service', body: 'We work to be a dependable long-term partner, not a one-off transaction.' },
];

export function ValuePillars() {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((p) => (
        <div key={p.title}>
          <div className="flex h-11 w-11 items-center justify-center rounded border border-steel-200 bg-white text-ember shadow-ring">
            <p.icon className="h-5 w-5" aria-hidden />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-ink">{p.title}</h3>
          <p className="mt-2 text-[15px] leading-7 text-steel-600">{p.body}</p>
        </div>
      ))}
    </div>
  );
}
