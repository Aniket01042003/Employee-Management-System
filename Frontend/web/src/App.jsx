import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import EmpRoute from './Routes/EmpRoute'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/*' element={<EmpRoute />} />
      </Routes>
    </>
  )
}

export default App
