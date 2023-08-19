import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { GoLog } from "react-icons/go";

// import useAuth from "../hooks/useAuth.js"
import { UserContext } from '../context/UserContext.jsx'

const Header = () => {
    // const { logout, isAuth } = useAuth()
    const navigate = useNavigate();
    const { user, cleanUSer } = useContext(UserContext);

    const handleLogout = () => {
        cleanUSer();
        navigate("/login");
    }

  return (
    <>
        <header className="m-auto py-6 px-4 flex justify-between bg-white rounded-lg">

            <div className='flex gap-2'>
                <GoLog className='self-center'/>
                <h1 className="text-2xl font-bold">Badgets App</h1>
            </div>

            {user?.email && (
                
                <div className='flex gap-4'>
                    <Link to="/" className='self-center hover:text-orange-400'>
                        <h1 className="font-bold">Home</h1>
                    </Link>

                    <Link to="/new-budget" className='self-center hover:text-orange-400'>
                        <h1 className="font-bold">New Budget</h1>
                    </Link>

                    <Link to="/new-expense" className='self-center hover:text-orange-400'>
                        <h1 className="font-bold">New Expense</h1>
                    </Link>

                    <button
                        className='p-2 bg-orange-400 rounded-lg text-black'
                        onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            )}

            {!user?.email && (

                <div className='flex gap-4'>
                    <Link to="/login" className='self-center hover:text-orange-400'>
                        <h1 className="font-bold">Login</h1>
                    </Link>
                    <Link to="/register" className='self-center hover:text-orange-400'>
                        <h1 className="font-bold">Register</h1>
                    </Link>
                </div>
            )}

        </header>
    </>
  )
}

export default Header