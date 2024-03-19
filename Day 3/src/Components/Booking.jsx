import React from 'react';
import './Booking.css'; // Import your CSS file for Booking component

const Booking = () => {
  // Sample data for booked boats
  const bookedBoats = [
    {
      id: 1,
      name: 'Sunset Boat House',
      image: 'https://getmyboat-user-images1.imgix.net/images/5a03e69c40b77/boat-rentals-kochi-kerala-processed.JPG?ixlib=js-3.8.0&q=50&fit=crop&auto=format%2Ccompress&w=426&h=276&dpr=1', // Image path or URL for the boat
      location: 'Lakeview, California',
      bookingDate: '2024-03-18',
      personsPerRoom: 4,
      timing: '9:00 AM - 6:00 PM',
    },
    {
      id: 2,
      name: 'Blue Waters',
      image: 'https://getmyboat-user-images1.imgix.net/images/5a03e69c40b77/boat-rentals-kochi-kerala-processed.JPG?ixlib=js-3.8.0&q=50&fit=crop&auto=format%2Ccompress&w=426&h=276&dpr=1', // Image path or URL for the boat
      location: 'Oceanview, Florida',
      bookingDate: '2024-03-19',
      personsPerRoom: 6,
      timing: '10:00 AM - 7:00 PM',
    },
    // Add more booked boats with image paths or URLs
  ];

  return (
    <div className="booking-container">
      <h1>Booked Boats</h1>
      <div className="booked-boats">
        {bookedBoats.map((boat) => (
          <div key={boat.id} className="booked-boat">
            <img src={boat.image} alt={boat.name} className="boat-image" />
            <div className="boat-details">
              <h2>{boat.name}</h2>
              <p>Location: {boat.location}</p>
              <p>Booking Date: {boat.bookingDate}</p>
              <p>Persons Per Room: {boat.personsPerRoom}</p>
              <p>Timing: {boat.timing}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
