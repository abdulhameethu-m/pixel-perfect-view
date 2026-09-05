import { motion, useInView, type TargetAndTransition } from "motion/react";
import { useRef, type ReactNode } from "react";

type Variant = "ink" | "rise" | "curve";

const states: Record<Variant, { from: TargetAndTransition; to: TargetAndTransition }> = {
  ink: {
    from: { clipPath: "inset(0 100% 0 0)", opacity: 1 },
    to: { clipPath: "inset(0 0% 0 0)", opacity: 1 },
  },
  curve: {
    from: { clipPath: "ellipse(75% 0% at 50% 100%)", opacity: 0.2 },
    to: { clipPath: "ellipse(150% 150% at 50% 100%)", opacity: 1 },
  },
  rise: {
    from: { y: 26, opacity: 0 },
    to: { y: 0, opacity: 1 },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const { from, to } = states[variant];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={from}
      animate={inView ? to : from}
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={`bg-teal-soft/70 ${vertical ? "w-px" : "h-px"} ${className}`}
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      animate={
        inView
          ? vertical
            ? { scaleY: 1 }
            : { scaleX: 1 }
          : vertical
            ? { scaleY: 0 }
            : { scaleX: 0 }
      }
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: vertical ? "top" : "left" }}
    />
  );
}

/** Reveal for grid children that must keep their own grid placement. */
export function RevealItem({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
