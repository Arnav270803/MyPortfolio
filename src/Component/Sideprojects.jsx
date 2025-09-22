import React from 'react';
import { Sparkles, Layers, Paintbrush2, Lock } from 'lucide-react';

// R-Vision Project
const RVisionProject = ({ isDark }) => (
  <div className={`pb-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
    <div className={`flex items-start border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} justify-between mb-3`}>
      <div className="px-6">
        <div className={`text-xl font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>
          R-Vision
        </div>
        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          02.2025 - 04.2025
        </div>
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
    <div className={`mb-3 px-6 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      Text to image generator which generates beautiful images built using clipdrop API 
    </div>

    <div className='py-2 px-6'>
      <div className='px-3'>
        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            <Sparkles className={`w-4 h-4 inline mr-3 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} />
            AI-Powered Text-to-Image Generator
          </span>
        </p>

        <p className={`text-sm mb-1 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            <Layers className={`w-4 h-4 inline mr-3 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
            Built with MERN and Vite
          </span>
        </p>

        <p className={`text-sm mb-1 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            <Paintbrush2 className={`w-4 h-4 inline mr-3 ${isDark ? 'text-purple-400' : 'text-purple-500'}`} />
            Modern UI/UX with Tailwind & Motion
          </span>
        </p>

        <p className={`text-sm mb-4 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            <Lock className={`w-4 h-4 inline mr-3 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />
            Secure Auth using JWT & MongoDB
          </span>
        </p>
      </div>
    </div>
    
    <div className={`text-xs px-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
      vite / React / Tailwind CSS / Node.js / MongoDB / Express / motion.dev / lordicon / Clipdrop API / JWT
    </div>
    <div className={`border-b py-1 mb-4 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
    </div>
  </div>
);

// WhisperFlix Project
const WhisperFlixProject = ({ isDark }) => (
  <div className={`pb-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
    <div className={`flex items-start justify-between mb-3 border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
      <div className='px-6'>
        <div className={`text-lg font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>
          WhisperFlix
        </div>
        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          02.2025 - 04.2025
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className={`hover:underline text-sm transition-colors hover:text-red-500 animate-pulse text-red-500 ${
          isDark ? '' : ''}`}>
          Ongoing
        </div>
        <div>
          <a
            href="https://whisper-flix.vercel.app/"
            className={`hover:underline text-sm transition-colors ${
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
    <div className={`mb-3 px-6 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      An underrated binge-watching platform that genuinely shows you underrated old cinema
    </div>
    <div className='py-2 px-6'>
      <div className='px-3'>
        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            <Sparkles className={`w-4 h-4 inline mr-3 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} />
            Discover Hidden Movie Gems Instantly
          </span>
        </p>

        <p className={`text-sm mb-1 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            <Layers className={`w-4 h-4 inline mr-3 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
            Sleek UI/UX with Smooth Animations
          </span>
        </p>

        <p className={`text-sm mb-4 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            <Lock className={`w-4 h-4 inline mr-3 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />
            Powered by JWT Auth and MongoDB
          </span>
        </p>
      </div>
    </div>
    <div className={`text-xs px-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
      React / Tailwind CSS / motion.dev / lordicon / Express / Node.js / MongoDB / JWT / Vite
    </div>
    <div className={`border-b py-1 mb-4 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
    </div>
  </div>
);

// Vynix Project
const VynixProject = ({ isDark }) => (
  <div className={`pb-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
    <div className={`flex items-start justify-between mb-3 border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
      <div className='px-6'>
        <div className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Vynix
        </div>
        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          02.2025 - 04.2025
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className={`text-sm transition-colors hover:text-red-500 animate-pulse text-red-500 ${
          isDark ? '' : ''
        }`}>
          Ongoing
        </div>
        <div>
          <a
            href="https://vynix-wnyp.vercel.app/"
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
    <div className={`mb-3 px-6 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      Text to video generator using Manim and LLMs
    </div>

    <div className='py-2 px-6'>
      <div className='px-3'>
        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            AI-powered text-to-video generator for education.
          </span>
        </p>

        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            Converts study prompts into animated learning videos.
          </span>
        </p>

        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
           Uses LLM to generate Manim-based Python scripts.
          </span>
        </p>

        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            Automates video creation with FFmpeg integration.
          </span>
        </p>

        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            Designed for students and teachers’ learning needs.
          </span>
        </p>

        <p className={`text-sm mb-3 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
            Simplifies complex topics through visual explanations.
          </span>
        </p>
      </div>
    </div>

    <div className={`text-xs px-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
      React / Node.js / Express.js / MongoDB / Manim / Python / OpenAI
    </div>
    <div className={`border-b py-1 mb-4 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
    </div>
  </div>
);

// Teacher's ERP Project
const TeachersERP = ({ isDark }) => (
  <div className={`pb-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
    <div className={`flex items-start justify-between mb-3 border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
      <div className='px-6'>
        <div className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Teacher's ERP
        </div>
        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          02.2025 - 04.2025
        </div>
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
    <div className={`mb-3 px-6 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
ERP system with admin, teacher, and student interfaces.    </div>

    <div className='py-2 px-6'>
      <div className='px-3'>
        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
Admin has complete authority over all data.          </span>
        </p>

        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
Teachers can view and manage student information.          </span>
        </p>

        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
Students can securely access their personal records.          </span>
        </p>

        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
Built with React, Express, and MySQL database.          </span>
        </p>

        <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          •
          <span className='px-2'>
Streamlines data access and management for education.</span>
        </p>
      </div>
    </div>
    <div className={`text-xs px-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
      React / Tailwind / Node.js / SQL / Shadcn / Prisma
    </div>
  </div>
);

// Main Component
const Sideprojects = ({ isDark = false }) => {
  return (
    <div className={`w-full min-h-screen ${isDark ? 'bg-neutral-900 ' : 'bg-zinc-50'}`}>
      <div className={`text-3xl px-6 underline border-b pb-3 underline-offset-4 font-medium mb-4 ${isDark ? 'text-white border-gray-800' : 'text-gray-900 border-neutral-200'}`}>
        Projects
      </div>
      
      <div className="space-y-4">
        <RVisionProject isDark={isDark} />
        <WhisperFlixProject isDark={isDark} />
        <VynixProject isDark={isDark} />
        <TeachersERP isDark={isDark} />
      </div>
      <div className={`pt-10 border-t ${isDark ? 'border-gray-800' : 'border-neutral-200'} px-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} flex justify-between items-center w-full`}>
        <div>
          @my-portfolio
        </div>
        <div>
          Built in React
        </div>
      </div>
    </div>
  );
};

export default Sideprojects;