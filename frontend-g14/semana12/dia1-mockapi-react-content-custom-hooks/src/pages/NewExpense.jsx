import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { GoTag } from "react-icons/go";

import { UserContext } from '../context/UserContext.jsx'
import { createExpense } from '../services/expenses.js';

const NewExpense = () => {
  const { user } = useContext(UserContext);

  const [form, setForm] = useState({
    name: "",
    amount: ""
  })

  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const handleChange = (event) => {

    const value = event.target.value;
    const name = event.target.name;
    setForm({...form, [name]: value})
  }

  const handleSubmit = async (event) => {

    event.preventDefault();

    const name = form.name
    const amount = form.amount

    createExpense(name, amount)
      .then(() => {
        MySwal.fire({
          icon: 'success',
          title: 'Expense Saved Successfully!',
          confirmButtonColor: ' #475569',
        })
        .then(() => {
          navigate('/')
        })
      })
      .catch((err) => {
        MySwal.fire({
          icon: 'error',
          title: 'Error Saving Expense!',
          confirmButtonColor: ' #475569',
        })
      })
  }

  return (
    <div className='p-4 flex flex-col gap-6 min-h-[500px]'>

        <div className='flex gap-1'>
          <h1 className='font-bold text-2xl'>New Expense</h1>
          <GoTag className='w-[25px] h-[25px] self-center'/>
        </div>

        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <label className='flex flex-col gap-2'>
            Name
            <input
                  type="text"
                  name='name'
                  value={form?.name}
                  onChange={handleChange}
                  className='p-4 bg-slate-100 rounded-lg'
                  placeholder='Insert expense name'
                  required/>
          </label>

          <label className='flex flex-col gap-2'>
            Amount
            <input
                  type="number"
                  name='amount'
                  value={form?.amount}
                  onChange={handleChange}
                  className='p-4 bg-slate-100 rounded-lg'
                  placeholder='Insert expense amount'
                  required/>
          </label>

          <input
                type="submit"
                className='w-40 p-2 bg-orange-400 rounded-lg self-end text-black cursor-pointer'
                value="Save Expense"/>
        </form>
    </div>
  )
}

export default NewExpense