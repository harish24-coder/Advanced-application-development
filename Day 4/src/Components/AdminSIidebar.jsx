import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul className="sidebar-nav">
        <li>
          <Link to="/userdetails">User Details</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/add-boat">Add Boat</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
