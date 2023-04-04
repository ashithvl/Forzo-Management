import React, { useState } from "react";

import { BsPlusCircle } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";

import { home, todoList } from "../../data/data";
import { ACTION_TYPE, DATE } from "../../utils/utils";
import ActionItemCardComponent from "../cards/ActionItemCard.component";
import TodoCardComponent from "../cards/TodoCard.component";
import AddTodoComponent from "../AddTodo.component";

import HeaderComponent from "../boards/Header.component";
import moment from "moment";

const ActionItemComponent = () => {
  const [todos, setTodos] = useState(
    todoList.sort((initial, second) =>
      moment(initial.dueDate, DATE.DMY).diff(moment(second.dueDate, DATE.DMY))
    )
  );

  const getActionType = (data) => {
    if (data.requirementStatus === 2) return ACTION_TYPE.REQUIREMENT;
    else if (data.actual > data.planned) return ACTION_TYPE.HOURS;
    else if (data.uat.customerDefects !== 0 || data.uat.internalDefects !== 0)
      return ACTION_TYPE.DEFECT;
    else return null;
  };

  return (
    <section className="grid grid-cols-2 gap-1 h-full px-2">
      <div className="flex flex-col min-h-0 rounded p-2 my-4">
        <HeaderComponent title="Action Required" icon={<MdPendingActions />} />
        <div className="flex-1 overflow-y-scroll">
          {home.map((data) => {
            if (getActionType(data))
              return (
                <ActionItemCardComponent
                  key={data.releaseName}
                  data={data}
                  type={getActionType(data)}
                />
              );
            else return null;
          })}
        </div>
      </div>
      <div className="flex flex-col min-h-0 rounded p-2 my-4">
        <HeaderComponent title="Todo" icon={<BsPlusCircle />} />
        <div className="flex-1 overflow-y-scroll">
          {todos.length > 0
            ? todos.map((data) => (
                <TodoCardComponent key={data.id} data={data} />
              ))
            : null}
        </div>
        <AddTodoComponent setTodos={setTodos} todos={todos} />
      </div>
    </section>
  );
};

export default ActionItemComponent;
