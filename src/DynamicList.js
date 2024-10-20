import React, { useState } from 'react';

const DynamicList = () => {
  const [items, setItems] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

  const handleAddItem = () => {
    if (inputValue.trim() === '') return; 
    setItems([...items, inputValue]); 
    setInputValue(''); 
  };

  return (
    <div>
      <h1>Dynamic List</h1>
      {}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter item"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
