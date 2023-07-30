
import { useState } from "react" // Ayuda a saber cuando cambian las variables

function App() {

  // Hook Basico
  // Hooks -- todos(leer info), setTodos(editar info)
  const DEFAULT_TODOS = [
    {
      "id": "1",
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": "2",
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
        "id": "3",
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "id": "4",
        "title": "et porro tempora",
        "completed": true
    },
    {
        "id": "5",
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    }
  ]

  // Crea variable de solo lectura, y crea una funcion
  const [todos, setTodos] = useState(DEFAULT_TODOS);
  const [input, setInput] = useState("");

  const newTodo = {
    "id": crypto.randomUUID(),
    "title": input,
    "completed": false
  }

  const handleChange = (event) => {

    const value = event.target.value;
    setInput(value);
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    setTodos([...todos, newTodo]); // Spred operator(...objeto)
    setInput("")
  }

  const handleCheck = (event) => {

    const isCompleted = event.target.checked;
    const idSelected = event.target.dataset.id;

      const newTodos = todos.map(todo => {

        if(todo.id === idSelected){

          return {...todo, completed: isCompleted}; // Spred operator(...valores anteriores + nuevo dato)
        }
        return todo;
      })

    setTodos(newTodos);
  }

  const handleDelete = (event) => {

    const idSelected = event.target.dataset.id;
    const newTodos = todos.filter(todo => todo.id !== idSelected)
    setTodos(newTodos);
  }

  const completedTodos = () => {

    const completed = todos.filter(todo => todo.completed === true);
    return completed.length;
  }

  const handleDeleteCompleteds = () => {

    const newTodos = todos.filter(todo => todo.completed === false);
    setTodos(newTodos);
  }

  return (
    <>
      <main className="w-full max-w-sm mx-auto mt-10 px-3 py-4 rounded-lg bg-yellow-200/50 border border-yellow-700 shadow-lg">
        <h1 className="text-2xl font-bold py-2 text-center bg-blue-200 rounded-lg">
          TO DO LIST
        </h1>

        <form onSubmit={handleSubmit}>
          <input type="text"
                 className="w-full border border-slate-200 p-2 my-2 rounded-lg"
                 placeholder="Que deseas hacer hoy?"
                 value={input}
                 onChange={handleChange}
                 required/>
        </form>

        <div className="flex justify-between py-2">
          <span
            className="p-2 font-bold">
            {completedTodos()} / {todos.length}
          </span>
          <button
            className="p-2 bg-red-500 hover:bg-red-600 border border-red-600 rounded-lg text-white"
            onClick={handleDeleteCompleteds}
            >
            Limpiar tareas completadas
          </button>
        </div>

        <section className="py-2">

          {/*{JSON.stringify(todos)}*/}

          <ul className="flex flex-col gap-2">
            {todos.map(todo => {
              return (
                      <li 
                        className="w-full flex p-1 rounded-md" 
                        key={todo.id}
                        >
                          <input 
                              type="checkbox"
                              className="mr-4"
                              onChange={handleCheck}
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
                              onClick={handleDelete}>
                              🗑️
                            </button>

                          </div>
                      </li>
                      )
            })}
          </ul>

        </section>
      </main>
    </>
  )
}

export default App;