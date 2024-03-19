import React from 'react';
import './Contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, feel free to reach out to us.</p>
        <div className="info">
          <div className="info-item">
            <h2>Email</h2>
            <p>info@boatbooking.com</p>
          </div>
          <div className="info-item">
            <h2>Phone</h2>
            <p>+1 123-456-7890</p>
          </div>
          <div className="info-item">
            <h2>Address</h2>
            <p>123 Boat House Lane, Marina City, Oceanview, USA</p>
          </div>
        </div>
      </section>
      <section className="contact-form">
        <h2>Send us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;
