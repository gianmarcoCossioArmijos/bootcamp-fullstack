import React from 'react'

const TodoList = ({ todos, handleCheck, handleDelete }) => {
  return (
    <>
        <ul className="flex flex-col gap-2">
            {todos.map(todo => {
                return (
                
                        <TodoItem
                            key={todo.id}
                            todos={todo}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                            />

                        )
            })}
        </ul>
    </>
  )
}

export default TodoList