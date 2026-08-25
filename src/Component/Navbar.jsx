import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Github, SunMedium, Moon } from 'lucide-react';
import toggleSound from '../assets/context/select-button-ui-395763.mp3';

const NAV = [
  { label: 'Work', section: 'current-builds' },
  { label: 'Blog', route: '/bblog' },
  { label: 'Experience', section: 'experience-section' },
  { label: 'Projects', section: 'projects-section' },
];

const Navbar = ({ isDark, toggleTheme, active }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const audioRef = useRef(new Audio(toggleSound));

  useEffect(() => {
    audioRef.current.volume = 0.5;
  }, []);

  const handleSectionNavigation = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleToggleTheme = () => {
    audioRef.current.play();
    toggleTheme();
  };

  return (
    <header className={`font-mono h-16 border-b border-rule flex items-center justify-between px-4 sm:px-6 ${isDark ? 'theme-dark' : ''}`}>
      <a
        href="/"
        className="font-grotesk font-bold text-ink text-[22px] sm:text-[26px] leading-none tracking-[-0.03em] shrink-0 hover:opacity-70 transition-opacity"
      >
        AS
      </a>

      <nav className="flex items-center gap-3.5 sm:gap-9 text-[11.5px] sm:text-[13px] text-ink min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {NAV.map((item) => (
          <button
            key={item.label}
            onClick={() => (item.route ? navigate(item.route) : handleSectionNavigation(item.section))}
            className={`shrink-0 whitespace-nowrap cursor-pointer underline-offset-[6px] decoration-1 transition-colors ${
              active === item.label ? 'text-cobalt' : 'hover:underline'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
        <button
          aria-label="Search"
          onClick={() => navigate('/bblog')}
          className="text-ink cursor-pointer hover:opacity-70 transition-opacity"
        >
          <Search className="w-[18px] h-[18px]" strokeWidth={1.7} />
        </button>

        <div className="hidden sm:flex items-stretch h-[22px] border border-rule rounded-[3px] text-[11px] text-ink">
          <kbd className="px-1.5 flex items-center border-r border-rule font-mono">Ctrl</kbd>
          <kbd className="px-1.5 flex items-center font-mono">K</kbd>
        </div>

        <a
          href="https://github.com/Arnav270803"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-ink hover:opacity-70 transition-opacity"
        >
          <Github className="w-[19px] h-[19px]" fill="currentColor" strokeWidth={0} />
        </a>

        <button
          onClick={handleToggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="text-ink cursor-pointer hover:opacity-70 transition-opacity"
        >
          {isDark ? <Moon className="w-[19px] h-[19px]" strokeWidth={1.7} /> : <SunMedium className="w-[19px] h-[19px]" strokeWidth={1.7} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
