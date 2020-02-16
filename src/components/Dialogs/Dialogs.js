import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
           <NavLink to={'/dialogs/1'}> Homer </NavLink>
        </div>
        <div className={s.dialog}>
            <NavLink to={'/dialogs/2'}> Bob </NavLink>
        </div>
        <div className={s.dialog}>
            <NavLink to={'/dialogs/3'}> Janpol </NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to='/dialogs/3'>Louis-Ferdinand</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to='/dialogs/5'>Romain Gary</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>Morning glory</div>
        <div className={s.message}>Evening happy</div>
      </div>
      
    </div>
  );
};
export default Dialogs;
