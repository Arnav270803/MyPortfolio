import React, { useState } from 'react';
import { Sparkles, Layers, Paintbrush2, Lock, ChevronDown, ChevronUp } from 'lucide-react';

// R-Vision Project
const RVisionProject = ({ isDark }) => {
  const [isExpanded, setIsExpanded] = useState(false);

const BtDesign = `inline-block mr-1 mb-1 px-2 py-0.5 border border-dashed rounded-md cursor-pointer transition-all duration-300 font-semibold
  ${isDark 
    ? 'bg-neutral-800 border-gray-600 text-gray-300 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:scale-[1.02]'  
    : 'bg-white border-gray-400 text-gray-700 hover:border-gray-900 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-[1.02]'
  }
  active:scale-100`


  return (
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
      </div>
      
      <div className={`text-xs px-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        <span className={BtDesign}>vite</span>
        <span className={BtDesign}>React</span>
        <span className={BtDesign}>Tailwind CSS</span>
        <span className={BtDesign}>Node.js</span>
        <span className={BtDesign}>MongoDB</span>
        <span className={BtDesign}>Express</span>
        <span className={BtDesign}>motion.dev</span>
        <span className={BtDesign}>lordicon</span>
        <span className={BtDesign}>Clipdrop API</span>
        <span className={BtDesign}>JWT</span>
      </div>
      <div className={`border-b py-1 mb-4 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      </div>
    </div>
  );
};

// WhisperFlix Project
const WhisperFlixProject = ({ isDark }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const BtDesign = `inline-block mr-1 mb-1 px-2 py-0.5 border border-dashed rounded-md cursor-pointer transition-all duration-300 font-semibold
  ${isDark 
    ? 'bg-neutral-800 border-gray-600 text-gray-300 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:scale-[1.02]'
    : 'bg-white border-gray-400 text-gray-700 hover:border-gray-900 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-[1.02]'
  }
  active:scale-100`;

  return (
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
          <div className={`hover:underline text-sm transition-colors hover:text-red-500 animate-pulse text-red-500`}>
            Ongoing
          </div>
          <div>
            <a
              href="https://whisperslix.vercel.app/"
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
      </div>

      <div className={`text-xs px-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        <span className={BtDesign}>React</span>
        <span className={BtDesign}>Tailwind CSS</span>
        <span className={BtDesign}>motion.dev</span>
        <span className={BtDesign}>lordicon</span>
        <span className={BtDesign}>Express</span>
        <span className={BtDesign}>Node.js</span>
        <span className={BtDesign}>MongoDB</span>
        <span className={BtDesign}>JWT</span>
        <span className={BtDesign}>Vite</span>
      </div>
      <div className={`border-b py-1 mb-4 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      </div>
    </div>
  );
};

// Vynix Project
const VynixProject = ({ isDark }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const BtDesign = `inline-block mr-1 mb-1 px-2 py-0.5 border border-dashed rounded-md cursor-pointer transition-all duration-300 font-semibold
  ${isDark 
    ? 'bg-neutral-800 border-gray-600 text-gray-300 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:scale-[1.02]'
    : 'bg-white border-gray-400 text-gray-700 hover:border-gray-900 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-[1.02]'
  }
  active:scale-100`;

  return (
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
          <div className={`text-sm transition-colors hover:text-red-500 animate-pulse text-red-500`}>
            Ongoing
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
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
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
                Designed for students and teachers' learning needs.
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
      </div>

      <div className={`text-xs px-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        <span className={BtDesign}>React</span>
        <span className={BtDesign}>Node.js</span>
        <span className={BtDesign}>Express.js</span>
        <span className={BtDesign}>MongoDB</span>
        <span className={BtDesign}>Manim</span>
        <span className={BtDesign}>Python</span>
        <span className={BtDesign}>OpenAI</span>
      </div>
      <div className={`border-b py-1 mb-4 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      </div>
    </div>
  );
};

// Capillary Chatbot
const CapillaryBot = ({ isDark }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const BtDesign = `inline-block mr-1 mb-1 px-2 py-0.5 border border-dashed rounded-md cursor-pointer transition-all duration-300 font-semibold
  ${isDark 
    ? 'bg-neutral-800 border-gray-600 text-gray-300 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:scale-[1.02]'
    : 'bg-white border-gray-400 text-gray-700 hover:border-gray-900 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-[1.02]'
  }
  active:scale-100`;

  return (
    <div className={`pb-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className={`flex items-start justify-between mb-3 border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
        <div className='px-6'>
          <div className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Capillary Bot
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
             12.09.2025 - 13.09.2025
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <a
              href="https://github.com/Arnav270803/capillary_Bot"
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
        RAG chatbot querying CapillaryTech docs via React frontend, Mistral LLM backend      
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
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='py-2 px-6'>
          <div className='px-3'>
            <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •
              <span className='px-2'>
                React Frontend: Dynamic React + Vite chat app with Axios for backend queries and Tailwind styling.             
              </span>
            </p>

            <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •
              <span className='px-2'>
                Node.js Backend: Express server on port 5000 handling CORS, JSON, and /chat endpoint for RAG processing.
              </span>
            </p>

            <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •
              <span className='px-2'>
                Python Scraping Script: scrape_docs.py uses BeautifulSoup to chunk CapillaryTech docs into scraped_docs.json
              </span>
            </p>

            <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •
              <span className='px-2'>
                Python Embedding Script: embed_chunks.py applies SentenceTransformer for vector embeddings saved to embedded_docs.json
              </span>
            </p>

            <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •
              <span className='px-2'>
                RAG Retrieval System: Keyword similarity search retrieves doc chunks as context for cited LLM responses
              </span>
            </p>

            <p className={`text-sm mb-3 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •
              <span className='px-2'>
                Mistral LLM Integration: OpenRouter's Mistral generates markdown answers from retrieved context for doc expertise
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className={`text-xs px-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        <span className={BtDesign}>React</span>
        <span className={BtDesign}>Node.js</span>
        <span className={BtDesign}>Express.js</span>
        <span className={BtDesign}>Python</span>
        <span className={BtDesign}>Vite</span>
        <span className={BtDesign}>Mistral LLm</span>
        <span className={BtDesign}>Framer Motion</span>
        <span className={BtDesign}>BeautifulSoup</span>
        <span className={BtDesign}>OpenRouter</span>
      </div>
      <div className={`border-b py-1 mb-4 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      </div>
    </div>
  );
};




// Teacher's ERP Project
const TeachersERP = ({ isDark }) => {
  const [isExpanded, setIsExpanded] = useState(false);

    const BtDesign = `px-2 py-0.5 border border-dashed rounded-md cursor-pointer transition-all duration-300 font-semibold
  ${isDark 
    ? 'bg-neutral-800 border-gray-600 text-gray-300 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:scale-[1.02]'  // here the shadow code is like this because i wanted to be surround the button completely
    : 'bg-white border-gray-400 text-gray-700 hover:border-gray-900 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-[1.02]'
  }
  active:scale-100`

  return (
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
        ERP system with admin, teacher, and student interfaces.
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
            <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •
              <span className='px-2'>
                Admin has complete authority over all data.
              </span>
            </p>

            <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •
              <span className='px-2'>
                Teachers can view and manage student information.
              </span>
            </p>

            <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •
              <span className='px-2'>
                Students can securely access their personal records.
              </span>
            </p>

            <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •
              <span className='px-2'>
                Built with React, Express, and MySQL database.
              </span>
            </p>

            <p className={`text-sm mb-2 font-medium transition duration-200 ease-in-out transform hover:scale-105 hover:text-white hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              •
              <span className='px-2'>
                Streamlines data access and management for education.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className={`text-xs px-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        <span className={BtDesign}>React</span>|<span className={BtDesign}>Tailwind</span>|<span className={BtDesign}>Node.js</span>|<span className={BtDesign}>SQL</span>|<span className={BtDesign}>Shadcn</span>|<span className={BtDesign}>Prisma</span> 
      </div>
    </div>
  );
};





// Main Component
const Sideprojects = ({ isDark }) => {
  return (
    <div className={`w-full min-h-screen ${isDark ? 'bg-neutral-900 ' : 'bg-zinc-50'}`}>
      <div className={`text-3xl px-6 underline border-b pb-3 underline-offset-4 font-medium mb-4 ${isDark ? 'text-white border-gray-800' : 'text-gray-900 border-neutral-200'}`}>
        Projects
      </div>
      
      <div className="space-y-4">
        <WhisperFlixProject isDark={isDark} />
        <VynixProject isDark={isDark} />
        <RVisionProject isDark={isDark} />
        <CapillaryBot isDark={isDark} />
        <TeachersERP isDark={isDark} />
      </div>

    </div>
  );
};

export default Sideprojects;