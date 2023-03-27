import React from "react";

import { RiErrorWarningFill } from "react-icons/ri";

import {
  STAGE,
  PILL_ICON,
  PILL_TYPE,
  getRequirementStatus,
} from "../../utils/utils";
import PillComponent from "./Pill.component";

const CardComponent = ({ data, type }) => {
  const getCompleted = () => {
    if (type === STAGE.TO_START) {
      return data.toStart;
    } else if (type === STAGE.WIP) {
      return data.wip;
    } else if (type === STAGE.COMPLETED) {
      return data.completed;
    }
  };
  return (
    <>
      {getCompleted() > 0 ? (
        <div className="border-white rounded my-4 p-2 bg-teal-50">
          <div className="flex items-center">
            <div className="flex flex-row flex-1">
              <PillComponent
                text={getRequirementStatus(data.requirementStatus)}
                type={
                  data.requirementStatus === 1
                    ? PILL_TYPE.SUCCESS
                    : PILL_TYPE.DANGER
                }
                icon={PILL_ICON.REQUIREMENTS}
              />
              {type === STAGE.TO_START ? null : (
                <PillComponent
                  text="200"
                  type={PILL_TYPE.DANGER}
                  icon={PILL_ICON.ET}
                />
              )}
              {type === STAGE.COMPLETED ? (
                <PillComponent
                  text="UAT"
                  type={PILL_TYPE.MUTED}
                  icon={PILL_ICON.BUG}
                />
              ) : null}
            </div>
            <div className=" text-red-600">
              <RiErrorWarningFill size={24} />
            </div>
          </div>
          <div className="divide-x-2"></div>
          <div className="flex w-full mt-4 items-center">
            <div>
              <p className="text-xs text-teal-600">
                {data.projectName.toUpperCase()}
              </p>
              <p className="text-lg text-neutral-600 mt-3">
                {data.releaseName}
              </p>
            </div>
            <div className="flex flex-col flex-1 items-end mr-2">
              <p className="text-2xl text-neutral-700">{getCompleted()}</p>
              <p className="text-md text-neutral-500">of {data.totalModules}</p>
            </div>
          </div>
          <div className="flex w-full mt-2 items-center ">
            <p className="text-sm text-neutral-700">
              EST : {data.planned ? `${data.planned} hrs` : "TBD"}
            </p>
            <p className="text-xs text-neutral-400 flex-1 items-end text-right mr-2">
              updated 2d ago
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CardComponent;
