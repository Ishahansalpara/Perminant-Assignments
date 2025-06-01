import React, { useState } from 'react';

const ProfileViewer = ({ name, email, isPremiumUser }) => {
  const [showProfile, setShowProfile] = useState(true);

  const toggleProfile = () => setShowProfile(prev => !prev);

  return (
    <div style={{ border: '1px solid #aaa', padding: 15, borderRadius: 8, width: 300, marginBottom: 20 }}>
      <button onClick={toggleProfile} style={{ marginBottom: 10 }}>
        {showProfile ? 'Hide Profile' : 'Show Profile'}
      </button>
      {showProfile && (
        <>
          <h3>{name}</h3>
          <p>{email}</p>
          <p style={{ color: isPremiumUser ? 'goldenrod' : 'gray', fontWeight: 'bold' }}>
            {isPremiumUser ? '🌟 Premium Member' : '🔒 Upgrade to Premium'}
          </p>
        </>
      )}
    </div>
  );
};

export default ProfileViewer;
