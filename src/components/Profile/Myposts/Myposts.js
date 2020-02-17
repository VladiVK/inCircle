import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post.js";

const Myposts = () => {
  const posts = [
    {id: 1, message: 'Hello, glad to see you again!', likesCounter: 12},
    {id: 2, message: 'Good morning', likesCounter: 16},
    {id: 3, message: 'Have a nice day!', likesCounter: 10},
    {id: 4, message: 'How are you?', likesCounter: 11},
    {id: 5, message: 'Where are you?', likesCounter: 0},
  ];
  const postsElements = posts.map( p => {
    return (
      <Post 
        message = {p.message}
        likesCounter = {p.likesCounter} 
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