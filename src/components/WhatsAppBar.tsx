import { waLinks } from "@/data/site";

function WaGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.5 3.6 1.4 5.1L2 22l5.2-1.55a9.9 9.9 0 0 0 4.84 1.25c5.44 0 9.84-4.4 9.84-9.84S17.48 2 12.04 2Zm0 17.9c-1.6 0-3.1-.44-4.36-1.2l-.3-.18-3.1.92.94-3.03-.2-.32a7.9 7.9 0 0 1-1.22-4.25 8.06 8.06 0 1 1 8.24 8.06Zm4.5-5.9c-.24-.12-1.46-.72-1.68-.8-.23-.1-.4-.13-.56.12-.16.24-.64.8-.78.96-.15.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.38.1-.5.12-.12.26-.3.38-.46.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.56-1.34-.76-1.82-.2-.48-.4-.4-.56-.4h-.48c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.72 4.12 3.72 2.42 1 2.42.66 2.86.62.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function WhatsAppBar() {
  return (
    <>
      {/* Desktop floating button */}
      <a
        href={waLinks.booking}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-7 right-7 z-50 hidden size-14 place-items-center rounded-full bg-teal text-cream shadow-lg ring-1 ring-cream/20 transition-colors hover:bg-teal-soft md:grid"
      >
        <WaGlyph className="size-6" />
      </a>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-cream/15 bg-ink/95 backdrop-blur-md md:hidden">
        <a
          href={waLinks.booking}
          target="_blank"
          rel="noreferrer noopener"
          className="eyebrow flex min-h-14 items-center justify-center gap-2 text-[0.625rem] text-cream"
        >
          <WaGlyph className="size-4 text-teal-soft" />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="eyebrow flex min-h-14 items-center justify-center bg-teal text-[0.625rem] text-cream"
        >
          Book Now
        </a>
      </div>
    </>
  );
}
