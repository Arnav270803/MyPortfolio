import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import Experience from '../Component/Experience';
import Sideprojects from '../Component/Sideprojects';
import TechStack from '../Component/TechStack';
import Footer from '../Component/Footer';
import MyIntro from '../Component/MyIntro';
import CurrentBuilds from '../Component/CurrentBuilds';
import { useLocation } from 'react-router-dom';

/* blueprint canvas registration mark */
const CropMark = ({ className }) => (
  <svg viewBox="0 0 24 24" className={`w-5 h-5 text-rule ${className}`} fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="12" r="6" />
    <path d="M12 0v24M0 12h24" />
  </svg>
);

const Homee = ({ isDark, toggleTheme, ambientOn, toggleAmbient }) => {
  const location = useLocation();

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

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

        {/* handwritten margin notes, keyed to the rail */}
        <div className="hidden xl:block font-hand text-cobalt" aria-hidden="true">
          <p className="absolute -left-[240px] top-[540px] text-[20px] leading-[24px] -rotate-[4deg]">say hello</p>
          <svg viewBox="0 0 90 30" className="absolute -left-[170px] top-[578px] w-[90px]" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M2 6c26 0 52 8 76 16" strokeLinecap="round" />
            <path d="M70 18l9 4-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="absolute -right-[220px] top-[186px] text-[20px] leading-[26px] rotate-[5deg]">
            open a layer<br />trace the system
          </p>
          <svg viewBox="0 0 60 40" className="absolute -right-[188px] top-[232px] w-[60px]" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M56 4C40 12 24 22 8 34" strokeLinecap="round" />
            <path d="M6 22l-2 14 13-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <MyIntro ambientOn={ambientOn} toggleAmbient={toggleAmbient} />

        <CurrentBuilds />

        <div id="experience-section">
          <Experience />
        </div>

        <div id="projects-section">
          <Sideprojects />
        </div>

        <TechStack />

        <div>
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default Homee
