import React from 'react'
import Navbar from '../Component/Navbar'
import Sideprojects from '../Component/Sideprojects';
import TechStack from '../Component/TechStack';
import Footer from '../Component/Footer';
import MyIntro from '../Component/MyIntro';

const Homee = ({isDark  , toggleTheme ,setIsDark }) => {
  

  
  return (
    <div>
      <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-zinc-50 text-gray-900'} min-h-screen transition-colors duration-300`}>
      
      <div className='fixed bottom-4 right-4 z-50 flex gap-2'>
        <lord-icon
          src="https://cdn.lordicon.com/uyxrgiem.json"
          trigger="loop"
          state="loop-cycle"
          colors={isDark ? "primary:#b4b4b4,secondary:#ffffff" : "primary:#b4b4b4,secondary:#000000"}
          style={{width: '60px', height: '60px'}}>
        </lord-icon>
        

      </div>

        <div className={`max-w-3xl border-l border-r ${isDark ? 'border-gray-800' : 'border-neutral-200'} mx-auto  py-5`}>
         
          <div className='mt-4'>    
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          </div>
          
          <div>
            <MyIntro isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          <div className='mt-6'>
            <Sideprojects isDark={isDark} />
          </div>

          <div className='mt-6'>
            <TechStack isDark={isDark} />
          </div>

          <div>
            <Footer />
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Homee