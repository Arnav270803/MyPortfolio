import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import MyIntro from './Component/MyIntro'
import Sideprojects from './Component/Sideprojects'

const App = () => {
  const [isDark, setIsDark] = useState(true);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <div className='max-w-2xl mx-auto px-6 py-12'>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <div className='mt-20'>
          <MyIntro isDark={isDark} />
        </div>
        <div className='mt-20'>
          <Sideprojects isDark={isDark} />
        </div>
      </div>
    </div>
  )
}

export default App