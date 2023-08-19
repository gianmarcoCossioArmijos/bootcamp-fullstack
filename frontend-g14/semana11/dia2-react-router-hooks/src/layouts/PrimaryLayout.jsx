import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { AiFillHome } from "react-icons/ai";

const PrimaryLayout = () => {
  return (
    <>
        <header className='px-6 flex justify-between rounded-b-lg bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 border-2 border-yellow-300 text-blue-950'>

            <img
                    className='w-32 my-auto'
                    src="https://i.pinimg.com/originals/d8/43/ad/d843addbfcec31846d8699feebcf358b.png"
                    alt="logo" />

            <Link to="/" className='my-auto'>
                <AiFillHome className='w-8 h-8'/>
            </Link>

            <nav className='my-auto flex gap-3 text-lg font-bold'>
                <Link
                    className='py-2'
                    to="/login">
                    Login
                </Link>
                <Link
                    className='py-2'
                    to="/register">
                    Registrar
                </Link>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer className='py-12 text-center'>
            <span>Gianmarco Cossio 2023</span>
        </footer>
    </>
  )
}

export default PrimaryLayout