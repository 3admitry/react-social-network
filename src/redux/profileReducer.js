const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            if (!state.newPostText) return false;
            let newpost = {id: 7, message: state.newPostText, likeCount: 0};
            state.posts.push(newpost)
            state.newPostText = ''
            return state;
        case CHANGE_TEXT_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changeTextPostActionCreator = (text) => ({type: CHANGE_TEXT_POST, newText: text})

export default profileReducer;