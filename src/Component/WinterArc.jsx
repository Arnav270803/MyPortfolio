import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  NotebookPen,
  Clock,
  MapPin,
  Cloud,
  Search,
  ChevronLeft,
  ChevronRight,
  Info,
  Flag,
  MessageCircle,
  Repeat2,
  Heart,
  Share,
} from 'lucide-react';
import { DAYS, FEATURED, ALLOCATION, START, TOTAL_DAYS } from '../data/winterArc';

/* 01 / PERSONAL JOURNEY — My Winter Arc */

const ENTRY = {
  range: 'November 6, 2025 — January 5, 2026',
  entries: TOTAL_DAYS,
  span: '61 days',
  place: 'Delhi, India',
  tags: ['Personal Journey', 'Winter'],
};

const GOALS = [
  { label: 'Build 1–2 AI agents', done: false },
  { label: 'Complete Vynix', done: false },
  { label: 'Get a placement', done: true },
  { label: 'Improve spoken English', done: false },
  { label: 'Reach 240+ X followers', done: false },
  { label: 'Study systems, OOP, DBMS, networks and SQL', done: false },
  { label: 'Maintain the DSA streak', done: false },
];

const pad = (n) => String(n).padStart(2, '0');

const dateOf = (n) => {
  const d = new Date(`${START}T00:00:00`);
  d.setDate(d.getDate() + n - 1);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const Patterns = () => (
  <defs>
    <pattern id="wa-diag" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" stroke="var(--color-ink)" strokeWidth="1.4" opacity="0.75" />
    </pattern>
    <pattern id="wa-diag-cobalt" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" stroke="var(--color-cobalt)" strokeWidth="1.6" />
    </pattern>
    <pattern id="wa-dots" width="6" height="6" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="1" fill="var(--color-ink)" opacity="0.55" />
    </pattern>
    <pattern id="wa-lines" width="6" height="4" patternUnits="userSpaceOnUse">
      <line x1="0" y1="2" x2="6" y2="2" stroke="var(--color-ink)" strokeWidth="1.1" opacity="0.6" />
    </pattern>
  </defs>
);

const Check = ({ done }) =>
  done ? (
    <span className="w-[17px] h-[17px] shrink-0 rounded-[3px] bg-live flex items-center justify-center">
      <svg viewBox="0 0 14 14" className="w-[11px] h-[11px]" fill="none" stroke="#fff" strokeWidth="2.4">
        <path d="M2 7.5 L5.5 11 L12 3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ) : (
    <span className="w-[17px] h-[17px] shrink-0 rounded-[3px] border-[1.5px] border-ink" />
  );

const Figure = ({ src, alt, caption }) => (
  <figure className="px-5 sm:px-6 pb-5">
    <div className="relative border border-rule bg-paper">
      {['left-1 top-1', 'right-1 top-1', 'left-1 bottom-1', 'right-1 bottom-1'].map((pos) => (
        <span key={pos} className={`absolute ${pos} w-2.5 h-2.5 text-rule`} aria-hidden="true">
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M6 0v12M0 6h12" />
          </svg>
        </span>
      ))}
      <img src={src} alt={alt} className="w-full h-auto block p-3" loading="lazy" />
    </div>
    <figcaption className="mt-2.5 text-[11.5px] text-graphite">{caption}</figcaption>
  </figure>
);

const Donut = () => {
  const slices = useMemo(() => {
    let angle = -90;
    return ALLOCATION.map((s) => {
      const sweep = (s.pct / 100) * 360;
      const start = angle;
      angle += sweep;
      const rad = (deg) => (deg * Math.PI) / 180;
      const R = 52;
      const r = 25;
      const p = (radius, deg) => [60 + radius * Math.cos(rad(deg)), 60 + radius * Math.sin(rad(deg))];
      const [x1, y1] = p(R, start);
      const [x2, y2] = p(R, start + sweep);
      const [ix2, iy2] = p(r, start + sweep);
      const [ix1, iy1] = p(r, start);
      const large = sweep > 180 ? 1 : 0;
      return {
        ...s,
        d: `M${x1},${y1} A${R},${R} 0 ${large} 1 ${x2},${y2} L${ix2},${iy2} A${r},${r} 0 ${large} 0 ${ix1},${iy1} Z`,
      };
    });
  }, []);

  return (
    <svg viewBox="0 0 120 120" className="w-[112px] h-[112px] shrink-0" role="img" aria-label="Work allocation by category">
      <Patterns />
      {slices.map((s) => (
        <path key={s.label} d={s.d} fill={s.fill} stroke="var(--color-ink)" strokeWidth="1.1" />
      ))}
    </svg>
  );
};

const WinterArc = () => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const [{ day, dir }, setDay] = useState({ day: FEATURED.n, dir: 1 });

  const go = (n) => {
    const next = Math.min(TOTAL_DAYS, Math.max(1, n));
    setDay((s) => ({ day: next, dir: next >= s.day ? 1 : -1 }));
  };

  const entry = day === FEATURED.n ? FEATURED : DAYS.find((d) => d.n === day);
  const progress = (day / TOTAL_DAYS) * 100;
  const dayList = Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1);

  /* the panel slides the way you travelled; its blocks cascade in behind it */
  const panel = reduced
    ? { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        enter: (d) => ({ opacity: 0, x: d * 20, filter: 'blur(3px)' }),
        center: {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.28, ease: [0.22, 0.61, 0.36, 1], staggerChildren: 0.05, delayChildren: 0.05 },
        },
        exit: (d) => ({ opacity: 0, x: d * -20, filter: 'blur(3px)', transition: { duration: 0.18, ease: 'easeIn' } }),
      };

  const block = reduced
    ? { enter: { opacity: 0 }, center: { opacity: 1 } }
    : {
        enter: { opacity: 0, y: 10 },
        center: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.22, 0.61, 0.36, 1] } },
      };

  const spring = { type: 'spring', stiffness: 380, damping: 32 };

  return (
    <div className="font-mono">
      {/* back to the writing index */}
      <button
        onClick={() => navigate('/bblog')}
        className="w-full px-5 sm:px-6 h-11 border-b border-rule flex items-center gap-3 text-[13px] text-ink cursor-pointer hover:opacity-70 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
        Writing
      </button>

      {/* progress ruler */}
      <div className="px-5 sm:px-6 pt-4 pb-3 border-b border-rule">
        <div className="relative h-4 text-[10.5px] text-graphite">
          {[0, 25, 50, 75, 100].map((n) => (
            <span
              key={n}
              className="absolute top-0"
              style={{ left: `${n}%`, transform: n === 0 ? 'none' : n === 100 ? 'translateX(-100%)' : 'translateX(-50%)' }}
            >
              {n === 0 ? '00' : n}
            </span>
          ))}
        </div>
        <div className="relative h-4 mt-1">
          <div className="absolute inset-x-0 top-0 h-px bg-rule" />
          <Motion.div
            className="absolute left-0 top-0 h-[2px] bg-cobalt"
            animate={{ width: `${progress}%` }}
            transition={reduced ? { duration: 0 } : spring}
          />
          <div className="absolute inset-x-0 top-0 flex justify-between">
            {Array.from({ length: 41 }, (_, i) => (
              <span key={i} className="w-px bg-rule" style={{ height: i % 10 === 0 ? 9 : 5 }} />
            ))}
          </div>
          <Motion.span
            className="absolute top-[-3px] w-[9px] h-[9px] rounded-full bg-cobalt border-2 border-paper"
            animate={{ left: `calc(${progress}% - 4.5px)` }}
            transition={reduced ? { duration: 0 } : spring}
          />
        </div>
      </div>

      {/* entry header */}
      <div className="px-5 sm:px-6 pt-5 pb-5">
        <div className="flex items-center justify-between gap-4 text-[11.5px] tracking-[0.08em]">
          <span>
            <span className="text-cobalt">01</span>
            <span className="text-graphite"> / </span>
            <span className="text-cobalt">PERSONAL JOURNEY</span>
          </span>
          <span className="flex items-center gap-2 text-live shrink-0">
            <span className="w-[7px] h-[7px] rounded-full bg-live" />
            FINISHED
          </span>
        </div>

        <h1 className="mt-3 text-[26px] sm:text-[30px] leading-[1.15] text-ink">My Winter Arc</h1>
        <p className="mt-3 text-[13px] text-ink">
          A season of progress, building, and growth—documented one day at a time.
        </p>

        <div className="mt-4 space-y-2.5 text-[13px] text-ink">
          {[
            { Icon: Calendar, label: ENTRY.range },
            { Icon: NotebookPen, label: `${ENTRY.entries} daily entries` },
            { Icon: Clock, label: ENTRY.span },
            { Icon: MapPin, label: ENTRY.place },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3">
              <row.Icon className="w-[15px] h-[15px] text-ink shrink-0" strokeWidth={1.6} />
              <span>{row.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {ENTRY.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 border border-rule rounded-[4px] text-[12px] text-ink">
              # {tag}
            </span>
          ))}
        </div>
      </div>

      <Figure src="/winter-route.jpg" alt="Pencil drawing of a snowbound valley with footprints leading toward mountains" caption="Fig. 07 — The route through winter." />

      <div className="hatch h-2.5 border-y border-rule" />

      {/* goals */}
      <div className="px-5 sm:px-6 py-5">
        <h2 className="text-[17px] text-ink">
          <span className="italic font-semibold">Goals</span>
          <span className="text-graphite"> / {pad(GOALS.length)}</span>
        </h2>
        <div className="mt-3 border border-rule rounded-[4px]">
          {GOALS.map((goal, i) => (
            <div
              key={goal.label}
              className={`flex items-center gap-3.5 px-4 py-2.5 text-[13px] text-ink ${
                i ? 'border-t border-dashed border-rule' : ''
              }`}
            >
              <Check done={goal.done} />
              <span>{goal.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hatch h-2.5 border-y border-rule" />

      {/* day index */}
      <div className="px-5 sm:px-6 py-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-[17px] text-ink">
            <span className="italic font-semibold">Days</span>
            <span className="text-graphite"> / 01–{TOTAL_DAYS}</span>
          </h2>
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 h-9 px-3 border border-rule rounded-[4px] text-graphite">
              <Search className="w-[14px] h-[14px] shrink-0" strokeWidth={1.6} />
              <input
                type="text"
                placeholder="Jump to day..."
                onChange={(e) => {
                  const n = parseInt(e.target.value, 10);
                  if (n >= 1 && n <= TOTAL_DAYS) go(n);
                }}
                className="w-[130px] sm:w-[170px] bg-transparent text-[12.5px] text-ink outline-none placeholder:text-graphite"
              />
            </label>
            <button
              onClick={() => go(day - 1)}
              aria-label="Previous day"
              className="w-9 h-9 border border-rule rounded-[4px] flex items-center justify-center text-ink cursor-pointer hover:border-ink transition-colors"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.6} />
            </button>
            <button
              onClick={() => go(day + 1)}
              aria-label="Next day"
              className="w-9 h-9 border border-rule rounded-[4px] flex items-center justify-center text-ink cursor-pointer hover:border-ink transition-colors"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div className="mt-4 grid gap-[3px] grid-cols-[repeat(auto-fit,minmax(28px,1fr))]">
          {dayList.map((d) => {
            const isSelected = d === day;
            const isLast = d === TOTAL_DAYS;
            return (
              <button
                key={d}
                onClick={() => go(d)}
                aria-current={isSelected ? 'true' : undefined}
                className={`relative h-[26px] rounded-[3px] border text-[12px] cursor-pointer transition-colors ${
                  isSelected
                    ? 'border-transparent text-cobalt'
                    : isLast
                      ? 'border-live text-live'
                      : 'border-rule text-ink hover:border-ink'
                }`}
              >
                {isSelected && (
                  <Motion.span
                    layoutId="wa-day-marker"
                    className="absolute inset-0 rounded-[3px] border border-cobalt"
                    transition={reduced ? { duration: 0 } : spring}
                  />
                )}
                <span className="relative">{pad(d)}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="hatch h-2.5 border-y border-rule" />

      {/* the selected day */}
      <div className="px-5 sm:px-6 py-5 overflow-hidden">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <Motion.div key={day} custom={dir} variants={panel} initial="enter" animate="center" exit="exit">
            <Motion.h2 variants={block} className="text-[12px] tracking-[0.08em]">
              <span className="text-cobalt">DAY {day}</span>
              {entry?.headline && (
                <>
                  <span className="text-graphite"> / </span>
                  <span className="text-ink">{entry.headline}</span>
                </>
              )}
            </Motion.h2>

            <Motion.div variants={block} className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] text-ink">
              <span className="flex items-center gap-2">
                <Calendar className="w-[14px] h-[14px]" strokeWidth={1.6} />
                {dateOf(day)}
              </span>
              {entry?.temp && (
                <>
                  <span className="w-px h-4 bg-rule" aria-hidden="true" />
                  <span className="flex items-center gap-2">
                    <Cloud className="w-[14px] h-[14px]" strokeWidth={1.6} />
                    {entry.temp}
                  </span>
                </>
              )}
              {entry?.hours && (
                <>
                  <span className="w-px h-4 bg-rule" aria-hidden="true" />
                  <span className="flex items-center gap-2">
                    <Clock className="w-[14px] h-[14px]" strokeWidth={1.6} />
                    {entry.hours}
                  </span>
                </>
              )}
            </Motion.div>

            {entry?.goals?.length > 0 && (
              <Motion.div variants={block} className="mt-4 space-y-2">
                {entry.goals.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[13px] text-ink">
                    <span className="mt-[2px]">
                      <Check done />
                    </span>
                    <span className="leading-[1.5]">{item}</span>
                  </div>
                ))}
              </Motion.div>
            )}

            {entry?.tweet && (
              <Motion.div variants={block} className="mt-5 border border-rule rounded-[4px]">
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="w-[34px] h-[34px] shrink-0 border border-rule rounded-[4px] flex items-center justify-center text-[13px] font-semibold text-ink">
                      AS
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[13px] text-ink">
                          <span className="font-semibold">Arnav Sharma</span>
                          <span className="text-graphite"> · @Bokinsha</span>
                        </p>
                        <a
                          href="https://x.com/Bokinsha"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open on X"
                          className="shrink-0 hover:opacity-70 transition-opacity"
                        >
                          <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-ink" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      </div>
                      <div className="mt-1.5 text-[12.5px] text-ink leading-[1.6] space-y-0.5">
                        {entry.tweet.lines.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                        {entry.tweet.tags && <p className="text-cobalt">{entry.tweet.tags}</p>}
                      </div>
                      {entry.tweet.image && (
                        <div className="mt-3 border border-rule rounded-[4px] overflow-hidden">
                          <img src={entry.tweet.image} alt="" className="w-full h-auto block" loading="lazy" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="border-t border-rule px-4 py-2.5 flex items-center justify-between text-[12px] text-ink">
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-[15px] h-[15px]" strokeWidth={1.5} />
                    {entry.tweet.replies ?? '—'}
                  </span>
                  <span className="flex items-center gap-2">
                    <Repeat2 className="w-[16px] h-[16px]" strokeWidth={1.5} />
                    {entry.tweet.reposts ?? '—'}
                  </span>
                  <span className="flex items-center gap-2">
                    <Heart className="w-[15px] h-[15px]" strokeWidth={1.5} />
                    {entry.tweet.likes ?? '—'}
                  </span>
                  <Share className="w-[15px] h-[15px]" strokeWidth={1.5} />
                </div>
              </Motion.div>
            )}

            {entry?.notes && (
              <Motion.div variants={block} className="mt-4 grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-4">
                <div className="border border-rule rounded-[4px] p-4">
                  <div className="flex items-center gap-2 text-[12.5px] text-ink">
                    Work Allocation
                    <Info className="w-[14px] h-[14px] text-graphite" strokeWidth={1.6} />
                  </div>
                  <div className="mt-3 flex items-center gap-4">
                    <Donut />
                    <div className="flex-1 min-w-0 space-y-2.5">
                      {ALLOCATION.map((s) => (
                        <div key={s.label} className="flex items-center gap-3 text-[12px] text-ink">
                          <svg viewBox="0 0 26 14" className="w-[26px] h-[14px] shrink-0" aria-hidden="true">
                            <Patterns />
                            <rect x="0.5" y="0.5" width="25" height="13" fill={s.fill} stroke="var(--color-ink)" strokeWidth="1" />
                          </svg>
                          <span className="flex-1">{s.label}</span>
                          <span className="text-ink">{s.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border border-rule rounded-[4px] p-4">
                  <p className="text-[12.5px] text-ink">Today&apos;s Notes</p>
                  <p className="mt-3 text-[12.5px] text-ink leading-[1.7]">{entry.notes}</p>
                </div>
              </Motion.div>
            )}

            {!entry && (
              <Motion.p variants={block} className="mt-4 text-[12.5px] text-graphite">
                No entry was recorded for this day.
              </Motion.p>
            )}
          </Motion.div>
        </AnimatePresence>
      </div>

      <Figure src="/winter-desk.jpg" alt="Pencil drawing of a desk with a lamp, mug, notebook and laptop by a snowy window" caption="Fig. 08 — A day recorded as work, not noise." />

      <div className="hatch h-2.5 border-y border-rule" />

      {/* closing milestone */}
      <div className="px-5 sm:px-6 py-5">
        <div className="border border-rule rounded-[4px] flex items-stretch">
          <div className="w-[92px] shrink-0 border-r border-rule flex items-center justify-center py-5">
            <span className="w-12 h-12 rounded-full border border-rule flex items-center justify-center text-ink">
              <Flag className="w-[19px] h-[19px]" strokeWidth={1.5} />
            </span>
          </div>
          <div className="flex-1 min-w-0 px-4 sm:px-5 py-4">
            <p className="text-[12px] text-graphite">January 5, 2026</p>
            <p className="mt-1.5 text-[15px] font-semibold text-ink">
              Joined Boock.ai as a Founding Full Stack Engineer
            </p>
            <p className="mt-2 flex items-center gap-2 text-[11.5px] tracking-[0.06em] text-live">
              <span className="w-[7px] h-[7px] rounded-full bg-live" />
              PRIMARY GOAL COMPLETED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterArc;
