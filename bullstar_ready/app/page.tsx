import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import StatStrip from "@/components/StatStrip";
import FeatureGrid from "@/components/FeatureGrid";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-60" />
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Bullstar Realty"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-bg" />
        </div>

        <Container className="relative py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  Noida • Luxury • Commercial • Smart Investments
                </div>

                <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                  <span className="font-display">Bull Star Realty</span>
                  <span className="block bg-gradient-to-r from-gold via-white to-white/70 bg-clip-text text-transparent">
                    Trusted advisory that feels premium — and performs.
                  </span>
                </h1>

                <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                  {site.headline}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/projects">Explore Projects</Button>
                  <Button href="/contact" variant="soft">
                    Get Consultation
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/60">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Documentation-first</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">ROI clarity</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Negotiation support</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">End-to-end closure</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass luxe-border rounded-3xl p-6 shadow-luxe">
                <div className="text-xs text-white/60">Founder</div>
                <div className="mt-2 flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-3xl border border-white/10">
                    <Image
                      src="/images/founder.jpg"
                      alt={site.founder.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gold">{site.founder.name}</div>
                    <div className="text-sm text-white/70">{site.founder.role} • {site.founder.pronouns}</div>
                    <div className="mt-1 text-xs text-white/60">{site.founder.oneLiner}</div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">Call</div>
                    <a className="mt-1 block text-sm font-semibold text-white hover:text-gold" href={`tel:${site.phone}`}>
                      {site.phone}
                    </a>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">WhatsApp</div>
                    <a
                      className="mt-1 block text-sm font-semibold text-white hover:text-gold"
                      href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
                      target="_blank"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-white/60">
                  “We don’t just deal in properties — we build relationships and deliver clarity.”
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <StatStrip />

      {/* WHY US */}
      <section className="mt-16">
        <Container>
          <SectionHeading
            eyebrow="Why Bullstar"
            title="A premium experience — with investor-grade clarity."
            desc="We combine local market expertise with structured advisory so customers feel confident from shortlisting to closure."
          />
          <FeatureGrid />
          <TestimonialMarquee />
        </Container>
      </section>

      {/* CTA */}
      <section className="mt-16">
        <Container>
          <div className="glass luxe-border rounded-3xl p-8 shadow-luxe">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <div className="text-xs font-semibold text-white/60">Ready to move?</div>
                <div className="mt-2 text-2xl font-semibold md:text-3xl">
                  Get a curated shortlist in <span className="text-gold">24–48 hours</span>.
                </div>
                <div className="mt-2 text-sm text-white/70">
                  Tell us your budget + location preference. We’ll share the best options with transparent pros/cons.
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Request Call Back</Button>
                <Button href="/projects" variant="soft">
                  Browse Projects
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
