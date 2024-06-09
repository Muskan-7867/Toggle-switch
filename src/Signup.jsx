import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure you import the CSS file

const Signup = () => {
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      <Link to="/signin" className="link">Already have an account? Sign In</Link>
    </div>
  );
};

export default Signup;
