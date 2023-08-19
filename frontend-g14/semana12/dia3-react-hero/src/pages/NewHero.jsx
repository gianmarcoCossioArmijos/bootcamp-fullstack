import React, { useState } from 'react'

import { HiFire } from "react-icons/hi";

import { useHero } from '../hooks/useHero';
import { useNavigate } from 'react-router-dom';

const NewHero = () => {
    const [form, setForm] = useState({
        name: "",
        image: ""
    })

    const { createHero } = useHero();
    const navigate = useNavigate();

    const handleChange = (event) => {

        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        const response = await createHero(form);

        console.log(response);
        setForm({
            name: "",
            image: ""
        })
        navigate("/")
    }
    
  return (
    <>
        <div className='p-4 flex flex-col gap-6 min-h-[500px]'>

            <div className='flex gap-1'>
                <HiFire className='w-[25px] h-[25px] self-center'/>
                <h1 className='font-bold text-2xl'>New Hero</h1>
            </div>

            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <label className='flex flex-col gap-2'>
                    Name
                    <input
                        type="name"
                        name='name'
                        onChange={handleChange}
                        value={form.name}
                        className='p-4 bg-slate-100 rounded-lg'
                        placeholder=''
                        required/>
                </label>

                <label className='flex flex-col gap-2'>
                    Image
                    <input
                        type="url"
                        name='image'
                        onChange={handleChange}
                        value={form.image}
                        className='p-4 bg-slate-100 rounded-lg'
                        placeholder=''
                        required/>
                </label>

                <input
                        type="submit"
                        className='w-40 p-2 bg-green-400 rounded-lg self-end text-black cursor-pointer'
                        value="Save Hero"/>
            </form>
        </div>
    </>
  )
}

export default NewHero