// Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-logo">
            <h2>Aquamarina Gateways</h2>
          </div>
          <div className="footer-address">
            <p>123 Ocean Avenue</p>
            <p>Marina City, Island</p>
            <p>Ocean Country</p>
          </div>
          <div className="footer-contact">
            <p>Email: info@aquamarinagateways.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="footer-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/boats">Browse Boats</a></li>
            <li><a href="/bookings">My Bookings</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
