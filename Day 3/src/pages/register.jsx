import React, { useState } from 'react';
import './register.css'; // Importing the CSS file for the Register component
import { Link } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate username, email, and password here
    // For simplicity, let's just call the onRegister function with the user information
    const userData = {
      username: username,
      email: email,
      password: password
    };
    onRegister(userData);
  };

  return (
    <div className="register-background">
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to='/login'><button type="submit">Register</button></Link>
        <div className="login-link">
          <span>Already have an account? </span>
          <Link to='/login'>Login</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;
