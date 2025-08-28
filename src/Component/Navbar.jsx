import React from 'react';

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex items-center'>
        <a href="/" rel="noopener noreferrer">
          <span className={`text-lg font-medium cursor-pointer transition-colors duration-200 ${
            isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'
          }`}>
            Arnav Sharma
          </span>
        </a>
      </div>
      
      <div className='flex items-center gap-6'>
        <a href="https://www.linkedin.com/in/arnav-sharma2708/" target="_blank" rel="noopener noreferrer">
          <span className={`transition-colors text-sm cursor-pointer ${
            isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>
            LinkedIn
          </span>
        </a>
        
        <a href="https://x.com/Bokinsha" target="_blank" rel="noopener noreferrer">
          <span className={`transition-colors text-sm cursor-pointer ${
            isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>
            Twitter
          </span>
        </a>
        
        <a href="https://github.com/Arnav270803" target="_blank" rel="noopener noreferrer">
          <span className={`transition-colors text-sm cursor-pointer ${
            isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>
            GitHub
          </span>
        </a>
        
        <a href="mailto:arnvsharma2708@gmail.com" target="_blank" rel="noopener noreferrer">
          <span className={`transition-colors text-sm cursor-pointer ${
            isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>
            Contact
          </span>
        </a>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg cursor-pointer transition-colors ${
            isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;