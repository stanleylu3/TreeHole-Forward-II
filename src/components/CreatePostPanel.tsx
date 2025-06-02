// CreatePostPanel.tsx

import React, { useState } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
}

const names = [
  "AnonymousOwl",
  "MysteriousBear",
  "HiddenKoala",
  "ShySloth",
  "MidtermGhost",
];

const CreatePostPanel: React.FC<Props> = ({ show, onClose }) => {
  const [name, setName] = useState(names[0]);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("#Rant");
  const [feeling, setFeeling] = useState("😴 exhausted");

  const handleSwitchName = () => {
    const other = names.filter((n) => n !== name);
    setName(other[Math.floor(Math.random() * other.length)]);
  };

  const charLimit = 500;

  return (
    <>
      <div className={`overlay ${show ? "active" : ""}`} onClick={onClose} />
      <div className={`create-panel ${show ? "slide-in" : ""}`}>
        <div className="create-top">
          <div className="avatar-circle"></div>
          <h2 className="anon-name">{name}</h2>
          <button className="refresh-name" onClick={handleSwitchName}>
            <img src="/refresh_icon.svg" alt="Switch Name" />
          </button>
        </div>

        <label htmlFor="post-content" className="visually-hidden">
          Content
        </label>
        <textarea
          id="post-content"
          rows={6}
          maxLength={charLimit}
          placeholder="Just say something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="char-count">
          {content.length}/{charLimit}
        </div>

        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>#Rant</option>
          <option>#Confession</option>
          <option>#Advice</option>
        </select>

        <label>I'm feeling...</label>
        <select value={feeling} onChange={(e) => setFeeling(e.target.value)}>
          <option>😴 exhausted</option>
          <option>😢 sad</option>
          <option>😊 happy</option>
          <option>😤 frustrated</option>
        </select>

        <button className="fly-button">FLY!</button>
      </div>
    </>
  );
};

export default CreatePostPanel;
