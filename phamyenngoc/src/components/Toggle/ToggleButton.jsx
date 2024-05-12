import React, { useState } from 'react';
import './ToggleButton.css'; // Import CSS file for styling (if needed)

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <div className="toggle-container">
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={toggleSwitch} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};


export default ToggleButton;
