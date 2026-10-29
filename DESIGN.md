# Blueprint — the design system of heyarnav.com

This spec is reverse-engineered from the live code (Aug 2026 redesign:
`d066557`, `de290c4`, `eb8d82c`). Anything new should read as one more sheet
in the same drawing set. When this file and the code disagree, the code wins.
Fix this file in the same commit.

---

## 1. The idea

The site is a **technical drawing sheet**: an engineer's blueprint that a
person has annotated by hand. Every decision follows from that one metaphor.

| Drawing-sheet idea | How it shows up |
| --- | --- |
| Sheet on a cutting mat | Off-white `paper` canvas, crop/registration marks in the corners, coordinate readouts (`X: -576 / Y: 032`), dashed guide rules |
| Drawing frame | A single 768px **rail** with hairline left/right borders; all content sits inside it |
| Figures | Visuals are numbered and captioned: `Fig. 01 — Anatomy of a product system.` |
| Ledgers / schedules | Content is rows divided by hairlines, not cards: records, indexes, matrices |
| Part numbers | Sections and items are zero-padded indices: `02 / EXPERIENCE`, `01`, `04 RECORDS` |
| Dimension lines and callouts | SVGs carry measurement arrows (`540`, `420`), dashed leader lines, numbered callout boxes |
| Assembly tree | A company "spine" branches to its roles with dashed elbow connectors |
| Hatching | 45° hatch bands separate sections; SVG charts use hatch/dot/line *patterns* instead of colour fills |
| Revision block | Footer: `@heyarnav.com · REV. 2026 / DELHI · Built in React` |
| The annotator's pen | Handwritten cobalt notes in the margin (Caveat) with hand-drawn arrows pointing into the rail |

Character: calm, precise, monochrome, information-dense, and a little
playful (the handwriting, the lofi, the rotating tagline). It should feel
engineered, never decorated.

---

## 2. Tokens (`src/index.css`)

Tailwind v4, CSS-first. Tokens live in `@theme` and are used as utility classes
(`bg-paper`, `text-ink`, `border-rule`, `text-cobalt`, `bg-live`, `font-mono`…).

| Token | Light | Dark (`.theme-dark`) | Role |
| --- | --- | --- | --- |
| `paper` | `#FAF9F4` | `#07090B` | Canvas and any surface that must hide what's behind it |
| `ink` | `#111318` | `#E8EAED` | Primary text, strong strokes, emphasised borders, filled dots |
| `graphite` | `#9299A1` | `#6C737C` | Secondary text, metadata, captions, `/` separators, `•` bullets, inactive SVG strokes |
| `rule` | `#D9DDE1` | `#1D2227` | Every hairline, default border, hatch, crop/plus marks, dashed guides |
| `cobalt` | `#315E9C` | `#4C86E0` | **The only accent**: section numbers, active/selected, links, annotations, focus ring, `BUILDING` |
| `live` | `#238857` | `#2FA96D` | Status green: `LIVE`, `CURRENT`, `Ongoing`, `Finished`, done checks, "available" dot |

Rules:
- **Colour is semantic, not decorative.** Ink and graphite carry the page.
  Cobalt means "this is the active thing / a pointer". Live means "alive or done".
  There is no third accent: no red, no gradients, no brand colours.
- Tints are opacity on ink: `hover:bg-ink/[0.03]`, `hover:bg-ink/[0.04]`.
- In SVG, always reference `var(--color-*)` so figures re-theme for free.
- Dark mode works by **swapping CSS variables** on `.theme-dark`, applied to
  the page root. Never write `isDark ? 'x' : 'y'` class conditionals in
  blueprint code; that pattern belongs to the legacy pages.

Measured contrast on `paper` (WCAG): ink 17.6, cobalt 6.2, live 4.2,
**graphite 2.7** (dark mode: 4.2). Graphite text is below AA in light mode;
see §11.

Fonts (loaded in `index.html` from Google Fonts):

| Token | Family | Use |
| --- | --- | --- |
| `font-mono` | IBM Plex Mono 300–700, italic 500/600 | **Everything.** Each section root sets `font-mono` |
| `font-grotesk` | IBM Plex Sans 500–700 | Only the `AS` monogram (700, `tracking-[-0.03em]`) |
| `font-hand` | Caveat 400–700 | Margin annotations and the greeting (`Good afternoon`) only |

