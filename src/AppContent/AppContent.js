import React from "react";
import classes from "./AppContent.module.css";

const AppContent = () => {
  return (
    <div className={classes.appContent}>
      <img
        className={classes.img}
        src="http://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_006.jpg"
        alt=""
      />
      <div className={classes.person}>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          alt=""
          className={classes.avatar}
        />
        <div className={classes.info}>
          <div className={classes.fullname}>Андрій О.</div>
          <div className={classes.birthday}>День народження: 30 жовтня</div>
          <div className={classes.address}>
            Місто: Обухів, Київська область, Україна
          </div>
          <div className={classes.education}>Освіта: ReactJS. Путь самурая</div>
          <div className={classes.website}>
            Web Site:
            <a href="https://github.com">GitHub</a>
          </div>
        </div>
      </div>
      <div className={classes.posts}>
        <div className={classes.title}>My posts</div>
        <div className={classes.newpost}>
          <input type="text" />
          <br />
          <button>Send</button>
        </div>
        <div className={classes.post}>Post1</div>
        <div className={classes.post}>Post2</div>
      </div>
    </div>
  );
};

export default AppContent;
