import React from 'react'

const Stats = ({ todos, completeds }) => {

    const completed = todos.filter(todo => todo.completed === true).length;

  return (
    <>
        <div className="flex justify-between py-2">
          <span
            className="p-2 font-bold">
            {completed} / {todos.length}
          </span>
          <button
            className="p-2 bg-red-500 hover:bg-red-600 border border-red-600 rounded-lg text-white"
            onClick={completeds}
            >
            Limpiar tareas completadas
          </button>
        </div>
    </>
  )
}

export default Stats