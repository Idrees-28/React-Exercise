import React, { useState } from 'react';

const Toggle = () => {
  
  const [visible, setVisible] = useState(false);


  const toggleText = () => {
    setVisible(!visible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Toggle 😎</h1>
      {visible && <p>Hey Guys...! Keep Learning Something New</p>}
      <button onClick={toggleText} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {visible ? 'Hide' : 'Show'} Text
      </button>
    </div>
  );
};

export default Toggle;
