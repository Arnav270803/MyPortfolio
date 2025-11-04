import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'

const WinterArc = ({isDark}) => {

  const navigate = useNavigate();

  // Helper function for consistent shadow styling
  const getButtonShadow = () => {
    return isDark 
      ? 'inset 0 0 0 1px rgba(75, 85, 99, 0.4), inset 0 2px 4px rgba(0, 0, 0, 0.2)' 
      : 'inset 0 0 0 1px rgba(156, 163, 175, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.1)';
  };

  // Common button classes
  const buttonClasses = `
    px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-md cursor-pointer font-semibold 
    text-xs sm:text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap
    ${isDark 
      ? 'border border-gray-800/30 text-gray-300 hover:bg-white hover:text-black hover:border-white/50' 
      : 'border border-gray-300/30 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900/50'
    }
  `;

  const tagButtonClasses = `
    px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-semibold 
    text-xs sm:text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap
    ${isDark 
      ? 'border border-gray-800/30 text-gray-300 hover:bg-white hover:text-black hover:border-white/50' 
      : 'border border-gray-300/30 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900/50'
    }
  `;

  return (

    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      
      <div className={`min-h-screen `}>
          <div className={`mt-10 ml-6`}>
              <button 
                className={`flex items-center gap-2 ${buttonClasses}`}
                style={{ boxShadow: getButtonShadow() }}
                onClick={() => navigate('/bblog')}
              >
                <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>blogs</span>
              </button>
          </div>

          {/* Hero Image Section */}
          <div>
            <div className="mt-12 px-4 sm:px-6 lg:px-8">
              <div className="relative w-full h-[40vh] sm:h-[53vh] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Winter arc image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tags */}
              <div className='flex items-center mt-6 gap-2'>
                <button 
                  className={tagButtonClasses}
                  style={{ boxShadow: getButtonShadow() }}
                >
                  Personal Journey
                </button>
                <button 
                  className={tagButtonClasses}
                  style={{ boxShadow: getButtonShadow() }}
                >
                  Winter
                </button>
              </div>

              {/* Title */}
              <div 
                className={`mt-8 font-bold text-3xl sm:text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                My Winter Arc
              </div>

              {/* Description */}
              <div className={`mt-4 text-sm sm:text-base max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}> 
                This blog is all about my winter progress and good content from my twitter.
              </div>

              <div className='mt-5 text-lg'>
                November 5, 2025
              </div>

            </div>
          </div>
      </div>
    </>
  )
}

export default WinterArc