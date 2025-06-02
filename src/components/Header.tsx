// Header.tsx

import React from "react";

interface HeaderProps {
  onAddPost: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddPost }) => {
  return (
    <header className="header">
      <div className="logo-title">
        <h1>UCI TreeHole</h1>
        <div className="nav-buttons">
          <button className="tab active">🌿 New</button>
          <button className="tab">🔥 HOT</button>
        </div>
      </div>
      <input type="text" className="search" placeholder="Search a post..." />
      <button className="add-post" onClick={onAddPost}>
        <img
          src="/create_post.svg"
          alt="Create Post"
          className="add-post-icon"
        />
      </button>
    </header>
  );
};

export default Header;
