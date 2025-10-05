import React from 'react'

const Socials = ({isDark}) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

    <div className='w-full'>
      <div className='m-6'></div>
      <div className={`border ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
        <div className='grid grid-cols-2 gap-6 p-6'>
          
          <div className={`border p-4 ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
            <div className='flex justify-start items-center'>
              <img
                src="/LinkedIn.png"
                width="60"
                height="60"
                className="object-cover"
                alt="Arnav's profile"
              />
              <div className='px-5'>
                <div className='text-4xl font-bold'
                  style={{fontFamily: 'Caveat, cursive'}}
                >
                  LinkedIn
                </div>
                <div className='text-xs'>
                  @Bokinsha
                </div>
              </div>
            </div>
          </div>

          <div className={`border p-4 ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
            <div className='flex justify-start items-center'>
              <img
                src="/X.png"
                width="60"
                height="60"
                className="object-cover"
                alt="Arnav's profile"
              />
              <div className='px-5'>
                <div className='text-4xl font-bold'
                  style={{fontFamily: 'Caveat, cursive'}}
                >
                  X
                </div>
                <div className='text-xs'>
                  @Bokinsha
                </div>
              </div>
            </div>
          </div>

          <div className={`border p-4 ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
            <div className='flex justify-start items-center'>
              <img
                src="/Gmail.png"
                width="60"
                height="60"
                className="object-cover"
                alt="Arnav's profile"
              />
              <div className='px-5'>
                <div className='text-4xl font-bold'
                  style={{fontFamily: 'Caveat, cursive'}}
                >
                  Gmail
                </div>
                <div className='text-xs'>
                  @Bokinsha
                </div>
              </div>
            </div>
          </div>

          <div className={`border p-4 ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
            <div className='flex justify-start items-center'>
              <img
                src="/githubIcon.jpg"
                width="60"
                height="60"
                className="object-cover"
                alt="Arnav's profile"
              />
              <div className='px-5'>
                <div className='text-4xl font-bold'
                  style={{fontFamily: 'Caveat, cursive'}}
                >
                  GitHub
                </div>
                <div className='text-xs '>
                  @Bokinsha
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Socials