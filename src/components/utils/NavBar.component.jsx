import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../utils/utils";

const NavBarComponent = () => {
  const location = useLocation();

  const getNavStyle = (isActive) => {
    if (isActive) {
      return `p-2 rounded text-purple-500 bg-purple-100`;
    } else {
      return `p-2 rounded text-gray-500 bg-white hover:text-purple-500`;
    }
  };

  return (
    <aside className="w-24 h-screen bg-purple-50 pl-4 py-4">
      <div className="h-full flex flex-col items-center justify-center py-4 mr-0 rounded bg-white gap-4">
        {navLinks.map((nav) => {
          return (
            <div className="flex" key={nav.path}>
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
