import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import Home from './components/Home'

const Layout = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Layout
