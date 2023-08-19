import React from 'react'
import { Link } from 'react-router-dom';

import { AiFillCaretDown } from "react-icons/ai";
import Icon from "../Icon"

const InvoicesHeader = () => {
  return (
    <>
        <header className="flex justify-between m-auto py-6 text-white">

            <Link to="/">
                <div>
                    <h1 className="text-4xl font-bold">Invoices</h1>
                </div>
            </Link>

            <div className="flex gap-4">
                <div className="flex gap-2">
                    <span className="m-auto">Filter by status</span>
                    <AiFillCaretDown className='flex self-center'/>
                </div>

                <Link to="/new-invoice">
                    <button className="px-4 py-2 flex gap-2 align-middle rounded-full bg-violet-600">
                        <Icon />
                        <span className="m-auto">New invoice</span>
                    </button>
                </Link>
            </div>

        </header>
    </>
  )
}

export default InvoicesHeader