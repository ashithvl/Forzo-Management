import React from "react";
import { RiDriveFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const ReleaseCardComponent = ({ projectId, release }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white p-5 rounded h-32 flex flex-col justify-between cursor-pointer"
      onClick={() => navigate(`/projects/${projectId}/release/${release.id}`)}
    >
      <div className="flex flex-row items-center justify-between">
        <p className="text-md text-purple-500">
          {release.releaseName.toUpperCase()}
        </p>
        <RiDriveFill size={24} className="text-purple-500" />
      </div>
      <div>
        <p className="text-sm text-neutral-600 mb-1">Primary Owner</p>
        <p className="text-xs text-neutral-900">{release.owner}</p>
      </div>
    </div>
  );
};

export default ReleaseCardComponent;
