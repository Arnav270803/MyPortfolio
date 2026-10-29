import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Building2, Calendar, Clock, ListOrdered, ChevronDown, KeyRound, Link2, Share, Plus } from 'lucide-react';
import { MARKS, CONTENTS, CODE, PATTERNS } from '../data/piHarness';
import {
  CornerMarks,
  Plate,
  PartsList,
  Rules,
  Pipeline,
  Pieces,
  LaunchLine,
  EnvStrip,
  PatternIndex,
  Verbs,
  Gate,
  CodePlate,
  Details,
  Approvals,
  Chain,
  ShotGrid,
  Guarantees,
  RefusedPaths,
  Caveat,
  WakeUp,
  Fixes,
  HazardLog,
  Procedure,
} from './PiHarnessFigures';

/* 02 / ENGINEERING NOTE — Let the agent drive. Keep the keys.
   The post on Pi, a book-to-movie pipeline and the gates in front of it. The
   prose is here; lists, tables and figures come from PiHarnessFigures. */

const READ_MIN = 12;
const TITLE = 'Let the agent drive. Keep the keys.';
const COMPANY = { name: 'Boock.ai', href: 'https://boock.ai' };

/* set this to '/pi-shot-grid.png' once images/12_shot_grid.png is in public/ */
const SHOT_GRID = null;

const pad = (n) => String(n).padStart(2, '0');
const LABELS = Object.fromEntries(MARKS);

/* how far through the post you are, and which part is under the ruler */
function useReading() {
  const [reading, setReading] = useState({ pct: 0, current: MARKS[0][0] });

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
      let current = MARKS[0][0];
      for (const [id] of MARKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) current = id;
      }
      setReading((r) => (r.current === current && Math.round(r.pct) === Math.round(pct) ? r : { pct, current }));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return reading;
}

const TICKS = Array.from({ length: 41 }, (_, i) => <span key={i} className="w-px bg-rule" style={{ height: i % 10 === 0 ? 9 : 5 }} />);

/* the Winter Arc ruler, measuring the read instead of the days */
const ReadingRuler = () => {
  const { pct, current } = useReading();
  const p = Math.round(pct);

  return (
    <div className="sticky top-0 z-30 bg-paper px-5 sm:px-6 pt-2.5 pb-3 border-b border-rule font-mono">
      <div className="flex items-center justify-between gap-4 text-[10.5px] tracking-[0.08em] h-4">
        <span className="text-muted truncate">{LABELS[current]}</span>
        <span className="text-muted shrink-0">
          <span className="text-cobalt">{pad(p)}</span>%
        </span>
      </div>
      <div className="relative h-3 mt-1.5" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-rule" />
        <div className="absolute left-0 top-0 h-[2px] bg-cobalt" style={{ width: `${p}%` }} />
        <div className="absolute inset-x-0 top-0 flex justify-between">{TICKS}</div>
        <span className="absolute top-[-3px] w-[9px] h-[9px] rounded-full bg-cobalt border-2 border-paper" style={{ left: `calc(${p}% - 4.5px)` }} />
      </div>
    </div>
  );
};

const TocLink = ({ item, sub, on, exact }) => (
  <a
    href={`#${item.id}`}
    className={`flex items-center gap-2.5 ${sub ? 'pl-[22px] py-[3px] text-[11.5px]' : 'py-[5px]'} ${on ? 'text-ink' : 'text-muted'} hover:text-ink transition-colors`}
  >
    <span
      className={`relative z-[1] ${sub ? 'w-[7px] h-[7px] -ml-[21px] mr-[14px]' : 'w-[9px] h-[9px]'} rounded-full border shrink-0 ${
        exact ? 'bg-cobalt border-cobalt' : on ? 'bg-paper border-cobalt' : 'bg-paper border-graphite'
      }`}
    />
    <span className={`w-[18px] shrink-0 ${on ? 'text-cobalt' : ''}`}>{item.n}</span>
    <span className="truncate">{item.label}</span>
  </a>
);

