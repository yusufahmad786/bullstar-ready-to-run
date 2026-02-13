"use client";

import { motion } from "framer-motion";

const items = [
  { name: "Investor Client", quote: "Clear numbers, zero fluff. The rental math was explained upfront." },
  { name: "Commercial Buyer", quote: "Fast shortlisting + strong negotiation support. Smooth transaction." },
  { name: "Family Home Buyer", quote: "We felt guided end-to-end — documentation, visits, and closure." },
  { name: "NRI Client", quote: "Remote coordination was effortless. Updates were timely and transparent." },
];

export default function TestimonialMarquee() {
  return (
    <div className="mt-10 overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((t, idx) => (
          <div
            key={idx}
            className="min-w-[280px] glass luxe-border rounded-3xl p-5 md:min-w-[360px]"
          >
            <div className="text-sm font-semibold">{t.name}</div>
            <p className="mt-2 text-sm text-white/70">“{t.quote}”</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
