import React from "react";

import { BsPlusCircle } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import CardComponent from "../boards/Card.component";

import HeaderComponent from "../boards/Header.component";

const ActionItemComponent = () => {
  return (
    <section className="grid grid-cols-2 gap-3 h-full px-4 bg-fuchsia-50">
      <div className="flex flex-col min-h-0 rounded p-2 my-4">
        <HeaderComponent
          title="Action Required"
          icon={<RiErrorWarningLine />}
        />
        <div className="flex-1 overflow-y-scroll">
          <CardComponent />
          <CardComponent />
        </div>
      </div>
      <div className="flex flex-col min-h-0 rounded p-2 my-4">
        <HeaderComponent title="Todo" icon={<BsPlusCircle />} />
      </div>
    </section>
  );
};

export default ActionItemComponent;
