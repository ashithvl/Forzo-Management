import React from "react";

import NewProject from "../../assets/images/new-project.jpg";
import AppButton from "../utils/AppButton.component";

const NewReleaseCardComponent = () => {
  return (
    <div className="bg-white p-5 rounded items-center">
      <div className="flex flex-row justify-evenly">
        <img
          src={NewProject}
          width={80}
          className="mx-auto hy-auto"
          alt="img"
        />
        <div className="flex flex-col justify-center items-center h-full self-center gap-4">
          <p className="text-neutral-600 text-sm">Create a new release</p>
          <AppButton label="new release" />
        </div>
      </div>
    </div>
  );
};

export default NewReleaseCardComponent;
