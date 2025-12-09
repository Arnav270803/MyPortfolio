import React from 'react'

const MyAgent = ({ isDark }) => {
  return (
    <div 
      className={`w-full max-w-md border-2 ${isDark ? 'border-gray-700 bg-neutral-800' : 'border-neutral-300 bg-white'} rounded-lg shadow-lg p-6`}
      style={{ minHeight: '20vh' }}
    >
      <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        My Agent
      </h2>
      <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {/* Add your agent features here */}
        <p>Agent features coming soon...</p>
      </div>
    </div>
  )
}

export default MyAgent