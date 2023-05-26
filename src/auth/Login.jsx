import React, {useState} from 'react'
import { signInUser } from '../redux/authSlice'
import { useDispatch } from 'react-redux'
import { user } from '../redux/authSlice';




const Login = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();

  const HandleLogin = () => {
    dispatch(signInUser({email,password}))
  }

 


  return (
    
    <div>
      <div className='flex flex-col items-start   '>
        <h1> Login </h1>

        <label> Email </label>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <label> Password </label>
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={HandleLogin} className='mt-10'> Login </button>
      </div>
    </div>
  )
}

export default Login

