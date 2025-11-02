import React from 'react'

const BlogSection = ({isDark , setIsDark}) => {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    <div className=' mt-16'>
        <div className={` font-semibold px-2 text-2xl ${isDark? 'text-while' : 'text-black'}`}
        style={{fontFamily:'Space Grotesk, sans-serif'}}
        >
            Latest Blog
        </div>
    </div>
    </>
  )
}

export default BlogSection