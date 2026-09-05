import { motion } from "motion/react";
import heroHands from "@/assets/file_00000000f684720794d179f384aac9d0.png";
import { site, waLinks } from "@/data/site";
import { BrushRing } from "./Brand";
import { Cta } from "./Cta";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* Left — editorial type */}
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-4">
            <span className="eyebrow text-[0.625rem] text-teal-soft">01 / 04</span>
            <span className="h-px w-10 bg-cream/25" />
            <span className="eyebrow text-[0.625rem] text-cream/55">
              Mehendi Artist
            </span>
          </div>

          <h1 className="display-xl text-cream">
            <motion.span
              className="block"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Artistry
            </motion.span>
            <motion.span
              className="block"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              in every
            </motion.span>
            <motion.span
              className="block italic text-teal-soft"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.1, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              stroke.
            </motion.span>
          </h1>

          <motion.p
            className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            Handcrafted Mehendi experiences and naturally prepared Henna, created
            with patience, precision and a love for traditional artistry.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
          >
            <Cta href={waLinks.booking} external>
              Book Your Mehendi
            </Cta>
            <Cta href="#gallery" tone="outline">
              Explore My Work
            </Cta>
          </motion.div>

          <div className="mt-12 flex items-center gap-6">
            <a
              href="#story"
              className="eyebrow text-[0.625rem] text-cream/45 transition-colors hover:text-teal-soft"
            >
              Scroll to explore ↓
            </a>
            <span className="hidden h-px flex-1 bg-cream/12 sm:block" />
            <span className="eyebrow hidden text-[0.625rem] text-cream/45 sm:inline">
              Natural Henna
            </span>
          </div>
        </div>

        {/* Right — photography with brush ring */}
        <div className="relative lg:-mr-10">
          <BrushRing className="pointer-events-none absolute -left-14 -top-10 z-0 w-48 text-teal-soft slow-spin md:w-72" />
          <motion.figure
            className="relative z-10 overflow-hidden"
            initial={{ clipPath: "ellipse(70% 0% at 50% 100%)" }}
            animate={{ clipPath: "ellipse(140% 140% at 50% 100%)" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={heroHands}
              alt="Intricate henna mehendi patterns on a woman's hands and forearms"
              width={1024}
              height={1440}
              className="aspect-3/4 w-full object-cover"
            />
          </motion.figure>

          <div className="absolute -left-6 bottom-10 z-20 hidden lg:block">
            <span
              className="eyebrow block text-[0.625rem] text-cream/60"
              style={{ writingMode: "vertical-rl" }}
            >
              Henna Aura — {site.city}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
