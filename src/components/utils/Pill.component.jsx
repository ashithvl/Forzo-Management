import React from "react";

import { HiOutlineDocument } from "react-icons/hi2";
import { RiTimerLine } from "react-icons/ri";
import { IoBug } from "react-icons/io5";
import { PILL_ICON, PILL_TYPE } from "../../utils/utils";

const PillComponent = ({ text, type, icon }) => {
  const pillIcon = () => {
    if (icon === PILL_ICON.REQUIREMENTS) return <HiOutlineDocument />;
    if (icon === PILL_ICON.ET) return <RiTimerLine />;
    if (icon === PILL_ICON.BUG) return <IoBug />;
  };

  if (type === PILL_TYPE.SUCCESS)
    return (
      <div className="rounded-sm bg-green-100 text-green-600 px-1 mr-1">
        <div className="flex flex-row items-center p-1 text-xs gap-1">
          {pillIcon()}
          <p>{text}</p>
        </div>
      </div>
    );
  if (type === PILL_TYPE.DANGER)
    return (
      <div className="rounded-sm bg-red-100 text-red-600 px-1 mr-1">
        <div className="flex flex-row items-center p-1 text-xs gap-1">
          {pillIcon()}
          <p>{text}</p>
        </div>
      </div>
    );
  if (type === PILL_TYPE.MUTED)
    return (
      <div className="rounded-sm bg-neutral-100 text-neutral-600 px-1 mr-1">
        <div className="flex flex-row items-center p-1 text-xs gap-1">
          {pillIcon()}
          <p>{text}</p>
        </div>
      </div>
    );
};

export default PillComponent;
