import React from "react";

const ProjectItemCard = ({ projectName, activeReleases, owner }) => {
  return (
    <div className="bg-white p-6 rounded basis-1/3">
      <div className="flex flex-row items-center">
        <p className="text-2xl text-purple-600 font-medium">
          {projectName.toUpperCase()}
        </p>
        <div className="bg-purple-600 w-full h-0.5 ml-2"></div>
      </div>
      <p className="text py-3 text-sky-400 font-medium">Backlog</p>
      <div className="flex flex-col justify-between">
        <p className="text-lg pb-3 text-neutral-800 font-medium">
          Active Releases
        </p>
        <p className="text py text-purple-800 italic">
          {activeReleases[0] || " "}
        </p>
        <p className="text py text-purple-800 italic">
          {activeReleases[1] || " "}
        </p>
        <p className="text py text-purple-800 italic">
          {activeReleases[2] || " "}
        </p>

        <p className="text-lg py-2 text-neutral-800 font-medium">
          Primary Owner
        </p>
        <p className="text text-neutral-900">{owner}</p>
      </div>
    </div>
  );
};

export default ProjectItemCard;
