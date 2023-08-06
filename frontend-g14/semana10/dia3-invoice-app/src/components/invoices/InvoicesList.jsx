import React from 'react'

import IconRightArrow from '../IconRightArrow';
import { formatNumber } from "../../utils/Index";
import InvoiceStatus from '../shared/InvoiceStatus';

const InvoicesList = ({ invoices }) => {

  return (
    <>
        <main className="w-[740px] m-auto py-4">
            {invoices.map(invoice => {

            return (
                <article key={invoice.id}
                    className="flex justify-between py-6 my-2 rounded-md bg-slate-800 text-white text-center">

                <h5 className='w-2/12 text-sm font-bold my-auto'>#{invoice.code}</h5>
                <h5 className='w-2/12 text-xs my-auto'>{invoice.invoice.date}</h5>
                <h5 className='w-2/12 text-xs my-auto'>{invoice.bill.to.client.name}</h5>
                <h3 className='w-3/12 px-8 font-bold text-xl my-auto text-right'>
                    {invoice.invoice.currency.symbol}
                    {formatNumber(invoice.invoice.grandTotal)}
                </h3>
                <InvoiceStatus label={invoice.status} />
                <IconRightArrow />

                </article>
            )
            })}
        </main>
    </>
  )
}

export default InvoicesList