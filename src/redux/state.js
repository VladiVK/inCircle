/* Data instead of server Data */

import {rerenderEntireTree} from './../render.js'
const state = {
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
    
  
};
/* ================================================================= */
export const addPost = () => {
 let newPost = {
        id:6,
        message: state.profilePage.newPostText,
        likesCounter: 0,
    };
    state.profilePage.posts.push( newPost );
    state.profilePage.newPostText = '';
    // rerender all
    rerenderEntireTree(state);
    
};

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;

    // rerender all
    rerenderEntireTree(state);
};
/* ================================================================= */
export const sendMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    // rerender all
    rerenderEntireTree(state);
};
export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    // rerender all
    rerenderEntireTree(state);

};
export default state;