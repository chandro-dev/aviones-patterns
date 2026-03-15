"use client";

import { useMemo, useState } from "react";
import { AircraftDetail } from "@/components/simulation/AircraftDetail";
import { ControlPanel } from "@/components/simulation/ControlPanel";
import { FlightBoard } from "@/components/simulation/FlightBoard";
import { FamiliaAvion, PatronCreacional, TamanoAvion } from "@/domain/types/avionTypes";
import { AccionVuelo, RegistroAvion } from "@/domain/types/simulacionTypes";
import { crearAvionConPatron } from "@/lib/crearAvionConPatron";

function horaActual() {
  return new Intl.DateTimeFormat("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

function ejecutarAccionEnAvion(registro: RegistroAvion, accion: AccionVuelo): string {
  if (accion === "despegar") {
    return registro.avion.despegar();
  }

  if (accion === "aterrizar") {
    return registro.avion.aterrizar();
  }

  if (accion === "volar") {
    return registro.avion.volar();
  }

  if (accion === "cargar_combustible") {
    return registro.avion.cargarCombustible();
  }

  return registro.avion.obtenerInformacion();
}

export function SimulationWorkspace() {
  const [patron, setPatron] = useState<PatronCreacional>("factory_method");
  const [familia, setFamilia] = useState<FamiliaAvion>("comercial");
  const [tamano, setTamano] = useState<TamanoAvion>("mediano");
  const [registros, setRegistros] = useState<RegistroAvion[]>([]);
  const [selectedId, setSelectedId] = useState<string>();
  const [globalLog, setGlobalLog] = useState<string[]>([]);

  const selectedRegistro = useMemo(
    () => registros.find((registro) => registro.idRegistro === selectedId),
    [registros, selectedId],
  );

  const crearAvion = () => {
    const avion = crearAvionConPatron({
      patron,
      familia,
      tamano,
    });
    const registro: RegistroAvion = {
      idRegistro: `${avion.id}-${Date.now()}`,
      avion,
      patron,
      creadoEn: new Date().toISOString(),
      actividad: [`[${horaActual()}] Avion creado y listo para inspeccion.`],
    };

    setRegistros((prev) => [registro, ...prev]);
    setSelectedId(registro.idRegistro);
    setGlobalLog((prev) => [`[${horaActual()}] ${avion.codigoVuelo} generado en terminal.`, ...prev].slice(0, 14));
  };

  const ejecutarAccion = (accion: AccionVuelo) => {
    if (!selectedRegistro) {
      return;
    }

    const mensaje = ejecutarAccionEnAvion(selectedRegistro, accion);
    const registroActualizado: RegistroAvion = {
      ...selectedRegistro,
      actividad: [`[${horaActual()}] ${mensaje}`, ...selectedRegistro.actividad].slice(0, 10),
    };

    setRegistros((prev) =>
      prev.map((registro) =>
        registro.idRegistro === registroActualizado.idRegistro ? registroActualizado : registro,
      ),
    );

    setGlobalLog((prev) => [`[${horaActual()}] ${mensaje}`, ...prev].slice(0, 14));
  };

  return (
    <div className="space-y-5">
      <FlightBoard registros={registros} selectedId={selectedId} onSelect={setSelectedId} />

      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <AircraftDetail record={selectedRegistro} onAction={ejecutarAccion} />
        <ControlPanel
          patron={patron}
          familia={familia}
          tamano={tamano}
          onPatronChange={setPatron}
          onFamiliaChange={setFamilia}
          onTamanoChange={setTamano}
          onCreate={crearAvion}
        />
      </div>

      <section className="glass-panel rounded-2xl p-5 md:p-6">
        <h3 className="text-xl font-semibold text-slate-100">Terminal Activity Feed</h3>
        <div className="mt-4 grid gap-2">
          {globalLog.length === 0 && (
            <p className="text-sm text-slate-400">
              Sin eventos aun. Crea un avion y ejecuta comportamientos.
            </p>
          )}
          {globalLog.map((entry) => (
            <div
              key={entry}
              className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-300"
            >
              {entry}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
