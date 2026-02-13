export type ProjectCategory = "Commercial" | "Land" | "Investment" | "Advisory";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  location: string;
  heroImage: string;
  badges: string[];
  highlights: { label: string; value: string }[];
  description: string;
  features: string[];
  brochure?: { label: string; href: string };
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "gygy-fiveo",
    title: "GYGY FIVEO",
    subtitle: "Premium Retail Space • Earn Rental From Day 1",
    category: "Commercial",
    location: "Noida",
    heroImage: "/images/projects/gygy-fiveo.png",
    badges: ["18% Assured Rental", "60:40 Plan", "Limited Units"],
    highlights: [
      { label: "Pay Only", value: "₹21.30 Lacs" },
      { label: "Monthly Rental", value: "₹32,000 (from Day 1)" },
      { label: "Price Starts", value: "₹35.5 Lakhs" },
      { label: "Lease Guarantee", value: "₹220 / sq.ft" },
    ],
    description:
      "A high-yield commercial opportunity designed for passive income with structured payment plan and strong rental proposition.",
    features: [
      "Assured rental structure (as per offering)",
      "Best offer: lock 100 sq.ft & get 200 sq.ft (as per campaign)",
      "Premium commercial destination positioning",
      "Built for investors: strong unit economics + exit potential",
    ],
    primaryCta: { label: "Call to Book", href: "tel:+918860098411" },
    secondaryCta: { label: "WhatsApp Now", href: "https://wa.me/919838898582" },
  },
  {
    slug: "expressway-retreat",
    title: "Expressway Retreat",
    subtitle: "Smart Plots • Dholera SIR Belt • Expressway Connectivity",
    category: "Land",
    location: "Adhelai (Dholera SIR Region)",
    heroImage: "/images/projects/dholera-global.jpg",
    badges: ["Smart Plots", "Pre-Launch Pricing", "Possession Planning"],
    highlights: [
      { label: "Total Area", value: "26,536 sq. yd (2,38,824 sq. ft)" },
      { label: "Nearby", value: "Dholera–Bhavnagar Expressway Road" },
      { label: "Token/EOI", value: "₹1 Lakh" },
      { label: "Indicative Rate", value: "₹8,999/sq. yd (offer)" },
    ],
    description:
      "A plotted development positioned as an eastern gateway to Dholera SIR with multi-modal connectivity and lifestyle amenities.",
    features: [
      "Prime proximity to Dholera smart city ecosystem",
      "Express access via NH751 / Ahmedabad–Dholera Expressway (as per brochure)",
      "Lifestyle amenities: pool, gym, yoga pavilion, sports courts, meditation/zen zones (as per brochure)",
      "Structured payment plan with defined timelines (as per brochure)",
    ],
    brochure: { label: "Download Brochure (PDF)", href: "/brochures/expressway-retreat.pdf" },
    primaryCta: { label: "Enquire Now", href: "/contact" },
  },
  {
    slug: "dholera-uae-india",
    title: "Dholera — UAE–India Partnership",
    subtitle: "Strategic interest & infrastructure narrative (campaign visual)",
    category: "Advisory",
    location: "Gujarat",
    heroImage: "/images/projects/dholera-uae-india.jpg",
    badges: ["Infrastructure", "Logistics", "Smart City"],
    highlights: [
      { label: "Focus", value: "Logistics + Industry + Energy" },
      { label: "Use", value: "Investor advisory / awareness" },
      { label: "Format", value: "Campaign Creative" },
      { label: "CTA", value: "Talk to our advisors" },
    ],
    description:
      "We help clients understand macro drivers, infrastructure corridors, and how to position capital in long-term growth regions.",
    features: [
      "Investment thesis building",
      "Risk checks & documentation guidance",
      "Exit strategy support",
      "Transparent, client-first advisory",
    ],
    primaryCta: { label: "Speak to Advisor", href: "/contact" },
  },
];
