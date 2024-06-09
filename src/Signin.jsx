import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure you import the CSS file

const Signin = () => {
  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" className="submit-button">Sign In</button>
      </form>
      <Link to="/signup" className="link">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default Signin;
