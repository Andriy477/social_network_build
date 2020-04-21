import React from "react";
import classes from "./AppNav.module.css";

const AppNav = () => {
  return (
    <nav className={classes.appNav}>
      <div>
        <a href="/profile" className={`${classes.link} ${classes.active}`}>
          Profile
        </a>
      </div>
      <div>
        <a href="/dialogs" className={classes.link}>
          Messages
        </a>
      </div>
      <div>
        <a href="/news" className={classes.link}>
          News
        </a>
      </div>
      <div>
        <a href="/music" className={classes.link}>
          Music
        </a>
      </div>
      <div>
        <a href="/settings" className={classes.link}>
          Settings
        </a>
      </div>
    </nav>
  );
};

export default AppNav;
