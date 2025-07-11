import React, { useState } from 'react';

const Screen1 = () => {
  const [counter, setCounter] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const handleIncrement = () => {
    setCounter((prev) => (prev + 1) % 10); 
  };

  const handleDecrement = () => {
    setCounter((prev) => (prev - 1 + 10) % 10); 
  };

  return (
    <div>
      <h2>Screen 1</h2>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span style={{ margin: '0 10px' }}>{counter}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <label>
          <input
            type="radio"
            value="Option 1"
            checked={selectedOption === 'Option 1'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 1
        </label>

        <label style={{ marginLeft: '10px' }}>
          <input
            type="radio"
            value="Option 2"
            checked={selectedOption === 'Option 2'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 2
        </label>
      </div>
    </div>
  );
};

export default Screen1;