import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./style.css"
import { TodoList } from "./TodoList"
import CounterComponent from "./Counter"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })
  // console.log(todos.length);
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo({ newItem, selectedOption }) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), newItem, completed: false, selectedOption },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          console.log(todo)
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    // console.log(id)
    setTodos(currentTodos => {
      return currentTodos.filter(todo => { return todo.id !== id })
    })
  }

  function onSave(another, newItem, selectedOption) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), newItem: another, completed: false, selectedOption: selectedOption },
      ]
    });
  }
  function remove(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => { return todo.id !== id })
    })
  }
  const [count, setCount] = useState(0);
  function dec() {
    if (count < 1) return
    setCount(prev => prev - 1)
  }
  function inc() {
    if (count > 5) return

    setCount(maybe => maybe + 1)
  }

  return (
    <>
      <h1 className="header">Todo List</h1>
      <p>Total ToDo Items : {todos.length}</p>
      <NewTodoForm onSubmission={addTodo} />
      <br /><br />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} onSave={onSave} remove={remove} />
      <br />
      {/* <div className="align" >
        <button onClick={dec} className="btn">Minus</button>
        <h1 className="align">{count}</h1>
        <button onClick={inc} className="btn">Add</button>
      </div> */}
    </>
  )
}

