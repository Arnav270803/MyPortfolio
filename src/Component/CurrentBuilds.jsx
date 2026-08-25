import React from 'react';
import { SquareTerminal, ExternalLink, ChevronRight } from 'lucide-react';

/* 13 / LEDGER ROWS — 01 / CURRENT BUILDS */

const BUILDS = [
  { name: 'ProcesG', role: 'Founding Engineer', status: 'LIVE', tone: 'live' },
  { name: 'Aevora', role: 'Founder', status: 'BUILDING', tone: 'cobalt' },
];

const CurrentBuilds = () => (
  <section id="current-builds" className="font-mono">
    <div className="h-11 px-5 sm:px-6 border-b border-rule flex items-center justify-between">
      <h2 className="text-[12.5px] tracking-[0.08em] text-ink">
        <span className="text-cobalt">01</span>
        <span className="text-graphite"> / </span>
        CURRENT BUILDS
      </h2>
      <ExternalLink className="w-[15px] h-[15px] text-ink" strokeWidth={1.6} />
    </div>

    {BUILDS.map(({ name, role, status, tone }) => (
      <div
        key={name}
        className="h-12 px-5 sm:px-6 border-b border-rule flex items-center justify-between gap-3 hover:bg-ink/[0.03] transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3 min-w-0">
          <SquareTerminal className="w-4 h-4 text-ink shrink-0" strokeWidth={1.5} />
          <span className="text-[13px] text-ink truncate">
            <span className="font-semibold">{name}</span>
            <span className="text-graphite"> — </span>
            {role}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className={`flex items-center gap-2 text-[12px] ${tone === 'live' ? 'text-live' : 'text-cobalt'}`}>
            <span className={`w-[7px] h-[7px] rounded-full ${tone === 'live' ? 'bg-live' : 'bg-cobalt'}`} />
            {status}
          </span>
          <ChevronRight className="w-4 h-4 text-graphite" strokeWidth={1.6} />
        </div>
      </div>
    ))}
  </section>
);

export default CurrentBuilds;
