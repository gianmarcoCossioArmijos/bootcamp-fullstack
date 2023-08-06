import React from 'react'

import  Icon from "../Icon";
import IconArrow from "../IconArrow";
import { countInvoices } from "../../services/totalInvoices";

const InvoicesHeader = ({ invoices }) => {
  return (
    <>
        <header className="w-[740px] flex justify-between m-auto py-6 text-white">

            <div className='flex flex-col gap-1'>
                <h1 className="text-4xl font-bold">Invoices</h1>
                <span>There are {countInvoices(invoices)} total invoices</span>
            </div>

            <div className="flex gap-4">
                <div className="flex gap-2">
                    <span className="m-auto">Filter by status</span>
                    <IconArrow />
                </div>

                <button className="px-4 flex gap-2 align-middle rounded-full bg-violet-600">
                    <Icon />
                    <span className="m-auto">New invoice</span>
                </button>
            </div>

        </header>
    </>
  )
}

export default InvoicesHeader