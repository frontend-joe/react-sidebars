import { FC, useState } from "react";
import "./styles.css";
import Logo from "./logo.png";

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
    items: ["Movies", "Live", "Gaming", "News"],
  },
  {
    name: "Settings",
    icon: "settings",
    items: ["History", "Help", "Feedback", "Reports"],
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
];

const Icon = ({ icon }: { icon: string }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const NavHeader = () => (
  <header className="sidebar-header">
    <button type="button">
      <Icon icon="menu" />
    </button>
    <img src={Logo} className="sidebar-logo" />
  </header>
);

type ButtonProps = {
  onClick: (item: string) => void;
  name: string;
  icon?: string;
  isActive: boolean;
  hasSubNav?: boolean;
};

const NavButton: FC<ButtonProps> = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
}) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={isActive ? "active" : ""}
  >
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
    {hasSubNav && <Icon icon={`expand_${isActive ? "less" : "more"}`} />}
  </button>
);

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (item: string) => {
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };

  const isSubNavOpen = (item: string, items: string[]) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavHeader />
        {menuItems.map((item) => (
          <>
            {!item.items && (
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
              />
            )}
            {item.items && (
              <>
                <NavButton
                  onClick={handleClick}
                  name={item.name}
                  icon={item.icon}
                  isActive={activeItem === item.name}
                  hasSubNav={!!item.items}
                />
                <div
                  className={`sub-nav ${
                    isSubNavOpen(item.name, item.items) ? "open" : ""
                  }`}
                >
                  {item.items.map((subItem) => (
                    <NavButton
                      onClick={handleClick}
                      name={subItem}
                      isActive={activeItem === subItem}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ))}
      </nav>
    </aside>
  );
};
