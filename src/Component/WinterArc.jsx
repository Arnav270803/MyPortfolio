import React from 'react'
import { useNavigate } from 'react-router-dom';

import { ArrowLeft } from 'lucide-react'

const WinterArc = ({isDark}) => {

const navigate = useNavigate();

  return (
    <div className={`flex items-center`}>
        <div className={`mt-10 ml-6`}>
            <button 
              className={`
                flex items-center gap-2 px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-md cursor-pointer font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap
                ${isDark 
                  ? 'border border-gray-800/30 text-gray-300 hover:bg-white hover:text-black hover:border-white/50' 
                  : 'border border-gray-300/30 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900/50'
                }
              `}
              style={{
                boxShadow: isDark 
                  ? 'inset 0 0 0 1px rgba(75, 85, 99, 0.4), inset 0 2px 4px rgba(0, 0, 0, 0.2)' : 'inset 0 0 0 1px rgba(156, 163, 175, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => navigate('/bblog')}
            >
              <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>blogs</span>
            </button>
        </div>
    </div>
  )
}

export default WinterArc