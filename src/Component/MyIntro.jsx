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
            
            {/* CHANGE 1: Made profile image responsive - 120px on mobile, 180px on larger screens */}
            <div className={`w-[120px] sm:w-[180px] h-[120px] sm:h-[180px] border-r ${isDark ? 'border-gray-800' : 'border-neutral-200'} flex-shrink-0`}>
              <img
                src="/cropped_circle_image.png"
                width="180"
                height="180"
                className="w-full h-full object-cover"
                alt="Arnav's profile"
              />
            </div>
            
            <div className="flex-1 flex flex-col min-w-0">
              
              {/* CHANGE 2: Made top rectangle height responsive - 60px on mobile, 100px on larger screens */}
              <div 
                className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} h-[60px] sm:h-[100px]`}
                style={{
                  backgroundImage: `radial-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
                  backgroundSize: '10px 10px'
                }}
              >
              </div>
              
              {/* CHANGE 3: Made middle section responsive with flexible layout and spacing */}
              <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} h-[40px] sm:h-[50px] px-2 sm:px-4 py-2 flex items-center justify-between gap-2`}>
                {/* CHANGE 4: Made text size responsive - text-xl on mobile, text-4xl on larger screens */}
                <h1 
                  className={`text-xl sm:text-3xl md:text-4xl cursor-pointer hover:underline font-medium ${isDark ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}
                  style={{fontFamily: 'Caveat, cursive'}}
                >
                  hey, I'm Arnav
                </h1>
                
                {/* CHANGE 5: Made button responsive - smaller padding and text on mobile */}
                <button 
                  className={`px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-md border-2 border-dashed cursor-pointer font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap ${
                  isDark? 'border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:border-white shadow-gray-900/50 hover:shadow-white/20' : 'border-gray-400 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 shadow-gray-400/30 hover:shadow-gray-900/40' }`}
                  onClick={() => navigate('/resume')}
                >
                  {/* CHANGE 6: Show shorter text on mobile, full text on larger screens */}
                  <span className="hidden sm:inline">Resume / CV</span>
                  <span className="sm:hidden">Resume</span>
                </button>
              </div>
              
              {/* CHANGE 7: Made bottom section height responsive - 20px on mobile, 30px on larger screens */}
              <div className="h-[20px] sm:h-[30px] flex items-center px-2 sm:px-4 justify-start overflow-hidden">
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
                    // CHANGE 8: Made animated text size responsive - text-xs on mobile, text-sm on larger screens
                    className={`text-xs sm:text-sm hover:underline font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
                  >
                    {animatedTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        {/* CHANGE 9: Made description section padding and text size responsive */}
        <div className={`space-y-3 px-3 sm:px-6 mt-6 text-sm sm:text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          
          <p>
            <Code className="inline w-4 h-4 mr-2" />
            Proficient in <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>JavaScript</span>, {' '}
            <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>C++</span> and 
            <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}> Python </span>
            programming languages
          </p>
          
          <p>
            <Database className="inline w-4 h-4 mr-2" />
            Full-stack <span className={`font-medium hover:underline  ${isDark ? 'text-white' : 'text-gray-900'}`}>MERN</span> developer 
            with hands-on project experience
          </p>

          <p>
            <Users className="inline w-4 h-4 mr-2" />
              Built<span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}> AI agents </span>  
              powered by Retrieval-Augmented Generation <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>(RAG)</span> techniques.         
          </p>
          
          <p>
            <Database className="inline w-4 h-4 mr-2" />
            Hands-on experience with both <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>NOSQL</span> and{' '}
            <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>Vector Database</span> systems
          </p>
          
          <p>
            <TrendingUp className="inline w-4 h-4 mr-2" />
            Practical marketing skills from running a 
            <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}> SaaS </span> 
            service
          </p>
          
          <p>
            <Handshake className="inline w-4 h-4 mr-2" />
            Let's collaborate and build something impactful together
          </p>
      
        </div>
        
        <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} py-3`}>
        </div>

      </div>
    </>
  );
};

export default MyIntro;