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

    // dispatch = отправить action = роль объекта в котором указн тип действия и аргументы....
    // action {type: 'ADD-POST'} или action {type: 'SEND-UPDATE-NEW-POST', MESSAGE: '~ ~ ~ ~'}
    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let index = Math.max(...this._state.profilePage.posts.map( post => post.id ) );
        
            let newPost = {
                id: index + 1,
                message: this._state.profilePage.newPostText,
                likesCounter: 0,
            };
            this._state.profilePage.posts.push( newPost );
            this._state.profilePage.newPostText = '';
            // rerender all
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            // rerender all
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            // rerender all
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            // rerender all
            this._callSubscriber(this._state);
        }
    },
  
}

export default store;
// window.store = store;