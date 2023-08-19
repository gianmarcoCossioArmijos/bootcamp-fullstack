import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import BaseButton from '../components/invoices/BaseButton'

import { createNewInvoice } from '../services/fetchNewInvoice.js'

const NewInvoice = () => {
  const [form, setForm] = useState({
    billFromStreetAdress: "",
    billFromCity: "",
    billFromPostCode: "",
    billFromCountry: "",
    billToClientsName: "",
    billToClientsEmail: "",
    billToStreetAdress: "",
    billToCity: "",
    billToPostCode: "",
    billToCountry: "",
    billToInvoiceDate: "",
    billToPaymentTerms: "",
    billToProjectDescription: "",
    itemListItemName: "",
    itemListQuantity: "",
    itemListPrice: "",
  })

  const handleChange = (event) => {

    const { name, value } = event.target;

    setForm({ ...form,[name]: value })
   }

   const handleSubmit = async (event) => {

    event.preventDefault();

    const newForm = {
      "code": "ABC123",
      "status": "draft",
      "bill": {
          "from": {
              "streetAddress": form.billFromStreetAdress,
              "city": form.billFromCity,
              "postCode": form.billFromPostCode,
              "country": "-"
          },
          "to": {
              "client": {
                  "name": form.billToClientsName,
                  "email": form.billToClientsEmail
                  },
              "streetAddress": form.billToStreetAdress,
              "city": form.billToCity,
              "postCode": form.billToPostCode,
              "country": "-"
          }
      },
      "invoice": {
          "date": form.billToInvoiceDate,
          "paymentTerms": form.billToPaymentTerms,
          "project": {
              "description": form.billToProjectDescription
          },
          "grandTotal": 0.00,
          "currency": {
              "symbol": "$"
          },
          "items": [
              
          ]
      }
    }

    const response = await createNewInvoice(newForm);
    console.log(response);
   }

  return (
    <>
        <nav className='my-6'>
          <Link to="/">
            <span className='text-white'>Go back</span>
          </Link>
        </nav>

        <section className='my-6 py-3 px-8 flex flex-col gap-6 text-white'>
          
          <div>
            <h3 className='font-bold text-2xl'>
              New Invoice
            </h3>
          </div>

          <form className='flex flex-col gap-3' onSubmit={handleSubmit}>

            <h4 className='font-bold text-xl text-[#7763df]'>
              Bill From
            </h4>

            <label className='flex flex-col gap-1'>
              Street Adress
              <input
                    type="text"
                    name='billFromStreetAdress'
                    onChange={handleChange}
                    className='p-3 bg-slate-800 rounded-lg'/>
            </label>

            <div className='flex justify-between'>
              <label className='flex flex-col gap-1'>
                City
                <input
                      type="text"
                      name='billFromCity'
                      onChange={handleChange}
                      className='p-3 bg-slate-800 rounded-lg'/>
              </label>

              <label className='flex flex-col gap-1'>
                Post Code
                <input
                      type="text"
                      name='billFromPostCode'
                      onChange={handleChange}
                      className='p-3 bg-slate-800 rounded-lg'/>
              </label>

              <label className='flex flex-col gap-1'>
                Country
                <select
                      name="billFromCountry"
                      onChange={handleChange}
                      className='p-3 bg-slate-800 rounded-lg'>

                  <option value="pe">Peru</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ch">Chile</option>
                  <option value="arg">Argentina</option>
                </select>
              </label>
            </div>

            <h4 className='font-bold text-xl text-[#7763df]'>Bill To</h4>

            <label className='flex flex-col gap-1'>
              Client's Name
              <input
                    type="text"
                    name='billToClientsName'
                    onChange={handleChange}
                    className='p-3 bg-slate-800 rounded-lg'/>
            </label>

            <label className='flex flex-col gap-1'>
              Client's Email
              <input
                    type="text"
                    name='billToClientsEmail'
                    onChange={handleChange}
                    className='p-3 bg-slate-800 rounded-lg'/>
            </label>

            <label className='flex flex-col gap-1'>
              Street Adress
              <input
                    type="text"
                    name='billToStreetAdress'
                    onChange={handleChange}
                    className='p-3 bg-slate-800 rounded-lg'/>
            </label>

            <div className='flex justify-between'>

              <label className='flex flex-col gap-1'>
                City
                <input
                      type="text"
                      name='billToCity'
                      onChange={handleChange}
                      className='p-3 bg-slate-800 rounded-lg'/>
              </label>

              <label className='flex flex-col gap-1'>
                Post Code
                <input
                      type="text"
                      name='billToPostCode'
                      onChange={handleChange}
                      className='p-3 bg-slate-800 rounded-lg'/>
              </label>

              <label className='flex flex-col gap-1'>
                Country
                <select
                      name="billToCountry"
                      onChange={handleChange}
                      className='p-3 bg-slate-800 rounded-lg'>

                  <option value="pe">Peru</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ch">Chile</option>
                  <option value="arg">Argentina</option>
                </select>
              </label>
            </div>

            <div className='flex gap-4'>
              <label className='w-1/2 flex flex-col gap-1'>
                Invoice Date
                <input
                    type="date"
                    name="billToInvoiceDate"
                    onChange={handleChange}
                    className='p-3 bg-slate-800 rounded-lg'/>
              </label>

              <label className='w-1/2 flex flex-col gap-1'>
                Payment Terms
                <select
                      name="billToPaymentTerms"
                      onChange={handleChange}
                      className='flex gap-1 p-3 bg-slate-800 rounded-lg'>
                  
                  <option value="15">Next 15 days</option>
                  <option value="30">Next 30 days</option>
                  <option value="60">Next 60 days</option>
                </select>
              </label>
            </div>

            <label className='flex flex-col gap-1'>
              Project Description
              <input
                  type="text"
                  name="billToProjectDescription"
                  onChange={handleChange}
                  className='p-3 bg-slate-800 rounded-lg'/>
            </label>

            <h4 className='font-bold text-xl text-[#7763df]'>Item List</h4>

            <div className='flex justify-between gap-4'>
              <label className='w-36 flex flex-col gap-1'>
                Item Name
                <input
                    type="text"
                    name="itemListItemName"
                    onChange={handleChange}
                    className='p-3 bg-slate-800 rounded-lg'/>
              </label>

              <label className='w-24 flex flex-col gap-1'>
                Qty.
                <input
                  type="text"
                  name="itemListQuantity"
                  onChange={handleChange}
                  className='p-3 bg-slate-800 rounded-lg'/>
              </label>

              <label className='w-36 flex flex-col gap-1'>
                Price
                <input
                  type="text"
                  name="itemListPrice"
                  onChange={handleChange}
                  className='p-3 bg-slate-800 rounded-lg'/>
              </label>

              <label className='w-36 flex flex-col gap-1'>
                Total
                <input
                  type="text"
                  name="itemListPrice"
                  onChange={handleChange}
                  className='p-3 bg-slate-800 rounded-lg'/>
              </label>
            </div>

            <div className='my-2 p-3 bg-slate-800 rounded-full text-center'>
              + Add New Item
            </div>

            <div className='my-4 flex justify-end gap-4'>
              <BaseButton>cancel</BaseButton>
              <BaseButton>save changes</BaseButton>
            </div>

          </form>
        </section>
    </>
  )
}

export default NewInvoice