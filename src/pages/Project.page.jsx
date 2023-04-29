import React from "react";

import NavBarComponent from "../components/utils/NavBar.component";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const ProjectPage = () => {
  const [showDrive, setDrive] = useState(true);
  return (
    <>
      <div className="flex">
        <NavBarComponent />
        <main className="flex flex-col h-screen w-full bg-purple-50">
          <Outlet />
        </main>
      </div>
      {/* <FoldersComponent setDrive={setDrive} showDrive={showDrive} /> */}
    </>
  );
};

export default ProjectPage;
