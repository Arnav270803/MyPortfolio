import React from 'react'

const Socials = ({isDark}) => {
  return (
    <>
      {/* Option 1: Kalam - Clean, professional handwriting */}
       <link
        href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
        rel="stylesheet"
      /> 
      
      {/* Option 2: Patrick Hand - Designer's own handwriting, clean and professional (RECOMMENDED) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
        rel="stylesheet"
      />
      
      {/* Option 3: Architects Daughter - Neat architectural handwriting style */}
       <link
        href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
        rel="stylesheet"
      /> 
      
      {/* Option 4: Handlee - Modern, legible handwriting */}
     <link
        href="https://fonts.googleapis.com/css2?family=Handlee&display=swap"
        rel="stylesheet"
      /> 

    <div className='w-full'>
      <div className='m-6'></div>
      <div className={`border ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
        <div className='grid grid-cols-2 gap-6 p-6'>
          
          <a 
            href="https://www.linkedin.com/in/arnav-sharma2708/"
            target="_blank"
            rel="noopener noreferrer"
            className={`border p-4 ${isDark ? 'border-gray-800 hover:bg-gray-800' : 'border-neutral-200 hover:bg-gray-50'} transition-colors cursor-pointer`}
          >
            <div className='flex justify-start items-center'>
              <img
                src="/LinkedIn.png"
                width="60"
                height="60"
                className="object-cover"
                alt="Arnav's profile"
              />
              <div className='px-5'>
                <div className='text-4xl '
                  style={{fontFamily: 'Handlee, cursive'}}
                >
                  LinkedIn
                </div>
                <div className='text-xs'>
                  @arnav-sharma2708
                </div>
              </div>
            </div>
          </a>

          <a 
            href="https://x.com/Bokinsha"
            target="_blank"
            rel="noopener noreferrer"
            className={`border p-4 ${isDark ? 'border-gray-800 hover:bg-gray-800' : 'border-neutral-200 hover:bg-gray-50'} transition-colors cursor-pointer`}
          >
            <div className='flex justify-start items-center'>
              <img
                src="/X.png"
                width="60"
                height="60"
                className="object-cover"
                alt="Arnav's profile"
              />
              <div className='px-5'>
                <div className='text-4xl '
                  style={{fontFamily: 'handlee, cursive'}}
                >
                  X
                </div>
                <div className='text-xs'>
                  @Bokinsha
                </div>
              </div>
            </div>
          </a>

          <a 
            href="mailto:arnavsharma2708@gmail.com"
            className={`border p-4 ${isDark ? 'border-gray-800 hover:bg-gray-800' : 'border-neutral-200 hover:bg-gray-50'} transition-colors cursor-pointer`}
          >
            <div className='flex justify-start items-center'>
              <img
                src="/Gmail.png"
                width="60"
                height="60"
                className="object-cover"
                alt="Arnav's profile"
              />
              <div className='px-5'>
                <div className='text-4xl '
                  style={{fontFamily: 'handlee, cursive'}}
                >
                  Gmail
                </div>
                <div className='text-xs'>
                  arnavsharma2708@gmail.com
                </div>
              </div>
            </div>
          </a>

          <a 
            href="https://github.com/Arnav270803"
            target="_blank"
            rel="noopener noreferrer"
            className={`border p-4 ${isDark ? 'border-gray-800 hover:bg-gray-800' : 'border-neutral-200 hover:bg-gray-50'} transition-colors cursor-pointer`}
          >
            <div className='flex justify-start items-center'>
              <img
                src="/githubIcon.jpg"
                width="60"
                height="60"
                className="object-cover"
                alt="Arnav's profile"
              />
              <div className='px-5'>
                <div className='text-4xl '
                  style={{fontFamily: 'handlee, cursive'}}
                >
                  GitHub
                </div>
                <div className='text-xs'>
                  @Arnav270803
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
    </>
  )
}

export default Socials