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
  ACTION_TYPE,
} from "../../utils/utils";
import PillComponent from "../boards/Pill.component";
import { action } from "../../data/data";

const ActionComponent = ({ data, type }) => {
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
      {type === ACTION_TYPE.REQUIREMENT && (
        <>
          <div className="border-white rounded my-4  bg-white">
            <div className="flex bg-red-100 rounded-t pl-6 w-full py-2 text-red-500">
              Requirement waiting for review
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col ">
                <p className="p-4 text-purple-500 font-medium">
                  {data.projectName.toUpperCase()}
                </p>
                <p className="pb-4 pl-4 text-neutral-800">{data.releaseName}</p>
              </div>
              <div className="flex flex-col text-right">
                <p className="pt-4 pr-4 text-neutral-600 font-medium ">Latest version</p>
                <p className="pb-4 pr-4 text-neutral-600 font-medium text-2xl">
                  {data.version}
                </p>
                <p className="pb-4 pr-4 text-neutral-400 text-xs">
                  updated{" "}
                  <ReactTimeAgo
                    date={moment(data.updatedAt, "DD-MM-YYYY").toDate()}
                    locale="en-US"
                  />
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {type === ACTION_TYPE.HOURS && (
        <div className="border-white rounded my-4  bg-white">
          <p className="flex bg-red-100 rounded-t pl-6 w-full py-2 text-red-500">
            Development hours exceeding than planned
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col ">
              <p className="p-4 text-purple-500 font-medium">
                {data.projectName.toUpperCase()}
              </p>
              <p className="pb-4 pl-4 text-gray-800">{data.releaseName}</p>
            </div>
            <div className="flex flex-col text-right">
              <div className="p-4 text-neutral-600 font-medium ">
                <table>
                  <thead className="">
                    <tr className="py-2">
                      <td>Planned</td>
                      <td className="px-1">|</td>
                      <td className="text-right">Actual</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="pb-4 pr-4 text-neutral-600 font-medium text-xl">
                      <td className="text-left">200</td>
                      <td className="px-1">|</td>
                      <td>260</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="pb-4 pr-4 text-neutral-400 text-xs">
                updated{" "}
                <ReactTimeAgo
                  date={moment(data.updatedAt, "DD-MM-YYYY").toDate()}
                  locale="en-US"
                />
              </p>
            </div>
          </div>
        </div>
      )}

      {type === ACTION_TYPE.DEFECT && (
        <div className="border-white rounded my-4  bg-white">
          <p className="flex bg-red-100 rounded-t pl-6 w-full py-2 text-red-500">
            Defect Count
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col ">
              <p className="p-4 text-purple-500 font-medium">
                {data.projectName.toUpperCase()}
              </p>
              <p className="pb-4 pl-4 text-gray-800">{data.releaseName}</p>
            </div>
            <div className="flex flex-col text-right">
              <div className="p-4 text-neutral-600 font-medium ">
                <table>
                  <thead className="">
                    <tr className="py-2">
                      <td>Internal</td>
                      <td className="px-1">|</td>
                      <td className="text-right">Customer</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="pb-4 pr-4 text-neutral-600 font-medium text-xl">
                      <td className="text-left">10</td>
                      <td className="px-1">|</td>
                      <td>22</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="pb-4 pr-4 text-neutral-400 text-xs">
                updated{" "}
                <ReactTimeAgo
                  date={moment(data.updatedAt, "DD-MM-YYYY").toDate()}
                  locale="en-US"
                />
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionComponent;
