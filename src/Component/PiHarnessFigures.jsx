import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  Images,
  AudioLines,
  Play,
  KeyRound,
  SquareTerminal,
  Braces,
  Copy,
  Check,
  X,
  Workflow,
  UserCheck,
  LockKeyhole,
  ChevronRight,
  FileCheck,
  Wrench,
  ListChecks,
  Film,
  ScanSearch,
  Clapperboard,
  Fingerprint,
  RefreshCw,
  Upload,
  Database,
  Undo2,
  Archive,
  Lock,
  Info,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react';
import {
  CODE,
  PARTS,
  PHASES,
  PIECES,
  FLAGS,
  ALLOWED_TOOLS,
  PATTERNS,
  GATE,
  DETAILS,
  CHAIN,
  HAZARDS,
  STEPS,
} from '../data/piHarness';

/* The figures, ledgers and code plates of "Let the agent drive. Keep the keys."
   They are drawn in code rather than pasted as pictures, so they follow the
   theme and reflow on a phone. */

const pad = (n) => String(n).padStart(2, '0');

/* backticks in the data strings become inline code */
export const Inline = ({ text }) =>
  text.split(/(`[^`]+`)/).map((part, i) =>
    part.startsWith('`') ? (
      <code key={i} className="ic">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    )
  );

const CORNERS = ['-left-[5px] -top-[5px]', '-right-[5px] -top-[5px]', '-left-[5px] -bottom-[5px]', '-right-[5px] -bottom-[5px]'];

export const CornerMarks = () =>
  CORNERS.map((pos) => (
    <span key={pos} className={`plus ${pos}`} aria-hidden="true">
      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M6 0v12M0 6h12" />
      </svg>
    </span>
  ));

/* a picture on the sheet: dashed frame, crop marks hanging off the corners */
export const Plate = ({ children }) => (
  <div className="relative border border-dashed border-rule p-3">
    <CornerMarks />
    {children}
  </div>
);

export const Caption = ({ children, className = 'mt-2.5' }) => (
  <figcaption className={`font-mono text-[11.5px] text-muted ${className}`}>{children}</figcaption>
);

/* ---------- code ---------- */

const KEYWORDS = new Set(['import', 'from', 'export', 'default', 'function', 'const', 'let', 'async', 'await', 'if', 'return', 'throw', 'new']);
const LITERALS = new Set(['undefined', 'null', 'true', 'false']);

/* just enough of a tokenizer for the post's three snippets: comments, strings,
   keywords and calls. Returns one array of [class, text] pairs per line. */
function tokenize(src) {
  const re = /(\/\/[^\n]*)|('(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\\n])*")|([A-Za-z_$][\w$]*)|(\d+)|([\s\S])/g;
  const lines = [[]];
  const push = (cls, text) =>
    text.split('\n').forEach((piece, i) => {
      if (i) lines.push([]);
      if (!piece) return;
      const line = lines[lines.length - 1];
      const last = line[line.length - 1];
      if (last && last[0] === cls) last[1] += piece;
      else line.push([cls, piece]);
    });
  let m;
  while ((m = re.exec(src))) {
    const [t, comment, string, word, number] = m;
    if (comment) push('t-com', comment);
    else if (string) push('t-str', string);
    else if (word) push(KEYWORDS.has(word) ? 't-kw' : LITERALS.has(word) ? 't-lit' : src[re.lastIndex] === '(' ? 't-fn' : '', word);
    else if (number) push('t-num', number);
    else push('', t);
  }
  return lines;
}

const PlateHead = (props) => {
  const { Icon, file, lang, text } = props;
  const [copied, setCopied] = useState(false);
  const copy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {}
    );
  };
  return (
    <div className="plate-head h-9 px-3.5 flex items-center justify-between font-mono text-[11px] tracking-[0.06em]">
      <span className="flex items-center gap-2 min-w-0 truncate">
        <Icon className="w-[14px] h-[14px] shrink-0" strokeWidth={1.5} />
        {file}
      </span>
      <span className="flex items-center gap-3.5 shrink-0">
        <span>{lang}</span>
        <button onClick={copy} className="flex items-center gap-1.5 text-plate-ink cursor-pointer hover:opacity-70 transition-opacity">
          {copied ? <Check className="w-[13px] h-[13px]" strokeWidth={2} /> : <Copy className="w-[13px] h-[13px]" strokeWidth={1.6} />}
          {copied ? 'COPIED' : 'COPY'}
        </button>
      </span>
    </div>
  );
};

