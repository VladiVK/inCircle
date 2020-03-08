
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Import Data from Redux/state.js */
import store from './redux/state.js';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
    <App state = { state } dispatch = { store.dispatch.bind(store) } />, 
    document.getElementById('root')
);
}


rerenderEntireTree( store.getState() );
// чтобы переписать функционал в state.js: 
store.subscribe( rerenderEntireTree );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
