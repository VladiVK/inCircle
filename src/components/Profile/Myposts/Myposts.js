import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post.js";

const Myposts = () => {
  const postData = [
    {id: 1, message: 'Hello, glad to see you again!', likesCounter: 12},
    {id: 2, message: 'Good morning', likesCounter: 16},
    {id: 3, message: 'Have a nice day!', likesCounter: 10},
    {id: 4, message: 'How are you?', likesCounter: 11},
    {id: 5, message: 'Where are you?', likesCounter: 0},
  ];
  return (
 
      <div className={s.postsBlock}>
        My posts
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
        <Post message={postData[0].message} likesCounter={postData[0].likesCounter} />
        <Post message={postData[1].message} likesCounter={postData[1].likesCounter} />
        <Post message={postData[2].message} likesCounter={postData[2].likesCounter} />
      
      </div>
    
  );
};

export default Myposts;