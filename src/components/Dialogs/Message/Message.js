import React from "react";
import s from "./../Dialogs.module.css";


const Message = (props) => {
    let newMessageElement = React.createRef();
    const addMessage = () => {
        let newMessage = newMessageElement.current.value;
        alert(newMessage);
    }

    return (
        <div className={s.message}>
            <span>{props.message}</span>
            <textarea ref={newMessageElement} cols="20" rows="2"></textarea>
            <button onClick={addMessage}>Send message</button>

        </div>

    );
};
export default Message;