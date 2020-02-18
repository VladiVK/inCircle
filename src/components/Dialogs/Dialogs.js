import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from './DialogItem/DialogItem.js';
import Message from './Message/Message.js'

const Dialogs = (props) => {

  // const dialogsData = [
  //   {id: 1, name: 'Homer'},
  //   {id: 2, name: 'Bob'},
  //   {id: 3, name: 'Janpol'},
  //   {id: 4, name: 'Louis-Ferdinand'},
  //   {id: 5, name: 'Romain Gary'},
  // ];
  
  // const messagesData = [
  //   {id: 1, message: 'Salut, comment vas-tu'},
  //   {id: 2, message: 'Hello, how are you?'},
  //   {id: 3, message: 'Ciao, come stai'},
  //   {id: 4, message: 'Hallo, wie geht es dir'},
  //   {id: 5, message: 'Hola, como estas'},
  // ];
  const dialogsElements = props.dialogs.map( d => (<DialogItem name = {d.name} id = {d.id}/>));
  const messagesElements = props.messages.map( m => <Message message={m.message} />);
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
