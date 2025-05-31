import React from "react";
import UserBadge from "./components/UserBadge";
import StatusToggle from "./components/StatusToggle";
import TaskList from "./components/TaskList";
import ProfileViewer from "./components/ProfileViewer";
import Showcase from "./components/Showcase";


function App() {
  return (
    <>
      <UserBadge />
      <StatusToggle/>
      <TaskList/>
<ProfileViewer
        name="Emily Clark"
        email="emily@example.com"
        isPremiumUser={true}
      />   
      <Showcase/>
       </>
  );
}
export default App;