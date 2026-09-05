import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { services, waLinks } from "@/data/site";
import g1 from "@/assets/g1.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g8 from "@/assets/g8.jpg";
import g9 from "@/assets/g9.jpg";
import heroHands from "@/assets/hero-hands.jpg";
import artVertical from "@/assets/art-vertical.jpg";
import bridal from "@/assets/bridal.jpg";
import { Cta } from "./Cta";
import { StrokeLine } from "./Reveal";

const previews = [g1, bridal, g3, g9, g6, g5, g4, g8, heroHands, artVertical];

export function Services() {
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const wrap = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="section-pad bg-background">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-[0.625rem] text-teal-soft">
              What I Create
            </span>
            <h2 className="display-lg mt-5 text-cream">
              Mehendi for every
              <span className="italic text-teal-soft"> occasion</span>
            </h2>
          </div>
          <Cta href={waLinks.booking} tone="outline" external>
            Enquire on WhatsApp
          </Cta>
        </div>

        <StrokeLine className="mt-12 w-full" />

        <div ref={wrap} className="relative" onMouseLeave={() => setActive(null)}>
          <ul>
            {services.map((s, i) => (
              <li key={s.no}>
                <a
                  href={waLinks.booking}
                  target="_blank"
                  rel="noreferrer noopener"
                  onMouseEnter={() => setActive(i)}
                  onMouseMove={(e) => {
                    const box = wrap.current?.getBoundingClientRect();
                    if (!box) return;
                    setPos({ x: e.clientX - box.left, y: e.clientY - box.top });
                  }}
                  className="group flex items-center gap-5 border-b border-cream/10 py-6 transition-[padding,background-color] duration-500 hover:bg-elevated/40 hover:py-9 md:gap-10 md:px-2 md:hover:px-6"
                >
                  <span className="eyebrow w-7 shrink-0 text-[0.625rem] text-teal-soft">
                    {s.no}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-2xl text-cream transition-colors group-hover:text-teal-soft md:text-4xl">
                      {s.name}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground md:text-sm">
                      {s.note}
                    </span>
                  </span>
                  <span className="text-lg text-cream/40 transition-transform duration-500 group-hover:translate-x-2 group-hover:text-teal-soft">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Cursor-following preview, desktop only */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ left: pos.x, top: pos.y }}
                className="pointer-events-none absolute z-20 hidden w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden lg:block"
              >
                <img
                  src={previews[active]}
                  alt=""
                  aria-hidden="true"
                  className="aspect-4/5 w-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
