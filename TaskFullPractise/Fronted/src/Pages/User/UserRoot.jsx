import React from 'react'
import { Outlet } from "react-router-dom"
import UserNavbar from '../../Components/User/UserNavbar/UserNavbar'
import UserFooter from '../../Components/User/UserFooter/UserFooter'
function UserRoot() {
    return (
        <>
            <UserNavbar />
            <Outlet />
            <UserFooter />
        </>
    )
}

export default UserRoot
