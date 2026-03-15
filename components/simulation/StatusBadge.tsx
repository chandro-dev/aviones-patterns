import { EstadoAvion } from "@/domain/types/avionTypes";
import { estadoLabels } from "@/lib/labels";

type StatusBadgeProps = {
  status: EstadoAvion;
};

const styles: Record<EstadoAvion, string> = {
  en_tierra: "border-slate-500/55 bg-slate-500/15 text-slate-200",
  despegando: "border-cyan-300/50 bg-cyan-500/15 text-cyan-200",
  en_vuelo: "border-emerald-400/50 bg-emerald-500/15 text-emerald-200",
  aterrizando: "border-orange-300/50 bg-orange-500/15 text-orange-200",
  repostando: "border-amber-300/50 bg-amber-500/15 text-amber-200",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex rounded-md border px-2 py-1 text-[11px] font-semibold uppercase tracking-wide ${styles[status]}`}>
      {estadoLabels[status]}
    </span>
  );
}
