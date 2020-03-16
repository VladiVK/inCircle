const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};
export const sendMessageCreator  = () => {
    return { type: SEND_MESSAGE };
}
export const updateNewMessageTextCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: message,
    }
};
export default dialogsReducer;
