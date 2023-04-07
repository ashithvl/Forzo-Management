import React from "react";

const AppButton = ({ label, variant, clickHandler, icon, style }) => {
  const buttonHandler = () => {
    if (variant === "contained") {
      console.log("var", style);
      return (
        <div
          style={{ style }}
          className="flex justify-center flex-row bg-purple-600 p-2 rounded align-middle cursor-pointer"
          onClick={clickHandler}
        >
          {icon}
          <p className="text-sm text-white">{label.toUpperCase()}</p>
        </div>
      );
    } else if (variant === "text") {
      return (
        <div
          style={{ style }}
          className="flex justify-center flex-row  p-2 rounded items-center gap-2 align-middle cursor-pointer hover:bg-purple-100"
        >
          {icon}
          <p className="text-base text-purple-600">{label.toUpperCase()}</p>
        </div>
      );
    }
  };
  return buttonHandler();
};

export default AppButton;
