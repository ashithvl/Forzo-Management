import React from "react";
import { releases } from "../../data/data";
import AppButton from "../utils/AppButton.component";
import NewProject from "../../assets/images/new-project.jpg";
import ReleaseItemCard from "../cards/ReleaseItem.component";

const ReleasesComponent = () => {
  return (
    <div className="grid grid-cols-3 gap-3  w-full pt-4">
      <div className="bg-white p-6 rounded basis-1/3 items-center">
        <div className="flex flex-row  justify-evenly ">
          <img src={NewProject} width={80} className="mx-auto hy-auto" />
          <div className="flex flex-col justify-center items-center h-full self-center gap-4">
            <p className="text-xl text-center">Create a new release</p>
            <AppButton
              variant={"contained"}
              label={"new release"}
              icon={null}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {releases.map((release) => {
        return (
          <ReleaseItemCard
            releaseName={release.releaseName}
            owner={release.owner}
          />
        );
      })}
    </div>
  );
};

export default ReleasesComponent;
