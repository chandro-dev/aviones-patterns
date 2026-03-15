import { SimulationWorkspace } from "@/components/simulation/SimulationWorkspace";

export default function SimulacionPage() {
  return (
    <section className="space-y-6 animated-appear">
      <header className="glass-panel rounded-3xl p-7 md:p-9">
        <p className="terminal-title text-xs text-cyan-300">Factory Control</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
          Simulador visual de creacion de aviones
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
          Genera objetos con Factory Method o Abstract Factory. Selecciona familia y tamano,
          visualiza los aviones en el tablero y ejecuta sus comportamientos en tiempo real.
        </p>
      </header>
      <SimulationWorkspace />
    </section>
  );
}
