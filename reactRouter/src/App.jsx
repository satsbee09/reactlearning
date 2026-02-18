import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Contactus from './components/Contactus/Contactus'    
import Aboutus from './components/AboutUs/Aboutus'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
      <Contactus/>
      <Aboutus/>  
    </>
  )
}

export default App