Utilities defined in CSS:
- `.hatch`: 45° repeating 1px rule lines every 5px. Used as `hatch h-2.5 border-y border-rule`.
- `.blueprint :focus-visible`: 2px cobalt outline, 2px offset. The page root must carry `blueprint`.

---

## 3. Type scale

Fine-grained px values via arbitrary Tailwind classes. Tailwind's default
`text-sm/base/lg` scale is not used.

| Size | Use |
| --- | --- |
| `10px`–`10.5px` | Micro labels: ruler ticks, chart legends |
| `11px` | Caps sub-labels (`tracking-[0.08em]`), kbd, tooltips, coordinate readouts |
| `11.5px` | Figure captions, eyebrows (`01 / PERSONAL JOURNEY`), chips in dense rows |
| `12px`–`12.5px` | Chips, status text, small body, ledger body, links |
| `13px` | Default body, nav, ledger rows |
| `14px`–`15px` | Buttons, role titles (semibold), **section titles** (15px, `tracking-[0.06em]`) |
| `16px`–`17px` | Project/company names (semibold), italic sub-heads (`Goals / 07`) |
| `22px`–`25px` | Post titles, `leading-[1.15]` |
| `26px`–`36px` | Page `h1`: name 26/32, `Writing` 32/36, `My Winter Arc` 26/30 |
| `18px` | Big stat numbers (cobalt) |

Conventions:
- Labels, statuses and section titles are UPPERCASE with `tracking-[0.06em]`–`[0.08em]`.
- Names are `font-semibold`; headings are otherwise regular weight. Mono at
  large sizes reads as display type, so it doesn't need weight.
- Body leading `1.5`–`1.7`.
- Numbers are zero-padded to two digits: `String(n).padStart(2, '0')`.
- Separators are typographic: ` / ` in graphite, ` — ` (em dash), ` · ` (middle dot).

---

## 4. Layout

```
┌ crop mark ─ X:-576 ─ ─ ─ ─ ┬──────── 768px rail ────────┬ ─ ─ ─ ─ X:1344 ─ crop mark ┐
                             │ header  h-16  border-b      │
   handwritten note ↘        │ section header              │   ↙ handwritten note
                             │ ledger row   border-b       │
                             │ ▨▨▨▨▨▨ hatch band ▨▨▨▨▨▨▨▨ │
                             │ ...                         │
                             │ footer h-14                 │
└ crop mark                  └─────────────────────────────┘                  crop mark ┘
```

- **Canvas**: `blueprint relative bg-paper text-ink min-h-screen transition-colors duration-300` (+ `theme-dark`).
- **Canvas margin** (`xl` and up only, `aria-hidden`, `pointer-events-none`): four `CropMark`s at 20px
  inset, coordinate readouts at top-left/right, and dashed rules at `top-[32px]` running from each corner to the rail edge.
- **Rail**: `relative mx-auto max-w-[768px] border-x border-rule min-h-screen`.
- **Gutters**: `px-5 sm:px-6` (20/24px) for every block. Vertical: `py-4`/`py-5`/`py-6`;
  section headers `pt-5 pb-4`.
- **Rows, not cards.** Blocks are stacked full-width and divided by `border-b border-rule`.
  No gaps between blocks, no drop shadows. Where a boxed panel is needed (goals table,
  tweet card, chart panels) it's `border border-rule rounded-[4px]`, still flat.
