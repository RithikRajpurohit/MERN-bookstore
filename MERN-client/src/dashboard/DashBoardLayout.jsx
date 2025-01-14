import React from 'react'
import { Outlet } from 'react-router'
import SlideBar from './SlideBar'

const DashBoardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <SlideBar/>
      <Outlet/>
    </div>
  )
}

export default DashBoardLayout
