import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post.js";



const Myposts = (props) => {
  //create array of <Post /> components
  const postsElements = props.posts.map( post => <Post message={post.message} likesCounter={post.likesCounter}/>);
  // temp inner functionality
  let newPostElement = React.createRef();

  const addPost = () => {
    // now call addPost function from state.js
    // props.addPost();
    props.dispatch( {type: 'ADD-POST'})
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', newText: text} )
  };

  return (
 
      <div className={s.postsBlock}>
        My posts
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={ addPost }>Add Post</button>
        </div>
        {postsElements}
      
      </div>
    
  );
};

export default Myposts;