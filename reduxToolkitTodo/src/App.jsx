import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  function App() {
  const [todos, setTodos] = useState([]);
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((t)=>(t.id===id?todo:t)))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!=id))

  }
  const toggleComplete=(id)=>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
  useEffect(()=>{
    const todos =JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
}

  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
