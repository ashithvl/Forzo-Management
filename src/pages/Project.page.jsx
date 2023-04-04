import React from "react";

import NavBarComponent from "../components/utils/NavBar.component";

const ProjectPage = () => {
  return (
    <>
      <div className="flex">
        <NavBarComponent />
        <main className="flex flex-col h-screen w-full bg-purple-50"></main>
      </div>
    </>
  );
};

export default ProjectPage;
