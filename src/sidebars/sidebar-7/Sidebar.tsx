import { FC, useState } from "react";
import "./styles.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

const menuItems = [
  {
    name: "Home",
    icon: "home",
  },
  {
    name: "Apps",
    icon: "dashboard",
  },
  {
    name: "Create",
    icon: "add_box",
  },
  {
    name: "Favourites",
    icon: "favorite",
  },
];

const Icon = ({ icon }: { icon: string }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const tabs = ["menu", "lock", "settings"];

type NavProps = {
  activeTab: number;
  onTabClicked: (tab: number) => void;
};

const Nav: FC<NavProps> = ({ activeTab, onTabClicked }) => (
  <header className="tabs">
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

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClicked = (index: number) => setActiveTab(index);

  return (
    <aside className="sidebar">
      <div>
        <Nav activeTab={activeTab} onTabClicked={handleTabClicked} />

        <ReactCarousel
          className="react-carousel"
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          swipeable={true}
          emulateTouch={true}
          selectedItem={activeTab}
          onChange={handleTabClicked}
        >
          <div>
            {menuItems.map((item) => (
              <NavButton name={item.name} icon={item.icon} />
            ))}
          </div>
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
        </ReactCarousel>
      </div>
    </aside>
  );
};
