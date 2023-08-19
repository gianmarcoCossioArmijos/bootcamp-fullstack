import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext.jsx'
import { getUser } from '../services/budget.js';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { GoPaste } from "react-icons/go";

const NewBudget = () => {
  const { user } = useContext(UserContext);

  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    budget: ""
  })

  useEffect(() => {

    getUser(user.id)
        .then(budget => setForm({ budget }));
  },[])

  const handleChange = (event) => {

    const value = event.target.value;
    const name = event.target.name;
    setForm({...form, [name]: value})
  }

  const handleSubmit = async (event) => {

    event.preventDefault();

    const budget = form.budget;
    const url = `https://64de5d21825d19d9bfb283e7.mockapi.io/api/v1/users/${user.id}`;
    
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({budget})
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    
    MySwal.fire({
        title: 'Budget Updated Successfully',
        icon: 'success',
        confirmButtonColor: ' #475569',
      })
  }

  return (
    <div className='p-4 flex flex-col gap-6 min-h-[500px]'>

        <div className='flex gap-1'>
          <GoPaste className='w-[25px] h-[25px] self-center'/>
          <h1 className='font-bold text-2xl'>New Budget</h1>
        </div>

        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <label className='flex flex-col gap-2'>
            Budget
            <input
                  type="number"
                  name='budget'
                  value={form?.budget}
                  onChange={handleChange}
                  className='p-4 bg-slate-100 rounded-lg'
                  placeholder=''
                  required/>
          </label>

          <input
                type="submit"
                className='w-40 p-2 bg-orange-400 rounded-lg self-end text-black cursor-pointer'
                value="Save Budget"/>
        </form>
    </div>
  )
}

export default NewBudget