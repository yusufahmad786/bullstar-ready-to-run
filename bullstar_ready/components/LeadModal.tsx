"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { Button } from "./Button";

const Schema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(8, "Enter a valid phone number"),
  intent: z.string().min(2, "Select an intent"),
  message: z.string().optional(),
});

type Lead = z.infer<typeof Schema>;

export default function LeadModal({
  open,
  onClose,
  defaultIntent,
}: {
  open: boolean;
  onClose: () => void;
  defaultIntent?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const form = useForm<Lead>({
    resolver: zodResolver(Schema),
    defaultValues: { intent: defaultIntent ?? "Buy", message: "" },
  });

  useEffect(() => {
    if (open) setStatus("idle");
  }, [open]);

  if (!open) return null;

  const submit = async (data: Lead) => {
    try {
      setStatus("sending");
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset({ name: "", phone: "", intent: defaultIntent ?? "Buy", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[90]">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2 glass luxe-border rounded-3xl shadow-luxe p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Get a Call Back</div>
            <div className="mt-1 text-sm text-white/70">
              Share your requirement — we’ll shortlist the best options and guide you end-to-end.
            </div>
          </div>
          <button
            onClick={onClose}
            className="glass luxe-border rounded-2xl p-2 hover:bg-white/10"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form className="mt-5 grid gap-3" onSubmit={form.handleSubmit(submit)}>
          <div className="grid gap-2">
            <label className="text-xs text-white/60">Full Name</label>
            <input
              {...form.register("name")}
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30"
              placeholder="Your name"
            />
            {form.formState.errors.name && (
              <div className="text-xs text-red-300">{form.formState.errors.name.message}</div>
            )}
          </div>

          <div className="grid gap-2">
            <label className="text-xs text-white/60">Phone</label>
            <input
              {...form.register("phone")}
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30"
              placeholder="+91..."
            />
            {form.formState.errors.phone && (
              <div className="text-xs text-red-300">{form.formState.errors.phone.message}</div>
            )}
          </div>

          <div className="grid gap-2">
            <label className="text-xs text-white/60">I’m looking to</label>
            <select
              {...form.register("intent")}
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30"
            >
              <option>Buy</option>
              <option>Sell</option>
              <option>Invest</option>
              <option>Rent</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-xs text-white/60">Message (optional)</label>
            <textarea
              {...form.register("message")}
              rows={3}
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30"
              placeholder="Budget, preferred area, property type..."
            />
          </div>

          <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-white/55">
              {status === "idle" && "We typically respond within working hours."}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✅ Submitted. We’ll contact you shortly."}
              {status === "error" && "⚠️ Something failed. Try again or WhatsApp us."}
            </div>
            <div className="flex gap-3">
              <Button href="https://wa.me/918860098411" variant="soft">
                WhatsApp
              </Button>
              <Button onClick={form.handleSubmit(submit)}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
