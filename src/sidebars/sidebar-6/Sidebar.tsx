import { useState } from "react";
import "./styles.css";
import logo from "./logo.svg";

const menuItems = [
  "Your Work",
  "Activity",
  "Assets",
  "Pinned Items",
  "Following",
  "Trending",
  "Challenges",
  "Spark",
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button
          onClick={toggleSidebar}
          className="sidebar-toggle material-symbols-outlined"
        >
          {isOpen ? "menu_open" : "menu"}
        </button>
        <img src={logo} />
        <label className="create-label">CREATE</label>
        <div className="create">
          <button className="create-button">
            <span className="material-symbols-outlined">table_chart</span>
            <span>Pen</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <button className="create-button">
            <span className="material-symbols-outlined">window</span>
            <span>Collection</span>
          </button>
        </div>
        <nav>
          {menuItems.map((item) => (
            <button key={item}>{item}</button>
          ))}
        </nav>
      </aside>
      <div className="sidebar-border" />
    </>
  );
};
