import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login'; // Assuming this is the correct path to your Login component
import RegisterForm from './pages/register'; // Assuming this is the correct path to your RegisterForm component
import Home from './pages/Home';
import Register from './pages/register';
import BoatBooking from './pages/BoatBooking';
import About from './Components/About';
import ContactUs from './Components/Contactus';
import ViewBoat from './Components/ViewBoat';
import Booking from './Components/Booking';
import Profile from './Components/Profile';
import Adminlogin from './Components/Adminlogin';
import Admin from './Components/Admin';
import UserDetails from './Components/Userdetails';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/boats" element={<BoatBooking />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Logout" element={<login />} />
        <Route path="/browse" element={<ViewBoat />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/adminpage" element={<Admin />} />
        <Route path="/userdetails" element={<UserDetails/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
