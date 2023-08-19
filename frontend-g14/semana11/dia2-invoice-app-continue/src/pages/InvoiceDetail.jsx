import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import InvoiceStatus from '../components/shared/InvoiceStatus';
import BaseButton from '../components/invoices/BaseButton';
import { formatNumber } from "../utils/Index";

import { fetchInvoiceDetail } from '../services/fetchInvoiceDetail.js'

const InvoiceDetail = () => {
    const [invoiceDetail, setInvoiceDetail] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {

      fetchInvoiceDetail(id)
      .then(data => setInvoiceDetail(data));
  }, [])

  if(!invoiceDetail) return <h1>Not found Invoice</h1>

  return (
    <>
        <nav className='my-6'>
          <Link to="/">
            <span className='text-white'>Go back</span>
          </Link>
        </nav>

        <header className='my-6 py-3 px-8 flex justify-between bg-slate-800 rounded-lg text-white'>
          <div className='flex gap-2'>
            <h3 className='self-center'>Status</h3>
            <InvoiceStatus status={invoiceDetail.status} />
          </div>

          <div className='flex gap-2'>
          <BaseButton>edit</BaseButton>
          <BaseButton>delete</BaseButton>
          <BaseButton>paid</BaseButton>
          </div>
        </header>

        <section className='py-6 px-10 my-2 rounded-md bg-slate-800 text-white'>

          <header className='pt-2 pb-6 flex justify-between'>
            <div>
              <h5 className='text-m font-bold my-auto'>#{invoiceDetail.code}</h5>
              <h5 className='text-sm my-auto'>{invoiceDetail.invoice.project.description}</h5>
            </div>

            <div className='flex flex-col text-sm text-right'>
              <span>{invoiceDetail.bill.from.streetAddress}</span>
              <span>{invoiceDetail.bill.from.city}</span>
              <span>{invoiceDetail.bill.from.postCode}</span>
              <span>{invoiceDetail.bill.from.country}</span>
            </div>
          </header>

          <section className='pt-2 pb-12 grid grid-cols-3'>

            <div className='flex flex-col gap-14'>
              <div className='flex flex-col gap-1'>
                <span className='text-m'>Invoice Date</span>
                <span className='text-lg font-bold'>{invoiceDetail.invoice.date}</span>
              </div>

              <div className='flex flex-col gap-1'>
                <span className='text-m'>Payment Date</span>
                <span className='text-lg font-bold'>{invoiceDetail.invoice.paymentTerms}</span>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <span className='text-m'>Bill to</span>
              <span className='text-lg font-bold'>{invoiceDetail.bill.to.client.name}</span>
              <span className='text-sm text-left'>{invoiceDetail.bill.to.streetAddress}</span>
              <span className='text-sm text-left'>{invoiceDetail.bill.to.city}</span>
              <span className='text-sm text-left'>{invoiceDetail.bill.to.postCode}</span>
              <span className='text-sm text-left'>{invoiceDetail.bill.to.country}</span>
            </div>

            <div className='flex flex-col gap-1'>
              <span className='text-m'>Sent to</span>
              <span className='text-lg font-bold'>{invoiceDetail.bill.to.client.email}</span>
            </div>

          </section>

          <table className='w-full rounded-lg bg-slate-700'>
            
            <thead>
              <tr>
                <td className='px-8 py-4 text-left'>Item Name</td>
                <td className='px-8 py-4 text-center'>Quantity</td>
                <td className='px-8 py-4 text-right'>Price</td>
                <td className='px-8 py-4 text-right'>Total</td>
              </tr>
            </thead>
            
            <tbody>
              {invoiceDetail.invoice.items.map(item => {
                return (
                  <tr>
                    <td className='px-8 py-4 text-left  font-bold'>{item.name}</td>
                    <td className='px-8 py-4 text-center font-bold'>{item.qty}</td>
                    <td className='px-8 py-4 text-right font-bold'>
                      {invoiceDetail.invoice.currency.symbol}
                      {formatNumber(item.price)}
                    </td>
                    <td className='px-8 py-4 text-right font-bold'>
                      {invoiceDetail.invoice.currency.symbol}
                      {formatNumber(item.total)}
                    </td>
                  </tr>
                )
              })}
            </tbody>

            <tfoot className='bg-black'>
              <tr>
                <td className='px-8 py-8 font-bold' colSpan={3}>Amount Due</td>
                <td className='px-8 py-8 text-right text-2xl font-bold'>
                  {invoiceDetail.invoice.currency.symbol}
                  {formatNumber(invoiceDetail.invoice.grandTotal)}
                </td>
              </tr>
            </tfoot>

          </table>

        </section>
    </>
  )
}

export default InvoiceDetail