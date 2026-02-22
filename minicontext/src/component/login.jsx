import React ,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'


function ogin() {
    const [username,setUsername]=userState('');
    const [password,setPassword]=useState('');
    const {setUser}=UserContext(UserContext);
  
    const handleSubmit=()=>{
        e.preventDefault()
        setuser({username,password})

    }
    return (
    <div>
        <h2>Login</h2>
        
        <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'></input>
        <input type='text' 
         value={password}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='password'></input>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login