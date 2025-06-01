import React from 'react';

function ProjectCard({ title, description, isLive }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={`badge ${isLive ? 'live' : 'dev'}`}>
        {isLive ? 'Live' : 'Under Development'}
      </span>
    </div>
  );
}

export default ProjectCard;
