import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import PiHarness from '../Component/PiHarness'

/* blueprint canvas registration mark */
const CropMark = ({ className }) => (
  <svg viewBox="0 0 24 24" className={`w-5 h-5 text-rule ${className}`} fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="12" r="6" />
    <path d="M12 0v24M0 12h24" />
  </svg>
);

const PiHarnessPage = ({ isDark, toggleTheme }) => {
  /* a long read opens at its top, unless the link points into it */
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`blueprint relative bg-paper text-ink min-h-screen transition-colors duration-300 ${isDark ? 'theme-dark' : ''}`}>

      {/* canvas margin — registration marks and coordinate readouts */}
      <div className="hidden xl:block font-mono absolute inset-0 pointer-events-none" aria-hidden="true">
        <CropMark className="absolute left-5 top-[22px]" />
        <CropMark className="absolute right-5 top-[22px]" />
        <CropMark className="absolute left-5 bottom-[22px]" />
        <CropMark className="absolute right-5 bottom-[22px]" />
        <div className="absolute left-[52px] top-[36px] text-[11px] text-graphite leading-[18px]">
          X: -576<br />Y: 032
        </div>
        <div className="absolute right-[52px] top-[36px] text-[11px] text-graphite leading-[18px] text-right">
          X: 1344<br />Y: 032
        </div>
        <div className="absolute left-[38px] right-[calc(50%+384px)] top-[32px] border-t border-dashed border-rule" />
        <div className="absolute right-[38px] left-[calc(50%+384px)] top-[32px] border-t border-dashed border-rule" />
      </div>

      <div className="relative mx-auto max-w-[768px] border-x border-rule min-h-screen">

        <Navbar isDark={isDark} toggleTheme={toggleTheme} active="Blog" />

        <PiHarness />

        <div className="hatch h-2.5 border-y border-rule" />

        <footer className="font-mono h-14 px-5 sm:px-6 flex items-center justify-between text-[12px]">
          <a href="https://heyarnav.com" className="text-ink hover:underline underline-offset-4">@heyarnav.com</a>
          <span className="hidden sm:block text-muted">REV. 2026 / DELHI</span>
          <span className="text-ink font-semibold">Built in React</span>
        </footer>

      </div>
    </div>
  )
}

export default PiHarnessPage
