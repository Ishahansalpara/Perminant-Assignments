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
    backgroundColor: '#DAC8BC',
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
      backgroundColor: ' #2D323F', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color:' #ffffff' }}>
         Showcase
      </h1>

      <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: '1fr 1fr', color: 'rgb(45, 50, 63)' }}>
        <CardBox title="UserBadge Examples">
          <UserBadge name="Isha" role="Admin" isVerified={true} />
          <UserBadge name="Tisha" role="User" isVerified={false} />
        </CardBox>

        <CardBox title=" Status Toggle">
          <StatusToggle />
        </CardBox>

        <CardBox title=" Task List Manager">
          <TaskList />
        </CardBox>

        <CardBox title=" Profile Viewer ">
          <ProfileViewer name="Isha" email="isha18919@gmail.com" isPremiumUser={true} />
          <ProfileViewer name="Isha" email="23amtics@gmail.com" isPremiumUser={false} />
        </CardBox>
      </div>
    </div>
  );
};

export default Showcase;
