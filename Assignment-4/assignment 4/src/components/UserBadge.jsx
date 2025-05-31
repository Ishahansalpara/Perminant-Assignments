import React, {useState} from "react";

const UserBadge=() =>{
  const [name, setName] =useState('');
  const [role, setRole] = useState('');
  const [isVerified, setVerified]= useState(false);

  const badgeStyle={
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: isVerified ? '#d4edda' : '#f8d7da',
    color: isVerified ? '#155724' : '#721c24',
    border: isVerified ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
    display: 'inline-block',
    margin: '5px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    textAlign: 'center',
    width: '150px'
  };
  
  return(
    <div>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
      <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)}></input>
      <label>
        <input type="checkbox" checked={isVerified} onChange={(e) => setVerified(e.target.checked)} />
        Verified
      </label>
      {
        name && role ? (
          <div style={badgeStyle}>
            <h3>{name}</h3>
            <p>Role: {role}</p>
            <p>Status: {isVerified ? '✅Verified' : '❌Not Verified'}</p>
            </div>
        ) : (
          <div style={badgeStyle}>
            <p>Please enter your name and role.</p>
          </div>
        )
      }
    </div>
  )
}

export default UserBadge;