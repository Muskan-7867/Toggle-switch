import React, { useState, useEffect } from 'react';
import './App.css'; 

const Toggleswitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
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
    <div className="toggle-switch-container">
      <div className="toggle-switch" onClick={toggleTheme}>
        <input type="checkbox" className="checkbox" checked={darkMode} readOnly />
        <label className={`label ${darkMode ? 'dark' : 'light'}`} htmlFor="checkbox">
          <div className={`ball ${darkMode ? 'dark' : 'light'}`}></div>
        </label>
      </div>
    </div>
  );
};

export default Toggleswitch;
