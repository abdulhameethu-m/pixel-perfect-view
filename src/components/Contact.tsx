import { site, waLinks } from "@/data/site";
import { Cta } from "./Cta";
import { BrushRing, Feather, Wordmark } from "./Brand";
import { navLinks } from "@/data/site";
import { StrokeLine } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-cream text-ink">
      <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow text-[0.625rem] text-teal">Contact</span>
          <h2 className="display-lg mt-6">
            Let&apos;s create
            <span className="block">something</span>
            <span className="block italic text-teal">beautiful.</span>
          </h2>
          <StrokeLine className="mt-10 w-40 bg-teal/60" />
        </div>

        <div className="lg:pt-16">
          <dl className="space-y-6">
            <div className="border-b border-ink/12 pb-5">
              <dt className="eyebrow text-[0.625rem] text-ink/45">Artist</dt>
              <dd className="mt-2 font-display text-2xl">{site.artist}</dd>
            </div>
            <div className="border-b border-ink/12 pb-5">
              <dt className="eyebrow text-[0.625rem] text-ink/45">Phone</dt>
              <dd className="mt-2 font-display text-2xl">
                <a href={`tel:${site.phoneIntl}`} className="hover:text-teal">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="border-b border-ink/12 pb-5">
              <dt className="eyebrow text-[0.625rem] text-ink/45">Instagram</dt>
              <dd className="mt-2 font-display text-2xl">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-teal"
                >
                  {site.handle}
                </a>
              </dd>
            </div>
            <div className="border-b border-ink/12 pb-5">
              <dt className="eyebrow text-[0.625rem] text-ink/45">Service area</dt>
              <dd className="mt-2 font-display text-2xl">
                {site.serviceArea}, {site.region}
              </dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={waLinks.booking} tone="cream" external>
              Book Mehendi
            </Cta>
            <Cta href={waLinks.cones} tone="quiet" external>
              Order Henna
            </Cta>
            <Cta href={waLinks.booking} tone="quiet" external>
              WhatsApp
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      <BrushRing className="pointer-events-none absolute -right-24 top-1/4 w-80 text-teal slow-spin md:w-[34rem]" />
      <div className="shell relative text-center">
        <h2 className="display-xl text-cream">
          Your story.
          <span className="block">Your style.</span>
          <span className="block italic text-teal-soft">Your henna.</span>
        </h2>
        <StrokeLine className="mx-auto mt-10 w-32" />
        <p className="mx-auto mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Let&apos;s create something uniquely yours.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Cta href={waLinks.booking} external>
            Book Mehendi
          </Cta>
          <Cta href={waLinks.cones} tone="outline" external>
            Order Henna
          </Cta>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/12 bg-surface pb-28 pt-16 md:pb-16">
      <Feather className="pointer-events-none absolute -bottom-10 right-6 size-56 text-teal/25" />
      <div className="shell relative">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Wordmark />
            <p className="script-note mt-6">{site.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <h3 className="eyebrow text-[0.625rem] text-cream/45">Explore</h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="eyebrow text-[0.625rem] text-cream/45">Reach out</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-cream"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={waLinks.booking}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-cream"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="transition-colors hover:text-cream"
                >
                  {site.phone}
                </a>
              </li>
              <li>{site.city}, {site.region}</li>
            </ul>
          </div>
        </div>

        <p className="eyebrow mt-14 text-[0.5625rem] text-cream/35">
          © 2026 Henna Aura. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
