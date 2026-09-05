import cones from "@/assets/product-cones.jpg";
import powder from "@/assets/ing-powder.jpg";
import lemon from "@/assets/ing-lemon.jpg";
import sugar from "@/assets/ing-sugar.jpg";
import oil from "@/assets/ing-oil.jpg";
import { site, waLinks } from "@/data/site";
import { Cta } from "./Cta";
import { Reveal, StrokeLine } from "./Reveal";
import { Feather } from "./Brand";

export function HennaProduct() {
  return (
    <section id="henna" className="section-pad bg-background">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow text-[0.625rem] text-teal-soft">
              The Product
            </span>
            <h2 className="display-lg mt-6 text-cream">
              Meet
              <span className="block italic text-teal-soft">Henna Aura</span>
            </h2>
            <p className="mt-6 font-display text-2xl text-cream/80">
              Natural Henna. Beautifully prepared.
            </p>
            <p className="mt-6 max-w-md text-sm leading-loose text-muted-foreground">
              Henna Aura organic Mehendi cones are prepared using natural henna
              powder, lemon juice, sugar and essential oils — rolled in small
              batches by the artist herself.
            </p>

            <dl className="mt-10 grid max-w-md grid-cols-2 gap-y-6 border-t border-cream/12 pt-8">
              <div>
                <dt className="eyebrow text-[0.625rem] text-cream/45">Price</dt>
                <dd className="mt-2 font-display text-2xl text-cream">
                  From ₹30
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.625rem] text-cream/45">Pack</dt>
                <dd className="mt-2 font-display text-2xl text-cream">
                  2 cones
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.625rem] text-cream/45">
                  Delivery
                </dt>
                <dd className="mt-2 font-display text-2xl text-cream">
                  {site.serviceArea}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.625rem] text-cream/45">
                  Shipping
                </dt>
                <dd className="mt-2 font-display text-2xl text-cream">
                  By location
                </dd>
              </div>
            </dl>
          </div>

          <Reveal variant="curve">
            <figure className="relative">
              <img
                src={cones}
                alt="Two handmade Henna Aura natural henna cones on a dark surface with henna powder, lemon and leaves"
                width={1440}
                height={1024}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <Feather className="absolute -right-2 -top-4 size-10 text-teal-soft/70" />
            </figure>
          </Reveal>
        </div>

        <StrokeLine className="mt-20 w-full" />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <h2 className="display-lg text-cream">
            Pure henna.
            <span className="block italic text-teal-soft">No shortcuts.</span>
          </h2>
          <div>
            <p className="max-w-sm text-sm leading-loose text-muted-foreground">
              Naturally prepared with henna powder, lemon juice, sugar and
              essential oils.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href={waLinks.cones} external>
                Order Henna Cones
              </Cta>
              <Cta href={waLinks.cones} tone="outline" external>
                WhatsApp Us
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ingredients = [
  { no: "01", name: "Natural Henna Powder", img: powder },
  { no: "02", name: "Lemon Juice", img: lemon },
  { no: "03", name: "Sugar", img: sugar },
  { no: "04", name: "Essential Oils", img: oil },
];

export function Ingredients() {
  return (
    <section className="section-pad bg-cream text-ink">
      <div className="shell">
        <div className="max-w-xl">
          <span className="eyebrow text-[0.625rem] text-teal">
            Inside the cone
          </span>
          <h2 className="display-md mt-5">
            Four ingredients.
            <span className="italic text-teal"> Nothing hidden.</span>
          </h2>
        </div>

        <div className="relative mt-16">
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 40"
            className="absolute top-16 left-0 hidden w-full md:block"
          >
            <path
              d="M20 20C200 -6 340 40 520 20c180-20 300 22 460 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-teal/50"
            />
          </svg>

          <ol className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {ingredients.map((it, i) => (
              <Reveal key={it.no} delay={i * 0.1}>
                <li className={i % 2 === 1 ? "md:mt-14" : ""}>
                  <div className="relative mx-auto w-full max-w-40 overflow-hidden rounded-full ring-1 ring-ink/10">
                    <img
                      src={it.img}
                      alt={it.name}
                      width={768}
                      height={768}
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <p className="eyebrow mt-5 text-center text-[0.625rem] text-teal">
                    {it.no}
                  </p>
                  <h3 className="mt-2 text-center font-display text-xl">
                    {it.name}
                  </h3>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
