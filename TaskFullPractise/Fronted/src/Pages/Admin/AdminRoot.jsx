import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar/AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminFooter from '../../Components/Admin/UserFooter/AdminFooter'

function AdminRoot() {
  return (
    <>
    <AdminNavbar/>
    <Outlet/>
    <AdminFooter/>
      
    </>
  )
}

export default AdminRoot

