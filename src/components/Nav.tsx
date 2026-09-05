import { useEffect, useState } from "react";
import { navLinks, waLinks } from "@/data/site";
import { Wordmark } from "./Brand";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-cream/10 bg-ink/75 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="shell flex items-center justify-between py-4"
        >
          <a href="#home" aria-label="Henna Aura home">
            <Wordmark />
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="eyebrow relative text-[0.625rem] text-cream/70 transition-colors hover:text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={waLinks.booking}
              target="_blank"
              rel="noreferrer noopener"
              className="eyebrow hidden min-h-10 items-center border border-teal-soft/50 px-5 py-2.5 text-[0.625rem] text-cream transition-colors hover:bg-teal sm:inline-flex"
            >
              Book a Session
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid size-10 place-items-center lg:hidden"
            >
              <span className="space-y-1.5">
                <span className="block h-px w-6 bg-cream" />
                <span className="block h-px w-4 bg-teal-soft" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-ink transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="shell flex items-center justify-between py-4">
          <Wordmark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="eyebrow min-h-10 px-2 text-cream/70"
          >
            Close
          </button>
        </div>
        <ul className="shell mt-10 space-y-5">
          {navLinks.map((l, i) => (
            <li key={l.href} className="border-b border-cream/10 pb-4">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 font-display text-3xl text-cream"
              >
                <span className="eyebrow text-[0.55rem] text-teal-soft">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
