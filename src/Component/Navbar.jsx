import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between top-0 left-10 right-10 py-6 items-center w-full px-6 lg:px-16'>{/*Main div that have all the main characterstic */}
      
      <div className='flex items-center gap-1'> {/*div for my first button*/}
        <a href="/" target="_blank" rel="noopener noreferrer">
        <button className="flex items-center text-md text-white font-sans bg-clip-text text-transparent cursor-pointer bg-gray-900 border border-gray-700 px-3 py-2 rounded-lg hover:bg-gray-800 hover:border-gray-600 transition">{/*My home button */}
          <span>{/*using lord-icons for my home logo */}
            <lord-icon 
              src="https://cdn.lordicon.com/jeuxydnh.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#b4b4b4"
              style={{ width: "24px", height: "24px" }}
            ></lord-icon>
          </span>
          <span className='ml-1 '>Home</span>{/*using ml-1 to allign the text with my image */}
        </button>
        </a>
        
      </div>

    <div className='flex items-center gap-4'>{/*this div for my socials */}
      <a href="https://www.linkedin.com/in/arnav-sharma2708/" target="_blank" rel="noopener noreferrer">
        <button className='flex  items-center  cursor-pointer'>{/*linkedin button */}
      <lord-icon
    src="https://cdn.lordicon.com/dsdlqjde.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#ffffff">
    </lord-icon>
      </button>
      </a>

        <a href="https://x.com/Bokinsha" target="_blank" rel="noopener noreferrer">
         <button className='flex items-center cursor-pointer' >{/*button for X */}
        <lord-icon
    src="https://cdn.lordicon.com/yizwahhw.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#ffffff">
    </lord-icon>
      </button>
      </a>

        <a href="https://github.com/Arnav270803" target="_blank" rel="noopener noreferrer">
           <button className='flex items-center cursor-pointer'>{/*this div for my github  */}
        <lord-icon
    src="https://cdn.lordicon.com/jjxzcivr.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#ffffff">
    </lord-icon>
      </button>
      </a>
     
        <a href="mailto:arnvsharma2708@gmail.com" target="_blank" rel="noopener noreferrer">
          <button className='flex items-center cursor-pointer'>{/*this div for my mail */}
        <lord-icon
    src="https://cdn.lordicon.com/vpbspaec.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#ffffff">
</lord-icon>
      </button>
      </a>
    </div>

    </div>
  );
};

export default Navbar;
