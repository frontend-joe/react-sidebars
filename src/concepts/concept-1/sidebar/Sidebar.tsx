import { Dispatch, SetStateAction, useState } from "react";
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

const NavHeader = ({ onClick }: { onClick: VoidFunction }) => (
  <header className="sidebar-header">
    <button onClick={onClick} type="button">
      <Icon icon="menu_open" />
    </button>
    <img src={Logo} className="sidebar-logo" />
  </header>
);

export const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (item: string) => {
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <nav className="sidebar-nav">
        <NavHeader onClick={() => setIsOpen(false)} />
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
