import React, { useState, useEffect } from 'react';
import './App.css'; 


const Toggleswitch = () => {
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
      
    </div>
  );
};

export default Toggleswitch;
