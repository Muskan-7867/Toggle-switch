import React, { useState, useEffect } from 'react';
import './App.css'; 

const App = () => {
  // Retrieve theme preference from local storage or default to light
  const savedTheme = localStorage.getItem('theme');
  const [darkMode, setDarkMode] = useState(savedTheme === 'dark');

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
  
    // Update theme based on saved preference
    if (savedTheme === 'dark') {
      document.body.style.backgroundImage = "url('src/assets/dark1.jpg')";
    } else {
      document.body.style.backgroundImage = "url('src/assets/light.jpg')";
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.body.style.backgroundImage = "url('src/assets/dark1.jpg')";
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.style.backgroundImage = "url('src/assets/light.jpg')";
      localStorage.setItem('theme', 'light');
    }
    // Display popup message
    alert(`Theme has been set to ${newMode ? 'dark' : 'light'} mode.`);
  };

  return (
    <div className="container">
      <div className="toggle-switch-container">
        <div className="toggle-switch" onClick={toggleTheme}>
          <input type="checkbox" className="checkbox" checked={darkMode} readOnly />
          <label className={`label ${darkMode ? 'dark' : 'light'}`} htmlFor="checkbox">
            <div className={`ball ${darkMode ? 'dark' : 'light'}`}></div>
          </label>
        </div>
      </div>
      <div className="centered-buttons-container">
        <button className="interactive-button sign-up-button" onClick={() => alert('Sign Up button clicked.')}>Sign Up</button>
        <button className="interactive-button sign-in-button" onClick={() => alert('Sign In button clicked.')}>Sign In</button>
      </div>
    </div>
  );
};

export default App;
