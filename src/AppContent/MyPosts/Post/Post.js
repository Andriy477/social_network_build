import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          alt=""
        />
      </div>
      <div className={classes.text}>{props.message}</div>
      <div className={classes.like}>{props.likeCount} LIKE</div>
    </div>
  );
};

export default Post;
