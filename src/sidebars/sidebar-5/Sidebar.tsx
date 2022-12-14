import { FC, ReactNode, useState } from "react";
import "./styles.css";

const menuItems = [
  {
    name: "Home",
    icon: "home",
  },
  {
    name: "Apps",
    icon: "apps",
  },
  {
    name: "Create",
    icon: "add_box",
  },
  {
    name: "Profile",
    icon: "person",
  },
  {
    name: "Products",
    icon: "inventory_2",
  },
  {
    name: "Favourites",
    icon: "favorite",
  },
  {
    name: "Search",
    icon: "search",
  },
  {
    name: "Users",
    icon: "person",
  },
];

const Icon = ({ icon }: { icon: string }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const tabs = ["menu", "lock", "settings"];

type HeaderProps = {
  activeTab: number;
  onTabClicked: (tab: number) => void;
};

const NavHeader: FC<HeaderProps> = ({ activeTab, onTabClicked }) => (
  <header className="sidebar-header">
    {tabs.map((tab, index) => (
      <button
        key={tab}
        type="button"
        onClick={() => onTabClicked(index)}
        className={`${activeTab === index ? "active" : ""}`}
      >
        <Icon icon={tab} />
      </button>
    ))}
    <div
      className="underline"
      style={{
        translate: `${activeTab * 100}% 0`,
      }}
    />
  </header>
);

type ButtonProps = {
  name: string;
  icon?: string;
};

const NavButton: FC<ButtonProps> = ({ name, icon }) => (
  <button type="button">
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
  </button>
);

const Tab = ({
  children,
  isActive,
}: {
  children: ReactNode;
  isActive: boolean;
}) => {
  return <div className={isActive ? "active" : ""}>{children}</div>;
};

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClicked = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <aside className="sidebar">
      <div>
        <NavHeader activeTab={activeTab} onTabClicked={handleTabClicked} />
        <div className="tabs">
          <Tab isActive={activeTab === 0}>
            <div>
              {menuItems.map((item) => (
                <NavButton name={item.name} icon={item.icon} />
              ))}
            </div>
          </Tab>
          <Tab isActive={activeTab === 1}>
            <div>
              <form>
                <div className="textbox">
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                  <input placeholder="Name" type="text" required />
                </div>
                <div className="textbox">
                  <span className="material-symbols-outlined">lock</span>
                  <input placeholder="Password" type="password" required />
                </div>
                <div className="textbox">
                  <span className="material-symbols-outlined">email</span>
                  <input placeholder="Email" type="text" required />
                </div>
              </form>
            </div>
          </Tab>
          <Tab isActive={activeTab === 2}>
            <div>
              <form>
                <div className="row">
                  <div className="switch-label">Dark Mode</div>
                  <span className="switch">
                    <input id="switch-round" type="checkbox" />
                    <label htmlFor="switch-round"></label>
                  </span>
                </div>
                <div className="row">
                  <div className="switch-label">Accessibility Mode</div>
                  <span className="switch">
                    <input id="switch-round" type="checkbox" />
                    <label htmlFor="switch-round"></label>
                  </span>
                </div>
                <div className="row">
                  <div className="switch-label">Quirks Mode</div>
                  <span className="switch">
                    <input id="switch-round" type="checkbox" />
                    <label htmlFor="switch-round"></label>
                  </span>
                </div>
              </form>
            </div>
          </Tab>
        </div>
      </div>
    </aside>
  );
};
