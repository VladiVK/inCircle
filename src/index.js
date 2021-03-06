
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';

import App from './App';

/* Import Data from Redux/state.js */
// import store from './redux/store.js';
import store from './redux/redux-store.js';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        < BrowserRouter >
            <App state={ state } store={store} dispatch={ store.dispatch.bind(store) } />
        </BrowserRouter>, 
    document.getElementById('root')
);
}


rerenderEntireTree( store.getState() );
// чтобы переписать функционал в state.js: 
store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
