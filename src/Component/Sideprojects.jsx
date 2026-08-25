import React, { useState } from 'react';
import { Film, SquarePlay, Briefcase, Bot, Rocket, Plus, ChevronDown, ArrowUpRight } from 'lucide-react';

/* 03 / SELECTED PROJECTS — indexed ledger. Rows carrying a role reuse the
   elbow connector from the experience section. */

const PROJECTS = [
  {
    id: 'whisperflix',
    Icon: Film,
    title: 'WhisperFlix',
    summary: 'An underrated binge-watching platform for hidden old cinema.',
    status: 'Ongoing',
    tone: 'live',
    dotFirst: true,
    live: 'https://whisperslix.vercel.app/',
    code: 'https://github.com/Arnav270803/WhisperFlix',
    points: [
      'Discover hidden movie gems instantly.',
      'Sleek UI/UX with smooth animations.',
      'Powered by JWT auth and MongoDB.',
    ],
    tags: ['React', 'Tailwind CSS', 'motion.dev', 'lordicon', 'Express', 'Node.js', 'MongoDB', 'Vite'],
  },
  {
    id: 'vynix',
    Icon: SquarePlay,
    title: 'Vynix',
    summary: 'Text-to-video generator using Manim and LLMs.',
    status: 'Ongoing',
    tone: 'live',
    dotFirst: true,
    code: 'https://github.com/Arnav270803/Vynix',
    points: [
      'AI-powered text-to-video generator for education.',
      'Converts study prompts into animated learning videos.',
      'Uses an LLM to generate Manim-based Python scripts.',
      'Automates video creation with FFmpeg integration.',
      'Simplifies complex topics through visual explanations.',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Manim', 'Python', 'OpenAI'],
  },
  {
    id: 'procesg',
    Icon: Briefcase,
    title: 'ProcesG',
    status: 'LIVE',
    tone: 'live',
    role: {
      title: 'Founding Engineer',
      meta: 'Current · ESG / BRSR platform',
      Icon: Briefcase,
    },
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
  {
    id: 'capillary',
    Icon: Bot,
    title: 'Capillary Bot',
    summary: 'RAG chatbot for querying CapillaryTech documentation.',
    code: 'https://github.com/Arnav270803/capillary_Bot',
    points: [
      'React + Vite chat app with Axios queries and Tailwind styling.',
      'Express server handling CORS, JSON, and the /chat RAG endpoint.',
      'BeautifulSoup script chunking CapillaryTech docs into JSON.',
      'SentenceTransformer embeddings for vector search.',
      "Mistral via OpenRouter generating cited answers from retrieved context.",
    ],
    tags: ['React', 'Node.js', 'Express.js', 'Python', 'Vite', 'Mistral LLM', 'Framer Motion', 'BeautifulSoup', 'OpenRouter'],
  },
  {
    id: 'aevora',
    Icon: Rocket,
    title: 'Aevora',
    status: 'BUILDING',
    tone: 'cobalt',
    role: {
      title: 'Founder',
      meta: 'Current · AI video ads for D2C brands',
      Icon: Rocket,
    },
    points: [
      'Designed a mobile-first landing page with glassmorphism UI, waitlist email collection, and live signup counter.',
      'Architecting a video pipeline that generates script, scenes, voiceover, music, and subtitles from a single product image.',
      'Targeting Indian D2C brands with Hindi voiceovers, festival templates, and platform-ready exports for Instagram, YouTube, and Facebook.',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Generative AI'],
  },
];

const TONE = { live: 'text-live', cobalt: 'text-cobalt' };
const DOT = { live: 'bg-live', cobalt: 'bg-cobalt' };

const Chip = ({ children }) => (
  <span className="px-2.5 py-1 border border-rule rounded-[4px] text-[12px] text-ink">{children}</span>
);

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="flex items-center gap-1 text-[12.5px] text-cobalt hover:underline underline-offset-4"
  >
    {children}
    <ArrowUpRight className="w-[13px] h-[13px]" strokeWidth={1.8} />
  </a>
);

const Project = (props) => {
  const p = props.project;
  const Icon = p.Icon;
  const RoleIcon = p.role ? p.role.Icon : null;
  const open = props.open;

  return (
    <div className="flex border-b border-rule">
      {/* index gutter */}
      <div className="w-[46px] sm:w-[52px] shrink-0 border-r border-rule pt-5 flex justify-center">
        <span className="text-[12px] text-graphite underline underline-offset-[3px]">{p.index}</span>
      </div>

      <div className="flex-1 min-w-0 px-4 sm:px-5 py-4">
        <button
          onClick={props.onToggle}
          aria-expanded={open}
          className="w-full flex items-start gap-4 cursor-pointer text-left"
        >
          <span className="w-11 h-11 shrink-0 border border-rule rounded-[5px] flex items-center justify-center text-ink">
            <Icon className="w-[21px] h-[21px]" strokeWidth={1.5} />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-[16px] font-semibold text-ink">{p.title}</span>
            {p.summary && <span className="block text-[12.5px] text-graphite mt-1 leading-[1.5]">{p.summary}</span>}
          </span>

          <span className="flex items-center gap-4 shrink-0 pt-1">
            {p.status && (
              <span className={`flex items-center gap-2 text-[12.5px] ${TONE[p.tone]}`}>
                {p.dotFirst && <span className={`w-[7px] h-[7px] rounded-full ${DOT[p.tone]}`} />}
                {p.status}
                {!p.dotFirst && <span className={`w-[7px] h-[7px] rounded-full ${DOT[p.tone]}`} />}
              </span>
            )}
            {p.live && <ExternalLink href={p.live}>Live</ExternalLink>}
            {p.code && <ExternalLink href={p.code}>Code</ExternalLink>}
            <ChevronDown
              className={`w-5 h-5 text-ink transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              strokeWidth={1.6}
            />
          </span>
        </button>

        {open && (
          <div className="relative pt-3 pl-0">
            {p.role && (
              <>
                <span className="absolute left-[22px] top-0 h-[26px] w-px bg-rule" aria-hidden="true" />
                <span
                  className="absolute left-[22px] top-[26px] w-[30px] sm:w-[42px] border-t border-dashed border-rule"
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4 pl-[52px] sm:pl-[64px]">
                  <span className="w-7 h-7 shrink-0 border border-ink rounded-[5px] flex items-center justify-center text-ink">
                    <RoleIcon className="w-[15px] h-[15px]" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-[14px] font-semibold text-ink">{p.role.title}</h4>
                    <p className="text-[12.5px] text-graphite mt-0.5">{p.role.meta}</p>
                  </div>
                </div>
              </>
            )}

            <ul className={`space-y-2 text-[12.5px] text-ink ${p.role ? 'mt-4 pl-[52px] sm:pl-[64px]' : 'mt-1'}`}>
              {p.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-graphite shrink-0">•</span>
                  <span className="leading-[1.6]">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Sideprojects = () => {
  const [openIds, setOpenIds] = useState(['procesg', 'aevora']);

  const toggle = (id) =>
    setOpenIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : ids.concat(id)));

  return (
    <section className="font-mono">
      <div className="hatch h-2.5 border-y border-rule" />

      <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-rule flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[15px] tracking-[0.06em] text-ink">
            <span className="text-cobalt">03</span>
            <span className="text-graphite"> / </span>
            SELECTED PROJECTS
          </h2>
          <p className="mt-1.5 text-[11px] tracking-[0.08em] text-graphite">
            PROJECT INDEX · {String(PROJECTS.length).padStart(2, '0')}
          </p>
        </div>
        <Plus className="w-5 h-5 text-rule shrink-0" strokeWidth={1.4} aria-hidden="true" />
      </div>

      {PROJECTS.map((project, i) => (
        <Project
          key={project.id}
          project={{ ...project, index: String(i + 1).padStart(2, '0') }}
          open={openIds.includes(project.id)}
          onToggle={() => toggle(project.id)}
        />
      ))}

      <p className="px-5 sm:px-6 py-4 text-[11.5px] text-graphite">
        Fig. 04 — Five selected products and evolving systems.
      </p>
    </section>
  );
};

export default Sideprojects;
