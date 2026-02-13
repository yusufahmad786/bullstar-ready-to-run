"use client";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { projects, ProjectCategory, Project } from "@/lib/projects";
import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectQuickView from "@/components/ProjectQuickView";
import ROICalculator from "@/components/ROICalculator";
import LeadModal from "@/components/LeadModal";
import { Button } from "@/components/Button";

const categories: (ProjectCategory | "All")[] = ["All", "Commercial", "Land", "Investment", "Advisory"];

export default function ProjectsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);
  const [leadOpen, setLeadOpen] = useState(false);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const okCat = active === "All" ? true : p.category === active;
      const okQ =
        q.trim().length === 0
          ? true
          : (p.title + " " + p.subtitle + " " + p.location).toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
  }, [active, q]);

  return (
    <main className="pt-10">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Curated opportunities — commercial, land & advisory."
          desc="Explore current offerings. Tap any card for quick view, brochure, and call-to-action."
        />

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  active === c ? "bg-gold text-black" : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search (Noida, Dholera, retail, plots...)"
              className="w-full sm:w-[320px] rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30"
            />
            <Button onClick={() => setLeadOpen(true)}>Get Shortlist</Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} onOpen={setSelected} />
          ))}
        </div>

        <div className="mt-12">
          <ROICalculator />
        </div>

        <div className="mt-10 glass luxe-border rounded-3xl p-6">
          <div className="text-sm font-semibold">Expressway Retreat Brochure Viewer</div>
          <p className="mt-2 text-sm text-white/70">
            You can embed the PDF directly or let users download it.
          </p>

          <div className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-black/30">
            <iframe
              src="/brochures/expressway-retreat.pdf"
              className="h-[520px] w-full"
              title="Expressway Retreat Brochure"
            />
          </div>
        </div>
      </Container>

      <ProjectQuickView project={selected} onClose={() => setSelected(null)} />
      <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} defaultIntent="Invest" />
    </main>
  );
}
