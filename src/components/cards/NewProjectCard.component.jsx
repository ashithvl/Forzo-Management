import React from "react";

import NewProject from "../../assets/images/new-project.jpg";
import AppButton from "../utils/AppButton.component";

const NewProjectCardComponent = () => {
  return (
    <div className="bg-white p-6 rounded">
      <img src={NewProject} width={120} className="mx-auto" alt="img" />
      <div className="flex flex-col justify-center gap-2 items-center">
        <p className="text-neutral-600 text-sm p-1 text-center">
          Create a new project
        </p>
        <AppButton label="new project"  />
      </div>
    </div>
  );
};

export default NewProjectCardComponent;
