import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Homer" id="1" />
        <DialogItem name="Bob" id="2" />
        <DialogItem name="Janpol" id="3" />
        <DialogItem name="Louis-Ferdinand" id="4" />
        <DialogItem name="Romain Gary" id="5" />
      </div>
      {/* <div className={`${s.dialog} ${s.active}`}> */}

      <div className={s.messages}>
        <Message message='Bonjour' />
        <Message message='Hello' />
        <Message message='Ciao' />
      </div>
    </div>
  );
};
export default Dialogs;
