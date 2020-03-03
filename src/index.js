
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Import Data from Redux/state.js */
import state from './redux/state.js';
import {addPost, updateNewPostText, sendMessage, updateNewMessageText, subscribe} from './redux/state.js'



const rerenderEntireTree = (state) => {
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


rerenderEntireTree(state);
subscribe(rerenderEntireTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
