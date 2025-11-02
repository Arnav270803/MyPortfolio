import React from 'react'

const bloging = ({isDark}) => {
  return (
    <>
       <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    <div>
    <div className='flex items-center justify-center mt-16'>
      <div className='font-semibold text-5xl '
      style={{fontFamily: 'Space Grotesk, sans-serif'}}
      >
        Blogs
      </div>
      

    </div>
          <div className='flex items-center justify-center mt-6 text-s '>

            Personal , Professional , tutorials and insights of programming & engineering 
          </div>
       <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} mt-10`}>

       </div>
    </div>
     </>
  )
}

export default bloging