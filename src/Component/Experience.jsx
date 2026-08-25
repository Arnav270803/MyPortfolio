import React, { useState } from 'react';
import {
  Workflow,
  Code2,
  Briefcase,
  Rocket,
  GraduationCap,
  ChevronDown,
  ArrowDown,
  ArrowUp,
} from 'lucide-react';

/* 01 / EXPERIENCE — ledger rows, details expand in place.
   A company spine can fork to more than one role, the way an assembly
   drawing branches to its sub-parts. */

const RECORDS = [
  {
    id: 'boock',
    mark: 'B.',
    company: 'Boock.AI',
    tenure: '8 mos · India · Remote',
    status: 'CURRENT',
    tone: 'live',
    roles: [
      {
        title: 'Founding AI Engineer',
        meta: 'Full-time · Mar 2026 — Present · 6 mos',
        Icon: Workflow,
        points: [
          "Building Boock.AI's agentic media pipeline — an end-to-end system that transforms books into cinematic audiovisual experiences.",
          'Spans multimodal AI orchestration, narrative understanding, visual and character consistency, image and video generation, voice and sound production, automated quality control, and scalable cloud infrastructure.',
        ],
        tags: ['Agentic AI Development', 'AWS', 'Multimodal AI', 'Video Generation'],
      },
      {
        title: 'Founding Full Stack Engineer',
        meta: 'Internship · Jan 2026 — Present · 8 mos',
        Icon: Code2,
        points: [
          'Leading frontend and backend integration at Boock.AI.',
          'Deploying scalable, cloud-based applications with AWS.',
        ],
        tags: ['MERN Stack', 'TypeScript', 'Node.js', 'Docker', 'PostgreSQL'],
      },
    ],
  },
  {
    id: 'procesg',
    mark: 'P',
    company: 'ProcesG',
    status: 'LIVE',
    tone: 'live',
    roles: [
      {
        title: 'Founding Engineer',
        meta: 'Current · ESG / BRSR platform',
        Icon: Briefcase,
        points: [
          'Built company onboarding and Google authentication.',
          'Created reporting-year-specific BRSR and GHG configurations.',
          'Implemented role-based access for administrators and employees.',
          'Designed ESG data-entry, emissions-calculation, and audit-history workflows.',
          'Developed the responsive frontend, REST APIs, and relational database architecture.',
        ],
        tags: [
          'React',
          'TypeScript',
          'Node.js',
          'Express',
          'PostgreSQL',
          'Prisma',
          'REST APIs',
          'Tailwind CSS',
          'Google OAuth',
        ],
      },
    ],
  },
  {
    id: 'aevora',
    mark: 'A',
    company: 'Aevora',
    status: 'BUILDING',
    tone: 'cobalt',
    roles: [
      {
        title: 'Founder',
        meta: 'Current · AI video ads for D2C brands',
        Icon: Rocket,
        points: [
          'Designed a mobile-first landing page with glassmorphism UI, waitlist email collection, and live signup counter.',
          'Architecting a video pipeline that generates script, scenes, voiceover, music, and subtitles from a single product image.',
          'Targeting Indian D2C brands with Hindi voiceovers, festival templates, and platform-ready exports for Instagram, YouTube, and Facebook.',
        ],
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Generative AI'],
      },
    ],
  },
  {
    id: 'thinknext',
    mark: 'T',
    company: 'ThinkNext Technologies',
    status: 'COMPLETED',
    tone: 'graphite',
    roles: [
      {
        title: 'Industrial Training — MERN Stack',
        meta: 'Jul 2023 — Sep 2023 · Mohali, India',
        Icon: GraduationCap,
        points: [
          'Built a full-stack image generation app on the MERN stack.',
          'Developed REST APIs and integrated AI image services.',
        ],
        tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      },
    ],
  },
];

const TONE = { live: 'text-live', cobalt: 'text-cobalt', graphite: 'text-graphite' };
const DOT = { live: 'bg-live', cobalt: 'bg-cobalt', graphite: 'bg-graphite' };

