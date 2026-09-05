import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "ink" wipes in like a brush stroke, "rise" lifts gently */
  variant?: "ink" | "rise" | "curve";
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
}: Props) {
  const initial =
    variant === "ink"
      ? { clipPath: "inset(0 100% 0 0)", opacity: 1 }
      : variant === "curve"
        ? { clipPath: "ellipse(60% 0% at 50% 100%)", opacity: 1 }
        : { y: 26, opacity: 0 };

  const animate =
    variant === "ink"
      ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
      : variant === "curve"
        ? { clipPath: "ellipse(140% 140% at 50% 100%)", opacity: 1 }
        : { y: 0, opacity: 1 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: variant === "rise" ? 0.9 : 1.3,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/** A thin teal line that draws itself when scrolled into view. */
export function StrokeLine({
  className = "",
  vertical = false,
}: {
  className?: string;
  vertical?: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`bg-teal-soft/70 ${vertical ? "w-px" : "h-px"} ${className}`}
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: vertical ? "top" : "left" }}
    />
  );
}
