/**
 * Brand marks. The circular wordmark is a temporary stand-in until the real
 * Henna Aura logo file is supplied — swap the inner content for the image then.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative grid size-10 shrink-0 place-items-center rounded-full bg-ink ring-1 ring-cream/25">
        <Feather className="size-4 text-teal-soft" />
        <span className="absolute inset-0 rounded-full border border-teal/50 slow-spin" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg tracking-wide text-cream">
          Henna
        </span>
        <span className="eyebrow block text-[0.55rem] text-teal-soft">
          Aura
        </span>
      </span>
    </span>
  );
}

export function Feather({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 22c0-9 3-15 9-19-1 8-4 12-9 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M12 22C6 19 4 13 6 7c4 2 6 6 6 11"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M12 22V9"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Painted teal circle inspired by the logo's brush ring. */
export function BrushRing({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M100 8c50 0 92 41 92 92s-42 92-92 92S8 150 8 100 50 8 100 8Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="470 90"
        opacity="0.55"
      />
      <path
        d="M22 66C36 33 66 14 100 14c44 0 80 32 85 74"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}
