import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post.js";

const Myposts = () => {
  return (
 
      <div className={s.content}>
        My posts
        <div>New post</div>
        <Post />
        <Post />
      </div>
    
  );
};

export default Myposts;