import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post.js";



const Myposts = (props) => {
  //create array of <Post /> components
  const postsElements = props.posts.map( post => {
    return (
      <Post 
        message = {post.message}
        likesCounter = {post.likesCounter} 
      />
      )
  });
  // temp inner functionality
  let newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    // now call addPost function from state.js
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
 
      <div className={s.postsBlock}>
        My posts
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add Post</button>
        </div>
        {postsElements}
      
      </div>
    
  );
};

export default Myposts;