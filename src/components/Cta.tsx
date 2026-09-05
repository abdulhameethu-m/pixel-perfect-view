import type { ReactNode } from "react";

type Tone = "solid" | "outline" | "cream" | "quiet";

const tones: Record<Tone, string> = {
  solid:
    "bg-teal text-cream hover:bg-teal-soft border border-teal-soft/40",
  outline:
    "border border-cream/30 text-cream hover:border-teal-soft hover:text-teal-soft",
  cream:
    "bg-ink text-cream border border-ink hover:bg-teal hover:border-teal",
  quiet:
    "border border-ink/25 text-ink hover:border-teal hover:text-teal",
};

export function Cta({
  href,
  children,
  tone = "solid",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={`eyebrow inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3.5 transition-colors duration-500 ${tones[tone]} ${className}`}
    >
      {children}
    </a>
  );
}
