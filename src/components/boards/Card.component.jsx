import React from "react";
import ReactTimeAgo from "react-time-ago";
import moment from "moment/moment";

import { RiErrorWarningFill } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";

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

  const getActualHours = () => {
    if (type === STAGE.WIP || type === STAGE.COMPLETED) {
      if (data.planned >= data.actual) {
        return { hours: data.actual, pillType: PILL_TYPE.SUCCESS };
      } else {
        return {
          hours: `${data.planned} + ${data.actual - data.planned}`,
          pillType: PILL_TYPE.DANGER,
        };
      }
    } else {
      return {
        hours: null,
        pillType:
          data.requirementStatus === 1 ? PILL_TYPE.SUCCESS : PILL_TYPE.DANGER,
      };
    }
  };

  const getDefects = () => {
    if (
      data.uat.isUat &&
      data.uat.customerDefects > 0 &&
      data.uat.internalDefects > 0
    ) {
      return `C - ${data.uat.customerDefects} | I - ${data.uat.internalDefects}`;
    } else return "UAT";
  };

  return (
    <>
      {getCompleted() > 0 && (
        <div className="border-white rounded my-4 p-2 bg-white">
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
              {type !== STAGE.TO_START && (
                <>
                  {data.planned && data.actual && (
                    <PillComponent
                      text={getActualHours().hours}
                      type={getActualHours().pillType}
                      icon={PILL_ICON.ET}
                    />
                  )}
                </>
              )}
              {type === STAGE.COMPLETED && data.uat.isUat && (
                <PillComponent
                  text={getDefects()}
                  type={PILL_TYPE.MUTED}
                  icon={PILL_ICON.BUG}
                />
              )}
            </div>
            {getActualHours().pillType === PILL_TYPE.DANGER ||
            data.requirementStatus !== 1 ? (
              <div className="text-red-500">
                <RiErrorWarningFill size={24} />
              </div>
            ) : null}
            {data.uat.isUat &&
            data.uat.customerDefects <= 0 &&
            data.uat.internalDefects <= 0 ? (
              <div className="text-green-500">
                <AiFillCheckCircle size={24} />
              </div>
            ) : null}
          </div>
          <div className="w-full h-px mt-2 bg-neutral-200"></div>
          <div className="flex w-full mt-3 items-center">
            <div>
              <p className="text-xs text-purple-600">
                {data.projectName.toUpperCase()}
              </p>
              <p className="text-md text-neutral-600 mt-3">
                {data.releaseName}
              </p>
            </div>
            <div className="flex flex-col flex-1 items-end mr-2">
              <p className="text-2xl text-neutral-700">{getCompleted()}</p>
              <p className="text-md text-neutral-500">of {data.totalModules}</p>
            </div>
          </div>
          <div className="flex w-full mt-2 items-center">
            <p className="text-sm text-neutral-700">
              EST : {data.planned ? `${data.planned} hrs` : "TBD"}
            </p>
            <p className="text-xs text-neutral-400 flex-1 items-end text-right mr-2">
              updated{" "}
              <ReactTimeAgo
                date={moment(data.updatedAt, "DD-MM-YYYY").toDate()}
                locale="en-US"
              />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardComponent;
