
import {combineReducers, createStore} from 'redux';

import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer';


const reducers = combineReducers(
    {
        
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
    }
);
const store = createStore(reducers);

export default store;