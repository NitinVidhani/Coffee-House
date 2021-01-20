import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AdminNavbar.css'

const AdminNavbar = () => {
  return (
    <div className="adminNavbar">
      <h4 className="adminNavbar__logo"><Link className="adminNavbar__navLink" to="/">CoffeeHouse</Link></h4>
    </div>
  )
}

export default AdminNavbar
