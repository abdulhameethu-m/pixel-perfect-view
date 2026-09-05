import { waLinks } from "@/data/site";
import { Cta } from "./Cta";
import { Reveal, StrokeLine } from "./Reveal";

const steps = [
  {
    no: "01",
    title: "Enquire",
    text: "Contact through WhatsApp or Instagram.",
  },
  {
    no: "02",
    title: "Confirm",
    text: "Check artist availability and finalize requirements.",
  },
  {
    no: "03",
    title: "Book",
    text: "Pay 50% advance to confirm the booking.",
  },
];

export function Pricing() {
  return (
    <section className="section-pad bg-cream text-ink">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <span className="eyebrow text-[0.625rem] text-teal">Pricing</span>
          <h2 className="display-lg mt-6 text-ink">
            Mehendi
            <span className="block text-ink/45">starting from</span>
            <span className="block italic text-teal">₹150</span>
          </h2>
        </div>
        <div>
          <StrokeLine className="mb-8 w-full bg-teal/50" />
          <p className="max-w-sm text-sm leading-loose text-ink/70">
            Final pricing depends on design complexity, occasion and
            requirements.
          </p>
          <Cta href={waLinks.booking} tone="cream" className="mt-8" external>
            Discuss Your Design
          </Cta>
        </div>
      </div>
    </section>
  );
}

export function BookingProcess() {
  return (
    <section className="section-pad bg-background">
      <div className="shell">
        <span className="eyebrow text-[0.625rem] text-teal-soft">
          How Booking Works
        </span>
        <h2 className="display-md mt-5 max-w-lg text-cream">
          Three simple steps, from first message to confirmed date.
        </h2>

        <div className="relative mt-16">
          {/* flowing mehendi-like stroke */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 60"
            className="absolute -top-8 left-0 hidden w-full md:block"
          >
            <path
              d="M10 40C160 4 280 4 420 34c140 30 280 30 570-16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-teal-soft/60"
            />
          </svg>

          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.12}>
                <li className="border-t border-cream/12 pt-6">
                  <span className="eyebrow text-[0.625rem] text-teal-soft">
                    {s.no}
                  </span>
                  <h3 className="mt-4 font-display text-3xl text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function BookingNote() {
  return (
    <section className="bg-elevated/50 py-16">
      <div className="shell grid gap-8 md:grid-cols-[0.5fr_1fr]">
        <h2 className="font-display text-2xl italic text-teal-soft">
          Please note
        </h2>
        <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li className="border-b border-cream/10 pb-4">
            Bookings are confirmed only after the required 50% advance payment.
          </li>
          <li className="border-b border-cream/10 pb-4">
            Once a booking is confirmed, cancellations are not accepted and the
            advance payment is non-refundable.
          </li>
          <li>
            Availability depends on the artist&apos;s schedule, so advance
            enquiry is recommended.
          </li>
        </ul>
      </div>
    </section>
  );
}
