import React, { useState } from 'react';
import './login.css'; // Importing the CSS file for the Login component
import { Link } from 'react-router-dom'; // Import Link component for navigation

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate authentication logic (replace this with actual authentication logic)
    if (username === 'Ragav' && password === '123') {
      // Call onLogin function if credentials are valid
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-background">
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        {error && <div className="error-message">{error}</div>}
        <Link to='/'><button type="submit">Login</button></Link>
        <div className="register-link">
          <span>Don't have an account? </span>
          <Link to='/register'>Register</Link>
        </div>
        <div className="admin-link">
        <Link to='/admin'>Admin</Link>
      </div>
        
      </form>
    </div>
    </div>
  );
};

export default Login;
