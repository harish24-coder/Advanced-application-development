import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <Link to="/boatbooking">BoatBooking</Link>
        </h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/boats">Browse Boats</Link>
          </li>
          <li className="navbar-item">
            <Link to="/bookings">My Bookings</Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="navbar-item">
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
