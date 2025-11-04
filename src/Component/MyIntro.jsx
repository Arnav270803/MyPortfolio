import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Users, TrendingUp, Handshake } from 'lucide-react';

const MyIntro = ({ isDark }) => {
  const navigate = useNavigate();
  
  const animatedTexts = [
    "Frontend enthusiast",
    "Full stack developer", 
    "Open source contributor",
    "Create minimalist designs",
    "Build AI Agents"
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === animatedTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
     
      <div className="w-full">
        <div className={`border ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
          
          <div className="flex">
            
            {/* Smaller profile image on mobile */}
            <div className={`w-[100px] sm:w-[180px] h-[100px] sm:h-[180px] border-r ${isDark ? 'border-gray-800' : 'border-neutral-200'} flex-shrink-0`}>
              <img
                src="/cropped_circle_image.png"
                width="180"
                height="180"
                className="w-full h-full object-cover"
                alt="Arnav's profile"
              />
            </div>
            
            <div className="flex-1 flex flex-col min-w-0">
              
              {/* Smaller top rectangle on mobile */}
              <div 
                className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} h-[50px] sm:h-[100px]`}
                style={{
                  backgroundImage: `radial-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
                  backgroundSize: '10px 10px'
                }}
              >
              </div>
              
              {/* Smaller middle section on mobile */}
              <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} h-[35px] sm:h-[50px] px-2 sm:px-4 py-1 sm:py-2 flex items-center justify-between gap-2`}>
                {/* Smaller heading on mobile */}
                <h1 
                  className={`text-lg sm:text-3xl md:text-4xl cursor-pointer hover:underline font-medium ${isDark ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}
                  style={{fontFamily: 'Caveat, cursive'}}
                >
                  hey, I'm Arnav
                </h1>
                
                {/* Smaller button on mobile */}
                <button 
                  className={`px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-md border-2 border-dashed cursor-pointer font-semibold text-[10px] sm:text-sm transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap ${
                  isDark? 'border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:border-white shadow-gray-900/50 hover:shadow-white/20' : 'border-gray-400 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 shadow-gray-400/30 hover:shadow-gray-900/40' }`}
                  onClick={() => navigate('/resume')}
                >
                  <span className="hidden sm:inline">Resume / CV</span>
                  <span className="sm:hidden">Resume</span>
                </button>
              </div>
              
              {/* Smaller bottom section on mobile */}
              <div className="h-[15px] sm:h-[30px] flex items-center px-2 sm:px-4 justify-start overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    className={`text-[10px] sm:text-sm hover:underline font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
                  >
                    {animatedTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        {/* Smaller description text and spacing on mobile */}
        <div className={`space-y-2 sm:space-y-3 px-3 sm:px-6 mt-4 sm:mt-6 text-xs sm:text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          
          <p>
            <Code className="inline w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Proficient in <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>JavaScript</span>, {' '}
            <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>C++</span> and 
            <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}> Python </span>
            programming languages
          </p>
          
          <p>
            <Database className="inline w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Full-stack <span className={`font-medium hover:underline  ${isDark ? 'text-white' : 'text-gray-900'}`}>MERN</span> developer 
            with hands-on project experience
          </p>

          <p>
            <Users className="inline w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Built<span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}> AI agents </span>  
              powered by Retrieval-Augmented Generation <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>(RAG)</span> techniques.         
          </p>
          
          <p>
            <Database className="inline w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Hands-on experience with both <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>NOSQL</span> and{' '}
            <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>Vector Database</span> systems
          </p>
          
          <p>
            <TrendingUp className="inline w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Practical marketing skills from running a 
            <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}> SaaS </span> 
            service
          </p>
          
          <p>
            <Handshake className="inline w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Let's collaborate and build something impactful together
          </p>
      
        </div>
        
        <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} py-2 sm:py-3`}>
        </div>

      </div>
    </>
  );
};

export default MyIntro;