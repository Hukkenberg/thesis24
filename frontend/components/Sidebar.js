import React from 'react';

const Sidebar = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex bg-blue-200 p-4 space-x-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={px-4 py-2 ${activeTab === tab ? "bg-green-300" : ""}}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;