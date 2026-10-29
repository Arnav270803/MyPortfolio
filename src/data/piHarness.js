import {
  Puzzle,
  BookOpen,
  SquareTerminal,
  GitBranch,
  Cpu,
  AppWindow,
  Server,
  Bot,
  Wrench,
  FileText,
  UserCheck,
  Fingerprint,
  Play,
  Ban,
  Monitor,
  NotebookPen,
} from 'lucide-react';
import GATE_CODE from './piHarness/gate.txt?raw';
import SERVER_CODE from './piHarness/server.txt?raw';
import GUARD_CODE from './piHarness/guard.txt?raw';
import LAUNCH_CODE from './piHarness/launch.txt?raw';

/* Let the agent drive. Keep the keys. — everything in the post that is a list,
   a table or a figure. The prose lives in Component/PiHarness.jsx.
   Backticks inside these strings render as inline code. */

export const CODE = { gate: GATE_CODE, server: SERVER_CODE, guard: GUARD_CODE, launch: LAUNCH_CODE };

/* the reading ruler names the part you are in; order is document order */
export const MARKS = [
  ['s00', '00 / OPENING'],
  ['s01', '01 / MEET PI'],
  ['s02', '02 / THE TROUBLE WITH HELPFUL'],
  ['s03', '03 / THE SHAPE OF THE THING'],
  ['s04', '04 / SIX PATTERNS'],
  ['p1', '04 / 01 · SWAP THE SHELL FOR VERBS'],
  ['p2', '04 / 02 · ONLY A GATE CAN ACT'],
  ['p3', '04 / 03 · APPROVE EXACTLY WHAT YOU SAW'],
  ['p4', '04 / 04 · MAKE EVERY WRITE UNDOABLE'],
  ['p5', '04 / 05 · KEEP SECRETS OUT'],
  ['p6', '04 / 06 · DETACHED JOBS'],
  ['s05', '05 / CHECKS BEAT PROMPTS'],
  ['s06', '06 / THINGS THAT BIT US'],
  ['s07', '07 / BUILD YOUR OWN'],
  ['s08', '08 / KEEP THE KEYS'],
];

export const CONTENTS = [
  { id: 's01', n: '01', label: 'Meet Pi' },
  { id: 's02', n: '02', label: 'The trouble with helpful' },
  { id: 's03', n: '03', label: 'The shape of the thing' },
  {
    id: 's04',
    n: '04',
    label: 'Six patterns',
    children: [
      { id: 'p1', n: '01', label: 'Shell → verbs' },
      { id: 'p2', n: '02', label: 'Only a gate can act' },
      { id: 'p3', n: '03', label: 'Approve what you saw' },
      { id: 'p4', n: '04', label: 'Undoable writes' },
      { id: 'p5', n: '05', label: 'Secrets out' },
      { id: 'p6', n: '06', label: 'Detached jobs' },
    ],
  },
  { id: 's05', n: '05', label: 'Checks beat prompts' },
  { id: 's06', n: '06', label: 'Things that bit us' },
  { id: 's07', n: '07', label: 'Build your own' },
  { id: 's08', n: '08', label: 'Keep the keys' },
];

export const PARTS = [
  { Icon: Puzzle, name: 'Extensions', text: 'JavaScript or TypeScript modules that register tools, hook into lifecycle events, add commands and talk to the user.' },
  { Icon: BookOpen, name: 'Skills', text: 'Folders with a `SKILL.md`. Pi puts only each skill’s name and description in the prompt, and reads the full instructions when a task calls for them. Your context stays clean until it’s needed.' },
  { Icon: SquareTerminal, name: 'Four ways to run it', text: 'An interactive terminal UI, print or JSON mode for scripts, RPC over stdin and stdout, and a TypeScript SDK.' },
  { Icon: GitBranch, name: 'Sessions as plain files', text: 'Every conversation is a JSONL file shaped like a tree, so you can branch, replay and inspect it with nothing fancier than a text editor.' },
  { Icon: Cpu, name: 'Your model, your choice', text: '`/login` connects a subscription or an API key.' },
];

