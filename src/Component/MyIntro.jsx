import React from 'react';

const MyIntro = () => {
  return (
    <div className="w-full px-6 py-2 text-left font-sans ">{/*main styling */}
      <div className="font-bold text-5xl text-white mb-6">{/*div for my name  */}
        Hi, I'm Arnav Sharma
      </div>

      <ul className="text-gray-400 space-y-3 text-lg list-disc list-inside">{/*div for my information , using span to underline and making the text white */}
        <li>Proficient in <span className='text-white underline cursor-pointer'>C</span> and <span className='text-white underline cursor-pointer' >C++</span> programming languages</li>
        <li>Full-stack <span className='text-white underline cursor-pointer' >MERN</span>  developer with hands-on project experience</li>
        <li>Skilled in both <span className='text-white underline cursor-pointer'>SQL</span> and <span className='text-white underline cursor-pointer'>NoSQL</span> database systems</li>
        <li>Strong leadership abilities and team collaboration mindset</li>
        <li>Practical marketing skills from running a SaaS service</li>
        <li>Let’s collaborate and build something impactful together</li>
      </ul>
    </div>
  );
};

export default MyIntro;

