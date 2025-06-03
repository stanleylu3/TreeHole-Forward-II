import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="filter-top">
        <h2>Filter</h2>
        <label>Category</label>
        <select>
          <option>All</option>
        </select>
        <label>Feeling</label>
        <select>
          <option>All</option>
        </select>
      </div>
      <img src="/treehole_icon.svg" alt="Tree Logo" className="sidebar-logo" />
    </aside>
  );
};

export default Sidebar;
