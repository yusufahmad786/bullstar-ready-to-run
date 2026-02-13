"use client";

import Image from "next/image";
import Badge from "./Badge";
import { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <button
      onClick={() => onOpen(project)}
      className={cn(
        "group w-full text-left glass luxe-border rounded-3xl overflow-hidden shadow-luxe hover:brightness-110 transition"
      )}
    >
      <div className="relative h-44 w-full">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover opacity-90 group-hover:opacity-100 transition"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.badges.slice(0, 2).map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs text-white/60">{project.category} • {project.location}</div>
            <div className="mt-1 text-lg font-semibold">{project.title}</div>
            <div className="mt-1 text-sm text-white/70">{project.subtitle}</div>
          </div>
          <span className="hidden md:inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gold">
            Quick View
          </span>
        </div>
      </div>
    </button>
  );
}
