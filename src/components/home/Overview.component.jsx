import React, { useState } from "react";

import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BsLightningCharge } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";

import HeaderComponent from "../boards/Header.component";
import CardComponent from "../boards/Card.component";

import { home } from "../../data/data";
import { STAGE } from "../../utils/utils";

const OverviewComponent = () => {
  const [cardData, setCardData] = useState(home);

  const getTotal = (stage) => {
    if (stage === STAGE.TO_START) {
      let total = 0;
      home.forEach((data) => {
        if (data.toStart) total = total + data.toStart;
      });
      return total;
    }
    if (stage === STAGE.WIP) {
      let total = 0;
      home.forEach((data) => {
        if (data.wip) total = total + data.wip;
      });
      return total;
    }
    if (stage === STAGE.COMPLETED) {
      let total = 0;
      home.forEach((data) => {
        if (data.completed) total = total + data.completed;
      });
      return total;
    }
  };

  return (
    <section className="grid grid-cols-3 gap-3 h-full px-4">
      <div className="flex flex-col min-h-0 rounded p-2 my-4">
        <HeaderComponent
          title="To Start"
          icon={<HiOutlineRocketLaunch />}
          count={getTotal(STAGE.TO_START)}
        />
        <div className="flex-1 overflow-y-scroll">
          {cardData.map((data) => {
            if (data.toStart)
              return (
                <CardComponent
                  key={data.releaseName}
                  data={data}
                  type={STAGE.TO_START}
                />
              );
            else return null;
          })}
        </div>
      </div>
      <div className="flex flex-col min-h-0 rounded p-2 my-4 ">
        <HeaderComponent
          title="Work In Progress"
          icon={<BsLightningCharge />}
          count={getTotal(STAGE.WIP)}
        />
        <div className="flex-1 overflow-y-scroll">
          {cardData.map((data) => {
            if (data.wip)
              return (
                <CardComponent
                  key={data.releaseName}
                  data={data}
                  type={STAGE.WIP}
                />
              );
            else return null;
          })}
        </div>
      </div>
      <div className="flex flex-col min-h-0 rounded p-2 my-4 ">
        <HeaderComponent
          title="Completed"
          icon={<FiThumbsUp />}
          count={getTotal(STAGE.COMPLETED)}
        />
        <div className="flex-1 overflow-y-scroll">
          {cardData.map((data) => {
            if (data.completed)
              return (
                <CardComponent
                  key={data.releaseName}
                  data={data}
                  type={STAGE.COMPLETED}
                />
              );
            else return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default OverviewComponent;
