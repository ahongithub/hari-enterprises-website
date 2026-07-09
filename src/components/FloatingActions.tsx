'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp, FileText } from 'lucide-react';
import { whatsappHref } from '@/data/company';

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop/tablet: WhatsApp + back-to-top */}
      <div className="fixed bottom-5 right-5 z-40 hidden flex-col items-end gap-3 sm:flex">
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-steel-200 bg-white text-ink shadow-card hover:bg-steel-50"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics="whatsapp-click"
          aria-label="Chat on WhatsApp"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-card-hover transition-transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile: sticky quote bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-steel-200 bg-white shadow-[0_-4px_16px_-8px_rgba(18,35,61,0.2)] sm:hidden">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics="whatsapp-click"
          className="flex items-center justify-center gap-2 border-r border-steel-200 py-3.5 text-sm font-medium text-ink"
        >
          <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden />
          WhatsApp
        </a>
        <a
          href="/request-a-quote"
          className="flex items-center justify-center gap-2 bg-ember py-3.5 text-sm font-medium text-white"
        >
          <FileText className="h-4 w-4" aria-hidden />
          Request a Quote
        </a>
      </div>
    </>
  );
}
