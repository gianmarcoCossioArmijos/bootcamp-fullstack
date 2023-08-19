import React from 'react'
import { Link } from 'react-router-dom'

import { AiFillHome } from "react-icons/ai";

const ErrorPage = () => {
  return (
    <main className='w-full h-screen flex flex-col justify-center text-center bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 text-blue-950 font-bold font-mono'>
        
        <h1 className='text-4xl'>Not Found Pokepage :(</h1>

        <Link to="/" className='mx-auto my-4'>
          <AiFillHome className='w-8 h-8'/>
        </Link>

    </main>
  )
}

export default ErrorPage