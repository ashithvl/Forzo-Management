import React from "react";

import NavBarComponent from "../components/utils/NavBar.component";
import Breadcrumbs from "../components/utils/Breadcrumbs.component";
import { BsArchiveFill } from "react-icons/bs";
import ProjectsComponent from "../components/projects/Projects.component";
import ReleasesComponent from "../components/releases/Releases.component";
import BacklogComponent from "../components/projects/Backlog.component";
import ReleaseDetailComponent from "../components/projects/ReleaseDetail.component";
import FoldersComponent from "../components/utils/Folders.component";
import { useState } from "react";

const ProjectPage = () => {
  const [showDrive, setDrive] = useState(true);
  return (
    <>
      <div className="flex">
        <NavBarComponent />
        <main className="flex flex-col h-screen w-full p-4 bg-purple-50">
          <Breadcrumbs
            title={"Projects"}
            btnLabel={"Archive"}
            btnIcon={<BsArchiveFill className={"text-purple-600"} />}
          />
          {/* <ProjectsComponent /> */}
          {/* <ReleasesComponent /> */}
          {/* <BacklogComponent /> */}
          <ReleaseDetailComponent />
        </main>
      </div>
      <FoldersComponent setDrive={setDrive} showDrive={showDrive} />
    </>
  );
};

export default ProjectPage;
