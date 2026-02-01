import { useState, useCallback, useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnuberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  // const passwordRef = useRef(null);
  const passwordRef = useRef(null);
  const generatepassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (charallowed) str += "!@#$%^&*()_+"
    if (numberallowed) str += "0123456789"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, numberallowed, charallowed])
   
  const copypasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999); 
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    generatepassword()
  }, [generatepassword])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-blue-500'>
      <h3 className='text-xl font-bold mb-4'>Password Generator</h3>

      <div className='flex shadow rounded-lg overflow mb-4 bg-white'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3 text-black'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copypasswordToClipboard} className="text-sm bg-red-500 text-white px-3">
          copy
        </button>
      </div>

      <div className='flex text-sm gap-x-3'>
        <div className='flex items-center gap-x-1'>
          <label>Length</label>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setlength(Number(e.target.value))}
          />
          <label>{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <label>Numbers</label>
          <input
            type='checkbox'
            checked={numberallowed}
            onChange={() => setnuberallowed(prev => !prev)}
            className='w-4 h-4'
          />
        </div>

        <div className='flex items-center gap-x-1'>
          <label>Symbols</label>
          <input
            type='checkbox'
            checked={charallowed}
            onChange={() => setcharallowed(prev => !prev)}
            className='w-4 h-4'
          />
        </div>
      </div>
    </div>
  )
}

export default App