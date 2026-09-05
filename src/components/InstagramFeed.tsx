import g1 from "@/assets/IMG-20260725-WA0032.jpg.jpeg";
import g3 from "@/assets/IMG-20260725-WA0044.jpg.jpeg";
import g4 from "@/assets/IMG-20260725-WA0131.jpg.jpeg";
import g5 from "@/assets/IMG-20260725-WA0141.jpg.jpeg";
import g6 from "@/assets/IMG-20260725-WA0145.jpg.jpeg";
import g8 from "@/assets/IMG-20260725-WA0157.jpg.jpeg";
import { site } from "@/data/site";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

const feed = [
  { src: g4, alt: "Fresh henna mandala detail on a palm" },
  { src: g1, alt: "Bridal mehendi on both hands" },
  { src: g3, alt: "Arabic mehendi on a forearm" },
  { src: g6, alt: "Mehendi at a family celebration" },
  { src: g5, alt: "Traditional mehendi on feet" },
  { src: g8, alt: "Deep henna stain after paste removal" },
];

export function InstagramFeed() {
  return (
    <section className="section-pad bg-cream text-ink">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-[0.625rem] text-teal">
              {site.handle}
            </span>
            <h2 className="display-md mt-5">
              The latest
              <span className="block italic text-teal">from Henna Aura</span>
            </h2>
          </div>
          <Cta href={site.instagram} tone="quiet" external>
            Follow on Instagram
          </Cta>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4">
          {feed.map((f, i) => (
            <Reveal key={f.src + i} delay={(i % 3) * 0.08}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="group block overflow-hidden"
              >
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
