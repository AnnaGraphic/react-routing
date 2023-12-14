import React from "react"
import { Outlet } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

export default function Layout () {
  return (
  <>
  <Header />
  {/* designing layout application */}
  <Outlet />
  <Footer />
  </>
    )
}