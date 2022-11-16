import { useState } from "react";
import "./styles.css";
import Logo from "./logo.svg";
import { Icon } from "./Icon";
import { Button } from "./Button";

const menuItems = [
  {
    name: "Apps",
    icon: "apps",
  },
  {
    name: "Subscriptions",
    icon: "subscriptions",
  },
  {
    name: "Library",
    icon: "video_library",
  },
  {
    name: "Explore",
    icon: "explore",
  },
  {
    name: "Trending",
    icon: "mode_heat",
  },
  {
    name: "Music",
    icon: "music_note",
  },
  {
    name: "Watch Later",
    icon: "schedule",
  },
  {
    name: "Settings",
    icon: "settings",
  },
  {
    name: "Privacy",
    icon: "lock",
  },
];

const NavHeader = () => (
  <header className="sidebar-header">
    <button type="button">
      <Icon icon="menu" />
    </button>
    <img src={Logo} className="sidebar-logo" />
  </header>
);

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (item: string) => {
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavHeader />
        {menuItems.map((item) => (
          <Button
            onClick={handleClick}
            name={item.name}
            icon={item.icon}
            isActive={activeItem === item.name}
          />
        ))}
      </nav>
    </aside>
  );
};
