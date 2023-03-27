import React from "react";

const HeaderComponent = ({ title, icon, count }) => {
  return (
    <div className="flex flex-row items-center border-teal-50 rounded p-4 bg-teal-100">
      <p className="text-teal-600">{title}</p>
      <div className="text-teal-600 flex-1 ml-2">{icon}</div>
      {count && (
        <div className="border rounded-full w-6 h-6 bg-neutral-50 border-neutral-50 text-neutral-600">
          <p className="p-0.5 text-sm text-center">{count}</p>
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
