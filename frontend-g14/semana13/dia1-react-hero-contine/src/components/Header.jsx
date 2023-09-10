import React from 'react'
import { Link } from 'react-router-dom';

import { HiFire } from "react-icons/hi";

import { useUser } from '../hooks/useUser.js'
import Login from '../pages/Login';

const Header = () => {
    
const { logout } = useUser();

  return (
    <>
        <header className="m-auto py-6 px-4 flex justify-between bg-white rounded-lg">

            <div className='flex gap-2'>
                <HiFire className='self-center w-[35px] h-[35px]'/>
                <h1 className="text-2xl font-bold">Heros App</h1>
            </div>

                
            <div className='flex gap-4'>
                <Login />

                <Link
                    to="/new-hero"
                    className='hover:text-green-400'
                    >
                    <h1 className="font-bold">New Hero</h1>
                </Link>

                <button
                    className='p-2 bg-green-400 rounded-lg shadow-md text-black'
                    onClick={logout}>
                    <h1 className="font-bold hover:text-slate-700">Logout</h1>
                </button>
            </div>

        </header>
    </>
  )
}

export default Header