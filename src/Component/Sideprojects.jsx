import React from 'react'

const Sideprojects = () => {
  return (
    <div className="w-full px-6 py-10 text-left font-sans ">
      <div className="font-bold text-5xl text-white mb-6 ">Side Projects</div>
      <ul className="text-gray-400 space-y-3 text-lg ">
        <li>
        <span className='text-white'>1. </span>
        <span className='text-white underline cursor-pointer hover:font-semibold transform hover:scale-105 transition duration-200'>Landing-Page</span> Reusable, responsive SaaS launch template.
        </li>

        <li><span className='text-white'>2. </span>
        <span className='text-white underline cursor-pointer hover:font-semibold transform hover:scale-105 transition duration-200'>Rvision</span>  React-based AI image creator with credit system.
        </li>

        <li>
            <span className='text-white'>3. </span>
            <span className='text-white underline hover:font-semibold transform hover:scale-105 transition duration-200 cursor-pointer'>Webzar </span> Visually striking, modern frontend design project.
        </li>
      </ul>
    </div>
  )
}

export default Sideprojects
