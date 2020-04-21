import React from "react";
import classes from "./AppNav.module.css";

const AppNav = () => {
  return (
    <nav className={classes.appNav}>
      <div>
        <a href="#1" className={`${classes.link} ${classes.active}`}>
          Profile
        </a>
      </div>
      <div>
        <a href="#1" className={classes.link}>
          Messages
        </a>
      </div>
      <div>
        <a href="#2" className={classes.link}>
          News
        </a>
      </div>
      <div>
        <a href="#1" className={classes.link}>
          Music
        </a>
      </div>
      <div>
        <a href="#1" className={classes.link}>
          Settings
        </a>
      </div>
    </nav>
  );
};

export default AppNav;
