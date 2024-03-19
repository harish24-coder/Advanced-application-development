import React, { useState } from 'react';
import './BoatBooking.css';

const BoatBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    boatType: '',
    numberOfPersons: ''
  });

  const [bookingStatus, setBookingStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (for demonstration, just setting a message)
    setBookingStatus('Booked Successfully');
    console.log(formData);
  };

  return (
    <div className="boat-container"> {/* Update class name */}
      <h2>Boat Booking Form</h2>
      {bookingStatus && <p className="booking-confirmation">{bookingStatus}</p>} {/* Update class name */}
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="boatType">Boat Type:</label>
          <select
            id="boatType"
            name="boatType"
            value={formData.boatType}
            onChange={handleChange}
            required
          >
            <option value="">Select Boat Type</option>
            <option value="speedboat">Speedboat</option>
            <option value="yacht">Yacht</option>
            <option value="fishingboat">Fishing Boat</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numberOfPersons">Number of Persons:</label>
          <input
            type="number"
            id="numberOfPersons"
            name="numberOfPersons"
            value={formData.numberOfPersons}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BoatBooking;
