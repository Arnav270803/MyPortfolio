import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Users, TrendingUp, Handshake } from 'lucide-react';

const MyIntro = ({ isDark }) => {
  // Animation texts that will cycle through
  const animatedTexts = [
    "Frontend enthusiast",
    "Full stack developer", 
    "Open source contributor",
    "Create minimalist designs"
  ];
  
  // State to track which text is currently showing
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // Effect to handle the text cycling every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === animatedTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds per text
    
    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, [animatedTexts.length]);
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
     
      <div className="w-full">
        {/* Main Container with Border */}
        <div className={`border ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
          
          {/* Layout Container - Image and Rectangles Side by Side */}
          <div className="flex">
            
            {/* Left Side - Profile Image */}
            <div className={`w-[180px] h-[180px] border-r ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
              <img
                src="/cropped_circle_image.png"
                width="180"
                height="180"
                className="w-full h-full object-cover"
                alt="Arnav's profile"
              />
            </div>
            
            {/* Right Side - Three Stacked Rectangles */}
            <div className="flex-1 flex flex-col">
              
              {/* Rectangle 1 - Top Section (Largest - 100px height) */}
              <div 
                className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} h-[100px]`}
                style={{
                  backgroundImage: `radial-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
                  backgroundSize: '10px 10px'
                }}
              >
                {/* This rectangle has a decorative background pattern */}
              </div>
              
              {/* Rectangle 2 - Middle Section (Name text - 50px height) */}
              <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} h-[50px] p-4 flex items-center justify-start`}>
                <h1 
                  className={`text-4xl  cursor-pointer hover:underline font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
                  style={{fontFamily: 'Caveat, cursive'}}
                >
                  hey, I'm Arnav
                </h1>
              </div>
              
              {/* Rectangle 3 - Bottom Section with Animated Text (30px height) */}
              <div className="h-[30px] flex items-center px-4 justify-start overflow-hidden">
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
                    className={`text-sm hover:underline font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
                  >
                    {animatedTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        {/* Skills and Description Section - Outside the bordered area */}
        <div className={`space-y-3 px-6 mt-6 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          
          <p>
            <Code className="inline w-4 h-4 mr-2" />
            Proficient in <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>C</span> and{' '}
            <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>C++</span> programming languages
          </p>
          
          <p>
            <Database className="inline w-4 h-4 mr-2" />
            Full-stack <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>MERN</span> developer 
            with hands-on project experience
          </p>
          
          <p>
            <Database className="inline w-4 h-4 mr-2" />
            Skilled in both <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>SQL</span> and{' '}
            <span className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-gray-900'}`}>NoSQL</span> database systems
          </p>
          
          <p>
            <Users className="inline w-4 h-4 mr-2" />
            Strong leadership abilities and team collaboration mindset
          </p>
          
          <p>
            <TrendingUp className="inline w-4 h-4 mr-2" />
            Practical marketing skills from running a SaaS service
          </p>
          
          <p>
            <Handshake className="inline w-4 h-4 mr-2" />
            Let's collaborate and build something impactful together
          </p>
          
        </div>
        
        {/* Bottom Divider */}
        <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} py-3`}>
        </div>
        
      </div>
    </>
  );
};

export default MyIntro;