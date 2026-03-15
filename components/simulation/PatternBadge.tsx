import { PatronCreacional } from "@/domain/types/avionTypes";
import { patronLabels } from "@/lib/labels";

type PatternBadgeProps = {
  patron: PatronCreacional;
};

export function PatternBadge({ patron }: PatternBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-md border px-2 py-1 text-[11px] font-semibold uppercase tracking-wide ${
        patron === "factory_method"
          ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
          : "border-amber-400/40 bg-amber-300/10 text-amber-200"
      }`}
    >
      {patronLabels[patron]}
    </span>
  );
}
