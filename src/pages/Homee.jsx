import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Sideprojects from '../Component/Sideprojects';
import TechStack from '../Component/TechStack';
import Footer from '../Component/Footer';
import MyIntro from '../Component/MyIntro';
import { Navigate, useNavigate } from 'react-router-dom';
import MyAgent from '../Component/MyAgent';

const Homee = ({isDark  , toggleTheme ,setIsDark }) => {
const [bot, setBot] = useState(false);
const navigate = useNavigate();

  
  return (
    <div className='relative'>
      <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-zinc-50 text-gray-900'} min-h-screen transition-colors duration-300 ${bot ? 'blur-sm' : ''}`}>
      
      {/* Main content */}
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

      {/* Fixed icon button - outside blur effect */}
      <div className='fixed bottom-4 right-4 z-50 flex gap-2 cursor-pointer hover:scale-105 transition-transform'
        onClick={() => setBot(!bot)}
      >
        <lord-icon
          src="https://cdn.lordicon.com/uyxrgiem.json"
          trigger="loop"
          state="loop-cycle"
          colors={isDark ? "primary:#b4b4b4,secondary:#ffffff" : "primary:#b4b4b4,secondary:#000000"}
          style={{width: '60px', height: '60px'}}>
        </lord-icon>
      </div>

      {/* MyAgent overlay - shows when bot is true */}
      {bot && (
        <div className='fixed inset-0 z-40 flex items-center justify-center p-4 pointer-events-none'>
          <div className='pointer-events-auto'>
            <MyAgent isDark={isDark} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Homee