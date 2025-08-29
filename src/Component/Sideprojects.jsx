import React from 'react';

const Sideprojects = ({ isDark }) => {
  const projects = [
    {
      title: "R-Vision",
      description: "AI Text to image generation place",
      tech: "React / Node.js / MongoDB / Express",
      liveUrl: "#",
      githubUrl: "https://github.com/Arnav270803/Rvision"
    },
    {
      title: "WhisperFlix",
      description: "An underrated Binge-watching that genuinely shows you underrated old cinema",
      tech: " React / Tailwind CSS",
      liveUrl: "https://whisper-flix.vercel.app/",
      githubUrl: "https://github.com/Arnav270803/WhisperFlix"
    },
    {
      title: "Vynix",
      description: "Text to video generator using manim and LLM's ",
      tech: "React / Node.js / Express.js ",
      liveUrl: "https://vynix-one.vercel.app/",
      githubUrl: "https://github.com/Arnav270803/Vynix"
    }
  ];

  return (
    <div className="w-full">
      <h2 className={`text-2xl underline underline-offset-4 font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Projects
      </h2>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className={`pb-2 ${index !== projects.length - 1 ? `border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}` : ''}`}>
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
      
      
    </div>
  );
};

export default Sideprojects;