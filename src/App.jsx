import React from 'react';
import Toggleswitch from './Toggleswitch';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div>
        <Toggleswitch />
        <nav>
          <ul>
            <li>
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin" className="nav-link">Sign In</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
