import React from "react";
import { useState } from "react";
import TableViewComponent from "./TableView.component";
import BoardViewComponent from "./BoardView.component";
import LeadershipComponent from "./Leadership.component";
import {
  MdOutlineInsertChart,
  MdOutlineLeaderboard,
  MdOutlineTableChart,
} from "react-icons/md";

const ReleaseDetailComponent = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className="pt-4 flex flex-row  w-full flex-wrap box-border">
      <div className="bg-white w-full flex flex-row justify-between px-4   border-b">
        <div className="flex flex-row gap-4">
          <div
            className={`${
              selectedTab === 1
                ? "border-b-2 border-purple-400 text-purple-700 "
                : ""
            } px-2`}
          >
            <button
              className="text-sm my-2 flex items-center gap-1"
              onClick={() => setSelectedTab(1)}
            >
              <MdOutlineTableChart /> Table View
            </button>
          </div>
          <div
            className={`${
              selectedTab === 2
                ? "border-b-2 border-purple-400 text-purple-700 "
                : ""
            } px-2`}
          >
            <button
              className="text-sm my-2 flex items-center gap-1"
              onClick={() => setSelectedTab(2)}
            >
              <MdOutlineInsertChart /> Board View
            </button>
          </div>
        </div>
        <div
          className={`${
            selectedTab === 0
              ? "border-b-2 border-purple-400 text-purple-700 "
              : ""
          } px-2`}
        >
          <button
            className="text-sm my-2 flex items-center gap-1"
            onClick={() => setSelectedTab(0)}
          >
            <MdOutlineLeaderboard /> Leadership
          </button>
        </div>
      </div>

      {selectedTab === 1 ? (
        <TableViewComponent />
      ) : selectedTab === 2 ? (
        <BoardViewComponent />
      ) : (
        <LeadershipComponent />
      )}
    </div>
  );
};

export default ReleaseDetailComponent;
