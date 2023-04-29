import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCardComponent = ({ project }) => {
  let navigate = useNavigate();
  return (
    <div
      className="bg-white p-6 rounded basis-1/3 h-60 flex flex-col justify-between cursor-pointer"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <div>
        <div className="flex flex-row items-center">
          <p className="text-md text-purple-500 font-bold">
            {project.projectName.toUpperCase()}
          </p>
          <div className="bg-purple-500 w-full h-0.5 ml-2"></div>
        </div>
        <p className="text-sm py-3 text-sky-400 font-medium">Backlog</p>
        <div className="flex flex-col justify-between">
          <p className="text-sm pb-1 text-neutral-800">Active Releases</p>
          {project.releases.map((release, index) => {
            if (index < 2) {
              return (
                <p
                  key={release.id}
                  className="text-sm py text-purple-800 italic"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/projects/${project.id}/release/${release.id}`);
                  }}
                >
                  {release.releaseName}
                </p>
              );
            } else return null;
          })}
          {project.releases.length > 2 ? (
            <p className="text-sm py text-purple-800 italic">...</p>
          ) : null}
        </div>
      </div>

      <div>
        <p className="text-sm pt-3 text-neutral-600 ">Primary Owner</p>
        <p className="text-sm text-neutral-900">{project.primaryOwner}</p>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
