import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../utils/utils";

const NavBarComponent = () => {
  const location = useLocation();

  const getNavStyle = (isActive) => {
    if (isActive) {
      return `p-2 rounded text-fuchsia-500 bg-fuchsia-100`;
    } else {
      return `p-2 rounded text-gray-500 bg-white hover:text-fuchsia-500`;
    }
  };

  return (
    <aside className="w-24 h-screen bg-fuchsia-50 pl-4 py-4">
      <div className="h-full flex flex-col items-center justify-center py-4 mr-0 rounded bg-white gap-4">
        {navLinks.map((nav) => {
          return (
            <div className="flex">
              <Link
                className={getNavStyle(location.pathname === nav.path)}
                to={nav.path}
              >
                {nav.icon}
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default NavBarComponent;
