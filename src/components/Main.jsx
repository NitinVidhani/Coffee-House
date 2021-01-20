import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from "../components/Dashboard";
import Categories from './Categories';
import Products from './Products';
import Users from './Users';

const Main = () => {
  return (
    <div className="Main">
       <Route path="/admin/dashboard">
         <Dashboard />
       </Route>
       <Route path="/admin/users">
         <Users />
       </Route>
       <Route path="/admin/categories">
         <Categories />
       </Route>
       <Route path="/admin/products">
         <Products />
       </Route>
    </div>
  )
}

export default Main
