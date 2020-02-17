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

  const dialosData = [
    {id: 1, name: 'Homer'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Janpol'},
    {id: 4, name: 'Louis-Ferdinand'},
    {id: 5, name: 'Romain Gary'},
  ];
  const messagesData = [
    {id: 1, message: 'Salut, comment vas-tu'},
    {id: 2, message: 'Hello, how are you?'},
    {id: 3, message: 'Ciao, come stai'},
    {id: 4, message: 'Hallo, wie geht es dir'},
    {id: 5, message: 'Hola, como estas'},
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialosData[0].name}  />
        <DialogItem name={dialosData[1].name}  />
      </div>
      {/* <div className={`${s.dialog} ${s.active}`}> */}

      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        
      </div>
    </div>
  );
};
export default Dialogs;
