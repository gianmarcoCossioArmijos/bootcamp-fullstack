import React, { useContext, useEffect, useState } from 'react'

import { deleteExpense, getExpenses } from '../services/expenses'
import { getUser } from '../services/budget.js';

import MonitorBudget from '../components/MonitorBudget';
import { UserContext } from '../context/UserContext';

import { GoTag } from "react-icons/go";

const Home = () => {
  const { user } = useContext(UserContext);

  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  
  useEffect(() => {

    getUser(user.id)
      .then((data) => setBudget(data))

    getExpenses()
      .then((data) => setExpenses(data))
  }, [])

  const handleDelete = (id) => {

    deleteExpense(id)
      .then(data => {
        
      })
  }

  return (
    <div className='p-4 flex flex-col gap-6 min-h-[500px]'>

        <MonitorBudget 
          budget={budget}
          expenses={expenses}
        />

        <div className='flex gap-1'>
          <GoTag className='w-[25px] h-[25px] self-center'/>
          <h1 className='font-bold text-2xl'>Expenses</h1>
        </div>

        <div className='flex flex-col gap-6'>
          {expenses.map(expense => {
            
              return (
                <div key={expense.id} className='my-1 p-3 flex justify-between border-2 border-slate-300 rounded-lg'>
                  
                  <div className='flex gap-2'> 
                    <h4 className='self-center font-bold'>• {expense.name}:</h4>
                    <span className='self-center'>{expense.amount}</span>
                  </div>

                  <button
                        className='w-32 pb-1 bg-orange-400 rounded-lg self-end text-black'
                        onClick={() => handleDelete(expense.id)}>
                    Delete
                  </button>
                </div>
              )
            }
          )}
        </div>
    </div>
  )
}

export default Home