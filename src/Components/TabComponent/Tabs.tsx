import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Tab 3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <p>Tab 1 content</p>
        </TabContent>
        <TabContent id="tab1" activeTab={activeTab}>
          <p>Tab 2 content</p>
        </TabContent>
        <TabContent id="tab1" activeTab={activeTab}>
          <p>Tab 3 content</p>
        </TabContent>
      </div>
    </div>
    </>

  );
};

export default Tabs;