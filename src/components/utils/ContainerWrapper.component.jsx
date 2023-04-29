import React from "react";

const ContainerWrapper = ({ children }) => {
  return (
    <section className="grid grid-cols-1 gap-1 h-full px-4">
      <div className="flex flex-col min-h-0 my-4">{children}</div>
    </section>
  );
};

export default ContainerWrapper;
