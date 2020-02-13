import React from "react";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      Main content
      <div>
        <img src="" alt="" />
      </div>
      <div>avatar + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.item}>Post 1</div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default Profile;
