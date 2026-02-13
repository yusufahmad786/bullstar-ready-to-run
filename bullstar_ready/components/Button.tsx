import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "soft";
  className?: string;
  target?: "_blank" | "_self";
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  target,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition will-change-transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-gold/30";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-b from-gold to-gold2 text-black shadow-glow hover:brightness-110"
      : variant === "soft"
      ? "glass luxe-border text-white hover:bg-white/10"
      : "text-white hover:bg-white/5";

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        target={target ?? (isExternal ? "_blank" : "_self")}
        className={cn(base, styles, className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cn(base, styles, className)}>
      {children}
    </button>
  );
}
