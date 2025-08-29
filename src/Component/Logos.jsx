import React from 'react'

const Logos = ({isDark}) => {
  return (
<div className="flex items-center gap-6">
      <span className="cursor-pointer">
        {isDark ? (
          <lord-icon
            src="https://cdn.lordicon.com/qgebwute.json"
            trigger="hover"
            stroke="light"
            colors="primary:#b4b4b4,secondary:#08a88a"
          ></lord-icon>
        ) : (
          <lord-icon
            src="https://cdn.lordicon.com/qgebwute.json"
            trigger="hover"
            stroke="light"
            colors="primary:#545454,secondary:#08a88a"
          ></lord-icon>
        )}
      </span>

        
    <span className="cursor-pointer">
        {isDark ? (
      <lord-icon
         src="https://cdn.lordicon.com/yizwahhw.json"
         trigger="hover"
         stroke="bold"
         colors="primary:#ffffff,secondary:#08a88a">
        </lord-icon>
        ) : (
        <lord-icon
            src="https://cdn.lordicon.com/yizwahhw.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#e4e4e4,secondary:#08a88a">
        </lord-icon>
        )}
      </span>
        
        <span className="cursor-pointer">
        {isDark ? (
        <lord-icon
         src="https://cdn.lordicon.com/jjxzcivr.json"
         trigger="hover"
         stroke="bold"
         colors="primary:#ffffff,secondary:#08a88a">
        </lord-icon>
        ) : (
      <lord-icon
         src="https://cdn.lordicon.com/jjxzcivr.json"
         trigger="hover"
         stroke="bold"
         colors="primary:#545454,secondary:#08a88a">
      </lord-icon>
        )}
      </span>
        
        <span className="cursor-pointer">
        {isDark ? (
    <lord-icon
        src="https://cdn.lordicon.com/vpbspaec.json"
        trigger="hover"
        colors="primary:#e4e4e4,secondary:#08a88a">
    </lord-icon>
        ) : (
    <lord-icon
        src="https://cdn.lordicon.com/vpbspaec.json"
        trigger="hover"
        colors="primary:#545454,secondary:#08a88a">
    </lord-icon>
        )}
      </span>
    </div>
  )
}

export default Logos