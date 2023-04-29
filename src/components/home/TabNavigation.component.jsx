import React from "react";

const TabNavigationComponent = ({ setSelectedTab, selectedTab }) => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="grid max-w-xs grid-cols-2 gap-1 p-1 mx-auto my-1 bg-purple-100 rounded-lg">
        <button
          type="button"
          className={`px-5 py-1.5 text-xs rounded ${
            selectedTab === 1
              ? `text-white bg-purple-500 cursor-pointer`
              : `hover:font-medium text-purple-600 hover:text-purple-700`
          }`}
          onClick={() => {
            return selectedTab !== 1 ? setSelectedTab(1) : null;
          }}
        >
          Overview
        </button>
        <button
          type="button"
          className={`px-5 py-1.5 text-xs rounded ${
            selectedTab === 2
              ? `text-white bg-purple-500 cursor-pointer`
              : `hover:font-medium text-purple-600 hover:text-purple-700`
          }`}
          onClick={() => {
            return selectedTab !== 2 ? setSelectedTab(2) : null;
          }}
        >
          Action Items
        </button>
      </div>
    </div>
  );
};

export default TabNavigationComponent;
