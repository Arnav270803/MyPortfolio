import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'motion/react';
import { Search, ChevronDown, Clock, ArrowUpRight } from 'lucide-react';
import { POSTS, CATEGORIES } from '../data/writing';

/* NOTES / FIELD LOGS — the writing index. One card per published post, a
   hatch band between them so each reads as its own sheet. */

/* OCT 29, 2026 */
const fmtDate = (iso) =>
  new Date(`${iso}T00:00:00`)
    .toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    .toUpperCase();

const pad = (n) => String(n).padStart(2, '0');

const Cross = () => (
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M6 0v12M0 6h12" />
  </svg>
);

const CropFrame = ({ children }) => (
  <div className="relative border border-dashed border-rule p-3">
    {['-left-1 -top-1', '-right-1 -top-1', '-left-1 -bottom-1', '-right-1 -bottom-1'].map((pos) => (
      <span key={pos} className={`absolute ${pos} w-2.5 h-2.5 text-graphite`} aria-hidden="true">
        <Cross />
      </span>
    ))}
    {children}
  </div>
);

const PostCard = ({ post, onOpen }) => (
  <div className="px-5 sm:px-6 py-9">
    <article className="relative mx-auto max-w-[640px] border border-rule rounded-[4px] bg-paper">
      {['-left-[5px] -top-[5px]', '-right-[5px] -top-[5px]', '-left-[5px] -bottom-[5px]', '-right-[5px] -bottom-[5px]'].map((pos) => (
        <span key={pos} className={`absolute ${pos} w-2.5 h-2.5 text-graphite`} aria-hidden="true">
          <Cross />
        </span>
      ))}

      {post.cover && (
        <div className="p-3 pb-0">
          <div className="relative aspect-[2.15/1] overflow-hidden rounded-[2px] border border-rule">
            <img src={post.cover.src} alt={post.cover.alt || ''} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      )}

      <div className="px-4 sm:px-5 pt-4 pb-4">
        <div className="flex items-center justify-between gap-4 text-[11px] tracking-[0.08em]">
          <span className="truncate">
            <span className="text-cobalt">{post.index}</span>
            {post.kind && (
              <>
                <span className="text-graphite"> / </span>
                <span className="text-cobalt">{post.kind}</span>
              </>
            )}
          </span>
          <span className="text-muted shrink-0">{fmtDate(post.date)}</span>
        </div>

        <h3 className="mt-2.5 text-[22px] sm:text-[24px] leading-[1.2] text-ink">
          {post.title}
          {post.titleAccent && (
            <>
              {' '}
              <em className="italic text-key">{post.titleAccent}</em>
            </>
          )}
        </h3>

        {post.summary && <p className="mt-2 text-[13px] leading-[1.6] text-muted">{post.summary}</p>}

        <div className="mt-4 pt-3.5 border-t border-dashed border-rule flex flex-wrap items-center justify-between gap-x-4 gap-y-3 text-[11.5px]">
          <span className="flex flex-wrap items-center gap-2.5">
            {post.status && (
              <span className={`flex items-center gap-1.5 ${post.tone === 'cobalt' ? 'text-cobalt' : 'text-live'}`}>
                <span className={`w-[7px] h-[7px] rounded-full ${post.tone === 'cobalt' ? 'bg-cobalt' : 'bg-live'}`} />
                {post.status}
              </span>
            )}
            {post.readTime && (
              <span className="flex items-center gap-1.5 text-ink">
                <Clock className="w-[13px] h-[13px]" strokeWidth={1.6} />
                {post.readTime}
              </span>
            )}
            {post.meta && <span className="text-muted">{post.meta.join(' · ')}</span>}
            {post.tags?.map((tag) => (
              <span key={tag} className="px-2 py-[2px] border border-rule rounded-[4px] text-ink">
                # {tag}
              </span>
            ))}
          </span>

          {post.href && (
            <button
              onClick={() => onOpen(post.href)}
              className="flex items-center gap-1.5 text-[12.5px] text-cobalt underline underline-offset-4 shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
            >
              {post.cta || 'Read note'}
              <ArrowUpRight className="w-[14px] h-[14px]" strokeWidth={1.8} />
            </button>
          )}
        </div>
      </div>
    </article>
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
    const logEntries = numbered.reduce((n, p) => n + (p.logEntries || 0), 0);
    return { published, drafts: numbered.length - published, logEntries };
  }, [numbered]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return numbered
      .filter((p) => p.published)
      .filter((p) => category === 'All' || p.category === category)
      .filter((p) => !q || `${p.title} ${p.titleAccent || ''} ${p.summary || ''}`.toLowerCase().includes(q))
      .sort((a, b) => (newestFirst ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));
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
          <p className="text-[11.5px] tracking-[0.08em] text-muted">NOTES / FIELD LOGS</p>
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
            <figcaption className="mt-2.5 text-[11.5px] text-muted">
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

        <label className="flex items-center gap-2 h-9 px-2.5 border border-rule rounded-[4px] text-muted ml-auto shrink-0">
          <Search className="w-[14px] h-[14px] shrink-0" strokeWidth={1.6} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Filter notes..."
            className="w-[110px] lg:w-[120px] bg-transparent text-[12px] text-ink outline-none placeholder:text-muted"
          />
          <kbd className="px-1.5 py-0.5 border border-rule rounded-[3px] text-[11px] text-muted">/</kbd>
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
        {visible.map((post, i) => (
          <Motion.div key={post.id} layout={!reduced} {...fade}>
            {i > 0 && <div className="hatch h-2.5 border-y border-rule" />}
            <PostCard post={post} onOpen={navigate} />
          </Motion.div>
        ))}
      </AnimatePresence>

      {visible.length === 0 && (
        <p className="px-5 sm:px-6 py-10 text-[12.5px] text-muted text-center">
          No notes match that filter yet.
        </p>
      )}
    </div>
  );
};

export default WritingIndex;
