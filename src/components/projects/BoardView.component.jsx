import React from "react";
import HeaderComponent from "../boards/Header.component";
import { MdCheckCircle, MdTrendingUp, MdUpload } from "react-icons/md";

const BoardViewComponent = () => {
  return (
    <section className="grid grid-cols-3 gap-3 h-full w-full">
      <div className="flex flex-col min-h-0 rounded my-4">
        <HeaderComponent title="To Start" icon={<MdUpload />} />
      </div>
      <div className="flex flex-col min-h-0 rounded my-4">
        <HeaderComponent title="In Progress" icon={<MdTrendingUp />} />
      </div>
      <div className="flex flex-col min-h-0 rounded my-4">
        <HeaderComponent title="Completed" icon={<MdCheckCircle />} />
      </div>
    </section>
  );
};

export default BoardViewComponent;
