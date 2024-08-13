import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([
    'Go to the gym',
    'Drink 3l of water'
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
