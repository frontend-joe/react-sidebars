import "./styles.css";

import joe from "./joe.png";
import logo from "./logo.svg";
import { Dispatch, SetStateAction } from "react";

export const Navbar = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <nav className="navbar">
    <button
      onClick={() => setIsOpen(true)}
      className="burger material-symbols-outlined"
    >
      menu
    </button>
    <div className="logo">
      <img src={logo} />
    </div>
    <div className="center">
      <div className="search">
        <input
          type="text"
          className="search"
          id="search"
          placeholder="Search"
        />
        <button className="material-symbols-outlined">search</button>
      </div>
      <button className="material-symbols-outlined">mic</button>
    </div>
    <nav>
      <button className="material-symbols-outlined">search</button>
      <button className="material-symbols-outlined">mic</button>
      <button className="material-symbols-outlined">video_call</button>
      <button className="material-symbols-outlined">
        <span className="badge">9+</span>notifications
      </button>
      <img src={joe} />
    </nav>
  </nav>
);
