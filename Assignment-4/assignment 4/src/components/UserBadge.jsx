import React from 'react';

const UserBadge = ({ name, role, isVerified }) => {
  const verifiedStyle = {
    color: isVerified ? 'green' : 'red',
    fontWeight: 'bold',
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 10, borderRadius: 6, width: 250, marginBottom: 10 }}>
      <h3>{name}</h3>
      <p>{role}</p>
      <p style={verifiedStyle}>
        {isVerified ? '✅ Verified' : '❌ Not Verified'}
      </p>
    </div>
  );
};

export default UserBadge;
