"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, PhoneCall } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const panel = useMemo(
    () => (
      <div
        className={cn(
          "fixed inset-0 z-[70] transition",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[88%] max-w-sm glass luxe-border p-5 shadow-luxe transition-transform",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Bullstar Realty"
                width={38}
                height={38}
                className="rounded-2xl"
              />
              <div className="text-sm font-semibold">{site.name}</div>
            </div>
            <button
              className="glass luxe-border rounded-2xl p-2 hover:bg-white/10"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 grid gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10"
              >
                {n.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 grid gap-3">
            <Button href={`tel:${site.phone}`} className="w-full justify-center">
              <PhoneCall className="h-4 w-4" />
              Call Now
            </Button>
            <Button
              href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
              variant="soft"
              className="w-full justify-center"
            >
              WhatsApp
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-xs text-white/60">Theme</div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    ),
    [open]
  );

  return (
    <>
      <header
        className={cn(
          "fixed left-0 top-0 z-50 w-full transition",
          scrolled ? "bg-black/35 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Bullstar Realty"
              width={38}
              height={38}
              className="rounded-2xl"
              priority
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">{site.name}</div>
              <div className="text-[11px] text-white/60">{site.tagline}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button href="/contact">Get Consultation</Button>
          </div>

          <button
            className="glass luxe-border rounded-2xl p-2 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </header>

      {panel}
      <div className="h-16" />
    </>
  );
}
