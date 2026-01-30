import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  let[counter, setcounter]=useState(15)
 
//let counter = 5
const addvalue = () =>{
  console.log("button clicked",counter);

   //counter = counter + 1
   setcounter(counter + 1)

}
const removevalue = () =>{
  console.log("button clicked",counter);
  if(counter>0){
   //counter = counter - 1
   setcounter (counter - 1)}}
  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter value :{counter}</h2>

        <button onClick={addvalue}>Add value{counter}</button>
        
        <br/>
        <button onClick ={removevalue}>remove value{counter}</button>
        <p>Footer:{counter}</p>
      
    </>
  )
}

export default App
