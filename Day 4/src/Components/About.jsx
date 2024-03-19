import React from 'react';
import './About.css';
import boatImage from "../assets/delux-banner-2.jpg";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Welcome to our online boat house booking platform! We are dedicated to providing you with the best experience for booking boat houses for your vacations.</p>
        </div>
        <img src={boatImage} alt="Boat House" className="about-hero-image" />
      </section>

      <section className="about-description">
        <div className="about-description-content">
          <h2>Our Mission</h2>
          <p>Our mission is to connect travelers with unique and memorable boat house accommodations, offering a seamless booking experience and exceptional customer service.</p>
        </div>
      </section>

      <section className="about-features">
        <div className="about-features-content">
          <h2>Key Features</h2>
          <ul>
            <li>Wide selection of boat houses in various locations</li>
            <li>Easy-to-use booking platform</li>
            <li>Secure payment options</li>
            <li>Dedicated customer support</li>
            <li>Flexible cancellation policies</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
