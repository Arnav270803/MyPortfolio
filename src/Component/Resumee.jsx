import React from 'react'

const Resumee = ({isDark}) => {
  return (
    <div>
    <div className='flex items-center justify-center mt-16'>
      <div className='font-bold text-5xl  '>
        Resume
      </div>
      

    </div>
          <div className='flex items-center justify-center mt-6 text-s text-gray-500'>

            My Resume.
          </div>
       <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'} mt-10`}>

       </div>
    </div>
  )
}

export default Resumee