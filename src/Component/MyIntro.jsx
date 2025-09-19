import React from 'react';

const MyIntro = ({ isDark }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      <div className="w-full">
        <div className={`border ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
          {/* Main layout with image and three text sections */}
          <div className="flex">
            {/* Image section - square box */}
            <div className={`w-[180px] h-[180px] border-r ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
              <img
                src="./public/cropped_circle_image.png"
                width="180"
                height="180"
                className="w-full h-full object-cover"
                alt="Arnav's profile"
              />
            </div>
            
            {/* Right side content - three rectangular boxes */}
            <div className="flex-1">
              {/* First rectangular box - empty */}
              <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} h-[80px]`}>
              </div>
              
              {/* Second rectangular box - Title section */}
              <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} p-4 flex items-center justify-center h-[20px]`}>
                <h1 className={`text-4xl underline underline-offset-4 cursor-pointer font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
                  style={{fontFamily: 'Caveat, cursive'}}>
                  hay, I'm Arnav
                </h1>
              </div>
            </div>
          </div>
        </div>
        
        {/* Description content - outside the bordered sections */}
        <div className={`space-y-3 px-6 mt-6 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>
            Proficient in <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>C</span> and{' '}
            <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>C++</span> programming languages
          </p>
          
          <p>
            Full-stack <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>MERN</span> developer 
            with hands-on project experience
          </p>
          
          <p>
            Skilled in both <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>SQL</span> and{' '}
            <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>NoSQL</span> database systems
          </p>
          
          <p>
            Strong leadership abilities and team collaboration mindset
          </p>
          
          <p>
            Practical marketing skills from running a SaaS service
          </p>
          
          <p>
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