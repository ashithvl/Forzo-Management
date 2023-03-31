import React, { useState } from "react";

import ActionItemComponent from "../components/home/ActionItem.component";
import OverviewComponent from "../components/home/Overview.component";
import TabNavigationComponent from "../components/home/TabNavigation.component";
import NavBarComponent from "../components/utils/NavBar.component";

const ProjectPage = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <>
      <div className="flex">
        <NavBarComponent />
        <main className="flex flex-col h-screen w-full bg-purple-50">
          {/* {selectedTab === 1 ? (
            <OverviewComponent className="flex-1" />
          ) : (
            <ActionItemComponent className="flex-1" />
          )}
          <TabNavigationComponent
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          /> */}
        </main>
      </div>
    </>
  );
};

export default ProjectPage;