/* Fig. 02. k is the cost class: free, live (writes to live data), paid, finish */
export const PHASES = [
  {
    name: 'PREPARE',
    cost: 'Free',
    k: 'free',
    stages: [
      ['V0', 'Brief', 'Pi writes the brief: chapter, paid-call limits, settings'],
      ['V1', 'Upstream', 'Every file copied, fingerprinted and cross-checked'],
      ['V2', 'Intake', 'Pi groups the lines into clips, with a picture for each'],
    ],
  },
  {
    name: 'REGISTER & PLAN',
    cost: '$0, but writes to live data',
    k: 'live',
    stages: [
      ['V3', 'Register', 'The inputs are written to live, with an undo'],
      ['V4', 'Plan', 'A dry run, then a planning pass with no paid calls'],
      ['V5', 'Prompts', 'Pi rewrites prompts and camera moves'],
    ],
  },
  {
    name: 'RENDER',
    cost: 'Paid, on rented GPUs',
    k: 'paid',
    stages: [
      ['V6', 'Pilot clip', 'One paid test clip; Pi reviews its frames'],
      ['V7', 'Render and review', 'Every clip renders on rented GPUs; Pi reviews each one'],
      ['V8', 'Compose and verify', 'Clips joined, timing checked, redos re-rendered'],
    ],
  },
  {
    name: 'FINISH',
    cost: 'Local, then delivered',
    k: 'finish',
    stages: [
      ['V9', 'Final film', 'Audio’s master laid under the picture'],
      ['V10', 'Sound post', 'The official sound post, signed by the approver'],
      ['V11', 'Delivery', 'The run and the film uploaded to the harness store', 'live'],
    ],
  },
];

/* keys: none, never, after (approval) */
export const PIECES = [
  { Icon: AppWindow, name: 'A web app', text: 'where you chat with Pi, and where every approval appears as a review panel.', keys: 'none' },
  { Icon: Server, name: 'A small Node server', text: 'that starts one Pi per conversation in RPC mode and relays messages both ways.', keys: 'none' },
  { Icon: Bot, name: 'Pi', text: 'locked down by its launch line.', keys: 'never' },
  { Icon: Puzzle, name: 'One extension', text: 'holding our domain tools, the gates, and a guard that inspects every tool call before it runs.', keys: 'none' },
  { Icon: Wrench, name: 'Helpers', text: 'that do the real work. They’re the only code that ever touches a credential, and only after an approval.', keys: 'after' },
];

export const FLAGS = [
  { lead: '`--tools` is an allow-list, and it replaces the defaults.', text: 'A tool that isn’t named doesn’t exist as far as the model is concerned. Patterns work, so `video_*` covers every domain tool at once. Notice who isn’t invited: `bash`.', tools: true },
  { lead: '`--no-extensions`, then `--extension`.', text: 'Switch off every discovered, configured and built-in extension, then load exactly one. Explicit paths still load after a `--no-` flag, and that’s the whole trick.' },
  { lead: '`--no-skills`, then `--skill`.', text: 'The same move for skills.' },
  { lead: '`--no-mcp`.', text: 'No MCP servers, so no tools sneaking in through someone’s config.' },
  { lead: '`--no-context-files`.', text: 'Pi normally reads `AGENTS.md` and `CLAUDE.md` from the folder it runs in. Our run folders are full of files other people made, and I’d rather not take instructions from them.' },
  { lead: '`--no-prompt-templates --no-approve`.', text: 'No templates, and no project-local settings or resources from the run folder, however trustworthy they look.' },
];

export const ALLOWED_TOOLS = ['read', 'write', 'edit', 'ls', 'grep', 'find', 'video_*'];

export const PATTERNS = [
  { id: 'p1', title: 'Swap the shell for verbs', tag: 'TOOLS' },
  { id: 'p2', title: 'The agent can ask.', accent: 'Only a gate can act.', tag: 'GATES' },
  { id: 'p3', title: 'Approve exactly what you saw', tag: 'FINGERPRINTS' },
  { id: 'p4', title: 'Make every write undoable', tag: 'UNDO' },
  { id: 'p5', title: 'Keep secrets out of the agent’s world', tag: 'SECRETS' },
  { id: 'p6', title: 'Run long work as detached jobs', tag: 'JOBS' },
];

