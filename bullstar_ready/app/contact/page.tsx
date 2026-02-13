"use client";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import LeadModal from "@/components/LeadModal";
import { site } from "@/lib/site";
import { useState } from "react";

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="pt-10">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Talk to Bullstar — we’ll guide you like an investor."
          desc="Call, WhatsApp, or request a callback. We’ll help you shortlist, compare and close confidently."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="glass luxe-border rounded-3xl p-6 shadow-luxe">
            <div className="text-sm font-semibold">Direct Connect</div>
            <div className="mt-4 grid gap-3">
              <a className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10" href={`tel:${site.phone}`}>
                <div className="text-xs text-white/60">Call</div>
                <div className="mt-1 text-sm font-semibold text-gold">{site.phone}</div>
              </a>
              <a
                className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
                target="_blank"
              >
                <div className="text-xs text-white/60">WhatsApp</div>
                <div className="mt-1 text-sm font-semibold text-gold">Chat Now</div>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60">Office</div>
                <div className="mt-1 text-sm text-white/75">{site.location}</div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => setOpen(true)}>Request Callback</Button>
              <Button href="/projects" variant="soft">View Projects</Button>
            </div>
          </div>

          <div className="glass luxe-border rounded-3xl p-6 shadow-luxe">
            <div className="text-sm font-semibold">Map (quick view)</div>
            <p className="mt-2 text-sm text-white/70">
              Replace this embed with your exact office pin when ready.
            </p>

            <div className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <iframe
                title="Noida map"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Noida%20Uttar%20Pradesh&output=embed"
              />
            </div>
          </div>
        </div>
      </Container>

      <LeadModal open={open} onClose={() => setOpen(false)} defaultIntent="Invest" />
    </main>
  );
}
