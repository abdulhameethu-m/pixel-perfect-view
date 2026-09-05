export const site = {
  brand: "Henna Aura",
  artist: "Jaya Sri B",
  city: "Coimbatore",
  region: "Tamil Nadu",
  serviceArea: "Around Coimbatore",
  phone: "6374575150",
  phoneIntl: "+916374575150",
  instagram:
    "https://www.instagram.com/_henna_aura_?igsi=MTFhajY1Nnc3cWJibA==",
  handle: "@_henna_aura_",
  tagline: "Artistry in every stroke.",
};

export const wa = (message: string) =>
  `https://wa.me/91${site.phone}?text=${encodeURIComponent(message)}`;

export const waLinks = {
  booking: wa("Hi Jaya, I would like to enquire about booking Mehendi."),
  bridal: wa("Hi Jaya, I would like to enquire about Bridal Mehendi."),
  cones: wa("Hi Jaya, I would like to order Henna Aura cones."),
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Artistry", href: "#artistry" },
  { label: "Services", href: "#services" },
  { label: "Henna Cones", href: "#henna" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  { no: "01", name: "Bridal Mehendi", note: "Full hands, feet and detailing" },
  { no: "02", name: "Bridesmaids Mehendi", note: "Coordinated with the bride" },
  { no: "03", name: "Engagement Mehendi", note: "Elegant and expressive" },
  { no: "04", name: "Baby Shower Mehendi", note: "Gentle, celebratory motifs" },
  { no: "05", name: "Haldi Mehendi", note: "Traditional ceremony designs" },
  { no: "06", name: "Sangeet Mehendi", note: "Playful and festive" },
  { no: "07", name: "Puberty Function Mehendi", note: "Ceremonial patterns" },
  { no: "08", name: "Birthday Mehendi", note: "Personal, one-off designs" },
  { no: "09", name: "Guest Mehendi", note: "Quick designs for gatherings" },
  { no: "10", name: "Simple Mehendi", note: "Minimal everyday artistry" },
];

export const reasons = [
  { no: "01", title: "Handcrafted Designs" },
  { no: "02", title: "Natural Henna Ingredients" },
  { no: "03", title: "Personalized Designs" },
  { no: "04", title: "Multiple Celebration Styles" },
  { no: "05", title: "Coimbatore Service" },
  { no: "06", title: "Artist-Led Experience" },
];
