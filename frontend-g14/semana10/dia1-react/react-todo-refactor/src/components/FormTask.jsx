import React, { useState } from 'react'

const FormTask = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {

    const value = event.target.value;
    setInput(value);
  }

  const handleSubmit = (event) => {

    event.preventDeafult();

    const newTodo = {
      "id": crypto.randomUUID(),
      "title": input,
      "completed": false
    }

    onSubmit(newTodo);
    setInput("");
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <input type="text"
                 className="w-full border border-slate-200 p-2 my-2 rounded-lg"
                 placeholder="Que deseas hacer hoy?"
                 value={input}
                 onChange={handleChange}
                 required/>
        </form>
    </>
  )
}

export default FormTask