import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 

function MyApp(){
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}
const anotherElement=(
  <a href="https://google.com" target='_blank'> Visited Google</a>
)
const anotheruser=" Satyam Singh"
const reactElement=React.createElement(
  'a',/*  tags */
  {
    href:'https://www.google.com',/*it add properties to the element just like set attribute*/
    target:'_v=blank', 
  },
  'Click here to visit example.com',
   anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
   reactElement
  
)
