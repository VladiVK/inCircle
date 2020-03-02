import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Import Data from Redux/state.js */
import {addPost, updateNewPostText, sendMessage, updateNewMessageText} from './redux/state.js'



export const rerenderEntireTree = (state) => {
    ReactDOM.render(
    <App 
        state={state}
        addPost={addPost}
        updateNewPostText = {updateNewPostText}
        sendMessage={sendMessage}
        updateNewMessageText={updateNewMessageText}
     />, 
    document.getElementById('root')
);
}

