import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/Button";

const services = [
  {
    title: "Residential Buying & Selling",
    desc: "Premium shortlisting, transparent pricing discussion, and end-to-end closure support.",
  },
  {
    title: "Commercial Investment Advisory",
    desc: "ROI-driven recommendations for retail/office assets with rental & exit thinking.",
  },
  {
    title: "Luxury Properties",
    desc: "High-end inventory access with privacy, speed, and negotiation support.",
  },
  {
    title: "Documentation & Transaction Support",
    desc: "Process guidance, verification, paperwork checks, and smooth execution.",
  },
  {
    title: "Smart Investments (Passive Income)",
    desc: "Assured rental / structured plans — clarity-first evaluation and risk checks.",
  },
  {
    title: "Market Intelligence",
    desc: "Local Noida insights — micro-market selection, pricing signals and timing guidance.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-10">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything you need — from discovery to closure."
          desc="A premium advisory experience built around clarity, speed, and trust."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="glass luxe-border rounded-3xl p-6 shadow-luxe">
                <div className="text-base font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-white/70">{s.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 glass luxe-border rounded-3xl p-8 shadow-luxe">
          <div className="text-2xl font-semibold md:text-3xl">
            Want a curated shortlist?
          </div>
          <div className="mt-2 text-sm text-white/70">
            Share your requirement — budget, location, purpose — and we’ll shortlist the best matches.
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Request Call Back</Button>
            <Button href="/projects" variant="soft">Explore Projects</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
