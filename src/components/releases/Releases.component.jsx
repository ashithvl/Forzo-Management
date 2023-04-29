import React, { useState, useLayoutEffect } from "react";
import { BsArchive } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { projects } from "../../data/data";

import AppButton from "../utils/AppButton.component";
import PageTitle from "../utils/PageTitle.component";
import Breadcrumbs from "../utils/Breadcrumbs.component";
import NewReleaseCardComponent from "../cards/NewReleaseCard.component";
import ContainerWrapper from "../utils/ContainerWrapper.component";
import ReleaseCardComponent from "../cards/ReleaseCard.component";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { BiArchiveIn } from "react-icons/bi";

const ReleasesComponent = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [breadcrumbs] = useBreadcrumbs(params, pathname);

  const [releases, setReleases] = useState([]);

  useLayoutEffect(() => {
    const project = projects.find(
      (project) => project.id === parseInt(params.projectId)
    );
    setReleases(project.releases);
  }, []);

  return (
    <ContainerWrapper>
      <div className="flex justify-between mt-3">
        <PageTitle>Releases</PageTitle>
        <div className="flex">
          <AppButton
            variant="text"
            label="Blacklog"
            icon={<BiArchiveIn />}
            clickHandler={() =>
              navigate(`/projects/${params.projectId}/backlog`)
            }
          />
          <AppButton variant="text" label="Archive" icon={<BsArchive />} />
        </div>
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="grid grid-cols-3 gap-3 overflow-y-scroll">
        <NewReleaseCardComponent />
        {releases.map((release) => {
          return (
            <ReleaseCardComponent
              projectId={parseInt(params.projectId)}
              key={release.id}
              release={release}
            />
          );
        })}
      </div>
    </ContainerWrapper>
  );
};

export default ReleasesComponent;

{
  /* <div className="grid grid-cols-3 gap-3 w-full pt-4">
     
      </div>

     
    </div> */
}
