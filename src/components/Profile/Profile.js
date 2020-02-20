import React from "react";
import s from './Profile.module.css';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo.js";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <Myposts posts = {props.state.posts}/>
    </div>
  );
};

export default Profile;
