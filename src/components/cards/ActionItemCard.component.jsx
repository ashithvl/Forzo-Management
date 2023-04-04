import React from "react";
import ReactTimeAgo from "react-time-ago";
import moment from "moment/moment";

import { ACTION_TYPE, DATE } from "../../utils/utils";

const ActionItemCardComponent = ({ data, type }) => {
  return (
    <div className="border-white rounded my-4 bg-white">
      <div className="flex bg-red-100 rounded-t w-full p-2 px-4 text-red-500 text-sm">
        {type === ACTION_TYPE.REQUIREMENT && "Requirement waiting for review"}
        {type === ACTION_TYPE.HOURS &&
          "Development hours exceeding than planned"}
        {type === ACTION_TYPE.DEFECT && "Defect Count"}
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col ">
          <p className="text-xs p-4 text-purple-600 ">
            {data.projectName.toUpperCase()}
          </p>
          <p className="pb-4 pl-4 text-neutral-800">{data.releaseName}</p>
        </div>
        <div className="flex flex-col text-right">
          {type === ACTION_TYPE.REQUIREMENT ? (
            <>
              <p className="pt-4 pr-5 text-neutral-500 text-md">
                Latest version
              </p>
              <p className="pb-1 pr-5 text-neutral-700 text-2xl">
                {data.requirementVersion}
              </p>
            </>
          ) : (
            <div className="flex px-4 py-2">
              <div className="flex flex-col">
                <p className="pt-2 pr-2 text-neutral-500 text-md">
                  {type === ACTION_TYPE.HOURS && "Planned"}
                  {type === ACTION_TYPE.DEFECT && "Customer"}
                </p>
                <p className="pt-2 pr-2 text-neutral-700 text-md">
                  {type === ACTION_TYPE.HOURS && data.planned}
                  {type === ACTION_TYPE.DEFECT && data.uat.customerDefects}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="pt-2 pr-2 text-neutral-500 text-md">|</p>
                <p className="pt-2 pr-2 text-neutral-700 text-md">|</p>
              </div>
              <div className="flex flex-col">
                <p className="pt-2 pr-2 text-neutral-500 text-md">
                  {type === ACTION_TYPE.HOURS && "Actual"}
                  {type === ACTION_TYPE.DEFECT && "Internal"}
                </p>
                <p className="pt-2 pr-2 text-neutral-700 text-md">
                  {type === ACTION_TYPE.HOURS && data.actual}
                  {type === ACTION_TYPE.DEFECT && data.uat.internalDefects}
                </p>
              </div>
            </div>
          )}
          <p className="pb-3 pr-4 text-neutral-400 text-xs">
            updated{" "}
            <ReactTimeAgo
              date={moment(data.updatedAt, DATE.DMY).toDate()}
              locale="en-US"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActionItemCardComponent;
