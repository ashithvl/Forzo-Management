import React from "react";
import { BsArchive } from "react-icons/bs";
import { useLocation, useParams } from "react-router-dom";

import { projects } from "../../data/data";

import AppButton from "../utils/AppButton.component";
import PageTitle from "../utils/PageTitle.component";
import ProjectCardComponent from "../cards/ProjectCard.component";
import Breadcrumbs from "../utils/Breadcrumbs.component";
import NewProjectCardComponent from "../cards/NewProjectCard.component";
import ContainerWrapper from "../utils/ContainerWrapper.component";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { BiArchiveIn } from "react-icons/bi";

const ProjectsComponent = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const [breadcrumbs] = useBreadcrumbs(params, pathname);

  return (
    <ContainerWrapper>
      <div className="flex justify-between mt-3">
        <PageTitle>Projects</PageTitle>
        <AppButton variant="text" label="Archive" icon={<BsArchive />} />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="grid grid-cols-3 gap-3 overflow-y-scroll">
        <NewProjectCardComponent />
        {projects.map((project) => {
          return <ProjectCardComponent key={project.id} project={project} />;
        })}
      </div>
    </ContainerWrapper>
  );
};

export default ProjectsComponent;
