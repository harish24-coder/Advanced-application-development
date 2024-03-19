import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  // Define state variables to store user details
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching user data from an API
  useEffect(() => {
    // Assume you have a function to fetch user data
    const fetchUserData = async () => {
      try {
        // Simulate an API request delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Dummy user data (replace with actual user data retrieval logic)
        const dummyUser = {
          name: 'John Doe',
          email: 'john@example.com',
          location: 'New York, USA',
          phone: '123-456-7890'
          // Add more user details as needed
        };

        // Set user data in state
        setUser(dummyUser);
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false); // Set loading state to false in case of error
      }
    };

    // Call the fetchUserData function
    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          {/* Add more profile details as needed */}
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;
