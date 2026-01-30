import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("#808000")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl">
        <button className="px-3 py-2 bg-red-500 rounded-lg text-white" onClick={() => setcolor("red")}>Red</button>
        <button className="px-3 py-2 bg-blue-500 rounded-lg text-white" onClick={() => setcolor("blue")}>Blue</button>
        <button className="px-3 py-2 bg-green-500 rounded-lg text-white" onClick={() => setcolor("green")}>Green</button> 
        <button className="px-3 py-2 bg-yellow-500 rounded-lg text-white" onClick={() => setcolor("Yellow")}>Yellow</button>
        <button className="px-3 py-2 bg-white -500 rounded-lg text-black" onClick={() => setcolor("white")}>White</button>
        <button className="px-3 py-2 bg-black -500 rounded-lg text-white" onClick={() => setcolor("black")}>black</button>
        <button className="px-3 py-2 bg-violet-600 rounded-lg text-black" onClick={() => setcolor("violet")}>violet</button>
        <button className="px-3 py-2 bg-orange-500 rounded-lg text-white" onClick={() => setcolor("orange")}>orange</button>
        <button className="px-3 py-2 bg-pink-600 rounded-lg text-white" onClick={() => setcolor("pink")}>pink</button>
        </div>

     </div>
    </div>
     
      </>
  )
}

export default App
