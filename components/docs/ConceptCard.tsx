import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type ConceptCardProps = {
  title: string;
  subtitle: string;
  points: string[];
  icon: LucideIcon;
  accent: "cyan" | "amber" | "slate";
};

const accentClasses: Record<ConceptCardProps["accent"], string> = {
  cyan: "border-cyan-300/45 bg-cyan-400/8",
  amber: "border-amber-300/45 bg-amber-300/8",
  slate: "border-slate-500/45 bg-slate-800/45",
};

export function ConceptCard({
  title,
  subtitle,
  points,
  icon: Icon,
  accent,
}: ConceptCardProps) {
  return (
    <article
      className={cn(
        "glass-panel rounded-2xl border p-6 transition hover:-translate-y-1",
        accentClasses[accent],
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="terminal-title text-[11px] text-slate-400">Concepto</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-100">{title}</h3>
        </div>
        <Icon className="h-5 w-5 text-cyan-300" />
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-300">{subtitle}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-200">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
