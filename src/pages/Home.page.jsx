import React, { useState } from "react";
import ActionItemComponent from "../components/home/ActionItem.component";

import HomeComponent from "../components/home/Overview.component";
import TabNavigationComponent from "../components/home/TabNavigation.component";

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <main className="flex flex-col h-screen bg-teal-50">
      {selectedTab === 1 ? (
        <HomeComponent className="flex-1" />
      ) : (
        <ActionItemComponent className="flex-1" />
      )}
      <TabNavigationComponent
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </main>
  );
};

export default HomePage;
