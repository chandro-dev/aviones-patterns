import { Plus } from "lucide-react";
import {
  FamiliaAvion,
  PatronCreacional,
  TamanoAvion,
} from "@/domain/types/avionTypes";
import { familiaLabels, patronLabels, tamanoLabels } from "@/lib/labels";

type ControlPanelProps = {
  patron: PatronCreacional;
  familia: FamiliaAvion;
  tamano: TamanoAvion;
  onPatronChange: (value: PatronCreacional) => void;
  onFamiliaChange: (value: FamiliaAvion) => void;
  onTamanoChange: (value: TamanoAvion) => void;
  onCreate: () => void;
};

const patrones: PatronCreacional[] = ["factory_method", "abstract_factory"];
const familias: FamiliaAvion[] = ["comercial", "carga","militar"];
const tamanos: TamanoAvion[] = ["pequeno", "mediano", "grande"];

export function ControlPanel({
  patron,
  familia,
  tamano,
  onPatronChange,
  onFamiliaChange,
  onTamanoChange,
  onCreate,
}: ControlPanelProps) {
  return (
    <section className="glass-panel rounded-2xl p-5 md:p-6">
      <h2 className="text-2xl font-semibold text-slate-100">Object Generator</h2>

      <div className="mt-6 space-y-5">
        <div>
          <p className="terminal-title text-[11px] text-slate-400">Pattern Strategy</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {patrones.map((patternOption) => (
              <button
                key={patternOption}
                type="button"
                onClick={() => onPatronChange(patternOption)}
                className={`rounded-lg border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  patron === patternOption
                    ? "border-cyan-300/60 bg-cyan-400/15 text-cyan-100"
                    : "border-slate-700/80 bg-slate-900/70 text-slate-300 hover:border-slate-600"
                }`}
              >
                {patronLabels[patternOption]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="terminal-title text-[11px] text-slate-400">Aircraft Family</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {familias.map((familyOption) => (
              <button
                key={familyOption}
                type="button"
                onClick={() => onFamiliaChange(familyOption)}
                className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                  familia === familyOption
                    ? "border-cyan-300/60 bg-cyan-400/12 text-cyan-100"
                    : "border-slate-700/80 bg-slate-900/70 text-slate-300 hover:border-slate-600"
                }`}
              >
                {familiaLabels[familyOption]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="terminal-title text-[11px] text-slate-400">Configuration Scale</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {tamanos.map((sizeOption) => (
              <button
                key={sizeOption}
                type="button"
                onClick={() => onTamanoChange(sizeOption)}
                className={`rounded-lg border px-2 py-2 text-xs font-medium transition ${
                  tamano === sizeOption
                    ? "border-cyan-300/60 bg-cyan-400/12 text-cyan-100"
                    : "border-slate-700/80 bg-slate-900/70 text-slate-300 hover:border-slate-600"
                }`}
              >
                {tamanoLabels[sizeOption]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-700/75 bg-slate-900/70 p-4 text-sm text-slate-300">
        {patron === "factory_method"
          ? "Factory Method crea una aeronave puntual, delegando la instancia a una fabrica concreta por tamano."
          : "Abstract Factory genera variantes dentro de una familia completa, manteniendo consistencia entre modelos."}
      </div>

      <button
        type="button"
        onClick={onCreate}
        className="soft-glow mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400/95 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        <Plus className="h-4 w-4" />
        Crear avion
      </button>
    </section>
  );
}
