import React, { useState } from 'react'

import { GoPersonFill } from "react-icons/go";

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullname: '',
    budget: 0,
  })

  const handleChange = (event) => {

    const value = event.target.value;
    const name = event.target.name;
    setForm({...form, [name]: value})
  }

  const handleSubmit = async (event) => {

    event.preventDefault();
    const url = 'https://64de5d21825d19d9bfb283e7.mockapi.io/api/v1/users';

    const options = {
      method: "POST",
      headers : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    }

    const response = await fetch(url, options);
    const data = await response.json();
    setForm({email: '', password: '', fullname: ''});
  }

  return (
    <div className='p-4 flex flex-col gap-6 min-h-[500px]'>

        <div className='flex gap-1'>
          <h1 className='font-bold text-2xl'>Register</h1>
          <GoPersonFill className='w-[25px] h-[25px] self-center'/>
        </div>

        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <label className='flex flex-col gap-2'>
            Fullname
            <input
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  value={form?.fullname}
                  className='p-4 bg-slate-100 rounded-lg'
                  placeholder='Enter fullname'
                  required/>
          </label>

          <label className='flex flex-col gap-2'>
            Email
            <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={form?.email}
                  className='p-4 bg-slate-100 rounded-lg'
                  placeholder='Enter email'
                  required/>
          </label>

          <label className='flex flex-col gap-2'>
            Password
            <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={form?.password}
                  className='p-4 bg-slate-100 rounded-lg'
                  placeholder='Enter password'
                  required/>
          </label>

          <input
                type="submit"
                className='w-40 p-2 bg-orange-400 rounded-lg self-end text-black cursor-pointer'
                value="Register"/>
        </form>
    </div>
  )
}

export default Register