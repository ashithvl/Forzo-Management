import React from "react";

import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BsLightningCharge } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";

import HeaderComponent from "../boards/Header.component";
import CardComponent from "../boards/Card.component";

import { home } from "../../data/data";
import { STAGE } from "../../utils/utils";

const OverviewComponent = () => {
  return (
    <section className="grid grid-cols-3 gap-3 h-full px-4 bg-teal-50">
      <div className="flex flex-col min-h-0 rounded p-2 my-4 bg-white">
        <HeaderComponent
          title="To Start"
          icon={<HiOutlineRocketLaunch />}
          count="07"
        />
        <div class="flex-1 overflow-y-scroll">
          {home.map((data) => {
            if (data.toStart)
              return <CardComponent data={data} type={STAGE.TO_START} />;
            else return null;
          })}
        </div>
      </div>
      <div className="flex flex-col min-h-0 rounded p-2 my-4 bg-white">
        <HeaderComponent
          title="Work In Progress"
          icon={<BsLightningCharge />}
          count="19"
        />
        <div class="flex-1 overflow-y-scroll">
          {home.map((data) => {
            if (data.toStart)
              return <CardComponent data={data} type={STAGE.WIP} />;
            else return null;
          })}
        </div>
      </div>
      <div className="flex flex-col min-h-0 rounded p-2 my-4 bg-white">
        <HeaderComponent title="Completed" icon={<FiThumbsUp />} count="30" />
        <div class="flex-1 overflow-y-scroll">
          {home.map((data) => {
            if (data.toStart)
              return <CardComponent data={data} type={STAGE.COMPLETED} />;
            else return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default OverviewComponent;
