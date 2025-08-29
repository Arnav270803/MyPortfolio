import React from 'react';

const MyIntro = ({ isDark }) => {
  return (
    <div className="w-full">
      <h1 className={`text-4xl underline underline-offset-4 cursor-pointer font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
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
  );
};

export default MyIntro;