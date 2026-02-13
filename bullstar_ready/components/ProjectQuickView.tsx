"use client";

import { Project } from "@/lib/projects";
import { X } from "lucide-react";
import { Button } from "./Button";
import Image from "next/image";
import Badge from "./Badge";

export default function ProjectQuickView({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-3xl -translate-x-1/2 -translate-y-1/2 glass luxe-border rounded-3xl shadow-luxe overflow-hidden">
        <div className="relative h-48">
          <Image src={project.heroImage} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 glass luxe-border rounded-2xl p-2 hover:bg-white/10"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute left-5 bottom-4">
            <div className="text-xs text-white/70">{project.category} • {project.location}</div>
            <div className="text-2xl font-semibold">{project.title}</div>
            <div className="mt-1 text-sm text-white/70">{project.subtitle}</div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {project.badges.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>

          <p className="mt-4 text-sm text-white/75 leading-relaxed">{project.description}</p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {project.highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60">{h.label}</div>
                <div className="mt-1 text-sm font-semibold text-gold">{h.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-2">
            {project.features.map((f) => (
              <div key={f} className="text-sm text-white/70">• {f}</div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
              {project.primaryCta && <Button href={project.primaryCta.href}>{project.primaryCta.label}</Button>}
              {project.secondaryCta && <Button href={project.secondaryCta.href} variant="soft">{project.secondaryCta.label}</Button>}
            </div>
            {project.brochure && (
              <Button href={project.brochure.href} variant="ghost" className="justify-center">
                {project.brochure.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
