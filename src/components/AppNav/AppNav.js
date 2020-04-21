import React from "react";
import classes from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav className={classes.appNav}>
      <div>
        <NavLink
          to="/profile"
          activeClassName={classes.active}
          className={classes.link}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          activeClassName={classes.active}
          className={classes.link}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          activeClassName={classes.active}
          className={classes.link}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          activeClassName={classes.active}
          className={classes.link}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          activeClassName={classes.active}
          className={classes.link}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default AppNav;
