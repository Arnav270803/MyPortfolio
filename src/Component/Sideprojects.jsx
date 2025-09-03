import React from 'react';

// R-Vision Project
const RVisionProject = ({ isDark }) => (
  <div className={`pb-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
    <div className="flex items-start justify-between mb-3">
      <div className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
        R-Vision
      </div>
      <div className="flex items-center gap-4">
        <div>
          <a
            href="https://github.com/Arnav270803/Rvision"
            className={`text-sm transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Code →
          </a>
        </div>
      </div>
    </div>
    <div className={`mb-3 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      AI Text to image generation place
    </div>
    <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
      vite / React / Tailwind CSS / Node.js / MongoDB / Express / motion.dev / lordicon / Clipdrop API / JWT
    </div>
  </div>
);

// WhisperFlix Project
const WhisperFlixProject = ({ isDark }) => (
  <div className={`pb-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
    <div className="flex items-start justify-between mb-3">
      <div className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
        WhisperFlix
      </div>
      
      <div className="flex items-center gap-4">
        <div className={`text-sm transition-colors hover:text-red-500 animate-pulse text-red-500 ${
          isDark ? '' : ''}`}>
            Ongoing
        </div>
        <div>
          <a
            href="https://whisper-flix.vercel.app/"
            className={`text-sm transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Live →
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Arnav270803/WhisperFlix"
            className={`text-sm transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Code →
          </a>
        </div>
      </div>
    </div>
    <div className={`mb-3 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      An underrated Binge-watching that genuinely shows you underrated old cinema
    </div>
    <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
      React / Tailwind CSS / motion.dev / lordicon
    </div>
  </div>
);

// Vynix Project
const VynixProject = ({ isDark }) => (
  <div className="pb-2">
    <div className="flex items-start justify-between mb-3">
      <div className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Vynix
      </div>
      <div className="flex items-center gap-4">
        <div className={`text-sm transition-colors hover:text-red-500 animate-pulse text-red-500 ${
              isDark ? '' : ''
            }`}>
            Ongoing
        </div>
        <div>
          <a
            href="https://vynix-one.vercel.app/"
            className={`text-sm transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Live →
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Arnav270803/Vynix"
            className={`text-sm transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Code →
          </a>
        </div>
      </div>
    </div>
    <div className={`mb-3 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      Text to video generator using manim and LLM's
    </div>
    <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
      React / Node.js / Express.js
    </div>
  </div>
);


const Teachers_ERP = ({ isDark }) => (
  <div className="pb-2">
    <div className="flex items-start justify-between mb-3">
      <div className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Teacher's ERP
      </div>
      <div className="flex items-center gap-4">
        <div className={`text-sm transition-colors hover:text-red-500 animate-pulse text-red-500 ${
              isDark ? '' : ''
            }`}>
            Ongoing
        </div>
        <div>
          <a
            href="https://teacher-erp-theta.vercel.app/"
            className={`text-sm transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Live →
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Arnav270803/Teacher-ERP"
            className={`text-sm transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Code →
          </a>
        </div>
      </div>
    </div>
    <div className={`mb-3 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      Better solution for teachers then regular ERP
    </div>
    <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
      React / Tailwind / Node.js / SQL / Shadcn / Prisma
    </div>
  </div>
);

// Main Component
const Sideprojects = ({ isDark }) => {

  return (
    <div className="w-full">
      <h2 className={`text-2xl underline underline-offset-4 font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Projects
      </h2>
      
      <div className="space-y-4">
        <RVisionProject isDark={isDark} />
        <WhisperFlixProject isDark={isDark} />
        <VynixProject isDark={isDark} />
        <Teachers_ERP isDark={isDark} />
      </div>
      <div className='pt-10 text-xs text-gray-400 flex justify-between items-center w-full'>
    <div>
      @my-portfolio
    </div>
    <div>
      Build in react
    </div>
      </div>
    </div>
  );
};

export default Sideprojects;