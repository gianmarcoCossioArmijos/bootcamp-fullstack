import React from 'react'

const Header = ({ title }) => {
  return (
    <>
        <h1 className='w-full px-4 py-2 bg-[#F22539] text-white text-xl font-bold'>{title}</h1>
    </>
  )
}

export default Header