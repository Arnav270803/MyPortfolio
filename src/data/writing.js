/* The writing index.
   ---------------------------------------------------------------------------
   To publish a new post, add an object to POSTS. Nothing else needs touching —
   the counters, the filter tabs and the ordering all read from this list.

   Required:  id, title, category, date (ISO), published
   Optional:  kind      — the small label above the title, e.g. 'ENGINEERING NOTE'
              status    — pill text next to the title ('Finished', 'Ongoing'…)
              tone      — 'live' (green) or 'cobalt', colours the pill
              summary   — a sentence or two under the title
              meta      — extra lines shown beside the chart icon
              href      — where "Read" goes; omit and the card is not clickable
              cta       — link label, defaults to 'Read note'
              figure    — { src, alt, caption } drawn with crop marks
              strip     — { total, done } renders the day strip under the figure

   A post with published: false renders as a compact DRAFT row instead of a
   card, so you can list what you are working on before it is finished. */

export const CATEGORIES = ['All', 'Personal', 'Engineering', 'Tutorials', 'Build Logs'];

export const POSTS = [
  {
    id: 'winter-arc',
    kind: 'PERSONAL JOURNEY',
    category: 'Personal',
    title: 'My Winter Arc',
    status: 'Finished',
    tone: 'live',
    summary: 'My winter life transformation: a seasonal journey unveiled.',
    date: '2025-11-06',
    meta: ['46 daily entries · 61 days ·', 'Final milestone: Joined Boock.ai'],
    href: '/WinterArc',
    cta: 'Read field log',
    figure: {
      src: '/winter-panorama.jpg',
      alt: 'Pencil panorama of a snowbound valley with a blue trail winding toward the mountains',
      caption: 'Fig. 06 — A season measured in days.',
    },
    strip: { total: 46, done: 46 },
    published: true,
  },
  {
    id: 'observable-agents',
    category: 'Engineering',
    title: 'Building observable AI agents',
    date: '2026-02-10',
    published: false,
  },
  {
    id: 'reliable-pipelines',
    category: 'Engineering',
    title: 'Designing reliable product pipelines',
    date: '2026-03-04',
    published: false,
  },
  {
    id: 'founding-engineer-notes',
    category: 'Build Logs',
    title: 'Notes from founding-engineer work',
    date: '2026-04-18',
    published: false,
  },
];
