import React from "react";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.post}>
      <div>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          alt=""
        />
      </div>
      <div className={classes.text}>Post #1</div>
    </div>
  );
};

export default Post;