- **Solid vs dashed**: solid hairlines are block boundaries; `border-dashed` subdivides
  inside a block (stat rows, goal rows, the meta divider in a post card, the ledger's column split).
- **Section break**: `<div className="hatch h-2.5 border-y border-rule" />`.
- **Index gutter column**: `w-[46px] sm:w-[52px] shrink-0 border-r border-rule`, holds `01`, `02`…
- **Label column** (tables of groups): `w-[120px] sm:w-[150px] shrink-0 border-r border-rule`.
- **Margin notes**: absolutely positioned outside the rail with negative offsets
  (`-left-[240px]`, `-right-[220px]`), `xl` only, `aria-hidden`, rotated ±4–6°.
- **Responsive**: mobile-first. Two-column ledgers collapse to one (`grid-cols-1 md:grid-cols-2`),
  wide tables/graphs scroll inside `overflow-x-auto`, secondary meta hides (`hidden md:inline`).

Shape:
- Radii are small and fixed: `3px` (kbd, day cells, filter tabs), `4px` (chips, buttons,
  inputs, panels, the company monogram, 24px icon cells), `5px` (28px+ icon tiles, social buttons),
  `rounded-full` (avatar, status dots).
- Borders are 1px. `1.5px` only for the company monogram tile and empty checkboxes.
- `border-rule` is the default. `border-ink` marks something emphasised or primary
  (role icon tiles, the `Show more` button, the selected filter tab). Hover often moves
  `border-rule → border-ink`.

---

## 5. Component vocabulary

Reuse these before inventing anything. Locations are where the canonical version lives.

**Section header** (`Experience.jsx`, `Sideprojects.jsx`, `TechStack.jsx`)
```jsx
<div className="px-5 sm:px-6 pt-5 pb-4 border-b border-rule flex items-start justify-between gap-4">
  <div>
    <h2 className="text-[15px] tracking-[0.06em] text-ink">
      <span className="text-cobalt">05</span>
      <span className="text-graphite"> / </span>
      SECTION TITLE
    </h2>
    <p className="mt-1.5 text-[11px] tracking-[0.08em] text-graphite">WHAT THIS IS · {pad(items.length)}</p>
  </div>
  <Plus className="w-5 h-5 text-rule shrink-0" strokeWidth={1.4} aria-hidden="true" />
</div>
```
The sub-line can carry a right-aligned count: `<span className="text-cobalt">04</span> RECORDS`.
The compact variant (`CurrentBuilds`) is a single `h-11` row at 12.5px.

**Eyebrow**: `01 / PERSONAL JOURNEY`, 11.5px, `tracking-[0.08em]`, cobalt with a graphite slash.

**Ledger row** (`CurrentBuilds.jsx`): `h-12 px-5 sm:px-6 border-b border-rule flex items-center justify-between`,
icon + **Name** — role on the left; status + `ChevronRight` on the right; `hover:bg-ink/[0.03]`.

**Expandable record** (`Experience.jsx`): a monogram tile (34px, `border-[1.5px] border-ink`), the name,
and tenure, with the role count, status, dot and a `ChevronDown` (`rotate-180` when open) on the right. The body is the
**spine and branch** connector: a 1px `bg-rule` vertical at `left-[17px]` plus a dashed horizontal
stub into a 28px `border-ink` icon tile. The last branch's spine stops at its stub. Details expand in place
(`aria-expanded`), with a global `Show more / Show less` toggle.

**Indexed row** (`Sideprojects.jsx`): index gutter + 44px icon tile + title/summary, with status,
`Live ↗` / `Code ↗` (cobalt, `stopPropagation`) and the chevron on the right. Rows that carry a role reuse the elbow connector.

**Chip**: `px-2.5 py-1 border border-rule rounded-[4px] text-[12px] text-ink`. Hashtag variant: `# Winter`.

**Status**: a 7–8px `rounded-full` dot plus caps text, both in the tone colour.
Tone maps: `{ live: 'text-live', cobalt: 'text-cobalt', graphite: 'text-graphite' }` (+ the `bg-` twin).
Vocabulary: `LIVE`, `CURRENT`, `BUILDING`, `COMPLETED`, `FINISHED`, `DRAFT`, `Ongoing`, `Finished`.
Pill variant (writing index): the same, inside `border border-rule rounded-[4px] px-2.5 py-1`.

**Icon tile**: a square box with a centred lucide icon. Sizes: 24px (identity ledger, icon 13px),
28px (roles, 15px), 36px (social buttons, 17px), 44px (projects, 21px).

**Figure**: always numbered and captioned, `Fig. NN — Sentence ending in a full stop.` at
`text-[11.5px] text-graphite`. Either a code-drawn SVG or a pencil image inside a crop frame:
- `CropFrame` (`WritingIndex.jsx`): dashed rule border, `p-3`, 10px plus marks hanging off each corner (`-left-1 -top-1`…).
- `Figure` (`WinterArc.jsx`): solid rule border, plus marks inset in the corners, image padded `p-3`.

**Buttons**: outline only, never filled.
- Primary: `px-7 py-3 border border-ink rounded-[4px] text-[14px] flex items-center gap-3 hover:bg-ink/[0.04]` + an arrow icon.
- Secondary/icon: `h-9` (or `w-9 h-9`) `border border-rule rounded-[4px] hover:border-ink transition-colors`.
- Text link: `text-cobalt underline underline-offset-4` + `ArrowUpRight` (13–14px).
- Nav item: plain text, `hover:underline underline-offset-[6px]`; active = `text-cobalt` (pass `active` to `Navbar`).

**Input**: a label wrapper `h-9 px-2.5 border border-rule rounded-[4px] flex items-center gap-2 text-graphite`
with a `Search` icon, a bare `bg-transparent outline-none text-[12px] text-ink placeholder:text-graphite` input,
and an optional `<kbd>` hint.

**Filter tabs**: `px-2 py-1.5 rounded-[3px] text-[12px]`. Selected gets `border-ink`, the rest `border-transparent`, plus `aria-pressed`.

**Kbd**: `border border-rule rounded-[3px] text-[11px]`, split cells for combos (`Ctrl | K`).

**Stat list** (`<dl>`): an 18px cobalt number (`w-[34px]`) + a caps label, rows split by dashed rules.

**Matrix / table** (`TechStack.jsx`): full rule grid, `●` (7px ink dot) for yes, a graphite `–` for no,
and an `sr-only` sentence per cell. Wrap in `overflow-x-auto` with a `min-w`.

**Tooltip**: `bg-ink text-paper text-[11px] rounded-[4px] px-2.5 py-1.5`, opening on hover, focus and click, `role="tooltip"`.

**Checkbox (display)**: 17px; done = `bg-live` + white check path, todo = `border-[1.5px] border-ink rounded-[3px]`.

**Panels**: tweet card, chart card, notes card and milestone card (`WinterArc.jsx`), all `border border-rule rounded-[4px]`,
with internal dividers as rules and a left icon column (`w-[92px] border-r`) for the milestone.

**Margin annotation** (`Homee.jsx`, page files): `font-hand text-cobalt text-[20px] leading-[24px]–[26px]`,
rotated, with a hand-drawn SVG arrow (`strokeWidth 1.2`, round caps, open arrowhead) aimed at the content it explains.
The copy is short and lowercase: `open a layer / trace the system`, `write down what changed`, `progress leaves a trace`.

---

## 6. Figures and data visualisation

Code-drawn figures are the signature of the site. Build them as hand-written SVG, not chart libraries.

- **Line drawing first**: 0.7–1.15px strokes, round joins/caps, `paper` fills to occlude, faint
  `rgba(ink, .05)` side walls. The active element switches stroke and fill to cobalt.
- **Annotate like a drawing**: dimension lines with arrow markers and a measured number, dashed
  projection/leader lines (`strokeDasharray="4 4"` / `"5 4"`), numbered callout boxes (26×18, r=3)
  with caps labels, and a `Fig. NN —` caption *inside* the SVG when there's room.
- **Monochrome encodings**: categorical fills use SVG `<pattern>`s (diagonal ink, diagonal cobalt,
  dots, horizontal lines) instead of hues. See `Patterns` in `WinterArc.jsx`.
- **Parametric geometry**: derive everything from a few constants (see `SystemStack.jsx`: a 20° flattened
  isometric `pt(x, y, z)` projection, plate size `W × D`, `GAP`, thickness `T`). Memoise the geometry.
- **Interactive, quietly**: click a layer/day/cell to make it active (cobalt). No hover-only content.
- **Ramps** are graphite steps (the contribution graph uses 5 greys). Highlight one thing in cobalt or live.
- Existing figures: `SystemStack` (exploded isometric stack), `ActivityGraph` (52-week grid, real data
  pasted as a digit string), the progress ruler with ticks, the day grid with a `layoutId` marker,
  `DayStrip`, the hatched `Donut`, and the capability matrix.

---

## 7. Illustration art direction

- **Graphite pencil sketch** on an off-white ground that matches `paper`. Monochrome.
- **One cobalt element** that carries the meaning: the river trail through the valley, the
  footprints in the snow, the dashed arrow leaving the pencil. Pure-pencil images are also fine (the desk).
- Subjects are calm, literal metaphors for the content (a route through winter, notebooks, a desk by a window).
- Always shown as a numbered `Fig.` inside a crop frame, `loading="lazy"`, with a descriptive `alt`.
- Export as JPEG, ≤1440px wide, a few hundred KB at most.
- The avatar (`cropped_circle_image.png`, a colour cartoon) is the one deliberate exception: a human
  note in an otherwise drawn sheet.

---

## 8. Motion

Library: `motion/react`, imported as `import { motion as Motion, AnimatePresence, useReducedMotion } from 'motion/react'`
(capitalised alias to satisfy the lint rule `varsIgnorePattern: '^[A-Z_]'`).

| Token | Value | Where |
| --- | --- | --- |
| Standard ease | `[0.22, 0.61, 0.36, 1]` | All enters |
| Exit ease | `'easeIn'`, 0.16–0.2s | All exits |
| Glyph | 0.24s, stagger 0.016s | Rotating tagline |
| Panel / list enter | 0.28s | Day panel, writing list |
| Block cascade | 0.32s, stagger 0.05s | Blocks inside a day panel |
| Spring | `{ type: 'spring', stiffness: 380, damping: 32 }` | Markers that travel (progress dot, `layoutId` day marker) |
| CSS | `transition-colors`, chevron `duration-200`, theme `duration-300` | Hover, expand, theme swap |

Signature moves: enter = `opacity 0 → 1` + `y 5–10 → 0` + `blur(2–4px) → 0`; direction-aware
`x ±20` slides when stepping through a sequence; `AnimatePresence mode="wait"` for swaps and `"popLayout"` with
`layout` for list reorders; a shared `layoutId` marker for selection; a blinking cobalt caret.

**Non-negotiable:** every animation reads `useReducedMotion()` and falls back to opacity only (or
duration 0 for springs). Motion explains state changes; it never decorates idle content. The one
idle loop is the speaker pulse, and only while the lofi plays.

Sound is part of the personality: a UI click on theme toggle, plus an ambient lofi track that fades
in (4s to volume 0.22) on the first real user activation and remembers the choice in `localStorage`.
The logic lives in `App.jsx`. Read its comments before touching it.

---

## 9. Iconography

- `lucide-react` only. Stroke `1.5`–`1.8` (usually `1.6`), sizes 13–21px, colour inherits (`text-ink` / `text-graphite`).
- GitHub is drawn filled (`fill="currentColor" strokeWidth={0}`). X uses an inline SVG path (see `XMark` in `MyIntro.jsx`).
- Hand-drawn marks are inline SVG: `CropMark` (circle + cross), `Plus` (12px cross), the annotation arrows.
- Lordicon (`index.html` script, `@lordicon/react`) is legacy; don't use it in new work.

---

## 10. Voice and copy

- Engineering-document register: `Fig. 04 — Five selected products and evolving systems.`,
  `SELECTED ROLES · DETAILS EXPAND IN PLACE`, `NOTES / FIELD LOGS`, `PROJECT INDEX · 05`, `REV. 2026 / DELHI`.
- Captions are short, declarative, slightly poetic, and end with a full stop:
  `A day recorded as work, not noise.`, `Ideas become systems when documented.`
- Labels are caps; prose is sentence case; handwritten notes are lowercase.
- Counts are derived from data and zero-padded, never hand-typed.
- Empty states are plain and honest: `No notes match that filter yet.`, `No entry was recorded for this day.`

Numbering in use: sections `01` Current builds, `02` Experience, `03` Selected projects,
`04` Core stack. Figures `01` SystemStack, `02` ActivityGraph, `04` Projects, `05` Stack matrix,
`05` Writing notebook (duplicate), `06` Winter panorama, `07` Winter route, `08` Winter desk. `Fig. 03` is unused.
The next new figure on the home page should take `03`. Re-number the notebook if you touch the blog.

---

## 11. Known gaps (verified Oct 2026)

Fix these or work around them. Don't copy them into new work.

1. **Horizontal scroll on phones (home)**: at 390px the page is 474px wide.
   - The `sr-only` spans in the `TechStack` matrix are `position: absolute`. Their containing block is the
     rail, not the `overflow-x-auto` wrapper, so they escape it. Fix: add `relative` to that wrapper.
   - The rotating tagline (per-glyph `whitespace-pre` spans in an `inline-flex`) can't wrap and runs
     ~28px past the column ("…Product Build"). It needs truncation or a smaller size on mobile.
2. **Dark mode leaks**: `ActivityGraph` uses hard-coded light hex `LEVELS`, so empty cells are bright
   squares on the dark canvas. `SystemStack` hard-codes light `rgba(49,94,156,…)` / `rgba(17,19,24,…)` fills.
   Use `color-mix(in srgb, var(--color-ink) N%, transparent)` or token-driven values.
3. **Graphite text contrast** is 2.7:1 on light paper (AA needs 4.5:1 for small text) and `live` is 4.2:1.
   Consider a darker text-only graphite while keeping `#9299A1` for strokes.
4. **Theme isn't persisted**: `isDark` is plain `useState(false)`. It ignores `prefers-color-scheme` and resets on reload.
5. **Off-system pages**: `/resume` (`ResumePage`, `Resumee`) and the home `Footer.jsx` are pre-redesign
   (zinc/gray palette, default sans, `isDark` conditionals, shadows, scale hovers). Blog and Winter Arc
   have the proper blueprint footer.
6. **Affordances that don't do anything yet**: the `Ctrl K` hint (no handler), the `/` kbd in the notes filter,
   and the search icon (it only routes to `/bblog`). `CurrentBuilds` rows show `cursor-pointer`, a chevron and an external-link icon but have no action.
7. **Hero labels on phones**: the 700-unit `SystemStack` viewBox scales down to ~350px, so callout text renders at ~6px.
8. **Duplication**: `CropMark` and the canvas margin are copy-pasted in three page files. Chip, section header,
   status tone maps, hatch, and `CropFrame`/`Figure` are repeated across components.
9. **Dead code and assets**: `Logos`, `Socials`, `MyAgent`, `BlogSection`, `Bloging` and `MVP` aren't imported. Lordicon
   is loaded globally for nothing. Several `public/` images are only used by dead components or not at all.
10. **Tooling**: `npm run lint` reports 2 errors (`Footer.jsx` unused `isDark`, `test/setup.js` unused `expect`).
    `npm test` exits 1 because there are no test files (Vitest, Testing Library and fast-check are installed).
11. `Navbar` evaluates `new Audio(...)` inside `useRef(...)` on every render.

---

## 12. How to build something new

### A new page
1. Extract a shared shell first (see gap 8): `BlueprintPage({ isDark, active, note, children })`
   rendering the canvas, crop marks, readouts, the rail, the optional margin note, `Navbar`, children,
   a hatch band and the blueprint footer. Then move Home, Blog and Winter Arc onto it.
2. Add the route in `App.jsx` and pass `isDark` / `toggleTheme` (and `active` for the nav).
3. Open with an eyebrow + `h1` + one sentence + a meta list (icon + text rows), like Writing and Winter Arc.
4. Give it one margin annotation (2–3 lowercase words) and at least one numbered figure.

### A new section on an existing page
1. Hatch band → section header with the next number → rows divided by `border-b border-rule`.
2. Data as a `CONSTANT_ARRAY` at the top of the file. If editors will add to it over time, move it to
   `src/data/*.js` with a schema comment, like `src/data/writing.js`.
3. Derive every count and index from the data.
4. If it expands, use the record pattern: `aria-expanded`, details in place, chevron rotation.
5. Close with a `Fig. NN —` caption if the section is itself a figure.

### A new interactive figure
1. Hand-built SVG, `viewBox` sized for the 768px rail, `w-full h-auto`, `role="img"` + `aria-label`.
2. Geometry from constants plus small pure helpers, memoised.
3. Colours from `var(--color-*)` only, so dark mode is automatic.
4. Active state is cobalt, and the selection is click/keyboard reachable.
5. Check it at 390px. If labels drop below ~10px, provide a mobile layout or HTML labels.

### Checklist before shipping UI
- [ ] Only token colours. Nothing hard-coded, so it looks right in `.theme-dark`
- [ ] `font-mono` on the section root; Plex Sans and Caveat only in their roles
- [ ] Hairlines, not shadows; radii 3/4/5px; outline buttons
- [ ] Numbering, captions and counts follow §10
- [ ] `useReducedMotion` fallback on every animation
- [ ] Keyboard reachable, visible cobalt focus ring (page root has `blueprint`), `aria-*` on toggles, `sr-only` for visual-only data (and contained, see gap 1)
- [ ] No horizontal scroll at 390px; wide things scroll inside `overflow-x-auto`
- [ ] Margin decoration is `xl`-only and `aria-hidden`
- [ ] `npm run build` and `npm run lint` pass
