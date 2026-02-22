import React ,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'


function login() {
    const [username,setUsername]=userState('');
    const [password,setPassword]=useState('');
  
    const handelSubmit=()=>{

    }
    return (
    <div>
        <h2>Login</h2>
        
        <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'></input>
        <input type='text' placeholder='password'></input>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default login