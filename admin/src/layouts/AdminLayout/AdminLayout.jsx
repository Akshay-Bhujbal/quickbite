import React from 'react'
import {Outlet} from "react-router-dom"
import Sidebar from '../../components/Sidebar/Sidebar'
import "./AdminLayout.css"

function AdminLayout() {
  return (
    <div className='admin-layout'>
			<Sidebar />

			<main className='main'>
				<Outlet />
			</main>
    </div>
  )
}

export default AdminLayout