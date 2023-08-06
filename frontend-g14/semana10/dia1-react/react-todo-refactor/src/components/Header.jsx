import React from 'react'

const Header = (props) => {
  return (
    <>
        <header>
          <h1 className="text-2xl font-bold py-2 text-center bg-blue-200 rounded-lg">
            {props.title} 📋
          </h1>
        </header>
    </>
  )
}

export default Header