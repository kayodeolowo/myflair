import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './Pages/dashboard'


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
           <Routes>
             <Route path='/login' element={<Login/>} />
             <Route path='/register' element={<Register/>} />
             <Route path='/dashboard' element={<Dashboard/>} />
           </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
