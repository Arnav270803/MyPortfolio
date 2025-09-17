import React from 'react';

const Logos = ({ isDark }) => {
  const email = 'arnavsharma2708@gmail.com';
  return (

    <div className={`border-b ${isDark ? 'border-gray-800' : 'border-neutral-200'}`}>
    <div className="flex items-center justify-end gap-7 px-6">
      <span className="cursor-pointer">
        <a href="https://www.linkedin.com/in/arnav-sharma2708/">
          {isDark ? (
            <lord-icon
              src="https://cdn.lordicon.com/qgebwute.json"
              trigger="hover"
              stroke="bold" // Increased stroke for visibility
              colors="primary:#b4b4b4,secondary:#08a88a"
              style={{ width: '20px', height: '20px' }} 
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/qgebwute.json"
              trigger="hover"
              stroke="bold" // Increased stroke for visibility
              colors="primary:#545454,secondary:#08a88a"
              style={{ width: '20px', height: '20px' }} 
            ></lord-icon>
          )}
        </a>
      </span>

      <span className="cursor-pointer">
        <a href="https://github.com/Arnav270803">
          {isDark ? (
            <lord-icon
              src="https://cdn.lordicon.com/jjxzcivr.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#ffffff,secondary:#08a88a"
              style={{ width: '20px', height: '20px' }} 
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/jjxzcivr.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#545454,secondary:#08a88a"
              style={{ width: '20px', height: '20px' }} 
            ></lord-icon>
          )}
        </a>
      </span>

      <span className="cursor-pointer">
        <a href={`mailto:${email}`}>
          {isDark ? (
            <lord-icon
              src="https://cdn.lordicon.com/vpbspaec.json"
              trigger="hover"
              colors="primary:#e4e4e4,secondary:#08a88a"
              style={{ width: '25px', height: '25px' }} 
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/vpbspaec.json"
              trigger="hover"
              colors="primary:#545454,secondary:#08a88a"
              style={{ width: '20px', height: '20px' }} 
            ></lord-icon>
          )}
        </a>
      </span>
    </div>
  </div>
  );
};

export default Logos;