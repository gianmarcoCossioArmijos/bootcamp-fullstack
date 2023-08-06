
import { useState } from "react" // Ayuda a saber cuando cambian las variables
import Header from "./components/Header";
import FormTask from "./components/FormTask";
import Stats from "./components/Stats";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

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

  const handleDeleteCompleteds = () => {
    
    const newTodos = todos.filter(todo => todo.completed === false);
    setTodos(newTodos);
  }

  const handleSubmit = (newTodo) => setTodos([...todos, newTodo]); // Spred operator(...objeto)

  return (
    <>
      <main className="w-full max-w-sm mx-auto mt-10 px-3 py-4 rounded-lg bg-yellow-200/50 border border-yellow-700 shadow-lg">
        
      <Header title="TODO APP"/>

        <FormTask onSubmit={handleSubmit}/>

        <Stats todos={todos}
              completeds={handleDeleteCompleteds}
              />

        <section className="py-2">

        <TodoList
              todos={todos}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />

        </section>
      </main>
    </>
  )
}

export default App;