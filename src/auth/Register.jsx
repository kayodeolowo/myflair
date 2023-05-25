import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../redux/authSlice'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const HandleRegister = () => {
    console.log(name, email, password)
    dispatch(signUpUser({ name, email, password }))
  }


  return (
    <div>
      <div className='flex flex-col items-start   '>
        <h1> Register </h1>
        <label> Name </label>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />

        <label> Email </label>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <label> Password </label>
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={HandleRegister} className='mt-10'> Register </button>
      </div>
    </div>
  )
}

export default Register
