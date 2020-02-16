import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post.js";

const Myposts = () => {
  return (
 
      <div className={s.postsBlock}>
        My posts
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
        <Post
          message={'Hello, glad to see you again!'}
          likesCounter={10}
        />
        <Post 
          message={'Hi, bro! I am too!'}
          likesCounter={15}
        /> 
        <Post 
          message={'Hi, bro! I am too!'}
          likesCounter={15}
        /> 
        <Post 
          message={'Hi, bro! I am too!'}
          likesCounter={15}
        /> 
        <Post 
          message={'Hi, bro! I am too!'}
          likesCounter={15}
        /> 
      </div>
    
  );
};

export default Myposts;