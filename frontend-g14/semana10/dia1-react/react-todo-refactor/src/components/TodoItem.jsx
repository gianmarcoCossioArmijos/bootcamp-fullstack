import React from 'react'

const TodoItem = ({ todo, onCheckeds, onDelete }) => {
  return (
    <>
        <li
            className="w-full flex p-1 rounded-md" 
            key={todo.id}
            >
                <input 
                    type="checkbox"
                    className="mr-4"
                    onChange={onCheckeds}
                    data-id={todo.id}
                    checked={todo.completed}/>

                          <div className="flex justify-between items-center w-full">

                <div
                    className={`${todo.completed ? 'line-through text-red-400' : ''}`}
                    >  
                    {todo.title}
                </div>

                <button
                    className="text-red-600 bg-red-500 hover:bg-red-600 border border-red-600 py-1 px-2 rounded-lg"
                    data-id={todo.id}
                    onClick={onDelete}>
                    🗑️
                </button>

                </div>
            </li>
    </>
  )
}

export default TodoItem