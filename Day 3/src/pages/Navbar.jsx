import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">Aquamarina Gateways</span>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/browse" className="navbar-link">View boats</Link>
          </li>
          <li className="navbar-item">
            <Link to="/bookings" className="navbar-link">My Bookings</Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile" className="navbar-link">Profile</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );  
};

export default Navbar;
