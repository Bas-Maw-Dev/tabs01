import React from "react";

const TabNavItem = ({ id, title, activeTab }: {id: string, title: string, activeTab: string}) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li 
    onClick={handleClick}
    className={activeTab === id ? "active" : ""}
    >
      { title }
    </li>
  );
};
export default TabNavItem;