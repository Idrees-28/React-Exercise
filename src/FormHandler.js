import React, { useState } from 'react';

const NameInput = () => {
  
  const [name, setName] = useState('');

  
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Enter Your Name</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type your name"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        Hello, {name ? name : 'HandSome....'}!
      </p>
    </div>
  );
};

export default NameInput;
