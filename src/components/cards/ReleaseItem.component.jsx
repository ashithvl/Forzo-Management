import React from "react";
import { RiDriveFill } from "react-icons/ri";

const ReleaseItemCard = ({ releaseName, owner }) => {
  return (
    <div className="bg-white p-6 rounded basis-1/3">
      <div className="flex flex-row items-center justify-between items-center">
        <p className="text-2xl text-purple-600 font-medium">
          {releaseName.toUpperCase()}
        </p>
        <RiDriveFill size={24} className="text-purple-600" />
      </div>
      <p className="text-lg py-3 text-neutral-800 font-medium">Primary Owner</p>
      <p className="text text-neutral-900">{owner}</p>
    </div>
  );
};

export default ReleaseItemCard;
