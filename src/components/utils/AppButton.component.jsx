import React from "react";

const AppButton = ({
  label,
  clickHandler = null,
  variant = "contained",
  icon = null,
  size = "small",
}) => {
  const buttonHandler = () => {
    let sizeStyle = size === "medium" ? "text-sm" : "text-xm";
    if (variant === "contained") {
      return (
        <div
          className="flex justify-center flex-row bg-purple-500 p-2 rounded align-middle cursor-pointer"
          onClick={clickHandler}
        >
          <div className="text-purple-500">{icon}</div>
          <p className={`${sizeStyle} text-white`}>{label.toUpperCase()}</p>
        </div>
      );
    } else if (variant === "text") {
      return (
        <div
          className="flex justify-center flex-row  p-2 rounded items-center gap-2 align-middle cursor-pointer hover:bg-purple-100"
          onClick={clickHandler}
        >
          <div className="text-purple-500">{icon}</div>
          <p className={`${sizeStyle} text-purple-500`}>
            {label.toUpperCase()}
          </p>
        </div>
      );
    }
  };
  return buttonHandler();
};

export default AppButton;
