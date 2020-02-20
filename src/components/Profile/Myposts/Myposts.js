import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post.js";



const Myposts = (props) => {

  const postsElements = props.posts.map( post => {
    return (
      <Post 
        message = {post.message}
        likesCounter = {post.likesCounter} 
      />
      )
  });


  return (
 
      <div className={s.postsBlock}>
        My posts
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
        {postsElements}
      
      </div>
    
  );
};

export default Myposts;