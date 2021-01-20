import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Main from "../components/Main";

import Sidebar from "../components/Sidebar";
import "../styles/Admin.css";

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="admin">
      <div className="admin__container">
        <AdminNavbar />
        <Sidebar />
        <Main />
       
      </div>
    </div>
  );
};

export default Admin;
