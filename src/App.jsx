import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Homee from './pages/Homee'
import BlogPage from './pages/BlogPage'

const App = () => {
    const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
  setIsDark(!isDark);
  };

  // Toggle theme function


  return (
    <div className=''>

      <Routes>
        <Route path='/' element={<Homee isDark={isDark} toggleTheme={toggleTheme}/>} />
        <Route path='/bblog' element={<BlogPage />} />
      </Routes>
      
      {/* <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-zinc-50 text-gray-900'} min-h-screen transition-colors duration-300`}>
        <div className={`max-w-3xl border-l border-r ${isDark ? 'border-gray-800' : 'border-neutral-200'} mx-auto  py-5`}>
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />

          <div className='mt-4'>
            <MyIntro isDark={isDark} />

          <div className='mt-6'>
            <Sideprojects isDark={isDark} />
          </div>
          <div>
            <Socials isDark={isDark} />
          </div>
          <div className='mt-6'>
            <TechStack isDark={isDark} />
          </div>
        <div>
          <Footer />
        </div>

          </div>

        </div>
      </div> */}

    </div>
  )
}

export default App