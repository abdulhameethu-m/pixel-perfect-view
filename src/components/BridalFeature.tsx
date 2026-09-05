import bridal from "@/assets/bridal.jpg";
import { waLinks } from "@/data/site";
import { Cta } from "./Cta";

export function BridalFeature() {
  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden">
      <img
        src={bridal}
        alt="Bridal mehendi on an Indian bride's hands resting on a deep teal saree"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />

      <div className="shell flex min-h-[80vh] flex-col justify-end pb-20 pt-32">
        <span className="eyebrow text-[0.625rem] text-teal-soft">Bridal</span>
        <h2 className="display-lg mt-6 max-w-2xl text-cream">
          For your
          <span className="block">most special</span>
          <span className="block italic text-teal-soft">moments.</span>
        </h2>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
          Bridal Mehendi designed around your story, style and celebration.
        </p>
        <Cta href={waLinks.bridal} className="mt-9 self-start" external>
          Enquire for Bridal Mehendi
        </Cta>
      </div>
    </section>
  );
}
