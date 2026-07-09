import Link from 'next/link';
import { Home, Package, FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-mono text-2xs uppercase tracking-[0.2em] text-ember">Error 404</p>
      <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-[15px] leading-7 text-steel-600">
        The page you are looking for may have moved or no longer exists. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">
          <Home className="h-4 w-4" aria-hidden /> Home
        </Button>
        <Button href="/products" variant="outline">
          <Package className="h-4 w-4" aria-hidden /> Products
        </Button>
        <Button href="/request-a-quote" variant="outline">
          <FileText className="h-4 w-4" aria-hidden /> Request a Quote
        </Button>
      </div>
    </Container>
  );
}
