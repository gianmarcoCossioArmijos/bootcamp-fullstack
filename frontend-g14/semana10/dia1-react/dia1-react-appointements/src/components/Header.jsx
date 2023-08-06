import React from 'react'

const Header = ({ title }) => {
  return (
    <>
        <h3 className="text-3xl my-2 mx-4 py-4 px-4 rounded-full bg-sky-200">{title}</h3>
    </>
  )
}

export default Header