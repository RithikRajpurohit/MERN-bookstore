import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
