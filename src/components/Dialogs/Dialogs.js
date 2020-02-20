import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from './DialogItem/DialogItem.js';
import Message from './Message/Message.js'

const Dialogs = (props) => {

  const dialogsElements = props.state.dialogs.map( d => (<DialogItem name = {d.name} id = {d.id}/>));
  const messagesElements = props.state.messages.map( m => <Message message={m.message} />);
  // можно в скобки обернуть при таком синтаксисе: 
  // const messagesElements = messagesData.map( m => (<Message message={m.message}) />);
 
  
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      {/* <div className={`${s.dialog} ${s.active}`}> */}

      <div className={s.messages}>
        {messagesElements}
        
      </div>
    </div>
  );
};
export default Dialogs;
