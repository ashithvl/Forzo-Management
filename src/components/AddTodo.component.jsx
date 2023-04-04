import moment from "moment";
import React, { useState } from "react";
import { BsCalendar } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { DATE } from "../utils/utils";

const INITIAL_TODO_STATE = {
  id: 1,
  title: "",
  description: "",
  dueDate: moment(Date.now()).format(DATE.DMY).toString(),
};

const AddTodoComponent = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState(INITIAL_TODO_STATE);

  const changeHandler = (event, objectName) => {
    if (objectName === "title") {
      setTodo({ ...todo, title: event.target.value });
    }
    if (objectName === "description") {
      setTodo({ ...todo, description: event.target.value });
    }
  };

  const keyDownHandler = (event, objectName) => {
    if (
      event.key === "Enter" &&
      event.shiftKey &&
      objectName === "description"
    ) {
      event.preventDefault();
      setTodo({
        ...todo,
        description: `${event.target.value}\n`,
      });
    } else if (event.key === "Enter") {
      event.preventDefault();
      addTodoHandler();
    }
  };

  const addTodoHandler = () => {
    const newTodo = { ...todo, id: todos.length + 1 };
    todos.push(newTodo);
    const sortedTodos = todos.sort((initial, second) =>
      moment(initial.dueDate, DATE.DMY).diff(moment(second.dueDate, DATE.DMY))
    );
    setTodos([...sortedTodos]);
    setTodo(INITIAL_TODO_STATE);
  };

  return (
    <div className="rounded my-4 bg-neutral-50 border border-neutral-100 py-2">
      <div className="flex flex-col justify-between m-2">
        <div className="flex flex-col px-2">
          <input
            className="text-neutral-700 bg-neutral-50 text-md focus:outline-none"
            type={"text"}
            value={todo.title}
            onChange={(e) => changeHandler(e, "title")}
            placeholder={"Enter task here..."}
            onKeyDown={(e) => keyDownHandler(e, "title")}
          />

          <textarea
            className="text-neutral-700 bg-neutral-50 focus:outline-none pb-4 my-2"
            type={"text"}
            value={todo.description}
            onChange={(e) => changeHandler(e, "description")}
            placeholder={"Enter description here..."}
            onKeyDown={(e) => keyDownHandler(e, "description")}
          />
        </div>
        <div className="flex flex-row justify-between mx-2">
          <button className="flex flex-row border items-center rounded gap-2 text-xs p-2">
            <p className="text-neutral-500">Due Date</p>
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              className="focus:outline-none"
              value={moment(todo.dueDate).format("YYYY-MM-DD").toString()}
              min={moment(todo.dueDate).format("YYYY-MM-DD").toString()}
              onChange={(e) => {
                setTodo({
                  ...todo,
                  dueDate: moment(e.target.value, "YYYY-MM-DD"),
                });
              }}
            />
          </button>
          <button
            className="px-2 border border-purple-50 rounded bg-purple-200 text-purple-700"
            onClick={addTodoHandler}
          >
            <MdSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoComponent;
