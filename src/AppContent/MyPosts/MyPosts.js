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
      <Post message="Hello World!" likeCount="15" />
      <Post message="It`s my first post on my blog" likeCount="20" />
    </div>
  );
};
export default MyPosts;
