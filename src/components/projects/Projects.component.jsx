import React from "react";
import { projects } from "../../data/data";
import AppButton from "../utils/AppButton.component";
import NewProject from "../../assets/images/new-project.jpg";
import ProjectItemCard from "../cards/ProjectItem.component";

const ProjectsComponent = () => {
  return (
    <div className="grid grid-cols-3 gap-3  w-full pt-4">
      <div className="bg-white p-6 rounded basis-1/3">
        <div className="flex flex-col justify-evenly h-full">
          <img src={NewProject} width={120} className="mx-auto" />
          <div className="flex flex-col justify-center gap-2 items-center">
            <p className="text-xl text-center">Create a new project</p>
            <AppButton
              variant={"contained"}
              label={"new project"}
              icon={null}
            />
          </div>
        </div>
      </div>

      {projects.map((project) => {
        return (
          <ProjectItemCard
            projectName={project.projectName}
            owner={project.owner}
            activeReleases={project.activeReleases}
          />
        );
      })}
    </div>
  );
};

export default ProjectsComponent;
