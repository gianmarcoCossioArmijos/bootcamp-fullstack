import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { GoPasskeyFill } from "react-icons/go";

import useAuth from '../hooks/useAuth.js';
import { UserContext } from '../context/UserContext.jsx'

const Login = () => {
  const { saveUSer } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const MySwal = withReactContent(Swal);
  // const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleChange = (event) => {

    const value = event.target.value;
    const name = event.target.name;
    setForm({...form, [name]: value})
  }

  const handleSubmit = async (event) => {

    event.preventDefault();
    const url = `https://64de5d21825d19d9bfb283e7.mockapi.io/api/v1/users/?email=${form.email}&password=${form.password}`;
    const response = await fetch(url);
    const data = await response.json();
    setForm({email: "", password: ""})

    if (data.length > 0) {

      const cloneData = {...data[0]};
      delete cloneData.password;
      // setAuth(cloneData);
      saveUSer(cloneData);
      navigate("/");
    } else {

      navigate("/login");
    
      MySwal.fire({
        title: 'The entered credentials are incorrect',
        icon: 'error',
        confirmButtonColor: ' #475569',
      })
    }
  }

  return (
    <div className='p-4 flex flex-col gap-6 min-h-[500px]'>

        <div className='flex gap-1'>
          <h1 className='font-bold text-2xl'>Login</h1>
          <GoPasskeyFill className='w-[25px] h-[25px] self-center'/>
        </div>

        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <label className='flex flex-col gap-2'>
            Email
            <input
                  type="email"
                  name='email'
                  value={form?.email}
                  onChange={handleChange}
                  className='p-4 bg-slate-100 rounded-lg'
                  placeholder='example@email'
                  required/>
          </label>

          <label className='flex flex-col gap-2'>
            Password
            <input
                  type="password"
                  name='password'
                  value={form?.password}
                  onChange={handleChange}
                  className='p-4 bg-slate-100 rounded-lg'
                  required/>
          </label>

          <input
                type="submit"
                className='w-40 p-2 bg-orange-400 rounded-lg self-end text-black cursor-pointer'
                value="Login"/>
        </form>
    </div>
  )
}

export default Login