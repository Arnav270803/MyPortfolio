import React from 'react'
import Navbar from './Component/Navbar'
import MyIntro from './Component/MyIntro'
import Sideprojects from './Component/Sideprojects'

const App = () => {
  return (
    <div className='text-white bg-[#0a0a0a] min-h-screen px-50 py-6'> {/*this div is universal and making my background gray and adding some padding all around */}
    <Navbar />
    <MyIntro />
    <Sideprojects />
    </div>
  )
}

export default App