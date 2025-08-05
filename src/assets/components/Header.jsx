import React from 'react'

const Header = () => {
  return (
    <header className = 'bg-[#F55A5A] flex justify-center text-white h-[55px] items-center'>
      <img className = 'w-6 mr-2' src="src/assets/images/globe_image.svg" alt="globe icon" />
      <h1 className = 'text-xl font-bold font-serif'>My Travel Journal</h1>
    </header>
  )
}

export default Header