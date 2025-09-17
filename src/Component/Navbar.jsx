import React, { useRef, useEffect } from 'react';
import toggleSound from '../assets/context/select-button-ui-395763.mp3';

const Navbar = ({ isDark, toggleTheme }) => {
  // Create a ref for the audio instance to persist across renders
  const audioRef = useRef(new Audio(toggleSound));

  // Set up audio properties (e.g., volume) on component mount
  useEffect(() => {
    audioRef.current.volume = 0.5; // Set volume to 50% to avoid being too loud
  }, []);

  // Wrap toggleTheme to play sound on click
  const handleToggleTheme = () => {
    audioRef.current.play(); // Play the sound when the button is clicked
    toggleTheme(); // Call the original toggleTheme function
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      <div className={`border-b border-t ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
        <div className='flex justify-between items-center px-6 pt-2 w-full'>
          {/* Left side - Name with icon */}
          <div className='flex items-center'>
            <span>
              <lord-icon
                src="https://cdn.lordicon.com/jeuxydnh.json"
                trigger="hover"
                colors="primary:#b4b4b4,secondary:#08a88a"
              ></lord-icon>
            </span>
            <a href="/" rel="noopener noreferrer">
              <span
                className={`text-lg font-medium cursor-pointer transition-colors duration-200 ${
                  isDark ? 'text-white hover:text-gray-300' : 'text-zinc-900 hover:text-gray-600'
                }`}
                style={{fontFamily: 'Caveat, cursive'}}
              >
                Arnav
              </span>
            </a>
          </div>

          {/* Right side - Twitter and Theme toggle */}
          <div className='flex items-center '>
            {/* Twitter Icon */}
            <a 
              href="https://x.com/Bokinsha" 
              className="flex items-center justify-center w-9 h-9 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Twitter/X Profile"
            >
              {isDark ? (
                <lord-icon
                  src="https://cdn.lordicon.com/yizwahhw.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#08a88a"
                  style={{ width: '20px', height: '20px' }}
                ></lord-icon>
              ) : (
                <lord-icon
                  src="https://cdn.lordicon.com/yizwahhw.json"
                  trigger="hover"
                  colors="primary:#242424,secondary:#08a88a"
                  style={{ width: '20px', height: '20px' }}
                ></lord-icon>
              )}
            </a>

            

            {/* Theme Toggle Button */}
            <button
              onClick={handleToggleTheme}
              className={`flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer transition-colors ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;