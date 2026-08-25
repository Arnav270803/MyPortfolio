import React, { useState } from 'react';
import { Code2, PanelTop, Server, Database, Wrench, Plus, Info } from 'lucide-react';

/* 04 / CORE STACK — grouped tool index plus Fig. 05, the capability matrix. */

const GROUPS = [
  { Icon: Code2, label: 'Languages', tools: ['C++', 'JavaScript', 'TypeScript', 'Python'] },
  { Icon: PanelTop, label: 'Interface', tools: ['HTML5', 'CSS3', 'React', 'Tailwind CSS', 'Vite', 'Framer Motion'] },
  { Icon: Server, label: 'Backend', tools: ['Node.js', 'Express.js', 'REST APIs'] },
  { Icon: Database, label: 'Data', tools: ['MongoDB', 'PostgreSQL', 'Prisma', 'Vector DB', 'RAG'] },
  { Icon: Wrench, label: 'Tooling', tools: ['Git', 'Postman', 'Google OAuth', 'OpenRouter'] },
];

const GLOSSARY = { RAG: 'Retrieval-Augmented Generation' };

const COLUMNS = ['UI', 'API', 'AI', 'DATA'];

const MATRIX = [
  { project: 'WhisperFlix', has: [true, true, false, true] },
  { project: 'Vynix', has: [false, false, true, false] },
  { project: 'ProcesG', has: [true, true, false, true] },
  { project: 'Capillary Bot', has: [false, true, true, true] },
  { project: 'Aevora', has: [true, true, true, false] },
];

const TOOL_COUNT = GROUPS.reduce((n, g) => n + g.tools.length, 0);

/* the only tool that needs unpacking gets an inline gloss */
const Glossed = (props) => {
  const [shown, setShown] = useState(false);
  return (
    <span className="relative flex items-center gap-1.5">
      <button
        type="button"
        aria-label={`What is ${props.term}?`}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
        onFocus={() => setShown(true)}
        onBlur={() => setShown(false)}
        onClick={() => setShown((v) => !v)}
        className="text-cobalt cursor-pointer"
      >
        <Info className="w-[15px] h-[15px]" strokeWidth={1.7} />
      </button>
      {shown && (
        <span
          role="tooltip"
          className="absolute top-[26px] right-0 z-10 whitespace-nowrap rounded-[4px] bg-ink px-2.5 py-1.5 text-[11px] text-paper shadow-sm"
        >
          {GLOSSARY[props.term]}
        </span>
      )}
    </span>
  );
};

const TechStack = () => (
  <section className="font-mono">
    <div className="hatch h-2.5 border-y border-rule" />

    <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-rule flex items-start justify-between gap-4">
      <div>
        <h2 className="text-[15px] tracking-[0.06em] text-ink">
          <span className="text-cobalt">04</span>
          <span className="text-graphite"> / </span>
          CORE STACK
        </h2>
        <p className="mt-1.5 text-[11px] tracking-[0.08em] text-graphite">{TOOL_COUNT} TOOLS</p>
      </div>
      <Plus className="w-5 h-5 text-rule shrink-0" strokeWidth={1.4} aria-hidden="true" />
    </div>

    {GROUPS.map((group, i) => {
      const Icon = group.Icon;
      return (
        <div key={group.label} className="flex items-stretch border-b border-rule">
          <div className="w-[46px] sm:w-[52px] shrink-0 border-r border-rule flex items-center justify-center py-3">
            <span className="text-[12px] text-graphite">{String(i + 1).padStart(2, '0')}</span>
          </div>

          <div className="w-[120px] sm:w-[150px] shrink-0 border-r border-rule flex items-center gap-2.5 px-3 sm:px-4 py-3">
            <Icon className="w-[17px] h-[17px] text-ink shrink-0" strokeWidth={1.5} />
            <span className="text-[13px] text-ink truncate">{group.label}</span>
          </div>

          <div className="flex-1 min-w-0 px-3 sm:px-4 py-3 flex flex-wrap items-center gap-2">
            {group.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 border border-rule rounded-[4px] text-[11.5px] text-ink"
              >
                {tool}
              </span>
            ))}
            {group.tools.some((t) => GLOSSARY[t]) && (
              <Glossed term={group.tools.find((t) => GLOSSARY[t])} />
            )}
          </div>
        </div>
      );
    })}

    {/* Fig. 05 — capability matrix */}
    <div className="overflow-x-auto border-b border-rule">
      <table className="w-full min-w-[520px] border-collapse text-[12.5px]">
        <thead>
          <tr className="border-b border-rule">
            <th className="w-[34%] border-r border-rule px-5 sm:px-6 py-2.5" />
            {COLUMNS.map((col) => (
              <th key={col} className="border-r border-rule last:border-r-0 px-3 py-2.5 font-normal text-ink text-center">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MATRIX.map((row) => (
            <tr key={row.project} className="border-b border-rule last:border-b-0">
              <td className="border-r border-rule px-5 sm:px-6 py-2.5 text-ink whitespace-nowrap">{row.project}</td>
              {row.has.map((yes, i) => (
                <td key={COLUMNS[i]} className="border-r border-rule last:border-r-0 px-3 py-2.5 text-center">
                  {yes ? (
                    <span className="inline-block w-[7px] h-[7px] rounded-full bg-ink align-middle" />
                  ) : (
                    <span className="text-graphite">–</span>
                  )}
                  <span className="sr-only">
                    {row.project} {COLUMNS[i]}: {yes ? 'yes' : 'no'}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="px-5 sm:px-6 py-4 text-[11.5px] text-graphite">Fig. 05 — Stack capabilities by project.</p>
  </section>
);

export default TechStack;
