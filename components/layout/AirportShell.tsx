"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType, ReactNode } from "react";
import {
  BookOpenText,
  Home,
  PlaneTakeoff,
  Radar,
  Settings2,
  TowerControl,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

type NavigationItem = {
  href: string;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const navigation: NavigationItem[] = [
  {
    href: "/",
    label: "Terminal Home",
    description: "Overview",
    icon: Home,
  },
  {
    href: "/simulacion",
    label: "Factory Control",
    description: "Simulador",
    icon: PlaneTakeoff,
  },
  {
    href: "/documentacion",
    label: "Pattern Docs",
    description: "Conceptos",
    icon: BookOpenText,
  },
];

export function AirportShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden px-3 pb-5 pt-4 md:px-5 md:pb-6 md:pt-5">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(31,47,78,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(31,47,78,0.12)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1500px] gap-4 md:grid-cols-[250px_1fr]">
        <aside className="glass-panel hidden rounded-3xl md:flex md:min-h-[calc(100vh-2.6rem)] md:flex-col md:overflow-hidden">
          <div className="border-b border-slate-700/80 px-5 py-6">
            <p className="text-2xl font-semibold text-slate-100">AeroPattern</p>
            <p className="terminal-title mt-2 text-[11px] text-slate-400">
              Terminal Control
            </p>
          </div>

          <nav className="flex-1 space-y-2 px-3 py-4">
            {navigation.map(({ href, label, description, icon: Icon }) => {
              const isActive =
                href === "/" ? pathname === href : pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl border px-3 py-3 transition",
                    isActive
                      ? "border-cyan-300/55 bg-cyan-400/10 text-cyan-100"
                      : "border-transparent text-slate-300 hover:border-slate-700/90 hover:bg-slate-900/70 hover:text-slate-100",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{label}</p>
                    <p className="terminal-title mt-1 text-[10px] text-slate-500 group-hover:text-slate-400">
                      {description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-slate-700/80 p-4">
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-[11px] text-emerald-200">
              <p className="terminal-title">System Online</p>
              <div className="mt-2 flex gap-1">
                <span className="h-1.5 w-3 rounded bg-emerald-300/90" />
                <span className="h-1.5 w-3 rounded bg-emerald-300/90" />
                <span className="h-1.5 w-3 rounded bg-emerald-300/90" />
                <span className="h-1.5 w-3 rounded bg-slate-600" />
              </div>
            </div>
          </div>
        </aside>

        <div className="space-y-4">
          <header className="glass-panel rounded-2xl px-4 py-3 md:px-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xl font-semibold text-slate-100 md:text-2xl">
                  AeroPattern Terminal
                </p>
                <p className="terminal-title mt-1 text-[11px] text-amber-300/90">
                  Creational Patterns Visual Simulator
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-2 rounded-xl border border-slate-700/75 bg-slate-950/65 px-3 py-2 md:flex">
                  <Radar className="h-4 w-4 text-cyan-300" />
                  <span className="terminal-title text-[11px] text-slate-300">
                    node: factory_region_alpha_01
                  </span>
                </div>
                <button
                  type="button"
                  className="rounded-lg border border-slate-700/80 bg-slate-900/70 p-2 text-slate-300 transition hover:border-slate-600 hover:text-slate-100"
                  aria-label="System settings"
                >
                  <Settings2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 md:hidden">
              {navigation.map(({ href, label, icon: Icon }) => {
                const isActive =
                  href === "/" ? pathname === href : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs",
                      isActive
                        ? "border-cyan-300/55 bg-cyan-400/10 text-cyan-100"
                        : "border-slate-700/80 bg-slate-900/70 text-slate-300",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </Link>
                );
              })}
            </div>
          </header>

          <main className="relative">
            <div className="pointer-events-none absolute right-3 top-3 rounded-full border border-cyan-400/35 bg-cyan-400/10 p-2">
              <TowerControl className="h-4 w-4 text-cyan-200/80" />
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
