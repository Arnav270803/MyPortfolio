import React from 'react'

const Footer = ({ isDark }) => {
  return (
  <div className={`pt-10 border-t ${isDark ? 'border-gray-800' : 'border-neutral-200'} px-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} flex justify-between items-center w-full`}>
        <div>
          @my-portfolio
        </div>
        <div>
          Built in React
        </div>
      </div>
  )
}

export default Footer