import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ArtistStory } from "@/components/ArtistStory";
import { SignatureArt } from "@/components/SignatureArt";
import { Services } from "@/components/Services";
import { Pricing, BookingProcess, BookingNote } from "@/components/Booking";
import { HennaProduct, Ingredients } from "@/components/Product";
import { Gallery } from "@/components/Gallery";
import { BridalFeature } from "@/components/BridalFeature";
import { WhyHennaAura, Reviews } from "@/components/WhyHennaAura";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Contact, FinalCta, Footer } from "@/components/Contact";
import { WhatsAppBar } from "@/components/WhatsAppBar";
import { site } from "@/data/site";

const title = "Henna Aura — Mehendi Artist in Coimbatore | Jaya Sri B";
const description =
  "Handcrafted bridal and event Mehendi in Coimbatore by artist Jaya Sri B, plus naturally prepared Henna Aura henna cones. Book on WhatsApp.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Henna Aura",
  description,
  founder: { "@type": "Person", name: site.artist },
  telephone: site.phoneIntl,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "IN",
  },
  areaServed: site.serviceArea,
  sameAs: [site.instagram],
  priceRange: "₹150+",
  slogan: site.tagline,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ArtistStory />
        <SignatureArt />
        <Services />
        <Pricing />
        <BookingProcess />
        <BookingNote />
        <HennaProduct />
        <Ingredients />
        <Gallery />
        <BridalFeature />
        <WhyHennaAura />
        <Reviews />
        <InstagramFeed />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppBar />
    </>
  );
}
