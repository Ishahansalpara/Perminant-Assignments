import React, { useState } from 'react';

const StatusToggle = () => {
  const [status, setStatus] = useState('Online');

  const toggleStatus = () => {
    setStatus(prev => (prev === 'Online' ? 'Offline' : 'Online'));
  };

  const color = {
    color: status === 'Online' ? 'green' : 'red',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  };


  return (
    <div style={{ marginBottom: 20 }}>
      <p style={color}> {status}</p>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
};

export default StatusToggle;
