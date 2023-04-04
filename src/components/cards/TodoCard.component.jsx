import React from "react";
import ReactTimeAgo from "react-time-ago";
import moment from "moment/moment";
import { DATE } from "../../utils/utils";

const TodoCardComponent = ({ data }) => {
  return (
    <div className="flex border-white rounded justify-between items-end my-4 bg-white p-4">
      <div className="flex-1">
        <p className="text-neutral-700 text-md">{data.title}</p>
        <p className="text-neutral-500 text-sm">{data?.description}</p>
      </div>
      <div>
        {moment(data.dueDate, DATE.DMY).isAfter(Date.now()) ||
        moment(data.dueDate, DATE.DMY).isSame(
          moment(Date.now()).format(DATE.DMY)
        ) ? (
          <p className="text-xs text-neutral-400">
            due{" "}
            <ReactTimeAgo
              date={moment(data.dueDate, DATE.DMY)
                .add(moment.duration("23:99"))
                .toDate()}
              locale="en-US"
              suffix="from now"
            />
          </p>
        ) : (
          <p className="text-xs text-red-400">
            expired{" "}
            <ReactTimeAgo
              date={moment(data.dueDate, DATE.DMY)
                .add(moment.duration("23:99"))
                .toDate()}
              locale="en-US"
            />
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoCardComponent;
