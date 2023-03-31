import React from "react";

import { BsPlusCircle } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { action, todoList } from "../../data/data";
import { ACTION_TYPE } from "../../utils/utils";
import ActionComponent from "../actionsItems/Action.component";
import TodoComponent from "../actionsItems/Todo.component";
import CardComponent from "../boards/Card.component";

import HeaderComponent from "../boards/Header.component";

const ActionItemComponent = () => {
  return (
    <section className="grid grid-cols-2 gap-1 h-full px-2">
      <div className="flex flex-col min-h-0 rounded p-2 my-4">
        <HeaderComponent title="Action Required" icon={<MdPendingActions />} />
        <div className="flex-1 overflow-y-scroll">
          <ActionComponent data={action[0]} type={ACTION_TYPE.REQUIREMENT} />
          <ActionComponent data={action[1]} type={ACTION_TYPE.HOURS} />
          <ActionComponent data={action[2]} type={ACTION_TYPE.DEFECT} />
        </div>
      </div>
      <div className="flex flex-col min-h-0 rounded p-2 my-4">
        <HeaderComponent title="Todo" icon={<BsPlusCircle />} />
        <div className="flex-1 overflow-y-scroll">
          <TodoComponent data={todoList} />
        </div>
      </div>
    </section>
  );
};

export default ActionItemComponent;
