import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  const todos = useSelector((state) => state.todos);
 
  
 
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
