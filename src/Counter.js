import React, { useState } from 'react';

const Counter = () => {
  
  const [count, setCount] = useState(0);

 
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment} >
        Increment
      </button>
    </div>
  );
};

export default Counter;