/* one branch off the company spine */
const Role = (props) => {
  const role = props.role;
  const Icon = role.Icon;

  return (
    <div className="relative pt-3">
      {/* spine runs the full block, except on the last branch where it stops at the stub */}
      <span
        className={`absolute left-[17px] top-0 w-px bg-rule ${props.last ? 'h-[26px]' : 'bottom-0'}`}
        aria-hidden="true"
      />
      <span
        className="absolute left-[17px] top-[26px] w-[25px] sm:w-[42px] border-t border-dashed border-rule"
        aria-hidden="true"
      />

      <div className="flex items-start gap-4 sm:gap-6 pl-[42px] sm:pl-[59px]">
        <span className="w-7 h-7 shrink-0 border border-ink rounded-[5px] flex items-center justify-center text-ink">
          <Icon className="w-[15px] h-[15px]" strokeWidth={1.6} />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-semibold text-ink">{role.title}</h3>
          <p className="text-[13px] text-graphite mt-0.5">{role.meta}</p>

          {props.open && (
            <ul className="mt-3 space-y-1.5 text-[13px] text-ink">
              {role.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-graphite shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-3.5 flex flex-wrap gap-2">
            {role.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 border border-rule rounded-[4px] text-[12px] text-ink">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Record = (props) => {
  const r = props.record;
  const open = props.open;

  return (
    <div className="px-5 sm:px-6 py-4 border-b border-rule">
      <button
        onClick={props.onToggle}
        aria-expanded={open}
        className="w-full flex items-center gap-4 cursor-pointer text-left"
      >
        <span className="w-[34px] h-[34px] shrink-0 border-[1.5px] border-ink rounded-[4px] flex items-center justify-center text-[14px] font-semibold text-ink">
          {r.mark}
        </span>

        <span className="flex items-baseline gap-3 min-w-0">
          <span className="text-[17px] font-semibold text-ink truncate">{r.company}</span>
          {r.tenure && (
            <span className="hidden md:inline text-[12px] text-graphite whitespace-nowrap">{r.tenure}</span>
          )}
        </span>

        <span className="ml-auto flex items-center gap-2.5 shrink-0">
          {r.roles.length > 1 && (
            <span className="hidden sm:inline text-[11px] text-graphite tracking-[0.06em] mr-1">
              {String(r.roles.length).padStart(2, '0')} ROLES
            </span>
          )}
          <span className={`text-[12px] tracking-[0.06em] ${TONE[r.tone]}`}>{r.status}</span>
          <span className={`w-[8px] h-[8px] rounded-full ${DOT[r.tone]}`} />
          <ChevronDown
            className={`w-5 h-5 text-ink ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            strokeWidth={1.6}
          />
        </span>
      </button>

      {r.roles.map((role, i) => (
        <Role key={role.title} role={role} open={open} last={i === r.roles.length - 1} />
      ))}
    </div>
  );
};

const Experience = () => {
  const [openIds, setOpenIds] = useState(['boock']);

  const toggle = (id) =>
    setOpenIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : ids.concat(id)));

  const allOpen = openIds.length === RECORDS.length;

  return (
    <section className="font-mono">
      <div className="hatch h-2.5 border-y border-rule" />

      <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-rule">
        <h2 className="text-[15px] tracking-[0.06em] text-ink">
          <span className="text-cobalt">02</span>
          <span className="text-graphite"> / </span>
          EXPERIENCE
        </h2>
        <div className="mt-1.5 flex items-end justify-between gap-4 text-[11px] tracking-[0.08em]">
          <span className="text-graphite">SELECTED ROLES · DETAILS EXPAND IN PLACE</span>
          <span className="shrink-0">
            <span className="text-cobalt">{String(RECORDS.length).padStart(2, '0')}</span>
            <span className="text-ink"> RECORDS</span>
          </span>
        </div>
      </div>

      {RECORDS.map((record) => (
        <Record
          key={record.id}
          record={record}
          open={openIds.includes(record.id)}
          onToggle={() => toggle(record.id)}
        />
      ))}

      <div className="hatch h-2.5 border-y border-rule" />

      <div className="py-6 flex justify-center">
        <button
          onClick={() => setOpenIds(allOpen ? [] : RECORDS.map((r) => r.id))}
          className="px-7 py-3 border border-ink rounded-[4px] text-[14px] text-ink flex items-center gap-3 cursor-pointer hover:bg-ink/[0.04] transition-colors"
        >
          {allOpen ? 'Show less' : 'Show more'}
          {allOpen ? <ArrowUp className="w-4 h-4" strokeWidth={1.7} /> : <ArrowDown className="w-4 h-4" strokeWidth={1.7} />}
        </button>
      </div>
    </section>
  );
};

export default Experience;
