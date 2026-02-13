import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  className,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
        <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {desc && <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>}
    </div>
  );
}
