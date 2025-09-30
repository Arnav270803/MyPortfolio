import React from 'react'

const TechStack = ({ isDark }) => {
  const techItems = [
    {
      name: "C++",
      href: "https://www.w3schools.com/cpp/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
    },
    {
      name: "CSS3",
      href: "https://www.w3schools.com/css/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
    },
    {
      name: "Express.js",
      href: "https://expressjs.com",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
      name: "Git",
      href: "https://git-scm.com/",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
    },
    {
      name: "HTML5",
      href: "https://www.w3.org/html/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
    },
    {
      name: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    },
    {
      name: "MongoDB",
      href: "https://www.mongodb.com/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
    },
    {
      name: "Node.js",
      href: "https://nodejs.org",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
    },
    {
      name: "Postman",
      href: "https://postman.com",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
    },
    {
      name: "Python",
      href: "https://www.python.org",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
    },
    {
      name: "React",
      href: "https://reactjs.org/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
    },
    {
      name: "Tailwind CSS",
      href: "https://tailwindcss.com/",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
    }
  ]

  return (
    <div className='w-full'>
      <div className={`border ${isDark ? 'border-gray-600' : 'border-neutral-200'}`}>
        <div className={` text-3xl font-medium pt-4 underline underline-offset-2 px-6 pb-3 `}>
          Stack
        </div>
      </div>
      
      {/* Div for all the icons is here */}
      <div className={`flex items-center border-b py-3 justify-start px-5 gap-6 pt-4 ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
        {techItems.map((tech, index) => (
          <div key={index} className="relative group">
            {/* Tooltip */}
            <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap  ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'}`}>
              {tech.name}
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l border-r-4 border-t-4 border-transparent ${isDark ? 'border-t-gray-700' : 'border-t-gray-800'}`}></div>
            </div>
            
            {/* Icon */}
            <a 
              href={tech.href} 
              target="_blank" 
              rel="noreferrer"
              className="block transition-transform duration-300 hover:scale-125"
            >
              <img 
                src={tech.icon} 
                alt={tech.name.toLowerCase().replace(/[.\s]/g, '')} 
                width="60" 
                height="60"
                className={`${tech.name === 'Express.js' && isDark ? 'filter invert' : ''} ${tech.name === 'Express.js' && !isDark ? 'filter brightness-0' : ''}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
