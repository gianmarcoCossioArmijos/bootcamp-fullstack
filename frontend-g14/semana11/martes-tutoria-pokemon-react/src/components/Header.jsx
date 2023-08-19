import React from 'react'

const Header = (props) => {
  return (
    <>
        <header className='mx-12 bg-gradient-to-r from-blue-300 via-white to-blue-300 border-2 border-blue-300 rounded-lg'>
            <img
                className='w-32 m-auto'
                src="https://i.pinimg.com/originals/d8/43/ad/d843addbfcec31846d8699feebcf358b.png"
                alt="logo" />
        </header>

        <main>
            {props.children}
        </main>
    </>
  )
}

export default Header