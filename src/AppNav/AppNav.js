import React from "react";
import "./AppNav.css";

const AppNav = () => {
  return (
    <nav className="app-nav">
      <div>
        <a href="#1" className="app-nav__link">
          Profile
        </a>
      </div>
      <div>
        <a href="#1" className="app-nav__link">
          Messages
        </a>
      </div>
      <div>
        <a href="#2" className="app-nav__link">
          News
        </a>
      </div>
      <div>
        <a href="#1" className="app-nav__link">
          Music
        </a>
      </div>
      <div>
        <a href="#1" className="app-nav__link">
          Settings
        </a>
      </div>
    </nav>
  );
};

export default AppNav;
