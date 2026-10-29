/* The writing index.
   ---------------------------------------------------------------------------
   To publish a new post, add an object to POSTS. Nothing else needs touching —
   the counters, the filter tabs and the ordering all read from this list.
   A post's number is its place in this list, so add new posts after the last
   published one.

   Required:  id, title, category, date (ISO), published
   Optional:  kind        — the small label above the title, e.g. 'ENGINEERING NOTE'
              titleAccent — a second sentence set in gold italic after the title
              summary     — a sentence or two under the title
              status      — status on the card's footer ('Finished', 'Ongoing'…)
              tone        — 'live' (green) or 'cobalt', colours the status
              readTime    — e.g. '13 min read'
              tags        — a couple of short tags for the footer
              meta        — short facts for the footer, joined with ' · '
              href        — where "Read" goes; omit and the card has no link
              cta         — link label, defaults to 'Read note'
              cover       — { src, alt } the picture across the top of the card
              logEntries  — daily entries, added to the LOG ENTRIES counter

   A post with published: false is counted as a draft but not listed, so you
   can line up what you are working on before it is finished. */

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
    meta: ['46 entries', '61 days'],
    href: '/WinterArc',
    cta: 'Read field log',
    cover: {
      src: '/winter-panorama.jpg',
      alt: 'Pencil panorama of a snowbound valley with a blue trail winding toward the mountains',
    },
    logEntries: 46,
    published: true,
  },
  {
    id: 'pi-harness',
    kind: 'ENGINEERING NOTE',
    category: 'Engineering',
    title: 'Let Pi drive.',
    titleAccent: 'Keep the keys.',
    summary: 'How I turned Pi, a minimal open-source coding agent, into the operator of a book-to-movie pipeline, without a shell or a single key.',
    date: '2026-10-29',
    readTime: '12 min read',
    tags: ['Pi', 'Agent harness'],
    href: '/bblog/let-the-agent-drive-keep-the-keys',
    cover: {
      src: '/pi-card.jpg',
      alt: 'The harness review panel: nothing waiting for you here, Pi will pause and bring each review gate to this panel; the Brief stage approved.',
    },
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
