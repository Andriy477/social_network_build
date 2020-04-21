import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <div className={classes.title}>My posts</div>
      <div className={classes.newpost}>
        <textarea />
        <br />
        <button>Send</button>
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};
export default MyPosts;
