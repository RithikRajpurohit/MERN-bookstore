import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
import MyFooter from './Components/MyFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='min-h-screen'> <Outlet/></div>
    <MyFooter/>
     
    </>
  )
}

export default App
