import React from 'react';

const Sideprojects = ({ isDark }) => {
  const projects = [
    {
      title: "Your Main Project 1",
      description: "Description of your first main project. Replace this with your actual project details.",
      tech: "React / Node.js / MongoDB / Express",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Your Main Project 2",
      description: "Description of your second main project. Replace this with your actual project details.",
      tech: "Next.js / TypeScript / PostgreSQL / Tailwind CSS",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Your SaaS Project",
      description: "Your SaaS service that gave you practical marketing experience. Replace this with details about your actual SaaS project.",
      tech: "React / Node.js / Stripe / AWS",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="w-full">
      <h2 className={`text-2xl font-medium mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Projects
      </h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className={`pb-8 ${index !== projects.length - 1 ? `border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}` : ''}`}>
            <div className="flex items-start justify-between mb-3">
              <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <div className="flex items-center gap-4">
                <a 
                  href={project.liveUrl} 
                  className={`text-sm transition-colors ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Live →
                </a>
                <a 
                  href={project.githubUrl} 
                  className={`text-sm transition-colors ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Code →
                </a>
              </div>
            </div>
            <p className={`mb-3 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {project.description}
            </p>
            <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              {project.tech}
            </div>
          </div>
        ))}
      </div>
      
      <div className={`mt-16 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <h2 className={`text-2xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Let's work together
        </h2>
        <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <div className="flex items-center gap-6">
          <a 
            href="mailto:arnvsharma2708@gmail.com" 
            className={`font-medium transition-colors ${
              isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'
            }`}
          >
            Get in touch →
          </a>
          <a 
            href="https://www.linkedin.com/in/arnav-sharma2708/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sideprojects;