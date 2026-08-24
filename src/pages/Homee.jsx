import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import Experience from '../Component/Experience';
import Sideprojects from '../Component/Sideprojects';
import TechStack from '../Component/TechStack';
import Footer from '../Component/Footer';
import MyIntro from '../Component/MyIntro';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import MVP from '../Component/MVP';


const Homee = ({ isDark, toggleTheme, setIsDark }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className='relative'>
      <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-zinc-50 text-gray-900'} min-h-screen transition-colors duration-300 `}>

        {/* Main content */}
        <div className={`max-w-3xl border-l border-r ${isDark ? 'border-gray-800' : 'border-neutral-200'} mx-auto  py-5`}>

          <div className='mt-4'>
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          <div>
            <MyIntro isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          <div id="experience-section" className='mt-6'>
            <Experience isDark={isDark} />
          </div>

          <div id="experience-section" className='mt-6'>
            <MVP isDark={isDark} />
          </div>

          <div id="projects-section" className='mt-6'>
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
