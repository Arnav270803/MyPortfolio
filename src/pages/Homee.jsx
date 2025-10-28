import React from 'react'
import Navbar from '../Component/Navbar'
import Sideprojects from '../Component/Sideprojects';
import TechStack from '../Component/TechStack';
import Footer from '../Component/Footer';
import MyIntro from '../Component/MyIntro';

const Homee = ({isDark  , toggleTheme}) => {
  

  
  return (
    <div>
      <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-zinc-50 text-gray-900'} min-h-screen transition-colors duration-300`}>
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