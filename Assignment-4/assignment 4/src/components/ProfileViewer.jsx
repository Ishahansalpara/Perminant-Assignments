import React, { useState } from 'react';

const ProfileViewer = ({ name, email, isPremiumUser }) => {
  const [showProfile, setShowProfile] = useState(true);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const cardStyle = {
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '250px',
    margin: '1rem auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={cardStyle}>
      <button onClick={toggleProfile} style={{ marginBottom: '1rem' }}>
        {showProfile ? 'Hide Profile' : 'Show Profile'}
      </button>

      {showProfile && (
        <>
          <h3>{name}</h3>
          <p>{email}</p>
          <p>{isPremiumUser ? '🌟 Premium Member' : '🔒 Upgrade to Premium'}</p>
        </>
      )}
    </div>
  );
};

export default ProfileViewer;
