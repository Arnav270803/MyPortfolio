import React from 'react';

const MyIntro = ({ isDark }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      <div className="w-full">
        <div className={` border ${isDark ? 'border-gray-600' : 'border-gray-300'}`}>{/* main border for image and all the text inside  */}
        {/* Header section with image and title side by side */}
        <div className="flex items-center gap-6 ">
          <div className={`w-[180px] h-[180px] border-r ${isDark ? 'border-gray-600' : 'border-gray-300'}`}>{/*border just for the image  */}
            <img 
              src="./public/cropped_circle_image.png"
              width="180"
              height="180"
              className="w-full h-full object-cover"
              alt="Arnav's profile"
            />
          </div>
          
          {/* Title aligned to the right of image */}
          <div className={`border ${isDark ? 'border-gray-600' : 'border-gray-300'}`}>
          <h1 className={`text-4xl underline underline-offset-4 mt-10  cursor-pointer font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{fontFamily: 'Caveat, cursive'}}>
            hay, I'm Arnav
          </h1>
          </div>
        </div>
        </div>
        {/* Description content */}
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
      </div>
      
      <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} py-3`}>
      </div>
    </>
  );
};

export default MyIntro;