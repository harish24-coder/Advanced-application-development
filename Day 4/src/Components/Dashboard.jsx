// src/Dashboard.jsx
import React, { useState, useEffect } from "react";
import './Dashboard.css';
import axios from "axios";

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings data from the server
    async function fetchBookings() {
      try {
        const response = await axios.get("/api/bookings"); // Assuming your backend API endpoint for fetching bookings is '/api/bookings'
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    }

    fetchBookings();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>Boat Booking Dashboard</h1>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Booking ID</th>
            <th scope="col">User</th>
            <th scope="col">Boat</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.user}</td>
              <td>{booking.boat}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
