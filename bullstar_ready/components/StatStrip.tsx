import Container from "./Container";
import Reveal from "./Reveal";

const stats = [
  { k: "15+", v: "Years in Premium Realty Advisory" },
  { k: "High-Trust", v: "Client-first, transparent dealing" },
  { k: "360°", v: "End-to-end support: search → closure" },
  { k: "Smart", v: "Investment-first approach with ROI focus" },
];

export default function StatStrip() {
  return (
    <div className="relative">
      <Container className="mt-10">
        <div className="glass luxe-border grid gap-4 rounded-3xl p-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-gold">{s.k}</div>
                <div className="mt-1 text-sm text-white/70">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
