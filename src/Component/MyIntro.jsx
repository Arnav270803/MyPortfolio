import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'motion/react';
import {
  Volume2,
  VolumeX,
  Briefcase,
  Code2,
  TerminalSquare,
  MapPin,
  Clock,
  Mail,
  Link2,
  Github,
  Linkedin,
  FileText,
} from 'lucide-react';
import SystemStack from './SystemStack';
import ActivityGraph from './ActivityGraph';

const ROLES = [
  { Icon: Briefcase, label: 'Founding Agentic Engineer — Boock.ai' },
  { Icon: Code2, label: 'Founding Engineer — ProcesG' },
  { Icon: TerminalSquare, label: 'Founder — Aevora' },
  { Icon: MapPin, label: 'Delhi, India' },
];

const CONTACT = [
  { Icon: Clock, label: 'Local time — IST' },
  { Icon: Mail, label: 'arnavsharma2708@gmail.com', href: 'mailto:arnavsharma2708@gmail.com' },
  { Icon: Link2, label: 'heyarnav.com', href: 'https://heyarnav.com' },
];

const XMark = (props) => (
  <svg viewBox="0 0 24 24" {...props} fill="currentColor" stroke="none">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIALS = [
  { Icon: XMark, href: 'https://x.com/Bokinsha', label: 'X' },
  { Icon: Github, href: 'https://github.com/Arnav270803', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/arnav-sharma2708/', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:arnavsharma2708@gmail.com', label: 'Email' },
];

const Plus = ({ className }) => (
  <span aria-hidden="true" className={`hidden sm:block absolute w-3 h-3 text-rule ${className}`}>
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M6 0v12M0 6h12" />
    </svg>
  </span>
);

const TAGLINES = [
  'Full-Stack Engineer · Product Builder',
  'Agentic AI Engineer',
  'Chess Player',
  'Ultra Running Enthusiast',
  'Building Product by Heart',
];

/* mono type sets on a fixed grid, so the line reads best printed a glyph at a
   time — like the system writing itself out. 240ms matches the motion tokens. */
const RotatingTagline = () => {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIndex((n) => (n + 1) % TAGLINES.length), 3000);
    return () => clearInterval(id);
  }, []);

  const text = TAGLINES[index];

  return (
    <p className="mt-1 h-[19px] flex items-center text-[13px] text-graphite" aria-live="polite">
      <span className="sr-only">{text}</span>

      <AnimatePresence mode="wait">
        <Motion.span
          key={index}
          aria-hidden="true"
          className="inline-flex"
          initial="hidden"
          animate="shown"
          exit="done"
          variants={{
            shown: { transition: { staggerChildren: reduced ? 0 : 0.016 } },
            done: {
              opacity: 0,
              y: reduced ? 0 : -4,
              filter: reduced ? 'blur(0px)' : 'blur(2px)',
              transition: { duration: 0.2, ease: 'easeIn' },
            },
          }}
        >
          {text.split('').map((char, i) => (
            <Motion.span
              key={i}
              className="whitespace-pre"
              variants={{
                hidden: reduced
                  ? { opacity: 0 }
                  : { opacity: 0, y: 5, filter: 'blur(4px)' },
                shown: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.24, ease: [0.22, 0.61, 0.36, 1] },
                },
              }}
            >
              {char}
            </Motion.span>
          ))}
        </Motion.span>
      </AnimatePresence>

      {/* terminal caret — anchors the line as the text length changes */}
      <Motion.span
        aria-hidden="true"
        className="ml-1.5 w-[2px] h-[13px] shrink-0 bg-cobalt"
        animate={reduced ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'linear', times: [0, 0.45, 0.55, 1] }}
      />
    </p>
  );
};

const IconCell = (props) => {
  const Icon = props.icon;
  return (
    <span className="w-[24px] h-[24px] shrink-0 border border-rule rounded-[4px] flex items-center justify-center text-ink">
      <Icon className="w-[13px] h-[13px]" strokeWidth={1.6} />
    </span>
  );
};

const greeting = () => {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
};

