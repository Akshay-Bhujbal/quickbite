import React from 'react'
import {Link} from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
  return (
    <aside className='sidebar'>
			<h2>QuickBite Admin</h2>

			<Link to="/">Dashboard</Link>
			<Link to="/foods">Foods</Link>
			<Link to="/add-food">Add Food</Link>
			<Link to="/orders">Orders</Link>
    </aside>
  )
}

export default Sidebar