export const CodePlate = ({ file, code, lang = 'JS' }) => {
  const lines = useMemo(() => tokenize(code.replace(/\n$/, '')), [code]);
  /* wrapped lines hang under their own code, not at the left edge */
  const indents = useMemo(() => code.split('\n').map((l) => l.match(/^ */)[0].length + 4), [code]);

  return (
    <div className="plate rounded-[5px] overflow-hidden">
      <PlateHead Icon={Braces} file={file} lang={lang} text={code} />
      <div className="plate-code">
        {lines.map((tokens, i) => (
          <div key={i} className="cl">
            <span className="ln">{i + 1}</span>
            <span className="lc" style={{ paddingLeft: `${indents[i]}ch`, textIndent: `-${indents[i]}ch` }}>
              {tokens.length
                ? tokens.map(([cls, t], j) => (
                    <span key={j} className={cls || undefined}>
                      {t}
                    </span>
                  ))
                : ' '}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- 01 / MEET PI ---------- */

export const PartsList = () => (
  <div className="px-5 sm:px-6 pt-6 pb-2">
    <div className="border border-rule rounded-[4px] font-mono">
      <div className="h-10 px-4 border-b border-rule flex items-center justify-between text-[11px] tracking-[0.08em]">
        <span className="text-ink">
          <span className="text-cobalt">PI</span>
          <span className="text-graphite"> / </span>PARTS LIST
        </span>
        <span className="text-muted">
          <span className="text-cobalt">{pad(PARTS.length)}</span> PARTS
        </span>
      </div>
      {PARTS.map((part, i) => {
        const { Icon, name, text } = part;
        return (
          <div key={name} className={`grid grid-cols-[48px_1fr] sm:grid-cols-[52px_206px_1fr] ${i ? 'border-t border-dashed border-rule' : ''}`}>
            <span className="flex justify-center pt-3.5">
              <span className="w-7 h-7 border border-ink rounded-[5px] flex items-center justify-center">
                <Icon className="w-[14px] h-[14px]" strokeWidth={1.6} />
              </span>
            </span>
            <span className="pt-[18px] sm:pt-[19px] pr-3 text-[13px] font-semibold text-ink">{name}</span>
            <span className="col-start-2 sm:col-start-auto pt-1 sm:pt-[15px] pb-4 pr-4 font-grotesk text-[14.5px] leading-[1.6] text-ink/85">
              <Inline text={text} />
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

/* ---------- 02 / THE TROUBLE WITH HELPFUL ---------- */

const RULES = [
  { Icon: Workflow, rule: 'Pi does the operator’s work.', text: 'Reading, checking, planning, drafting, fixing. All of it.', tag: 'THE AGENT DRIVES', tone: 'cobalt' },
  { Icon: UserCheck, rule: 'People approve anything that costs money or touches shared data.', text: 'And they approve that exact action, not a vague intention.', tag: 'A PERSON APPROVES', tone: 'key' },
  { Icon: LockKeyhole, rule: 'Secrets never enter Pi’s world.', text: 'Not in its environment, not in a file it can open, not in its context window.', tag: 'THE KEYS STAY HOME', tone: 'ink' },
];

export const Rules = () => (
  <div className="px-5 sm:px-6 pt-6">
    <div className="border border-rule rounded-[4px] grid grid-cols-1 md:grid-cols-3">
      {RULES.map((item, i) => {
        const { Icon, rule, text, tag, tone } = item;
        return (
          <div key={tag} className={`p-5 font-mono ${i ? 'border-t md:border-t-0 border-rule' : ''} ${i === 1 ? 'md:border-x' : ''}`}>
            <div className="flex items-center justify-between">
              <span
                className={`w-9 h-9 border rounded-[5px] flex items-center justify-center ${
                  tone === 'key' ? 'border-key text-key' : tone === 'cobalt' ? 'border-rule text-cobalt' : 'border-rule text-ink'
                }`}
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </span>
              <span className="text-[11px] tracking-[0.08em] text-muted">
                RULE <span className={tone === 'key' ? 'text-key' : 'text-cobalt'}>{pad(i + 1)}</span>
              </span>
            </div>
            <p className="mt-4 font-serif text-[19px] leading-[1.25] text-ink">{rule}</p>
            <p className="mt-2 font-grotesk text-[14px] leading-[1.6] text-ink/80">{text}</p>
            <p className={`mt-4 text-[10.5px] tracking-[0.1em] ${tone === 'key' ? 'text-key' : tone === 'cobalt' ? 'text-cobalt' : 'text-ink'}`}>{tag}</p>
          </div>
        );
      })}
    </div>
  </div>
);

/* ---------- 03 / THE SHAPE OF THE THING ---------- */

const INPUTS = [
  { Icon: BookOpen, name: 'Base', text: 'The adapted story: screenplay, lines and the shot plan', width: 'md:max-w-[190px]' },
  { Icon: Images, name: 'Image', text: 'One approved still for every Base shot', width: 'md:max-w-[170px]' },
  { Icon: AudioLines, name: 'Audio', text: 'Voices, music and masters, plus the timing Video follows', width: 'md:max-w-[200px]' },
];

/* phase | stage name | pill on the spine | what happens. The name column is
   sized so the spine lands on the centre line under the converging inputs. */
const PIPE_COLS = 'md:grid-cols-[150px_calc(50%_-_178px)_56px_1fr]';

const Pill = ({ code, k }) =>
  k === 'paid' ? (
    <span className="pill overflow-hidden" data-k="paid">
      <i className="hatch-ink" aria-hidden="true" />
      <b>{code}</b>
    </span>
  ) : (
    <span className="pill" data-k={k}>
      {code}
    </span>
  );

export const Pipeline = () => (
  <figure className="px-5 sm:px-6 pt-7 pb-2">
    <div className="relative border border-rule rounded-[4px] px-4 sm:px-6 pt-6 pb-5">
      <p className="font-mono text-[11px] tracking-[0.12em] text-muted">
        THE PIPELINE <span className="text-graphite">/</span> ONE CHAPTER
      </p>
      <p className="mt-3 font-serif font-medium text-[26px] sm:text-[32px] leading-[1.08] tracking-[-0.01em]">
        One chapter in.<br className="sm:hidden" /> <em className="italic font-normal text-key">A finished film out.</em>
      </p>
      <p className="mt-3 font-grotesk text-[14px] sm:text-[14.5px] leading-[1.6] text-ink/80 max-w-[560px]">
        <span className="text-ink font-medium">Pi</span> prepares and supervises. <span className="text-ink font-medium">The pipeline</span> makes
        the film. <span className="text-ink font-medium">A person approves</span> every step that spends money or writes to live data.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3">
        {INPUTS.map((input) => {
          const { Icon, name, text, width } = input;
          return (
            <div key={name} className="flex md:flex-col md:items-center gap-3 md:gap-0 md:text-center">
              <div className="flex items-center gap-2.5 shrink-0">
                <span className="w-9 h-9 border border-rule rounded-[5px] flex items-center justify-center bg-paper">
                  <Icon className="w-[17px] h-[17px]" strokeWidth={1.5} />
                </span>
                <span className="font-serif text-[19px] md:text-[20px]">{name}</span>
              </div>
              <p className={`md:mt-2 font-grotesk text-[12.5px] leading-[1.5] text-muted ${width}`}>{text}</p>
            </div>
          );
        })}
      </div>

      {/* the three inputs converge on the spine */}
      <div className="hidden md:block relative h-[44px] mt-3" aria-hidden="true">
        <span className="absolute top-[2px] h-[30px] border border-t-0 border-graphite rounded-b-[10px]" style={{ left: '16.667%', right: '16.667%' }} />
        <span className="absolute top-[2px] h-[30px] w-px bg-graphite" style={{ left: '50%' }} />
        {['16.667%', '50%', '83.333%'].map((x) => (
          <span key={x} className="absolute -top-[1px] w-[5px] h-[5px] rounded-full bg-graphite" style={{ left: `calc(${x} - 2px)` }} />
        ))}
        <span className="absolute top-[32px] w-[1.5px] h-[12px] bg-cobalt" style={{ left: 'calc(50% - 5px)' }} />
        <span
          className="absolute top-[32px] w-[1.5px] h-[12px]"
          style={{ left: 'calc(50% + 3.5px)', backgroundImage: 'repeating-linear-gradient(180deg, var(--color-key) 0 5px, transparent 5px 9px)' }}
        />
        <span className="absolute top-[26px] w-[12px] h-[12px] rounded-full border border-ink bg-paper z-[2]" style={{ left: 'calc(50% - 6px)' }} />
      </div>

      <div className="pipe mt-6 md:mt-0 pt-3">
        <div className="relative">
          <span className="pipe-spine left-[17px] md:left-[calc(50%_-_5px)]" aria-hidden="true" />
          {PHASES.map((p) => (
            <div key={p.name} className={`pipe-group grid grid-cols-1 ${PIPE_COLS} md:gap-y-2.5 items-center`}>
              <div className="pipe-phase md:col-start-1 md:row-start-1 md:row-span-3 self-stretch pl-[56px] md:pl-3 pb-1 md:pb-0 pt-1" data-k={p.k}>
                <p className="font-mono text-[10.5px] tracking-[0.14em] text-ink">{p.name}</p>
                <p className="mt-1 font-grotesk text-[12.5px] leading-[1.45] text-muted md:pr-3">{p.cost}</p>
              </div>
              {p.stages.map(([code, name, text, k]) => (
                <div key={code} className="stage grid grid-cols-[44px_1fr] md:contents gap-x-3 py-1.5 md:py-0">
                  <span className="col-start-2 row-start-1 md:col-start-auto md:row-start-auto md:text-right font-mono text-[13px] font-medium text-ink md:pr-1">
                    {name}
                  </span>
                  <span className="col-start-1 row-start-1 row-span-2 md:col-start-auto md:row-start-auto md:row-span-1 justify-self-center self-start md:self-center">
                    <Pill code={code} k={k || p.k} />
                  </span>
                  <span className="col-start-2 row-start-2 md:col-start-auto md:row-start-auto font-grotesk text-[13px] leading-[1.5] text-ink/80 md:pl-1">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* the film, with a stub of spine that stops at its centre */}
        <div className={`relative grid grid-cols-[44px_1fr] ${PIPE_COLS} items-start gap-x-3 md:gap-x-0 pt-7`}>
          <span className="pipe-spine left-[17px] md:left-[calc(50%_-_5px)]" style={{ bottom: 'auto', height: 50 }} aria-hidden="true" />
          <span className="hidden md:block" />
          <p className="hidden md:block text-right font-serif italic text-[21px] leading-[1.12] pr-5 pt-[1px]">
            A finished,
            <br />
            mixed film
          </p>
          <span className="justify-self-center relative z-[2] w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-full border-[1.5px] border-ink bg-paper flex items-center justify-center">
            <Play className="w-[18px] h-[18px] ml-[2px]" strokeWidth={1.6} />
          </span>
          <div className="md:pl-4 md:pt-[3px]">
            <p className="md:hidden font-serif italic text-[19px] leading-[1.2]">A finished, mixed film</p>
            <p className="font-grotesk text-[13px] leading-[1.5] text-ink/80">Stored with the whole run. Nothing is published.</p>
            <span className="mt-2 inline-flex items-center gap-2 px-2 py-[3px] border border-rule rounded-[3px] font-mono text-[10.5px] tracking-[0.08em] text-ink">
              <span className="w-[6px] h-[6px] rounded-full bg-live" />
              VERIFIED · UNPUBLISHED
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-dashed border-rule font-mono text-[10.5px] tracking-[0.06em] text-muted flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="flex items-center gap-2">
          <span className="w-5 h-[1.5px] bg-cobalt" />
          PI DRIVES EVERY STAGE
        </span>
        <span className="flex items-center gap-2">
          <span className="w-5 h-[1.5px]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, var(--color-key) 0 5px, transparent 5px 8px)' }} />
          A PERSON APPROVES EVERY STAGE
        </span>
        <span className="flex items-center gap-2">
          <span className="pill min-w-0 h-[14px] w-[20px] p-0" data-k="live" />
          WRITES LIVE DATA
        </span>
        <span className="flex items-center gap-2">
          <span className="pill min-w-0 h-[14px] w-[20px] p-0 overflow-hidden" data-k="paid">
            <i className="hatch-ink" aria-hidden="true" />
          </span>
          PAID
        </span>
      </div>
      <div className="mt-3 font-mono text-[11px] leading-[1.7] text-ink flex flex-wrap items-center gap-x-2">
        <span className="text-[10.5px] tracking-[0.12em] text-muted mr-2">UNDER THE HOOD</span>
        <span>Web app</span>
        <span className="text-graphite">→</span>
        <span>Node server</span>
        <span className="text-graphite">→</span>
        <span>Pi over RPC</span>
        <span className="text-graphite">→</span>
        <span>one extension</span>
        <span className="text-graphite">→</span>
        <span>helpers</span>
        <span className="text-graphite">→</span>
        <span className="text-muted">GPUs · database · storage</span>
      </div>
    </div>
    <Caption>Fig. 02 — One chapter in, a finished film out.</Caption>
  </figure>
);

const KEYS_CELL = {
  none: <span className="text-graphite">–</span>,
  never: <span className="text-[10.5px] tracking-[0.1em] text-ink">NEVER</span>,
  after: (
    <span className="flex items-center gap-1.5 text-[10.5px] tracking-[0.08em] text-key leading-[1.3]">
      <KeyRound className="w-[13px] h-[13px] shrink-0" strokeWidth={1.7} />
      AFTER
      <br className="hidden sm:block" /> APPROVAL
    </span>
  ),
};

export const Pieces = () => (
  <div className="px-5 sm:px-6 pt-6">
    <div className="border border-rule rounded-[4px] font-mono overflow-hidden">
      <div className="hidden sm:grid grid-cols-[52px_178px_1fr_112px] h-9 border-b border-rule text-[10.5px] tracking-[0.1em] text-muted">
        <span className="border-r border-rule flex items-center justify-center">#</span>
        <span className="border-r border-rule flex items-center px-4">PIECE</span>
        <span className="border-r border-rule flex items-center px-4">WHAT IT DOES</span>
        <span className="flex items-center justify-center">HOLDS KEYS</span>
      </div>
      {PIECES.map((piece, i) => {
        const { Icon, name, text, keys } = piece;
        return (
          <div key={name} className={`grid grid-cols-[44px_1fr] sm:grid-cols-[52px_178px_1fr_112px] ${i ? 'border-t border-rule' : ''}`}>
            <span className="sm:border-r border-rule flex justify-center sm:items-center pt-3.5 sm:pt-0 text-[12px] text-muted">{pad(i + 1)}</span>
            <span className="sm:border-r border-rule flex items-center gap-2.5 pt-3 sm:py-3 sm:px-4 text-[13px] font-semibold text-ink">
              <Icon className={`w-[16px] h-[16px] shrink-0 ${keys === 'after' ? 'text-key' : ''}`} strokeWidth={1.5} />
              {name}
            </span>
            <span className="col-start-2 sm:col-start-auto sm:border-r border-rule pt-1.5 sm:py-3 pr-4 sm:px-4 font-grotesk text-[14px] leading-[1.55] text-ink/85">{text}</span>
            <span className="col-start-2 sm:col-start-auto flex items-center gap-2.5 sm:justify-center pt-2 pb-3.5 sm:py-3 sm:px-2">
              <span className="sm:hidden text-[10px] tracking-[0.1em] text-muted">HOLDS KEYS</span>
              {KEYS_CELL[keys]}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

/* the post's launch line, with a numbered marker on each flag the list explains */
const LAUNCH_LINES = [
  <>
    <span className="t-fn">pi</span> <span className="t-flag">--mode</span> rpc <span className="t-dim">\</span>
  </>,
  <>
    {'   '}
    <span className="t-flag">--tools</span>
    <span className="mk">01</span> <span className="t-str">&apos;read,write,edit,ls,grep,find,video_*&apos;</span> <span className="t-dim">\</span>
  </>,
  <>
    {'   '}
    <span className="t-flag">--no-extensions</span>
    <span className="mk">02</span> <span className="t-flag">--extension</span> <span className="t-str">./video-extension.mjs</span> <span className="t-dim">\</span>
  </>,
  <>
    {'   '}
    <span className="t-flag">--no-skills</span>
    <span className="mk">03</span> <span className="t-flag">--skill</span> <span className="t-str">./skills</span> <span className="t-dim">\</span>
  </>,
  <>
    {'   '}
    <span className="t-flag">--no-mcp</span>
    <span className="mk">04</span> <span className="t-flag">--no-context-files</span>
    <span className="mk">05</span> <span className="t-flag">--no-prompt-templates --no-approve</span>
    <span className="mk">06</span> <span className="t-dim">\</span>
  </>,
  <>
    {'   '}
    <span className="t-flag">--append-system-prompt</span> <span className="t-str">./instructions.md</span>
  </>,
];

export const LaunchLine = () => (
  <figure className="px-5 sm:px-6 pt-6">
    <div className="plate rounded-t-[5px] overflow-hidden">
      <PlateHead Icon={SquareTerminal} file="start-pi.sh" lang="BASH" text={CODE.launch} />
      <div className="plate-code">
        {LAUNCH_LINES.map((line, i) => (
          <div key={i} className="cl">
            <span className="ln">{i + 1}</span>
            <span className="lc">{line}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="border border-t-0 border-rule rounded-b-[4px]">
      <div className="h-9 px-4 border-b border-rule flex items-center justify-between font-mono text-[10.5px] tracking-[0.1em]">
        <span className="text-ink">LINE BY LINE</span>
        <span className="text-muted">
          <span className="text-cobalt">{pad(FLAGS.length)}</span> FLAGS
        </span>
      </div>
      {FLAGS.map(({ lead, text, tools }, i) => (
        <div key={lead} className={`grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] ${i ? 'border-t border-dashed border-rule' : ''}`}>
          <span className="flex justify-center pt-[17px]">
            <span className="callout text-cobalt">{pad(i + 1)}</span>
          </span>
          <div className="py-4 pr-4 font-grotesk text-[14.5px] leading-[1.65] text-ink/85">
            <span className="font-semibold text-ink">
              <Inline text={lead} />
            </span>{' '}
            <Inline text={text} />
            {tools && (
              <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono">
                {ALLOWED_TOOLS.map((t) => (
                  <span key={t} className="px-2 py-[3px] border border-rule rounded-[4px] text-[11.5px] text-ink">
                    {t}
                  </span>
                ))}
                <span className="ml-1 flex items-center gap-1.5 px-2 py-[3px] border border-dashed border-key rounded-[4px] text-[11.5px] text-key">
                  <span className="line-through">bash</span>
                  <span className="text-[9.5px] tracking-[0.1em]">NOT INVITED</span>
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    <Caption>Fig. 03 — The launch line, flag by flag.</Caption>
  </figure>
);

export const EnvStrip = () => (
  <div className="px-5 sm:px-6 pt-6 pb-11">
    <div className="border border-rule rounded-[4px] font-mono flex flex-col sm:flex-row">
      <div className="sm:w-[150px] shrink-0 px-4 py-3 border-b sm:border-b-0 sm:border-r border-rule">
        <p className="text-[10.5px] tracking-[0.1em] text-muted">PI’S ENVIRONMENT</p>
        <p className="mt-1 text-[12px] text-ink">allow-list only</p>
      </div>
      <div className="flex-1 px-4 py-3 flex flex-wrap items-center gap-2 text-[12px]">
        {['PATH', 'TEMP'].map((v) => (
          <span key={v} className="flex items-center gap-1.5 px-2.5 py-1 border border-rule rounded-[4px]">
            <Check className="w-3 h-3 text-live" strokeWidth={2} />
            {v}
          </span>
        ))}
        <span className="px-2.5 py-1 border border-rule rounded-[4px] text-muted">+ the boring ones</span>
        <span className="w-px h-5 bg-rule mx-1" />
        {['*_KEY', '*_TOKEN', '*_PASSWORD'].map((v) => (
          <span key={v} className="flex items-center gap-1.5 px-2.5 py-1 border border-dashed border-graphite rounded-[4px] text-muted line-through decoration-graphite">
            <X className="w-3 h-3" strokeWidth={2} />
            {v}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* ---------- 04 / SIX PATTERNS ---------- */

export const PatternIndex = () => (
  <div className="border-y border-rule font-mono">
    {PATTERNS.map(({ id, title, accent, tag }, i) => (
      <a key={id} href={`#${id}`} className={`flex ${i ? 'border-t border-rule' : ''} hover:bg-ink/[0.03] transition-colors`}>
        <span className="w-[46px] sm:w-[52px] shrink-0 border-r border-rule flex items-center justify-center text-[12px] text-muted underline underline-offset-[3px]">
          {pad(i + 1)}
        </span>
        <span className="flex-1 min-w-0 h-11 px-4 sm:px-5 flex items-center justify-between gap-4">
          <span className="text-[13px] text-ink truncate">
            {title}
            {accent && ` ${accent}`}
          </span>
          <span className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:inline text-[10.5px] tracking-[0.1em] text-muted">{tag}</span>
            <ChevronRight className="w-4 h-4 text-graphite" strokeWidth={1.6} />
          </span>
        </span>
      </a>
    ))}
  </div>
);

const VERBS = [
  [FileCheck, 'verify a delivery'],
  [Wrench, 'build the inputs'],
  [ListChecks, 'check the plan'],
  [Film, 'fetch clips'],
  [ScanSearch, 'extract frames'],
  [Clapperboard, 'make a review copy'],
];

export const Verbs = () => (
  <figure className="px-5 sm:px-6 pt-6 font-mono">
    <div className="border border-rule rounded-[4px] grid grid-cols-1 sm:grid-cols-[200px_1fr]">
      <div className="p-4 border-b sm:border-b-0 sm:border-r border-rule relative">
        <p className="text-[10.5px] tracking-[0.1em] text-muted">BEFORE · 1 TOOL</p>
        <div className="mt-3 h-[96px] border border-dashed border-graphite rounded-[4px] flex flex-col items-center justify-center relative overflow-hidden">
          <span className="absolute inset-0 hatch opacity-70" />
          <span className="relative bg-paper px-2 text-[22px] text-ink line-through decoration-key decoration-2">bash</span>
          <span className="relative bg-paper px-2 mt-1 text-[10.5px] text-muted">anything you can do</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[10.5px] tracking-[0.1em] text-muted">AFTER · A FEW DOZEN NAMED VERBS</p>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[11.5px]">
          {VERBS.map((entry) => {
            const [Icon, verb] = entry;
            return (
              <span key={verb} className="h-[30px] px-2.5 border border-rule rounded-[4px] flex items-center gap-2 whitespace-nowrap">
                <Icon className="w-[13px] h-[13px] text-cobalt shrink-0" strokeWidth={1.6} />
                {verb}
              </span>
            );
          })}
        </div>
        <p className="mt-2.5 text-[10.5px] text-muted">+ more, each checking its own inputs</p>
      </div>
    </div>
    <Caption>Fig. 04 — One wide tool, swapped for many narrow verbs.</Caption>
  </figure>
);

const GATE_TONE = {
  cobalt: 'border border-cobalt text-cobalt',
  key: 'border-[1.5px] border-key text-key',
  ink: 'border border-ink text-ink',
};

export const Gate = () => (
  <figure className="px-5 sm:px-6 pt-6 font-mono">
    <div className="border border-rule rounded-[4px] px-4 sm:px-5 pt-6 pb-5">
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5">
        <span className="hidden md:block absolute top-[19px] left-[20px] right-[calc(25%_-_20px)] h-px bg-rule" aria-hidden="true" />
        <span className="md:hidden absolute top-[20px] bottom-[20px] left-[19px] w-px bg-rule" aria-hidden="true" />
        {GATE.map((step, i) => {
          const { name, Icon, tone, text } = step;
          return (
            <div key={name} className="relative flex md:block gap-4">
              <span className={`relative z-[1] w-10 h-10 shrink-0 rounded-full ${GATE_TONE[tone]} bg-paper flex items-center justify-center`}>
                <Icon className="w-[17px] h-[17px]" strokeWidth={1.5} />
              </span>
              <div className="md:mt-4 min-w-0">
                <p className="text-[10.5px] tracking-[0.1em]">
                  <span className={tone === 'key' ? 'text-key' : 'text-cobalt'}>{pad(i + 1)}</span>
                  <span className="text-graphite"> / </span>
                  <span className="text-ink">{name}</span>
                  {tone === 'key' && <span className="ml-2 text-key">· A PERSON</span>}
                </p>
                <p className="mt-2 font-grotesk text-[13.5px] leading-[1.55] text-ink/85">{text}</p>
                {tone === 'key' && (
                  <>
                    {/* the three answers, drawn as the menu ctx.ui.select() puts up */}
                    <div className="mt-3 border border-rule rounded-[4px] text-[11px] overflow-hidden">
                      <div className="px-2.5 py-[5px] bg-key/10 text-key flex items-center gap-1.5">
                        <span>›</span>Approve
                      </div>
                      <div className="px-2.5 py-[5px] border-t border-dashed border-rule text-ink pl-[22px]">Request changes</div>
                      <div className="px-2.5 py-[5px] border-t border-dashed border-rule text-ink pl-[22px]">Pause</div>
                    </div>
                    <p className="mt-1.5 text-[10px] text-muted">ctx.ui.select()</p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* the fingerprint, carried from 01 to 03 */}
      <div className="mt-6 pt-4 border-t border-dashed border-rule grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3 text-[11.5px]">
        <div className="flex items-center gap-2.5">
          <Fingerprint className="w-4 h-4 text-cobalt shrink-0" strokeWidth={1.5} />
          <span className="text-muted">AT 01</span>
          <span className="px-2 py-0.5 border border-rule rounded-[3px] text-ink">sha256 · 9f3c…a1e7</span>
        </div>
        <span
          className="hidden md:block w-[120px] h-px relative"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, var(--color-cobalt) 0 4px, transparent 4px 7px)' }}
        >
          <span className="absolute -right-[1px] -top-[3.5px] border-y-[4px] border-y-transparent border-l-[6px] border-l-cobalt" />
        </span>
        <div className="flex items-center gap-2.5 md:justify-end">
          <span className="text-muted">AT 03</span>
          <span className="px-2 py-0.5 border border-rule rounded-[3px] text-ink">sha256 · 9f3c…a1e7</span>
          <span className="flex items-center gap-1.5 text-live">
            <span className="w-[7px] h-[7px] rounded-full bg-live" />
            MATCH
          </span>
        </div>
      </div>
      <p className="mt-3 text-[11px] text-muted leading-[1.6]">
        If the two differ, the decision doesn’t count. After 04, <span className="text-ink">pi.appendEntry()</span> records it in the session file, at no
        token cost.
      </p>
    </div>
    <Caption>Fig. 05 — The agent can ask. Only a gate can act.</Caption>
  </figure>
);

export const Details = () => (
  <div className="px-5 sm:px-6 pt-5">
    <div className="border border-rule rounded-[4px]">
      {DETAILS.map((detail, i) => {
        const { Icon, lead, text, key } = detail;
        return (
          <div key={lead} className={`grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] ${i ? 'border-t border-dashed border-rule' : ''}`}>
            <span className="flex justify-center pt-4">
              <span className={`w-7 h-7 border rounded-[5px] flex items-center justify-center ${key ? 'border-key text-key' : 'border-ink'}`}>
                <Icon className="w-[14px] h-[14px]" strokeWidth={1.6} />
              </span>
            </span>
            <div className="py-4 pr-4 font-grotesk text-[14.5px] leading-[1.65] text-ink/85">
              <p className="font-semibold text-ink">
                <Inline text={lead} />
              </p>
              <p className="mt-1">
                <Inline text={text} />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export const Approvals = () => (
  <figure className="px-5 sm:px-6 pt-6 pb-11 font-mono">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-5 items-end">
      <Plate>
        <img
          src="/pi-approvals.jpg"
          width={1200}
          height={927}
          alt="A list of pipeline stages, each marked approved, with the time a person approved it."
          className="w-full h-auto block rounded-[2px]"
          loading="lazy"
        />
      </Plate>
      <div className="md:pb-3 text-[11.5px] leading-[1.6]">
        <p className="text-[10.5px] tracking-[0.1em] text-muted">READ IT AS</p>
        <div className="mt-2.5 space-y-2.5">
          <p className="flex items-start gap-2.5">
            <span className="mt-[5px] w-[7px] h-[7px] rounded-full bg-live shrink-0" />
            <span className="text-ink">Approved, with the minute a person said yes</span>
          </p>
          <p className="flex items-start gap-2.5">
            <span className="mt-[4px] w-[9px] h-[9px] rounded-full border border-dashed border-graphite shrink-0" />
            <span className="text-ink">Not started: still waiting for its gate</span>
          </p>
          <p className="flex items-start gap-2.5">
            <RefreshCw className="w-[12px] h-[12px] mt-[3px] text-muted shrink-0" strokeWidth={1.6} />
            <span className="text-ink">Approvals are re-checked against the current files</span>
          </p>
        </div>
      </div>
    </div>
    <Caption>Fig. 06 — Every stage waits for a person, and the time of each approval is kept.</Caption>
  </figure>
);

const ChainBox = ({ code, name, children, className = 'border-rule' }) => (
  <div className={`flex-1 min-w-0 border ${className} rounded-[4px] px-2.5 py-2 bg-paper`}>
    <p className="text-[10px] tracking-[0.08em] text-muted">{code}</p>
    <p className="text-[12px] text-ink truncate">{name}</p>
    <div className="mt-1.5 text-[10px] leading-[1.35]">{children}</div>
  </div>
);

const ChainRow = ({ label, sub, children }) => (
  <div className="flex items-stretch">
    <div className="w-[112px] shrink-0 pr-3 flex flex-col justify-center">
      <p className="text-[10px] tracking-[0.1em] text-muted">{label}</p>
      <p className="mt-0.5 text-[11.5px] text-ink leading-[1.35]">{sub}</p>
    </div>
    {children.map((child, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span className="w-5 shrink-0 flex items-center justify-center text-graphite text-[12px]">→</span>}
        {child}
      </React.Fragment>
    ))}
  </div>
);

const Approved = ({ hash }) => (
  <span className="flex items-center gap-1 text-live">
    <Check className="w-[11px] h-[11px]" strokeWidth={2} />
    <span className="text-ink">{hash}</span>
  </span>
);

export const Chain = () => (
  <figure className="px-5 sm:px-6 pt-6 font-mono">
    <div className="border border-rule rounded-[4px] overflow-x-auto">
      <div className="min-w-[640px] p-4 sm:p-5 space-y-4">
        <ChainRow label="STATE A" sub="All approved">
          {CHAIN.map(([code, name, hash]) => (
            <ChainBox key={code} code={code} name={name}>
              <Approved hash={hash} />
            </ChainBox>
          ))}
        </ChainRow>
        <ChainRow label="STATE B" sub="One input changes upstream">
          {CHAIN.map(([code, name, hash], i) =>
            i === 0 ? (
              <ChainBox key={code} code={code} name={name}>
                <Approved hash={hash} />
              </ChainBox>
            ) : i === 1 ? (
              <ChainBox key={code} code={code} name={name} className="border-cobalt">
                <span className="text-cobalt tracking-[0.06em]">INPUT CHANGED</span>
                <br />
                <span className="text-ink">{hash} → d24b</span>
              </ChainBox>
            ) : (
              <ChainBox key={code} code={code} name={name} className="border-dashed border-key">
                <span className="text-key tracking-[0.04em]">CHANGED SINCE APPROVAL</span>
                <br />
                <span className="text-muted line-through">{hash}</span>
              </ChainBox>
            )
          )}
        </ChainRow>
      </div>
    </div>
    <Caption>Fig. 07 — Change one input, and everything after it asks again.</Caption>
  </figure>
);

/* shows the shot grid once a picture is passed in, a marked placeholder until then */
export const ShotGrid = ({ src }) => (
  <figure className="px-5 sm:px-6 pt-6 pb-11 font-mono">
    <Plate>
      {src ? (
        <img src={src} alt="A grid of planned film shots, each on its approved still." className="w-full h-auto block rounded-[2px]" loading="lazy" />
      ) : (
        <div className="relative plate rounded-[2px] p-2.5">
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="relative aspect-video border border-plate-rule rounded-[2px] overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 56" aria-hidden="true">
                  <path d="M0 0L100 56M100 0L0 56" stroke="#2A3037" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
                </svg>
                <span className="absolute left-1.5 top-1 text-[9px] text-plate-muted">S{pad(i + 1)}</span>
                <span className="absolute right-1.5 top-1.5 w-[6px] h-[6px] rounded-full bg-live" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-3 py-2 bg-plate border border-dashed border-plate-muted rounded-[4px] text-[11px] tracking-[0.06em] text-plate-ink text-center leading-[1.6]">
              PLACEHOLDER
              <br />
              <span className="text-plate-muted">your 12_shot_grid.png</span>
            </span>
          </div>
        </div>
      )}
    </Plate>
    <Caption>Fig. 08 — The review desk: every planned shot, on its approved picture.</Caption>
  </figure>
);

const GUARANTEES = [
  [Upload, 'Uploads are create-only, so nothing gets overwritten.'],
  [Database, 'Database writes happen in one transaction.'],
  [Undo2, 'Every write is recorded with its undo.'],
  [Archive, 'Old outputs are retired, never deleted.'],
];

export const Guarantees = () => (
  <div className="px-5 sm:px-6 pt-6">
    <div className="border border-rule rounded-[4px] grid grid-cols-1 sm:grid-cols-2 font-mono">
      {GUARANTEES.map((entry, i) => {
        const [Icon, text] = entry;
        return (
          <div key={text} className={`p-4 flex items-start gap-3 ${i < 2 ? 'border-b' : i === 2 ? 'border-b sm:border-b-0' : ''} ${i % 2 === 0 ? 'sm:border-r' : ''} border-rule`}>
            <span className="w-7 h-7 shrink-0 border border-ink rounded-[5px] flex items-center justify-center">
              <Icon className="w-[14px] h-[14px]" strokeWidth={1.6} />
            </span>
            <p className="font-grotesk text-[14.5px] leading-[1.55] pt-0.5">{text}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export const RefusedPaths = () => (
  <div className="px-5 sm:px-6 pt-6">
    <div className="border border-rule rounded-[4px] font-mono flex flex-col sm:flex-row">
      <div className="sm:w-[150px] shrink-0 px-4 py-3 border-b sm:border-b-0 sm:border-r border-rule">
        <p className="text-[10.5px] tracking-[0.1em] text-muted">THE GUARD</p>
        <p className="mt-1 text-[12px] text-ink">refuses, always</p>
      </div>
      <div className="flex-1 px-4 py-3 flex flex-wrap items-center gap-2 text-[12px]">
        {['.env', '.ssh', '.aws', '.git', 'Pi’s settings + model login', 'signing keys'].map((p) => (
          <span key={p} className="flex items-center gap-1.5 px-2.5 py-1 border border-ink rounded-[4px]">
            <Lock className="w-3 h-3" strokeWidth={1.8} />
            {p}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const Caveat = () => (
  <div className="px-5 sm:px-6 pt-6 pb-11">
    <div className="border border-rule rounded-[4px] font-mono">
      <div className="h-9 px-4 border-b border-rule flex items-center gap-2.5 text-[10.5px] tracking-[0.1em] text-ink">
        <Info className="w-[14px] h-[14px] text-cobalt" strokeWidth={1.6} />
        ONE HONEST CAVEAT
      </div>
      <p className="px-4 pt-3.5 font-grotesk text-[14.5px] leading-[1.65] text-ink/90">
        A guard is a policy, not a wall. Pi’s own docs say running it inside a container or a virtual machine is usually the strongest practical option,
        and if your agent reads untrusted input at scale, do that too.
      </p>
      <div className="mt-3.5 grid grid-cols-2 border-t border-rule">
        <div className="px-4 py-3 border-r border-rule">
          <p className="text-[10.5px] tracking-[0.1em] text-muted">THE GUARD</p>
          <p className="mt-1 font-serif text-[17px]">
            decides what Pi <em className="italic">may</em> do.
          </p>
        </div>
        <div className="px-4 py-3">
          <p className="text-[10.5px] tracking-[0.1em] text-muted">A CONTAINER</p>
          <p className="mt-1 font-serif text-[17px]">
            decides what it <em className="italic">can</em>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const WAKE = ['A job ends, hours later', 'Status file and log, on disk', 'The server wakes Pi', 'Pi reads the folder, carries on'];

export const WakeUp = () => (
  <figure className="px-5 sm:px-6 pt-6 font-mono">
    <div className="border border-rule rounded-[4px] p-4 sm:p-5">
      <div className="grid grid-cols-2 md:grid-cols-[1fr_14px_1fr_14px_1fr_14px_1fr] gap-3 md:gap-x-1.5 text-[11.5px]">
        {WAKE.map((step, i) => (
          <React.Fragment key={step}>
            {i > 0 && <span className="hidden md:flex items-center justify-center text-graphite">→</span>}
            <div className={`border ${i === 2 ? 'border-cobalt' : 'border-rule'} rounded-[4px] px-3 py-2.5`}>
              <p className={`text-[10px] tracking-[0.1em] ${i === 2 ? 'text-cobalt' : 'text-muted'}`}>{pad(i + 1)}</p>
              <p className="mt-1 text-ink">{step}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="mt-4 plate rounded-[5px] px-4 py-3.5 flex items-start gap-3">
        <span className="mt-[1px] text-[10px] tracking-[0.1em] text-plate-muted shrink-0">SERVER → PI</span>
        <p className="text-[12.5px] leading-[1.7] text-plate-ink">
          [job finished] <span className="text-plate-muted">‹run›</span>: succeeded. Check the run status and continue.
        </p>
      </div>
    </div>
    <Caption>Fig. 09 — The whole wake-up call is one line.</Caption>
  </figure>
);

/* ---------- 05 / CHECKS BEAT PROMPTS ---------- */

export const Fixes = () => (
  <div className="px-5 sm:px-6 pt-6">
    <div className="border border-rule rounded-[4px] grid grid-cols-1 md:grid-cols-2 font-mono">
      <div className="p-4 sm:p-5 border-b md:border-b-0 md:border-r border-rule">
        <p className="flex items-center gap-2.5 text-[10.5px] tracking-[0.1em] text-ink">
          <ShieldCheck className="w-[15px] h-[15px] text-cobalt" strokeWidth={1.6} />
          FIX 01 · A CHECK
        </p>
        <p className="mt-3 font-grotesk text-[14.5px] leading-[1.6]">
          The tool that builds the inputs now refuses any shot set in a place the script doesn’t name for it, and says why.
        </p>
      </div>
      <div className="p-4 sm:p-5">
        <p className="flex items-center gap-2.5 text-[10.5px] tracking-[0.1em] text-ink">
          <BookOpen className="w-[15px] h-[15px] text-cobalt" strokeWidth={1.6} />
          FIX 02 · A SKILL
        </p>
        <p className="mt-3 font-grotesk text-[14.5px] leading-[1.6]">
          The skill for that stage asks Pi to decide each shot’s place from the shot notes and its picture, and to write each choice down where the
          reviewer will see it.
        </p>
      </div>
    </div>
  </div>
);

/* ---------- 06 / THINGS THAT BIT US ---------- */

export const HazardLog = () => (
  <div className="border-y border-rule font-mono">
    <div className="h-9 px-5 sm:px-6 border-b border-rule flex items-center justify-between text-[10.5px] tracking-[0.1em]">
      <span className="flex items-center gap-2 text-ink">
        <TriangleAlert className="w-[13px] h-[13px] text-key" strokeWidth={1.6} />
        HAZARD LOG
      </span>
      <span className="text-muted">
        <span className="text-cobalt">{pad(HAZARDS.length)}</span> ENTRIES
      </span>
    </div>
    {HAZARDS.map(({ lead, text }, i) => (
      <div key={lead} className={`flex ${i ? 'border-t border-rule' : ''}`}>
        <span className="w-[46px] sm:w-[52px] shrink-0 border-r border-rule flex justify-center pt-[18px] text-[12px] text-muted underline underline-offset-[3px]">
          {pad(i + 1)}
        </span>
        <div className="flex-1 min-w-0 px-4 sm:px-5 py-4">
          <p className="text-[13.5px] font-semibold text-ink">{lead}</p>
          <p className="mt-1.5 font-grotesk text-[14.5px] leading-[1.65] text-ink/85 max-w-[600px]">
            <Inline text={text} />
          </p>
        </div>
      </div>
    ))}
  </div>
);

/* ---------- 07 / BUILD YOUR OWN ---------- */

const PROCEDURE_KEY = 'pi-harness-steps';

const readTicks = () => {
  try {
    return JSON.parse(localStorage.getItem(PROCEDURE_KEY)) || [];
  } catch {
    return [];
  }
};

/* the reader's own checklist; ticks persist in this browser only */
export const Procedure = () => {
  const [ticks, setTicks] = useState(readTicks);

  const toggle = (i) =>
    setTicks((prev) => {
      const next = prev.includes(i) ? prev.filter((n) => n !== i) : prev.concat(i);
      try {
        localStorage.setItem(PROCEDURE_KEY, JSON.stringify(next));
      } catch {
        /* private mode: the ticks just won't persist */
      }
      return next;
    });

  return (
    <div className="px-5 sm:px-6 pt-6">
      <div className="border border-rule rounded-[4px] font-mono">
        <div className="h-10 px-4 border-b border-rule flex items-center justify-between text-[10.5px] tracking-[0.1em]">
          <span className="text-ink">PROCEDURE</span>
          <span className="text-muted">
            <span className="text-cobalt">{pad(STEPS.length)}</span> STEPS · TICK AS YOU GO
          </span>
        </div>
        {STEPS.map(({ lead, text }, i) => {
          const done = ticks.includes(i);
          return (
            <div key={lead} className={`flex items-start gap-3.5 px-4 py-3 ${i ? 'border-t border-dashed border-rule' : ''}`}>
              <button
                onClick={() => toggle(i)}
                role="checkbox"
                aria-checked={done}
                aria-label={`Step ${i + 1} done`}
                className={`w-[17px] h-[17px] shrink-0 rounded-[3px] mt-[4px] flex items-center justify-center cursor-pointer ${
                  done ? 'bg-live' : 'border-[1.5px] border-ink'
                }`}
              >
                {done && (
                  <svg viewBox="0 0 14 14" className="w-[11px] h-[11px]" fill="none" stroke="#fff" strokeWidth="2.4">
                    <path d="M2 7.5 L5.5 11 L12 3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <span className="w-[20px] shrink-0 pt-[5px] text-[11px] text-cobalt">{pad(i + 1)}</span>
              <p className="font-grotesk text-[14.5px] leading-[1.65] text-ink/85">
                <span className="font-semibold text-ink">{lead}</span> <Inline text={text} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
