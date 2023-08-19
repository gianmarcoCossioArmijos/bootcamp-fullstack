import React from 'react'

import { Link } from 'react-router-dom'

import { useUser } from '../hooks/useUser.js'

const Login = () => {

    const { login } = useUser();

  return (
    <>

        <Link
            to="/"
            className='hover:text-green-400'
            onClick={login}>

            <h1 className="font-bold">Login</h1>
        </Link>

    </>
  )
}

export default Login