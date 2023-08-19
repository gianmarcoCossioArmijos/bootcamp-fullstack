import React from 'react'

import { GoTag } from "react-icons/go";
import { GoPaste } from "react-icons/go";
import { GoLaw } from "react-icons/go";

const MonitorBudget = ({ budget, expenses }) => {

    const total = expenses.reduce(
        (acumulador, valorActual) => acumulador + Number(valorActual.amount), 0)

  return (
    <section className='flex flex-col gap-4'>
        
        <div className='p-3 flex gap-6 justify-center bg-orange-100 rounded-lg'>
            <GoPaste className='w-[35px] h-[35px] self-center'/>
            <div>
                <span className='text-xl'>{budget}</span>
                <h5 className='font-bold'>Budget</h5>
            </div>
        </div>

            
        <div className='p-3 flex gap-6 justify-center bg-orange-100 rounded-lg'>
            <GoTag className='w-[35px] h-[35px] self-center'/>
            <div>
                <span className='text-xl'>{total}</span>
                <h5 className='font-bold'>Expenses</h5>
            </div>
        </div>

            
        <div className='p-3 flex gap-6 justify-center bg-orange-100 rounded-lg'>
            <GoLaw className='w-[35px] h-[35px] self-center'/>
            <div>
                <span className='text-xl'>{budget - total}</span>
                <h5 className='font-bold'>Balance</h5>
            </div>
        </div>

    </section>
  )
}

export default MonitorBudget