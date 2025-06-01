import React from 'react';
import UserBadge from './UserBadge';
import StatusToggle from './StatusToggle';
import TaskList from './TaskList';
import ProfileViewer from './ProfileViewer';

const CardBox = ({ title, children }) => (
  <div style={{
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '25px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
  }}>
    <h2 style={{ marginBottom: '15px', color: '#333' }}>{title}</h2>
    <div>{children}</div>
  </div>
);

const Showcase = () => {
  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Segoe UI, sans-serif', 
      backgroundColor: '#f4f6f8', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
         Showcase
      </h1>

      <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: '1fr 1fr' }}>
        <CardBox title="🧩 UserBadge Examples">
          <UserBadge name="Isha" role="Admin" isVerified={true} />
          <UserBadge name="Tisha" role="User" isVerified={false} />
        </CardBox>

        <CardBox title="🔁 Status Toggle">
          <StatusToggle />
        </CardBox>

        <CardBox title="📋 Task List Manager">
          <TaskList />
        </CardBox>

        <CardBox title="👤 Profile Viewer Variants">
          <ProfileViewer name="Isha" email="isha18919@gmail.com" isPremiumUser={true} />
          <ProfileViewer name="Esha" email="23amtics@gmail.com" isPremiumUser={false} />
        </CardBox>
      </div>
    </div>
  );
};

export default Showcase;
