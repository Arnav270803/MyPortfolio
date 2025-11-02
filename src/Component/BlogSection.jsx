import React from 'react'

const BlogSection = ({isDark, setIsDark}) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      
      <div className='mt-16 px-4'>
        <div className={`font-semibold px-2 text-2xl mb-8 ${isDark ? 'text-white' : 'text-black'}`}
          style={{fontFamily:'Space Grotesk, sans-serif'}}
        >
          Latest Blog  
        <span className='text-red-500 px-3'>
             (Ongoing)
        </span>
        </div>

        {/* Simple Card */}
        <div className={`w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ${
          isDark 
            ? 'bg-black border-white/[0.2]' 
            : 'bg-gray-50 border-black/[0.1]'
        }`}>
          
          <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-neutral-600'}`}>
            My Winter Arc
          </h3>
          
          <p className={`text-sm max-w-sm mt-2 ${isDark ? 'text-neutral-300' : 'text-neutral-500'}`}>
            My Winter Life Transformation: A Seasonal Journey Unveiled          </p>
          
          <div className="w-full mt-4">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl"
              alt="thumbnail"
            />
          </div>
          
          <div className="flex justify-between items-center mt-20">
            <a
              href="#"
              className={`px-4 font-semibold py-2 rounded-xl text-xs font-normal ${isDark ? 'text-zinc' : 'text-gray-500'}`}
            >
              Nov. 02-2025
            </a>
            
            <button
              className={`px-4 py-2 rounded-xl cursor-pointer text-xs font-bold ${
                isDark 
                  ? 'bg-white text-black' 
                  : 'bg-black text-white'
              }`}
            >
             Know more →
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSection