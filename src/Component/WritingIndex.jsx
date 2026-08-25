import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'motion/react';
import { Search, ChevronDown, Calendar, LineChart, ArrowUpRight, Plus } from 'lucide-react';
import { POSTS, CATEGORIES } from '../data/writing';

/* NOTES / FIELD LOGS — the writing index */

const fmtDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).replace(/^(\w+)/, '$1.');

const pad = (n) => String(n).padStart(2, '0');

const CropFrame = ({ children }) => (
  <div className="relative border border-dashed border-rule p-3">
    {['-left-1 -top-1', '-right-1 -top-1', '-left-1 -bottom-1', '-right-1 -bottom-1'].map((pos) => (
      <span key={pos} className={`absolute ${pos} w-2.5 h-2.5 text-graphite`} aria-hidden="true">
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M6 0v12M0 6h12" />
        </svg>
      </span>
    ))}
    {children}
  </div>
);

/* one cell per day; the finished tail is filled */
const DayStrip = ({ total, done }) => {
  const ticks = [];
  for (let n = 1; n <= total; n += 5) ticks.push(n);
  if (ticks[ticks.length - 1] !== total) ticks.push(total);

  return (
    <div className="mt-4">
      <p className="text-[12px] font-semibold text-ink">Day</p>
      <div className="mt-1.5 flex text-[10.5px] text-graphite">
        {ticks.map((n, i) => (
          <span key={n} className={`flex-1 ${i === ticks.length - 1 ? 'text-right' : ''}`}>
            {pad(n)}
          </span>
        ))}
      </div>
      <div className="mt-1 flex gap-px">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`flex-1 h-[15px] border border-rule ${i < done - 1 ? 'bg-transparent' : ''} ${
              i === total - 1 ? 'bg-live border-live' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const PostCard = ({ post, onOpen }) => {
  /* a post with no artwork gets the full rail rather than an empty column */
  const hasAside = Boolean(post.figure || post.strip);

  return (
  <article className="px-5 sm:px-6 py-6 border-b border-rule">
    <div className={`grid grid-cols-1 gap-6 md:gap-8 ${hasAside ? 'md:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)]' : ''}`}>
      <div className="min-w-0">
        {post.kind && (
          <p className="text-[11.5px] tracking-[0.08em]">
            <span className="text-cobalt">{post.index}</span>
            <span className="text-graphite"> / </span>
            <span className="text-cobalt">{post.kind}</span>
          </p>
        )}

        <h3 className="mt-2.5 text-[22px] sm:text-[25px] leading-[1.15] text-ink">{post.title}</h3>

        {post.status && (
          <span
            className={`mt-3 inline-flex items-center gap-2 px-2.5 py-1 border border-rule rounded-[4px] text-[12.5px] ${
              post.tone === 'cobalt' ? 'text-cobalt' : 'text-live'
            }`}
          >
            <span className={`w-[7px] h-[7px] rounded-full ${post.tone === 'cobalt' ? 'bg-cobalt' : 'bg-live'}`} />
            {post.status}
          </span>
        )}

        {post.summary && <p className="mt-3 text-[12.5px] text-graphite leading-[1.6]">{post.summary}</p>}

        <div className="mt-4 pt-4 border-t border-dashed border-rule space-y-2.5 text-[12.5px] text-ink">
          <p className="flex items-center gap-2.5">
            <Calendar className="w-[15px] h-[15px] shrink-0" strokeWidth={1.6} />
            {fmtDate(post.date)}
          </p>
          {post.meta && (
            <div className="flex items-start gap-2.5">
              <LineChart className="w-[15px] h-[15px] shrink-0 mt-[3px]" strokeWidth={1.6} />
              <span className="leading-[1.6]">
                {post.meta.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>

        {post.href && (
          <button
            onClick={() => onOpen(post.href)}
            className="mt-4 flex items-center gap-1.5 text-[13px] text-cobalt underline underline-offset-4 cursor-pointer hover:opacity-70 transition-opacity"
          >
            {post.cta || 'Read note'}
            <ArrowUpRight className="w-[14px] h-[14px]" strokeWidth={1.8} />
          </button>
        )}
      </div>

      {hasAside && (
        <div className="min-w-0">
          {post.figure && (
            <figure>
              <CropFrame>
                <img src={post.figure.src} alt={post.figure.alt || ''} className="w-full h-auto block" loading="lazy" />
                <figcaption className="mt-2.5 text-[11.5px] text-graphite">{post.figure.caption}</figcaption>
              </CropFrame>
            </figure>
          )}
          {post.strip && <DayStrip total={post.strip.total} done={post.strip.done} />}
        </div>
      )}
    </div>
  </article>
  );
};

const DraftRow = ({ post }) => (
  <div className="h-12 px-5 sm:px-6 border-b border-rule flex items-center gap-4 text-[13px]">
    <Plus className="w-4 h-4 text-graphite shrink-0" strokeWidth={1.4} aria-hidden="true" />
    <span className="min-w-0 flex-1 truncate">
      <span className="text-cobalt">{post.index}</span>
      <span className="text-graphite"> / </span>
      <span className="text-ink">{post.title}</span>
    </span>
    <span className="text-[11.5px] tracking-[0.08em] text-graphite shrink-0">DRAFT</span>
  </div>
);

const WritingIndex = () => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [newestFirst, setNewestFirst] = useState(true);

  /* numbering follows the full list, so a post keeps its index while filtering */
  const numbered = useMemo(
    () => POSTS.map((p, i) => ({ ...p, index: pad(i + 1) })),
    []
  );

  const stats = useMemo(() => {
    const published = numbered.filter((p) => p.published).length;
    const logEntries = numbered.reduce((n, p) => n + (p.strip?.total || 0), 0);
    return { published, drafts: numbered.length - published, logEntries };
  }, [numbered]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return numbered
      .filter((p) => category === 'All' || p.category === category)
      .filter((p) => !q || `${p.title} ${p.summary || ''}`.toLowerCase().includes(q))
      .sort((a, b) => {
        if (a.published !== b.published) return a.published ? -1 : 1;
        /* drafts stay in the order they were written into the data file */
        if (!a.published) return a.index.localeCompare(b.index);
        return newestFirst ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date);
      });
  }, [numbered, category, query, newestFirst]);

  const fade = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.22, 0.61, 0.36, 1] } },
        exit: { opacity: 0, y: -6, transition: { duration: 0.16 } },
      };

  return (
    <div className="font-mono">
      {/* header */}
      <div className="px-5 sm:px-6 py-6 grid grid-cols-1 md:grid-cols-[1.1fr_0.75fr] lg:grid-cols-[1.1fr_0.7fr_1.05fr] gap-6 lg:gap-8">
        <div className="min-w-0">
          <p className="text-[11.5px] tracking-[0.08em] text-graphite">NOTES / FIELD LOGS</p>
          <h1 className="mt-3 text-[32px] sm:text-[36px] leading-none text-ink">Writing</h1>
          <p className="mt-4 text-[13px] text-ink leading-[1.6]">
            Personal notes, engineering lessons, tutorials, and build logs.
          </p>
        </div>

        <dl className="min-w-0 self-start">
          {[
            { n: pad(stats.published), label: 'PUBLISHED' },
            { n: pad(stats.drafts), label: 'DRAFTS' },
            { n: stats.logEntries, label: 'LOG ENTRIES' },
          ].map((row, i) => (
            <div
              key={row.label}
              className={`flex items-baseline gap-4 py-2.5 ${i ? 'border-t border-dashed border-rule' : ''}`}
            >
              <dt className="text-[18px] text-cobalt w-[34px] shrink-0">{row.n}</dt>
              <dd className="text-[12.5px] tracking-[0.06em] text-ink">{row.label}</dd>
            </div>
          ))}
        </dl>

        <figure className="hidden lg:block min-w-0">
          <CropFrame>
            <img
              src="/writing-notebook.jpg"
              alt="Pencil drawing of a stack of notebooks with a pencil resting on top"
              className="w-full h-auto block"
              loading="lazy"
            />
            <figcaption className="mt-2.5 text-[11.5px] text-graphite">
              Fig. 05 — Ideas become systems when documented.
            </figcaption>
          </CropFrame>
        </figure>
      </div>

      <div className="hatch h-2.5 border-y border-rule" />

      {/* filters */}
      <div className="px-5 sm:px-6 py-3.5 border-b border-rule flex items-center gap-3 flex-wrap lg:flex-nowrap">
        <div className="flex items-center gap-1 flex-wrap">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`px-2 py-1.5 rounded-[3px] text-[12px] whitespace-nowrap cursor-pointer transition-colors ${
                category === c ? 'border border-ink text-ink' : 'border border-transparent text-ink hover:opacity-70'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 h-9 px-2.5 border border-rule rounded-[4px] text-graphite ml-auto shrink-0">
          <Search className="w-[14px] h-[14px] shrink-0" strokeWidth={1.6} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Filter notes..."
            className="w-[110px] lg:w-[120px] bg-transparent text-[12px] text-ink outline-none placeholder:text-graphite"
          />
          <kbd className="px-1.5 py-0.5 border border-rule rounded-[3px] text-[11px] text-graphite">/</kbd>
        </label>

        <button
          onClick={() => setNewestFirst((v) => !v)}
          className="h-9 px-2.5 border border-rule rounded-[4px] flex items-center gap-1.5 text-[12px] text-ink shrink-0 cursor-pointer hover:border-ink transition-colors"
        >
          {newestFirst ? 'Newest' : 'Oldest'}
          <ChevronDown className="w-4 h-4 text-graphite" strokeWidth={1.6} />
        </button>
      </div>

      {/* the list */}
      <AnimatePresence mode="popLayout" initial={false}>
        {visible.map((post) => (
          <Motion.div key={post.id} layout={!reduced} {...fade}>
            {post.published ? <PostCard post={post} onOpen={navigate} /> : <DraftRow post={post} />}
          </Motion.div>
        ))}
      </AnimatePresence>

      {visible.length === 0 && (
        <p className="px-5 sm:px-6 py-10 text-[12.5px] text-graphite text-center">
          No notes match that filter yet.
        </p>
      )}
    </div>
  );
};

export default WritingIndex;
