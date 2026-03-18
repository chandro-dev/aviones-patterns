import { ComparisonPanel } from "@/components/docs/ComparisonPanel";
import { ConceptCard } from "@/components/docs/ConceptCard";
import { FlowStage } from "@/components/docs/FlowStage";
import { PatternCodeSection } from "@/components/docs/PatternCodeSection";
import { getPatternSnippets } from "@/lib/docs/patternSnippets";
import type { LucideIcon } from "lucide-react";
import { GitBranch, Hammer, Layers3, Puzzle, Route } from "lucide-react";

type ConceptCardData = {
  title: string;
  subtitle: string;
  points: string[];
  icon: LucideIcon;
  accent: "cyan" | "amber" | "slate";
};

const conceptCards: ConceptCardData[] = [
  {
    title: "Factory Method",
    subtitle: "Crea un producto usando una fabrica concreta por contexto.",
    points: [
      "Define un metodo de creacion en una clase base.",
      "Cada subclase decide que clase concreta instanciar.",
      "En el proyecto, las fabricas por tamano delegan el ensamblado en Builder.",
    ],
    icon: GitBranch,
    accent: "cyan",
  },
  {
    title: "Abstract Factory",
    subtitle: "Crea familias de productos relacionados entre si.",
    points: [
      "Expone metodos para crear multiples variantes del producto.",
      "Garantiza consistencia entre objetos de una familia.",
      "En el proyecto, cada fabrica familiar usa Builder para crear pequeno/mediano/grande.",
    ],
    icon: Layers3,
    accent: "amber",
  },
  {
    title: "Builder",
    subtitle: "Construye objetos complejos paso a paso con una API fluida.",
    points: [
      "Define un contrato de ensamblado en `IAvionBuilder`.",
      "Permite configurar modelo, capacidad, autonomia, motores, color y estado.",
      "Factory Method y Abstract Factory reutilizan los builders concretos.",
    ],
    icon: Hammer,
    accent: "cyan",
  },
  {
    title: "POO aplicada",
    subtitle: "El dominio de aviones esta modelado con principios OO claros.",
    points: [
      "Interfaz Avion para definir contrato comun.",
      "Clase abstracta AvionBase para compartir estado y comportamiento.",
      "Polimorfismo para ejecutar operaciones sin conocer la clase concreta.",
    ],
    icon: Puzzle,
    accent: "slate",
  },
];

const flow = [
  {
    title: "1. Cliente selecciona estrategia",
    detail: "El usuario elige patron, familia y tamano desde el panel de control.",
  },
  {
    title: "2. Fabrica crea objeto",
    detail:
      "Factory Method usa fabrica por tamano; Abstract Factory usa fabrica por familia. Ambos delegan el ensamblado en Builder.",
  },
  {
    title: "3. Builder ensambla el avion",
    detail: "El builder aplica receta base y entrega una instancia final de Avion.",
  },
  {
    title: "4. Operaciones polimorficas",
    detail: "El simulador ejecuta despegar, volar, aterrizar y repostar sobre el objeto creado.",
  },
];

const projectMapping = [
  {
    title: "Interfaz",
    detail: "`Avion` define el contrato comun para todos los modelos concretos.",
  },
  {
    title: "Abstraccion y herencia",
    detail:
      "`AvionBase` concentra estado compartido (combustible, estado de vuelo) y comportamiento base.",
  },
  {
    title: "Factory Method",
    detail:
      "`FabricaAvionPequeno/Mediano/Grande` define el contexto y llama a `construirAvion(...)`.",
  },
  {
    title: "Abstract Factory",
    detail:
      "`FabricaAvionesComerciales/Carga/Militares` produce cada variante usando builders concretos.",
  },
  {
    title: "Builder",
    detail:
      "`AvionBuilderBase` y sus builders concretos encapsulan el paso a paso de ensamblado.",
  },
  {
    title: "Polimorfismo",
    detail:
      "La UI invoca `despegar`, `volar` o `aterrizar` sobre `Avion` sin conocer la clase real.",
  },
];

export default function DocumentacionPage() {
  const codeSnippets = getPatternSnippets();

  return (
    <section className="space-y-7 animated-appear">
      <header className="glass-panel rounded-3xl p-7 md:p-9">
        <p className="terminal-title text-xs text-cyan-300">Pattern Docs</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
          Factory Method, Abstract Factory y Builder en un dominio de aviones
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
          Esta vista organiza el marco conceptual para una exposicion universitaria: definiciones,
          diferencias, flujo de creacion y relacion directa con los principios de Programacion
          Orientada a Objetos con una capa de Builder para ensamblado profesional.
        </p>
      </header>

      <div className="grid gap-5 xl:grid-cols-4">
        {conceptCards.map((card) => (
          <ConceptCard key={card.title} {...card} />
        ))}
      </div>

      <ComparisonPanel />

      <section className="glass-panel rounded-2xl p-6 md:p-7">
        <div className="mb-5 flex items-center gap-2">
          <Route className="h-5 w-5 text-cyan-300" />
          <h2 className="text-xl font-semibold text-slate-100">Flujo conceptual del proyecto</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {flow.map((item) => (
            <FlowStage key={item.title} title={item.title} detail={item.detail} />
          ))}
        </div>
      </section>

      <section className="glass-panel rounded-2xl p-6 md:p-7">
        <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
          Como se aplica POO en esta implementacion
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
          El proyecto esta organizado para mostrar encapsulamiento, abstraccion y polimorfismo con
          una arquitectura clara de dominio.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-6">
          {projectMapping.map((block) => (
            <article
              key={block.title}
              className="rounded-xl border border-slate-700/80 bg-slate-900/70 p-4"
            >
              <p className="terminal-title text-[11px] text-cyan-300">{block.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{block.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <PatternCodeSection snippets={codeSnippets} />
    </section>
  );
}
