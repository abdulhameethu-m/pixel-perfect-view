import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import artVertical from "@/assets/art-vertical.jpg";
import { Reveal } from "./Reveal";

const labels = ["Floral", "Botanical", "Traditional", "Contemporary"];

export function SignatureArt() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const typeY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      id="artistry"
      ref={ref}
      className="section-pad relative overflow-hidden bg-background"
    >
      <div className="shell relative">
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div style={{ y: typeY }} className="relative z-20">
            <span className="eyebrow text-[0.625rem] text-teal-soft">
              Signature Work
            </span>
            <h2 className="display-xl mt-6 text-cream">
              The art
              <span className="block italic text-teal-soft">of henna</span>
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Patterns built stroke by stroke — flowing lines, layered fillers
              and quiet negative space that let each design breathe.
            </p>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {labels.map((l, i) => (
                <Reveal key={l} delay={i * 0.08}>
                  <li className="eyebrow border-b border-cream/20 pb-1 text-[0.625rem] text-cream/60">
                    {l}
                  </li>
                </Reveal>
              ))}
            </ul>
          </motion.div>

          <motion.figure
            style={{ y: imgY }}
            className="relative z-10 lg:-ml-20"
          >
            <Reveal variant="curve">
              <img
                src={artVertical}
                alt="Henna artist piping fine mehendi paste onto a hand"
                width={896}
                height={1440}
                loading="lazy"
                className="aspect-2/3 w-full object-cover"
              />
            </Reveal>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
