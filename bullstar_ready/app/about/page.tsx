import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { Button } from "@/components/Button";

export default function AboutPage() {
  return (
    <main className="pt-10">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Premium real estate advisory built on trust, clarity, and execution."
          desc="Bull Star Realty is positioned as a high-trust consultancy for residential, commercial, and investment deals in Noida."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="glass luxe-border rounded-3xl p-6 shadow-luxe">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-white/10">
                  <Image src="/images/founder.jpg" alt={site.founder.name} fill className="object-cover" sizes="80px" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Founder & CEO</div>
                  <div className="text-xl font-semibold text-gold">{site.founder.name}</div>
                  <div className="text-sm text-white/70">{site.founder.pronouns}</div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {site.founder.oneLiner}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href={site.socials.founderLinkedin} variant="soft">
                  View LinkedIn
                </Button>
                <Button href="/contact">Book Consultation</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass luxe-border rounded-3xl p-6 shadow-luxe">
              <div className="text-sm font-semibold">What makes us different</div>
              <div className="mt-4 grid gap-3">
                {[
                  "Premium inventory & strong local market intelligence",
                  "Clear ROI lens for investors — rental math + exit thinking",
                  "Documentation + compliance support from day one",
                  "Negotiation, closure and post-sale guidance",
                ].map((x) => (
                  <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                    • {x}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </main>
  );
}
