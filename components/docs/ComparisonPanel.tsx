export function ComparisonPanel() {
  return (
    <section className="glass-panel rounded-2xl p-6 md:p-7">
      <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
        Diferencias clave entre patrones
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
        Ambos resuelven creacion de objetos, pero con escalas diferentes. Factory Method delega
        la creacion de una variante concreta; Abstract Factory entrega un conjunto coherente de
        variantes.
      </p>

      <div className="mt-6 overflow-hidden rounded-xl border border-slate-700/80">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-900/90 text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Criterio</th>
              <th className="px-4 py-3 font-semibold">Factory Method</th>
              <th className="px-4 py-3 font-semibold">Abstract Factory</th>
            </tr>
          </thead>
          <tbody className="bg-slate-950/45 text-slate-300">
            <tr className="border-t border-slate-700/80">
              <td className="px-4 py-3 text-slate-200">Enfoque</td>
              <td className="px-4 py-3">Crea un producto por medio de una subclase concreta.</td>
              <td className="px-4 py-3">
                Crea familias de productos relacionados sin exponer clases concretas.
              </td>
            </tr>
            <tr className="border-t border-slate-700/80">
              <td className="px-4 py-3 text-slate-200">Escala</td>
              <td className="px-4 py-3">Variacion puntual (ej. tamano).</td>
              <td className="px-4 py-3">Variacion de ecosistema completo (ej. familia).</td>
            </tr>
            <tr className="border-t border-slate-700/80">
              <td className="px-4 py-3 text-slate-200">Aplicacion en este proyecto</td>
              <td className="px-4 py-3">
                `FabricaAvionPequeno/Mediano/Grande` decide modelo comercial o carga.
              </td>
              <td className="px-4 py-3">
                `FabricaAvionesComerciales/Carga` genera pequeno, mediano y grande de su familia.
              </td>
            </tr>
            <tr className="border-t border-slate-700/80">
              <td className="px-4 py-3 text-slate-200">Beneficio OO</td>
              <td className="px-4 py-3">Reduce acoplamiento al crear un solo objeto.</td>
              <td className="px-4 py-3">Asegura consistencia de objetos relacionados.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
