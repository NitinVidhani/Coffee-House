import '../styles/Sidebar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/admin/dashboard" className="sidebar__link" activeClassName="sidebar__activeLink">
        <i className="fa fa-chart-line"></i>
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/admin/users" className="sidebar__link" activeClassName="sidebar__activeLink">
        <i className="fa fa-users"></i>
        <span>Users</span>
      </NavLink>
      <NavLink to="/admin/categories" className="sidebar__link" activeClassName="sidebar__activeLink">
        <i className="fa fa-shapes"></i>
        <span>Categories</span>
      </NavLink>
      <NavLink to="/admin/products" className="sidebar__link" activeClassName="sidebar__activeLink">
        <i className="fa fa-shopping-bag"></i>
        <span>Products</span>
      </NavLink>
    </div>
  )
}

export default Sidebar
