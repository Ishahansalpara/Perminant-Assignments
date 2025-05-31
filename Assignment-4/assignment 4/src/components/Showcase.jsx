import React from "react";
import UserBadge from "./UserBadge";
import StatusToggle from "./StatusToggle";
import TaskList from "./TaskList";
import ProfileViewer from "./ProfileViewer";

const Showcase = () => {
  const galleryStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  };

  const sectionStyle = {
    flex: "1 1 300px",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fdfdfd",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  return (
    <div style={galleryStyle}>
      <div style={sectionStyle}>
        <h2>User Badge 1</h2>
        <UserBadge name="Alice Johnson" role="Admin" isVerified={true} />
        <h2>User Badge 2</h2>
        <UserBadge name="Bob Smith" role="Member" isVerified={false} />
      </div>

      <div style={sectionStyle}>
        <h2>Status Toggle</h2>
        <StatusToggle />
      </div>

      <div style={sectionStyle}>
        <h2>Task List</h2>
        <TaskList />
      </div>

      <div style={sectionStyle}>
        <h2>Profile Viewer 1</h2>
        <ProfileViewer
          name="Emily Clark"
          email="emily@example.com"
          isPremiumUser={true}
        />
        <h2>Profile Viewer 2</h2>
        <ProfileViewer
          name="Tom Lee"
          email="tom@example.com"
          isPremiumUser={false}
        />
      </div>
    </div>
  );
};

export default Showcase;
