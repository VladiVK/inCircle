import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
        <div className={s.item}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFB2qaIE08h1iDcEZLSHgrngdLW2kFkGLPLcVDO6_LVN5d3XSr"
            alt=""
          />
          <span>User: {props.message}</span>
          <div>
            <span>likes: {props.likesCounter}</span>
          </div>
        </div>
  );
};

export default Post;