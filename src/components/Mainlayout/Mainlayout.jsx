import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Mainlayout() {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
