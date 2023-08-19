import React from 'react'
import { Outlet } from 'react-router-dom'

import InvoicesHeader from '../components/invoices/InvoicesHeader' 

const PrimaryLayout = () => {
  return (
    <>
        <InvoicesHeader />

        <main>
            <Outlet />
        </main>

        <footer className='py-8 text-slate-700 text-center'>
            <span>Gianmarco Cossio - 2023</span>
        </footer>
    </>
  )
}

export default PrimaryLayout