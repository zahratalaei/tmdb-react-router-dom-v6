import React from 'react'
import SearchForm from './components/SearchForm'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  console.log(location)
  return (
    <>
    <SearchForm/>
    <Outlet context={{hello:"world"}}/>
    </>
  )
}

export default Layout