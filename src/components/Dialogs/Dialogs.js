import React from "react";
import s from "./Dialogs.module.scss";

import DialogItem from './DialogItem/DialogItem.js';
import Message from './Message/Message.js';
import {updateNewMessageTextCreator, sendMessageCreator} from './../../redux/state.js';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  const dialogsElements = state.dialogs.map( d => (<DialogItem name = {d.name} id = {d.id}/>));
  const messagesElements = state.messages.map( m => <Message message={m.message} />);
  // можно в скобки обернуть при таком синтаксисе: 
  // const messagesElements = messagesData.map( m => (<Message message={m.message}) />);
  
  // our <textarea>
  // let newMessageElement = React.createRef();

  const sendMessage = () => {
      props.dispatch( sendMessageCreator() );
  }
  const onMessageChange = (e) => {
    let message = e.target.value;
    props.dispatch( updateNewMessageTextCreator(message) );
  }
  
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      {/* <div className={`${s.dialog} ${s.active}`}> */}

      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea value = {state.newMessageText} onChange={onMessageChange} />
          </div>     
          <div>
            <button onClick={sendMessage}>Send message</button>
          </div>
        </div> 
      </div>
    </div>
  );
};
export default Dialogs;
