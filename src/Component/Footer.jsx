import React from 'react'

const Footer = ({ isDark }) => {
  return (
  <div className={`pt-10  gray-100'} px-2 text-xs  flex justify-between items-center w-full`}>
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