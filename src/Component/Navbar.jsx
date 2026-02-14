import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import toggleSound from '../assets/context/select-button-ui-395763.mp3';

const Navbar = ({ isDark, toggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const audioRef = useRef(new Audio(toggleSound));

  useEffect(() => {
    audioRef.current.volume = 0.5;
  }, []);

  // Handle navigation to sections with smart scroll logic
  const handleSectionNavigation = (sectionId) => {
    if (location.pathname === '/') {
      // Already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // On different page, navigate to home with hash
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleToggleTheme = () => {
    audioRef.current.play();
    toggleTheme();
  };

  const iconColors = {
    dark: {
      twitter: "primary:#ffffff,secondary:#08a88a",
      linkedin: "primary:#b4b4b4,secondary:#08a88a",
      github: "primary:#ffffff,secondary:#08a88a"
    },
    light: {
      twitter: "primary:#242424,secondary:#08a88a",
      linkedin: "primary:#545454,secondary:#08a88a",
      github: "primary:#545454,secondary:#08a88a"
    }
  };

  const colors = isDark ? iconColors.dark : iconColors.light;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div className={`border-t ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
        <div className='flex justify-between items-center px-6 pt-2 w-full'>

          <div className='flex items-center'>
            <a href="/" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
              <lord-icon
                src="https://cdn.lordicon.com/jeuxydnh.json"
                trigger="hover"
                colors="primary:#b4b4b4,secondary:#08a88a">
              </lord-icon>
            </a>



            <span onClick={() => navigate('/bblog')}
              className='font-medium px-2 hover:underline cursor-pointer transition-colors duration-200'
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Blog
            </span>

            <span onClick={() => handleSectionNavigation('experience-section')}
              className='font-medium px-2 hover:underline cursor-pointer transition-colors duration-200'
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Experience
            </span>

            <span onClick={() => handleSectionNavigation('projects-section')}
              className='font-medium px-2 hover:underline cursor-pointer transition-colors duration-200'
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Projects
            </span>
          </div>

          <div className='flex items-center gap-1'>
            <a href="https://x.com/Bokinsha"
              className="flex items-center justify-center w-9 h-9 cursor-pointer hover:opacity-80 transition-opacity">
              <lord-icon
                src="https://cdn.lordicon.com/yizwahhw.json"
                trigger="hover"
                stroke="bold"
                colors={colors.twitter}
                style={{ width: '20px', height: '20px' }}>
              </lord-icon>
            </a>

            <a href="https://www.linkedin.com/in/arnav-sharma2708/"
              className="flex items-center justify-center w-9 h-9 cursor-pointer hover:opacity-80 transition-opacity">
              <lord-icon
                src="https://cdn.lordicon.com/qgebwute.json"
                trigger="hover"
                stroke="bold"
                colors={colors.linkedin}
                style={{ width: '20px', height: '20px' }}>
              </lord-icon>
            </a>

            <a href="https://github.com/Arnav270803"
              className="flex items-center justify-center w-9 h-9 cursor-pointer hover:opacity-80 transition-opacity">
              <lord-icon
                src="https://cdn.lordicon.com/jjxzcivr.json"
                trigger="hover"
                stroke="bold"
                colors={colors.github}
                style={{ width: '20px', height: '20px' }}>
              </lord-icon>
            </a>

            <button onClick={handleToggleTheme}
              className={`flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer transition-colors ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;