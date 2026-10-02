"use client";

import { ArrowRight, Check, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { practices, useCases } from "@/lib/content";

const practiceById = Object.fromEntries(practices.map((p) => [p.id, p]));

export function UseCaseExplorer() {
  const [active, setActive] = useState(useCases[0].id);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
      <div
        role="tablist"
        aria-label="Use cases"
        aria-orientation="vertical"
        className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {useCases.map((uc, i) => {
          const selected = uc.id === active;
          const practice = practiceById[uc.practiceId];
          return (
            <button
              key={uc.id}
              role="tab"
              id={`tab-${uc.id}`}
              aria-selected={selected}
              aria-controls={`panel-${uc.id}`}
              onClick={() => setActive(uc.id)}
              className={`group card w-72 shrink-0 snap-start p-5 text-left lg:w-auto ${
                selected ? "border-flame/50! bg-flame/[0.06]!" : "hover:border-white/20!"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-dim">0{i + 1}</span>
                <span
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: practice.color }}
                  aria-hidden="true"
                />
                <span className="font-mono text-[11px] tracking-wider text-dim uppercase">
                  {practice.label}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <h3 className={`font-display text-lg font-semibold ${selected ? "text-white" : "text-slate-300"}`}>
                  {uc.title}
                </h3>
                <ArrowRight
                  className={`hidden size-4 shrink-0 transition lg:block ${
                    selected ? "translate-x-0 text-flame" : "-translate-x-1 text-dim opacity-0 group-hover:opacity-100"
                  }`}
                />
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{uc.summary}</p>
            </button>
          );
        })}
      </div>

      {useCases.map((uc) => (
        <div
          key={uc.id}
          role="tabpanel"
          id={`panel-${uc.id}`}
          aria-labelledby={`tab-${uc.id}`}
          hidden={uc.id !== active}
          className="card overflow-hidden p-6 sm:p-9 lg:sticky lg:top-24 lg:self-start"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-flame/15 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-rose-300/80 uppercase">
              <TriangleAlert className="size-3.5" /> The problem
            </div>
            <p className="mt-3 text-lg leading-relaxed text-slate-200 sm:text-xl">{uc.problem}</p>

            <div className="my-8 h-px bg-gradient-to-r from-flame/60 via-line to-transparent" />

            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-gold uppercase">
              <Check className="size-3.5" /> How we solve it
            </div>
            <ul className="mt-4 space-y-4">
              {uc.solution.map((s) => (
                <li key={s} className="flex gap-3 text-[15px] leading-relaxed text-slate-300">
                  <span className="bg-forge mt-2 size-1.5 shrink-0 rounded-full" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {uc.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
