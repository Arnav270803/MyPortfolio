import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import MyIntro from './Component/MyIntro'
import Sideprojects from './Component/Sideprojects'
import Logos from './Component/Logos'

const App = () => {
  const [isDark, setIsDark] = useState(true);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className=''>
      <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-zinc-50 text-gray-900'} min-h-screen transition-colors duration-300`}>
        <div className={`max-w-3xl border-l border-r ${isDark ? 'border-gray-800' : 'border-neutral-200'} mx-auto py-5`}>
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />

          <div className='mt-4'>
            <MyIntro isDark={isDark} />

          <div className='mt-6'>
            <Sideprojects isDark={isDark} />
          </div>
                    </div>

        </div>
      </div>
    </div>
  )
}

export default App