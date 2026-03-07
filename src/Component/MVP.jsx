import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Aevora Experience
const AevoraExperience = ({ isDark }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const BtDesign = `inline-block mr-1 mb-1 px-2 py-0.5 border border-dashed rounded-md cursor-pointer transition-all duration-300 font-semibold ${
    isDark
      ? 'bg-neutral-800 border-gray-600 text-gray-300 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:scale-[1.02]'
      : 'bg-white border-gray-400 text-gray-700 hover:border-gray-900 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-[1.02]'
  } active:scale-100`;

  return (
    <div className={`pb-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className={`flex items-start border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} justify-between mb-3`}>
        <div className="px-6">
          <div className={`text-xl font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Founding Engineer
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Aevora
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Founder / Builder
          </div>
        </div>
        <div className="flex items-center gap-4 pr-6">
          <div className={`text-sm transition-colors hover:text-green-500 animate-pulse text-green-500`}>
            Current
          </div>
        </div>
      </div>

      <div className={`mb-3 px-6 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Building Aevora — an AI-powered video ad generation platform for Indian D2C brands. Transforms a single product image into a ready-to-publish video ad in under 2 minutes.
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center gap-2 px-6 mb-2 text-sm font-medium transition-colors ${
          isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        {isExpanded ? (
          <>
            <ChevronUp className="w-4 h-4" />
            Hide Details
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4" />
            Show Details
          </>
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='py-2 px-6'>
          <div className='px-3'>
            <p className={`text-sm mb-1 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •<span className='pl-2'>Designed a mobile-first landing page with glassmorphism UI, waitlist email collection, and live signup counter</span>
            </p>
            <p className={`text-sm mb-1 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •<span className='pl-2'>Architecting a video pipeline that generates script, scenes, voiceover, music, and subtitles from a single product image</span>
            </p>
            <p className={`text-sm mb-4 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •<span className='pl-2'>Targeting Indian D2C brands with Hindi voiceovers, festival templates, and platform-ready exports for Instagram, YouTube, and Facebook</span>
            </p>
          </div>
        </div>
      </div>

      <div className={`text-xs px-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        <span className={BtDesign}>React</span>
        <span className={BtDesign}>TypeScript</span>
        <span className={BtDesign}>Vite</span>
        <span className={BtDesign}>Tailwind CSS</span>
        <span className={BtDesign}>Framer Motion</span>
        <span className={BtDesign}>Generative AI</span>
      </div>

      <div className={`border-b py-1 mb-4 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}></div>
    </div>
  );
};



// Main MVP Component
const MVP = ({ isDark }) => {
  return (
    <div className={`w-full ${isDark ? 'bg-neutral-900' : 'bg-zinc-50'}`}>
      <div className={`text-3xl px-6 underline border-b pb-3 underline-offset-4 font-medium mb-4 ${
        isDark ? 'text-white border-gray-800' : 'text-gray-900 border-neutral-200'
      }`}>
        MVP
      </div>
      <div className="space-y-4">
        <AevoraExperience isDark={isDark} />
      </div>
    </div>
  );
};

export default MVP;