/* the sheet index, sitting in the left margin on wide screens */
const Contents = () => {
  const { pct, current } = useReading();
  const parent = current.startsWith('p') ? 's04' : current;

  return (
    <aside
      className="hidden xl:block fixed top-[132px] z-20 font-mono"
      style={{ right: 'calc(50% + 408px)', width: 'min(232px, calc(50% - 432px))' }}
      aria-label="Contents"
    >
      <p className="text-[11px] tracking-[0.12em] text-muted">
        CONTENTS <span className="text-graphite">/</span> {pad(CONTENTS.length)}
      </p>
      <ol className="mt-3.5 relative text-[12px] before:absolute before:left-[4px] before:top-[10px] before:bottom-[10px] before:w-px before:bg-rule">
        {CONTENTS.map((item) => (
          <li key={item.id}>
            <TocLink item={item} on={parent === item.id} exact={current === item.id} />
            {item.children && (
              <ol className="mb-1">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <TocLink item={child} sub on={current === child.id} exact={current === child.id} />
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-5 pt-3.5 border-t border-dashed border-rule flex items-center justify-between text-[11px] tracking-[0.08em] text-muted">
        <span>
          <span className="text-cobalt">{pad(Math.round(pct))}</span>% READ
        </span>
        <span>{pad(Math.max(0, Math.round(READ_MIN * (1 - pct / 100))))} MIN LEFT</span>
      </div>
    </aside>
  );
};

/* the same index folded into one row, below xl */
const MobileContents = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden font-mono border-b border-rule">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full h-12 px-5 sm:px-6 flex items-center justify-between text-[12.5px] cursor-pointer"
      >
        <span className="flex items-center gap-2.5 text-ink">
          <ListOrdered className="w-[15px] h-[15px]" strokeWidth={1.6} />
          Contents
        </span>
        <span className="flex items-center gap-2 text-[11px] tracking-[0.08em] text-muted">
          {pad(CONTENTS.length)} SECTIONS
          <ChevronDown className={`w-4 h-4 text-ink transition-transform duration-200 ${open ? 'rotate-180' : ''}`} strokeWidth={1.6} />
        </span>
      </button>
      {open && (
        <ol className="px-5 sm:px-6 pb-4 space-y-2 text-[12.5px]">
          {CONTENTS.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)} className="flex gap-3 text-ink">
                <span className="w-[18px] text-cobalt">{item.n}</span>
                {item.label}
              </a>
              {item.children && (
                <ol className="mt-1.5 space-y-1.5 pl-[30px] text-[12px]">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a href={`#${child.id}`} onClick={() => setOpen(false)} className="flex gap-3 text-muted">
                        <span className="w-[18px]">{child.n}</span>
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

/* handwritten notes in the right margin, each with its arrow into the rail */
const ARROWS = {
  down: { viewBox: '0 0 60 40', paths: ['M56 4C40 12 24 22 8 34', 'M6 22l-2 14 13-4'] },
  left: { viewBox: '0 0 90 30', paths: ['M2 6c26 0 52 8 76 16', 'M70 18l9 4-6 6'] },
};

const MarginNote = ({ children, arrow, noteClass, arrowClass }) => (
  <div className="hidden xl:block" aria-hidden="true">
    <p className={`note absolute ${noteClass}`}>{children}</p>
    <svg viewBox={ARROWS[arrow].viewBox} className={`absolute text-cobalt ${arrowClass}`} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d={ARROWS[arrow].paths[0]} strokeLinecap="round" />
      <path d={ARROWS[arrow].paths[1]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const Hatch = () => <div className="hatch h-2.5 border-y border-rule" />;

const SectionHead = ({ n, label, children }) => (
  <div className="px-5 sm:px-6 pt-9">
    <p className="font-mono text-[11.5px] tracking-[0.08em] text-ink">
      <span className="text-cobalt">{n}</span>
      <span className="text-graphite"> / </span>
      {label}
    </p>
    <h2 className="mt-3 font-serif font-medium text-[29px] sm:text-[34px] leading-[1.12] tracking-[-0.01em]">{children}</h2>
  </div>
);

const PatternHead = ({ n, tag, children }) => (
  <div className="px-5 sm:px-6 pt-10 flex items-start justify-between gap-4">
    <div className="flex items-baseline gap-3.5">
      <span className="callout text-cobalt shrink-0 relative -top-[3px]">{n}</span>
      <h3 className="font-serif font-medium text-[23px] sm:text-[26px] leading-[1.2]">{children}</h3>
    </div>
    <span className="hidden sm:block font-mono text-[10.5px] tracking-[0.1em] text-muted pt-2">{tag}</span>
  </div>
);

const Prose = ({ className, children }) => <div className={`prose-bp px-5 sm:px-6 max-w-[688px] ${className}`}>{children}</div>;

const PatternRule = () => <div className="mx-5 sm:mx-6 border-t border-dashed border-rule" />;

/* a quoted line, framed like a detail callout */
const Detail = ({ className, children }) => (
  <blockquote className={`relative mx-5 sm:mx-6 px-5 sm:px-7 border-y border-dashed border-rule ${className}`}>
    <CornerMarks />
    {children}
  </blockquote>
);

const Tag = ({ children }) => <span className="px-2.5 py-1 border border-rule rounded-[4px] text-[12px] text-ink">{children}</span>;

const PiHarness = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://x.com/intent/post?text=${encodeURIComponent(TITLE)}&url=${encodeURIComponent(window.location.href)}`;

  const copyLink = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {}
    );
  };

  return (
    <div>
      <Contents />

      <button
        onClick={() => navigate('/bblog')}
        className="font-mono w-full px-5 sm:px-6 h-11 border-b border-rule flex items-center gap-3 text-[13px] text-ink cursor-pointer hover:opacity-70 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
        Writing
        <span className="ml-auto text-[11px] tracking-[0.08em] text-muted">NOTES / FIELD LOGS / 02</span>
      </button>

      <ReadingRuler />

      <article>
        {/* ============ OPENING ============ */}
        <section id="s00" className="relative scroll-mt-[64px]">
          <MarginNote arrow="down" noteClass="-right-[226px] top-[86px] rotate-[5deg]" arrowClass="-right-[118px] top-[146px] w-[58px]">
            no shell.
            <br />
            just gates.
          </MarginNote>

          <div className="px-5 sm:px-6 pt-7 sm:pt-9 pb-7">
            <div className="font-mono flex items-center justify-between gap-4 text-[11.5px] tracking-[0.08em]">
              <span>
                <span className="text-cobalt">02</span>
                <span className="text-graphite"> / </span>
                <span className="text-cobalt">ENGINEERING NOTE</span>
              </span>
              <span className="text-muted shrink-0 hidden sm:inline">29 OCT 2026 · {READ_MIN} MIN READ</span>
            </div>

            <h1 className="mt-5 font-serif font-medium text-[44px] sm:text-[60px] leading-[1.0] tracking-[-0.018em] text-ink">
              Let the agent drive.
              <br />
              <em className="italic text-key font-normal">Keep the keys.</em>
            </h1>

            <p className="mt-6 font-grotesk text-[17.5px] sm:text-[19px] leading-[1.6] text-ink/80 max-w-[640px]">
              How I turned Pi, a minimal open-source coding agent, into the operator of a pipeline that converts books into cinematic movies, without
              giving it a shell or a single credential.
            </p>
          </div>

          {/* byline + meta ledger */}
          <div className="font-mono grid grid-cols-1 md:grid-cols-[1fr_1fr] border-y border-rule">
            <div className="px-5 sm:px-6 py-4 md:border-r md:border-dashed md:border-rule">
              <div className="flex items-center gap-3">
                <img src="/cropped_circle_image.png" alt="" className="w-[34px] h-[34px] rounded-full border border-rule object-cover" />
                <div>
                  <p className="text-[13px] text-ink font-semibold">Arnav Sharma</p>
                  <p className="text-[11.5px] text-muted">heyarnav.com</p>
                </div>
              </div>
              <div className="mt-3.5 space-y-2 text-[12.5px] text-ink">
                <p className="flex items-center gap-2.5">
                  <Calendar className="w-[15px] h-[15px] shrink-0" strokeWidth={1.6} />
                  29 October 2026
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="w-[15px] h-[15px] shrink-0" strokeWidth={1.6} />
                  {READ_MIN} min read · 3,200 words, code included
                </p>
                <p className="flex items-center gap-2.5">
                  <Building2 className="w-[15px] h-[15px] shrink-0" strokeWidth={1.6} />
                  <span>
                    Built for{' '}
                    <a
                      href={COMPANY.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cobalt underline underline-offset-4 hover:opacity-70 transition-opacity"
                    >
                      {COMPANY.name}
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="px-5 sm:px-6 py-4 border-t md:border-t-0 border-rule">
              <p className="text-[11px] tracking-[0.08em] text-muted">FILED UNDER</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {['AI agents', 'Pi', 'Agent harness', 'Human in the loop', 'Generative video'].map((t) => (
                  <Tag key={t}># {t}</Tag>
                ))}
              </div>
            </div>
          </div>

          <MobileContents />

          {/* Fig. 01 — the app, annotated. The ids are painted out in the file itself. */}
          <figure className="px-5 sm:px-6 pt-6 pb-6 font-mono">
            <Plate>
              <img
                src="/pi-app.jpg"
                width={1600}
                height={900}
                alt="The harness web app: a list of conversations on the left, a chat with Pi in the middle, and a review panel on the right listing pipeline stages and their approvals."
                className="w-full h-auto block rounded-[2px]"
              />
              <div className="relative h-[22px] mt-2.5 text-[10.5px] tracking-[0.08em]">
                <div className="dim text-cobalt" style={{ left: '15.6%', width: '34.2%' }}>
                  <span>
                    <span className="sm:hidden">01 AGENT</span>
                    <span className="hidden sm:inline">01 · THE AGENT DRIVES</span>
                  </span>
                </div>
                <div className="dim text-key" style={{ left: '50.6%', width: '49.4%' }}>
                  <span>
                    <span className="sm:hidden">02 KEYS</span>
                    <span className="hidden sm:inline">02 · A PERSON HOLDS THE KEYS</span>
                  </span>
                </div>
              </div>
              <figcaption className="mt-2.5 flex items-start justify-between gap-4 text-[11.5px] text-muted">
                <span>Fig. 01 — The agent on the left, the keys on the right.</span>
                <span className="hidden sm:flex items-center gap-2 shrink-0">
                  <span className="redact static inline-block w-[18px] h-[9px]" />
                  RUN IDS, MODEL, PATH
                </span>
              </figcaption>
            </Plate>
          </figure>

          {/* TL;DR */}
          <div className="px-5 sm:px-6 pb-8">
            <div className="border border-rule rounded-[4px] flex flex-col sm:flex-row">
              <div className="sm:w-[92px] shrink-0 border-b sm:border-b-0 sm:border-r border-rule flex sm:flex-col items-center sm:justify-center gap-2 px-4 sm:px-0 py-2.5 sm:py-5 font-mono">
                <KeyRound className="w-[18px] h-[18px] text-key" strokeWidth={1.5} />
                <span className="text-[11px] tracking-[0.12em] text-ink">TL;DR</span>
              </div>
              <div className="px-4 sm:px-5 py-4">
                <p className="font-serif text-[21px] leading-[1.3] text-ink">
                  Your agent doesn’t need a shell. <em className="italic text-key">It needs gates.</em>
                </p>
                <p className="mt-2 font-grotesk text-[15px] leading-[1.65] text-ink/85">
                  Take <code className="ic">bash</code> away, allow-list everything else, put a guard on every tool call, and send anything that spends money
                  through a gate only a person can open. Pi has a hook for every one of those.
                </p>
              </div>
            </div>
          </div>

          <Prose className="pb-10">
            <p className="lead">
              Every agent project has a moment where you read the tool list and feel slightly cold. For me, it was one word: <code>bash</code>.
            </p>
            <p>
              At{' '}
              <a href={COMPANY.href} target="_blank" rel="noopener noreferrer">
                {COMPANY.name}
              </a>
              , where I work, our pipeline converts books into cinematic movies. Between “here’s a book” and “here’s a film” sit dozens of careful steps.
              Check what the other teams delivered. Build the inputs. Plan every shot. Write the prompts. Render clips on rented GPUs. Review them, assemble the film,
              mix the sound. It’s patient, read-everything, follow-the-procedure work, which is exactly what coding agents turn out to be weirdly good at.
            </p>
            <p>
              It’s also work where one confident mistake costs real money. A render nobody asked for. A row overwritten in a database other teams read from.
              An API key quoted in a log because the agent was being <em>helpful</em>.
            </p>
            <p>
              So I wanted two things that sound like they contradict each other: an agent that runs the whole pipeline, and an agent that can’t do any of the
              scary parts unless a person says yes. This post is how I got both with Pi, and the patterns I’d steal if I were starting over.
            </p>
          </Prose>
        </section>

        {/* ============ 01 ============ */}
        <section id="s01" className="relative scroll-mt-[64px]">
          <Hatch />
          <SectionHead n="01" label="MEET PI">
            Meet Pi, the agent that ships without furniture
          </SectionHead>
          <Prose className="pt-5">
            <p>Pi calls itself “a minimal, extensible agent harness that you can make your own”, and it means it.</p>
            <p>
              Out of the box you get a small core: four default tools (<code>read</code>, <code>write</code>, <code>edit</code> and <code>bash</code>), a solid
              agent loop, and not much else. No sub-agents. No plan mode. The README says so up front, and suggests you ask Pi to build what you want or
              install a package that does it your way. What you get instead are very good parts:
            </p>
          </Prose>
          <PartsList />
          <Prose className="pt-6 pb-11">
            <p>
              Most agents arrive like a furnished flat: comfortable, and full of someone else’s taste. Pi is an empty room with very good wiring. That turned
              out to be perfect, because the first thing I wanted to do was carry furniture <em>out</em>.
            </p>
          </Prose>
        </section>

        {/* ============ 02 ============ */}
        <section id="s02" className="relative scroll-mt-[64px]">
          <Hatch />
          <SectionHead n="02" label="THE TROUBLE WITH HELPFUL">
            The trouble with helpful
          </SectionHead>
          <Detail className="mt-7 mb-1 py-6">
            <p className="font-serif italic text-[25px] sm:text-[29px] leading-[1.25] text-ink">“Treat model-generated commands and code as untrusted.”</p>
            <p className="mt-3 font-mono text-[11px] tracking-[0.08em] text-muted">
              — PI <span className="text-graphite">/</span> DOCS <span className="text-graphite">/</span> SECURITY
            </p>
          </Detail>
          <Prose className="pt-6">
            <p>The same page goes on to explain, very calmly, that Pi runs with the permissions of whoever started it and doesn’t ask before every tool call.</p>
            <p>
              That isn’t a flaw. It’s honesty. A coding agent is a fast, tireless, extremely literal colleague who is logged in as you. With a shell, it can do
              anything you can do, including the expensive things and the things you can’t undo. And a line in the system prompt saying “never start a render
              without asking” is a polite request, not a lock. Models follow instructions most of the time. “Most of the time” is a terrible number for
              anything that spends money.
            </p>
            <p>So before writing any code, I wrote down three rules:</p>
          </Prose>
          <Rules />
          <Prose className="pt-6 pb-11">
            <p>The rest of this post is those three lines, made true in code.</p>
          </Prose>
        </section>

        {/* ============ 03 ============ */}
        <section id="s03" className="relative scroll-mt-[64px]">
          <MarginNote arrow="down" noteClass="-right-[232px] top-[1700px] rotate-[4deg]" arrowClass="-right-[128px] top-[1762px] w-[56px]">
            say no to all of it,
            <br />
            then yes to one
          </MarginNote>
          <Hatch />
          <SectionHead n="03" label="THE SHAPE OF THE THING">
            The shape of the thing
          </SectionHead>
          <Pipeline />
          <Prose className="pt-8">
            <p>The harness is five pieces, all on one machine:</p>
          </Prose>
          <Pieces />
          <Prose className="pt-7">
            <p>
              A run’s state lives in a folder on disk: the inputs, Pi’s decisions, the approval receipts, the job logs. Close the browser, restart Pi, reboot
              the machine. Nothing important is lost, because nothing important ever lived in memory.
            </p>
            <p>Most of the security is in how Pi starts:</p>
          </Prose>
          <LaunchLine />
          <Prose className="pt-8">
            <p>“Turn everything off, then allow exactly one thing” works on nearly every knob Pi has. It’s my favourite thing about building on it.</p>
            <p>
              The server adds one more lock: Pi starts with a scrubbed environment. It gets an allow-list of boring variables like <code>PATH</code> and{' '}
              <code>TEMP</code>, and nothing whose name smells like a key, a token or a password. A secret that was never in the process can’t leak out of it.
            </p>
          </Prose>
          <EnvStrip />
        </section>

        {/* ============ 04 ============ */}
        <section id="s04" className="relative scroll-mt-[64px]">
          <Hatch />
          <div className="px-5 sm:px-6 pt-9 pb-6">
            <p className="font-mono text-[11.5px] tracking-[0.08em] text-ink">
              <span className="text-cobalt">04</span>
              <span className="text-graphite"> / </span>SIX PATTERNS
            </p>
            <h2 className="mt-3 font-serif font-medium text-[29px] sm:text-[34px] leading-[1.12] tracking-[-0.01em]">Six patterns worth stealing</h2>
            <p className="mt-2 font-mono text-[11px] tracking-[0.08em] text-muted">
              PATTERN INDEX · <span className="text-cobalt">{pad(PATTERNS.length)}</span>
            </p>
          </div>
          <PatternIndex />

          {/* 01 */}
          <div id="p1" className="relative scroll-mt-[64px]">
            <PatternHead n="01" tag="TOOLS">
              Swap the shell for verbs
            </PatternHead>
            <Prose className="pt-4">
              <p>
                A shell is the widest tool ever invented. We replaced it with a few dozen narrow ones, each named after a job in the pipeline: verify a
                delivery, build the inputs, check the plan, fetch clips, extract frames, make a review copy of the film.
              </p>
            </Prose>
            <Verbs />
            <Prose className="pt-8 pb-11">
              <p>Narrow tools help everyone:</p>
              <ul className="bul">
                <li>
                  <span>The model picks from a menu of named verbs instead of improvising shell pipelines at 2 a.m.</span>
                </li>
                <li>
                  <span>
                    Each tool checks its own inputs and answers in the pipeline’s language (say, “shot 12 has no picture”), not with a stack trace.
                  </span>
                </li>
                <li>
                  <span>A tool that can only do one thing can only get one thing wrong.</span>
                </li>
              </ul>
              <p>
                Two Pi details matter here. First, a tool’s <code>exposure</code> can be <code>model-only</code>: the model can call it, but no other tool or
                script can. Pi’s docs suggest it for tools that ask the user, and we use it for every tool. Second, Pi may run several tool calls from one
                message in parallel, so any tool that asks a question or shares state gets <code>executionMode: &apos;sequential&apos;</code>. Two approval
                dialogs racing each other is a UX nobody needs.
              </p>
            </Prose>
          </div>

          {/* 02 */}
          <div id="p2" className="relative scroll-mt-[64px]">
            <MarginNote arrow="down" noteClass="-right-[214px] top-[230px] rotate-[5deg]" arrowClass="-right-[112px] top-[290px] w-[56px]">
              no clear yes
              <br />
              means no
            </MarginNote>
            <PatternRule />
            <PatternHead n="02" tag="GATES">
              The agent can ask. <em className="italic font-normal text-key">Only a gate can act.</em>
            </PatternHead>
            <Prose className="pt-4">
              <p>
                This is the heart of the design. When Pi wants to do something that costs money or writes to shared data, it can’t. What it can do is call a
                gate, and the gate does four things in order:
              </p>
            </Prose>
            <Gate />
            <Prose className="pt-8">
              <p>
                In Pi, “show it to a person and wait” is a single call: <code>ctx.ui.select()</code>. In the terminal UI that’s a menu. Over RPC, Pi sends your
                app an <code>extension_ui_request</code> and waits for an <code>extension_ui_response</code>. Same extension, completely different front end.
                That part made me grin the first time it worked.
              </p>
              <p>Here’s a gate, simplified:</p>
            </Prose>
            <div className="px-5 sm:px-6 pt-6">
              <CodePlate file="video-extension.mjs · simplified" code={CODE.gate} />
            </div>
            <Prose className="pt-8">
              <p>Three small details carry most of the weight:</p>
            </Prose>
            <Details />
            <Prose className="pt-8">
              <p>The server side is just as small:</p>
            </Prose>
            <div className="px-5 sm:px-6 pt-6">
              <CodePlate file="server.mjs · simplified" code={CODE.server} />
            </div>
            <Prose className="pt-8">
              <p>
                Our review panel shows the request in plain words, the checks behind it (each one a pass, a warning or a block), the files and their
                fingerprints, and exactly what approving will do. If any check is a block, the request can’t be approved at all. No “are you sure?” button.
                Just no.
              </p>
            </Prose>
            <Approvals />
          </div>

          {/* 03 */}
          <div id="p3" className="relative scroll-mt-[64px]">
            <PatternRule />
            <PatternHead n="03" tag="FINGERPRINTS">
              Approve exactly what you saw
            </PatternHead>
            <Prose className="pt-4">
              <p>
                An approval is only worth something if it covers exactly what the reviewer saw. That’s the fingerprint’s job. Each gate hashes everything its
                request depends on, and later stages chain their fingerprints to earlier ones. Change an input upstream, and everything downstream that
                depended on it flips to “changed since approval” until someone looks again.
              </p>
            </Prose>
            <Chain />
            <Prose className="pt-8">
              <p>
                It also kills a nasty little class of bug. Between “show the reviewer” and “the reviewer clicks”, something can change a file: the agent, a
                job, a colleague. Without the second hash, you’d be approving the past.
              </p>
            </Prose>
            <ShotGrid src={SHOT_GRID} />
          </div>

          {/* 04 */}
          <div id="p4" className="relative scroll-mt-[64px]">
            <PatternRule />
            <PatternHead n="04" tag="UNDO">
              Make every write undoable
            </PatternHead>
            <Prose className="pt-4">
              <p>For anything that writes to shared data, the rule is simple: nothing the agent triggers should be impossible to take back.</p>
            </Prose>
            <Guarantees />
            <Prose className="pt-7 pb-11">
              <p>
                Money gets two independent caps: one passed into the pipeline itself, and a spend ledger in the harness that refuses anything over the run’s
                total. A paid call that fails counts as “probably paid”, and nothing paid is ever retried automatically. The day a provider times out{' '}
                <em>after</em> charging you, you’ll be glad you were pessimistic.
              </p>
            </Prose>
          </div>

          {/* 05 */}
          <div id="p5" className="relative scroll-mt-[64px]">
            <MarginNote arrow="left" noteClass="-right-[212px] top-[1100px] -rotate-[4deg]" arrowClass="-right-[118px] top-[1166px] w-[80px] -scale-x-100">
              a policy,
              <br />
              not a wall
            </MarginNote>
            <PatternRule />
            <PatternHead n="05" tag="SECRETS">
              Keep secrets out of the agent’s world
            </PatternHead>
            <Prose className="pt-4">
              <p>
                Your context window is not a vault. Anything the model reads can resurface in a summary, a log line or a session file. So Pi never holds a
                credential, anywhere:
              </p>
              <ul className="bul">
                <li>
                  <span>Its environment is scrubbed, as above.</span>
                </li>
                <li>
                  <span>The pipeline’s credentials live in a settings file that only the helpers load, in memory, inside an approved action.</span>
                </li>
                <li>
                  <span>
                    The guard refuses any path through <code>.env</code>, <code>.ssh</code>, <code>.aws</code> or <code>.git</code>, Pi’s own settings folder
                    (where its model login lives), and every folder that holds signing keys.
                  </span>
                </li>
              </ul>
            </Prose>
            <RefusedPaths />
            <Prose className="pt-7">
              <p>
                The guard is where Pi’s design really shines. Every tool call fires a <code>tool_call</code> event before it runs, and your handler can return{' '}
                <code>{'{ block: true, reason }'}</code> to stop it. The reason goes back to the model, so it knows why. Better still, if your handler throws,
                Pi blocks the call anyway. It fails closed, which is exactly what you want from a guard. Ours, simplified:
              </p>
            </Prose>
            <div className="px-5 sm:px-6 pt-6">
              <CodePlate file="guard.mjs · simplified" code={CODE.guard} />
            </div>
            <Prose className="pt-8">
              <p>
                The final sign-offs go one step further. A person signs them in their own terminal, with their own key. The harness can check a signature. It
                can’t make one.
              </p>
            </Prose>
            <Caveat />
          </div>

          {/* 06 */}
          <div id="p6" className="relative scroll-mt-[64px]">
            <PatternRule />
            <PatternHead n="06" tag="JOBS">
              Run long work as detached jobs
            </PatternHead>
            <Prose className="pt-4">
              <p>
                Renders take hours. Conversations don’t, and browsers get closed. So anything long runs as a detached job with its own status file and log, and
                it survives a closed tab or a restarted agent. When a job ends, the server wakes Pi with a one-line message. Pi reads the run’s state from disk,
                not from memory, and carries on.
              </p>
            </Prose>
            <WakeUp />
            <div className="px-5 sm:px-6 pt-8 pb-12">
              <p className="font-serif text-[22px] sm:text-[24px] leading-[1.35] text-ink max-w-[600px]">
                The general rule: the agent’s memory is a cache. <em className="italic">The folder is the truth.</em>
              </p>
            </div>
          </div>
        </section>

        {/* ============ 05 ============ */}
        <section id="s05" className="relative scroll-mt-[64px]">
          <MarginNote arrow="down" noteClass="-right-[208px] top-[628px] rotate-[6deg]" arrowClass="-right-[118px] top-[664px] w-[56px]">
            take this one
          </MarginNote>
          <Hatch />
          <SectionHead n="05" label="CHECKS BEAT PROMPTS">
            The lesson I keep relearning: checks beat prompts
          </SectionHead>
          <Prose className="pt-5">
            <p>
              Early on, Pi placed two shots wrongly. It set them in a location the script never names for those shots. My first instinct was to add a stern
              paragraph to its instructions. I resisted, and did two other things:
            </p>
          </Prose>
          <Fixes />
          <Prose className="pt-7">
            <p>On the next try, Pi found both mistakes and fixed them itself.</p>
            <p>
              A paragraph in a prompt works when the model happens to remember it. A check works every time, and it talks to the agent in the one place it
              always reads: the tool result. If you take one idea from this post, take this one.
            </p>
          </Prose>
          <Detail className="mt-8 mb-12 py-8">
            <p className="font-serif font-medium text-[34px] sm:text-[44px] leading-[1.08] tracking-[-0.015em] text-ink">
              Prompts are suggestions.
              <br />
              <em className="italic font-normal text-cobalt">Checks are physics.</em>
            </p>
          </Detail>
        </section>

        {/* ============ 06 ============ */}
        <section id="s06" className="relative scroll-mt-[64px]">
          <Hatch />
          <div className="px-5 sm:px-6 pt-9 pb-6">
            <p className="font-mono text-[11.5px] tracking-[0.08em] text-ink">
              <span className="text-cobalt">06</span>
              <span className="text-graphite"> / </span>THINGS THAT BIT US
            </p>
            <h2 className="mt-3 font-serif font-medium text-[29px] sm:text-[34px] leading-[1.12] tracking-[-0.01em]">
              Things that bit us <span className="text-muted italic font-normal">(so they don’t bite you)</span>
            </h2>
          </div>
          <HazardLog />
          <div className="pb-12" />
        </section>

        {/* ============ 07 ============ */}
        <section id="s07" className="relative scroll-mt-[64px]">
          <Hatch />
          <SectionHead n="07" label="BUILD YOUR OWN">
            Build your own
          </SectionHead>
          <Prose className="pt-5">
            <p>Here’s the order I’d do it in if I were starting tomorrow:</p>
          </Prose>
          <Procedure />
          <Prose className="pt-7 pb-12">
            <p>None of this needs a framework. Pi gives you the hooks, and the rest is ordinary, slightly boring code. Boring is the point.</p>
          </Prose>
        </section>

        {/* ============ 08 ============ */}
        <section id="s08" className="relative scroll-mt-[64px]">
          <Hatch />
          <SectionHead n="08" label="KEEP THE KEYS">
            Keep the keys
          </SectionHead>
          <Prose className="pt-5">
            <p>
              The best compliment I can pay this setup is that it’s dull to watch. Pi does the reading, checking, planning and drafting, which is most of the
              work and nearly all of the tedium. A person does the approving, which takes seconds. The keys never leave home.
            </p>
            <p>
              Pi made that unusually easy. Its core is small enough to hold in your head, and open enough to bend into exactly the shape you need. Every
              pattern above came from the same move: say no to a default, then yes to one specific thing.
            </p>
          </Prose>

          <div className="px-5 sm:px-6 pt-10 pb-9">
            <p className="font-serif font-medium text-[38px] sm:text-[50px] leading-[1.02] tracking-[-0.018em] text-ink">
              Let the agent drive.
              <br />
              <em className="italic font-normal text-key">Keep the keys.</em>
            </p>
            <p className="mt-4 font-hand text-[26px] text-cobalt -rotate-[2deg] origin-left">— Arnav</p>
          </div>

          <div className="px-5 sm:px-6 pb-8 font-grotesk text-[13.5px] leading-[1.7] text-muted max-w-[640px] space-y-1.5">
            <p className="italic">
              Built on{' '}
              <a className="text-cobalt underline underline-offset-4" href="https://github.com/earendil-works/pi" target="_blank" rel="noopener noreferrer">
                Pi
              </a>{' '}
              (MIT licence) and on a base harness my team had already built around it.
            </p>
            {/* optional in the brief: delete this line to drop it */}
            <p className="italic">Much of the code was written with an AI coding agent, Claude Code.</p>
          </div>

          {/* title block, as on a drawing */}
          <div className="px-5 sm:px-6 pb-8 font-mono">
            <div className="border border-ink rounded-[2px] text-[12px]">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] border-b border-ink">
                <div className="px-3.5 py-2.5 sm:border-r border-ink">
                  <p className="text-[9.5px] tracking-[0.12em] text-muted">TITLE</p>
                  <p className="mt-1 text-ink">{TITLE}</p>
                </div>
                <div className="px-3.5 py-2.5 border-t sm:border-t-0 border-ink">
                  <p className="text-[9.5px] tracking-[0.12em] text-muted">DRAWN BY</p>
                  <p className="mt-1 text-ink">Arnav Sharma</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-ink">
                <div className="px-3.5 py-2.5 border-r border-ink">
                  <p className="text-[9.5px] tracking-[0.12em] text-muted">DATE</p>
                  <p className="mt-1">29 OCT 2026</p>
                </div>
                <div className="px-3.5 py-2.5 sm:border-r border-ink">
                  <p className="text-[9.5px] tracking-[0.12em] text-muted">READ</p>
                  <p className="mt-1">{READ_MIN} MIN</p>
                </div>
                <div className="px-3.5 py-2.5 border-r border-t sm:border-t-0 border-ink">
                  <p className="text-[9.5px] tracking-[0.12em] text-muted">REV.</p>
                  <p className="mt-1">01</p>
                </div>
                <div className="px-3.5 py-2.5 border-t sm:border-t-0 border-ink">
                  <p className="text-[9.5px] tracking-[0.12em] text-muted">SHEET</p>
                  <p className="mt-1">02 / FIELD LOGS</p>
                </div>
              </div>
              <div className="px-3.5 py-2.5">
                <p className="text-[9.5px] tracking-[0.12em] text-muted">TAGS</p>
                <p className="mt-1 text-ink">AI agents · Pi · Agent harness · Human in the loop · Generative video</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <button
                onClick={copyLink}
                className="h-9 px-3 border border-rule rounded-[4px] flex items-center gap-2 text-[12px] cursor-pointer hover:border-ink transition-colors"
              >
                <Link2 className="w-[14px] h-[14px]" strokeWidth={1.6} />
                {copied ? 'Copied' : 'Copy link'}
              </button>
              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-3 border border-rule rounded-[4px] flex items-center gap-2 text-[12px] hover:border-ink transition-colors"
              >
                <Share className="w-[14px] h-[14px]" strokeWidth={1.6} />
                Share on X
              </a>
              <button
                onClick={() => navigate('/bblog')}
                className="h-9 px-3 border border-ink rounded-[4px] flex items-center gap-2 text-[12px] ml-auto cursor-pointer hover:bg-ink/[0.04] transition-colors"
              >
                Back to writing
                <ArrowUpRight className="w-[14px] h-[14px]" strokeWidth={1.7} />
              </button>
            </div>
          </div>

          {/* neighbours in the index */}
          <div className="font-mono border-t border-rule">
            <button
              onClick={() => navigate('/WinterArc')}
              className="w-full h-12 px-5 sm:px-6 border-b border-rule flex items-center gap-4 text-[13px] text-left cursor-pointer hover:bg-ink/[0.03] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-muted shrink-0" strokeWidth={1.6} />
              <span className="min-w-0 flex-1 truncate">
                <span className="text-cobalt">01</span>
                <span className="text-graphite"> / </span>My Winter Arc
              </span>
              <span className="flex items-center gap-2 text-[11.5px] text-live shrink-0">
                <span className="w-[7px] h-[7px] rounded-full bg-live" />
                Finished
              </span>
            </button>
            <div className="h-12 px-5 sm:px-6 flex items-center gap-4 text-[13px]">
              <Plus className="w-4 h-4 text-muted shrink-0" strokeWidth={1.4} />
              <span className="min-w-0 flex-1 truncate">
                <span className="text-cobalt">03</span>
                <span className="text-graphite"> / </span>Building observable AI agents
              </span>
              <span className="text-[11.5px] tracking-[0.08em] text-muted shrink-0">DRAFT</span>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PiHarness;