const MyIntro = ({ ambientOn, toggleAmbient }) => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();

  return (
    <section className="font-mono">
      {/* Fig. 01 — the exploded system, with the identity block resting on it */}
      <div className="px-5 sm:px-6 pt-4 relative">
        <Plus className="left-4 top-3" />
        <Plus className="right-4 top-3" />
        <Plus className="left-4 bottom-[132px]" />
        <SystemStack />

        <div className="flex items-end gap-4 sm:gap-5 -mt-8 sm:-mt-14 pb-5 relative">
          <img
            src="/cropped_circle_image.png"
            width="110"
            height="110"
            alt="Arnav Sharma"
            className="w-[84px] h-[84px] sm:w-[110px] sm:h-[110px] rounded-full border border-rule object-cover bg-paper shrink-0"
          />
          <div className="min-w-0 pb-1">
            <div className="flex items-center gap-3">
              <h1 className="text-[26px] sm:text-[32px] leading-[36px] text-ink truncate">Arnav Sharma</h1>
              <Motion.button
                onClick={toggleAmbient}
                aria-pressed={ambientOn}
                title={ambientOn ? 'Mute the lofi' : 'Play the lofi'}
                aria-label={ambientOn ? 'Mute the background lofi' : 'Play the background lofi'}
                className={`cursor-pointer hover:opacity-100 transition-colors shrink-0 ${ambientOn ? 'text-ink' : 'text-graphite'}`}
                animate={ambientOn && !reduced ? { opacity: [1, 0.55, 1] } : { opacity: 1 }}
                transition={ambientOn && !reduced ? { duration: 2.8, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.2 }}
              >
                {ambientOn ? (
                  <Volume2 className="w-[17px] h-[17px]" strokeWidth={1.7} />
                ) : (
                  <VolumeX className="w-[17px] h-[17px]" strokeWidth={1.7} />
                )}
              </Motion.button>
              <span className="w-[11px] h-[11px] rounded-full bg-live shrink-0" title="Available for work" />
            </div>
            <RotatingTagline />
          </div>
        </div>
      </div>

      <div className="hatch h-2.5 border-y border-rule" />

      {/* roles + contact ledger */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-rule">
        <div className="px-5 sm:px-6 py-5 space-y-2 md:border-r md:border-dashed md:border-rule">
          {ROLES.map((row) => (
            <div key={row.label} className="flex items-center gap-2.5 text-[12.5px] text-ink">
              <IconCell icon={row.Icon} />
              <span className="truncate">{row.label}</span>
            </div>
          ))}
        </div>
        <div className="px-5 sm:px-6 py-5 space-y-2 border-t md:border-t-0 border-rule">
          {CONTACT.map((row) => (
            <div key={row.label} className="flex items-center gap-2.5 text-[12.5px] text-ink">
              <IconCell icon={row.Icon} />
              {row.href ? (
                <a href={row.href} className="truncate hover:underline underline-offset-4">
                  {row.label}
                </a>
              ) : (
                <span className="truncate">{row.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 16 / social buttons */}
      <div className="border-b border-rule py-4 flex items-center justify-center gap-3">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-9 h-9 border border-rule rounded-[5px] flex items-center justify-center text-ink hover:border-ink transition-colors"
          >
            <s.Icon
              className="w-[17px] h-[17px]"
              strokeWidth={s.label === 'GitHub' ? 0 : 1.7}
              fill={s.label === 'GitHub' ? 'currentColor' : 'none'}
            />
          </a>
        ))}
        <button
          onClick={() => navigate('/resume')}
          aria-label="Resume"
          className="w-9 h-9 border border-rule rounded-[5px] flex items-center justify-center text-ink hover:border-ink transition-colors cursor-pointer"
        >
          <FileText className="w-[17px] h-[17px]" strokeWidth={1.7} />
        </button>
      </div>

      <ActivityGraph />

      <div className="hatch h-2.5 border-y border-rule" />

      <div className="px-5 sm:px-6 py-5">
        <h2 className="font-hand text-[24px] leading-none text-ink">{greeting()}</h2>
        <ul className="mt-3 space-y-1.5 text-[13px] text-ink">
          {[
            'I build full-stack products and AI agents.',
            'I turn complex data into clear workflows.',
            'I care about small details and reliable systems.',
          ].map((line) => (
            <li key={line} className="flex gap-2.5">
              <span className="text-graphite">•</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MyIntro;
