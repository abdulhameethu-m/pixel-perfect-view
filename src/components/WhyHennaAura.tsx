import { reasons } from "@/data/site";
import { Reveal } from "./Reveal";

export function WhyHennaAura() {
  return (
    <section className="section-pad bg-background">
      <div className="shell">
        <h2 className="display-lg max-w-xl text-cream">
          Why
          <span className="italic text-teal-soft"> Henna Aura?</span>
        </h2>

        <div className="mt-14 grid gap-x-12 gap-y-px sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.no} delay={i * 0.07}>
              <div className="border-t border-cream/12 py-7">
                <span className="eyebrow text-[0.625rem] text-teal-soft">
                  {r.no}
                </span>
                <h3 className="mt-3 font-display text-2xl text-cream">
                  {r.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="bg-elevated/40 py-20">
      <div className="shell text-center">
        <p className="script-note">Your experience matters.</p>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          Verified customer reviews will appear here soon. If Henna Aura has
          created for you, share a few words on WhatsApp or Instagram.
        </p>
      </div>
    </section>
  );
}
