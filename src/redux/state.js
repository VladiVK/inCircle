
import profileReducer from '../redux/profile-reducer.js';
import dialogsReducer from '../redux/dialogs-reducer.js';
import sidebarReducer from '../redux/sidebarReducer';
/* Data instead of server Data */

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, glad to see you again!', likesCounter: 12},
                {id: 2, message: 'Good morning', likesCounter: 16},
                {id: 3, message: 'Have a nice day!', likesCounter: 10},
                {id: 4, message: 'How are you?', likesCounter: 11},
                {id: 5, message: 'Where are you?', likesCounter: 0},
            ],
            newPostText: 'Hello, friend!',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Homer'},
                {id: 2, name: 'Bob'},
                {id: 3, name: 'Janpol'},
                {id: 4, name: 'Louis-Ferdinand'},
                {id: 5, name: 'Romain Gary'},
            ],
            messages: [
                {id: 1, message: 'Salut, comment vas-tu'},
                {id: 2, message: 'Hello, how are you?'},
                {id: 3, message: 'Ciao, come stai'},
                {id: 4, message: 'Hallo, wie geht es dir'},
                {id: 5, message: 'Hola, como estas'},
            ],
            newMessageText: 'default message',
        },
        sidebar: {

        },
    }, 
    // это функция-заглушка
    _callSubscriber () {
        console.log('state was changed');
    },


    getState () {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
  
};

export default store;
// window.store = store;