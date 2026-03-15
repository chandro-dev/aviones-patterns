import Link from "next/link";
import { ArrowRight, BookOpenText, PlaneTakeoff, Radar, Workflow } from "lucide-react";

const quickCards = [
  {
    title: "Documentacion de Patrones",
    description:
      "Explicacion visual y pedagogica de Factory Method, Abstract Factory y su relacion con POO.",
    href: "/documentacion",
    icon: BookOpenText,
  },
  {
    title: "Simulador de Aviones",
    description:
      "Crea aviones por patron, selecciona familia/tamano y ejecuta comportamientos en tiempo real.",
    href: "/simulacion",
    icon: PlaneTakeoff,
  },
];

export default function HomePage() {
  return (
    <section className="space-y-8 animated-appear">
      <div className="glass-panel overflow-hidden rounded-3xl p-8 md:p-10">
        <p className="terminal-title text-xs text-cyan-300">AeroPattern Terminal</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-100 md:text-5xl">
          Simulador visual de patrones creacionales aplicados a aviones.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          Este entorno esta disenado para exposiciones academicas de Programacion Orientada a
          Objetos, mostrando en una interfaz tipo tablero de aeropuerto como se modelan y
          construyen objetos con Factory Method y Abstract Factory.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/simulacion"
            className="soft-glow inline-flex items-center gap-2 rounded-xl bg-cyan-400/95 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Entrar al Simulador
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/documentacion"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/45 bg-slate-900/65 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/70 hover:bg-slate-900"
          >
            Ver Documentacion
            <Workflow className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {quickCards.map(({ title, description, href, icon: Icon }) => (
          <Link
            key={title}
            href={href}
            className="glass-panel group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyan-300/50"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="terminal-title text-xs text-slate-400">Modulo</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-100">{title}</h2>
              </div>
              <Icon className="h-6 w-6 text-cyan-300 transition group-hover:text-cyan-200" />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              Abrir modulo
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 rounded-2xl border border-slate-700/70 bg-slate-950/45 p-5 md:grid-cols-3">
        <div className="rounded-xl border border-slate-700/60 bg-slate-900/65 p-4">
          <p className="terminal-title text-xs text-slate-400">POO</p>
          <p className="mt-2 text-sm text-slate-200">Interfaz, abstraccion, herencia y polimorfismo.</p>
        </div>
        <div className="rounded-xl border border-slate-700/60 bg-slate-900/65 p-4">
          <p className="terminal-title text-xs text-slate-400">Factory Method</p>
          <p className="mt-2 text-sm text-slate-200">Delega la creacion de un avion a fabricas por tamano.</p>
        </div>
        <div className="rounded-xl border border-slate-700/60 bg-slate-900/65 p-4">
          <p className="terminal-title text-xs text-slate-400">Abstract Factory</p>
          <p className="mt-2 text-sm text-slate-200">Construye familias completas de aviones coherentes.</p>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-200">
        <Radar className="h-4 w-4" />
        Entorno listo para ejecutar, exponer y desplegar en Vercel con Next.js App Router.
      </div>
    </section>
  );
}
