/* Data instead of server Data */

const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, glad to see you again!', likesCounter: 12},
            {id: 2, message: 'Good morning', likesCounter: 16},
            {id: 3, message: 'Have a nice day!', likesCounter: 10},
            {id: 4, message: 'How are you?', likesCounter: 11},
            {id: 5, message: 'Where are you?', likesCounter: 0},
        ],
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
    },
    
  
};

export default state;