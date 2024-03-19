import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Home.css';

const Home = () => {
  const [boats] = useState([
    {
      id: 1,
      name: 'Luxury Yacht',
      description: 'Luxury yacht with spacious rooms and amenities. Perfect for a luxurious getaway.',
      pricePerHour: 300,
      image: 'https://alleppeyhouseboat.in/wp-content/uploads/2019/10/houseboat-booking-alleppey.jpg',
    },
    {
      id: 2,
      name: 'Speedboat',
      description: 'High-speed boat for thrilling rides and water sports. Ideal for adventure seekers.',
      pricePerHour: 150,
      image: 'https://alleppeyhouseboat.in/wp-content/uploads/2019/10/motor-boat-in-alleppey.jpg',
    },
    {
      id: 3,
      name: 'Pontoon Boat',
      description: 'Relaxing pontoon boat for leisurely cruises. Great for family outings.',
      pricePerHour: 100,
      image: 'https://alleppeyhouseboat.in/wp-content/uploads/2019/10/shikara-boat-alleppey.jpg',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedBoat, setSelectedBoat] = useState(null);

  const handleBookNow = (boat) => {
    setSelectedBoat(boat);
    setShowModal(true);
  };

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="home-content">
        <div className="banner">
          <h1>Welcome to Boat House Booking</h1>
          <p>Find your perfect getaway on the water.</p>
          <img src="https://alleppeyhouseboat.in/wp-content/uploads/2019/10/luxury-houseboat-alleppey.jpg" alt="Big Image" />
        </div>
        <div className="boat-list">
          {boats.map((boat) => (
            <div key={boat.id} className="boat">
              <img src={boat.image} alt={boat.name} />
              <h2>{boat.name}</h2>
              <p>{boat.description}</p>
              <p>Price per Hour: ${boat.pricePerHour}</p>
              <Link to="/boats"> {/* Navigate to BoatBooking page */}
                <button>Book Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      {showModal && (
        <BoatDetailsModal
          boat={selectedBoat}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Home;
