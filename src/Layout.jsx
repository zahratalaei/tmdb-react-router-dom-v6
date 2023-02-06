import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'

const Layout = () => {
  const location = useLocation()
  return (
    <>
    {/* <SearchForm/> */}
    <Header/>
    <Outlet context={{hello:"world"}}/>
    </>
  )
}

export default Layout