"use client";

import { useMemo, useState } from "react";
import { formatINR } from "@/lib/utils";
import { Button } from "./Button";

export default function ROICalculator() {
  const [investment, setInvestment] = useState<number>(3550000);
  const [monthlyRent, setMonthlyRent] = useState<number>(32000);

  const calc = useMemo(() => {
    const annual = monthlyRent * 12;
    const roi = investment > 0 ? (annual / investment) * 100 : 0;
    const paybackYears = annual > 0 ? investment / annual : 0;
    return { annual, roi, paybackYears };
  }, [investment, monthlyRent]);

  return (
    <div className="glass luxe-border rounded-3xl p-6">
      <div className="text-sm font-semibold">GYGY FIVEO — Quick ROI Calculator</div>
      <p className="mt-2 text-sm text-white/70">
        Adjust the inputs to estimate annual return & payback time.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/60">Investment (₹)</div>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30"
          />
          <div className="mt-2 text-xs text-white/50">
            Current: ₹{formatINR(investment)}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/60">Monthly Rent (₹)</div>
          <input
            type="number"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(Number(e.target.value))}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30"
          />
          <div className="mt-2 text-xs text-white/50">
            Current: ₹{formatINR(monthlyRent)} / month
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/60">Annual Return</div>
          <div className="mt-1 text-lg font-semibold text-gold">₹{formatINR(calc.annual)}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/60">ROI (approx.)</div>
          <div className="mt-1 text-lg font-semibold text-gold">{calc.roi.toFixed(2)}%</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/60">Payback</div>
          <div className="mt-1 text-lg font-semibold text-gold">{calc.paybackYears.toFixed(1)} yrs</div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="text-xs text-white/55">
          Disclaimer: ROI is a simple estimate based on inputs; actual returns depend on terms & market factors.
        </div>
        <Button href="tel:+919838898582">Talk to an Advisor</Button>
      </div>
    </div>
  );
}
