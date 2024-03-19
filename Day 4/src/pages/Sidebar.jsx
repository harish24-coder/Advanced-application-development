import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);    
    };
  
    return (
        <div className={`sidebar ${isOpen ? 'show' : ''}`}>
            <div className="hamburger-menu" onClick={toggleSidebar}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <Link to="/about">About</Link>
            <Link to="/Contact">Contact us</Link>
            <Link to="/login">Logout</Link>
        </div>
    );
}

export default Sidebar;
