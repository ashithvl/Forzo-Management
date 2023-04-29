import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let getHoverStyle = (endPoint) =>
    endPoint !== pathname ? "hover:underline hover:text-purple-500" : "";

  let getEndpoint = (endPoint) => (endPoint !== pathname ? endPoint : null);

  return (
    <div className="w-auto flex flex-row">
      {breadcrumbs.map((item, index) => {
        return (
          <div
            key={item.name}
            className="flex flex-row items-center mr-2 mb-4 cursor-pointer"
            onClick={() => navigate(getEndpoint(item.endPoint))}
          >
            <p className={`mr-3 text-sm ${getHoverStyle(item.endPoint)}`}>
              {item.name}
            </p>
            {index !== breadcrumbs.length - 1 && (
              <BsCircleFill className="text-neutral-500" size={4} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
