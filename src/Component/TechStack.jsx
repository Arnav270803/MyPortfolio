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
    },
    {
      name: "BeautifulSoup",
      href: "https://www.crummy.com/software/BeautifulSoup/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
    },
    {
      name: "RAG",
      href: "https://en.wikipedia.org/wiki/Prompt_engineering#Retrieval-augmented_generation",
      icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
    },
    {
      name: "Vector DB",
      href: "https://www.pinecone.io/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
    }
  ]

  return (
    <div className='w-full'>
      <div className={`border ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
        <div className={` text-3xl font-medium pt-4 underline underline-offset-2 px-6 pb-3 `}>
          Stack
        </div>
      </div>
      
      {/* Responsive Grid for all the icons */}
      <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 sm:gap-8 md:gap-10 border-b py-6 px-6 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        {techItems.map((tech, index) => (
          <div key={index} className="relative group flex justify-center items-center">
            {/* Tooltip */}
            <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs sm:text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'}`}>
              {tech.name}
              {/* Tooltip arrow */}
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent ${isDark ? 'border-t-gray-700' : 'border-t-gray-800'}`}></div>
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
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain ${tech.name === 'Express.js' && isDark ? 'filter invert' : ''} ${tech.name === 'Express.js' && !isDark ? 'filter brightness-0' : ''}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack