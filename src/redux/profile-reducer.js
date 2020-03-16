const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    {id: 1, message: 'Hello, glad to see you again!', likesCounter: 12},
    {id: 2, message: 'Good morning', likesCounter: 16},
    {id: 3, message: 'Have a nice day!', likesCounter: 10},
    {id: 4, message: 'How are you?', likesCounter: 11},
    {id: 5, message: 'Where are you?', likesCounter: 0},
  ],
  newPostText: 'Hello, friend!',
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let index = Math.max(...state.posts.map(post => post.id));

      let newPost = {
        id: index + 1,
        message: state.newPostText,
        likesCounter: 0
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};

export default profileReducer;
