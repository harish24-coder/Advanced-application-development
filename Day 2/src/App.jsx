import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login'; // Assuming this is the correct path to your Login component
import RegisterForm from './pages/register'; // Assuming this is the correct path to your RegisterForm component
import Navbar from './pages/Navbar'; // Import the Navbar component


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/navbar" element={<Navbar />} /> {/* Add route for Navbar */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
