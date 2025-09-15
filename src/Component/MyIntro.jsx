import React from 'react';

const MyIntro = ({ isDark }) => {
  return (
    <>
        <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
        />
  
    <div className="w-full px-6 ">
      <h1 className={`text-5xl underline underline-offset-4 cursor-pointer font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
        style={{fontFamily: 'Caveat, cursive'}}>     
            Hay, I'm Arnav 

      </h1>
      
      <div className={`space-y-3 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
    <div className={`border-b border-gray-800 ${isDark ? 'border-gray-800' : 'border-neutral-200'} py-3`}>
  </div>
    </>
  );
};

export default MyIntro;