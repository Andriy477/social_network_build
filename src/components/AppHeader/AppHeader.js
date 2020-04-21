import React from "react";
import classes from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={classes.appHeader}>
      <img
        className={classes.logo}
        src="https://cdn3.f-cdn.com//files/download/70016655/Logo%202.png"
        alt=""
      />
    </header>
  );
};

export default AppHeader;