/* Fig. 05. tone: cobalt for the machine's steps, key for the person's */
export const GATE = [
  { name: 'DESCRIBE', Icon: FileText, tone: 'cobalt', text: 'Write the exact request to a file: the command, the inputs, the rows, the undo, the spending cap. Hash all of it into one fingerprint.' },
  { name: 'ASK', Icon: UserCheck, tone: 'key', text: 'Show it to a person and wait for one of three answers: approve, request changes (with a note), or pause.' },
  { name: 'RE-CHECK', Icon: Fingerprint, tone: 'cobalt', text: 'Describe it again and compare fingerprints. If anything moved during the review, the decision doesn’t count.' },
  { name: 'ACT', Icon: Play, tone: 'ink', text: 'Only now, and only through a helper. Once an approved action starts, it’s never cancelled half-way.' },
];

export const DETAILS = [
  { Icon: Ban, lead: 'Anything that isn’t a clear yes is a no.', text: 'A closed tab, a cancelled dialog and a timeout all land as “not approved”. RPC dialogs can carry a timeout, after which Pi resolves them with `undefined`, so make sure `undefined` means pause and never go.', key: true },
  { Icon: Monitor, lead: '`ctx.hasUI` tells you whether anyone can answer at all.', text: 'In print or JSON mode nobody can, so our gates stop and say so instead of guessing.' },
  { Icon: NotebookPen, lead: '`pi.appendEntry()` writes to the session file without adding to the model’s context.', text: 'You get an audit trail of every decision, in the same file as the conversation, at no token cost.' },
];

/* Fig. 07, an illustration: the hashes are made up */
export const CHAIN = [
  ['V1', 'Upstream', 'a91f'],
  ['V2', 'Intake', '3c07'],
  ['V3', 'Register', 'e5d2'],
  ['V4', 'Plan', '7b18'],
  ['V5', 'Prompts', '0f6a'],
];

export const HAZARDS = [
  { lead: 'JSONL has two traps.', text: 'Pi’s RPC docs warn that Node’s `readline` also splits on `U+2028` and `U+2029`, which are perfectly legal inside JSON strings. Split on `\\n` and nothing else. The second trap we found ourselves: sessions with images get big, and a reader that re-scans its whole buffer on every chunk goes quadratic. Only scan the bytes that just arrived.' },
  { lead: 'Resolve links before you check paths.', text: 'A symlink, or a Windows junction, inside an allowed folder can point anywhere. Our guard resolves the real path first and checks both versions.' },
  { lead: 'Globs can climb.', text: 'A `find` pattern with `..`, a `~` or an absolute path walks right out of the folder you meant. Refuse those outright.' },
  { lead: 'Hard-coded names multiply.', text: 'The moment your code names your test book, it breaks on the next one. Paths, names, formats and limits belong in data files. Our web app doesn’t know a single file path; it asks the server.' },
];

export const STEPS = [
  { lead: 'List the verbs.', text: 'Write down every action an operator takes. Each one becomes a tool. Mark the ones that cost money or touch shared data; those become gates.' },
  { lead: 'Lock the launch line.', text: 'Use `--tools` as an allow-list without `bash`, add `--no-extensions --no-skills --no-mcp --no-context-files --no-prompt-templates --no-approve`, then load back only your own files.' },
  { lead: 'Scrub the environment.', text: 'Pass an allow-list of variables, and nothing named like a key.' },
  { lead: 'Write the guard before the tools.', text: 'One `tool_call` handler that checks every path, resolves links and blocks secret folders. When in doubt, let it throw; Pi will block the call.' },
  { lead: 'Build one gate and reuse it everywhere.', text: 'Describe, ask with `ctx.ui.select`, describe again, compare hashes, record, act.' },
  { lead: 'Put Pi behind a small server over RPC,', text: 'one Pi per conversation, and draw its dialog requests as review panels in your own UI.' },
  { lead: 'Keep state in files,', text: 'and run anything long as a detached job.' },
  { lead: 'Turn every mistake into a check', text: 'the agent will meet in a tool result.' },
];
