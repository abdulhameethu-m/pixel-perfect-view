import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import g1 from "@/assets/g1.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g8 from "@/assets/g8.jpg";
import g9 from "@/assets/g9.jpg";
import heroHands from "@/assets/hero-hands.jpg";
import artVertical from "@/assets/art-vertical.jpg";
import { Reveal } from "./Reveal";

type Shot = { src: string; alt: string; category: string; span: string };

const shots: Shot[] = [
  {
    src: g1,
    alt: "Dense bridal mehendi covering both hands of an Indian bride",
    category: "Bridal",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: g4,
    alt: "Close-up of a fine mehendi mandala in fresh henna paste on a palm",
    category: "Details",
    span: "",
  },
  {
    src: g3,
    alt: "Arabic style mehendi with flowing floral strokes on a forearm",
    category: "Contemporary",
    span: "sm:row-span-2",
  },
  {
    src: g6,
    alt: "Hands with fresh mehendi at a celebration lit by candles",
    category: "Events",
    span: "sm:col-span-2",
  },
  {
    src: g5,
    alt: "Traditional mehendi on a bride's feet with teal silk drape",
    category: "Traditional",
    span: "sm:row-span-2",
  },
  {
    src: heroHands,
    alt: "Fine mehendi patterns across hands and forearms",
    category: "Bridal",
    span: "",
  },
  {
    src: g9,
    alt: "Henna being applied to a child's palm at a family celebration",
    category: "Events",
    span: "",
  },
  {
    src: g8,
    alt: "Deep maroon henna stain on a palm after the paste is removed",
    category: "Details",
    span: "sm:col-span-2",
  },
  {
    src: artVertical,
    alt: "Artist piping mehendi paste with a henna cone",
    category: "Minimal",
    span: "",
  },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const current = index === null ? null : shots[index];

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + shots.length) % shots.length)),
    [],
  );

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current, close, step]);

  return (
    <section id="gallery" className="section-pad bg-background">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-[0.625rem] text-teal-soft">
              Portfolio
            </span>
            <h2 className="display-lg mt-5 text-cream">
              Work from
              <span className="italic text-teal-soft"> the studio</span>
            </h2>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {["Bridal", "Events", "Details", "Minimal", "Traditional", "Contemporary"].map(
              (c) => (
                <li
                  key={c}
                  className="eyebrow text-[0.5625rem] text-cream/45"
                >
                  {c}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="mt-12 grid auto-rows-[9rem] grid-cols-2 gap-2.5 sm:auto-rows-[11rem] sm:grid-cols-4 sm:gap-4 lg:auto-rows-[13rem]">
          {shots.map((s, i) => (
            <Reveal
              key={s.src + i}
              variant="curve"
              delay={(i % 4) * 0.06}
              className={`${s.span} min-h-0`}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block size-full overflow-hidden"
                aria-label={`Open image: ${s.alt}`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="eyebrow absolute bottom-3 left-3 text-[0.5625rem] text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {s.category}
                </span>
                <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-cream/60 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  ↗
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current !== null && index !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-ink/97 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="eyebrow text-[0.625rem] text-teal-soft">
                {current.category}
              </span>
              <button
                type="button"
                onClick={close}
                className="eyebrow min-h-11 px-2 text-[0.625rem] text-cream/70 hover:text-cream"
              >
                Close ✕
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-4">
              <motion.img
                key={index}
                src={current.src}
                alt={current.alt}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex items-center justify-center gap-8 pb-8">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="eyebrow min-h-11 px-4 text-[0.625rem] text-cream/70 hover:text-teal-soft"
              >
                ← Prev
              </button>
              <span className="eyebrow text-[0.625rem] text-cream/40">
                {index + 1} / {shots.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="eyebrow min-h-11 px-4 text-[0.625rem] text-cream/70 hover:text-teal-soft"
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
