import React, { useState } from "react";
import ActionItemComponent from "../components/home/ActionItem.component";

import OverviewComponent from "../components/home/Overview.component";
import TabNavigationComponent from "../components/home/TabNavigation.component";

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <>
      <div className="flex">
        <aside class="w-14 h-screen">
          <div class="h-full pr-3 py-4 bg-white">
            <ul class="space-y-2">
              <li></li>
            </ul>
          </div>
        </aside>
        <main className="flex flex-col h-screen w-full bg-fuchsia-50">
          {selectedTab === 1 ? (
            <OverviewComponent className="flex-1" />
          ) : (
            <ActionItemComponent className="flex-1" />
          )}
          <TabNavigationComponent
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </main>
      </div>
    </>
  );
};

export default HomePage;
