import type { ComponentType } from "react";
import { StatusBadge } from "@/components/simulation/StatusBadge";
import { AccionVuelo, RegistroAvion } from "@/domain/types/simulacionTypes";
import { familiaLabels, tamanoLabels } from "@/lib/labels";
import { CircleGauge, Fuel, Info, PlaneLanding, PlaneTakeoff, Wind } from "lucide-react";

interface AircraftDetailProps {
  record?: RegistroAvion;
  onAction: (action: AccionVuelo) => void;
}

const actions: Array<{ action: AccionVuelo; label: string; icon: ComponentType<{ className?: string }> }> = [
  { action: "despegar", label: "Despegar", icon: PlaneTakeoff },
  { action: "aterrizar", label: "Aterrizar", icon: PlaneLanding },
  { action: "volar", label: "Volar", icon: Wind },
  { action: "cargar_combustible", label: "Cargar Combustible", icon: Fuel },
  { action: "obtener_info", label: "Obtener Info", icon: Info },
];

export function AircraftDetail({ record, onAction }: AircraftDetailProps) {
  if (!record) {
    return (
      <section className="glass-panel rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-slate-100">Live Inspection</h2>
        <p className="mt-2 text-sm text-slate-300">
          Selecciona un avion desde el tablero para ver su ficha tecnica y ejecutar comportamientos.
        </p>
      </section>
    );
  }

  return (
    <section className="glass-panel rounded-2xl p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="terminal-title text-xs text-amber-300">Live Inspection</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-100">{record.avion.nombreModelo}</h2>
          <p className="mt-1 text-sm text-slate-300">
            {record.avion.codigoVuelo} | {familiaLabels[record.avion.familia]} |{" "}
            {tamanoLabels[record.avion.tamano]}
          </p>
        </div>
        <StatusBadge status={record.avion.estado} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">
          <p className="terminal-title text-[11px] text-slate-400">Capacidad</p>
          <p className="mt-2 text-2xl font-semibold text-cyan-200">{record.avion.capacidad}</p>
        </article>
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">
          <p className="terminal-title text-[11px] text-slate-400">Autonomia</p>
          <p className="mt-2 text-2xl font-semibold text-cyan-200">{record.avion.autonomiaKm} KM</p>
        </article>
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">
          <p className="terminal-title text-[11px] text-slate-400">Combustible</p>
          <p className="mt-2 text-2xl font-semibold text-amber-200">{record.avion.combustible}%</p>
        </article>
      </div>

      <div className="mt-6 grid gap-2 md:grid-cols-3">
        {actions.map(({ action, label, icon: Icon }) => (
          <button
            key={action}
            type="button"
            onClick={() => onAction(action)}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-700/70 bg-slate-900/65 px-3 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-500/10"
          >
            <Icon className="h-4 w-4 text-cyan-300" />
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200">
          <CircleGauge className="h-4 w-4 text-cyan-300" />
          Flight Log
        </div>
        <div className="max-h-44 space-y-2 overflow-y-auto pr-1">
          {record.actividad.map((line) => (
            <p
              key={line}
              className="rounded-lg border border-slate-800/70 bg-slate-900/65 px-3 py-2 text-xs text-slate-300"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
