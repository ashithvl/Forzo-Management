import React from "react";
import { breadcrumbs } from "../../data/data";
import AppButton from "./AppButton.component";
import { BsCircleFill } from "react-icons/bs";

const Breadcrumbs = ({ title, links, btnLabel, btnHandler, btnIcon }) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <h1 className="pb-4 text-2xl font-medium text-purple-800">{title}</h1>
        <div className="w-auto flex flex-row">
          {breadcrumbs.map((item) => {
            if (item.path) {
              return (
                <div className="flex flex-row  items-center mr-3">
                  <a className="mr-3 text-sm" href={item.path}>
                    {item.name}
                  </a>
                  <BsCircleFill className="text-neutral-500" size={4} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div>
        <AppButton
          variant={"text"}
          label={btnLabel}
          clickHandler={btnHandler}
          icon={btnIcon}
        />
      </div>
    </div>
  );
};

export default Breadcrumbs;
