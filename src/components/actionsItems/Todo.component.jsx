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
import { MdEdit, MdSend } from "react-icons/md";
import { BsCalendar } from "react-icons/bs";

const TodoComponent = ({ data, type }) => {
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
    <div className="flex h-full pb-4 justify-between flex-col">
      <div>
        {data.map((item) => {
          return (
            <>
              <div className="border-white rounded my-4  bg-white">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col ">
                    <p className="p-4 text-neutral font-medium">{item.title}</p>
                    <p className="pb-4 pl-4 text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-col justify-end text-right">
                    <p className="pb-4 pr-4 text-neutral-400 text-xs">
                      updated{" "}
                      <ReactTimeAgo
                        date={moment(item.dueDate, "DD-MM-YYYY").toDate()}
                        locale="en-US"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="rounded my-4  bg-neutral-50 border border-neutral-200">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col ">
            <div className="flex flex-row pl-4 pt-4 pb-2 gap-4 items-center">
              <input
                className="text-neutral-500 bg-neutral-50 font-medium focus:outline-none"
                type={"text"}
                placeholder={"Enter task here.."}
              />
            </div>
            <p className="pb-4 pl-4 text-neutral-300"></p>
            <input
              className=" bg-neutral-50  focus:outline-none pb-4 pl-4 text-neutral-300"
              type={"text"}
              placeholder={"Description"}
            />
          </div>
          <div className="flex flex-row justify-between">
            <button className="flex flex-row m-4  p-1 border w-1/6 items-center justify-center rounded gap-2 text-xs">
              <BsCalendar className="text-neutral-500" />
              <p className="text-neutral-500">Due Date</p>
            </button>
            <button className="flex flex-row m-4  p-1 border border-purple-300 w-1/6 items-center justify-center rounded gap-2 text-sm bg-purple-200 text-purple-700">
              <p>Add ToDo</p>
              <MdSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
