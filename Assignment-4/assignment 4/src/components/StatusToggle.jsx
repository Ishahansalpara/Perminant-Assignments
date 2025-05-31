import React, {useState} from "react";

const StatusToggle = () => {
  const [isOnline, setIsOnline] = useState(false);

  const toggleStatus = () => {
    setIsOnline(!isOnline);
  };

  const statusStyle = {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: isOnline ? '#d4edda' : '#f8d7da',
    color: isOnline ? '#155724' : '#721c24',
    border: isOnline ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px'
  };

  return (
    <div>
      <button onClick={toggleStatus}>
        {isOnline ? 'Go Offline' : 'Go Online'}
      </button>
      <div style={statusStyle}>
        Status: {isOnline ? '✅ Online' : '❌ Offline'}
      </div>
    </div>
  );
}

export default StatusToggle;