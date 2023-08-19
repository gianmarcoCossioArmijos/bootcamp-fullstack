import React from 'react'

import { Link } from 'react-router-dom'

const LayoutBase = (props) => {
  return (
    <>
        <header>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Registro</Link>
        </header>

        <main>
            {props.children}
        </main>
    </>
  )
}

export default LayoutBase