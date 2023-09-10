import React from 'react'

import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const LayoutBase = (props) => {

    const navigate = useNavigate();

  return (
    <div className='max-w-[800px] min-h-screen mx-auto'>
        
        <Header />

        <main className='bg-white rounded-lg my-4'>
            {props.children}
        </main>

        <footer className='py-8 text-slate-700 text-center'>
            <span>Gianmarco Cossio - 2023</span>
        </footer>

    </div>
  )
}

export default LayoutBase