import { PatternSnippet } from "@/lib/docs/patternSnippets";

type PatternCodeSectionProps = {
  snippets: PatternSnippet[];
};

export function PatternCodeSection({ snippets }: PatternCodeSectionProps) {
  return (
    <section className="glass-panel rounded-2xl p-6 md:p-7">
      <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
        Codigo inyectado desde la implementacion real
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
        Los siguientes fragmentos se leen directamente de archivos del proyecto. Asi se evidencia
        exactamente donde y como se aplican Factory Method y Abstract Factory.
      </p>

      <div className="mt-5 space-y-4">
        {snippets.map((snippet) => (
          <article
            key={snippet.title}
            className="overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/70"
          >
            <div className="border-b border-slate-700/70 bg-slate-900/75 px-4 py-3">
              <p className="text-sm font-semibold text-slate-100">{snippet.title}</p>
              <p className="mt-1 text-xs text-slate-400">{snippet.description}</p>
              <p className="terminal-title mt-2 text-[10px] text-cyan-300">{snippet.filePath}</p>
            </div>
            <pre className="max-h-[360px] overflow-auto px-4 py-3 text-xs leading-6 text-slate-200">
              <code>{snippet.code}</code>
            </pre>
          </article>
        ))}
      </div>
    </section>
  );
}
