# heyarnav.com: Arnav Sharma's portfolio

Personal portfolio and writing site. Visual language: a **technical blueprint**,
an engineering drawing sheet with hand-written margin notes.
**Read `DESIGN.md` before building or changing any UI.** It is the design-system
spec (tokens, type scale, layout, component vocabulary, motion, voice, known gaps,
and recipes for new pages, sections and figures).

## Stack
- React 19 + Vite 7, plain JavaScript (`.jsx`, no TypeScript)
- Tailwind CSS v4, CSS-first: tokens in `@theme` in `src/index.css` (no `tailwind.config`)
- `motion/react` (import as `motion as Motion`), `lucide-react` icons, `react-router-dom` 7
- Vitest + Testing Library + fast-check are installed, but there are no tests yet

## Commands
- `npm run dev`: dev server
- `npm run build`: production build (must pass)
- `npm run lint`: ESLint (2 pre-existing errors; see DESIGN.md §11)
- `npm test`: Vitest (exits 1 until a test file exists)

## Map
- `src/App.jsx`: routes, `isDark` theme state, ambient lofi engine (read its comments before editing)
- `src/pages/`: `Homee` (`/`), `BlogPage` (`/bblog`), `WinterArcPage` (`/WinterArc`), `ResumePage` (`/resume`, still pre-redesign)
- `src/Component/`: live blueprint sections are `Navbar`, `MyIntro`, `SystemStack`, `ActivityGraph`,
  `CurrentBuilds`, `Experience`, `Sideprojects`, `TechStack`, `WritingIndex`, `WinterArc`.
  Legacy and unused: `Logos`, `Socials`, `MyAgent`, `BlogSection`, `Bloging`, `MVP`. `Footer` and `Resumee` are still used but off-system.
- `src/data/writing.js`: blog posts. Add an object to `POSTS`; the schema is documented at the top of the file
- `src/data/winterArc.js`: Winter Arc daily log (verbatim quotes, so don't "fix" their typos or URLs)
- `public/`: images (pencil illustrations as ≤1440px JPEG), the resume PDF, the lofi MP3

## Rules of the house
- Use token classes only (`bg-paper`, `text-ink`, `text-graphite`, `border-rule`, `text-cobalt`, `text-live`).
  Dark mode is a CSS-variable swap via `.theme-dark` on the page root, so never add `isDark ?` class conditionals.
- Everything is IBM Plex Mono. Plex Sans is only for the `AS` monogram. Caveat is only for margin notes and the greeting.
- Rows divided by hairlines, not cards with shadows. Radii 3/4/5px. Outline buttons. Hatch bands between sections.
- Cobalt is the single accent (active, link, number, annotation). Green `live` is for status only.
- Number sections and figures (`05 / TITLE`, `Fig. 03 — Caption.`), zero-pad indices, derive counts from data.
- Every animation needs a `useReducedMotion()` fallback.
- Keep data as constants at the top of a component, or in `src/data/` with a schema comment when it grows.
- Comments: a short header naming the section (`/* 03 / SELECTED PROJECTS — … */`), then only the non-obvious *why*.
- Verify at 390px (no horizontal scroll) and in dark mode before calling UI done.
