import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
