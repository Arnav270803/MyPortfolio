import React from 'react'

const Resumee = ({ isDark }) => {
  const resumePath = '/ArnavResumegg.pdf';
  
  // Hide PDF viewer toolbar and navigation panes
  const pdfUrl = `${resumePath}#toolbar=0&navpanes=0&scrollbar=0`;

  const openResume = () => {
    window.open(resumePath, '_blank');
  };

  return (
    <div className='pb-20'>
      {/* Header */}
      <div className='text-center mt-16'>
        <h1 className='font-bold text-5xl'>Resume</h1>
        <p className='mt-6 text-sm text-gray-500'>
          Click to view full resume
        </p>
      </div>
      
      <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} mt-10`} />

      {/* PDF Preview */}
      <div className='flex justify-center mt-12 px-4'>
        <div 
          onClick={openResume}
          className={`relative cursor-pointer transition-all duration-300 hover:scale-[1.02] 
            rounded-lg overflow-hidden max-w-4xl w-full
            ${isDark ? 'hover:shadow-2xl hover:shadow-blue-500/20' : 'hover:shadow-2xl'}`}
        >
          <div className={`border-2 rounded-lg ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
            <iframe
              src={pdfUrl}
              className='w-full h-[800px] md:h-[1000px]'
              title="Resume Preview"
            />
          </div>
          
          {/* Click Hint */}
          <div className={`absolute bottom-4 right-4 px-4 py-2 rounded-lg backdrop-blur-sm
            ${isDark ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-300'} border`}>
            <span className='text-sm font-medium'>Click to open PDF</span>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className='flex justify-center mt-8'>
        <a
          href={resumePath}
          download="Arnav_Sharma_Resume.pdf"
          className={`px-6 py-2 rounded-md border-2 border-dashed font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg ${
            isDark 
              ? 'border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:border-white shadow-gray-900/50 hover:shadow-white/20' 
              : 'border-gray-400 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 shadow-gray-400/30 hover:shadow-gray-900/40'
          }`}
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Resumee