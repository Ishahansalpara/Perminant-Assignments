import React from 'react';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  { title: "Portfolio", description: "My personal website", isLive: false },
  { title: "To-Do App", description: "Task management app", isLive: false },
  { title: "E-commerce", description: "Shop frontend UI", isLive: false },
  { title: "Blog", description: "Blog built with React", isLive: false },
  { title: "Weather App", description: "Weather data via API", isLive: false },
];

function Home() {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="card-container">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            isLive={proj.isLive}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
