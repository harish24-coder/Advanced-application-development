import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Your go-to destination for unforgettable boat house experiences.</p>
          </div>
          <div className="col-md-4">
            <h3>Connect With Us</h3>
            <ul className="social-media-links">
              <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: contact@boatbooking.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Boat Dock Road, Marina City, State, ZIP</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 BoatBooking. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
