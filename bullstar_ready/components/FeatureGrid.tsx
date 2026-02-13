import { ShieldCheck, Sparkles, LineChart, Handshake } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: ShieldCheck, title: "Trust & Compliance", desc: "Transparent advisory, documentation-first approach, zero surprises." },
  { icon: Sparkles, title: "Premium Inventory", desc: "High-end residential & commercial opportunities curated for quality." },
  { icon: LineChart, title: "Investment Thinking", desc: "ROI, exit strategy, and rental potential modeled clearly." },
  { icon: Handshake, title: "End-to-End Support", desc: "Shortlist → site visits → negotiation → closure support." },
];

export default function FeatureGrid() {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <Reveal key={it.title} delay={i * 0.06}>
            <div className="glass luxe-border rounded-3xl p-6 shadow-luxe">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-base font-semibold">{it.title}</div>
                  <div className="mt-1 text-sm text-white/70">{it.desc}</div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
