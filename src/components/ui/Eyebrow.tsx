export function Eyebrow({ children, index }: { children: React.ReactNode; index?: string }) {
  return (
    <p className="eyebrow flex items-center gap-2">
      {index ? <span className="text-steel-400">{index}</span> : null}
      <span>{children}</span>
    </p>
  );
}
