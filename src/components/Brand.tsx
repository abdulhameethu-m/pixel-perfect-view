import logoUrl from "@/assets/IMG-20250902-WA0051.jpg.jpeg";

/**
 * Brand marks with the real Henna Aura logo blended seamlessly.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full size-14 md:size-[4.25rem]">
        {/* We use scale and mix-blend-screen to clip away any white padding and make the black circle completely transparent, keeping only the white text and teal strokes floating elegantly */}
        <img
          src={logoUrl}
          alt="Henna Aura"
          className="w-[125%] h-[125%] max-w-none object-cover mix-blend-screen transition-transform duration-500 hover:scale-[1.35]"
        />
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
