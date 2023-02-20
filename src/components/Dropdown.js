import React, { useState } from 'react';

const DropdownMenu = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__toggle">{selectedOption || 'Select an option'}</button>
      <ul className="dropdown-menu">
        {options.map((option) => (
          <li key={option} onClick={() => handleSelectOption(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;