import artist from "@/assets/IMG-20250826-WA0033.jpg.jpeg";
import { site } from "@/data/site";
import { Reveal, StrokeLine } from "./Reveal";

export function ArtistStory() {
  return (
    <section id="story" className="section-pad bg-cream text-ink">
      <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal variant="curve" className="order-2 lg:order-1">
          <figure className="relative">
            <img
              src={artist}
              alt={`${site.artist}, mehendi artist in ${site.city}, applying henna`}
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
            <figcaption className="eyebrow mt-4 text-[0.625rem] text-ink/50">
              {site.artist} — {site.city}, {site.region}
            </figcaption>
          </figure>
        </Reveal>

        <div className="order-1 lg:order-2">
          <span className="eyebrow text-[0.625rem] text-teal">The Artist</span>
          <StrokeLine className="mt-5 w-24 bg-teal/60" />
          <h2 className="display-lg mt-8 text-ink">
            More than Mehendi.
            <span className="block italic text-teal">It&apos;s an expression.</span>
          </h2>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-sm leading-loose text-ink/70 sm:text-base">
              Every Mehendi design is created with attention to detail, balance
              and individuality. From intimate celebrations to bridal occasions,
              every pattern is designed to complement the person wearing it.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="script-note mt-10 text-teal">
              Made by hand. Created with intention.
            </p>
          </Reveal>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/12 pt-8">
            <div>
              <dt className="eyebrow text-[0.625rem] text-ink/45">Artist</dt>
              <dd className="mt-2 font-display text-xl">{site.artist}</dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.625rem] text-ink/45">Experience</dt>
              <dd className="mt-2 font-display text-xl">1 Year</dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.625rem] text-ink/45">Based in</dt>
              <dd className="mt-2 font-display text-xl">{site.city}</dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.625rem] text-ink/45">Serving</dt>
              <dd className="mt-2 font-display text-xl">{site.serviceArea}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
