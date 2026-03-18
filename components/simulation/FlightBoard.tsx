import { Plane, Truck } from "lucide-react";
import { RegistroAvion } from "@/domain/types/simulacionTypes";
import { familiaLabels, tamanoLabels } from "@/lib/labels";
import { PatternBadge } from "@/components/simulation/PatternBadge";
import { StatusBadge } from "@/components/simulation/StatusBadge";

type FlightBoardProps = {
  registros: RegistroAvion[];
  selectedId: string | undefined;
  onSelect: (id: string) => void;
};

export function FlightBoard({ registros, selectedId, onSelect }: FlightBoardProps) {
  return (
    <section className="glass-panel rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-700/80 px-5 py-4">
        <h2 className="text-2xl font-semibold text-slate-100">Terminal Departures</h2>
        <p className="terminal-title text-[11px] text-slate-400">
          Real-time object instantiation board
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
          <thead className="bg-slate-900/90 text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Flight / Model</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Scale</th>
              <th className="px-4 py-3 font-semibold">Pattern Engine</th> 
              <th className="px-4 py-3 font-semibold">System Status</th>
            </tr>
          </thead>
          <tbody className="bg-slate-950/35 text-slate-200">
            {registros.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-7 text-center text-slate-400">
                  Aun no hay aviones. Crea uno desde el panel Object Generator.
                </td>
              </tr>
            )}

            {registros.map((registro) => (
              <tr
                key={registro.idRegistro}
                onClick={() => onSelect(registro.idRegistro)}
                className={`cursor-pointer border-t border-slate-800/80 transition ${
                  registro.idRegistro === selectedId ? "bg-cyan-400/8" : "hover:bg-slate-900/60"
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {registro.avion.familia === "comercial" ? (
                      <Plane className="h-4 w-4 text-cyan-300" />
                    ) : (
                      <Truck className="h-4 w-4 text-amber-300" />
                    )}
                    <div>
                      <p className="font-semibold">{registro.avion.codigoVuelo}</p>
                      <p className="text-xs text-slate-400">{registro.avion.nombreModelo}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">{familiaLabels[registro.avion.familia]}</td>
                <td className="px-4 py-3">{tamanoLabels[registro.avion.tamano]}</td>
                <td className="px-4 py-3">
                  <PatternBadge patron={registro.patron} />
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={registro.avion.estado} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
