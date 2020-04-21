import React from "react";
import "./AppContent.css";

const AppContent = () => {
  return (
    <div className="app-content">
      <img
        className="app-content__img"
        src="http://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_006.jpg"
        alt=""
      />
      <div className="app-content__person">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          alt=""
          className="app-content__avatar"
        />
        <div className="app-content__info">
          <div className="app-content__fullname">Андрій О.</div>
          <div className="app-content__birthday">
            День народження: 30 жовтня
          </div>
          <div className="app-content__address">
            {" "}
            Місто: Обухів, Київська область, Україна
          </div>
          <div className="app-content__education">
            Освіта: ReactJS. Путь самурая
          </div>
          <div className="app-content__website">
            {" "}
            Web Site:
            <a href="https://github.com">GitHub</a>
          </div>
        </div>
      </div>
      <div className="app-content__posts">
        <div className="app-content__title">My posts</div>
        <div className="app-content__newpost">
          <input type="text" />
          <br />
          <button>Send</button>
        </div>
        <div className="app-content__post">Post1</div>
        <div className="app-content__post">Post2</div>
      </div>
    </div>
  );
};

export default AppContent;
