import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Homee from './pages/Homee'
import BlogPage from './pages/BlogPage'
import ResumePage from './pages/ResumePage'
import WinterArcPage from './pages/WinterArcPage'

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
        <Route path='/bblog' element={<BlogPage isDark={isDark} toggleTheme={toggleTheme}/>} />
        <Route path='/resume' element={<ResumePage isDark={isDark} toggleTheme={toggleTheme}/>} />
        <Route path='WinterArc' element={<WinterArcPage isDark={isDark} toggleTheme={toggleTheme}/>} />
      </Routes>
      

    </div>
  )
}

export default App