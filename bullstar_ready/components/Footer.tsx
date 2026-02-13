import Container from "./Container";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/20">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">{site.name}</div>
            <p className="mt-2 text-sm text-white/70">
              Premium real estate consultancy in Noida — residential, commercial, and smart investment advisory.
            </p>
            <p className="mt-4 text-xs text-white/55">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="mt-4 text-xs text-white/55">
              Developed by{" "}
              <Link
                href="https://www.linkedin.com/in/yusufahmad786/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 underline underline-offset-4 hover:text-white"
              >
                Yusuf Ahmad
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-2 text-sm">
            <div className="text-xs font-semibold text-white/60">Quick Links</div>
            <Link className="text-white/80 hover:text-white" href="/projects">Projects</Link>
            <Link className="text-white/80 hover:text-white" href="/services">Services</Link>
            <Link className="text-white/80 hover:text-white" href="/about">About</Link>
            <Link className="text-white/80 hover:text-white" href="/contact">Contact</Link>
          </div>

          <div className="grid gap-2 text-sm">
            <div className="text-xs font-semibold text-white/60">Contact</div>
            <a className="text-white/80 hover:text-white" href={`tel:${site.phone}`}>{site.phone}</a>
            <a className="text-white/80 hover:text-white" href={`https://wa.me/${site.whatsapp.replace("+","")}`}>WhatsApp</a>
            <div className="text-white/70">{site.location}</div>
            <a className="text-white/80 hover:text-white" href={site.socials.linkedinCompany} target="_blank">
              LinkedIn (Company)
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
