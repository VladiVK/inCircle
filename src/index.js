import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* Data instead of server Data */
const posts = [
    {id: 1, message: 'Hello, glad to see you again!', likesCounter: 12},
    {id: 2, message: 'Good morning', likesCounter: 16},
    {id: 3, message: 'Have a nice day!', likesCounter: 10},
    {id: 4, message: 'How are you?', likesCounter: 11},
    {id: 5, message: 'Where are you?', likesCounter: 0},
];
const dialogs = [
    {id: 1, name: 'Homer'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Janpol'},
    {id: 4, name: 'Louis-Ferdinand'},
    {id: 5, name: 'Romain Gary'},
  ];
  
const messages = [
    {id: 1, message: 'Salut, comment vas-tu'},
    {id: 2, message: 'Hello, how are you?'},
    {id: 3, message: 'Ciao, come stai'},
    {id: 4, message: 'Hallo, wie geht es dir'},
    {id: 5, message: 'Hola, como estas'},
];
ReactDOM.render(
    <App 
        posts = {posts}
        dialogs = {dialogs}
        messages = {messages}
    />, 
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
